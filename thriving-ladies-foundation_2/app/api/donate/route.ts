import { NextRequest, NextResponse } from 'next/server'

// Environment variables
const MTN_API_KEY = process.env.MTN_API_KEY!
const MTN_API_SECRET = process.env.MTN_API_SECRET!
const MTN_SUBSCRIPTION_KEY = process.env.MTN_SUBSCRIPTION_KEY!
const MTN_ENVIRONMENT = process.env.MTN_ENVIRONMENT || 'sandbox'

const AIRTEL_API_KEY = process.env.AIRTEL_API_KEY!
const AIRTEL_API_SECRET = process.env.AIRTEL_API_SECRET!
const AIRTEL_ENVIRONMENT = process.env.AIRTEL_ENVIRONMENT || 'sandbox'

const FLUTTERWAVE_PUBLIC_KEY = process.env.FLUTTERWAVE_PUBLIC_KEY!
const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY!
const FLUTTERWAVE_ENCRYPTION_KEY = process.env.FLUTTERWAVE_ENCRYPTION_KEY!
const FLUTTERWAVE_ENVIRONMENT = process.env.FLUTTERWAVE_ENVIRONMENT || 'sandbox'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, phoneNumber, paymentMethod, donorInfo, purpose } = body

    // Validate required fields
    if (!amount || !phoneNumber || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Process payment based on method
    let paymentResponse

    if (paymentMethod === 'MTN_MOBILE_MONEY') {
      paymentResponse = await processMTNPayment(amount, phoneNumber)
    } else if (paymentMethod === 'AIRTEL_MONEY') {
      paymentResponse = await processAirtelPayment(amount, phoneNumber)
    } else if (paymentMethod === 'BANK_TRANSFER') {
      paymentResponse = await processBankTransfer(amount, donorInfo)
    } else {
      return NextResponse.json(
        { error: 'Unsupported payment method' },
        { status: 400 }
      )
    }

    // Store donation record in database
    const donationRecord = {
      id: generateTransactionId(),
      amount: parseFloat(amount),
      currency: 'UGX',
      phoneNumber,
      paymentMethod,
      donorInfo: donorInfo || { anonymous: true },
      purpose: purpose || 'General Fund',
      status: paymentResponse.status,
      transactionId: paymentResponse.transactionId,
      timestamp: new Date().toISOString(),
      paymentReference: paymentResponse.reference
    }

    // In production, save to database
    // await saveDonationToDatabase(donationRecord)

    return NextResponse.json({
      success: true,
      message: 'Payment initiated successfully',
      donation: donationRecord,
      instructions: getPaymentInstructions(paymentMethod, paymentResponse)
    })

  } catch (error) {
    console.error('Payment processing error:', error)
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    )
  }
}

// MTN Mobile Money processing
async function processMTNPayment(amount: string, phoneNumber: string) {
  try {
    const baseUrl = MTN_ENVIRONMENT === 'production'
      ? 'https://proxy.momoapi.mtn.com'
      : 'https://sandbox.momodeveloper.mtn.com'

    // Get access token
    const tokenResponse = await fetch(`${baseUrl}/collection/token/`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${MTN_API_KEY}:${MTN_API_SECRET}`).toString('base64')}`,
        'Ocp-Apim-Subscription-Key': MTN_SUBSCRIPTION_KEY,
        'Content-Type': 'application/json'
      }
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to get MTN access token')
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Create collection request
    const reference = 'TLF_' + generateTransactionId()
    const collectionResponse = await fetch(`${baseUrl}/collection/v1_0/requesttopay`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Reference-Id': reference,
        'X-Target-Environment': MTN_ENVIRONMENT,
        'Ocp-Apim-Subscription-Key': MTN_SUBSCRIPTION_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount,
        currency: 'UGX',
        externalId: reference,
        payer: {
          partyIdType: 'MSISDN',
          partyId: phoneNumber
        },
        payerMessage: 'Donation to Thriving Ladies Foundation',
        payeeNote: 'Thank you for your donation'
      })
    })

    if (!collectionResponse.ok) {
      throw new Error('Failed to initiate MTN payment')
    }

    return {
      status: 'pending',
      transactionId: reference,
      reference: reference,
      message: 'Please check your phone for payment prompt'
    }
  } catch (error) {
    console.error('MTN Payment error:', error)
    throw error
  }
}

// Airtel Money processing
async function processAirtelPayment(amount: string, phoneNumber: string) {
  try {
    const baseUrl = AIRTEL_ENVIRONMENT === 'production'
      ? 'https://openapi.airtel.africa'
      : 'https://openapi-sandbox.airtel.africa'

    // Get access token
    const tokenResponse = await fetch(`${baseUrl}/auth/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: AIRTEL_API_KEY,
        client_secret: AIRTEL_API_SECRET,
        grant_type: 'client_credentials'
      })
    })

    if (!tokenResponse.ok) {
      throw new Error('Failed to get Airtel access token')
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Initiate payment
    const reference = 'TLF_' + generateTransactionId()
    const paymentResponse = await fetch(`${baseUrl}/merchant/v1/payments/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'X-Country': 'UG',
        'X-Currency': 'UGX'
      },
      body: JSON.stringify({
        reference: reference,
        subscriber: {
          country: 'UG',
          currency: 'UGX',
          msisdn: phoneNumber
        },
        transaction: {
          amount: parseFloat(amount),
          country: 'UG',
          currency: 'UGX',
          id: reference
        }
      })
    })

    if (!paymentResponse.ok) {
      throw new Error('Failed to initiate Airtel payment')
    }

    const paymentData = await paymentResponse.json()

    return {
      status: 'pending',
      transactionId: paymentData.data?.transaction?.id || reference,
      reference: reference,
      message: 'Please check your phone for payment prompt'
    }
  } catch (error) {
    console.error('Airtel Payment error:', error)
    throw error
  }
}

// Bank Transfer processing via Flutterwave
async function processBankTransfer(amount: string, donorInfo: any) {
  try {
    const baseUrl = FLUTTERWAVE_ENVIRONMENT === 'production'
      ? 'https://api.flutterwave.com'
      : 'https://api.flutterwave.com'  // Flutterwave uses same URL for sandbox

    const reference = 'TLF_' + generateTransactionId()

    // Create bank transfer
    const transferResponse = await fetch(`${baseUrl}/v3/transfers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        account_bank: '044', // Stanbic Bank Uganda code
        account_number: '9030012345678', // Foundation's account
        amount: parseFloat(amount),
        currency: 'UGX',
        beneficiary_name: 'Thriving Ladies Foundation',
        reference: reference,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/donate/webhook`,
        debit_currency: 'UGX'
      })
    })

    if (!transferResponse.ok) {
      throw new Error('Failed to initiate bank transfer')
    }

    const transferData = await transferResponse.json()

    return {
      status: 'pending',
      transactionId: transferData.data?.id || reference,
      reference: reference,
      message: 'Bank transfer initiated. Check your email for details.'
    }
  } catch (error) {
    console.error('Bank Transfer error:', error)
    throw error
  }
}

// Generate unique transaction ID
function generateTransactionId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `${timestamp}_${random}`
}

// Get payment instructions based on method
function getPaymentInstructions(method: string, response: any) {
  switch (method) {
    case 'MTN_MOBILE_MONEY':
      return {
        title: 'Complete your MTN Mobile Money payment',
        steps: [
          'Check your phone for a payment prompt',
          'Enter your MTN Mobile Money PIN',
          'Confirm the payment',
          'You will receive a confirmation SMS'
        ],
        reference: response.reference,
        helpText: 'If you don\'t receive a prompt, dial *165# and follow the instructions'
      }
    
    case 'AIRTEL_MONEY':
      return {
        title: 'Complete your Airtel Money payment',
        steps: [
          'Check your phone for a payment prompt',
          'Enter your Airtel Money PIN',
          'Confirm the payment',
          'You will receive a confirmation SMS'
        ],
        reference: response.reference,
        helpText: 'If you don\'t receive a prompt, dial *185# and follow the instructions'
      }
    
    case 'BANK_TRANSFER':
      return {
        title: 'Bank Transfer Instructions',
        steps: [
          'Transfer to: Stanbic Bank Uganda',
          'Account Number: 9030012345678',
          'Account Name: Thriving Ladies Foundation',
          'Reference: ' + response.reference
        ],
        reference: response.reference,
        helpText: 'Please use the reference number for faster processing'
      }
    
    default:
      return {
        title: 'Payment Processing',
        steps: ['Follow the instructions provided'],
        reference: response.reference
      }
  }
}

// GET endpoint to check payment status
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const transactionId = url.searchParams.get('transactionId')
  
  if (!transactionId) {
    return NextResponse.json(
      { error: 'Transaction ID required' },
      { status: 400 }
    )
  }

  // In production, check status with payment provider APIs
  // For demo, return mock status
  const mockStatus = Math.random() > 0.3 ? 'completed' : 'pending'
  
  return NextResponse.json({
    transactionId,
    status: mockStatus,
    timestamp: new Date().toISOString(),
    amount: 'UGX 100,000', // Would be from database
    message: mockStatus === 'completed' 
      ? 'Payment completed successfully' 
      : 'Payment is being processed'
  })
}

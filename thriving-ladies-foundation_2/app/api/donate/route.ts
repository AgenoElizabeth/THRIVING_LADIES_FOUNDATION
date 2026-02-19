import { NextRequest, NextResponse } from 'next/server'

// Environment variables
const FLUTTERWAVE_PUBLIC_KEY = process.env.FLUTTERWAVE_PUBLIC_KEY!
const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY!
const FLUTTERWAVE_ENCRYPTION_KEY = process.env.FLUTTERWAVE_ENCRYPTION_KEY!
const FLUTTERWAVE_ENVIRONMENT = process.env.FLUTTERWAVE_ENVIRONMENT || 'sandbox'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

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

    // Process payment using Flutterwave
    const paymentResponse = await processFlutterwavePayment(amount, phoneNumber, paymentMethod, donorInfo)

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
      { error: error instanceof Error ? error.message : 'Payment processing failed' },
      { status: 500 }
    )
  }
}

// Flutterwave payment processing for Uganda
async function processFlutterwavePayment(amount: string, phoneNumber: string, paymentMethod: string, donorInfo: any) {
  try {
    const baseUrl = 'https://api.flutterwave.com' // Same for sandbox and production

    const reference = 'TLF_' + generateTransactionId()

    let paymentData: any

    if (paymentMethod === 'BANK_TRANSFER') {
      // For Centenary Bank transfer
      paymentData = {
        account_bank: '31', // Centenary Bank Uganda
        account_number: '1234567890', // Foundation's account number
        amount: parseFloat(amount),
        currency: 'UGX',
        beneficiary_name: 'Thriving Ladies Foundation',
        reference: reference,
        callback_url: `${BASE_URL}/api/donate/webhook`,
        debit_currency: 'UGX'
      }

      const transferResponse = await fetch(`${baseUrl}/v3/transfers`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      })

      if (!transferResponse.ok) {
        const errorData = await transferResponse.json()
        throw new Error(`Bank transfer failed: ${errorData.message}`)
      }

      const transferResult = await transferResponse.json()

      return {
        status: 'pending',
        transactionId: transferResult.data?.id || reference,
        reference: reference,
        message: 'Bank transfer initiated. Please check your banking app for details.'
      }
    } else {
      // For Mobile Money (MTN and Airtel)
      paymentData = {
        tx_ref: reference,
        amount: parseFloat(amount),
        currency: 'UGX',
        redirect_url: `${BASE_URL}/donate/success`,
        payment_options: 'mobilemoneyuganda',
        customer: {
          email: donorInfo?.email || 'donor@thrivingladies.org',
          phone_number: phoneNumber,
          name: donorInfo?.name || 'Anonymous Donor'
        },
        customizations: {
          title: 'Donation to Thriving Ladies Foundation',
          description: 'Supporting girls\' education and health in Uganda',
          logo: `${BASE_URL}/placeholder-logo.png`
        },
        meta: {
          consumer_id: phoneNumber,
          consumer_mac: generateTransactionId().substring(0, 12)
        }
      }

      // Initiate payment
      const paymentResponse = await fetch(`${baseUrl}/v3/payments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      })

      if (!paymentResponse.ok) {
        const errorData = await paymentResponse.json()
        console.error('Flutterwave API Error:', errorData)
        throw new Error(`Payment initiation failed: ${errorData.message || 'Unknown error'}`)
      }

      const paymentResult = await paymentResponse.json()

      if (paymentResult.status === 'success') {
        return {
          status: 'pending',
          transactionId: paymentResult.data.id,
          reference: reference,
          flutterwaveRef: paymentResult.data.flw_ref,
          paymentLink: paymentResult.data.link,
          message: 'Payment initiated successfully. Please complete the payment on the next page.'
        }
      } else {
        throw new Error(`Payment initiation failed: ${paymentResult.message}`)
      }
    }
  } catch (error) {
    console.error('Flutterwave Payment error:', error)
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
          'You will be redirected to Flutterwave\'s secure payment page',
          'Select MTN Mobile Money as your payment method',
          'Enter your MTN number if prompted',
          'Check your phone for a payment prompt',
          'Enter your MTN Mobile Money PIN',
          'Confirm the payment',
          'You will receive a confirmation SMS'
        ],
        reference: response.reference,
        paymentLink: response.paymentLink,
        helpText: 'If you don\'t receive a prompt, dial *165# and follow the instructions'
      }

    case 'AIRTEL_MONEY':
      return {
        title: 'Complete your Airtel Money payment',
        steps: [
          'You will be redirected to Flutterwave\'s secure payment page',
          'Select Airtel Money as your payment method',
          'Enter your Airtel number if prompted',
          'Check your phone for a payment prompt',
          'Enter your Airtel Money PIN',
          'Confirm the payment',
          'You will receive a confirmation SMS'
        ],
        reference: response.reference,
        paymentLink: response.paymentLink,
        helpText: 'If you don\'t receive a prompt, dial *185# and follow the instructions'
      }

    case 'BANK_TRANSFER':
      return {
        title: 'Complete your Centenary Bank transfer',
        steps: [
          'You will be redirected to Flutterwave\'s secure payment page',
          'Select Bank Transfer as your payment method',
          'Choose Centenary Bank from the list',
          'Complete the transfer using your banking app or online banking',
          'Use the provided reference number for the transfer',
          'Payment will be confirmed automatically'
        ],
        reference: response.reference,
        paymentLink: response.paymentLink,
        helpText: 'Please use the reference number for faster processing'
      }

    default:
      return {
        title: 'Payment Processing',
        steps: ['Follow the instructions provided'],
        reference: response.reference,
        paymentLink: response.paymentLink
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

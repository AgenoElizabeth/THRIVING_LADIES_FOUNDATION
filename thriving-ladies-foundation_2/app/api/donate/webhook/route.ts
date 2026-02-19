import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY!

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const signature = request.headers.get('verif-hash')

    // Verify Flutterwave webhook signature
    if (!signature) {
      return NextResponse.json(
        { error: 'No signature provided' },
        { status: 400 }
      )
    }

    // Create expected signature
    const expectedSignature = crypto
      .createHmac('sha256', FLUTTERWAVE_SECRET_KEY)
      .update(JSON.stringify(body))
      .digest('hex')

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    const { event, data } = body

    console.log(`Webhook received: ${event}`, data)

    if (event === 'charge.completed') {
      // Payment was successful
      const transactionId = data.tx_ref
      const flutterwaveId = data.id
      const amount = data.amount
      const currency = data.currency
      const status = data.status

      if (status === 'successful') {
        // Update payment status in database
        console.log(`Payment completed: ${transactionId}, Amount: ${amount} ${currency}`)

        // In production, update database status to 'completed'
        // await updatePaymentStatus(transactionId, 'completed', flutterwaveId)

        // Send confirmation email, etc.
        // await sendConfirmationEmail(data.customer.email, amount, transactionId)
      }
    } else if (event === 'transfer.completed') {
      // Bank transfer completed
      console.log(`Bank transfer completed: ${data.reference}`)
    }

    return NextResponse.json({
      status: 'success',
      message: 'Webhook processed successfully'
    })

  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
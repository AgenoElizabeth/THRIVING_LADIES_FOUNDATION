import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import {
  getPesaPalToken,
  registerIPN,
  submitOrder,
  generateTxRef,
  mapPesaPalStatus,
} from '@/lib/pesapal'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

// ─── POST /api/donate ────────────────────────────────────────────────────────
// Initiates a PesaPal payment and returns a redirect URL for the donor
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, phoneNumber, paymentMethod, donorInfo, purpose } = body

    if (!amount) {
      return NextResponse.json({ error: 'Amount is required' }, { status: 400 })
    }

    const txRef = generateTxRef()

    // ── 1. Register IPN (idempotent PesaPal deduplicates) ──────────
    let ipnId: string
    try {
      ipnId = await registerIPN()
    } catch (err) {
      console.error('IPN registration error:', err)
      return NextResponse.json(
        { error: 'Payment gateway configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    // ── 2. Build billing address ──────────────────────────────────────
    const billing = {
      email_address: donorInfo?.email || '',
      phone_number: phoneNumber || donorInfo?.phone || '',
      country_code: 'UG',
      first_name: donorInfo?.name?.split(' ')[0] || 'Anonymous',
      last_name: donorInfo?.name?.split(' ').slice(1).join(' ') || 'Donor',
    }

    // ── 3. Submit order to PesaPal ────────────────────────────────────
    const orderResponse = await submitOrder({
      id: txRef,
      currency: 'UGX',
      amount: parseFloat(amount),
      description: purpose || 'Donation to Thriving Ladies Foundation',
      callback_url: `${BASE_URL}/donate/success?tx_ref=${txRef}`,
      notification_id: ipnId,
      billing_address: billing,
    })

    // ── 4. Upsert donor record ────────────────────────────────────────
    let donorId: string | null = null
    if (donorInfo && !donorInfo.anonymous) {
      const donorPayload = {
        first_name: billing.first_name,
        last_name: billing.last_name,
        email: donorInfo.email || null,
        phone: phoneNumber || donorInfo.phone || null,
        donor_type: donorInfo.email ? 'individual' : 'anonymous',
        is_anonymous: false,
        preferred_payment: paymentMethod || 'pesapal',
      }

      const { data: donorData } = donorInfo.email
        ? await supabaseAdmin
          .from('donors')
          .upsert(donorPayload, { onConflict: 'email' })
          .select('id')
        : await supabaseAdmin
          .from('donors')
          .insert(donorPayload)
          .select('id')

      if (donorData?.[0]) donorId = donorData[0].id
    }

    // ── 5. Save pending donation record ───────────────────────────────
    await supabaseAdmin.from('donations').insert({
      tx_ref: txRef,
      flw_ref: orderResponse.order_tracking_id, // reusing column for tracking id
      flw_transaction_id: null,
      donor_id: donorId,
      amount: parseFloat(amount),
      currency: 'UGX',
      payment_method: paymentMethod || 'pesapal',
      payment_provider: 'pesapal',
      status: 'pending',
      purpose: purpose || 'General Fund',
      donor_snapshot: { ...donorInfo, phone: phoneNumber },
      payment_meta: orderResponse,
    })

    return NextResponse.json({
      success: true,
      message: 'Payment initiated. Redirecting to PesaPal...',
      txRef,
      orderTrackingId: orderResponse.order_tracking_id,
      redirectUrl: orderResponse.redirect_url,
    })
  } catch (error) {
    console.error('Donation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Payment initiation failed' },
      { status: 500 }
    )
  }
}

// ─── GET /api/donate?transactionId=xxx ───────────────────────────────────────
// Check donation status by tx_ref or order_tracking_id
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const txRef = url.searchParams.get('tx_ref') || url.searchParams.get('transactionId')

  if (!txRef) {
    return NextResponse.json({ error: 'tx_ref or transactionId required' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('donations')
    .select('id, tx_ref, status, amount, currency, purpose, created_at, paid_at, payment_provider')
    .eq('tx_ref', txRef)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Donation not found' }, { status: 404 })
  }

  return NextResponse.json(data)
}


import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { getTransactionStatus, mapPesaPalStatus } from '@/lib/pesapal'

/**
 * PesaPal IPN Webhook Handler
 * GET /api/donate/webhook?OrderTrackingId=xxx&OrderMerchantReference=TLF_xxx&OrderNotificationType=IPNCHANGE
 *
 * PesaPal calls this URL (GET) whenever a payment status changes.
 * We verify the payment status directly from PesaPal and update our DB.
 */
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const orderTrackingId = url.searchParams.get('OrderTrackingId')
    const merchantReference = url.searchParams.get('OrderMerchantReference') // our tx_ref
    const notificationType = url.searchParams.get('OrderNotificationType')

    console.log('[PesaPal IPN]', { orderTrackingId, merchantReference, notificationType })

    if (!orderTrackingId || !merchantReference) {
      // PesaPal requires a 200 OK even for bad requests
      return NextResponse.json({ orderNotificationType: 'IPNCHANGE', orderTrackingId, orderMerchantReference: merchantReference, status: '200' })
    }

    // ── Fetch real status from PesaPal ──────────────────────────────
    const statusData = await getTransactionStatus(orderTrackingId)
    const dbStatus = mapPesaPalStatus(statusData.payment_status_description)

    // ── Update donation record ──────────────────────────────────────
    await supabaseAdmin
      .from('donations')
      .update({
        status: dbStatus,
        flw_transaction_id: statusData.confirmation_code || null,
        payment_meta: statusData,
        webhook_verified: true,
        paid_at: dbStatus === 'completed' ? new Date().toISOString() : null,
      })
      .eq('tx_ref', merchantReference)

    // ── If completed, update donor totals ──────────────────────────
    if (dbStatus === 'completed') {
      const { data: donation } = await supabaseAdmin
        .from('donations')
        .select('donor_id, amount')
        .eq('tx_ref', merchantReference)
        .single()

      if (donation?.donor_id) {
        const { data: donor } = await supabaseAdmin
          .from('donors')
          .select('total_donations, total_amount, first_donation_at')
          .eq('id', donation.donor_id)
          .single()

        if (donor) {
          await supabaseAdmin
            .from('donors')
            .update({
              total_donations: (donor.total_donations || 0) + 1,
              total_amount: (donor.total_amount || 0) + (donation.amount || 0),
              last_donation_at: new Date().toISOString(),
              first_donation_at: donor.first_donation_at || new Date().toISOString(),
            })
            .eq('id', donation.donor_id)
        }
      }
    }

    // PesaPal IPN requires this exact response format
    return NextResponse.json({
      orderNotificationType: notificationType,
      orderTrackingId,
      orderMerchantReference: merchantReference,
      status: '200',
    })
  } catch (error) {
    console.error('[PesaPal IPN Error]', error)
    // Return 200 to prevent PesaPal from retrying endlessly
    return NextResponse.json({ status: '200' })
  }
}

import { NextResponse } from 'next/server'
import { getPesaPalToken } from '@/lib/pesapal'

/**
 * GET /api/test-payment
 * Verifies PesaPal connection using stored credentials
 */
export async function GET() {
  try {
    const token = await getPesaPalToken()
    return NextResponse.json({
      success: true,
      message: 'PesaPal API connection successful',
      environment: process.env.PESAPAL_ENVIRONMENT || 'sandbox',
      tokenPreview: token.substring(0, 20) + '...',
    })
  } catch (error) {
    console.error('PesaPal test error:', error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'PesaPal connection failed',
        hint: 'Check PESAPAL_CONSUMER_KEY and PESAPAL_CONSUMER_SECRET in .env.local',
      },
      { status: 500 }
    )
  }
}

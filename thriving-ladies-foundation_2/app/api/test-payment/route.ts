import { NextRequest, NextResponse } from 'next/server'

const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY!

export async function GET() {
  try {
    // Test Flutterwave connection
    const response = await fetch('https://api.flutterwave.com/v3/banks/UG', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Flutterwave API test failed: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      message: 'Flutterwave API connection successful',
      data: data
    })

  } catch (error) {
    console.error('Flutterwave test error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Test failed'
      },
      { status: 500 }
    )
  }
}
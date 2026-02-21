/**
 * PesaPal v3 Payment Integration
 * Docs: https://developer.pesapal.com/how-to-integrate/e-commerce/api-30-json/api-reference
 *
 * API Environments:
 *  Sandbox:    https://cybqa.pesapal.com/pesapalv3
 *  Production: https://pay.pesapal.com/v3
 */

const PESAPAL_CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY!
const PESAPAL_CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET!
const PESAPAL_ENV = process.env.PESAPAL_ENVIRONMENT || 'sandbox'

const PESAPAL_BASE_URL =
    PESAPAL_ENV === 'production'
        ? 'https://pay.pesapal.com/v3'
        : 'https://cybqa.pesapal.com/pesapalv3'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface PesaPalBillingAddress {
    email_address?: string
    phone_number?: string
    country_code?: string   // e.g. "UG"
    first_name?: string
    middle_name?: string
    last_name?: string
    line_1?: string
    city?: string
    state?: string
    postal_code?: string
    zip_code?: string
}

export interface PesaPalOrderRequest {
    id: string              // Your unique order/transaction reference
    currency: string        // e.g. "UGX"
    amount: number
    description: string
    callback_url: string
    notification_id: string // IPN ID from registerIPN()
    billing_address: PesaPalBillingAddress
    branch?: string
}

export interface PesaPalOrderResponse {
    order_tracking_id: string
    merchant_reference: string
    redirect_url: string    // Redirect donor to this URL to complete payment
    error?: string
    status?: string
}

export interface PesaPalTransactionStatus {
    payment_method: string
    amount: number
    created_date: string
    confirmation_code: string
    payment_status_description: string // "Completed" | "Failed" | "Pending" | "Invalid"
    description: string
    message: string
    order_tracking_id: string
    order_merchant_reference: string
    status: string
    error?: { error_type: string; code: string; message: string }
}

// ─── Authentication ──────────────────────────────────────────────────────────

let _tokenCache: { token: string; expiresAt: number } | null = null

export async function getPesaPalToken(): Promise<string> {
    // Return cached token if still valid (with 60s buffer)
    if (_tokenCache && Date.now() < _tokenCache.expiresAt - 60_000) {
        return _tokenCache.token
    }

    const res = await fetch(`${PESAPAL_BASE_URL}/api/Auth/RequestToken`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
            consumer_key: PESAPAL_CONSUMER_KEY,
            consumer_secret: PESAPAL_CONSUMER_SECRET,
        }),
    })

    if (!res.ok) {
        const err = await res.text()
        throw new Error(`PesaPal auth failed (${res.status}): ${err}`)
    }

    const data = await res.json()

    if (data.error) {
        throw new Error(`PesaPal auth error: ${data.error.message}`)
    }

    // expiresDate is ISO string
    const expiresAt = new Date(data.expiresDate).getTime()
    _tokenCache = { token: data.token, expiresAt }

    return data.token
}

// ─── IPN Registration ────────────────────────────────────────────────────────

/**
 * Register the IPN (Instant Payment Notification) URL.
 * Call this once at startup or on first payment. Returns the ipn_id.
 */
export async function registerIPN(): Promise<string> {
    const token = await getPesaPalToken()

    const res = await fetch(`${PESAPAL_BASE_URL}/api/URLSetup/RegisterIPN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            url: `${BASE_URL}/api/donate/webhook`,
            ipn_notification_type: 'GET',
        }),
    })

    if (!res.ok) {
        const err = await res.text()
        throw new Error(`PesaPal IPN registration failed (${res.status}): ${err}`)
    }

    const data = await res.json()
    if (data.error) throw new Error(`PesaPal IPN error: ${data.error.message}`)

    return data.ipn_id
}

// ─── Submit Order ─────────────────────────────────────────────────────────────

/**
 * Submit a payment order. Returns redirect_url to send the donor to.
 */
export async function submitOrder(
    order: PesaPalOrderRequest
): Promise<PesaPalOrderResponse> {
    const token = await getPesaPalToken()

    const res = await fetch(`${PESAPAL_BASE_URL}/api/Transactions/SubmitOrderRequest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    })

    if (!res.ok) {
        const err = await res.text()
        throw new Error(`PesaPal order submission failed (${res.status}): ${err}`)
    }

    const data = await res.json()
    if (data.error) throw new Error(`PesaPal order error: ${data.error.message}`)

    return data
}

// ─── Transaction Status ───────────────────────────────────────────────────────

/**
 * Check the status of a payment by orderTrackingId.
 */
export async function getTransactionStatus(
    orderTrackingId: string
): Promise<PesaPalTransactionStatus> {
    const token = await getPesaPalToken()

    const res = await fetch(
        `${PESAPAL_BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
        {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
    )

    if (!res.ok) {
        const err = await res.text()
        throw new Error(`PesaPal status check failed (${res.status}): ${err}`)
    }

    const data = await res.json()
    if (data.error) throw new Error(`PesaPal status error: ${data.error.message}`)

    return data
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Map PesaPal status description to our DB status enum */
export function mapPesaPalStatus(
    statusDescription: string
): 'pending' | 'completed' | 'failed' {
    switch (statusDescription?.toLowerCase()) {
        case 'completed': return 'completed'
        case 'failed':
        case 'invalid': return 'failed'
        default: return 'pending'
    }
}

/** Generate a unique transaction reference */
export function generateTxRef(): string {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8).toUpperCase()
    return `TLF_${timestamp}_${random}`
}

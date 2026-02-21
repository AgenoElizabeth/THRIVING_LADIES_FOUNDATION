# PesaPal Payment Integration Setup

## 🚀 Getting Started with PesaPal Payments

The website is integrated with **PesaPal v3** to accept donations via:
- MTN Mobile Money (Uganda)
- Airtel Money (Uganda)
- Centenary Bank Transfer
- Visa/Mastercard cards

PesaPal is a leading payment gateway in East Africa and supports **Uganda Shillings (UGX)**.

---

## Step 1: Create a PesaPal Account

1. Go to [https://www.pesapal.com](https://www.pesapal.com)
2. Sign up for a **Business Account**
3. For **sandbox testing**: visit [https://demo.pesapal.com](https://demo.pesapal.com)
4. Complete KYC verification for live production access

---

## Step 2: Get Your API Keys

1. Log in to your PesaPal dashboard
2. Go to **Settings → API Keys** (or **Developer Settings**)
3. Copy your **Consumer Key** and **Consumer Secret**

---

## Step 3: Configure `.env.local`

Open `.env.local` at the root of the project and fill in your keys:

```env
PESAPAL_CONSUMER_KEY=your_real_consumer_key_here
PESAPAL_CONSUMER_SECRET=your_real_consumer_secret_here

# Use "sandbox" for testing, "production" for live payments
PESAPAL_ENVIRONMENT=sandbox
```

---

## Step 4: Configure IPN (Webhook URL)

PesaPal will automatically call your IPN URL when payments are completed.
Your IPN URL is: `https://yourdomain.com/api/donate/webhook`

> During local development, use **ngrok** to expose localhost:
> ```bash
> npx ngrok http 3000
> # Then set NEXT_PUBLIC_BASE_URL=https://xxxx.ngrok.io in .env.local
> ```

The system registers the IPN URL automatically on the first payment — no manual setup required.

---

## Step 5: Test the Connection

After adding your keys, run:
```bash
npm run dev
```

Then visit: `http://localhost:3000/api/test-payment`

You should see:
```json
{
  "success": true,
  "message": "PesaPal API connection successful",
  "environment": "sandbox"
}
```

---

## Step 6: Go Live

1. Change `PESAPAL_ENVIRONMENT=production` in `.env.local`
2. Use your **production** Consumer Key and Consumer Secret
3. Set `NEXT_PUBLIC_BASE_URL=https://yourdomain.com`

---

## Payment Flow

```
Donor fills form → POST /api/donate
  → PesaPal token obtained (cached)
  → IPN URL registered (automatic)
  → Order submitted to PesaPal
  → Donor redirected to PesaPal hosted page
  → Donor completes payment (MTN/Airtel/Card/Bank)
  → PesaPal calls GET /api/donate/webhook
  → Donation status updated in Supabase ✓
```

---

## Resources

- PesaPal Developer Docs: [https://developer.pesapal.com](https://developer.pesapal.com)
- API v3 Reference: [https://developer.pesapal.com/how-to-integrate/e-commerce/api-30-json](https://developer.pesapal.com/how-to-integrate/e-commerce/api-30-json)
- PesaPal Support: [support@pesapal.com](mailto:support@pesapal.com)
- Sandbox testing: [https://demo.pesapal.com](https://demo.pesapal.com)

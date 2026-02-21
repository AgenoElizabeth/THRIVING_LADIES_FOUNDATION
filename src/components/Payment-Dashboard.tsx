"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smartphone, Landmark, ArrowLeft, ShieldCheck, Copy, CheckCircle, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type PaymentMethod = "MTN_MOBILE_MONEY" | "AIRTEL_MONEY" | "BANK_TRANSFER" | null

interface DonationResponse {
  success: boolean
  message: string
  txRef: string
  orderTrackingId?: string
  redirectUrl?: string     // PesaPal hosted payment page
  instructions?: {
    title: string
    steps: string[]
    reference?: string
    helpText?: string
  }
}

export default function PaymentDashboards() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null)
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [purpose, setPurpose] = useState("General Fund")
  const [isLoading, setIsLoading] = useState(false)
  const [paymentResponse, setPaymentResponse] = useState<DonationResponse | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'completed' | 'failed' | null>(null)
  const { toast } = useToast()

  const handlePayment = async () => {
    if (!amount || !phoneNumber || !selectedMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount,
          phoneNumber,
          paymentMethod: selectedMethod,
          donorInfo: {
            name: donorName,
            email: donorEmail
          },
          purpose
        })
      })

      const data = await response.json()

      if (data.success) {
        setPaymentResponse(data)
        setPaymentStatus('pending')
        toast({
          title: 'Payment Initiated',
          description: 'Redirecting you to PesaPal to complete your donation...',
        })

        // Redirect to PesaPal hosted payment page
        if (data.redirectUrl) {
          setTimeout(() => {
            window.location.href = data.redirectUrl
          }, 1500)
        } else {
          // Fallback: poll our DB for status
          pollPaymentStatus(data.txRef)
        }
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast({
        title: 'Payment Failed',
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const pollPaymentStatus = async (txRef: string) => {
    const poll = async () => {
      try {
        const response = await fetch(`/api/donate?tx_ref=${txRef}`)
        const data = await response.json()
        if (data.status === 'completed') {
          setPaymentStatus('completed')
          toast({ title: 'Payment Completed', description: 'Thank you for your donation!' })
        } else if (data.status === 'failed') {
          setPaymentStatus('failed')
          toast({ title: 'Payment Failed', description: 'Please try again or contact support.', variant: 'destructive' })
        } else {
          setTimeout(poll, 5000)
        }
      } catch (error) {
        console.error('Status check failed:', error)
      }
    }
    poll()
  }

  const renderDashboard = () => {
    if (paymentResponse) {
      return (
        <Card className="border-0 shadow-2xl bg-green-50 text-green-900">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-yellow-600 animate-spin" />
              <CardTitle className="text-2xl">Redirecting to PesaPal...</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/50 rounded-lg p-4">
              <p className="font-semibold">Reference: {paymentResponse.txRef}</p>
              <p className="text-sm text-green-700 mt-1">You will be redirected to PesaPal to complete your payment securely.</p>
            </div>
            <Button
              onClick={() => {
                setPaymentResponse(null)
                setPaymentStatus(null)
                setSelectedMethod(null)
              }}
              className="w-full"
              variant="outline"
            >
              Cancel and go back
            </Button>
          </CardContent>
        </Card>
      )
    }

    switch (selectedMethod) {
      case "MTN_MOBILE_MONEY":
        return (
          <Card className="border-0 shadow-2xl bg-[#FFCC00] text-black">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMethod(null)}
                  className="text-black hover:bg-black/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">MTN MoMo</div>
              </div>
              <CardTitle className="text-3xl font-black">MTN Mobile Money</CardTitle>
              <CardDescription className="text-black/70 font-medium">Fast & Secure Uganda-wide</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="font-bold">Donation Amount (UGX)</Label>
                  <Input
                    type="number"
                    placeholder="10000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/50 border-black/20 text-black placeholder:text-black/40"
                  />
                </div>
                <div>
                  <Label className="font-bold">Your MTN Number</Label>
                  <Input
                    placeholder="2567XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white/50 border-black/20 text-black placeholder:text-black/40"
                  />
                </div>
                <div>
                  <Label className="font-bold">Your Name (Optional)</Label>
                  <Input
                    placeholder="John Doe"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="bg-white/50 border-black/20 text-black placeholder:text-black/40"
                  />
                </div>
                <div>
                  <Label className="font-bold">Email (Optional)</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="bg-white/50 border-black/20 text-black placeholder:text-black/40"
                  />
                </div>
                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full bg-black text-yellow-400 hover:bg-black/90 font-bold h-12"
                >
                  {isLoading ? 'Processing...' : 'Initiate MTN MoMo Payment'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      case "AIRTEL_MONEY":
        return (
          <Card className="border-0 shadow-2xl bg-[#FF0000] text-white">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMethod(null)}
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <div className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold">Airtel Money</div>
              </div>
              <CardTitle className="text-3xl font-black italic">Airtel Money</CardTitle>
              <CardDescription className="text-white/70">The Smartphone Network</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="font-bold text-white">Donation Amount (UGX)</Label>
                  <Input
                    type="number"
                    placeholder="10000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="font-bold text-white">Your Airtel Number</Label>
                  <Input
                    placeholder="2567XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="font-bold text-white">Your Name (Optional)</Label>
                  <Input
                    placeholder="John Doe"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="font-bold text-white">Email (Optional)</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full bg-white text-red-600 hover:bg-white/90 font-black h-12 rounded-xl"
                >
                  {isLoading ? 'Processing...' : 'Initiate Airtel Money Payment'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      case "BANK_TRANSFER":
        return (
          <Card className="border-0 shadow-2xl bg-slate-900 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <CardHeader className="relative">
              <div className="flex justify-between items-center mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMethod(null)}
                  className="text-white/70 hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <ShieldCheck className="text-blue-400 h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-[10px] font-black italic">
                  C
                </div>
                Centenary Bank
              </CardTitle>
              <CardDescription className="text-blue-400/80">Safe & Secure Bank Transfer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="space-y-4">
                <div>
                  <Label className="font-bold text-white">Donation Amount (UGX)</Label>
                  <Input
                    type="number"
                    placeholder="10000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="font-bold text-white">Your Phone Number</Label>
                  <Input
                    placeholder="2567XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="font-bold text-white">Your Name (Optional)</Label>
                  <Input
                    placeholder="John Doe"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="font-bold text-white">Email (Optional)</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-lg transition-all hover:scale-[1.02]"
                >
                  {isLoading ? 'Processing...' : 'Initiate Bank Transfer'}
                </Button>
              </div>
              <div className="space-y-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-white/70 text-center">
                  Bank transfer details will be provided after initiation
                </p>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="cursor-pointer group hover:border-yellow-400 transition-all hover:shadow-2xl border-2 border-transparent"
              onClick={() => setSelectedMethod("MTN_MOBILE_MONEY")}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFCC00] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold">MTN MoMo</h3>
                <p className="text-sm text-muted-foreground">Donate via Mobile Money</p>
              </CardContent>
            </Card>
            <Card
              className="cursor-pointer group hover:border-red-500 transition-all hover:shadow-2xl border-2 border-transparent"
              onClick={() => setSelectedMethod("AIRTEL_MONEY")}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Airtel Money</h3>
                <p className="text-sm text-muted-foreground">Instant smartphone payment</p>
              </CardContent>
            </Card>
            <Card
              className="cursor-pointer group hover:border-blue-600 transition-all hover:shadow-2xl border-2 border-transparent"
              onClick={() => setSelectedMethod("BANK_TRANSFER")}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Landmark className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Centenary Bank</h3>
                <p className="text-sm text-muted-foreground">Secure bank transfer</p>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Complete Your Donation</h2>
        <p className="text-muted-foreground">Select your preferred local payment method in Uganda</p>
      </div>
      {renderDashboard()}
    </div>
  )
}

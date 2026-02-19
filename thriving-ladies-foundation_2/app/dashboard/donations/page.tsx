'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DollarSign, Search, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Donation {
  id: string
  donor_id?: string
  amount?: number
  currency?: string
  donation_date?: string
  status?: string
  payment_method?: string
  created_at: string
}

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()

  const fetchDonations = async () => {
    try {
      const response = await fetch('/api/donations')
      if (response.ok) {
        const data = await response.json()
        setDonations(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch donations",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch donations",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDonations()
  }, [])

  const filteredDonations = donations.filter(donation =>
    donation.donor_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.payment_method?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalAmount = donations.reduce((sum, donation) => sum + (donation.amount || 0), 0)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Donations</h1>
          <p className="text-muted-foreground">
            Track and manage all donations received
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalAmount.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Donations ({donations.length})
          </CardTitle>
          <CardDescription>
            All donation records and their details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search donations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Button variant="outline" onClick={fetchDonations}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">
                    {donation.donor_id || 'N/A'}
                  </TableCell>
                  <TableCell>${donation.amount?.toLocaleString() || 'N/A'}</TableCell>
                  <TableCell>{donation.currency || 'USD'}</TableCell>
                  <TableCell>{donation.payment_method || 'N/A'}</TableCell>
                  <TableCell>
                    <Badge variant={donation.status === 'completed' ? 'default' : 'secondary'}>
                      {donation.status || 'Unknown'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {donation.donation_date
                      ? new Date(donation.donation_date).toLocaleDateString()
                      : new Date(donation.created_at).toLocaleDateString()
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredDonations.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No donations found
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
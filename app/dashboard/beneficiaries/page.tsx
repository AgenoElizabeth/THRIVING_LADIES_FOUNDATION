'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Search, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Beneficiary {
  id: string
  name?: string
  email?: string
  phone?: string
  location?: string
  status?: string
  created_at: string
}

export default function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()

  const fetchBeneficiaries = async () => {
    try {
      const response = await fetch('/api/beneficiaries')
      if (response.ok) {
        const data = await response.json()
        setBeneficiaries(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch beneficiaries",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch beneficiaries",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBeneficiaries()
  }, [])

  const filteredBeneficiaries = beneficiaries.filter(beneficiary =>
    beneficiary.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beneficiary.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beneficiary.location?.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h1 className="text-3xl font-bold tracking-tight">Beneficiaries</h1>
          <p className="text-muted-foreground">
            Manage and view all beneficiaries in the system
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Beneficiaries ({beneficiaries.length})
          </CardTitle>
          <CardDescription>
            All registered beneficiaries and their information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search beneficiaries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Button variant="outline" onClick={fetchBeneficiaries}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBeneficiaries.map((beneficiary) => (
                <TableRow key={beneficiary.id}>
                  <TableCell className="font-medium">
                    {beneficiary.name || 'N/A'}
                  </TableCell>
                  <TableCell>{beneficiary.email || 'N/A'}</TableCell>
                  <TableCell>{beneficiary.phone || 'N/A'}</TableCell>
                  <TableCell>{beneficiary.location || 'N/A'}</TableCell>
                  <TableCell>
                    <Badge variant={beneficiary.status === 'active' ? 'default' : 'secondary'}>
                      {beneficiary.status || 'Unknown'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(beneficiary.created_at).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredBeneficiaries.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No beneficiaries found
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
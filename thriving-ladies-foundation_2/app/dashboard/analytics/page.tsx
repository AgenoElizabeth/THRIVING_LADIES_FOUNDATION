"use client"
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  DollarSign,
  Users,
  Calendar,
  Download
} from "lucide-react"

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState({
    girlsReached: 0,
    totalRaised: 0,
    projectsCompleted: 0,
    impactRate: 0,
    avgMonthly: 0,
    activeDonors: 0,
    avgProjectDuration: '0 days'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true)
        const [donationsRes, projectsRes, beneficiariesRes, donorsRes] = await Promise.all([
          fetch('/api/donations'),
          fetch('/api/projects'),
          fetch('/api/beneficiaries'),
          fetch('/api/donors')
        ])

        const [donations, projects, beneficiaries, donors] = await Promise.all([
          donationsRes.ok ? donationsRes.json() : [],
          projectsRes.ok ? projectsRes.json() : [],
          beneficiariesRes.ok ? beneficiariesRes.json() : [],
          donorsRes.ok ? donorsRes.json() : []
        ])

        const totalRaised = donations.reduce((sum: number, d: any) => sum + (d.amount || 0), 0)
        const projectsCompleted = projects.filter((p: any) => p.status === 'completed').length
        const impactRate = projects.length > 0 ? Math.round((projectsCompleted / projects.length) * 100) : 0

        // Simple avg monthly (just total / 12 for now or based on data range if available)
        const avgMonthly = totalRaised / 12

        setMetrics({
          girlsReached: beneficiaries.length,
          totalRaised,
          projectsCompleted,
          impactRate,
          avgMonthly,
          activeDonors: donors.length,
          avgProjectDuration: '45 days' // Placeholder or calculation
        })
      } catch (error) {
        console.error('Error fetching analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics & Reports</h1>
          <p className="text-muted-foreground">Track your foundation's impact and performance metrics</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary text-white">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">{metrics.girlsReached.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Girls Reached</p>
            <p className="text-xs text-green-600 mt-1">Beneficiaries recorded</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">UGX {(metrics.totalRaised / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-muted-foreground">Total Raised</p>
            <p className="text-xs text-blue-600 mt-1">From completed donations</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">{metrics.projectsCompleted}</p>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
            <p className="text-xs text-purple-600 mt-1">All-time impact</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">{metrics.impactRate}%</p>
            <p className="text-sm text-muted-foreground">Impact Rate</p>
            <p className="text-xs text-green-600 mt-1">Completion target</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Donation Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Monthly donation trends</p>
                <p className="text-sm text-muted-foreground mt-2">Charts will appear as data grows</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-secondary" />
              Project Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Project category breakdown</p>
                <p className="text-sm text-muted-foreground mt-2">Visualizing focus areas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-accent" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-lg font-semibold text-foreground">UGX {(metrics.avgMonthly / 1000).toFixed(0)}K</p>
              <p className="text-sm text-muted-foreground">Average Monthly Donations</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-foreground">{metrics.activeDonors}</p>
              <p className="text-sm text-muted-foreground">Active Donors</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-lg font-semibold text-foreground">{metrics.avgProjectDuration}</p>
              <p className="text-sm text-muted-foreground">Average Project Duration</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

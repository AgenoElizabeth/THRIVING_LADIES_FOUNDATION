'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  FolderPlus,
  Camera,
  Video,
  Activity,
  Upload,
  Plus,
  FileText,
  TrendingUp
} from "lucide-react"

interface DashboardStats {
  totalDonations: number
  totalDonationAmount: number
  activeProjects: number
  totalProjects: number
  galleryPhotos: number
  videoContent: number
}

export function OverviewTab() {
  const [stats, setStats] = useState<DashboardStats>({
    totalDonations: 0,
    totalDonationAmount: 0,
    activeProjects: 0,
    totalProjects: 0,
    galleryPhotos: 0,
    videoContent: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch donations
        const donationsResponse = await fetch('/api/donations')
        const donations = donationsResponse.ok ? await donationsResponse.json() : []

        // Fetch projects
        const projectsResponse = await fetch('/api/projects')
        const projects = projectsResponse.ok ? await projectsResponse.json() : []

        // Fetch gallery
        const galleryResponse = await fetch('/api/gallery')
        const gallery = galleryResponse.ok ? await galleryResponse.json() : []

        // Fetch videos
        const videosResponse = await fetch('/api/videos')
        const videos = videosResponse.ok ? await videosResponse.json() : []

        // Calculate stats
        const totalDonationAmount = donations.reduce((sum: number, donation: any) => sum + (donation.amount || 0), 0)
        const activeProjects = projects.filter((p: any) => p.status === 'active').length

        setStats({
          totalDonations: donations.length,
          totalDonationAmount,
          activeProjects,
          totalProjects: projects.length,
          galleryPhotos: gallery.length,
          videoContent: videos.length
        })
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
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
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Manage your foundation's content and track impact</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Donations</p>
                <p className="text-2xl font-bold text-foreground">${stats.totalDonationAmount.toLocaleString()}</p>
                <p className="text-xs text-green-600">{stats.totalDonations} donations recorded</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold text-foreground">{stats.activeProjects}</p>
                <p className="text-xs text-blue-600">of {stats.totalProjects} total projects</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <FolderPlus className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Gallery Photos</p>
                <p className="text-2xl font-bold text-foreground">{stats.galleryPhotos}</p>
                <p className="text-xs text-purple-600">photos in gallery</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Video Content</p>
                <p className="text-2xl font-bold text-foreground">{stats.videoContent}</p>
                <p className="text-xs text-orange-600">videos uploaded</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Video className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "New donation received", amount: "UGX 500,000", time: "2 minutes ago", type: "donation" },
              { action: "Photo uploaded to gallery", item: "School visit", time: "1 hour ago", type: "upload" },
              { action: "Project completed", item: "Buwaiswa Water Point", time: "3 hours ago", type: "project" },
              { action: "Monthly report generated", item: "December 2024", time: "1 day ago", type: "report" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  {activity.type === "donation" && <DollarSign className="h-4 w-4 text-primary" />}
                  {activity.type === "upload" && <Upload className="h-4 w-4 text-secondary" />}
                  {activity.type === "project" && <FolderPlus className="h-4 w-4 text-accent" />}
                  {activity.type === "report" && <FileText className="h-4 w-4 text-primary" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.amount || activity.item} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gradient-to-r from-primary to-secondary text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add New Project
            </Button>
            <Button variant="outline" className="w-full justify-start border-secondary/30 text-secondary hover:bg-secondary/10">
              <Upload className="mr-2 h-4 w-4" />
              Upload Photos
            </Button>
            <Button variant="outline" className="w-full justify-start border-accent/30 text-accent hover:bg-accent/10">
              <Video className="mr-2 h-4 w-4" />
              Add Video Content
            </Button>
            <Button variant="outline" className="w-full justify-start border-primary/30 text-primary hover:bg-primary/10">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
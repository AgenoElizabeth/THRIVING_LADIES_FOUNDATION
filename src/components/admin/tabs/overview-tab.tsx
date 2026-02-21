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

interface ActivityItem {
  type: 'donation' | 'gallery' | 'project' | 'report'
  title: string
  timestamp: string
  description: string
}

export function OverviewTab() {
  const [stats, setStats] = useState<DashboardStats>({
    totalDonations: 0,
    totalDonationAmount: 0,
    activeProjects: 0,
    totalProjects: 0,
    galleryPhotos: 0,
    videoContent: 0,
  })
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)

  const formatRelativeTime = (dateString: string) => {
    const now = new Date()
    const past = new Date(dateString)
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000)

    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    return `${Math.floor(diffInSeconds / 86400)}d ago`
  }

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        // Fetch stats
        const [donationsRes, projectsRes, galleryRes, videosRes, activitiesRes] = await Promise.all([
          fetch('/api/donations'),
          fetch('/api/projects'),
          fetch('/api/gallery'),
          fetch('/api/videos'),
          fetch('/api/activities')
        ])

        const [donations, projects, gallery, videos, activitiesData] = await Promise.all([
          donationsRes.ok ? donationsRes.json() : [],
          projectsRes.ok ? projectsRes.json() : [],
          galleryRes.ok ? galleryRes.json() : [],
          videosRes.ok ? videosRes.json() : [],
          activitiesRes.ok ? activitiesRes.json() : []
        ])

        const totalDonationAmount = donations.reduce((sum: number, d: any) => sum + (d.amount || 0), 0)
        const activeProjects = projects.filter((p: any) => p.status === 'active').length

        setStats({
          totalDonations: donations.length,
          totalDonationAmount,
          activeProjects,
          totalProjects: projects.length,
          galleryPhotos: gallery.length,
          videoContent: videos.length
        })
        setActivities(activitiesData)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
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
                <p className="text-2xl font-bold text-foreground">UGX {stats.totalDonationAmount.toLocaleString()}</p>
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
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    {activity.type === "donation" && <DollarSign className="h-4 w-4 text-primary" />}
                    {activity.type === "gallery" && <Upload className="h-4 w-4 text-secondary" />}
                    {activity.type === "project" && <FolderPlus className="h-4 w-4 text-accent" />}
                    {activity.type === "report" && <FileText className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.description} • {formatRelativeTime(activity.timestamp)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Activity className="h-8 w-8 mx-auto mb-2 opacity-20" />
                <p>No recent activity</p>
              </div>
            )}
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
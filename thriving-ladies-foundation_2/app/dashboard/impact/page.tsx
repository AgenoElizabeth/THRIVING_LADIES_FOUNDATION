'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { TrendingUp, Search, RefreshCw, Plus, Edit, Trash2, BarChart3, Users, Target } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ImpactMetric {
  id: string
  project_id?: string
  metric_name?: string
  metric_value?: number
  unit?: string
  description?: string
  measurement_date?: string
  target_value?: number
  status?: string
  created_at: string
}

export default function ImpactPage() {
  const [metrics, setMetrics] = useState<ImpactMetric[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingMetric, setEditingMetric] = useState<ImpactMetric | null>(null)
  const { toast } = useToast()

  const fetchMetrics = async () => {
    try {
      const response = await fetch('/api/impact')
      if (response.ok) {
        const data = await response.json()
        setMetrics(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch impact metrics",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch impact metrics",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMetrics()
  }, [])

  const filteredMetrics = metrics.filter(metric =>
    metric.metric_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    metric.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    metric.project_id?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddMetric = async (formData: FormData) => {
    const metricData = {
      project_id: formData.get('project_id') as string,
      metric_name: formData.get('metric_name') as string,
      metric_value: parseFloat(formData.get('metric_value') as string) || null,
      unit: formData.get('unit') as string,
      description: formData.get('description') as string,
      measurement_date: formData.get('measurement_date') as string,
      target_value: parseFloat(formData.get('target_value') as string) || null,
      status: 'active'
    }

    try {
      const response = await fetch('/api/impact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metricData),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Impact metric added successfully",
        })
        setIsAddDialogOpen(false)
        fetchMetrics()
      } else {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.error || "Failed to add impact metric",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add impact metric",
        variant: "destructive",
      })
    }
  }

  const handleEditMetric = async (formData: FormData) => {
    if (!editingMetric) return

    const metricData = {
      project_id: formData.get('project_id') as string,
      metric_name: formData.get('metric_name') as string,
      metric_value: parseFloat(formData.get('metric_value') as string) || null,
      unit: formData.get('unit') as string,
      description: formData.get('description') as string,
      measurement_date: formData.get('measurement_date') as string,
      target_value: parseFloat(formData.get('target_value') as string) || null,
      status: formData.get('status') as string,
    }

    try {
      const response = await fetch(`/api/impact/${editingMetric.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metricData),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Impact metric updated successfully",
        })
        setEditingMetric(null)
        fetchMetrics()
      } else {
        const error = await response.json()
        toast({
          title: "Error",
          description: error.error || "Failed to update impact metric",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update impact metric",
        variant: "destructive",
      })
    }
  }

  const handleDeleteMetric = async (metricId: string) => {
    if (!confirm('Are you sure you want to delete this impact metric?')) return

    try {
      const response = await fetch(`/api/impact/${metricId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Impact metric deleted successfully",
        })
        fetchMetrics()
      } else {
        toast({
          title: "Error",
          description: "Failed to delete impact metric",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete impact metric",
        variant: "destructive",
      })
    }
  }

  const totalMetrics = metrics.length
  const avgAchievement = metrics.length > 0
    ? metrics.reduce((sum, m) => {
        if (m.target_value && m.target_value > 0) {
          return sum + ((m.metric_value || 0) / m.target_value * 100)
        }
        return sum
      }, 0) / metrics.filter(m => m.target_value && m.target_value > 0).length
    : 0

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
          <h1 className="text-3xl font-bold tracking-tight">Impact Metrics</h1>
          <p className="text-muted-foreground">
            Track and measure the impact of foundation projects
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Metric
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add Impact Metric</DialogTitle>
              <DialogDescription>
                Track a new impact measurement
              </DialogDescription>
            </DialogHeader>
            <form action={handleAddMetric} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project_id">Project ID</Label>
                <Input id="project_id" name="project_id" placeholder="Enter project ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metric_name">Metric Name</Label>
                <Input id="metric_name" name="metric_name" placeholder="e.g., People trained, Water distributed" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="metric_value">Current Value</Label>
                  <Input id="metric_value" name="metric_value" type="number" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Input id="unit" name="unit" placeholder="e.g., people, liters, hours" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="target_value">Target Value</Label>
                  <Input id="target_value" name="target_value" type="number" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="measurement_date">Measurement Date</Label>
                  <Input id="measurement_date" name="measurement_date" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" placeholder="Additional details about this metric" />
              </div>
              <Button type="submit" className="w-full">
                Add Impact Metric
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Metrics</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMetrics}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Achievement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgAchievement.toFixed(1)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Metrics</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.filter(m => m.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Tracked</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(metrics.map(m => m.project_id).filter(Boolean)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Impact Metrics ({metrics.length})
          </CardTitle>
          <CardDescription>
            All impact measurements and their progress tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search metrics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Button variant="outline" onClick={fetchMetrics}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric Name</TableHead>
                <TableHead>Project ID</TableHead>
                <TableHead>Current / Target</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Achievement</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMetrics.map((metric) => {
                const achievement = metric.target_value && metric.target_value > 0
                  ? ((metric.metric_value || 0) / metric.target_value * 100)
                  : null

                return (
                  <TableRow key={metric.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-medium">{metric.metric_name || 'N/A'}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-xs">
                          {metric.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{metric.project_id || 'N/A'}</TableCell>
                    <TableCell>
                      {metric.metric_value?.toLocaleString() || '0'}
                      {metric.target_value ? ` / ${metric.target_value.toLocaleString()}` : ''}
                    </TableCell>
                    <TableCell>{metric.unit || 'N/A'}</TableCell>
                    <TableCell>
                      {achievement !== null ? (
                        <Badge variant={achievement >= 100 ? 'default' : achievement >= 75 ? 'secondary' : 'outline'}>
                          {achievement.toFixed(1)}%
                        </Badge>
                      ) : (
                        'N/A'
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={metric.status === 'active' ? 'default' : 'secondary'}>
                        {metric.status || 'Unknown'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingMetric(metric)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteMetric(metric.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>

          {filteredMetrics.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No impact metrics found
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Metric Dialog */}
      <Dialog open={!!editingMetric} onOpenChange={() => setEditingMetric(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Impact Metric</DialogTitle>
            <DialogDescription>
              Update impact metric information
            </DialogDescription>
          </DialogHeader>
          {editingMetric && (
            <form action={handleEditMetric} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-project_id">Project ID</Label>
                <Input
                  id="edit-project_id"
                  name="project_id"
                  defaultValue={editingMetric.project_id}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-metric_name">Metric Name</Label>
                <Input
                  id="edit-metric_name"
                  name="metric_name"
                  defaultValue={editingMetric.metric_name}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-metric_value">Current Value</Label>
                  <Input
                    id="edit-metric_value"
                    name="metric_value"
                    type="number"
                    step="0.01"
                    defaultValue={editingMetric.metric_value}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-unit">Unit</Label>
                  <Input
                    id="edit-unit"
                    name="unit"
                    defaultValue={editingMetric.unit}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-target_value">Target Value</Label>
                  <Input
                    id="edit-target_value"
                    name="target_value"
                    type="number"
                    step="0.01"
                    defaultValue={editingMetric.target_value}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-measurement_date">Measurement Date</Label>
                  <Input
                    id="edit-measurement_date"
                    name="measurement_date"
                    type="date"
                    defaultValue={editingMetric.measurement_date?.split('T')[0]}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  defaultValue={editingMetric.description}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <Select name="status" defaultValue={editingMetric.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Update Metric
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
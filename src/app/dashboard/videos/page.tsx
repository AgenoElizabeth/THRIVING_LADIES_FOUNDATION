'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { VideoIcon, Upload, Play, Trash2, Plus, Search, RefreshCw, FileVideo } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"

interface Video {
  id: string
  title?: string
  description?: string
  category?: string
  file_path: string
  file_url: string
  thumbnail_url?: string
  duration?: number
  file_size?: number
  uploaded_by?: string
  created_at: string
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const { toast } = useToast()

  const categories = ['all', 'projects', 'events', 'testimonials', 'training', 'other']

  const fetchVideos = async () => {
    try {
      const response = await fetch('/api/videos')
      if (response.ok) {
        const data = await response.json()
        setVideos(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch videos",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch videos",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleFileUpload = async (formData: FormData) => {
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string

    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive",
      })
      return
    }

    // Validate file type
    if (!file.type.startsWith('video/')) {
      toast({
        title: "Error",
        description: "Please select a valid video file",
        variant: "destructive",
      })
      return
    }

    // Validate file size (max 500MB)
    if (file.size > 500 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "File size must be less than 500MB",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `videos/${fileName}`

      // Try different possible bucket names
      const possibleBuckets = ['videos', 'media', 'video_library', 'video_files']
      let uploadData, uploadError, successfulBucket

      for (const bucketName of possibleBuckets) {
        try {
          const result = await supabase.storage.from(bucketName).upload(filePath, file)
          uploadData = result.data
          uploadError = result.error
          if (!uploadError) {
            successfulBucket = bucketName
            break
          }
        } catch (error) {
          continue
        }
      }

      if (uploadError || !successfulBucket) {
        throw uploadError || new Error('No suitable storage bucket found')
      }

      // Get public URL from the successful bucket
      const { data: urlData } = supabase.storage
        .from(successfulBucket)
        .getPublicUrl(filePath)

      // Save metadata to database
      const videoData = {
        title: title || file.name,
        description,
        category,
        file_path: filePath,
        file_url: urlData.publicUrl,
        file_size: file.size,
      }

      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoData),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Video uploaded successfully",
        })
        setIsUploadDialogOpen(false)
        fetchVideos()
      } else {
        // Clean up uploaded file if database save fails
        await supabase.storage.from('videos').remove([filePath])
        const error = await response.json()
        toast({
          title: "Error",
          description: error.error || "Failed to save video metadata",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Error",
        description: "Failed to upload video",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteVideo = async (video: Video) => {
    if (!confirm('Are you sure you want to delete this video?')) return

    try {
      // Delete from database
      const response = await fetch(`/api/videos/${video.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Try to delete from storage (try different bucket names)
        const possibleBuckets = ['videos', 'media', 'video_library', 'video_files']
        for (const bucketName of possibleBuckets) {
          try {
            await supabase.storage.from(bucketName).remove([video.file_path])
            break // Success, no need to try other buckets
          } catch (error) {
            continue // Try next bucket
          }
        }

        toast({
          title: "Success",
          description: "Video deleted successfully",
        })
        fetchVideos()
      } else {
        toast({
          title: "Error",
          description: "Failed to delete video",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete video",
        variant: "destructive",
      })
    }
  }

  const formatDuration = (seconds?: number) => {
    if (!seconds) return 'N/A'
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'N/A'
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(1)} MB`
  }

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
          <h1 className="text-3xl font-bold tracking-tight">Video Library</h1>
          <p className="text-muted-foreground">
            Manage and organize your foundation's video collection
          </p>
        </div>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Upload Video
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Video</DialogTitle>
              <DialogDescription>
                Add a new video to your library
              </DialogDescription>
            </DialogHeader>
            <form action={handleFileUpload} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Video File</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="video/*"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Supported formats: MP4, MOV, AVI, WebM (max 500MB)
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Video title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" placeholder="Video description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue="other">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="projects">Projects</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="testimonials">Testimonials</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" disabled={uploading} className="w-full">
                {uploading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Video
                  </>
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
            <VideoIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{videos.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <VideoIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {videos.filter(v => v.category === 'projects').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <VideoIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {videos.filter(v => v.category === 'events').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <VideoIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(videos.reduce((sum, v) => sum + (v.file_size || 0), 0) / (1024 * 1024 * 1024)).toFixed(1)} GB
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <VideoIcon className="h-5 w-5" />
            Video Library ({videos.length} videos)
          </CardTitle>
          <CardDescription>
            All videos in your collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={fetchVideos}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      onClick={() => setSelectedVideo(video)}
                      className="rounded-full w-16 h-16"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteVideo(video)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {video.category && (
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {video.category}
                    </Badge>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    <FileVideo className="h-3 w-3 inline mr-1" />
                    {formatFileSize(video.file_size)}
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm truncate">{video.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {video.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-muted-foreground">
                      {new Date(video.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDuration(video.duration)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              {videos.length === 0 ? 'No videos uploaded yet' : 'No videos match your search'}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Video Player Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
            <DialogDescription>{selectedVideo?.description}</DialogDescription>
          </DialogHeader>
          {selectedVideo && (
            <div className="space-y-4">
              <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
                <video
                  src={selectedVideo.file_url}
                  controls
                  className="w-full h-full"
                  poster={selectedVideo.thumbnail_url}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Category:</strong> {selectedVideo.category || 'N/A'}
                </div>
                <div>
                  <strong>Duration:</strong> {formatDuration(selectedVideo.duration)}
                </div>
                <div>
                  <strong>File Size:</strong> {formatFileSize(selectedVideo.file_size)}
                </div>
                <div>
                  <strong>Uploaded:</strong> {new Date(selectedVideo.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
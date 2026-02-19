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
import { ImageIcon, Upload, X, Eye, Trash2, Plus, Search, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

interface GalleryImage {
  id: string
  title?: string
  description?: string
  category?: string
  file_path: string
  file_url: string
  file_size?: number
  uploaded_by?: string
  created_at: string
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const { toast } = useToast()

  const categories = ['all', 'projects', 'events', 'beneficiaries', 'team', 'other']

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery')
      if (response.ok) {
        const data = await response.json()
        setImages(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch gallery images",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch gallery images",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory
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
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Error",
        description: "Please select a valid image file",
        variant: "destructive",
      })
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "File size must be less than 10MB",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `gallery/${fileName}`

      // Try different possible bucket names
      const possibleBuckets = ['images', 'gallery', 'photos', 'media', 'storage']
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
      const imageData = {
        title: title || file.name,
        description,
        category,
        file_path: filePath,
        file_url: urlData.publicUrl,
        file_size: file.size,
      }

      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageData),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Image uploaded successfully",
        })
        setIsUploadDialogOpen(false)
        fetchImages()
      } else {
        // Clean up uploaded file if database save fails
        await supabase.storage.from('images').remove([filePath])
        const error = await response.json()
        toast({
          title: "Error",
          description: error.error || "Failed to save image metadata",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteImage = async (image: GalleryImage) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      // Delete from database
      const response = await fetch(`/api/gallery/${image.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Try to delete from storage (try different bucket names)
        const possibleBuckets = ['images', 'gallery', 'photos', 'media', 'storage']
        for (const bucketName of possibleBuckets) {
          try {
            await supabase.storage.from(bucketName).remove([image.file_path])
            break // Success, no need to try other buckets
          } catch (error) {
            continue // Try next bucket
          }
        }

        toast({
          title: "Success",
          description: "Image deleted successfully",
        })
        fetchImages()
      } else {
        toast({
          title: "Error",
          description: "Failed to delete image",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      })
    }
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
          <h1 className="text-3xl font-bold tracking-tight">Photo Gallery</h1>
          <p className="text-muted-foreground">
            Manage and organize your foundation's photo collection
          </p>
        </div>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Upload Photo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Photo</DialogTitle>
              <DialogDescription>
                Add a new photo to your gallery
              </DialogDescription>
            </DialogHeader>
            <form action={handleFileUpload} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Photo File</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Photo title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" placeholder="Photo description" />
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
                    <SelectItem value="beneficiaries">Beneficiaries</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
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
                    Upload Photo
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
            <CardTitle className="text-sm font-medium">Total Photos</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{images.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {images.filter(img => img.category === 'projects').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {images.filter(img => img.category === 'events').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(images.reduce((sum, img) => sum + (img.file_size || 0), 0) / (1024 * 1024)).toFixed(1)} MB
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Gallery ({images.length} photos)
          </CardTitle>
          <CardDescription>
            All photos in your gallery collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search photos..."
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
            <Button variant="outline" onClick={fetchImages}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={image.file_url}
                    alt={image.title || 'Gallery image'}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setSelectedImage(image)}
                      className="h-8 w-8 p-0"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteImage(image)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {image.category && (
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {image.category}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm truncate">{image.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {image.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(image.created_at).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              {images.length === 0 ? 'No photos uploaded yet' : 'No photos match your search'}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage.file_url}
                  alt={selectedImage.title || 'Gallery image'}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Category:</strong> {selectedImage.category || 'N/A'}
                </div>
                <div>
                  <strong>Uploaded:</strong> {new Date(selectedImage.created_at).toLocaleDateString()}
                </div>
                <div>
                  <strong>File Size:</strong> {selectedImage.file_size ? `${(selectedImage.file_size / 1024).toFixed(1)} KB` : 'N/A'}
                </div>
                <div>
                  <strong>Uploaded By:</strong> {selectedImage.uploaded_by || 'N/A'}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
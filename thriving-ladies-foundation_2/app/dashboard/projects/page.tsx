'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Plus,
  Eye,
  Edit,
  Upload,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Filter,
  Search
} from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Menstrual Health Program - Nakawa District",
    location: "Nakawa, Uganda",
    budget: "UGX 12,500,000",
    progress: 75,
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2024-12-30",
    beneficiaries: 450,
    category: "Health Education"
  },
  {
    id: 2,
    name: "Water Point Construction - Buwaiswa",
    location: "Buwaiswa, Uganda",
    budget: "UGX 8,000,000",
    progress: 90,
    status: "Near Completion",
    startDate: "2024-03-01",
    endDate: "2024-11-15",
    beneficiaries: 200,
    category: "Infrastructure"
  },
  {
    id: 3,
    name: "Teacher Training Workshop",
    location: "Kampala, Uganda",
    budget: "UGX 3,200,000",
    progress: 45,
    status: "In Progress",
    startDate: "2024-06-01",
    endDate: "2024-10-30",
    beneficiaries: 85,
    category: "Training"
  },
  {
    id: 4,
    name: "School Sanitation Facilities",
    location: "Mukono, Uganda",
    budget: "UGX 15,600,000",
    progress: 30,
    status: "Planning",
    startDate: "2024-08-01",
    endDate: "2025-03-30",
    beneficiaries: 600,
    category: "Infrastructure"
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Project Management</h1>
          <p className="text-muted-foreground">Track and manage ongoing and completed projects</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary text-white">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
                <option>All Categories</option>
                <option>Health Education</option>
                <option>Infrastructure</option>
                <option>Training</option>
              </select>
              <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
                <option>All Status</option>
                <option>Planning</option>
                <option>In Progress</option>
                <option>Near Completion</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">8</p>
            <p className="text-sm text-muted-foreground">Active Projects</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">1,335</p>
            <p className="text-sm text-muted-foreground">Total Beneficiaries</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">UGX 39.3M</p>
            <p className="text-sm text-muted-foreground">Total Budget</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">62%</p>
            <p className="text-sm text-muted-foreground">Average Progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <Card key={project.id} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {project.budget}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.beneficiaries} beneficiaries
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className={
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      project.status === 'Near Completion' ? 'bg-green-100 text-green-700' :
                      project.status === 'Planning' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }
                  >
                    {project.status}
                  </Badge>
                  <Badge variant="outline">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium text-foreground">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Project
                </Button>
                <Button size="sm" variant="outline">
                  <Upload className="h-4 w-4 mr-1" />
                  Add Media
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create New Project Form */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Quick Add Project</CardTitle>
          <CardDescription>Create a new project to track progress and impact</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" placeholder="Enter project name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectLocation">Location</Label>
              <Input id="projectLocation" placeholder="e.g., Kampala, Uganda" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectBudget">Budget (UGX)</Label>
              <Input id="projectBudget" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectStart">Start Date</Label>
              <Input id="projectStart" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectEnd">End Date</Label>
              <Input id="projectEnd" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Description</Label>
            <Textarea id="projectDescription" placeholder="Describe the project goals and activities" rows={3} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectCategory">Category</Label>
              <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                <option>Health Education</option>
                <option>Infrastructure</option>
                <option>Training</option>
                <option>Community Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="beneficiaries">Expected Beneficiaries</Label>
              <Input id="beneficiaries" type="number" placeholder="Number of people impacted" />
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Save, Settings, Bell, Shield, Globe, Palette } from "lucide-react"

export function SettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">Configure your admin dashboard and foundation settings</p>
      </div>

      {/* General Settings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            General Settings
          </CardTitle>
          <CardDescription>Basic configuration for your foundation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="foundationName">Foundation Name</Label>
              <Input id="foundationName" defaultValue="Thriving Ladies Foundation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input id="contactEmail" type="email" defaultValue="info@thrivingladies.org" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" defaultValue="+256 XXX XXX XXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Main Location</Label>
              <Input id="location" defaultValue="Kampala, Uganda" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-secondary" />
            Notification Settings
          </CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="emailNotifs">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive email alerts for new donations</p>
            </div>
            <Switch id="emailNotifs" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="smsNotifs">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">Get SMS alerts for urgent matters</p>
            </div>
            <Switch id="smsNotifs" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="projectUpdates">Project Updates</Label>
              <p className="text-sm text-muted-foreground">Weekly project progress reports</p>
            </div>
            <Switch id="projectUpdates" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            Security Settings
          </CardTitle>
          <CardDescription>Keep your admin account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" placeholder="Enter current password" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="Enter new password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Website Settings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Website Settings
          </CardTitle>
          <CardDescription>Configure your public website</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
              <p className="text-sm text-muted-foreground">Temporarily disable public access</p>
            </div>
            <Switch id="maintenanceMode" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="donationWidget">Donation Widget</Label>
              <p className="text-sm text-muted-foreground">Show donation widget on all pages</p>
            </div>
            <Switch id="donationWidget" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Save Settings */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
            <Save className="mr-2 h-4 w-4" />
            Save All Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
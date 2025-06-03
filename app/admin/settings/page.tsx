'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Lock, 
  Globe, 
  Bell, 
  Shield, 
  Save,
  Trash2,
  Upload,
  Image,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SettingsPage() {
  // Profile settings state
  const [profile, setProfile] = useState({
    name: 'Restaurant Admin',
    email: 'admin@quantumtaste.com',
    avatar: '/images/admin-avatar.jpg',
    role: 'Administrator'
  })
  
  // Restaurant settings state
  const [restaurant, setRestaurant] = useState({
    name: 'Quantum Taste',
    tagline: 'Where Science Meets Culinary Art',
    description: 'Experience dining at the intersection of molecular gastronomy and traditional cuisine. Our innovative dishes challenge perception while delighting the palate.',
    logo: '/images/logo.png',
    address: '123 Quantum Lane, Innovation District, CA 94103',
    phone: '(555) 123-4567',
    email: 'info@quantumtaste.com',
    website: 'https://quantumtaste.com',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '10:00 AM - 11:00 PM',
      sunday: '10:00 AM - 9:00 PM'
    },
    social: {
      facebook: 'https://facebook.com/quantumtaste',
      instagram: 'https://instagram.com/quantumtaste',
      twitter: 'https://twitter.com/quantumtaste',
      linkedin: 'https://linkedin.com/company/quantumtaste'
    }
  })
  
  // Notification settings state
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    reservationAlerts: true,
    marketingEmails: false,
    systemUpdates: true
  })
  
  // Security settings state
  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  // Success message state
  const [showSuccess, setShowSuccess] = useState(false)
  
  const handleProfileUpdate = () => {
    // In a real app, this would make an API call to update the profile
    console.log('Updating profile:', profile)
    showSuccessMessage()
  }
  
  const handleRestaurantUpdate = () => {
    // In a real app, this would make an API call to update the restaurant settings
    console.log('Updating restaurant settings:', restaurant)
    showSuccessMessage()
  }
  
  const handleNotificationsUpdate = () => {
    // In a real app, this would make an API call to update notification preferences
    console.log('Updating notification settings:', notifications)
    showSuccessMessage()
  }
  
  const handlePasswordChange = () => {
    // In a real app, this would validate and update the password
    if (security.newPassword !== security.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    
    console.log('Changing password')
    setSecurity({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    showSuccessMessage()
  }
  
  const showSuccessMessage = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and restaurant settings.</p>
      </div>
      
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
            <AlertDescription>Settings updated successfully!</AlertDescription>
          </Alert>
        </motion.div>
      )}
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="restaurant" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Restaurant
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>
        
        {/* Profile Settings */}
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Update your personal information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Avatar
                  </Button>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      value={profile.role}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleProfileUpdate}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Restaurant Settings */}
        <TabsContent value="restaurant" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Restaurant Information</CardTitle>
              <CardDescription>
                Update your restaurant details, contact information, and business hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Basic Information</h3>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-24 w-24 rounded-md border flex items-center justify-center bg-muted">
                      <Image className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Logo
                    </Button>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <Label htmlFor="restaurant-name">Restaurant Name</Label>
                      <Input
                        id="restaurant-name"
                        value={restaurant.name}
                        onChange={(e) => setRestaurant({...restaurant, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tagline">Tagline</Label>
                      <Input
                        id="tagline"
                        value={restaurant.tagline}
                        onChange={(e) => setRestaurant({...restaurant, tagline: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={restaurant.description}
                        onChange={(e) => setRestaurant({...restaurant, description: e.target.value})}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contact Information</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Address
                    </Label>
                    <Textarea
                      id="address"
                      value={restaurant.address}
                      onChange={(e) => setRestaurant({...restaurant, address: e.target.value})}
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Website
                    </Label>
                    <Input
                      id="website"
                      value={restaurant.website}
                      onChange={(e) => setRestaurant({...restaurant, website: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={restaurant.phone}
                      onChange={(e) => setRestaurant({...restaurant, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={restaurant.email}
                      onChange={(e) => setRestaurant({...restaurant, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Business Hours */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Business Hours
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monday">Monday</Label>
                    <Input
                      id="monday"
                      value={restaurant.hours.monday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, monday: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tuesday">Tuesday</Label>
                    <Input
                      id="tuesday"
                      value={restaurant.hours.tuesday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, tuesday: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="wednesday">Wednesday</Label>
                    <Input
                      id="wednesday"
                      value={restaurant.hours.wednesday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, wednesday: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="thursday">Thursday</Label>
                    <Input
                      id="thursday"
                      value={restaurant.hours.thursday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, thursday: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="friday">Friday</Label>
                    <Input
                      id="friday"
                      value={restaurant.hours.friday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, friday: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="saturday">Saturday</Label>
                    <Input
                      id="saturday"
                      value={restaurant.hours.saturday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, saturday: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sunday">Sunday</Label>
                    <Input
                      id="sunday"
                      value={restaurant.hours.sunday}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        hours: {...restaurant.hours, sunday: e.target.value}
                      })}
                    />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Social Media</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook" className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Label>
                    <Input
                      id="facebook"
                      value={restaurant.social.facebook}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        social: {...restaurant.social, facebook: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Label>
                    <Input
                      id="instagram"
                      value={restaurant.social.instagram}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        social: {...restaurant.social, instagram: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Label>
                    <Input
                      id="twitter"
                      value={restaurant.social.twitter}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        social: {...restaurant.social, twitter: e.target.value}
                      })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Label>
                    <Input
                      id="linkedin"
                      value={restaurant.social.linkedin}
                      onChange={(e) => setRestaurant({
                        ...restaurant, 
                        social: {...restaurant.social, linkedin: e.target.value}
                      })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleRestaurantUpdate}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Notification Settings */}
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reservation-alerts">Reservation Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new reservations</p>
                  </div>
                  <Switch
                    id="reservation-alerts"
                    checked={notifications.reservationAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, reservationAlerts: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                  <Switch
                    id="marketing-emails"
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => setNotifications({...notifications, marketingEmails: checked})}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="system-updates">System Updates</Label>
                    <p className="text-sm text-muted-foreground">Get notified about system updates and maintenance</p>
                  </div>
                  <Switch
                    id="system-updates"
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => setNotifications({...notifications, systemUpdates: checked})}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleNotificationsUpdate}>
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Security Settings */}
        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Update your password and security preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Change Password
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={security.currentPassword}
                      onChange={(e) => setSecurity({...security, currentPassword: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={security.newPassword}
                      onChange={(e) => setSecurity({...security, newPassword: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={security.confirmPassword}
                      onChange={(e) => setSecurity({...security, confirmPassword: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                <p className="text-sm text-muted-foreground">
                  These actions are destructive and cannot be reversed. Please proceed with caution.
                </p>
                
                <Button variant="destructive" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button 
                onClick={handlePasswordChange}
                disabled={!security.currentPassword || !security.newPassword || !security.confirmPassword}
              >
                <Save className="h-4 w-4 mr-2" />
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
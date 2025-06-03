'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  UtensilsCrossed, 
  FileText, 
  Calendar, 
  MessageSquare,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { menuItems } from '@/lib/menu-data'
import { RecentActivity } from "@/components/admin/recent-activity";
import { QuickStats } from "@/components/admin/quick-stats";

// Mock data for dashboard
const recentReservations = [
  { id: 1, name: 'John Smith', date: '2025-06-15', time: '19:30', guests: 4, status: 'confirmed' },
  { id: 2, name: 'Emily Johnson', date: '2025-06-15', time: '20:00', guests: 2, status: 'confirmed' },
  { id: 3, name: 'Michael Brown', date: '2025-06-16', time: '18:45', guests: 6, status: 'pending' },
  { id: 4, name: 'Sarah Wilson', date: '2025-06-16', time: '19:15', guests: 3, status: 'confirmed' },
]

const recentMessages = [
  { id: 1, name: 'David Lee', email: 'david@example.com', subject: 'Private Event Inquiry', date: '2025-06-14', read: false },
  { id: 2, name: 'Jessica Miller', email: 'jessica@example.com', subject: 'Dietary Restrictions', date: '2025-06-13', read: true },
  { id: 3, name: 'Robert Taylor', email: 'robert@example.com', subject: 'Feedback on Visit', date: '2025-06-12', read: true },
]

const stats = [
  { 
    title: 'Total Revenue', 
    value: '$12,450', 
    change: '+12.5%', 
    trend: 'up',
    icon: DollarSign,
    description: 'This month'
  },
  { 
    title: 'Reservations', 
    value: '245', 
    change: '+18.2%', 
    trend: 'up',
    icon: Calendar,
    description: 'This month'
  },
  { 
    title: 'New Customers', 
    value: '132', 
    change: '+5.4%', 
    trend: 'up',
    icon: Users,
    description: 'This month'
  },
  { 
    title: 'Avg. Rating', 
    value: '4.8', 
    change: '-0.2', 
    trend: 'down',
    icon: Star,
    description: 'From last month'
  },
]

const quickActions = [
  { title: 'Menu Items', description: 'Manage your restaurant menu', icon: UtensilsCrossed, href: '/admin/menu', count: menuItems.length },
  { title: 'Blog Posts', description: 'Manage your blog content', icon: FileText, href: '/admin/blog', count: 5 },
  { title: 'Reservations', description: 'View and manage bookings', icon: Calendar, href: '/admin/reservations', count: recentReservations.length },
  { title: 'Messages', description: 'Customer inquiries', icon: MessageSquare, href: '/admin/messages', count: recentMessages.length },
]

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your restaurant admin dashboard
        </p>
      </div>

      <QuickStats />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  Mail,
  Check,
  X,
  AlertCircle,
  Filter,
  ChevronDown,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'

// Mock reservation data
const mockReservations = [
  {
    id: 'res-001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    date: '2023-11-15',
    time: '19:00',
    guests: 4,
    status: 'confirmed',
    specialRequests: 'Window seat if possible',
    createdAt: '2023-11-10T14:30:00Z'
  },
  {
    id: 'res-002',
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    phone: '(555) 987-6543',
    date: '2023-11-16',
    time: '20:30',
    guests: 2,
    status: 'pending',
    specialRequests: 'Anniversary celebration',
    createdAt: '2023-11-11T09:15:00Z'
  },
  {
    id: 'res-003',
    name: 'Michael Chen',
    email: 'mchen@example.com',
    phone: '(555) 456-7890',
    date: '2023-11-17',
    time: '18:00',
    guests: 6,
    status: 'confirmed',
    specialRequests: 'Allergic to nuts',
    createdAt: '2023-11-10T11:45:00Z'
  },
  {
    id: 'res-004',
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    phone: '(555) 789-0123',
    date: '2023-11-18',
    time: '19:30',
    guests: 3,
    status: 'cancelled',
    specialRequests: '',
    createdAt: '2023-11-12T16:20:00Z'
  },
  {
    id: 'res-005',
    name: 'David Rodriguez',
    email: 'drodriguez@example.com',
    phone: '(555) 234-5678',
    date: '2023-11-19',
    time: '20:00',
    guests: 5,
    status: 'pending',
    specialRequests: 'Birthday celebration, need cake',
    createdAt: '2023-11-13T10:30:00Z'
  },
  {
    id: 'res-006',
    name: 'Jessica Lee',
    email: 'jlee@example.com',
    phone: '(555) 345-6789',
    date: '2023-11-20',
    time: '18:30',
    guests: 2,
    status: 'confirmed',
    specialRequests: 'Vegetarian options needed',
    createdAt: '2023-11-14T13:45:00Z'
  }
]

export default function ReservationsManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [activeFilter, setActiveFilter] = useState('all')
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false)
  const [currentReservation, setCurrentReservation] = useState<any>(null)
  const [messageText, setMessageText] = useState('')
  
  // Filter reservations based on search term, active tab, and date filter
  const filteredReservations = mockReservations.filter(reservation => {
    // Search filter
    const matchesSearch = 
      reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.phone.includes(searchTerm)
    
    // Status filter
    const matchesStatus = 
      activeTab === 'all' ||
      (activeTab === 'pending' && reservation.status === 'pending') ||
      (activeTab === 'confirmed' && reservation.status === 'confirmed') ||
      (activeTab === 'cancelled' && reservation.status === 'cancelled')
    
    // Date filter
    const today = new Date().toISOString().split('T')[0]
    const matchesDateFilter = 
      activeFilter === 'all' ||
      (activeFilter === 'today' && reservation.date === today) ||
      (activeFilter === 'upcoming' && reservation.date > today) ||
      (activeFilter === 'past' && reservation.date < today)
    
    return matchesSearch && matchesStatus && matchesDateFilter
  })
  
  const handleViewDetails = (reservation: any) => {
    setCurrentReservation(reservation)
    setIsDetailsDialogOpen(true)
  }
  
  const handleSendMessage = (reservation: any) => {
    setCurrentReservation(reservation)
    setIsMessageDialogOpen(true)
  }
  
  const handleStatusChange = (reservation: any, newStatus: string) => {
    // In a real app, this would make an API call to update the reservation status
    console.log(`Changing reservation ${reservation.id} status from ${reservation.status} to ${newStatus}`)
    // For demo purposes, we're just logging the change
  }
  
  const handleMessageSubmit = () => {
    // In a real app, this would send an email or SMS to the customer
    console.log(`Sending message to ${currentReservation.name} (${currentReservation.email}): ${messageText}`)
    setMessageText('')
    setIsMessageDialogOpen(false)
  }
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Confirmed</Badge>
      case 'pending':
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Pending</Badge>
      case 'cancelled':
        return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Cancelled</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Reservations</h1>
        <p className="text-muted-foreground">Manage and respond to customer reservations.</p>
      </div>
      
      {/* Tabs and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList className="grid grid-cols-4 w-full sm:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reservations..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2 w-full sm:w-auto">
                <Filter className="h-4 w-4" />
                {activeFilter === 'all' && 'All Dates'}
                {activeFilter === 'today' && 'Today'}
                {activeFilter === 'upcoming' && 'Upcoming'}
                {activeFilter === 'past' && 'Past'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setActiveFilter('all')}>
                All Dates
                {activeFilter === 'all' && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveFilter('today')}>
                Today
                {activeFilter === 'today' && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveFilter('upcoming')}>
                Upcoming
                {activeFilter === 'upcoming' && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveFilter('past')}>
                Past
                {activeFilter === 'past' && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Reservations List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReservations.map((reservation, i) => (
          <motion.div
            key={reservation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className="overflow-hidden h-full">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg">{reservation.name}</h3>
                  {getStatusBadge(reservation.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{reservation.date}</span>
                    <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                    <span>{reservation.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{reservation.guests} {reservation.guests === 1 ? 'guest' : 'guests'}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{reservation.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{reservation.phone}</span>
                  </div>
                  
                  {reservation.specialRequests && (
                    <div className="text-sm mt-2">
                      <p className="text-muted-foreground font-medium mb-1">Special Requests:</p>
                      <p className="line-clamp-2">{reservation.specialRequests}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2 mt-4 justify-end">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewDetails(reservation)}
                  >
                    Details
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleSendMessage(reservation)}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredReservations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Calendar className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold">No reservations found</h3>
          <p className="text-muted-foreground max-w-md mt-1">
            {searchTerm ? `No results for "${searchTerm}"` : 'No reservations match the current filters.'} 
            Try adjusting your search or filters.
          </p>
        </div>
      )}
      
      {/* Reservation Details Dialog */}
      {currentReservation && (
        <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Reservation Details</DialogTitle>
              <DialogDescription>
                Reservation #{currentReservation.id}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{currentReservation.name}</h3>
                {getStatusBadge(currentReservation.status)}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{currentReservation.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{currentReservation.time}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Party Size</p>
                  <p className="font-medium">{currentReservation.guests} {currentReservation.guests === 1 ? 'guest' : 'guests'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium">{new Date(currentReservation.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Contact Information</p>
                <div className="space-y-1 mt-1">
                  <p className="font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {currentReservation.email}
                  </p>
                  <p className="font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {currentReservation.phone}
                  </p>
                </div>
              </div>
              
              {currentReservation.specialRequests && (
                <div>
                  <p className="text-sm text-muted-foreground">Special Requests</p>
                  <p className="mt-1">{currentReservation.specialRequests}</p>
                </div>
              )}
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">Update Status</p>
                <div className="flex gap-2">
                  <Button 
                    variant={currentReservation.status === 'confirmed' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleStatusChange(currentReservation, 'confirmed')}
                    className="flex-1"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Confirm
                  </Button>
                  <Button 
                    variant={currentReservation.status === 'pending' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleStatusChange(currentReservation, 'pending')}
                    className="flex-1"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Pending
                  </Button>
                  <Button 
                    variant={currentReservation.status === 'cancelled' ? 'destructive' : 'outline'}
                    size="sm"
                    onClick={() => handleStatusChange(currentReservation, 'cancelled')}
                    className="flex-1"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailsDialogOpen(false)}>Close</Button>
              <Button onClick={() => {
                setIsDetailsDialogOpen(false)
                handleSendMessage(currentReservation)
              }}>
                <MessageSquare className="h-4 w-4 mr-1" />
                Message Guest
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Send Message Dialog */}
      {currentReservation && (
        <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Message Guest</DialogTitle>
              <DialogDescription>
                Send a message to {currentReservation.name} regarding their reservation.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{currentReservation.email}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{currentReservation.phone}</span>
              </div>
              
              <div className="space-y-2">
                <Textarea
                  placeholder="Type your message here..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  rows={6}
                />
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Message will be sent via email to the guest.</p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsMessageDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleMessageSubmit} disabled={!messageText.trim()}>
                Send Message
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
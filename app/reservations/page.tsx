'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Clock, Users, Utensils, MessageSquare, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

// Available time slots
const timeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
  '20:00', '20:30', '21:00', '21:30', '22:00'
]

// Guest count options
const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString())

// Dining experience options
const diningExperiences = [
  { id: 'standard', name: 'Standard Dining', description: 'Our classic futuristic dining experience' },
  { id: 'chef-table', name: 'Chef\'s Table', description: 'Exclusive experience with direct interaction with our chefs' },
  { id: 'tasting-menu', name: 'Tasting Menu', description: 'Multi-course journey through our innovative cuisine' },
  { id: 'private-pod', name: 'Private Pod', description: 'Intimate dining in our secluded futuristic pods' },
]

export default function ReservationsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string>('')
  const [guests, setGuests] = useState<string>('2')
  const [experience, setExperience] = useState<string>('standard')
  const [formStep, setFormStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setReservationDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const isDateTimeSelected = date && time
  const isFormComplete = reservationDetails.name && 
                         reservationDetails.email && 
                         reservationDetails.phone

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden bg-black/60">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-orbitron text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Reserve Your Experience
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              Secure your place for a culinary journey that transcends traditional dining
            </motion.p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {!formSubmitted ? (
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mb-10 text-center"
              >
                <h2 className="text-3xl font-orbitron font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {formStep === 1 ? 'Select Your Date & Time' : 'Complete Your Reservation'}
                  </span>
                </h2>
                <div className="flex justify-center gap-4 mb-8">
                  <div className={`w-3 h-3 rounded-full ${formStep >= 1 ? 'bg-primary' : 'bg-gray-600'}`} />
                  <div className={`w-3 h-3 rounded-full ${formStep >= 2 ? 'bg-primary' : 'bg-gray-600'}`} />
                </div>
              </motion.div>

              <form onSubmit={handleSubmit}>
                {formStep === 1 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass p-8 md:p-12 rounded-lg"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Date Selection */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-orbitron font-medium">Select Date</h3>
                        </div>
                        <div className="glass p-1 rounded-md">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal bg-black/20 border-white/10",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-black/90 border border-white/10">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => {
                                  // Disable dates in the past
                                  return date < new Date(new Date().setHours(0, 0, 0, 0));
                                }}
                                className="bg-black/90 text-white"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-orbitron font-medium">Select Time</h3>
                        </div>
                        <div className="glass p-1 rounded-md">
                          <Select value={time} onValueChange={setTime}>
                            <SelectTrigger className="w-full bg-black/20 border-white/10">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border border-white/10">
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-orbitron font-medium">Number of Guests</h3>
                        </div>
                        <div className="glass p-1 rounded-md">
                          <Select value={guests} onValueChange={setGuests}>
                            <SelectTrigger className="w-full bg-black/20 border-white/10">
                              <SelectValue placeholder="Select guests" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border border-white/10">
                              {guestOptions.map((count) => (
                                <SelectItem key={count} value={count}>
                                  {count} {parseInt(count) === 1 ? 'Guest' : 'Guests'}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Dining Experience */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Utensils className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-orbitron font-medium">Dining Experience</h3>
                        </div>
                        <div className="glass p-1 rounded-md">
                          <Select value={experience} onValueChange={setExperience}>
                            <SelectTrigger className="w-full bg-black/20 border-white/10">
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border border-white/10">
                              {diningExperiences.map((exp) => (
                                <SelectItem key={exp.id} value={exp.id}>
                                  {exp.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          {diningExperiences.find(exp => exp.id === experience)?.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button 
                        type="button" 
                        onClick={() => setFormStep(2)}
                        disabled={!isDateTimeSelected}
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass p-8 md:p-12 rounded-lg"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Contact Information */}
                      <div className="space-y-6 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                          <h3 className="text-lg font-orbitron font-medium">Contact Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                            <Input 
                              id="name" 
                              name="name" 
                              value={reservationDetails.name}
                              onChange={handleInputChange}
                              className="bg-black/20 border-white/10" 
                              required 
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={reservationDetails.email}
                              onChange={handleInputChange}
                              className="bg-black/20 border-white/10" 
                              required 
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              type="tel" 
                              value={reservationDetails.phone}
                              onChange={handleInputChange}
                              className="bg-black/20 border-white/10" 
                              required 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div className="space-y-4 md:col-span-2">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-orbitron font-medium">Special Requests</h3>
                        </div>
                        <Textarea 
                          id="specialRequests" 
                          name="specialRequests" 
                          value={reservationDetails.specialRequests}
                          onChange={handleInputChange}
                          placeholder="Dietary restrictions, allergies, special occasions, or any other requests" 
                          className="bg-black/20 border-white/10 min-h-[120px]" 
                        />
                      </div>

                      {/* Reservation Summary */}
                      <div className="md:col-span-2 mt-4">
                        <div className="glass p-6 rounded-lg bg-black/30">
                          <h3 className="text-lg font-orbitron font-medium mb-4">Reservation Summary</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="h-4 w-4 text-primary" />
                              <span>Date: {date ? format(date, "PPP") : 'Not selected'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span>Time: {time || 'Not selected'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span>Guests: {guests}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Utensils className="h-4 w-4 text-primary" />
                              <span>Experience: {diningExperiences.find(exp => exp.id === experience)?.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setFormStep(1)}
                        className="border-white/10"
                      >
                        Back to Date & Time
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={!isFormComplete}
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                      >
                        Complete Reservation <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-lg text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Reservation Confirmed
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Thank you for your reservation, {reservationDetails.name}! We&rsquo;re looking forward to hosting you.
              </p>
              <div className="glass p-6 rounded-lg bg-black/30 mb-8 text-left">
                <h3 className="text-lg font-orbitron font-medium mb-4 text-center">Your Reservation Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span>Date: {date ? format(date, "PPP") : 'Not selected'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Time: {time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Guests: {guests}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    <span>Experience: {diningExperiences.find(exp => exp.id === experience)?.name}</span>
                  </div>
                </div>
                {reservationDetails.specialRequests && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Special Requests:</h4>
                    <p className="text-gray-300 text-sm">{reservationDetails.specialRequests}</p>
                  </div>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-6">
                A confirmation email has been sent to {reservationDetails.email}. If you need to make any changes to your reservation, please contact us at least 24 hours in advance.
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                <a href="/">
                  Return to Homepage
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Reservation Information Section */}
      {!formSubmitted && (
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Reservation Information
                </span>
              </h2>
              <p className="text-gray-300">
                Everything you need to know about dining at Ruya
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg"
              >
                <h3 className="text-xl font-orbitron font-semibold mb-4">Hours of Operation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday - Saturday:</span>
                    <span>5:00 PM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>5:00 PM - 9:00 PM</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg"
              >
                <h3 className="text-xl font-orbitron font-semibold mb-4">Reservation Policy</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Reservations can be made up to 30 days in advance</li>
                  <li>Credit card required for parties of 6 or more</li>
                  <li>Please notify us of any dietary restrictions</li>
                  <li>Cancellations must be made 24 hours in advance</li>
                  <li>Late arrivals may result in shortened dining time</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg"
              >
                <h3 className="text-xl font-orbitron font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Immersive dining environment with interactive elements</li>
                  <li>Multi-sensory experience combining taste, sight, and sound</li>
                  <li>Average dining time: 1.5-2.5 hours depending on experience</li>
                  <li>Smart casual dress code recommended</li>
                  <li>Photography is encouraged to capture your experience</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}
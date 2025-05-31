'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, Check } from 'lucide-react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const isFormValid = formData.name && formData.email && formData.message

  // FAQ data
  const faqs = [
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Yes, we cater to various dietary needs including vegetarian, vegan, gluten-free, and allergen-specific requirements. Please inform us of any dietary restrictions when making your reservation or contacting us."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Reservations can be canceled up to 24 hours in advance without any charge. Cancellations made less than 24 hours before your reservation may incur a fee. Please contact us directly for any changes to your reservation."
    },
    {
      question: "Is there a dress code?",
      answer: "We recommend smart casual attire for our guests. While we don't enforce a strict dress code, we encourage an elegant appearance that matches our sophisticated dining atmosphere."
    },
    {
      question: "Do you offer private dining or event spaces?",
      answer: "Yes, we offer private dining rooms and can accommodate special events. Please contact our events team directly for more information about capacity, menus, and pricing for private functions."
    },
  ]

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
                Contact Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              We'd love to hear from you. Reach out with any questions or feedback.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-orbitron font-bold mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Get In Touch
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-medium mb-2">Our Location</h3>
                    <p className="text-gray-300">
                      123 Futuristic Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-medium mb-2">Phone Number</h3>
                    <p className="text-gray-300">
                      <a href="tel:+12125551234" className="hover:text-primary transition-colors">
                        (212) 555-1234
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-medium mb-2">Email Address</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@ruyarestaurant.com" className="hover:text-primary transition-colors">
                        info@ruyarestaurant.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-medium mb-2">Opening Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 5:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <div className="glass p-1 rounded-lg overflow-hidden">
                  <div className="aspect-video w-full bg-black/30 rounded-lg relative overflow-hidden">
                    {/* This would be replaced with an actual map component in production */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                        <p className="text-gray-300">Interactive Map Would Be Here</p>
                        <p className="text-xs text-gray-500 mt-1">123 Futuristic Avenue, New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {!formSubmitted ? (
                <div>
                  <h2 className="text-3xl font-orbitron font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Send Us a Message
                    </span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="glass p-8 rounded-lg">
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
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
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-black/20 border-white/10" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-black/20 border-white/10" 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-black/20 border-white/10 min-h-[150px]" 
                          required 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={!isFormValid}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                      >
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass p-8 rounded-lg text-center h-full flex flex-col justify-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-orbitron font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Message Sent Successfully
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Thank you for reaching out to us, {formData.name}! We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    className="mx-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-300">
              Find answers to common questions about our restaurant and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-orbitron font-medium mb-2">{faq.question}</h3>
                      <p className="text-gray-300 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass rounded-xl p-10 md:p-16 text-center border border-white/5"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Ready to Experience Ruya?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Book your table today and embark on a culinary journey that transcends traditional dining.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <a href="/reservations">
                  Make a Reservation
                  <MessageSquare className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/menu">
                  View Our Menu
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
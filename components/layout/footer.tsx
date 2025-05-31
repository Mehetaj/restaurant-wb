import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="relative z-10 bg-black/90 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/">
              <h2 className="text-2xl font-orbitron font-bold text-white neon-glow mb-4">NOVA</h2>
            </Link>
            <p className="text-gray-400 mb-6">
              Experience the future of culinary arts with our innovative approach to fine dining and immersive gastronomic journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-orbitron font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-primary transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-400 hover:text-primary transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron font-medium text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Futuristic Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+12125551234" className="text-gray-400 hover:text-primary transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:info@novarestaurant.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@novarestaurant.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">
                  Mon-Sun: 5:00 PM - 11:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron font-medium text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and special offers.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-500"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RuyaRestaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
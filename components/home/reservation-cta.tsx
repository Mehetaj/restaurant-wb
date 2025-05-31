'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ReservationCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10 mix-blend-overlay" />
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass rounded-xl p-10 md:p-16 text-center border border-white/5"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Experience the Future of Dining
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Reserve your table today and embark on a culinary journey that transcends traditional dining. Limited seating available for this immersive experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/reservations">
                Reserve A Table
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
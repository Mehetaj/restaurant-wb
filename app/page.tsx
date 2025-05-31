'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedSection } from '@/components/home/featured-section'
import { ExperienceSection } from '@/components/home/experience-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { BlogPreviewSection } from '@/components/home/blog-preview-section'
import { ReservationCta } from '@/components/home/reservation-cta'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ReservationCta />
    </motion.div>
  )
}
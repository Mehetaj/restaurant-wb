'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Simmons',
    role: 'Food Critic',
    quote: 'Ruyatakes dining to a new dimension. The interactive elements and flavor combinations are unlike anything I\'ve experienced before. A true revolution in fine dining.',
    stars: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Tech Entrepreneur',
    quote: 'The fusion of technology and culinary arts at Ruyacreates an immersive journey that stimulates all senses. The Plasma-Infused Cocktail alone is worth the visit.',
    stars: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Olivia Rodriguez',
    role: 'Lifestyle Blogger',
    quote: 'From the moment you enter, Ruyatransports you to the future. The attention to detail in both presentation and flavor profiles is exceptional. A must-visit experience.',
    stars: 5,
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black/50">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Guest Experiences
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover what our guests have to say about their futuristic dining journey at Ruya.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-white/10 hover:bg-black/80"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="glass rounded-xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-primary/50">
                      <Quote className="absolute top-0 right-0 h-8 w-8 text-primary m-1 opacity-50 z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-0" />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 text-lg italic mb-4">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    <div>
                      <h4 className="font-orbitron text-white text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-white/10 hover:bg-black/80"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
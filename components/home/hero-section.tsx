'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-20 opacity-50"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-20 opacity-30">
        <ParticleBackground />
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-4 z-30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron">
              <span className="text-white">The Future of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-glow">Fine Dining</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Experience a culinary journey that blends cutting-edge molecular gastronomy with immersive environments and flavors from the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="/reservations">
                Book A Table
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/menu">
                Explore Menu
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-primary"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [
              Math.random() * 0.5 + 0.25,
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.5 + 0.25,
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 20 + 20,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
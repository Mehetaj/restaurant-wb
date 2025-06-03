'use client'

import { motion } from 'framer-motion'

export function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer spinning ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-t-2 border-r-2 border-primary"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Middle spinning ring */}
        <motion.div
          className="absolute inset-0 w-24 h-24 m-auto rounded-full border-b-2 border-l-2 border-secondary"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner spinning ring */}
        <motion.div
          className="absolute inset-0 w-16 h-16 m-auto rounded-full border-t-2 border-l-2 border-white/30"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Pulsing center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="font-orbitron text-lg text-center text-white">
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              RUYA
            </motion.span>
          </div>
        </motion.div>
        
        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-primary"
            animate={{
              x: Math.cos(i * (Math.PI / 3)) * 50,
              y: Math.sin(i * (Math.PI / 3)) * 50,
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <motion.div 
        className="absolute bottom-1/4 font-orbitron text-sm tracking-widest"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        LOADING EXPERIENCE
      </motion.div>
    </div>
  )
}
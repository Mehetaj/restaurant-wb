'use client'

import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </ThemeProvider>
  )
}
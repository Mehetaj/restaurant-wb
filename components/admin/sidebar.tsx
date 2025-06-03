'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  FileText, 
  CalendarClock, 
  MessageSquare, 
  Settings, 
  Home,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type NavItem = {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: 'Menu',
    href: '/admin/menu',
    icon: <UtensilsCrossed className="h-5 w-5" />
  },
  {
    title: 'Blog',
    href: '/admin/blog',
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: 'Reservations',
    href: '/admin/reservations',
    icon: <CalendarClock className="h-5 w-5" />
  },
  {
    title: 'Messages',
    href: '/admin/messages',
    icon: <MessageSquare className="h-5 w-5" />
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: <Settings className="h-5 w-5" />
  }
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) return null
  
  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-full"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex flex-col h-screen w-64 border-r bg-card">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <p className="text-sm text-muted-foreground mt-1">Quantum Taste Restaurant</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {item.icon}
              {item.title}
              {pathname === item.href && (
                <ChevronRight className="h-4 w-4 ml-auto" />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 mt-auto border-t">
          <Button 
            variant="outline" 
            className="w-full justify-start text-muted-foreground"
            asChild
          >
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Back to Website
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          
          <nav className="relative w-64 max-w-[75%] h-full bg-card overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold">Admin Panel</h2>
              <p className="text-sm text-muted-foreground mt-1">Quantum Taste Restaurant</p>
            </div>
            
            <div className="px-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.title}
                  {pathname === item.href && (
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  )}
                </Link>
              ))}
            </div>
            
            <div className="p-4 mt-8 border-t">
              <Button 
                variant="outline" 
                className="w-full justify-start text-muted-foreground"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/">
                  <Home className="h-5 w-5 mr-2" />
                  Back to Website
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  )
}
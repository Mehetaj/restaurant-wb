'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MenuCategoryTabs } from '@/components/menu/menu-category-tabs'
import { MenuItems } from '@/components/menu/menu-items'
import { menuItems, categories } from '@/lib/menu-data'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = item.price >= priceRange.min && item.price <= priceRange.max

    return matchesCategory && matchesSearch && matchesPrice
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
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
                Our Menu
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              Explore our inRuyative creations that blend futuristic techniques with exceptional flavors.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search our menu..."
                className="pl-10 bg-black/20 border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <div className="glass p-6 rounded-lg">
                  <h3 className="font-orbitron text-lg mb-4">Price Range</h3>
                  <div className="flex items-center gap-4">
                    <div>
                      <label htmlFor="min-price" className="block text-sm text-gray-400 mb-1">
                        Min Price ($)
                      </label>
                      <Input
                        id="min-price"
                        type="number"
                        min="0"
                        max="100"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                        className="w-24 bg-black/20 border-white/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="block text-sm text-gray-400 mb-1">
                        Max Price ($)
                      </label>
                      <Input
                        id="max-price"
                        type="number"
                        min="0"
                        max="100"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        className="w-24 bg-black/20 border-white/10"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <MenuCategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <MenuItems items={filteredItems} />
        </div>
      </section>
    </motion.div>
  )
}
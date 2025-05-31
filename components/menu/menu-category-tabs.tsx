'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Category {
  id: string
  name: string
  icon: string
}

interface MenuCategoryTabsProps {
  categories: Category[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export function MenuCategoryTabs({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: MenuCategoryTabsProps) {
  return (
    <div className="mb-12 overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        <button
          className={cn(
            'relative px-6 py-3 rounded-full text-sm font-medium transition-colors',
            selectedCategory === 'all'
              ? 'text-black'
              : 'text-gray-400 hover:text-white'
          )}
          onClick={() => setSelectedCategory('all')}
        >
          {selectedCategory === 'all' && (
            <motion.div
              layoutId="categoryBg"
              className="absolute inset-0 bg-primary rounded-full"
              initial={false}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">All</span>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={cn(
              'relative px-6 py-3 rounded-full text-sm font-medium transition-colors',
              selectedCategory === category.id
                ? 'text-black'
                : 'text-gray-400 hover:text-white'
            )}
            onClick={() => setSelectedCategory(category.id)}
          >
            {selectedCategory === category.id && (
              <motion.div
                layoutId="categoryBg"
                className="absolute inset-0 bg-primary rounded-full"
                initial={false}
                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  isSpecial?: boolean
  isVegan?: boolean
  spicyLevel?: number
  ingredients?: string[]
}

interface MenuItemsProps {
  items: MenuItem[]
}

export function MenuItems({ items }: MenuItemsProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.length > 0 ? (
          items.map((menuItem) => (
            <motion.div
              key={menuItem.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedItem(menuItem)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={menuItem.image}
                  alt={menuItem.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                {menuItem.isSpecial && (
                  <Badge className="absolute top-3 right-3 bg-primary text-black border-none font-medium">
                    Chef&rsquo;s Special
                  </Badge>
                )}
                {menuItem.isVegan && (
                  <Badge variant="outline" className="absolute top-3 left-3 border-green-500 text-green-400">
                    Vegan
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-orbitron text-lg font-medium text-white group-hover:text-primary transition-colors">
                    {menuItem.name}
                  </h3>
                  <span className="text-primary font-orbitron">${menuItem.price}</span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{menuItem.description}</p>
                
                {menuItem.spicyLevel && (
                  <div className="mt-3 flex items-center">
                    <span className="text-xs text-gray-500 mr-2">Spicy Level:</span>
                    <div className="flex">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <span
                          key={index}
                          className={`h-2 w-2 rounded-full mx-0.5 ${
                            index < menuItem.spicyLevel! ? 'bg-red-500' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 text-lg">No menu items found matching your criteria.</p>
          </div>
        )}
      </motion.div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="sm:max-w-xl bg-black/90 border-white/10">
            <DialogHeader>
              <DialogTitle className="font-orbitron text-xl text-white">{selectedItem.name}</DialogTitle>
              <DialogDescription className="text-gray-400">{selectedItem.description}</DialogDescription>
            </DialogHeader>
            
            <div className="relative h-64 overflow-hidden rounded-md my-4">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-orbitron text-white mb-2">Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.ingredients?.map((ingredient, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/5">
                      {ingredient}
                    </Badge>
                  )) || <p className="text-gray-500 text-sm">Ingredients information not available</p>}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  {selectedItem.isSpecial && (
                    <Badge className="bg-primary text-black border-none">Chef&rsquo;s Special</Badge>
                  )}
                  {selectedItem.isVegan && (
                    <Badge variant="outline" className="border-green-500 text-green-400">Vegan</Badge>
                  )}
                </div>
                <span className="text-xl font-orbitron text-primary">${selectedItem.price}</span>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}


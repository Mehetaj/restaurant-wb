'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Gallery item type definition
type GalleryItem = {
  id: number
  title: string
  description: string
  type: 'image' | 'video' | 'reel'
  category: string
  src: string
  thumbnail?: string
}

export default function GalleryPage() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>('all')
  
  // Sample gallery data
  const galleryItems: GalleryItem[] = [
    // Images
    {
      id: 1,
      title: 'Signature Dish',
      description: 'Our award-winning molecular gastronomy creation',
      type: 'image',
      category: 'food',
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Main Dining Area',
      description: 'The futuristic ambiance of our main dining space',
      type: 'image',
      category: 'interior',
      src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1170&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Chef\'s Special',
      description: 'Seasonal delicacy prepared by our head chef',
      type: 'image',
      category: 'food',
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1169&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Private Dining Pod',
      description: 'Exclusive dining experience in our signature pods',
      type: 'image',
      category: 'interior',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Cocktail Creation',
      description: 'Mixologist preparing our signature smoke-infused cocktail',
      type: 'image',
      category: 'drinks',
      src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1172&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Dessert Platter',
      description: 'Artistic arrangement of our dessert selection',
      type: 'image',
      category: 'food',
      src: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1170&auto=format&fit=crop'
    },
    
    // Videos
    {
      id: 7,
      title: 'Behind the Scenes',
      description: 'A day in our kitchen with the culinary team',
      type: 'video',
      category: 'kitchen',
      src: 'https://player.vimeo.com/video/555220046',
      thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1170&auto=format&fit=crop'
    },
    {
      id: 8,
      title: 'Chef Interview',
      description: 'Meet our executive chef and learn about our philosophy',
      type: 'video',
      category: 'team',
      src: 'https://player.vimeo.com/video/648458365',
      thumbnail: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1154&auto=format&fit=crop'
    },
    {
      id: 9,
      title: 'Cooking Technique',
      description: 'Special preparation method for our signature dish',
      type: 'video',
      category: 'kitchen',
      src: 'https://player.vimeo.com/video/614112556',
      thumbnail: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1074&auto=format&fit=crop'
    },
    
    // Reels
    {
      id: 10,
      title: 'Quick Dish Preview',
      description: 'A glimpse of our new menu item',
      type: 'reel',
      category: 'food',
      src: 'https://player.vimeo.com/video/559498800',
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop'
    },
    {
      id: 11,
      title: 'Cocktail Mixing',
      description: 'The art of crafting our signature drinks',
      type: 'reel',
      category: 'drinks',
      src: 'https://player.vimeo.com/video/543729899',
      thumbnail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1257&auto=format&fit=crop'
    },
    {
      id: 12,
      title: 'Dining Experience',
      description: 'The full immersive journey at Ruya',
      type: 'reel',
      category: 'interior',
      src: 'https://player.vimeo.com/video/573749884',
      thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop'
    },
  ]

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'interior', label: 'Interior' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'team', label: 'Team' },
  ]

  // Filter items based on active category and type
  const getFilteredItems = (type: 'image' | 'video' | 'reel' | 'all') => {
    return galleryItems.filter(item => {
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory
      const typeMatch = type === 'all' || item.type === type
      return categoryMatch && typeMatch
    })
  }

  // Modal state for viewing items
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      {/* Hero Section */}
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
                Our Gallery
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              Explore the visual journey of Ruya through our curated collection of images, videos, and reels.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-6 ${activeCategory === category.id ? 'bg-gradient-to-r from-primary to-secondary text-white' : ''}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Tabs for content types */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="reels">Reels</TabsTrigger>
            </TabsList>

            {/* All Content */}
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems('all').map((item) => (
                  <GalleryCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => setSelectedItem(item)} 
                  />
                ))}
              </div>
            </TabsContent>

            {/* Images */}
            <TabsContent value="images" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems('image').map((item) => (
                  <GalleryCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => setSelectedItem(item)} 
                  />
                ))}
              </div>
            </TabsContent>

            {/* Videos */}
            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems('video').map((item) => (
                  <GalleryCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => setSelectedItem(item)} 
                  />
                ))}
              </div>
            </TabsContent>

            {/* Reels */}
            <TabsContent value="reels" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems('reel').map((item) => (
                  <GalleryCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => setSelectedItem(item)} 
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Modal for viewing selected item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto glass rounded-lg p-1">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="p-6">
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title} 
                  className="w-full h-auto rounded-lg" 
                />
              ) : (
                <div className="aspect-video w-full">
                  <iframe 
                    src={selectedItem.src} 
                    className="w-full h-full rounded-lg" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              
              <div className="mt-6">
                <h3 className="font-orbitron text-2xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {selectedItem.title}
                  </span>
                </h3>
                <p className="text-gray-300">{selectedItem.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-medium mr-2">
                    {selectedItem.type.charAt(0).toUpperCase() + selectedItem.type.slice(1)}
                  </span>
                  <span className="inline-block bg-secondary/20 text-secondary rounded-full px-3 py-1 text-sm font-medium">
                    {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Behind the Scenes Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Behind The Scenes
              </span>
            </h2>
            <p className="text-gray-300">
              Get a glimpse into the creative process and the people who make Ruya an extraordinary dining experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass p-1 rounded-lg overflow-hidden"
            >
              <div className="aspect-video w-full relative overflow-hidden rounded-lg">
                <iframe 
                  src="https://player.vimeo.com/video/555220046" 
                  className="absolute inset-0 w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Our Culinary Team
                  </span>
                </h3>
                <p className="text-gray-300 text-sm">Watch our talented chefs create culinary masterpieces in our state-of-the-art kitchen.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass p-1 rounded-lg overflow-hidden"
            >
              <div className="aspect-video w-full relative overflow-hidden rounded-lg">
                <iframe 
                  src="https://player.vimeo.com/video/648458365" 
                  className="absolute inset-0 w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    The Design Process
                  </span>
                </h3>
                <p className="text-gray-300 text-sm">Discover how we created our unique futuristic dining environment to enhance your culinary journey.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass rounded-xl p-10 md:p-16 text-center border border-white/5"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Experience Ruya In Person
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to experience the future of dining? Book your table today and create your own memories at Ruya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <a href="/reservations">
                  Make a Reservation
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

// Gallery Card Component
function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass p-1 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img 
          src={item.type === 'image' ? item.src : (item.thumbnail || '')} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {item.type !== 'image' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className="inline-block bg-black/70 text-white rounded-full px-2 py-1 text-xs font-medium">
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-orbitron text-lg font-medium mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
        <div className="mt-2">
          <span className="inline-block bg-secondary/10 text-secondary rounded-full px-2 py-0.5 text-xs font-medium">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
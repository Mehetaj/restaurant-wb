'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Molecular Gastronomy',
    excerpt: 'Explore how chemistry and physics transform ingredients into culinary masterpieces through innovative techniques.',
    date: 'May 12, 2025',
    author: 'Chef Alexandre',
    image: 'https://images.pexels.com/photos/7627405/pexels-photo-7627405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'science-behind-molecular-gastronomy',
  },
  {
    id: 2,
    title: 'The Future of Sustainable Fine Dining',
    excerpt: 'How Ruyais leading the way in sustainable practices while creating futuristic culinary experiences.',
    date: 'April 28, 2025',
    author: 'Emma Torres',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'future-of-sustainable-fine-dining',
  },
  {
    id: 3,
    title: 'Interactive Dining: Beyond the Plate',
    excerpt: 'How multi-sensory experiences are reshaping expectations in modern gastronomy.',
    date: 'April 15, 2025',
    author: 'Dr. Julian Wong',
    image: 'https://images.pexels.com/photos/14211881/pexels-photo-14211881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'interactive-dining-beyond-the-plate',
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-24 relative">
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
                Culinary Insights
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
              Explore the latest trends, techniques, and stories from our culinary team.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block glass rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="font-orbitron text-xl font-medium mb-3 text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="inline-flex items-center text-primary text-sm group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
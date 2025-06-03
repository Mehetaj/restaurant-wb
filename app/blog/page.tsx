'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts, allTags } from '@/lib/blog-data';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

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
                Culinary Insights
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              Explore the latest trends, techniques, and stories from our culinary team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-gray-400 mb-4">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} {selectedTag ? `tagged with "${selectedTag}"` : ''}
                </p>
                
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group glass rounded-xl overflow-hidden h-full flex flex-col"
                    >
                      <Link href={`/blog/${post.slug}`} className="block h-full">
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
                          <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="inline-flex items-center text-primary text-sm group-hover:text-white transition-colors">
                              Read More
                              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="text-xs text-gray-500">{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="glass rounded-xl p-8 text-center">
                    <p className="text-gray-300 mb-4">No articles found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedTag(null);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="font-orbitron text-lg font-medium mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Search Articles
                    </span>
                  </h3>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search by keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-black/20 border-white/10 pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="font-orbitron text-lg font-medium mb-4 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Topics
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedTag === tag ? 'bg-primary text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Featured Post */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <h3 className="font-orbitron text-lg font-medium p-6 pb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Featured Article
                    </span>
                  </h3>
                  <Link href="/blog/science-behind-molecular-gastronomy" className="block group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="https://images.pexels.com/photos/7627405/pexels-photo-7627405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="The Science Behind Molecular Gastronomy"
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                    </div>
                    <div className="p-6 pt-4">
                      <h4 className="font-orbitron text-base font-medium mb-2 group-hover:text-primary transition-colors">
                        The Science Behind Molecular Gastronomy
                      </h4>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          May 12, 2025
                        </div>
                      </div>
                      <span className="inline-flex items-center text-primary text-sm group-hover:text-white transition-colors">
                        Read Article
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="font-orbitron text-lg font-medium mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Subscribe to Our Newsletter
                    </span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Get the latest culinary insights and exclusive content delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-black/20 border-white/10"
                    />
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                      Subscribe
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
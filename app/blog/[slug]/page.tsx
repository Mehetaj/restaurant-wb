// Remove 'use client' directive since it can't be used with generateStaticParams

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Blog post type definition
type BlogPost = {
  id: number
  title: string
  excerpt: string
  content?: string
  date: string
  author: string
  authorRole?: string
  authorImage?: string
  image: string
  slug: string
  tags?: string[]
  readTime?: string
}

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Science Behind Molecular Gastronomy',
    excerpt: 'Explore how chemistry and physics transform ingredients into culinary masterpieces through innovative techniques.',
    content: `
      <p>Molecular gastronomy represents the intersection of culinary arts and scientific disciplines, transforming traditional cooking into a laboratory of flavors, textures, and presentations that challenge our perceptions of food.</p>
      
      <h2>The Origins of Molecular Gastronomy</h2>
      
      <p>The term "molecular gastronomy" was coined in the late 1980s by physicist Nicholas Kurti and physical chemist Hervé This. Their goal was to investigate the physical and chemical transformations that occur during cooking processes, applying scientific principles to culinary techniques.</p>
      
      <p>What began as academic research quickly evolved into a revolutionary culinary movement that has influenced chefs worldwide, including our team at Ruya.</p>
      
      <h2>Key Techniques in Our Kitchen</h2>
      
      <p>At Ruya, we employ several molecular gastronomy techniques that allow us to create unique dining experiences:</p>
      
      <h3>Spherification</h3>
      
      <p>This technique involves transforming liquids into sphere-shaped preparations with thin membranes that burst in the mouth. We use calcium chloride and sodium alginate to create caviar-like spheres of intense flavors that add unexpected bursts to our dishes.</p>
      
      <h3>Sous Vide Cooking</h3>
      
      <p>By vacuum-sealing ingredients and cooking them in precisely controlled water baths, we achieve perfect doneness and texture every time. This scientific approach ensures consistency while preserving flavors that would otherwise be lost in traditional cooking methods.</p>
      
      <h3>Liquid Nitrogen Applications</h3>
      
      <p>With temperatures of -196°C, liquid nitrogen allows us to flash-freeze ingredients, creating unique textures and visual presentations. Our signature tableside ice creams demonstrate this spectacular technique while delivering exceptional flavor concentration.</p>
      
      <h2>The Science of Flavor Perception</h2>
      
      <p>Understanding how humans perceive flavor is central to our approach. Flavor is not just about taste but involves all senses:</p>
      
      <ul>
        <li><strong>Visual perception:</strong> The appearance of food creates expectations that influence taste perception</li>
        <li><strong>Aroma:</strong> 80% of what we perceive as taste actually comes from smell</li>
        <li><strong>Texture:</strong> Mouthfeel dramatically affects our enjoyment of food</li>
        <li><strong>Sound:</strong> The auditory experience of eating affects perception (the crunch of crispy elements)</li>
        <li><strong>Temperature:</strong> Heat and cold affect flavor compound volatility and perception</li>
      </ul>
      
      <p>By manipulating these elements through scientific understanding, we create multi-sensory experiences that transcend traditional dining.</p>
      
      <h2>Innovation Through Understanding</h2>
      
      <p>Our culinary team continuously studies the chemical properties of ingredients to create unexpected combinations. Understanding that compounds with similar molecular structures often pair well together has led to some of our most acclaimed dishes, such as our white chocolate and caviar pairing, where the trimethylamine in both creates a harmonious flavor bridge.</p>
      
      <p>The science of molecular gastronomy isn't just about spectacle—it's about deepening our understanding of food and expanding the possibilities of the culinary arts. At Ruya, we're proud to be at the forefront of this delicious intersection of science and cuisine.</p>
    `,
    date: 'May 12, 2025',
    author: 'Chef Alexandre',
    authorRole: 'Executive Chef',
    authorImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=768&auto=format&fit=crop',
    image: 'https://images.pexels.com/photos/7627405/pexels-photo-7627405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'science-behind-molecular-gastronomy',
    tags: ['Molecular Gastronomy', 'Culinary Science', 'Innovation'],
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Future of Sustainable Fine Dining',
    excerpt: 'How Ruya is leading the way in sustainable practices while creating futuristic culinary experiences.',
    content: `
      <p>At Ruya, we believe that the future of fine dining must embrace sustainability without compromising on innovation or experience. Our commitment to sustainable practices is woven into every aspect of our operation, from ingredient sourcing to waste management.</p>
      
      <h2>Redefining Luxury Through Sustainability</h2>
      
      <p>Traditionally, luxury dining has been associated with rare, exotic ingredients often sourced from distant locations. We're challenging this paradigm by demonstrating that true luxury lies in thoughtful sourcing, minimal environmental impact, and maximum flavor.</p>
      
      <p>Our approach proves that sustainability and exceptional dining experiences are not mutually exclusive—in fact, they enhance one another.</p>
      
      <h2>Our Sustainable Practices</h2>
      
      <h3>Hyperlocal Sourcing</h3>
      
      <p>Our rooftop aeroponic garden provides us with herbs, microgreens, and select vegetables year-round, reducing transportation emissions while ensuring peak freshness. What we can't grow ourselves comes from farms within a 50-mile radius, supporting local agriculture and reducing our carbon footprint.</p>
      
      <h3>Zero-Waste Philosophy</h3>
      
      <p>We've implemented a comprehensive zero-waste program that has reduced our landfill contribution by 95%. Food scraps are composted or repurposed into new dishes—carrot tops become pesto, fish bones become stock, and vegetable trimmings transform into fermented garnishes.</p>
      
      <h3>Energy and Water Conservation</h3>
      
      <p>Our kitchen is powered by 100% renewable energy, and we've installed water reclamation systems that reduce our water usage by 60% compared to traditional restaurants. Even our dining room lighting uses energy-efficient LED technology that reduces consumption while maintaining the perfect ambiance.</p>
      
      <h2>Sustainable Innovation on the Plate</h2>
      
      <p>Sustainability drives our menu innovation in exciting ways:</p>
      
      <ul>
        <li><strong>Overlooked Ingredients:</strong> We showcase underutilized but delicious ingredients like invasive species and overlooked fish varieties</li>
        <li><strong>Plant-Forward Focus:</strong> 60% of our menu items are plant-based, reducing environmental impact while exploring the vast potential of vegetable cuisine</li>
        <li><strong>Preservation Techniques:</strong> We employ fermentation, curing, and other preservation methods to extend seasonal ingredients year-round</li>
      </ul>
      
      <h2>The Business Case for Sustainability</h2>
      
      <p>Beyond environmental benefits, our sustainable practices have proven economically advantageous. By reducing waste, we've lowered food costs by 12%. Our energy-efficient systems have decreased utility expenses by 30%. Most importantly, our commitment to sustainability has resonated with guests, with 78% mentioning our environmental practices in positive reviews.</p>
      
      <p>The future of fine dining must balance culinary excellence with environmental responsibility. At Ruya, we're proving that sustainability isn't just the right choice for the planet—it's the right choice for creating truly exceptional dining experiences that look toward the future.</p>
    `,
    date: 'April 28, 2025',
    author: 'Emma Torres',
    authorRole: 'Sustainability Director',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=768&auto=format&fit=crop',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'future-of-sustainable-fine-dining',
    tags: ['Sustainability', 'Fine Dining', 'Future Food'],
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Interactive Dining: Beyond the Plate',
    excerpt: 'How multi-sensory experiences are reshaping expectations in modern gastronomy.',
    content: `
      <p>The modern dining experience has evolved far beyond simply serving delicious food on a plate. At Ruya, we're pioneering a new frontier in gastronomy that engages all the senses to create immersive, interactive experiences that diners remember long after the last bite.</p>
      
      <h2>The Multi-Sensory Revolution</h2>
      
      <p>Research in neurogastronomy—the study of how the brain creates flavor perceptions—has revealed that dining is inherently multi-sensory. What we taste is influenced by what we see, hear, smell, and feel. By deliberately designing for all senses, we create more profound and memorable dining experiences.</p>
      
      <h2>Beyond Taste: Engaging All Senses</h2>
      
      <h3>Visual Innovation</h3>
      
      <p>Our signature dish, "Celestial Sphere," incorporates projection mapping directly onto a white chocolate sphere, creating a dynamic visual narrative that complements the evolving flavors as the diner breaks through the shell. This visual storytelling adds context and emotion to the gustatory experience.</p>
      
      <h3>Sonic Elements</h3>
      
      <p>We've collaborated with sound artists to create custom audio environments that enhance specific dishes. Our seafood tasting menu is accompanied by subtle oceanic soundscapes that research shows can enhance the perception of freshness and salinity in the food.</p>
      
      <h3>Aromatic Orchestration</h3>
      
      <p>Aroma diffusers at each table release synchronized scents that complement or contrast with dishes at precise moments. For our forest-inspired dessert, the scent of pine and earth is released just before serving, priming the olfactory system and enhancing the woodland flavors.</p>
      
      <h3>Tactile Considerations</h3>
      
      <p>We carefully consider the weight, texture, and temperature of our serviceware. Our "Contrast" course is served on plates with different textures on each side, creating a tactile juxtaposition that highlights the textural elements in the food itself.</p>
      
      <h2>Interactive Elements That Engage Diners</h2>
      
      <p>We believe diners should be participants, not just observers:</p>
      
      <ul>
        <li><strong>DIY Finishing:</strong> Several courses invite guests to complete the dish themselves, adding final elements or causing chemical reactions that transform the dish before their eyes</li>
        <li><strong>Tableside Transformations:</strong> Our staff performs theatrical elements of preparation at the table, making diners part of the creative process</li>
        <li><strong>Digital Integration:</strong> Optional AR elements accessible via QR codes provide deeper stories about ingredients, techniques, and inspiration</li>
      </ul>
      
      <h2>The Psychology of Interactive Dining</h2>
      
      <p>Interactive elements do more than entertain—they create what psychologists call "peak experiences" that form stronger memories. By engaging diners as active participants, we create emotional connections to the food and the overall experience.</p>
      
      <p>Studies show that interactive dining experiences lead to higher satisfaction ratings and increased word-of-mouth recommendations. When diners feel personally involved in their meal, they develop a sense of co-creation that enhances their enjoyment.</p>
      
      <h2>The Future of Dining Experiences</h2>
      
      <p>As technology advances, the possibilities for interactive dining continue to expand. We're currently developing experiences incorporating subtle haptic feedback, personalized sensory profiles based on individual preferences, and interactive elements that adapt to diners' emotional responses.</p>
      
      <p>At Ruya, we believe that the future of fine dining lies not just in what's on the plate, but in creating holistic experiences that engage, surprise, and delight on every sensory level. By pushing the boundaries of interactive dining, we're redefining what a restaurant can be in the 21st century.</p>
    `,
    date: 'April 15, 2025',
    author: 'Dr. Julian Wong',
    authorRole: 'Food Scientist',
    authorImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=768&auto=format&fit=crop',
    image: 'https://images.pexels.com/photos/14211881/pexels-photo-14211881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'interactive-dining-beyond-the-plate',
    tags: ['Interactive Dining', 'Multi-sensory', 'Experience'],
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Fusion Cuisine: Blending Tradition with Innovation',
    excerpt: 'Discover how our chefs combine traditional cooking methods with cutting-edge techniques to create unique flavor profiles.',
    date: 'April 5, 2025',
    author: 'Sophia Chen',
    authorRole: 'Head of Culinary Innovation',
    authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=768&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1287&auto=format&fit=crop',
    slug: 'fusion-cuisine-tradition-innovation',
    tags: ['Fusion Cuisine', 'Culinary Traditions', 'Innovation'],
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'The Art of Food Presentation',
    excerpt: 'How visual aesthetics enhance the dining experience and influence taste perception.',
    date: 'March 22, 2025',
    author: 'Marcus Johnson',
    authorRole: 'Creative Director',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=768&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop',
    slug: 'art-of-food-presentation',
    tags: ['Food Presentation', 'Culinary Arts', 'Visual Design'],
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Seasonal Ingredients: The Foundation of Excellence',
    excerpt: 'Why we prioritize seasonal and local ingredients, and how they elevate our menu offerings.',
    date: 'March 10, 2025',
    author: 'Isabella Martinez',
    authorRole: 'Head Chef',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=768&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1170&auto=format&fit=crop',
    slug: 'seasonal-ingredients-foundation-excellence',
    tags: ['Seasonal Ingredients', 'Local Sourcing', 'Menu Development'],
    readTime: '4 min read'
  },
]

// Related posts function
const getRelatedPosts = (currentSlug: string, tags: string[] = []) => {
  // Filter out the current post and find posts with matching tags
  const relatedByTags = blogPosts
    .filter(post => post.slug !== currentSlug && post.tags?.some(tag => tags.includes(tag)))
    .slice(0, 3)
  
  // If we don't have 3 related posts by tags, add recent posts
  if (relatedByTags.length < 3) {
    const recentPosts = blogPosts
      .filter(post => post.slug !== currentSlug && !relatedByTags.some(related => related.id === post.id))
      .slice(0, 3 - relatedByTags.length)
    
    return [...relatedByTags, ...recentPosts]
  }
  
  return relatedByTags
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Get post by slug
function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

// Get related posts for a post
function getRelatedPostsForSlug(slug: string): BlogPost[] {
  const post = getPostBySlug(slug)
  if (!post || !post.tags) return []
  return getRelatedPosts(slug, post.tags)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPostBySlug(slug)
  const relatedPosts = getRelatedPostsForSlug(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 -mt-32">
          <div className="max-w-3xl mx-auto glass rounded-xl p-8 md:p-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {post.title}
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag) => (
                <Link 
                  key={tag} 
                  href={`/blog?tag=${tag}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Author Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <div className="glass rounded-xl p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    {post.authorImage ? (
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                        <User className="h-12 w-12 text-primary" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-orbitron text-lg font-medium mb-1">{post.author}</h3>
                  {post.authorRole && (
                    <p className="text-gray-400 text-sm mb-4">{post.authorRole}</p>
                  )}
                  <p className="text-gray-300 text-sm">
                    Culinary expert specializing in innovative dining experiences and sustainable practices.
                  </p>
                </div>
                
                {/* Share Options */}
                <div className="glass rounded-xl p-6">
                  <h3 className="font-orbitron text-lg font-medium mb-4 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      Share This Article
                    </span>
                  </h3>
                  <div className="flex justify-center space-x-4">
                    <button className="h-10 w-10 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] transition-colors">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Article Body */}
              <article className="glass rounded-xl p-6 md:p-10 mb-10">
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />
              </article>
              
              {/* Related Articles */}
              <div className="mt-16">
                <h2 className="font-orbitron text-2xl font-bold mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Related Articles
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <article
                      key={relatedPost.id}
                      className="group glass rounded-xl overflow-hidden h-full flex flex-col"
                    >
                      <Link href={`/blog/${relatedPost.slug}`} className="block h-full">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                        </div>
                        <div className="p-5 flex-grow flex flex-col">
                          <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {relatedPost.date}
                            </div>
                          </div>
                          <h3 className="font-orbitron text-base font-medium mb-2 text-white group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-400 text-xs mb-3 flex-grow line-clamp-2">{relatedPost.excerpt}</p>
                          <span className="inline-flex items-center text-primary text-xs group-hover:text-white transition-colors">
                            Read Article
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
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
                About Ruya
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              Discover the story, vision, and people behind our futuristic dining experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {/* Replace with actual image */}
                    <div className="text-center p-12 border border-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-xl font-orbitron text-primary">Restaurant Image</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/50 rounded-full z-0" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-orbitron font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2023, Ruyawas born from a vision to revolutionize the dining experience by blending cutting-edge culinary techniques with immersive atmospheres and sustainable practices.
                </p>
                <p>
                  Our founder, Chef Alexandra Chen, spent years studying molecular gastronomy and futuristic food design before bringing her vision to life in the heart of the city. What started as an experimental pop-up quickly gained recognition for its innovative approach to fine dining.
                </p>
                <p>
                  Today, Ruyastands at the intersection of art, science, and gastronomy—creating memorable experiences that challenge perceptions and delight the senses. Each dish tells a story of innovation, each visit offers a journey into the future of food.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
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
                Our Philosophy
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-orbitron text-primary">1</span>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push boundaries, experimenting with new techniques, flavors, and presentations to create dining experiences that surprise and inspire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-orbitron text-primary">2</span>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-300">
                We're committed to ethical sourcing, zero-waste practices, and reducing our environmental footprint while creating exceptional culinary experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-orbitron text-primary">3</span>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-4">Experience</h3>
              <p className="text-gray-300">
                Beyond just food, we create multisensory journeys that engage all senses, transforming dining into an immersive adventure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16">
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
                Meet Our Team
              </span>
            </h2>
            <p className="text-gray-300">
              The visionaries and culinary artists behind's extraordinary experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <span className="text-lg font-orbitron text-primary">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-2 text-center">Alexandra Chen</h3>
              <p className="text-primary text-center mb-4">Founder & Executive Chef</p>
              <p className="text-gray-300 text-center">
                Visionary chef with expertise in molecular gastronomy and futuristic food design, bringing innovation to every dish.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <span className="text-lg font-orbitron text-primary">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-2 text-center">Marcus Rivera</h3>
              <p className="text-primary text-center mb-4">Head Chef</p>
              <p className="text-gray-300 text-center">
                Award-winning culinary artist specializing in avant-garde techniques and flavor combinations.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <span className="text-lg font-orbitron text-primary">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-2 text-center">Sophia Kim</h3>
              <p className="text-primary text-center mb-4">Experience Director</p>
              <p className="text-gray-300 text-center">
                Designs immersive dining environments that complement and enhance the culinary journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Join Our Team
              </span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision for innovative dining experiences. If you're creative, dedicated, and eager to push culinary boundaries, we'd love to hear from you.
            </p>
            <Link href="/opportunities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full hover:shadow-glow transition-all duration-300"
              >
                View Opportunities
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
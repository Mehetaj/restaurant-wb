'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experienceItems = [
  {
    id: 1,
    title: 'Immersive Dining Environments',
    description: 'Experience multi-sensory dining with projection mapping, temperature control, and scent diffusion',
    icon: '🌌',
  },
  {
    id: 2,
    title: 'Molecular Gastronomy',
    description: 'Innovative culinary techniques that transform familiar ingredients into unforgettable experiences',
    icon: '🧪',
  },
  {
    id: 3,
    title: 'Interactive Cuisine',
    description: 'Dishes that evolve as you dine, changing flavor profiles with temperature and time',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Tableside Spectacles',
    description: 'Theatrical presentations by our skilled staff, creating unforgettable moments',
    icon: '🔥',
  },
]

export function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.pexels.com/photos/6004758/pexels-photo-6004758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Restaurant ambiance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Experience Dining in the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Future
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              At Ruya, we've reimagined what dining can be. Our restaurant combines cutting-edge technology, innovative culinary techniques, and artistic presentation to create an experience that engages all your senses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-orbitron text-lg font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-10 mix-blend-overlay" />
              <Image
                src="https://images.pexels.com/photos/5424139/pexels-photo-5424139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Futuristic dining experience"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
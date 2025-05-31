'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, ChevronDown, ChevronUp, FileText, Send } from 'lucide-react'

// Job listing data
const jobListings = [
  {
    id: 1,
    title: 'Molecular Gastronomy Chef',
    department: 'Culinary',
    type: 'Full-time',
    location: 'On-site',
    description: 'Join our innovative culinary team to create avant-garde dishes using molecular gastronomy techniques. You will experiment with textures, flavors, and presentations to deliver unforgettable dining experiences.',
    requirements: [
      'Minimum 3 years experience in fine dining',
      'Knowledge of molecular gastronomy techniques',
      'Culinary degree or equivalent experience',
      'Creative mindset and passion for innovation',
      'Ability to work in a fast-paced environment'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Paid time off',
      'Professional development opportunities',
      'Employee meal program'
    ]
  },
  {
    id: 2,
    title: 'Immersive Experience Designer',
    department: 'Experience',
    type: 'Full-time',
    location: 'On-site',
    description: 'Design and implement immersive dining environments that complement our futuristic culinary creations. You will work with light, sound, and interactive elements to create multisensory experiences for our guests.',
    requirements: [
      'Background in experience design, interior design, or related field',
      'Portfolio demonstrating innovative design concepts',
      'Knowledge of lighting, sound, and interactive technologies',
      'Excellent communication and collaboration skills',
      'Ability to execute concepts within budget and timeline'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Paid time off',
      'Creative freedom and resources',
      'Professional development budget'
    ]
  },
  {
    id: 3,
    title: 'Mixology Specialist',
    department: 'Beverage',
    type: 'Full-time',
    location: 'On-site',
    description: 'Create innovative, science-inspired cocktails that complement our futuristic dining experience. You will experiment with unique ingredients, presentation methods, and serving techniques.',
    requirements: [
      'Minimum 2 years experience in craft cocktail creation',
      'Knowledge of molecular mixology techniques',
      'Strong understanding of flavor profiles and pairings',
      'Creativity and attention to detail',
      'Excellent customer service skills'
    ],
    benefits: [
      'Competitive salary plus tips',
      'Health and dental insurance',
      'Paid time off',
      'Opportunity to develop signature cocktails',
      'Industry networking opportunities'
    ]
  },
  {
    id: 4,
    title: 'Front of House Manager',
    department: 'Service',
    type: 'Full-time',
    location: 'On-site',
    description: 'Lead our front of house team in delivering exceptional service that matches our innovative culinary offerings. You will ensure seamless operations while maintaining our high standards of guest experience.',
    requirements: [
      'Minimum 3 years in restaurant management',
      'Strong leadership and team-building skills',
      'Excellent problem-solving abilities',
      'Knowledge of fine dining service standards',
      'Passion for hospitality and guest satisfaction'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Paid time off',
      'Performance bonuses',
      'Professional development opportunities'
    ]
  },
  {
    id: 5,
    title: 'Digital Content Creator',
    department: 'Marketing',
    type: 'Part-time',
    location: 'Hybrid',
    description: 'Capture and create compelling digital content that showcases our unique dining experiences. You will develop content for social media, our website, and marketing materials that reflects our futuristic brand.',
    requirements: [
      'Experience in food photography and videography',
      'Proficiency in photo and video editing software',
      'Strong understanding of social media platforms',
      'Creative storytelling abilities',
      'Portfolio demonstrating relevant work'
    ],
    benefits: [
      'Competitive hourly rate',
      'Flexible schedule',
      'Meal allowance during shifts',
      'Portfolio development opportunities',
      'Potential for full-time conversion'
    ]
  }
];

// Department filter options
const departments = ['All', 'Culinary', 'Experience', 'Beverage', 'Service', 'Marketing'];

export default function OpportunitiesPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  // Filter jobs by department
  const filteredJobs = selectedDepartment === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

  // Toggle job details expansion
  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  // Show application form for a specific job
  const handleApplyClick = (jobId: number) => {
    setSelectedJobId(jobId);
    setShowApplicationForm(true);
    // Scroll to application form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
                Career Opportunities
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 md:text-lg"
            >
              Join our team of innovators shaping the future of culinary experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Open Positions
              </span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
              Explore our current openings and find where your talents can contribute to our innovative dining experience.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {departments.map((department) => (
                <Button
                  key={department}
                  variant={selectedDepartment === department ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(department)}
                  className={selectedDepartment === department ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {department}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg overflow-hidden"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJobExpansion(job.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-orbitron font-semibold">{job.title}</h3>
                      {expandedJob === job.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-primary text-sm">{job.department}</span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{job.type}</span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-400 text-sm">{job.location}</span>
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/10">
                      <div className="mb-4">
                        <h4 className="text-lg font-orbitron font-medium mb-2">Description</h4>
                        <p className="text-gray-300">{job.description}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-lg font-orbitron font-medium mb-2">Requirements</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-orbitron font-medium mb-2">Benefits</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                          {job.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        onClick={() => handleApplyClick(job.id)}
                        className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                      >
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400">No positions available in this department at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {showApplicationForm && (
        <section id="application-form" className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-lg max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Apply for {selectedJobId && jobListings.find(job => job.id === selectedJobId)?.title}
                </span>
              </h2>
              <p className="text-gray-300 mb-8 text-center">
                Please fill out the form below to apply for this position. We'll review your application and contact you if there's a match.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                    <Input id="first-name" className="bg-black/20 border-white/10" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                    <Input id="last-name" className="bg-black/20 border-white/10" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <Input id="email" type="email" className="bg-black/20 border-white/10" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <Input id="phone" type="tel" className="bg-black/20 border-white/10" />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">Relevant Experience</label>
                  <Textarea id="experience" className="bg-black/20 border-white/10 min-h-[120px]" />
                </div>

                <div>
                  <label htmlFor="why-join" className="block text-sm font-medium text-gray-300 mb-1">Why do you want to join Ruya?</label>
                  <Textarea id="why-join" className="bg-black/20 border-white/10 min-h-[120px]" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-300">Upload Resume (PDF)</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  >
                    Submit Application <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      )}

      {/* Why Join Us Section */}
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
                Why Join Ruya
              </span>
            </h2>
            <p className="text-gray-300">
              Become part of a team that's redefining the culinary landscape through innovation and creativity.
            </p>
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
              <h3 className="text-xl font-orbitron font-semibold mb-4">Innovation Culture</h3>
              <p className="text-gray-300">
                Work in an environment that encourages experimentation, creativity, and pushing the boundaries of what's possible in culinary arts.
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
              <h3 className="text-xl font-orbitron font-semibold mb-4">Growth Opportunities</h3>
              <p className="text-gray-300">
                Develop your skills and advance your career with our commitment to continuous learning, mentorship, and professional development.
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
              <h3 className="text-xl font-orbitron font-semibold mb-4">Collaborative Team</h3>
              <p className="text-gray-300">
                Join a diverse team of passionate professionals who work together to create extraordinary experiences for our guests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineSparkles, HiOutlineBolt, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2'

const fadeInUp = { 
  initial: { opacity: 0, y: 30 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true }, 
  transition: { duration: 0.5 } 
}

const staggerContainer = { 
  initial: {}, 
  whileInView: { transition: { staggerChildren: 0.1 } }, 
  viewport: { once: true } 
}

const staggerItem = { 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true } 
}

export default function Gallery() {
  const projectCategories = [
    {
      title: "Custom Scrapbooking Dies",
      description: "Intricate paper cutting designs for personalized scrapbook layouts",
      image: "/images/business-1.jpg",
      projects: 85
    },
    {
      title: "Decorative Elements",
      description: "Precision-cut embellishments and ornamental pieces",
      image: "/images/business-2.jpg",
      projects: 120
    },
    {
      title: "Paper Craft Templates",
      description: "Reusable templates for consistent crafting results",
      image: "/images/business-3.jpg",
      projects: 95
    }
  ]

  const featuredProjects = [
    {
      title: "Wedding Memory Album",
      category: "Custom Scrapbooking",
      description: "Intricate lace-pattern borders and custom monogram cutting for a luxury wedding scrapbook project",
      image: "/images/business-4.jpg",
      details: ["Cardstock precision cutting", "Custom monogram design", "Decorative border patterns"]
    },
    {
      title: "Baby Book Collection",
      category: "Paper Crafting",
      description: "Adorable animal shapes and milestone markers for a complete baby memory book series",
      image: "/images/business-5.jpg",
      details: ["Animal-themed cutouts", "Milestone markers", "Textured paper handling"]
    },
    {
      title: "Travel Journal Kit",
      category: "Custom Templates",
      description: "World map silhouettes and landmark cutouts for travel enthusiast scrapbookers",
      image: "/images/business-6.jpg",
      details: ["Geographic precision", "Landmark replicas", "Multi-layer designs"]
    },
    {
      title: "Holiday Decorations",
      category: "Seasonal Crafts",
      description: "Festive ornament patterns and seasonal embellishments for holiday-themed projects",
      image: "/images/business-7.jpg",
      details: ["Seasonal motifs", "Ornament patterns", "Festive borders"]
    },
    {
      title: "Corporate Branding",
      category: "Business Applications",
      description: "Professional logo cutting and branded elements for corporate scrapbooking needs",
      image: "/images/business-8.jpg",
      details: ["Logo precision", "Brand consistency", "Corporate colors"]
    },
    {
      title: "Educational Materials",
      category: "Learning Tools",
      description: "Interactive learning elements and educational cutouts for classroom scrapbooking",
      image: "/images/business-9.jpg",
      details: ["Educational themes", "Interactive elements", "Durable materials"]
    }
  ]

  const capabilities = [
    { icon: HiOutlineBolt, title: "Precision Cutting", detail: "±0.1mm accuracy" },
    { icon: HiOutlineSparkles, title: "Complex Designs", detail: "Intricate patterns" },
    { icon: HiOutlineCheckCircle, title: "Quality Control", detail: "100% inspection" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1e40af] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6"
            >
              <HiOutlineSparkles className="w-4 h-4 mr-2" />
              Precision CNC Gallery
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our CNC Cutting
              <span className="block bg-gradient-to-r from-[#f59e0b] to-yellow-300 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore our portfolio of precision-cut scrapbooking projects, custom designs, and innovative crafting solutions that showcase the power of professional CNC technology.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Get Custom Quote Today
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20"
              >
                View Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our CNC Capabilities
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
          </motion.div>
          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                {...staggerItem}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="text-center p-6 bg-white rounded-2xl shadow-md"
              >
                <div className="w-16 h-16 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-[#2563eb]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-[#f59e0b] font-medium">{capability.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the diverse range of scrapbooking and paper crafting projects we bring to life with precision CNC cutting
            </p>
          </motion.div>
          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                {...staggerItem}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-[#2563eb] text-white text-sm px-3 py-1 rounded-full">
                    {category.projects}+ Projects
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="text-[#2563eb] font-medium flex items-center"
                  >
                    View Projects <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most impressive CNC cutting projects that showcase precision, creativity, and technical excellence
            </p>
          </motion.div>
          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                {...staggerItem}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-[#f59e0b] text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#2563eb] mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#2563eb]/10 text-[#2563eb] py-3 rounded-xl font-medium transition-colors duration-200 hover:bg-[#2563eb] hover:text-white"
                  >
                    View Project Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Precision Process
            </h2>
            <div className="w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96">
                <Image
                  src="/images/business-10.jpg"
                  alt="CNC cutting process"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  From Design to Reality
                </h3>
                <p className="text-gray-600 mb-6">
                  Our state-of-the-art CNC equipment transforms your scrapbooking visions into perfectly cut reality, handling everything from simple shapes to complex intricate patterns with industrial precision.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Design Analysis</h4>
                    <p className="text-sm text-gray-600">We analyze your design for optimal cutting paths and material usage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Precision Setup</h4>
                    <p className="text-sm text-gray-600">Material preparation and machine calibration for exact specifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quality Cutting</h4>
                    <p className="text-sm text-gray-600">CNC execution with real-time monitoring for perfect results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Final Inspection</h4>
                    <p className="text-sm text-gray-600">Thorough quality check before delivery to your project</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 sm:py-16 bg-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <motion.div {...staggerItem} className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#f59e0b]">500+</div>
              <div className="text-white/90">Projects Completed</div>
            </motion.div>
            <motion.div {...staggerItem} className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#f59e0b]">±0.1mm</div>
              <div className="text-white/90">Cutting Precision</div>
            </motion.div>
            <motion.div {...staggerItem} className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#f59e0b]">24hr</div>
              <div className="text-white/90">Quick Turnaround</div>
            </motion.div>
            <motion.div {...staggerItem} className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#f59e0b]">4.3★</div>
              <div className="text-white/90">Customer Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your scrapbooking vision and create something amazing with precision CNC cutting technology.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Get Custom Quote Today
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-semibold hover:bg-[#2563eb] hover:text-white transition-colors duration-200"
              >
                View Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
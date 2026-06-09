'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineBolt, HiOutlineSparkles, HiOutlineWrench } from 'react-icons/hi2'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.15 }
  },
  viewport: { once: true }
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
}

export default function Portfolio() {
  const portfolioCategories = [
    {
      title: "Custom Scrapbook Components",
      description: "Intricate paper cutting and layered designs for premium scrapbooking projects",
      projects: 8,
      icon: HiOutlineSparkles,
      color: "from-[#2C3E50] to-[#34495E]"
    },
    {
      title: "Industrial Prototyping",
      description: "Precision metal and plastic cutting for product development and manufacturing",
      projects: 12,
      icon: HiOutlineBolt,
      color: "from-[#E74C3C] to-[#C0392B]"
    },
    {
      title: "Custom Stencils & Templates",
      description: "Reusable cutting templates and stencils for repeated craft applications",
      projects: 15,
      icon: HiOutlineWrench,
      color: "from-[#34495E] to-gray-800"
    }
  ]

  const featuredProjects = [
    {
      title: "Multi-Layer Wedding Album Design",
      description: "Complex 12-layer scrapbook cover with intricate laser-cut patterns and custom text integration.",
      materials: ["Premium Cardstock", "Acrylic Overlay", "Wood Veneer"],
      completion: "2 Days",
      complexity: "Advanced"
    },
    {
      title: "Custom Business Card Holders",
      description: "Series of 50 precision-cut acrylic business card displays for local craft fair vendors.",
      materials: ["Clear Acrylic", "Colored Acrylic", "Metal Accents"],
      completion: "3 Days",
      complexity: "Intermediate"
    },
    {
      title: "Decorative Wall Art Series",
      description: "Large-format decorative panels combining multiple materials for modern home decor applications.",
      materials: ["Plywood Base", "Metal Inlays", "Acrylic Details"],
      completion: "5 Days",
      complexity: "Advanced"
    },
    {
      title: "Custom Jewelry Box Inserts",
      description: "Precision-fitted compartment inserts with velvet lining channels for luxury jewelry storage.",
      materials: ["Foam Core", "Precision Cuts", "Custom Sizing"],
      completion: "1 Day",
      complexity: "Standard"
    },
    {
      title: "Prototype Electronic Enclosures",
      description: "Functional prototypes for tech startup requiring precise tolerances and mounting holes.",
      materials: ["ABS Plastic", "Aluminum", "Rubber Gaskets"],
      completion: "4 Days",
      complexity: "Expert"
    },
    {
      title: "Memorial Keepsake Collection",
      description: "Personalized memorial pieces with photo integration and custom engraving elements.",
      materials: ["Hardwood", "Brass Plates", "Acrylic Photos"],
      completion: "3 Days",
      complexity: "Advanced"
    }
  ]

  const capabilities = [
    { name: "Laser Cutting Precision", spec: "±0.1mm accuracy" },
    { name: "CNC Routing Depth", spec: "Up to 50mm material thickness" },
    { name: "Material Variety", spec: "Wood, Acrylic, Metal, Cardstock" },
    { name: "Project Turnaround", spec: "1-5 days typical completion" },
    { name: "Custom Design Support", spec: "File conversion & optimization" },
    { name: "Batch Production", spec: "Single pieces to 500+ units" }
  ]

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Standard': return 'bg-green-100 text-green-700'
      case 'Intermediate': return 'bg-blue-100 text-blue-700'
      case 'Advanced': return 'bg-orange-100 text-orange-700'
      case 'Expert': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#34495E] to-gray-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <HiOutlineSparkles className="w-4 h-4 mr-2 text-[#E74C3C]" />
              <span className="text-sm font-medium">Precision Portfolio</span>
            </motion.div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Precision 
              <span className="block bg-gradient-to-r from-[#E74C3C] to-orange-400 bg-clip-text text-transparent">
                CNC Creations
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our gallery of custom CNC and laser cutting projects, from intricate scrapbooking designs to precision industrial prototypes
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="#featured-projects"
                className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#34495E] transition-colors shadow-lg w-full sm:w-auto"
                whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(44, 62, 80, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Featured Work
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/30 px-6 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
                whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our diverse portfolio showcases precision cutting across multiple industries and applications
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#2C3E50]">{category.projects}</span>
                  <span className="text-sm text-gray-500">Projects Complete</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section id="featured-projects" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Detailed showcase of our most challenging and innovative CNC cutting projects
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#34495E] to-gray-800 overflow-hidden">
                  <Image
                    src={`/images/business-${((index % 5) + 1)}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)}`}>
                      {project.complexity}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Materials:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.materials.map((material, idx) => (
                          <span key={idx} className="inline-flex items-center bg-[#2C3E50]/10 text-[#2C3E50] text-xs px-2 py-1 rounded-full">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        <strong>Completion:</strong> {project.completion}
                      </span>
                      <div className="flex items-center text-[#2C3E50]">
                        <HiOutlineCheckCircle className="w-4 h-4 mr-1" />
                        <span className="font-medium">Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#34495E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Technical Capabilities
            </h2>
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our advanced CNC equipment delivers precision results across diverse materials and project requirements
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-bold text-lg mb-2">{capability.name}</h3>
                <p className="text-[#E74C3C] text-xl font-bold">{capability.spec}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real Work Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Behind the Precision
            </h2>
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Inside our Shyamved Industrial Estate facility where craftsmanship meets technology
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative h-64 bg-gradient-to-br from-[#34495E] to-gray-800 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/business-${index + 2}.jpg`}
                  alt={`CNC Workshop ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {index === 1 ? "Precision Equipment" : index === 2 ? "Quality Control" : "Custom Finishing"}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {index === 1 ? "Industrial-grade CNC machinery" : index === 2 ? "Every cut inspected for accuracy" : "Hand-finished details"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Let's bring your ideas to life with precision CNC cutting. Contact us for a custom quote and project consultation.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919876543210?text=Hi, I'd like to discuss a custom CNC project"
                className="inline-flex items-center justify-center bg-[#E74C3C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors shadow-lg w-full sm:w-auto"
                whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(231, 76, 60, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Custom Design Cut
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
                whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
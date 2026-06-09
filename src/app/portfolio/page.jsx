'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineBolt, HiOutlineHeart, HiOutlineArrowRight } from 'react-icons/hi2'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
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

export default function Portfolio() {
  const portfolioCategories = [
    {
      title: "Custom Scrapbook Designs",
      projects: [
        {
          title: "Wedding Memory Album",
          description: "Intricate laser-cut wedding invitation borders and photo frames with personalized engravings.",
          materials: "Premium cardstock, acrylic accents",
          dimensions: "12\" x 12\" layouts",
          image: "/images/business-1.jpg"
        },
        {
          title: "Baby Milestone Book",
          description: "Delicate paper cut designs featuring baby animals and growth charts with precision-cut details.",
          materials: "Specialty paper, wood veneers",
          dimensions: "8\" x 10\" pages",
          image: "/images/business-2.jpg"
        },
        {
          title: "Anniversary Collection",
          description: "Elegant photo mats and decorative elements celebrating 25 years of marriage with gold accents.",
          materials: "Metallic cardstock, foam board",
          dimensions: "Various sizes",
          image: "/images/business-6.jpg"
        }
      ]
    },
    {
      title: "Commercial Projects",
      projects: [
        {
          title: "Retail Display Elements",
          description: "Custom acrylic display stands and signage for local craft stores with precise branding cuts.",
          materials: "Clear acrylic, colored plastics",
          dimensions: "Multiple display sizes",
          image: "/images/business-3.jpg"
        },
        {
          title: "Event Signage System",
          description: "Professional wayfinding and welcome signs for corporate events with clean, modern aesthetics.",
          materials: "Wood composite, metal inlays",
          dimensions: "18\" x 24\" to 48\" x 72\"",
          image: "/images/business-7.jpg"
        },
        {
          title: "Educational Templates",
          description: "Precision-cut stencils and templates for art classes and workshops with perfect repeatability.",
          materials: "Durable plastic, cardboard",
          dimensions: "Standard template sizes",
          image: "/images/business-8.jpg"
        }
      ]
    },
    {
      title: "Artistic Creations",
      projects: [
        {
          title: "Mandala Wall Art",
          description: "Intricate mandala patterns cut from multiple layers creating stunning dimensional artwork.",
          materials: "Layered cardstock, wood backing",
          dimensions: "16\" x 16\" framed pieces",
          image: "/images/business-4.jpg"
        },
        {
          title: "Typography Art",
          description: "Custom quote designs with elaborate flourishes and decorative elements for home decor.",
          materials: "Mixed media combinations",
          dimensions: "12\" x 18\" to 24\" x 36\"",
          image: "/images/business-9.jpg"
        },
        {
          title: "Seasonal Decorations",
          description: "Holiday-themed decorative elements and ornaments with intricate cut patterns and details.",
          materials: "Seasonal papers, metallics",
          dimensions: "Various ornament sizes",
          image: "/images/business-10.jpg"
        }
      ]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Design Consultation",
      description: "We discuss your vision, requirements, and material preferences to create the perfect project plan.",
      icon: HiOutlineSparkles
    },
    {
      step: "02",
      title: "Precision Planning",
      description: "Our team creates detailed cutting plans and material layouts for optimal results and minimal waste.",
      icon: HiOutlineBolt
    },
    {
      step: "03",
      title: "CNC Fabrication",
      description: "Using industrial-grade equipment, we execute your project with precision and attention to detail.",
      icon: HiOutlineCheckCircle
    },
    {
      step: "04",
      title: "Quality Delivery",
      description: "Every piece is inspected for perfection before careful packaging and delivery to your specifications.",
      icon: HiOutlineHeart
    }
  ]

  const capabilities = [
    { material: "Cardstock & Paper", thickness: "80gsm - 350gsm", precision: "±0.1mm" },
    { material: "Acrylic Sheets", thickness: "1mm - 6mm", precision: "±0.05mm" },
    { material: "Wood Veneer", thickness: "0.5mm - 3mm", precision: "±0.1mm" },
    { material: "Foam Board", thickness: "3mm - 10mm", precision: "±0.2mm" },
    { material: "Metal Sheets", thickness: "0.5mm - 2mm", precision: "±0.05mm" },
    { material: "Fabric Materials", thickness: "Various", precision: "Clean edges" }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] bg-gradient-to-br from-[#3498DB] to-gray-800 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-5.jpg"
            alt="CNC Portfolio Showcase"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <HiOutlineSparkles className="w-4 h-4 text-white mr-2" />
                <span className="text-white text-sm font-medium">Precision Portfolio</span>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Crafting Excellence in{' '}
                <span className="bg-gradient-to-r from-[#E74C3C] to-orange-400 bg-clip-text text-transparent">
                  Every Cut
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                Explore our portfolio of precision CNC cutting projects, from intricate scrapbook designs to commercial fabrication. Each piece showcases our commitment to technical excellence and creative innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2C3E50] text-white rounded-xl font-semibold shadow-lg transition-all duration-200 hover:bg-[#34495E] hover:shadow-xl"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <HiOutlineArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                
                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Process
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-1.jpg"
                  alt="Featured CNC Work"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Featured Project</h3>
                  <p className="text-gray-200">Precision wedding album with custom laser-cut details</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Project Portfolio
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From delicate scrapbooking elements to industrial-grade commercial projects, our portfolio demonstrates precision and versatility across diverse applications.
            </p>
          </motion.div>

          {portfolioCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="mb-16 lg:mb-20"
              {...fadeInUp}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-8 bg-[#2C3E50] text-white rounded-lg flex items-center justify-center text-sm font-bold mr-4">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h3>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                    variants={staggerItem}
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                        unoptimized
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex bg-[#2C3E50] text-white text-xs px-3 py-1 rounded-full">
                          Custom Work
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <span className="font-medium text-gray-700 w-20">Materials:</span>
                          <span className="text-gray-600">{project.materials}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="font-medium text-gray-700 w-20">Size:</span>
                          <span className="text-gray-600">{project.dimensions}</span>
                        </div>
                      </div>
                      
                      <motion.button
                        className="mt-4 w-full py-3 bg-[#2C3E50] text-white rounded-lg font-medium hover:bg-[#34495E] transition-colors duration-200"
                        whileTap={{ scale: 0.98 }}
                      >
                        Request Similar Project
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Precision Process
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial concept to final delivery, every project follows our proven process for exceptional results and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                variants={staggerItem}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#2C3E50] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E74C3C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#3498DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Our advanced CNC equipment delivers industrial precision across a wide range of materials and applications.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.material}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{capability.material}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-gray-200">Thickness Range</span>
                      <span className="text-white font-medium">{capability.thickness}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-200">Precision</span>
                      <span className="text-[#E74C3C] font-bold">{capability.precision}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <span className="inline-flex items-center bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                      <HiOutlineCheckCircle className="w-4 h-4 mr-2" />
                      Available Now
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's discuss your vision and create something extraordinary together. From concept to completion, we deliver precision and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2C3E50] text-white rounded-xl font-semibold shadow-lg"
                whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(44,62,80,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Custom Quote Today
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-white/20 hover:bg-white/10 transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
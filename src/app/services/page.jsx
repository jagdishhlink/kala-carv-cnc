'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineWrench, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineTruck, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2'

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

export default function Services() {
  const services = [
    {
      title: "Precision CNC Cutting",
      description: "Professional computer-controlled cutting for intricate scrapbook elements, custom patterns, and detailed designs with micrometer precision.",
      features: ["Intricate pattern cutting", "Custom design creation", "Multiple material support", "Professional finish quality"],
      image: "/images/business-6.jpg",
      price: "Starting from ₹50/piece"
    },
    {
      title: "Custom Design Services",
      description: "Transform your scrapbooking ideas into reality with our design consultation and custom pattern creation services.",
      features: ["Design consultation", "Pattern development", "Prototype creation", "Design optimization"],
      image: "/images/business-7.jpg",
      price: "₹500-2000/design"
    },
    {
      title: "Material Cutting Solutions",
      description: "Precision cutting for various crafting materials including cardstock, chipboard, acrylic, wood veneer, and specialty papers.",
      features: ["Cardstock precision cutting", "Acrylic and wood cutting", "Specialty material handling", "Bulk order processing"],
      image: "/images/business-8.jpg",
      price: "Material dependent"
    },
    {
      title: "Rush Order Processing",
      description: "Need your custom cuts quickly? Our rush processing ensures your projects stay on schedule with same-day or next-day completion.",
      features: ["Same-day completion", "Priority processing", "Quality guaranteed", "Urgent project support"],
      image: "/images/business-9.jpg",
      price: "Standard rate + 50%"
    }
  ]

  const materials = [
    { name: "Cardstock & Paper", thickness: "0.1mm - 3mm", colors: "Full spectrum" },
    { name: "Chipboard", thickness: "1mm - 5mm", colors: "Natural, colored" },
    { name: "Acrylic Sheets", thickness: "2mm - 10mm", colors: "Clear, frosted, colored" },
    { name: "Wood Veneer", thickness: "0.5mm - 3mm", colors: "Natural wood tones" },
    { name: "Foam Board", thickness: "3mm - 10mm", colors: "White, black, colored" },
    { name: "Specialty Papers", thickness: "Various", colors: "Metallic, textured, patterned" }
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Discuss your project requirements and design ideas with our experts"
    },
    {
      step: "02",
      title: "Design Development",
      description: "Create or refine your cutting patterns for optimal results"
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Choose the perfect materials for your specific project needs"
    },
    {
      step: "04",
      title: "Precision Cutting",
      description: "Execute the cuts using our professional CNC equipment"
    },
    {
      step: "05",
      title: "Quality Check",
      description: "Inspect every piece to ensure perfect quality and precision"
    },
    {
      step: "06",
      title: "Delivery",
      description: "Receive your perfectly cut elements ready for your project"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-[#E74C3C] to-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
                Professional CNC Services
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Precision CNC Cutting for 
                <span className="block bg-gradient-to-r from-[#F39C12] to-yellow-300 bg-clip-text text-transparent">
                  Crafting Excellence
                </span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                We offer professional CNC cutting services for scrapbookers and craft enthusiasts. From intricate patterns to custom designs, we provide the precision tools and materials you need for exceptional projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-[#2C3E50] text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#34495e] transition-colors flex items-center justify-center gap-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Custom Quote Today
                  <HiOutlineArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-6 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Our Services
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/images/business-1.jpg"
                alt="Professional CNC cutting equipment"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our CNC Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional cutting services designed specifically for crafters and scrapbooking enthusiasts
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
                variants={staggerItem}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#2C3E50]">
                      {service.price}
                    </span>
                    <motion.button
                      className="bg-[#F39C12] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e67e22] transition-colors"
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Materials We Cut
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and specialty scrapbooking materials
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {materials.map((material, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                variants={staggerItem}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center">
                    <HiOutlineSparkles className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{material.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Thickness:</span>
                    <span className="text-sm font-medium text-gray-900">{material.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Colors:</span>
                    <span className="text-sm font-medium text-gray-900">{material.colors}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our CNC Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to completion, our streamlined process ensures precision and quality in every cut
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#2C3E50] text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#E74C3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our CNC Services
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Professional equipment and expertise for all your precision cutting needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HiOutlineWrench,
                title: "Professional Equipment",
                description: "State-of-the-art CNC machines for precision cutting"
              },
              {
                icon: HiOutlineBolt,
                title: "Quick Turnaround",
                description: "Most orders completed within 24-48 hours"
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Quality Guaranteed",
                description: "Every cut inspected for perfect quality"
              },
              {
                icon: HiOutlineTruck,
                title: "Custom Solutions",
                description: "Tailored cutting services for unique projects"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our CNC cutting services
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                question: "What materials can you cut with CNC?",
                answer: "We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and specialty scrapbooking materials. Our precision equipment handles intricate designs with clean, professional edges."
              },
              {
                question: "Do you accept custom design requests?",
                answer: "Yes! We specialize in bringing your custom scrapbooking ideas to life. Bring us your designs or work with our team to create something unique for your projects."
              },
              {
                question: "What are your turnaround times?",
                answer: "Most standard cutting jobs are completed within 24-48 hours. Custom or complex projects may take 3-5 days depending on the design complexity and materials required."
              },
              {
                question: "Do you sell scrapbooking supplies too?",
                answer: "Yes, we stock premium scrapbooking materials, tools, and supplies alongside our CNC cutting services. Everything you need for your crafting projects under one roof."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                variants={staggerItem}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a custom quote and bring your scrapbooking vision to life with our precision CNC cutting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-[#F39C12] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#e67e22] transition-colors flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Custom Quote Today
                <HiOutlineArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Now: +91 98765 43210
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
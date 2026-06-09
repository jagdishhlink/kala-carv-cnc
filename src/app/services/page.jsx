'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiOutlineWrench, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function ServicesPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#34495E] to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <HiOutlineWrench className="w-4 h-4 mr-2" />
              Professional CNC & Laser Cutting
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Precision Cutting Services for{' '}
              <span className="bg-gradient-to-r from-[#E74C3C] to-orange-400 bg-clip-text text-transparent">
                Creative Minds
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              We offer professional CNC and laser cutting services specifically designed for the crafting community. From intricate scrapbook layouts to custom decorative pieces, our precision equipment delivers the quality your projects deserve.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#34495E] transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                Get Your Custom Design Cut
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a 
                href="/portfolio"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#34495E] transition-all"
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cutting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industrial-grade precision for your creative projects
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HiOutlineBolt,
                title: 'CNC Precision Cutting',
                description: 'Computer-controlled cutting for intricate designs with perfect repeatability and accuracy.',
                features: ['Cardstock & Paper', 'Chipboard Materials', 'Wood Veneer', 'Acrylic Sheets']
              },
              {
                icon: HiOutlineSparkles,
                title: 'Laser Engraving & Cutting',
                description: 'High-precision laser technology for detailed cuts and beautiful engraved designs.',
                features: ['Fine Detail Work', 'Custom Patterns', 'Text Engraving', 'Logo Creation']
              },
              {
                icon: HiOutlineShieldCheck,
                title: 'Custom Stencil Creation',
                description: 'Durable stencils for repeated use in your crafting and scrapbooking projects.',
                features: ['Reusable Materials', 'Complex Patterns', 'Multiple Sizes', 'Professional Grade']
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <HiOutlineCheckCircle className="w-4 h-4 text-[#E74C3C] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to completion in simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Your Design',
                description: 'Share your digital files or sketches with our team for review and optimization.'
              },
              {
                step: '02',
                title: 'Material Selection',
                description: 'Choose from our range of craft-quality materials suitable for your project.'
              },
              {
                step: '03',
                title: 'Precision Cutting',
                description: 'Our CNC equipment brings your design to life with industrial accuracy.'
              },
              {
                step: '04',
                title: 'Quality Check & Delivery',
                description: 'Every piece is inspected before careful packaging and delivery to you.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#2C3E50] text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Materials We Cut
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and other craft materials suitable for scrapbooking projects.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Premium Cardstock',
                  'Chipboard & Mat Board',
                  'Acrylic Sheets',
                  'Wood Veneer',
                  'Craft Foam',
                  'Decorative Papers',
                  'Vinyl Materials',
                  'Fabric & Felt'
                ].map((material, index) => (
                  <div key={index} className="flex items-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#E74C3C] mr-3" />
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-6.jpg"
                alt="CNC cutting materials and samples"
                width={600}
                height={400}
                className="w-full h-80 sm:h-96 object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kala Carv CNC
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industrial precision meets creative crafting
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HiOutlineBolt,
                title: 'Industrial-Grade Equipment',
                description: 'State-of-the-art CNC machines deliver consistent, professional results for every project.'
              },
              {
                icon: HiOutlineShieldCheck,
                title: 'Quality Guaranteed',
                description: 'Every cut is inspected to ensure it meets our high standards before delivery.'
              },
              {
                icon: HiOutlineWrench,
                title: 'Custom Solutions',
                description: 'We work with your unique designs to create exactly what your project needs.'
              },
              {
                icon: HiOutlineSparkles,
                title: 'Quick Turnaround',
                description: 'Most projects completed within 1-3 days with rush orders available when needed.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                question: 'What materials can you cut with CNC?',
                answer: 'We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and other craft materials suitable for scrapbooking projects.'
              },
              {
                question: 'How long does a custom cutting job take?',
                answer: 'Most custom cutting projects are completed within 1-3 days depending on complexity and current queue. Rush orders can often be accommodated.'
              },
              {
                question: 'Do you work with my own designs?',
                answer: 'Yes! Bring us your digital design files or sketches and we\'ll help you create the perfect cut pieces for your scrapbooking project.'
              },
              {
                question: 'What\'s the minimum order quantity?',
                answer: 'We welcome both small personal projects and larger commercial orders. No minimum quantity required for most standard cutting services.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#34495E] to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Let our precision cutting services transform your creative vision into reality. Contact us today for a custom quote.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a 
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#E74C3C] transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                Get Your Custom Quote
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#34495E] transition-all"
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
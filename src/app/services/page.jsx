'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineWrench, HiOutlineBolt, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineClock, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineTruck } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function ServicesPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#3498DB] to-gray-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1 rounded-full mb-4"
              >
                Professional CNC Services
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Precision Cutting for <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Scrapbooking</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                We specialize in precision CNC cutting services for scrapbooking enthusiasts and crafters. From custom designs to bulk cutting projects, we deliver professional results for your creative needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="https://wa.me/919876543210?text=Hi%20Kala%20Carv%20CNC,%20I%27d%20like%20a%20custom%20quote%20for%20precision%20cutting%20services"
                  className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#34495E] transition-all duration-300 shadow-lg"
                >
                  Get Custom Quote Today
                  <HiOutlineArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  View Portfolio
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
            >
              <Image
                src="/images/business-1.jpg"
                alt="Professional CNC cutting services"
                width={600}
                height={400}
                className="w-full h-80 sm:h-96 object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our CNC Cutting Services
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional-grade cutting services for scrapbooking projects with precision and quality guaranteed
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-6.jpg"
                  alt="Custom paper cutting"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-4">
                  <HiOutlineWrench className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Paper Cutting</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Precise cuts for cardstock, decorative paper, and specialty scrapbooking materials with intricate designs and patterns.
                </p>
                <div className="flex items-center text-[#2C3E50] font-medium">
                  Learn More <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-7.jpg"
                  alt="Acrylic cutting services"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-4">
                  <HiOutlineBolt className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Acrylic & Wood Cutting</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Professional cutting of thin wood, acrylic sheets, and other rigid materials for dimensional craft projects.
                </p>
                <div className="flex items-center text-[#2C3E50] font-medium">
                  Learn More <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-8.jpg"
                  alt="Personalized gifts cutting"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-4">
                  <HiOutlineSparkles className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Gifts</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Custom name plates, decorative elements, and personalized scrapbook components for special occasions.
                </p>
                <div className="flex items-center text-[#2C3E50] font-medium">
                  Learn More <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Precision Process
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From concept to completion, we ensure every project meets our high standards of precision and quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
            >
              <Image
                src="/images/business-2.jpg"
                alt="CNC cutting process"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
                unoptimized
              />
            </motion.div>

            <motion.div {...staggerContainer} className="space-y-6">
              <motion.div {...staggerItem} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We work with your custom designs or help create designs based on your requirements. We accept various file formats for CNC cutting projects.
                  </p>
                </div>
              </motion.div>

              <motion.div {...staggerItem} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Material Selection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose from our range of materials including cardstock, paper, thin wood, acrylic, and other craft materials suitable for your project.
                  </p>
                </div>
              </motion.div>

              <motion.div {...staggerItem} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Cutting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our industrial-grade CNC equipment delivers perfect cuts with exact measurements and smooth edges every time.
                  </p>
                </div>
              </motion.div>

              <motion.div {...staggerItem} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Check & Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each project undergoes thorough quality inspection before packaging. Pick up your completed work until 7 PM daily.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our CNC Services
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional CNC equipment and expertise for precision results in every project
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <motion.div {...staggerItem} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineShieldCheck className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Industrial-grade equipment ensures perfect cuts within precise tolerances for professional results
              </p>
            </motion.div>

            <motion.div {...staggerItem} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineClock className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Simple cuts completed same-day, complex designs within 1-2 days for perfect results
              </p>
            </motion.div>

            <motion.div {...staggerItem} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineSparkles className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Work with your files or let us help create designs tailored to your specific project needs
              </p>
            </motion.div>

            <motion.div {...staggerItem} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineTruck className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Convenient Hours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Open until 7 PM daily for convenient drop-off and pickup of your projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#3498DB]">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Materials We Work With
            </h2>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We cut various materials suitable for scrapbooking and DIY craft projects with professional precision
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            <motion.div {...staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-1">Cardstock</h3>
              <p className="text-xs text-gray-200">Various weights</p>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-1">Specialty Paper</h3>
              <p className="text-xs text-gray-200">Decorative & textured</p>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-1">Thin Wood</h3>
              <p className="text-xs text-gray-200">Veneer & plywood</p>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-1">Acrylic</h3>
              <p className="text-xs text-gray-200">Clear & colored</p>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-1">Foam Core</h3>
              <p className="text-xs text-gray-200">Various thicknesses</p>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-1">Custom Materials</h3>
              <p className="text-xs text-gray-200">Contact us</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
              Not sure if we can cut your material? Contact us to discuss your specific material needs and project requirements.
            </p>
            <Link
              href="https://wa.me/919876543210?text=Hi%20Kala%20Carv%20CNC,%20I%27d%20like%20to%20ask%20about%20cutting%20materials%20for%20my%20project"
              className="inline-flex items-center bg-white text-[#3498DB] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Ask About Materials
              <HiOutlineArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Common questions about our CNC cutting services and processes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...staggerContainer} className="space-y-4">
              <motion.div {...staggerItem} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What materials can you cut with CNC?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We cut various materials including cardstock, paper, thin wood, acrylic, and other craft materials suitable for scrapbooking and DIY projects. Contact us to discuss your specific material needs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...staggerItem} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you accept custom design files?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, we work with your custom designs and can also help create designs based on your requirements. We accept various file formats for CNC cutting projects.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...staggerItem} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your operating hours?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We're open until 7 PM daily, making it convenient for you to drop off projects or pick up completed work after regular business hours.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...staggerItem} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a typical cutting project take?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Project time depends on complexity and quantity. Simple cuts can be completed same-day, while intricate custom designs may take 1-2 days for perfect results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a custom quote for your precision cutting needs. Transform your scrapbooking ideas into reality with our professional CNC services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/919876543210?text=Hi%20Kala%20Carv%20CNC,%20I%27d%20like%20a%20custom%20quote%20for%20precision%20cutting%20services"
                className="inline-flex items-center justify-center bg-white text-[#2C3E50] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Custom Quote Today
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone, HiOutlineEnvelope, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineWrench, HiOutlineBolt } from 'react-icons/hi2'

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

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-[#3498DB] to-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <HiOutlineMapPin className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm text-white">Visit Our CNC Workshop</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Get Your Custom Quote Today
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Ready to bring your precision cutting project to life? Contact Kala Carv CNC for professional consultation and custom quotes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://wa.me/919876543210"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#34495E] transition-colors"
            >
              WhatsApp Quote
              <HiOutlineArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Grid */}
      <motion.section 
        {...fadeInUp}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div 
              {...fadeInUp}
              className="inline-flex items-center bg-[#2C3E50]/10 text-[#2C3E50] px-3 py-1 rounded-full text-sm font-medium mb-4"
            >
              <HiOutlineMapPin className="w-4 h-4 mr-2" />
              Contact Information
            </motion.div>
            <motion.h2 
              {...fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Visit Our Precision Workshop
            </motion.h2>
            <motion.div 
              {...fadeInUp}
              className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"
            ></motion.div>
            <motion.p 
              {...fadeInUp}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Located in Ahmedabad's Shyamved Industrial Estate, our CNC workshop is equipped with professional-grade equipment for precision cutting projects.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Address */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-4">
                <HiOutlineMapPin className="w-6 h-6 text-[#2C3E50]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshop Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#3498DB]/10 rounded-xl flex items-center justify-center mb-4">
                <HiOutlineClock className="w-6 h-6 text-[#3498DB]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Open until 7 PM daily
              </p>
              <p className="text-sm text-gray-500">
                Convenient hours for project drop-off and pickup after regular business hours
              </p>
            </motion.div>

            {/* Rating */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center mb-4">
                <HiOutlineCheckCircle className="w-6 h-6 text-[#E74C3C]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Service</h3>
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-[#E74C3C]">4.3</span>
                <div className="flex ml-2">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">(7 reviews)</span>
              </div>
              <p className="text-gray-600 text-sm">
                Professional quality results every time
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Workshop Gallery */}
      <motion.section 
        {...fadeInUp}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div 
              {...fadeInUp}
              className="inline-flex items-center bg-[#3498DB]/10 text-[#3498DB] px-3 py-1 rounded-full text-sm font-medium mb-4"
            >
              <HiOutlineWrench className="w-4 h-4 mr-2" />
              Our Workshop
            </motion.div>
            <motion.h2 
              {...fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Professional CNC Equipment
            </motion.h2>
            <motion.div 
              {...fadeInUp}
              className="w-16 h-1 bg-[#3498DB] rounded-full mx-auto mb-6"
            ></motion.div>
            <motion.p 
              {...fadeInUp}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Take a look inside our precision workshop where industrial-grade CNC equipment meets crafting creativity.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div 
                key={num}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-gray-800 to-gray-900 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1 md:col-start-1 lg:col-start-auto' : ''}`}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/images/business-${num}.jpg`}
                    alt={`Kala Carv CNC Workshop ${num}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Contact Actions */}
      <motion.section 
        {...fadeInUp}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div 
              {...fadeInUp}
              className="inline-flex items-center bg-[#2C3E50]/10 text-[#2C3E50] px-3 py-1 rounded-full text-sm font-medium mb-4"
            >
              <HiOutlineBolt className="w-4 h-4 mr-2" />
              Quick Contact
            </motion.div>
            <motion.h2 
              {...fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Start Your Project Today
            </motion.h2>
            <motion.div 
              {...fadeInUp}
              className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"
            ></motion.div>
            <motion.p 
              {...fadeInUp}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Choose your preferred way to get started with your precision cutting project.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* WhatsApp Contact */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-2xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <HiOutlinePhone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Instant Quote via WhatsApp</h3>
              <p className="text-gray-200 mb-6 text-center leading-relaxed">
                Send us your project details and get a custom quote within minutes. Perfect for quick consultations and project planning.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-200">
                  <HiOutlineCheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Instant response during business hours
                </div>
                <div className="flex items-center text-sm text-gray-200">
                  <HiOutlineCheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Share project files and images
                </div>
                <div className="flex items-center text-sm text-gray-200">
                  <HiOutlineCheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Get accurate pricing estimates
                </div>
              </div>
              <motion.a
                href="https://wa.me/919876543210"
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center bg-white text-[#2C3E50] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Start WhatsApp Chat
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>

            {/* Phone Contact */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="w-16 h-16 bg-[#3498DB]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <HiOutlineEnvelope className="w-8 h-8 text-[#3498DB]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Visit Our Workshop</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Come see our CNC equipment in action and discuss your project in person. Perfect for complex custom projects requiring detailed consultation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <HiOutlineCheckCircle className="w-4 h-4 mr-2 text-[#3498DB]" />
                  See equipment capabilities firsthand
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <HiOutlineCheckCircle className="w-4 h-4 mr-2 text-[#3498DB]" />
                  Review material samples
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <HiOutlineCheckCircle className="w-4 h-4 mr-2 text-[#3498DB]" />
                  Detailed project consultation
                </div>
              </div>
              <motion.a
                href="https://maps.google.com/maps?q=Shyamved+Industrial+Estate+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center bg-[#3498DB] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#2980B9] transition-colors"
              >
                Get Directions
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Location Map Section */}
      <motion.section 
        {...fadeInUp}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              {...fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Easy to Find Location
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Conveniently located in Ahmedabad's industrial area with easy access from Sardar Patel Ring Road.
            </motion.p>
          </div>

          <motion.div 
            {...fadeInUp}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[#3498DB] to-gray-800 flex items-center justify-center">
              <div className="text-center text-white">
                <HiOutlineMapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-gray-200">Click to view detailed directions</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kala Carv CNC</h3>
                  <p className="text-gray-600 text-sm mb-4 sm:mb-0">
                    Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                  </p>
                </div>
                <motion.a
                  href="https://maps.google.com/maps?q=Shyamved+Industrial+Estate+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-[#2C3E50] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#34495E] transition-colors"
                >
                  View on Maps
                  <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage
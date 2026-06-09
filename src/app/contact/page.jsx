'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineWrench, HiOutlineBolt } from 'react-icons/hi2'

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } }
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-[#34495E] to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <Image 
            src="/images/business-3.jpg"
            alt="Kala Carv CNC Contact"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6"
              >
                <HiOutlineWrench className="w-4 h-4 mr-2" />
                Get Your Custom Design Cut
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Ready to Start Your
                <span className="block bg-gradient-to-r from-[#E74C3C] to-orange-400 bg-clip-text text-transparent">
                  Custom Project?
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Contact Kala Carv CNC for professional-grade cutting services. Located in Ahmedabad's industrial estate, we're ready to transform your ideas into precision-cut reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="https://wa.me/919876543210?text=Hi, I need a custom CNC cutting quote"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#34495E] transition-colors duration-300"
                >
                  <HiOutlinePhone className="w-5 h-5 mr-2" />
                  WhatsApp Quote
                </motion.a>
                
                <motion.a
                  href="tel:+919876543210"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300"
                >
                  <HiOutlinePhone className="w-5 h-5 mr-2" />
                  Call Now
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us for your custom CNC cutting needs
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            {...fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={staggerItem} className="text-center">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlinePhone className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick quotes and instant communication</p>
                <a
                  href="https://wa.me/919876543210?text=Hi, I need a custom CNC cutting quote"
                  className="inline-flex items-center text-[#2C3E50] font-medium hover:text-[#E74C3C] transition-colors"
                >
                  Send Message
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlinePhone className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Call</h3>
                <p className="text-gray-600 mb-4">Direct consultation for complex projects</p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center text-[#2C3E50] font-medium hover:text-[#E74C3C] transition-colors"
                >
                  Call Now
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlineMapPin className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">See our equipment and discuss in person</p>
                <span className="inline-flex items-center text-[#2C3E50] font-medium">
                  Industrial Estate
                </span>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlineEnvelope className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send detailed project specifications</p>
                <a
                  href="mailto:info@kalacarvcnc.com"
                  className="inline-flex items-center text-[#2C3E50] font-medium hover:text-[#E74C3C] transition-colors"
                >
                  Send Email
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Request a Custom Quote
              </h2>
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-6"></div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Share your project details and we'll provide a detailed quote. Our precision cutting services are tailored to your specific requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#2C3E50] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Free project consultation</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#2C3E50] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Detailed cost breakdown</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#2C3E50] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Quick 24-hour response</span>
                </div>
                <div className="flex items-center">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#2C3E50] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Material recommendations</span>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-[#34495E] to-gray-800 rounded-2xl mt-8">
                <Image 
                  src="/images/business-4.jpg"
                  alt="CNC Equipment"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover opacity-30"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#34495E]/80 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Industrial-Grade Precision</h3>
                    <p className="text-gray-300">Professional CNC equipment for perfect results</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="scrapbooking">Scrapbooking Designs</option>
                    <option value="custom-stencils">Custom Stencils</option>
                    <option value="decorative-pieces">Decorative Pieces</option>
                    <option value="prototyping">Prototype Development</option>
                    <option value="other">Other Custom Cutting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors">
                    <option value="">Select material (if known)</option>
                    <option value="cardstock">Cardstock</option>
                    <option value="chipboard">Chipboard</option>
                    <option value="acrylic">Acrylic</option>
                    <option value="wood-veneer">Wood Veneer</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors resize-none"
                    placeholder="Describe your project: dimensions, quantity, design complexity, timeline, etc."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors"
                      placeholder="How many pieces?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-colors">
                      <option value="">When needed?</option>
                      <option value="asap">ASAP</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#2C3E50] text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#34495E] transition-colors duration-300"
                >
                  Send Quote Request
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours with a detailed quote
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Visit Our Workshop
              </h2>
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlineClock className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Working Hours</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <HiOutlineBolt className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">What to Expect</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• See our industrial-grade CNC equipment</li>
                      <li>• Discuss your project requirements in detail</li>
                      <li>• Get material recommendations</li>
                      <li>• Review samples of our precision work</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="https://maps.google.com?q=Kala+Carv+CNC+Shyamved+Industrial+Estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-[#2C3E50] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#34495E] transition-colors duration-300"
                >
                  <HiOutlineMapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </motion.a>
                
                <motion.a
                  href="https://wa.me/919876543210?text=I'd like to visit your workshop"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center border-2 border-[#2C3E50] text-[#2C3E50] py-3 px-6 rounded-xl font-semibold hover:bg-[#2C3E50] hover:text-white transition-colors duration-300"
                >
                  <HiOutlinePhone className="w-5 h-5 mr-2" />
                  Schedule Visit
                </motion.a>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#34495E] to-gray-800 rounded-2xl">
                <Image 
                  src="/images/business-1.jpg"
                  alt="Kala Carv CNC Workshop"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                  unoptimized
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                  <Image 
                    src="/images/business-2.jpg"
                    alt="CNC Equipment"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                  <Image 
                    src="/images/business-5.jpg"
                    alt="Industrial Location"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] p-6 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-2">Industrial Estate Location</h3>
                <p className="text-gray-200 leading-relaxed">
                  Located in Ahmedabad's established Shyamved Industrial Estate, our facility houses professional CNC equipment in a dedicated manufacturing environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our CNC cutting services and processes
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            {...fadeInUp}
            className="max-w-3xl mx-auto space-y-4"
          >
            <motion.div variants={staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What materials can you cut with CNC?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and other craft materials suitable for scrapbooking projects. Our equipment is calibrated for precision work with different material thicknesses.
                </p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does a custom cutting job take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most custom cutting projects are completed within 1-3 days depending on complexity and current queue. Rush orders can often be accommodated with advance notice. Simple designs may be ready same-day.
                </p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you work with my own designs?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Bring us your digital design files or sketches and we'll help you create the perfect cut pieces for your scrapbooking project. We accept various file formats and can assist with design optimization for cutting.
                </p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's the minimum order quantity?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We welcome both small personal projects and larger commercial orders. No minimum quantity required for most standard cutting services. Whether you need one piece or hundreds, we're here to help.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#34495E] to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact Kala Carv CNC today for precision cutting services that transform your creative visions into perfectly crafted reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919876543210?text=I'm ready to start my custom CNC project"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#E74C3C] transition-colors duration-300"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Get Started Now
              </motion.a>
              
              <motion.a
                href="tel:+919876543210"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call for Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
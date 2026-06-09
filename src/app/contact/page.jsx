'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineArrowRight } from 'react-icons/hi2'

export default function Contact() {
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

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#E74C3C] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-4.jpg"
            alt="Kala Carv CNC Workshop"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E74C3C]/90 to-gray-800/90"></div>
        
        <div className="relative container mx-auto px-4 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
              Get in Touch
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact Kala Carv CNC
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your scrapbooking vision to life? Get in touch for custom CNC cutting quotes and professional crafting solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Custom Quote Today
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Located in Ahmedabad's industrial hub, we're ready to handle your precision cutting needs with professional equipment and expert craftsmanship.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div {...staggerItem} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineMapPin className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Our Workshop</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
              </p>
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-[#2C3E50] font-medium hover:text-[#F39C12] transition-colors"
              >
                Get Directions
                <HiOutlineArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>

            <motion.div {...staggerItem} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlineClock className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
              <div className="text-gray-700 space-y-2">
                <p className="font-medium text-[#2C3E50]">Open Daily</p>
                <p>Monday - Sunday</p>
                <p>9:00 AM - 7:00 PM</p>
                <p className="text-sm text-green-600 font-medium">Currently Open</p>
              </div>
            </motion.div>

            <motion.div {...staggerItem} className="text-center p-6 bg-gray-50 rounded-2xl md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiOutlinePhone className="w-8 h-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Contact</h3>
              <p className="text-gray-700 mb-4">
                Get instant quotes and consultations via WhatsApp for the fastest response.
              </p>
              <motion.a
                href="https://wa.me/919999999999?text=Hi, I need a custom CNC cutting quote"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp Quote
                <HiOutlineArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Custom Quote
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tell us about your project and we'll provide a detailed quote within 24 hours.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Project Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="scrapbook-elements">Scrapbook Elements</option>
                  <option value="custom-patterns">Custom Patterns</option>
                  <option value="personalized-designs">Personalized Designs</option>
                  <option value="craft-templates">Craft Templates</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Material Preference
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all">
                  <option value="">Select material</option>
                  <option value="cardstock">Cardstock</option>
                  <option value="chipboard">Chipboard</option>
                  <option value="acrylic">Acrylic</option>
                  <option value="wood-veneer">Wood Veneer</option>
                  <option value="specialty">Specialty Materials</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Describe your project: dimensions, quantity, design complexity, special requirements, timeline, etc."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                    placeholder="How many pieces?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Timeline
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all">
                    <option value="">When do you need it?</option>
                    <option value="rush">Rush (1-2 days)</option>
                    <option value="standard">Standard (3-5 days)</option>
                    <option value="flexible">Flexible (1-2 weeks)</option>
                    <option value="planning">Just Planning</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit Quote Request
                </motion.button>
                <motion.a
                  href="https://wa.me/919999999999?text=Hi, I have a custom CNC cutting project"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-green-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-600 transition-colors text-center"
                >
                  Quick WhatsApp Quote
                </motion.a>
              </div>

              <p className="text-sm text-gray-600 text-center">
                * Required fields. We'll respond within 24 hours with your custom quote.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Workshop Location */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Professional Workshop
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Located in Ahmedabad's established industrial estate with professional CNC equipment and quality crafting materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineMapPin className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Industrial Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineClock className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Convenient Hours</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Open daily from 9 AM to 7 PM, including weekends for your convenience. Currently open for all your crafting needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlinePhone className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Communication</h3>
                  <p className="text-gray-700 leading-relaxed">
                    WhatsApp us for the fastest response. Get quotes, ask questions, and share your project ideas instantly.
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2C3E50] text-white p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold mb-1">4.3★ Rating</h4>
                    <p className="text-gray-200">Trusted by 7+ customers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-200">Professional</p>
                    <p className="font-bold">CNC Services</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div {...fadeInUp} className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-[4/3]">
              <Image
                src="/images/business-5.jpg"
                alt="Kala Carv CNC Workshop Location"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2">Professional Workshop</h3>
                <p className="text-gray-200">Precision CNC equipment in industrial setting</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Common questions about our CNC cutting services and processes.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="space-y-4">
            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">What materials can you cut with CNC?</h3>
                  <div className="w-6 h-6 text-[#2C3E50] group-open:rotate-180 transition-transform">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and specialty scrapbooking materials. Our precision equipment handles intricate designs with clean, professional edges.
                  </p>
                </div>
              </details>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">Do you accept custom design requests?</h3>
                  <div className="w-6 h-6 text-[#2C3E50] group-open:rotate-180 transition-transform">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes! We specialize in bringing your custom scrapbooking ideas to life. Bring us your designs or work with our team to create something unique for your projects.
                  </p>
                </div>
              </details>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">What are your turnaround times?</h3>
                  <div className="w-6 h-6 text-[#2C3E50] group-open:rotate-180 transition-transform">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Most standard cutting jobs are completed within 24-48 hours. Custom or complex projects may take 3-5 days depending on the design complexity and materials required.
                  </p>
                </div>
              </details>
            </motion.div>

            <motion.div {...staggerItem} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">Do you sell scrapbooking supplies too?</h3>
                  <div className="w-6 h-6 text-[#2C3E50] group-open:rotate-180 transition-transform">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we stock premium scrapbooking materials, tools, and supplies alongside our CNC cutting services. Everything you need for your crafting projects under one roof.
                  </p>
                </div>
              </details>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#E74C3C]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get professional CNC cutting services with quick turnaround times in Ahmedabad's premier crafting workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919999999999?text=Hi, I need a custom CNC cutting quote for my project"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#E74C3C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                WhatsApp Quote Now
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#E74C3C] transition-colors"
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
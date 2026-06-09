'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight, HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineBuildingStorefront, HiOutlineSparkles, HiOutlineHeart, HiOutlineChevronDown } from 'react-icons/hi2'
import { useState } from 'react'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#3498DB] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <Image 
            src="/images/business-1.jpg" 
            alt="CNC Cutting Facility" 
            width={1200} 
            height={600} 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            unoptimized
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Precision CNC Cutting for Crafters
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your scrapbooking ideas into reality with our professional CNC cutting services. Perfect cuts, every time.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://wa.me/919876543210"
                className="w-full sm:w-auto bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-[#34495e] transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote Today
              </motion.a>
              
              <motion.a
                href="/services"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white/90 backdrop-blur-sm -mt-16 relative z-20 mx-4 sm:mx-6 lg:mx-8 rounded-2xl shadow-xl mb-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <HiOutlineBolt className="w-6 h-6 text-[#2C3E50]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Professional CNC Equipment</h3>
              <p className="text-sm text-gray-600">Precision results guaranteed</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <HiOutlineClock className="w-6 h-6 text-[#E74C3C]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Open Until 7 PM</h3>
              <p className="text-sm text-gray-600">Convenient service hours</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#3498DB]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <HiOutlineStar className="w-6 h-6 text-[#3498DB]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">4.3/5 Rating</h3>
              <div className="flex justify-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <HiOutlineStar key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We specialize in precision CNC cutting services for scrapbooking enthusiasts and crafters. From custom designs to bulk cutting projects, we deliver professional results for your creative needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: HiOutlineWrench,
                title: "Precision CNC Cutting",
                description: "Professional-grade cutting services for scrapbooking projects with industrial precision.",
                image: "/images/business-6.jpg"
              },
              {
                icon: HiOutlineSparkles,
                title: "Custom Designs",
                description: "Personalized crafting solutions tailored to your unique creative vision and requirements.",
                image: "/images/business-7.jpg"
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Quality Materials",
                description: "Professional-grade cutting for paper crafts with guaranteed precision and quality results.",
                image: "/images/business-8.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 border-l-4 border-l-[#2C3E50] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl mb-4 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <a 
                    href="/services" 
                    className="inline-flex items-center text-[#2C3E50] font-semibold hover:text-[#E74C3C] transition-colors duration-300"
                  >
                    Learn More <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Social Proof / Reviews */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <HiOutlineStar key={star} className={`w-6 h-6 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 ml-3">4.3/5</span>
              <span className="text-gray-600">(7 reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Priya M.",
                rating: 5,
                review: "Perfect precision cutting for my scrapbook projects",
                highlight: "perfect precision cutting"
              },
              {
                name: "Amit S.",
                rating: 4,
                review: "Great service for custom craft designs",
                highlight: "custom craft designs"
              },
              {
                name: "Neha K.",
                rating: 5,
                review: "Professional quality results every time",
                highlight: "professional quality results"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100 border-l-4 border-l-[#3498DB]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <HiOutlineStar key={star} className={`w-4 h-4 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">by {testimonial.name}</span>
                </div>
                <div className="relative">
                  <div className="text-4xl text-[#2C3E50]/20 absolute -top-2 -left-1">"</div>
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.review.split(testimonial.highlight)[0]}
                    <span className="bg-[#2C3E50]/10 px-2 py-1 rounded font-medium text-[#2C3E50]">
                      {testimonial.highlight}
                    </span>
                    {testimonial.review.split(testimonial.highlight)[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About / Why Choose Us */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] bg-clip-text text-transparent">Kala Carv CNC</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Kala Carv CNC brings industrial precision to the world of crafting and scrapbooking. Located in Ahmedabad's Shyamved Industrial Estate, we combine advanced CNC technology with a passion for helping crafters create stunning, professional-quality projects.
              </p>
              
              <div className="space-y-4">
                {[
                  "Precision CNC cutting for scrapbooking projects",
                  "Custom designs and personalized crafting solutions", 
                  "Professional-grade cutting services for paper crafts",
                  "Local Ahmedabad crafting community support",
                  "Industrial-grade equipment for hobby projects"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-10 pt-8 border-t border-gray-200">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-1">4.3★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#3498DB] mb-1">7PM</div>
                  <div className="text-sm text-gray-600">Open Until</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#E74C3C] mb-1">100%</div>
                  <div className="text-sm text-gray-600">Precision</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/business-2.jpg" 
                  alt="CNC Workshop Interior" 
                  width={600} 
                  height={500} 
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                  <HiOutlineBuildingStorefront className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <div className="text-sm font-semibold text-gray-900 text-center">Established</div>
                <div className="text-xs text-gray-600 text-center">Workshop</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What materials can you cut with CNC?",
                a: "We cut various materials including cardstock, paper, thin wood, acrylic, and other craft materials suitable for scrapbooking and DIY projects. Contact us to discuss your specific material needs."
              },
              {
                q: "Do you accept custom design files?",
                a: "Yes, we work with your custom designs and can also help create designs based on your requirements. We accept various file formats for CNC cutting projects."
              },
              {
                q: "What are your operating hours?",
                a: "We're open until 7 PM daily, making it convenient for you to drop off projects or pick up completed work after regular business hours."
              },
              {
                q: "How long does a typical cutting project take?",
                a: "Project time depends on complexity and quantity. Simple cuts can be completed same-day, while intricate custom designs may take 1-2 days for perfect results."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-gray-600 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location & Contact */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Visit Our Workshop</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Located in Shyamved Industrial Estate, Ahmedabad. Easy to find and convenient parking available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2657!2d72.5200!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineClock className="w-6 h-6 text-[#E74C3C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-600">Open until 7 PM daily</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/919876543210"
                  className="flex-1 bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>WhatsApp</span>
                </motion.a>
                
                <motion.a
                  href="https://maps.google.com/?q=Shyamved+Industrial+Estate+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#3498DB] text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#2980B9] transition-colors duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiOutlineMapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-[#3498DB] relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Next Project?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch today for a custom quote. We're here to help bring your creative visions to life with precision CNC cutting.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="https://wa.me/919876543210"
              className="w-full sm:w-auto bg-white text-[#2C3E50] px-8 py-4 rounded-xl font-semibold text-center hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote Today
            </motion.a>
            
            <motion.a
              href="tel:919876543210"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-center border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiOutlinePhone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50">
        <div className="flex space-x-3">
          <motion.a
            href="tel:919876543210"
            className="flex-1 bg-[#2C3E50] text-white py-3 rounded-xl font-semibold text-center flex items-center justify-center space-x-2"
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlinePhone className="w-5 h-5" />
            <span>Call</span>
          </motion.a>
          
          <motion.a
            href="https://wa.me/919876543210"
            className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold text-center flex items-center justify-center space-x-2"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.935 3.215"/>
            </svg>
            <span>WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </div>
  )
}
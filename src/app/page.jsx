'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineChevronDown } from 'react-icons/hi2'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[60vh] bg-gradient-to-br from-[#2C3E50] to-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C3E50] to-gray-800">
            <Image 
              src="/images/business-1.jpg" 
              alt="CNC cutting workshop" 
              fill 
              className="object-cover opacity-20"
              unoptimized
            />
          </div>
        </div>
        
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            >
              Precision CNC Cutting for Crafters
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Transform your scrapbooking ideas into reality with our professional CNC cutting services and premium crafting supplies in Ahmedabad.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://wa.me/919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#F39C12] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#E67E22] transition-all duration-300 shadow-lg"
              >
                Get Custom Quote Today
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300"
              >
                <HiOutlinePhone className="inline w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Info Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white py-8 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center">
                <HiOutlineClock className="w-6 h-6 text-[#2C3E50]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Open Daily</p>
                <p className="text-sm text-gray-600">Until 7 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center">
                <HiOutlineMapPin className="w-6 h-6 text-[#2C3E50]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Industrial Estate</p>
                <p className="text-sm text-gray-600">Ahmedabad, Gujarat</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-[#F39C12]/10 rounded-xl flex items-center justify-center">
                <HiOutlineStar className="w-6 h-6 text-[#F39C12]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">4.3/5 Rating</p>
                <div className="flex justify-center">
                  {[...Array(4)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-4 h-4 text-[#F39C12] fill-current" />
                  ))}
                  <HiOutlineStar className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#F39C12] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional CNC Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We offer professional CNC cutting services for scrapbookers and craft enthusiasts. From intricate patterns to custom designs, we provide the precision tools and materials you need for exceptional projects.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              {
                icon: HiOutlineBolt,
                title: "Precision CNC Cutting",
                description: "Professional CNC cutting for scrapbooking projects with exceptional accuracy and clean edges."
              },
              {
                icon: HiOutlineWrench,
                title: "Custom Design Services",
                description: "Custom designs and personalized crafting solutions tailored to your unique project needs."
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Quality Materials",
                description: "Professional quality materials and tools sourced for durability and superior crafting results."
              },
              {
                icon: HiOutlineUserGroup,
                title: "Expert Guidance",
                description: "Expert guidance for crafting enthusiasts from consultation to project completion."
              },
              {
                icon: HiOutlineBolt,
                title: "Quick Turnaround",
                description: "Quick turnaround on custom orders with most projects completed within 24-48 hours."
              },
              {
                icon: HiOutlineWrench,
                title: "Premium Supplies",
                description: "Complete selection of scrapbooking supplies and materials for all your crafting needs."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#2C3E50]"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#2C3E50] to-gray-700 h-40">
                    <Image 
                      src={`/images/business-${6 + (index % 3)}.jpg`}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#F39C12]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#F39C12]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trust / Social Proof */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#F39C12] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-6 h-6 text-[#F39C12] fill-current" />
                ))}
                <HiOutlineStar className="w-6 h-6 text-gray-300" />
              </div>
              <span className="text-lg font-semibold text-gray-900">4.3/5</span>
              <span className="text-gray-600">(7 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                quote: "Amazing precision on my custom scrapbook elements",
                author: "Priya S.",
                rating: 5,
                highlight: "Amazing precision"
              },
              {
                quote: "Professional quality cutting at great prices",
                author: "Raj M.",
                rating: 4,
                highlight: "Professional quality"
              },
              {
                quote: "Best place in Ahmedabad for CNC craft cutting",
                author: "Meera P.",
                rating: 5,
                highlight: "Best place in Ahmedabad"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#F39C12]"
              >
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-5 h-5 text-[#F39C12] fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <HiOutlineStar key={i + review.rating} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.quote}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{review.author}</span>
                  <span className="text-sm text-[#F39C12] font-medium">{review.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { label: "Professional Equipment", icon: HiOutlineBolt },
              { label: "Industrial Location", icon: HiOutlineMapPin },
              { label: "Open Until 7 PM", icon: HiOutlineClock },
              { label: "Custom Capabilities", icon: HiOutlineWrench },
              { label: "Quality Materials", icon: HiOutlineShieldCheck }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <p className="text-sm font-medium text-gray-700">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About / Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-1 bg-[#F39C12] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Precision Meets <span className="bg-gradient-to-r from-[#2C3E50] to-[#F39C12] bg-clip-text text-transparent">Creativity</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Kala Carv CNC specializes in bringing precision to the art of scrapbooking. Located in Ahmedabad's Shyamved Industrial Estate, we combine cutting-edge CNC technology with a passion for crafting. Our team understands that every scrapbook tells a story, and we're here to help you tell yours with perfectly cut elements and premium materials.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Precision CNC cutting for scrapbooking projects",
                  "Custom designs and personalized crafting solutions", 
                  "Professional quality materials and tools",
                  "Expert guidance for crafting enthusiasts",
                  "Quick turnaround on custom orders"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <HiOutlineCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { number: "4.3", label: "Star Rating", suffix: "/5" },
                  { number: "7", label: "Happy Customers", suffix: "+" },
                  { number: "24", label: "Hour Turnaround", suffix: "h" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-[#2C3E50]">
                      {stat.number}<span className="text-[#F39C12]">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-[#2C3E50] to-gray-800 rounded-2xl shadow-xl">
                <Image 
                  src="/images/business-2.jpg" 
                  alt="CNC workshop interior" 
                  width={600}
                  height={400}
                  className="w-full h-80 sm:h-96 object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F39C12] rounded-full flex items-center justify-center shadow-lg">
                <HiOutlineBolt className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Location & Contact */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#F39C12] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Workshop
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Located in Ahmedabad's established Shyamved Industrial Estate, our fully equipped CNC workshop is ready to bring your creative projects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2159386456427!2d72.51234567468684!3d23.08176841280127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sShyamved%20Industrial%20Estate%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineMapPin className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F39C12]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineClock className="w-6 h-6 text-[#F39C12]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshop Hours</h3>
                  <p className="text-gray-600">Open Daily Until 7 PM</p>
                  <p className="text-sm text-green-600 font-medium">Currently Open</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlinePhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                  <a 
                    href="tel:+919876543210"
                    className="text-[#2C3E50] font-semibold hover:text-[#F39C12] transition-colors duration-200"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <motion.a
                href="https://maps.google.com/?q=Shyamved+Industrial+Estate+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full bg-[#2C3E50] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#34495E] transition-all duration-300 shadow-lg"
              >
                Get Directions
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#F39C12] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-gray-800"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Contact us today for a custom quote on your CNC cutting project. Our team is ready to bring your creative vision to life with precision and quality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#F39C12] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#E67E22] transition-all duration-300 shadow-lg"
            >
              WhatsApp Quote
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300"
            >
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 lg:hidden z-50">
        <a
          href="tel:+919876543210"
          className="flex-1 bg-[#2C3E50] text-white py-3 rounded-xl font-semibold text-center flex items-center justify-center space-x-2"
        >
          <HiOutlinePhone className="w-5 h-5" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/919876543210"
          className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-center flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
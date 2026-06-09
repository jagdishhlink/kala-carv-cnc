'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineCheckCircle, HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineTruck, HiOutlineSparkles } from 'react-icons/hi2'

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

export default function About() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#3498DB] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1 rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                About Kala Carv CNC
              </motion.div>
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Precision Craftsmanship
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Meets Modern Technology
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-200 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Where industrial precision meets creative artisanship. Located in Ahmedabad's premier industrial estate, we bring professional-grade CNC technology to the crafting community.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="w-full sm:w-auto bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Custom Quote Today
                </motion.button>
                <motion.button
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Portfolio
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/business-1.jpg"
                alt="Kala Carv CNC Workshop"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kala Carv CNC brings industrial precision to the world of crafting and scrapbooking. Located in Ahmedabad's Shyamved Industrial Estate, we combine advanced CNC technology with a passion for helping crafters create stunning, professional-quality projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6">
                <Image
                  src="/images/business-2.jpg"
                  alt="CNC Precision Equipment"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <Image
                  src="/images/business-3.jpg"
                  alt="Scrapbooking Materials"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.div className="space-y-6" {...fadeInUp}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Precision Meets Creativity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our precision cutting services turn your creative visions into perfectly crafted reality, whether you're making personalized gifts or intricate scrapbook designs. We understand that every cut matters when it comes to bringing your artistic vision to life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Industrial-Grade Equipment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Located in the established Shyamved Industrial Estate, we utilize professional CNC equipment that delivers consistent, precise results for both hobbyists and commercial projects. Our technology bridges the gap between industrial capability and creative accessibility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community-Focused Service
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We're proud to serve Ahmedabad's growing crafting community with convenient hours until 7 PM daily, making professional-quality cutting services accessible to crafters with busy schedules.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every project we undertake reflects our commitment to precision, creativity, and exceptional customer service.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HiOutlineBolt,
                title: "Precision First",
                description: "Every cut is executed with meticulous attention to detail using professional-grade CNC equipment for perfect results."
              },
              {
                icon: HiOutlineSparkles,
                title: "Creative Innovation",
                description: "We embrace creative challenges and work with you to bring unique designs and concepts to life through precision cutting."
              },
              {
                icon: HiOutlineShieldCheck,
                title: "Quality Assurance",
                description: "Our 4.3/5 rating reflects our commitment to delivering professional quality results on every single project."
              },
              {
                icon: HiOutlineUserGroup,
                title: "Community Support",
                description: "Dedicated to supporting Ahmedabad's crafting community with accessible professional services and expert guidance."
              },
              {
                icon: HiOutlineWrench,
                title: "Technical Expertise",
                description: "Deep technical knowledge combined with practical crafting experience ensures optimal results for all materials."
              },
              {
                icon: HiOutlineTruck,
                title: "Reliable Service",
                description: "Consistent delivery times and dependable quality that crafters and businesses can count on for their projects."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team & Facility Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Workshop & Expertise
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art facility equipped with professional CNC machinery and staffed by craftspeople who understand both technical precision and creative vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div className="lg:col-span-2" {...fadeInUp}>
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96">
                <Image
                  src="/images/business-4.jpg"
                  alt="Workshop Facility"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.div className="space-y-6" {...fadeInUp}>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#2C3E50]/10 rounded-lg flex items-center justify-center mr-3">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C3E50]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Professional Equipment</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Industrial-grade CNC machines capable of precise cutting across multiple material types and thicknesses.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#2C3E50]/10 rounded-lg flex items-center justify-center mr-3">
                    <HiOutlineWrench className="w-5 h-5 text-[#2C3E50]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Technical Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Skilled operators with deep understanding of materials, cutting parameters, and design optimization.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#2C3E50]/10 rounded-lg flex items-center justify-center mr-3">
                    <HiOutlineSparkles className="w-5 h-5 text-[#2C3E50]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Creative Solutions</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Problem-solving approach that turns complex design challenges into achievable cutting projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#3498DB] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { number: "4.3", suffix: "/5", label: "Customer Rating" },
              { number: "100", suffix: "%", label: "Precision Guarantee" },
              { number: "7", suffix: "PM", label: "Open Until" },
              { number: "24", suffix: "Hr", label: "Quick Turnaround" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <motion.div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                  <span className="text-gray-300">{stat.suffix}</span>
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Crafters Choose Kala Carv CNC
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              "Precision CNC cutting for scrapbooking projects",
              "Custom designs and personalized crafting solutions", 
              "Professional-grade cutting services for paper crafts",
              "Local Ahmedabad crafting community support",
              "Industrial-grade equipment for hobby projects"
            ].map((point, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#2C3E50] rounded-full flex items-center justify-center">
                  <HiOutlineCheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold">{point}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Precision Craftsmanship?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join the growing community of crafters who trust Kala Carv CNC for their precision cutting needs. Let's bring your creative vision to life with professional-quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="w-full sm:w-auto bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Custom Quote Today
              </motion.button>
              <motion.button
                className="w-full sm:w-auto border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-4 rounded-xl font-semibold hover:bg-[#2C3E50] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
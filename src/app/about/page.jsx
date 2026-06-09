'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineStar, HiOutlineCheckCircle } from 'react-icons/hi2'

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
  const stats = [
    { number: '4.3', label: 'Customer Rating', suffix: '/5' },
    { number: '100+', label: 'Projects Completed', suffix: '' },
    { number: '1-3', label: 'Day Turnaround', suffix: ' Days' },
    { number: '24/7', label: 'Equipment Precision', suffix: '' }
  ]

  const values = [
    {
      icon: HiOutlineBolt,
      title: 'Precision First',
      description: 'Every cut, every detail matters. Our industrial-grade CNC equipment ensures microscopic accuracy for your craft projects.'
    },
    {
      icon: HiOutlineWrench,
      title: 'Craftsmanship Heritage',
      description: 'Combining traditional artisan skills with modern CNC technology to deliver unmatched quality in custom cutting.'
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Quality Assurance',
      description: 'Each project undergoes rigorous quality checks to ensure it meets our exacting standards and your expectations.'
    },
    {
      icon: HiOutlineUserGroup,
      title: 'Customer Focus',
      description: 'From concept to completion, we work closely with you to bring your scrapbooking visions to life with precision.'
    }
  ]

  const milestones = [
    {
      year: 'Foundation',
      title: 'Established in Ahmedabad',
      description: 'Started our journey in Shyamved Industrial Estate with a vision to bring industrial precision to crafting.'
    },
    {
      year: 'Innovation',
      title: 'Advanced CNC Technology',
      description: 'Invested in state-of-the-art CNC and laser cutting equipment to serve the growing crafting community.'
    },
    {
      year: 'Specialization',
      title: 'Scrapbooking Focus',
      description: 'Specialized our services specifically for scrapbookers and craft enthusiasts requiring precision cuts.'
    },
    {
      year: 'Growth',
      title: 'Expanding Services',
      description: 'Continuously expanding our capabilities to meet diverse custom cutting needs across various materials.'
    }
  ]

  const team = [
    {
      name: 'Master Craftsman',
      role: 'CNC Operations Lead',
      description: 'Oversees precision cutting operations and quality control for all custom projects.'
    },
    {
      name: 'Design Specialist',
      role: 'Creative Consultant',
      description: 'Helps translate your creative visions into technically feasible cutting specifications.'
    },
    {
      name: 'Quality Manager',
      role: 'Precision Inspector',
      description: 'Ensures every piece meets our exacting standards before delivery to customers.'
    }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#34495E] to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6"
              >
                <HiOutlineStar className="w-4 h-4 mr-2 text-[#E74C3C]" />
                Ahmedabad's Precision Crafting Experts
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              >
                Where Industrial Precision Meets
                <span className="block bg-gradient-to-r from-[#E74C3C] to-red-400 bg-clip-text text-transparent">
                  Creative Vision
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8"
              >
                Located in Ahmedabad's Shyamved Industrial Estate, Kala Carv CNC brings industrial precision to the crafting world. We specialize in creating custom cut designs for scrapbookers and craft enthusiasts who demand perfect results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="https://wa.me/919876543210?text=I'd%20like%20to%20know%20more%20about%20your%20CNC%20cutting%20services"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#34495E]"
                >
                  Learn About Our Process
                  <HiOutlineCheckCircle className="w-5 h-5 ml-2" />
                </motion.a>
                
                <motion.a
                  href="/portfolio"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#34495E] transition-all duration-300"
                >
                  View Our Work
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                <Image
                  src="/images/business-1.jpg"
                  alt="Kala Carv CNC precision equipment and facility"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-2">
                  {stat.number}
                  <span className="text-[#E74C3C]">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story: Precision Meets Passion
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  Our state-of-the-art CNC equipment transforms your creative visions into precisely cut reality, whether you need intricate paper designs, custom stencils, or unique decorative elements.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  What sets us apart is our deep understanding of the crafting community's needs. We don't just cut materials – we help bring creative visions to life with industrial-grade precision that craft stores simply can't match.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Every project, from simple shapes to complex multi-layered designs, receives the same meticulous attention to detail that has earned us recognition in Ahmedabad's growing maker community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
                <Image
                  src="/images/business-2.jpg"
                  alt="CNC cutting process in action"
                  width={500}
                  height={300}
                  unoptimized
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
                <Image
                  src="/images/business-3.jpg"
                  alt="Precision cutting results and finished projects"
                  width={500}
                  height={300}
                  unoptimized
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Drives Our Precision
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every project we undertake, ensuring exceptional results for every customer.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#34495E] to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Our Journey to Excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming Ahmedabad's trusted precision cutting specialists.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-[#E74C3C] font-bold text-sm uppercase tracking-wide mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{milestone.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Expert Team Behind Every Cut
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our skilled professionals ensure every project meets the highest standards of precision and quality.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <HiOutlineUserGroup className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-[#E74C3C] font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
                <Image
                  src="/images/business-4.jpg"
                  alt="Kala Carv CNC facility and equipment"
                  width={500}
                  height={300}
                  unoptimized
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
                <Image
                  src="/images/business-5.jpg"
                  alt="Industrial estate location and workspace"
                  width={500}
                  height={300}
                  unoptimized
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Facility
              </h2>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our modern facility in Shyamved Industrial Estate houses cutting-edge CNC and laser cutting equipment, designed specifically for precision crafting applications.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industrial-Grade Equipment</h4>
                      <p className="text-gray-700">Advanced CNC machines and laser cutters for microscopic precision.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Climate-Controlled Environment</h4>
                      <p className="text-gray-700">Optimal conditions to ensure consistent material handling and cutting quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Control Station</h4>
                      <p className="text-gray-700">Dedicated inspection area where every piece is checked before delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Precision Crafting?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Let's discuss your project and see how our precision cutting services can bring your creative vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919876543210?text=I'd%20like%20to%20discuss%20my%20custom%20cutting%20project"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-[#E74C3C] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-600"
              >
                Start Your Project
                <HiOutlineCheckCircle className="w-5 h-5 ml-2" />
              </motion.a>
              
              <motion.a
                href="/contact"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#2C3E50] transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
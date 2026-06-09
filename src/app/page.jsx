'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineClock, 
  HiOutlineStar, 
  HiOutlineCheckCircle, 
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineWrench,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineBuildingStorefront,
  HiOutlineSparkles,
  HiOutlineChevronDown
} from 'react-icons/hi2'
import { useState } from 'react'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const services = [
    {
      icon: HiOutlineBolt,
      title: "Precision CNC Cutting",
      description: "Professional CNC cutting for custom scrapbooking designs with industrial-grade precision and accuracy.",
      image: "/images/business-6.jpg"
    },
    {
      icon: HiOutlineSparkles,
      title: "Laser Cutting Services",
      description: "High-quality laser cutting for intricate craft projects and personalized scrapbook elements.",
      image: "/images/business-7.jpg"
    },
    {
      icon: HiOutlineWrench,
      title: "Custom Design Solutions",
      description: "Transform your creative visions into precisely cut reality with our custom design manufacturing.",
      image: "/images/business-8.jpg"
    }
  ]

  const trustSignals = [
    {
      icon: HiOutlineShieldCheck,
      title: "Industrial-Grade Equipment",
      description: "State-of-the-art CNC machinery for precision results"
    },
    {
      icon: HiOutlineBuildingStorefront,
      title: "Established Location",
      description: "Located in Shyamved Industrial Estate since establishment"
    },
    {
      icon: HiOutlineUserGroup,
      title: "Craft Specialists",
      description: "Specialized expertise in scrapbooking applications"
    },
    {
      icon: HiOutlineBolt,
      title: "Quick Turnaround",
      description: "Professional cutting services with fast delivery"
    }
  ]

  const testimonials = [
    {
      text: "Professional service with attention to detail",
      author: "Craft Enthusiast",
      rating: 4,
      highlight: "attention to detail"
    },
    {
      text: "Great quality cutting for my scrapbook projects",
      author: "Local Customer", 
      rating: 4,
      highlight: "great quality cutting"
    }
  ]

  const faqs = [
    {
      question: "What materials can you cut with CNC?",
      answer: "We can cut various materials including cardstock, chipboard, acrylic, wood veneer, and other craft materials suitable for scrapbooking projects."
    },
    {
      question: "How long does a custom cutting job take?",
      answer: "Most custom cutting projects are completed within 1-3 days depending on complexity and current queue. Rush orders can often be accommodated."
    },
    {
      question: "Do you work with my own designs?",
      answer: "Yes! Bring us your digital design files or sketches and we'll help you create the perfect cut pieces for your scrapbooking project."
    },
    {
      question: "What's the minimum order quantity?",
      answer: "We welcome both small personal projects and larger commercial orders. No minimum quantity required for most standard cutting services."
    }
  ]

  return (
    <main className="pb-20 lg:pb-0">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#34495E] to-gray-800 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <Image
            src="/images/business-1.jpg"
            alt="Kala Carv CNC Workshop"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Precision CNC Cutting for Crafters
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed opacity-90">
                  Transform your scrapbooking ideas into reality with professional-grade CNC and laser cutting services in Ahmedabad.
                </p>
              </motion.div>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.a
                  href="https://wa.me/919876543210"
                  className="w-full sm:w-auto bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#20BA5A] transition-all duration-300 shadow-lg"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                  </svg>
                  Get Custom Quote
                </motion.a>
                <motion.a
                  href="/services"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  View Our Services
                  <HiOutlineArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <HiOutlineStar className="w-4 h-4 text-yellow-400" />
                  <span>4.3/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <HiOutlineMapPin className="w-4 h-4 text-[#E74C3C]" />
                  <span>Ahmedabad Location</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <HiOutlineClock className="w-4 h-4 text-blue-400" />
                  <span>Open till 7 PM</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-2.jpg"
                  alt="CNC Cutting Workshop"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Info Bar */}
      <motion.section 
        className="py-8 bg-white border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center">
                <HiOutlineClock className="w-6 h-6 text-[#2C3E50]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Business Hours</div>
                <div className="text-gray-600">Open till 7 PM</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center">
                <HiOutlineMapPin className="w-6 h-6 text-[#E74C3C]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Location</div>
                <div className="text-gray-600">Shyamved Industrial Estate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                <HiOutlineStar className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Customer Rating</div>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-gray-900 font-medium">4.3/5</span>
                  <div className="flex">
                    {[1,2,3,4].map((star) => (
                      <HiOutlineStar key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <HiOutlineStar className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] bg-clip-text text-transparent">Precision Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer professional CNC and laser cutting services specifically designed for the crafting community. From intricate scrapbook layouts to custom decorative pieces, our precision equipment delivers the quality your projects deserve.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#2C3E50]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                      unoptimized
                    />
                  </motion.div>
                </div>
                <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2C3E50]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trust / Social Proof */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] bg-clip-text text-transparent">Crafters Trust Us</span>
            </h2>
          </div>

          {/* Trust Signals Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-8 h-8 text-[#2C3E50]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{signal.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{signal.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Customer Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 border-l-4 border-l-[#2C3E50]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <HiOutlineStar 
                        key={star} 
                        className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#2C3E50]/10 rounded-full flex items-center justify-center mr-3">
                    <HiOutlineUserGroup className="w-5 h-5 text-[#2C3E50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-[#2C3E50] font-medium">Verified Customer</div>
                  </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Kala Carv CNC Facility"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">4.3</div>
                    <div className="text-sm opacity-90">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-[#2C3E50] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Precision Meets <span className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] bg-clip-text text-transparent">Craftsmanship</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Located in Ahmedabad's Shyamved Industrial Estate, Kala Carv CNC brings industrial precision to the crafting world. We specialize in creating custom cut designs for scrapbookers and craft enthusiasts who demand perfect results. Our state-of-the-art CNC equipment transforms your creative visions into precisely cut reality, whether you need intricate paper designs, custom stencils, or unique decorative elements.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Precision CNC cutting for custom scrapbooking designs",
                  "Professional laser cutting services for craft projects", 
                  "Local Ahmedabad crafting expertise with industrial-grade equipment",
                  "Custom design solutions for unique scrapbooking needs",
                  "Quick turnaround for personalized craft items"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-1">4.3</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="text-center border-l border-r border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-1">1-3</div>
                  <div className="text-sm text-gray-600">Days Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-1">100%</div>
                  <div className="text-sm text-gray-600">Precision</div>
                </div>
              </div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-gray-600 leading-relaxed bg-white">
                    {faq.answer}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] bg-clip-text text-transparent">Workshop</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineMapPin className="w-6 h-6 text-[#E74C3C]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Address</div>
                      <div className="text-gray-600 leading-relaxed">
                        Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineClock className="w-6 h-6 text-[#2C3E50]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                      <div className="text-gray-600">Open till 7 PM</div>
                    </div>
                  </div>
                </div>
                
                <motion.a
                  href="https://maps.google.com/?q=Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-[#2C3E50] text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#34495E] transition-colors duration-300"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <HiOutlineMapPin className="w-5 h-5" />
                  Get Directions
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/business-4.jpg"
                alt="Workshop Location"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#34495E] to-[#2C3E50] text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
              Get precision CNC cutting for your next scrapbooking project. Contact us today for a custom quote and transform your creative vision into reality.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.a
              href="https://wa.me/919876543210"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#20BA5A] transition-all duration-300 shadow-lg"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
              </svg>
              Get Your Custom Design Cut
            </motion.a>
            <motion.a
              href="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255,255,255,0.1)" }}
            >
              Learn More
              <HiOutlineArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50">
        <div className="flex gap-3">
          <motion.a
            href="tel:"
            className="flex-1 bg-[#2C3E50] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlinePhone className="w-5 h-5" />
            Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/919876543210"
            className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
            </svg>
            WhatsApp
          </motion.a>
        </div>
      </div>
    </main>
  )
}
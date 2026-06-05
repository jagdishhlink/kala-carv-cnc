'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineStar,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineChevronRight,
  HiOutlineBolt,
  HiOutlineWrench,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineChevronDown
} from 'react-icons/hi2'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="relative">
      {/* Laser-cut geometric overlay pattern background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8B86D]/5 to-transparent">
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 800 600">
            <defs>
              <pattern id="laser-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,10 90,40 70,85 30,85 10,40" fill="currentColor" className="text-[#2D4A3E]"/>
                <circle cx="25" cy="25" r="8" fill="currentColor" className="text-[#C7956D]"/>
                <rect x="60" y="60" width="30" height="30" rx="5" fill="currentColor" className="text-[#2D4A3E]"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#laser-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8B86D] to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-1.jpg"
            alt="Professional CNC cutting workspace"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#2D4A3E]/20 to-[#C7956D]/20 backdrop-blur-xl rounded-2xl rotate-12 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-[#C7956D]/20 to-[#2D4A3E]/20 backdrop-blur-xl rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl -rotate-6"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating trust badges */}
          <div className="absolute -top-16 left-0 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <HiOutlineStar className="w-4 h-4" />
                </div>
                <span className="text-white font-semibold">4.3/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-16 right-0 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
              <div className="text-white font-bold text-sm">Professional Grade CNC</div>
            </div>
          </div>

          {/* Main headline with laser-cut geometric frame */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#2D4A3E]/10 to-[#C7956D]/10 backdrop-blur-xl rounded-3xl border border-white/10 transform rotate-1"></div>
            <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white mb-6">
              Precision CNC
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8B86D] to-[#C7956D]">
                Cutting for Crafters
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your scrapbooking projects with professional laser cutting and custom designs. 
            Quality materials, precise cuts, perfect results every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-[#2D4A3E] hover:bg-[#2D4A3E]/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              Get Custom Quote Today
              <HiOutlineArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-105">
              View Our Services
              <HiOutlineChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-[#E8B86D] mb-2">4.3★</div>
              <div className="text-white font-semibold">Customer Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-[#E8B86D] mb-2">Professional</div>
              <div className="text-white font-semibold">CNC Equipment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-[#E8B86D] mb-2">Custom</div>
              <div className="text-white font-semibold">Design Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Geometric frame overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <polygon points="100,100 300,100 250,250 50,250" fill="currentColor" className="text-[#2D4A3E]"/>
            <polygon points="900,150 1100,150 1050,300 850,300" fill="currentColor" className="text-[#C7956D]"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-[#2D4A3E]">CNC Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive CNC and laser cutting services tailored specifically for 
              scrapbooking and crafting needs. From intricate paper designs to custom patterns, 
              our precision equipment handles projects of all sizes with exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-white">
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2D4A3E] text-white text-xs px-3 py-1 rounded-full font-semibold">Popular</div>
                </div>
                <div className="bg-gradient-to-br from-[#E8B86D] to-[#C7956D] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <HiOutlineBolt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Precision Laser Cutting
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 mb-6 transition-colors duration-500">
                  Professional laser cutting for intricate scrapbook designs, custom patterns, and detailed craft projects with perfect precision.
                </p>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Precision laser cutting service"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Intricate paper designs
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Custom pattern creation
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Multiple material support
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-white">
                <div className="bg-gradient-to-br from-[#E8B86D] to-[#C7956D] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <HiOutlineWrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Custom Design Services
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 mb-6 transition-colors duration-500">
                  Bring your ideas to life with our custom design service. We create unique patterns and designs tailored to your vision.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Personalized patterns
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Logo reproduction
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Design consultation
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-white">
                <div className="bg-gradient-to-br from-[#E8B86D] to-[#C7956D] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <HiOutlineShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Quality Materials
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 mb-6 transition-colors duration-500">
                  We work with premium materials including paper, cardstock, thin wood, and acrylic for professional-grade results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Premium cardstock
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Thin wood sheets
                  </li>
                  <li className="flex items-center text-gray-700 group-hover:text-gray-200 transition-colors duration-500">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E] group-hover:text-[#E8B86D] mr-2 transition-colors duration-500" />
                    Acrylic materials
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Laser-cut pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="precision-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#2D4A3E]"/>
                <rect x="20" y="20" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#C7956D]"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#precision-grid)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-[#2D4A3E]">Kala Carv CNC</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kala Carv CNC brings professional-grade cutting technology to the crafting community in Ahmedabad. 
                  Located in the heart of Shyamved Industrial Estate, we specialize in precision CNC and laser cutting 
                  services for scrapbookers, crafters, and DIY enthusiasts.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <HiOutlineBolt className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Equipment</h3>
                  <p className="text-gray-600">State-of-the-art CNC machines for precise cuts</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-[#C7956D] to-[#2D4A3E] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <HiOutlineUserGroup className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Experienced professionals dedicated to quality</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-[#E8B86D] to-[#2D4A3E] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <HiOutlineMapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Convenient Location</h3>
                  <p className="text-gray-600">Easy access in Ahmedabad's industrial area</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-br from-[#2D4A3E] to-[#E8B86D] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <HiOutlineSparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">Tailored designs for unique projects</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2D4A3E] mb-2">4.3★</div>
                  <div className="text-gray-600 font-medium">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2D4A3E] mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Quality Focused</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2D4A3E] mb-2">Fast</div>
                  <div className="text-gray-600 font-medium">Turnaround</div>
                </div>
              </div>
            </div>

            {/* Image with geometric frame */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E8B86D]/20 to-[#2D4A3E]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-7.jpg"
                  alt="Professional CNC workshop"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <HiOutlineShieldCheck className="w-6 h-6 text-[#2D4A3E]" />
                  <span className="font-semibold text-gray-900">Quality Assured</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <HiOutlineBolt className="w-6 h-6 text-[#C7956D]" />
                  <span className="font-semibold text-gray-900">Precision Cutting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#2D4A3E]">Precision Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of precision-cut projects showcasing the quality and attention to detail 
              that sets Kala Carv CNC apart in the crafting community.
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Featured large image */}
            <div className="col-span-2 row-span-2 group cursor-pointer">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/images/business-4.jpg"
                  alt="Featured precision cutting project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Custom Scrapbook Design</h3>
                    <p className="text-sm opacity-90">Intricate laser-cut patterns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular images */}
            <div className="group cursor-pointer">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/business-5.jpg"
                  alt="Precision cutting sample"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/business-6.jpg"
                  alt="Custom design project"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>

            <div className="row-span-2 group cursor-pointer">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/business-8.jpg"
                  alt="Workshop precision tools"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/business-9.jpg"
                  alt="Material samples"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <Image
                  src="/images/business-10.jpg"
                  alt="Finished craft project"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#2D4A3E] hover:bg-[#2D4A3E]/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View Complete Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#E8B86D] to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-5.jpg"
            alt="Customer testimonials background"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-[#E8B86D]">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our precision cutting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured testimonial - larger */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(4)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <HiOutlineStar className="w-5 h-5" />
                </div>
                <span className="text-white font-semibold">4 Stars</span>
              </div>
              <blockquote className="text-2xl text-white mb-6 leading-relaxed">
                "Professional service with <span className="text-[#E8B86D] font-semibold">attention to detail</span>. 
                The precision of their CNC cutting exceeded my expectations for my scrapbooking project."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-full flex items-center justify-center mr-4">
                  <HiOutlineHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Craft Enthusiast</div>
                  <div className="text-gray-300 text-sm">Verified Customer</div>
                </div>
              </div>
            </div>

            {/* Regular testimonials */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                ))}
                <HiOutlineStar className="w-4 h-4" />
              </div>
              <blockquote className="text-white mb-4">
                "<span className="text-[#E8B86D] font-semibold">Quality cutting services</span> at reasonable prices. 
                Perfect for my craft business needs."
              </blockquote>
              <div className="text-white font-semibold">Local Crafter</div>
              <div className="text-gray-300 text-sm">Regular Customer</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl md:col-span-2 lg:col-span-1">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                ))}
                <HiOutlineStar className="w-4 h-4" />
              </div>
              <blockquote className="text-white mb-4">
                "Great location and <span className="text-[#E8B86D] font-semibold">helpful staff</span>. 
                They guided me through the entire process."
              </blockquote>
              <div className="text-white font-semibold">Regular Customer</div>
              <div className="text-gray-300 text-sm">Verified Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#2D4A3E]">Precision Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final delivery, our streamlined process ensures your project 
              meets the highest standards of precision and quality.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2D4A3E] to-[#C7956D] transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-[#E8B86D]">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="bg-gradient-to-br from-[#E8B86D] to-[#C7956D] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-6">
                    <HiOutlinePhone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
                  <p className="text-gray-600">
                    Call us to discuss your project requirements and get expert advice on materials and design options.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-[#E8B86D]">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="bg-gradient-to-br from-[#C7956D] to-[#2D4A3E] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-6">
                    <HiOutlineSparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Design Creation</h3>
                  <p className="text-gray-600">
                    Our team creates or refines your design, ensuring optimal results for precision CNC cutting.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-[#E8B86D]">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="bg-gradient-to-br from-[#2D4A3E] to-[#E8B86D] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-6">
                    <HiOutlineBolt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Precision Cutting</h3>
                  <p className="text-gray-600">
                    Using professional CNC equipment, we execute your design with exceptional precision and quality.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative text-center">
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-[#E8B86D]">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                  <div className="bg-gradient-to-br from-[#E8B86D] to-[#2D4A3E] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-6">
                    <HiOutlineCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Delivery</h3>
                  <p className="text-gray-600">
                    Final quality check and delivery of your perfectly cut project, ready for your creative use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-2xl mx-auto shadow-2xl">
              <Image
                src="/images/business-8.jpg"
                alt="CNC cutting process"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#2D4A3E]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our CNC cutting services and processes.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What materials can you cut with CNC services?",
                answer: "We work with various materials including paper, cardstock, thin wood, acrylic, and other craft materials suitable for scrapbooking projects. Contact us to discuss your specific material requirements."
              },
              {
                question: "Do you offer custom design services?",
                answer: "Yes, we can create custom cutting patterns based on your designs or help develop new concepts for your scrapbooking projects. Bring your ideas and we'll make them reality."
              },
              {
                question: "What are your turnaround times for projects?",
                answer: "Project completion times vary based on complexity and current workload. Simple cuts can often be completed same-day, while custom designs may take 2-3 days."
              },
              {
                question: "How do I place an order?",
                answer: "Call us at 095866 60214 to discuss your project requirements and get a quote. You can also visit our location in Nana Chiloda to see samples and discuss your needs in person."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <HiOutlineChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 py-6' : 'max-h-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D4A3E] to-gray-900 relative overflow-hidden">
        {/* Floating geometric decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-[#E8B86D]/10 to-[#C7956D]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-[#C7956D]/10 to-[#E8B86D]/10 rounded-2xl rotate-45"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Bring Your <span className="text-[#E8B86D]">Vision to Life?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join countless satisfied customers who trust Kala Carv CNC for precision cutting services. 
            Get your custom quote today and experience professional-grade results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="tel:+919586660214"
              className="group bg-[#E8B86D] hover:bg-[#E8B86D]/90 text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center"
            >
              <HiOutlinePhone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Call Now: 095866 60214
            </a>
            <button className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-105 flex items-center">
              <HiOutlineArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              Get Custom Quote Today
            </button>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <HiOutlinePhone className="w-8 h-8 text-[#E8B86D] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-200">095866 60214</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <HiOutlineMapPin className="w-8 h-8 text-[#E8B86D] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-200">Nana Chiloda, Ahmedabad</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <HiOutlineSparkles className="w-8 h-8 text-[#E8B86D] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Get Quote</h3>
              <p className="text-gray-200">Custom Projects Welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2D4A3E] p-3 rounded-xl">
                      <HiOutlineMapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        Shyamved Industrial Estate, 57, Sardar Patel Ring Rd,<br />
                        nr. Gappa garden restaurant, Nana Chiloda,<br />
                        Ahmedabad, Gujarat 382330
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C7956D] p-3 rounded-xl">
                      <HiOutlinePhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">095866 60214</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/business-9.jpg"
                alt="Kala Carv CNC location"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
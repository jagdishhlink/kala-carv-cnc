'use client'

import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineStar, HiOutlineSparkles } from 'react-icons/hi2'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Diagonal Split Hero */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F4E6D7] via-gray-100 to-white">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#2C5530]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#E67E22]/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Diagonal Split Layout */}
        <div className="relative z-10 min-h-screen flex">
          {/* Left Side - Content */}
          <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8 animate-pulse">
                <HiOutlineShieldCheck className="w-5 h-5 text-[#2C5530]" />
                <span className="text-sm font-medium text-gray-800">Professional CNC Equipment</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-none mb-6">
                Precision
                <span className="block text-[#2C5530] italic">CNC Cutting</span>
                <span className="block text-3xl lg:text-4xl font-normal text-gray-600">for Crafters</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your scrapbooking ideas into perfectly cut reality with our professional CNC services in Ahmedabad.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2">
                  <HiOutlineStar className="w-4 h-4 text-[#E67E22]" />
                  <span className="text-sm font-medium">4.3★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2">
                  <HiOutlineClock className="w-4 h-4 text-[#2C5530]" />
                  <span className="text-sm font-medium">Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 rounded-lg px-4 py-2">
                  <HiOutlineMapPin className="w-4 h-4 text-[#2C5530]" />
                  <span className="text-sm font-medium">Ahmedabad Based</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2C5530] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2C5530]/90 transition-all duration-300 group flex items-center justify-center gap-2">
                  Get Your Custom Cut Quote
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[#2C5530] text-[#2C5530] px-8 py-4 rounded-lg font-semibold hover:bg-[#2C5530] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <HiOutlinePhone className="w-5 h-5" />
                  Call for Design Consultation
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <HiOutlinePhone className="w-4 h-4" />
                  <span>095866 60214</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Diagonal Image */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#2C5530]/10"></div>
            <div className="h-full w-full transform skew-x-6 origin-top-left bg-gradient-to-br from-gray-200 to-white">
              <Image
                src="/images/business-1.jpg"
                alt="CNC machine cutting intricate paper patterns close up"
                fill
                className="object-cover transform -skew-x-6 scale-110"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Product Showcase */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-72 h-72 bg-[#E67E22]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F4E6D7]/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Precision Meets
              <span className="block text-[#2C5530]">Creativity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer precision CNC cutting services tailored specifically for scrapbooking enthusiasts and craft professionals. From intricate patterns to custom designs, we bring your creative visions to life with industrial precision.
            </p>
          </div>

          {/* Floating Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 - Floating Left */}
            <div className="lg:transform lg:translate-y-16 group">
              <div className="bg-white rounded-2xl shadow-2xl shadow-[#2C5530]/10 overflow-hidden border border-gray-100 hover:shadow-3xl hover:shadow-[#2C5530]/20 transition-all duration-500 group-hover:scale-105">
                <div className="relative h-64 bg-gradient-to-br from-[#F4E6D7] to-gray-100">
                  <Image
                    src="/images/business-2.jpg"
                    alt="Colorful scrapbooking paper sheets arranged in geometric patterns"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Materials</h3>
                  <p className="text-gray-600 mb-6">Professional-grade cardstock, specialty papers, and craft materials designed for precision cutting.</p>
                  <div className="flex items-center text-[#2C5530] font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Explore Materials</span>
                    <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Center */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-2xl shadow-[#E67E22]/10 overflow-hidden border border-gray-100 hover:shadow-3xl hover:shadow-[#E67E22]/20 transition-all duration-500 group-hover:scale-105">
                <div className="relative h-64 bg-gradient-to-br from-[#F4E6D7] to-gray-100">
                  <Image
                    src="/images/business-5.jpg"
                    alt="Detailed macro shot of paper cutting blade and materials"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Tools</h3>
                  <p className="text-gray-600 mb-6">State-of-the-art CNC machines and cutting tools that deliver microscopic precision for intricate designs.</p>
                  <div className="flex items-center text-[#E67E22] font-semibold group-hover:translate-x-2 transition-transform">
                    <span>View Equipment</span>
                    <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Floating Right */}
            <div className="lg:transform lg:translate-y-8 group">
              <div className="bg-white rounded-2xl shadow-2xl shadow-[#2C5530]/10 overflow-hidden border border-gray-100 hover:shadow-3xl hover:shadow-[#2C5530]/20 transition-all duration-500 group-hover:scale-105">
                <div className="relative h-64 bg-gradient-to-br from-[#F4E6D7] to-gray-100">
                  <Image
                    src="/images/business-6.jpg"
                    alt="Scrapbook page with laser cut elements and embellishments"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Designs</h3>
                  <p className="text-gray-600 mb-6">Bring your unique visions to life with personalized cutting services and design consultation.</p>
                  <div className="flex items-center text-[#2C5530] font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Start Project</span>
                    <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals Row */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-[#2C5530] mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Precision CNC cutting for intricate scrapbooking designs</h4>
            </div>
            <div className="text-center">
              <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-4">
                <HiOutlineSparkles className="w-8 h-8 text-[#2C5530] mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Custom cutting services for unique crafting projects</h4>
            </div>
            <div className="text-center">
              <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-4">
                <HiOutlineShieldCheck className="w-8 h-8 text-[#2C5530] mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Professional-grade equipment for detailed work</h4>
            </div>
            <div className="text-center">
              <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-4">
                <HiOutlineMapPin className="w-8 h-8 text-[#2C5530] mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Local Ahmedabad crafting community specialist</h4>
            </div>
            <div className="text-center">
              <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-4">
                <HiOutlineBolt className="w-8 h-8 text-[#2C5530] mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Quick turnaround for personalized designs</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Grid Categories */}
      <section className="py-32 bg-[#F4E6D7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          {/* Grid Header */}
          <div className="mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Craft Categories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <p className="text-xl text-gray-700 leading-relaxed">
                Explore our precision-organized product categories, each designed with the meticulous attention to detail that defines our CNC approach.
              </p>
              <div className="text-right">
                <button className="bg-[#2C5530] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2C5530]/90 transition-all duration-300 inline-flex items-center gap-2">
                  View All Products
                  <HiOutlineArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Modular Grid */}
          <div className="grid grid-cols-12 gap-6 h-[800px]">
            {/* Large Feature Card */}
            <div className="col-span-12 lg:col-span-8 row-span-2 bg-white rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <div className="relative h-full bg-gradient-to-br from-gray-100 to-white">
                <Image
                  src="/images/business-4.jpg"
                  alt="Modern industrial workshop with organized craft supplies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-4">CNC Services</h3>
                  <p className="text-white/90 text-lg mb-6">Professional cutting services with industrial precision</p>
                  <button className="bg-white text-[#2C5530] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Book Service
                  </button>
                </div>
              </div>
            </div>

            {/* Stacked Cards */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 h-full">
              {/* Paper & Cardstock */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 flex-1">
                <div className="relative h-32 bg-gradient-to-br from-[#E67E22]/20 to-[#2C5530]/20">
                  <Image
                    src="/images/business-8.jpg"
                    alt="Organized craft storage with labeled compartments and tools"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paper & Cardstock</h3>
                  <p className="text-gray-600 text-sm mb-4">Premium materials for precision cutting</p>
                  <div className="flex items-center text-[#2C5530] font-semibold text-sm">
                    <span>Explore Range</span>
                    <HiOutlineArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Cutting Tools */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 flex-1">
                <div className="relative h-32 bg-gradient-to-br from-[#2C5530]/20 to-[#E67E22]/20">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Hands holding precisely cut decorative paper elements"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting Tools</h3>
                  <p className="text-gray-600 text-sm mb-4">Professional-grade precision instruments</p>
                  <div className="flex items-center text-[#E67E22] font-semibold text-sm">
                    <span>View Tools</span>
                    <HiOutlineArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="relative w-16 h-16 bg-[#F4E6D7] rounded-2xl mb-6 flex items-center justify-center">
                <Image
                  src="/images/business-9.jpg"
                  alt="Geometric paper art installation with precise cuts and folds"
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geometric Designs</h3>
              <p className="text-gray-600 mb-6">Precision-cut geometric patterns and installations</p>
              <div className="flex items-center text-[#2C5530] font-semibold">
                <span>Browse Designs</span>
                <HiOutlineArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="relative w-16 h-16 bg-[#F4E6D7] rounded-2xl mb-6 flex items-center justify-center">
                <Image
                  src="/images/business-10.jpg"
                  alt="Indian textile patterns translated to paper craft designs"
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gujarat Heritage</h3>
              <p className="text-gray-600 mb-6">Traditional patterns with modern precision cutting</p>
              <div className="flex items-center text-[#E67E22] font-semibold">
                <span>Cultural Collection</span>
                <HiOutlineArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-[#2C5530] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mb-6 flex items-center justify-center">
                <HiOutlineSparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Projects</h3>
              <p className="text-white/90 mb-6">Bring your unique vision to life with our expertise</p>
              <button className="bg-white text-[#2C5530] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 group-hover:scale-105">
                <span>Start Project</span>
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Innovation Timeline */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2C5530 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Craft
              <span className="block text-[#2C5530]">Innovation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kala Carv CNC brings industrial precision to the creative world of scrapbooking and crafting. Located in Ahmedabad's Shyamved Industrial Estate, we specialize in turning your intricate designs into perfectly cut materials.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#2C5530] via-[#E67E22] to-[#2C5530] h-full rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* Step 1 - Left Side */}
              <div className="flex items-center">
                <div className="flex-1 pr-8 lg:pr-16">
                  <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#2C5530]/10 border border-gray-100 ml-auto max-w-lg group hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#F4E6D7] rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#2C5530]">01</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Design Consultation</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      We start with understanding your vision. Our experts help optimize designs for CNC cutting and suggest the best approaches for achieving your creative goals.
                    </p>
                    <div className="relative h-40 bg-gradient-to-br from-[#F4E6D7] to-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src="/images/business-7.jpg"
                        alt="Woman working on detailed scrapbook in bright studio"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#2C5530] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8 lg:pl-16"></div>
              </div>

              {/* Step 2 - Right Side */}
              <div className="flex items-center">
                <div className="flex-1 pr-8 lg:pr-16"></div>
                <div className="w-8 h-8 bg-[#E67E22] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8 lg:pl-16">
                  <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#E67E22]/10 border border-gray-100 max-w-lg group hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#F4E6D7] rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#E67E22]">02</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Precision Cutting</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Using state-of-the-art CNC technology, we transform your designs into perfectly cut materials with industrial precision and microscopic accuracy.
                    </p>
                    <div className="relative h-40 bg-gradient-to-br from-[#F4E6D7] to-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src="/images/business-1.jpg"
                        alt="CNC machine cutting intricate paper patterns close up"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Left Side */}
              <div className="flex items-center">
                <div className="flex-1 pr-8 lg:pr-16">
                  <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#2C5530]/10 border border-gray-100 ml-auto max-w-lg group hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#F4E6D7] rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#2C5530]">03</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Quality Delivery</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Your precision-cut materials are carefully quality-checked and delivered ready for your creative projects with our signature attention to detail.
                    </p>
                    <div className="relative h-40 bg-gradient-to-br from-[#F4E6D7] to-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src="/images/business-6.jpg"
                        alt="Scrapbook page with laser cut elements and embellishments"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#2C5530] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8 lg:pl-16"></div>
              </div>
            </div>
          </div>

          {/* Process Stats */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#2C5530] mb-2">24-48h</div>
              <div className="text-gray-600 font-medium">Typical Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#E67E22] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Precision Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#2C5530] mb-2">7PM</div>
              <div className="text-gray-600 font-medium">Daily Until</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#E67E22] mb-2">4.3★</div>
              <div className="text-gray-600 font-medium">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonial Marquee */}
      <section className="py-32 bg-[#F4E6D7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Craft Community
              <span className="block text-[#2C5530]">Voices</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from the passionate crafters who trust Kala Carv CNC for their precision cutting needs and creative projects.
            </p>
          </div>

          {/* Testimonials Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Large Testimonial */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-12 shadow-2xl shadow-[#2C5530]/10 border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4E6D7] rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2C5530] to-[#E67E22] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      LC
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Local Crafter</h3>
                      <div className="flex gap-1 mb-4">
                        {[...Array(4)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-5 h-5 text-[#E67E22] fill-current" />
                        ))}
                        <HiOutlineStar className="w-5 h-5 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-6 italic">
                    "Looking forward to working with Kala Carv CNC for our <span className="text-[#2C5530] font-semibold">upcoming scrapbooking project requirements</span>. Their precision approach to crafting is exactly what our community needs."
                  </blockquote>
                  <div className="text-gray-600">
                    <p className="font-medium">Ahmedabad Craft Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Testimonial */}
            <div className="lg:col-span-4">
              <div className="bg-[#2C5530] text-white rounded-3xl p-8 shadow-2xl shadow-[#2C5530]/20 h-full flex flex-col justify-center group hover:shadow-3xl transition-all duration-500">
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <HiOutlineStar key={i} className="w-5 h-5 text-[#E67E22] fill-current" />
                    ))}
                    <HiOutlineStar className="w-5 h-5 text-white/50" />
                  </div>
                </div>
                <blockquote className="text-xl leading-relaxed mb-6 italic">
                  "Great to have a <span className="text-[#E67E22] font-semibold">professional CNC service focused on crafting</span> needs in Ahmedabad."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-lg font-bold">
                    DE
                  </div>
                  <div>
                    <p className="font-semibold">Design Enthusiast</p>
                    <p className="text-white/80 text-sm">Creative Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl shadow-[#2C5530]/10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#2C5530] mb-3 group-hover:scale-110 transition-transform duration-300">7+</div>
                <div className="text-gray-700 font-medium">Community Reviews</div>
                <div className="text-sm text-gray-500 mt-1">Growing Trust</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#E67E22] mb-3 group-hover:scale-110 transition-transform duration-300">4.3★</div>
                <div className="text-gray-700 font-medium">Average Rating</div>
                <div className="text-sm text-gray-500 mt-1">Quality Service</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#2C5530] mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-700 font-medium">Craft Focused</div>
                <div className="text-sm text-gray-500 mt-1">Specialized Service</div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#E67E22] mb-3 group-hover:scale-110 transition-transform duration-300">24h</div>
                <div className="text-gray-700 font-medium">Quick Response</div>
                <div className="text-sm text-gray-500 mt-1">Call 095866 60214</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Precision-Cut Your Vision?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2C5530] text-white px-10 py-5 rounded-xl font-semibold hover:bg-[#2C5530]/90 transition-all duration-300 text-lg flex items-center justify-center gap-3 group">
                Get Your Custom Cut Quote
                <HiOutlineArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#2C5530] text-[#2C5530] px-10 py-5 rounded-xl font-semibold hover:bg-[#2C5530] hover:text-white transition-all duration-300 text-lg flex items-center justify-center gap-3">
                <HiOutlinePhone className="w-6 h-6" />
                095866 60214
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
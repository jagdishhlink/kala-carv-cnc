'use client'

import Image from 'next/image'
import { HiOutlineWrench, HiOutlineShieldCheck, HiOutlineBolt, HiOutlineHeart, HiOutlineStar, HiOutlineUserGroup, HiOutlineArrowRight } from 'react-icons/hi2'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Geometric Overlay */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8B86D] to-gray-800">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={`border border-white/20 ${
                  i % 7 === 0 ? 'bg-white/5' : ''
                } ${i % 13 === 0 ? 'bg-[#2D4A3E]/20' : ''}`}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-[#2D4A3E] to-[#C7956D] rounded-2xl mb-8">
            <div className="bg-white px-8 py-4 rounded-xl">
              <span className="text-[#2D4A3E] font-medium">Our Story</span>
            </div>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            Precision Meets
            <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Creativity
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where advanced CNC technology empowers crafters to bring their boldest visions to life with professional precision
          </p>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/20 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-[#2D4A3E]/30 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-32 h-2 bg-gradient-to-r from-white/20 to-transparent"></div>
      </section>

      {/* Story Section with Asymmetric Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Story Content */}
            <div className="lg:col-span-7 lg:order-1">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-2 h-32 bg-gradient-to-b from-[#2D4A3E] to-[#C7956D] rounded-full"></div>
                
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                      Crafting the Future of
                      <span className="text-[#2D4A3E]"> Precision</span>
                    </h2>
                    
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Kala Carv CNC brings professional-grade cutting technology to the crafting community in Ahmedabad. Located in the heart of Shyamved Industrial Estate, we specialize in precision CNC and laser cutting services for scrapbookers, crafters, and DIY enthusiasts.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our state-of-the-art equipment ensures clean, accurate cuts on a variety of materials, helping bring your creative visions to life with professional quality results.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#E8B86D]/10 to-[#C7956D]/5 p-6 rounded-2xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <HiOutlineStar className="w-6 h-6 text-[#2D4A3E]" />
                        <span className="text-2xl font-bold text-[#2D4A3E]">4.3/5</span>
                      </div>
                      <p className="text-gray-600 font-medium">Customer Rating</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#2D4A3E]/10 to-[#C7956D]/5 p-6 rounded-2xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <HiOutlineBolt className="w-6 h-6 text-[#2D4A3E]" />
                        <span className="text-2xl font-bold text-[#2D4A3E]">Pro</span>
                      </div>
                      <p className="text-gray-600 font-medium">Grade Equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image with Geometric Frame */}
            <div className="lg:col-span-5 lg:order-2">
              <div className="relative">
                {/* Geometric Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#E8B86D] via-[#C7956D] to-[#2D4A3E] rounded-3xl transform rotate-3"></div>
                <div className="absolute -inset-2 bg-white rounded-2xl"></div>
                
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/images/business-2.jpg"
                    alt="Kala Carv CNC Workshop"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                    unoptimized
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl shadow-[#2D4A3E]/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2D4A3E] mb-1">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Modular Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-[#2D4A3E]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every cut, every project, every interaction is guided by our commitment to excellence and creativity
            </p>
          </div>

          {/* Values Grid with Varied Layouts */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Value 1 - Tall Card */}
            <div className="lg:row-span-2">
              <div className="h-full bg-gradient-to-br from-[#2D4A3E] to-[#C7956D] p-8 rounded-3xl text-white">
                <div className="mb-8">
                  <HiOutlineWrench className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Precision Craftsmanship</h3>
                  <p className="text-lg opacity-90 leading-relaxed mb-6">
                    Every project receives meticulous attention to detail, ensuring cuts are perfect and finishes are flawless.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Professional-grade CNC equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Quality control on every cut</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Material expertise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value 2 - Wide Card */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-[#2D4A3E]/10 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E8B86D] to-[#C7956D] rounded-2xl flex items-center justify-center">
                      <HiOutlineHeart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Collaboration</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We partner with crafters to bring their unique visions to life, offering design consultation and technical expertise.
                    </p>
                    <div className="inline-flex items-center text-[#2D4A3E] font-medium">
                      <span>Explore custom designs</span>
                      <HiOutlineArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value 3 - Square Card */}
            <div>
              <div className="bg-gradient-to-br from-[#E8B86D]/20 to-[#C7956D]/10 p-8 rounded-3xl">
                <HiOutlineShieldCheck className="w-12 h-12 text-[#2D4A3E] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing and inspection ensure every piece meets our high standards before delivery.
                </p>
              </div>
            </div>

            {/* Value 4 - Square Card */}
            <div>
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-[#2D4A3E]/10">
                <HiOutlineUserGroup className="w-12 h-12 text-[#2D4A3E] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supporting local crafters and makers with accessible professional services and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section with Interactive Elements */}
      <section className="py-24 bg-[#E8B86D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Technology Content */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Advanced Technology
                <span className="block text-white">Meets Artisan Care</span>
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Our workshop combines cutting-edge CNC and laser cutting technology with the personal touch of experienced craftspeople, ensuring every project benefits from both precision and artistry.
              </p>

              {/* Technology Features */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <HiOutlineBolt className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">High-Precision CNC Equipment</h4>
                    <p className="text-gray-700">Professional-grade machinery for consistent, accurate cuts on various materials</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <HiOutlineWrench className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Custom Design Capabilities</h4>
                    <p className="text-gray-700">From your sketches to finished products with professional design consultation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Material Sourcing</h4>
                    <p className="text-gray-700">Carefully selected materials that work perfectly with our cutting processes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/images/business-7.jpg"
                    alt="CNC Equipment"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/images/business-8.jpg"
                    alt="Precision Process"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              <div className="mt-12">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Quality Results"
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Geometric Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className={`border border-[#2D4A3E] ${
                  i % 5 === 0 ? 'bg-[#E8B86D]' : ''
                } ${i % 11 === 0 ? 'bg-[#C7956D]' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Bring Your
            <span className="block bg-gradient-to-r from-[#2D4A3E] to-[#C7956D] bg-clip-text text-transparent">
              Vision to Life?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and discover how precision cutting can elevate your creative work
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#2D4A3E] text-white font-semibold rounded-xl hover:bg-[#C7956D] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#2D4A3E]/20">
              Get Custom Quote Today
            </button>
            <button className="px-8 py-4 border-2 border-[#2D4A3E] text-[#2D4A3E] font-semibold rounded-xl hover:bg-[#2D4A3E] hover:text-white transition-all duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
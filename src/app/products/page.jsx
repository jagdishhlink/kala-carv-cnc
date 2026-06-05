'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineSparkles, HiOutlineWrench, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineHeart, HiOutlineStar, HiOutlineBolt } from 'react-icons/hi2'

export default function ProductsPage() {
  const [selectedMaterial, setSelectedMaterial] = useState('paper')
  const [activeFilter, setActiveFilter] = useState('all')

  const materials = [
    {
      id: 'paper',
      name: 'Paper & Cardstock',
      description: 'Premium papers perfect for intricate scrapbook designs',
      features: ['Various weights', 'Acid-free options', 'Textured finishes'],
      icon: HiOutlineSparkles
    },
    {
      id: 'wood',
      name: 'Thin Wood',
      description: 'Natural wood veneers for dimensional craft projects',
      features: ['Birch plywood', 'Basswood sheets', 'Decorative veneers'],
      icon: HiOutlineWrench
    },
    {
      id: 'acrylic',
      name: 'Acrylic Sheets',
      description: 'Clear and colored acrylics for modern craft applications',
      features: ['Crystal clear', 'Frosted finishes', 'Color options'],
      icon: HiOutlineBolt
    },
    {
      id: 'specialty',
      name: 'Specialty Materials',
      description: 'Unique materials for creative project possibilities',
      features: ['Fabric backing', 'Metallic sheets', 'Cork & felt'],
      icon: HiOutlineHeart
    }
  ]

  const products = [
    {
      id: 1,
      name: 'Intricate Mandala Designs',
      category: 'laser-cut',
      material: 'paper',
      price: 'From ₹25',
      description: 'Detailed mandala patterns perfect for scrapbook centerpieces',
      features: ['Multiple sizes', 'Various papers', 'Custom colors']
    },
    {
      id: 2,
      name: 'Dimensional Frames',
      category: 'laser-cut',
      material: 'wood',
      price: 'From ₹150',
      description: 'Wooden frames with precise geometric patterns',
      features: ['Natural wood', 'Custom sizes', 'Smooth finish']
    },
    {
      id: 3,
      name: 'Layered Elements',
      category: 'scrapbook',
      material: 'acrylic',
      price: 'From ₹45',
      description: 'Multi-layer acrylic elements for depth and dimension',
      features: ['Crystal clear', 'Perfect alignment', 'Easy assembly']
    },
    {
      id: 4,
      name: 'Custom Name Plates',
      category: 'custom',
      material: 'paper',
      price: 'From ₹35',
      description: 'Personalized name plates with decorative borders',
      features: ['Any font', 'Custom borders', 'Various colors']
    },
    {
      id: 5,
      name: 'Botanical Cut-outs',
      category: 'laser-cut',
      material: 'specialty',
      price: 'From ₹20',
      description: 'Nature-inspired designs on specialty materials',
      features: ['Leaf patterns', 'Flower motifs', 'Fabric backing']
    },
    {
      id: 6,
      name: 'Photo Mats & Borders',
      category: 'scrapbook',
      material: 'paper',
      price: 'From ₹18',
      description: 'Precision-cut photo mats with decorative edges',
      features: ['Standard sizes', 'Custom openings', 'Decorative edges']
    }
  ]

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'all') return true
    return product.category === activeFilter
  })

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section with Geometric Overlay */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8B86D] to-gray-800">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src="/images/business-3.jpg"
              alt="Professional CNC Cutting Services"
              fill
              className="object-cover opacity-30"
              unoptimized
            />
          </div>
        </div>
        
        {/* Geometric Overlay System */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#C7956D] rotate-45"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-[#2D4A3E] opacity-30 rounded-full"></div>
          <div className="absolute top-40 right-32 w-16 h-48 border border-[#C7956D] transform skew-y-12"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
              Precision Craft
              <span className="block text-[#C7956D]">Materials & Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional CNC and laser cutting services tailored specifically for scrapbooking and crafting needs. From intricate paper designs to custom patterns, our precision equipment handles projects of all sizes with exceptional quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#2D4A3E] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                Get Custom Quote Today
                <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#C7956D] text-[#C7956D] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#C7956D] hover:text-gray-900 transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Material Selector */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Explore Our
              <span className="block text-[#2D4A3E]">Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect material for your next crafting project. Each material is carefully selected for quality and precision cutting capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {materials.map((material) => {
              const IconComponent = material.icon
              return (
                <div
                  key={material.id}
                  onClick={() => setSelectedMaterial(material.id)}
                  className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedMaterial === material.id
                      ? 'bg-[#E8B86D] text-white shadow-2xl shadow-[#E8B86D]/30'
                      : 'bg-white shadow-xl hover:shadow-2xl'
                  }`}
                >
                  {/* Geometric Frame */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 border-2 rotate-45 ${
                    selectedMaterial === material.id ? 'border-white' : 'border-[#C7956D]'
                  }`}></div>
                  
                  <IconComponent className={`w-12 h-12 mb-6 ${
                    selectedMaterial === material.id ? 'text-white' : 'text-[#2D4A3E]'
                  }`} />
                  <h3 className={`text-xl font-bold mb-4 ${
                    selectedMaterial === material.id ? 'text-white' : 'text-gray-900'
                  }`}>
                    {material.name}
                  </h3>
                  <p className={`mb-6 ${
                    selectedMaterial === material.id ? 'text-gray-100' : 'text-gray-600'
                  }`}>
                    {material.description}
                  </p>
                  <ul className="space-y-2">
                    {material.features.map((feature, index) => (
                      <li key={index} className={`flex items-center text-sm ${
                        selectedMaterial === material.id ? 'text-white' : 'text-gray-700'
                      }`}>
                        <HiOutlineCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Selected Material Showcase */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <Image
                  src="/images/business-4.jpg"
                  alt="Material Showcase"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#2D4A3E] opacity-20"></div>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {materials.find(m => m.id === selectedMaterial)?.name}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {materials.find(m => m.id === selectedMaterial)?.description} Our precision cutting technology ensures clean, accurate results every time.
                </p>
                <div className="space-y-4 mb-8">
                  {materials.find(m => m.id === selectedMaterial)?.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#C7956D] rounded-full mr-4"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-[#2D4A3E] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-opacity-90 transition-colors">
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Product
              <span className="block text-[#2D4A3E]">Categories</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'laser-cut', label: 'Laser Cut Designs' },
              { id: 'scrapbook', label: 'Scrapbook Supplies' },
              { id: 'custom', label: 'Custom Orders' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#2D4A3E] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[#E8B86D] hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                {/* Geometric Frame */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-[#C7956D] transform rotate-45 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 h-48">
                  <Image
                    src="/images/business-6.jpg"
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#2D4A3E]">{product.price}</span>
                  <div className="flex items-center">
                    <HiOutlineStar className="w-5 h-5 text-[#C7956D] fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.3</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#C7956D] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-[#E8B86D] text-white py-3 rounded-2xl font-semibold hover:bg-[#C7956D] transition-colors group">
                  Order Now
                  <HiOutlineArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Process */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#E8B86D] to-gray-800 relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white transform rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-white opacity-20 rounded-3xl transform -rotate-12"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Custom Order
              <span className="block text-[#C7956D]">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to completion, our streamlined process ensures your custom laser cutting project exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Discuss your project vision and material requirements',
                icon: HiOutlineHeart
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create or refine your cutting patterns and layouts',
                icon: HiOutlineSparkles
              },
              {
                step: '03',
                title: 'Production',
                description: 'Precision cutting with professional-grade equipment',
                icon: HiOutlineWrench
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Quality check and timely delivery of finished products',
                icon: HiOutlineCheckCircle
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-[#2D4A3E]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C7956D] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <button className="bg-[#2D4A3E] text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
              Start Your Custom Project
            </button>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
              <Image
                src="/images/business-7.jpg"
                alt="Quality Guarantee"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
                unoptimized
              />
              {/* Geometric Overlay */}
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-[#C7956D] transform rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#2D4A3E] opacity-60 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Quality You Can
                <span className="block text-[#2D4A3E]">Trust</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Professional-Grade CNC Equipment',
                    description: 'State-of-the-art machinery ensures precision cuts every time'
                  },
                  {
                    title: 'Quality Material Sourcing',
                    description: 'Premium materials selected specifically for crafting excellence'
                  },
                  {
                    title: 'Attention to Detail',
                    description: 'Every project receives careful quality inspection before delivery'
                  },
                  {
                    title: '4.3/5 Star Customer Rating',
                    description: 'Proven track record of satisfied customers and quality results'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#C7956D] rounded-full flex-shrink-0 mt-1 mr-4 flex items-center justify-center">
                      <HiOutlineCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button className="bg-[#2D4A3E] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-opacity-90 transition-colors flex items-center group">
                  Learn More About Our Process
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
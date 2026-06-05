'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineBolt, HiOutlineArrowRight } from 'react-icons/hi2'

export default function ProductsPage() {
  const [selectedMaterial, setSelectedMaterial] = useState('wood')
  const [thicknessRange, setThicknessRange] = useState([3, 12])
  const [configuratorStep, setConfiguratorStep] = useState(1)

  const materialCategories = [
    {
      id: 'wood',
      name: 'Wood & MDF',
      description: 'Premium hardwoods and engineered materials perfect for scrapbook frames and decorative elements',
      thickness: '3-25mm',
      finishes: ['Natural', 'Sanded', 'Sealed'],
      applications: ['Photo Frames', 'Album Covers', 'Decorative Borders']
    },
    {
      id: 'acrylic',
      name: 'Acrylic Sheets',
      description: 'Crystal clear and colored acrylics for modern scrapbooking and display projects',
      thickness: '2-15mm',
      finishes: ['Clear', 'Frosted', 'Colored'],
      applications: ['Page Dividers', 'Photo Holders', 'Display Cases']
    },
    {
      id: 'metal',
      name: 'Metal Cutting',
      description: 'Aluminum and brass sheets for professional signage and durable craft elements',
      thickness: '1-8mm',
      finishes: ['Brushed', 'Anodized', 'Raw'],
      applications: ['Name Plates', 'Corner Details', 'Hardware']
    },
    {
      id: 'custom',
      name: 'Custom Projects',
      description: 'Specialized materials and complex multi-layer cutting for unique artistic visions',
      thickness: 'Variable',
      finishes: ['Custom', 'Multi-layer', 'Mixed Media'],
      applications: ['Art Installations', 'Complex Assemblies', 'Prototypes']
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Precision Photo Frame Set',
      material: 'Premium Birch Plywood',
      thickness: '6mm',
      sizes: ['4x6"', '5x7"', '8x10"'],
      price: '₹450 - ₹850',
      complexity: 'Simple',
      cutTime: '15 min'
    },
    {
      id: 2,
      name: 'Decorative Corner Elements',
      material: 'Walnut Wood',
      thickness: '4mm',
      sizes: ['Custom'],
      price: '₹120 per piece',
      complexity: 'Medium',
      cutTime: '8 min'
    },
    {
      id: 3,
      name: 'Acrylic Page Dividers',
      material: 'Clear Acrylic',
      thickness: '3mm',
      sizes: ['A4', 'A5', 'Custom'],
      price: '₹85 - ₹150',
      complexity: 'Simple',
      cutTime: '5 min'
    },
    {
      id: 4,
      name: 'Intricate Mandala Patterns',
      material: 'MDF',
      thickness: '8mm',
      sizes: ['6"', '9"', '12"'],
      price: '₹280 - ₹680',
      complexity: 'Complex',
      cutTime: '45 min'
    },
    {
      id: 5,
      name: 'Album Cover Cutouts',
      material: 'Bamboo Plywood',
      thickness: '10mm',
      sizes: ['Custom'],
      price: '₹520 - ₹1200',
      complexity: 'Medium',
      cutTime: '25 min'
    },
    {
      id: 6,
      name: 'Metal Name Plates',
      material: 'Brushed Aluminum',
      thickness: '2mm',
      sizes: ['Various'],
      price: '₹95 - ₹250',
      complexity: 'Simple',
      cutTime: '12 min'
    }
  ]

  const configuratorSteps = [
    { step: 1, title: 'Select Material', description: 'Choose your base material type' },
    { step: 2, title: 'Design Upload', description: 'Upload or create your design' },
    { step: 3, title: 'Specifications', description: 'Set dimensions and thickness' },
    { step: 4, title: 'Preview & Quote', description: 'Review and get instant pricing' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#E53E3E] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Precision Cut
                  <span className="block bg-gradient-to-r from-[#F7931E] to-orange-300 bg-clip-text text-transparent">
                    Materials
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mt-6 leading-relaxed">
                  Premium materials precision-cut for your scrapbooking projects. From delicate photo frames to intricate decorative elements.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                  <div className="flex items-center gap-2 text-gray-900">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F7931E]" />
                    <span className="font-medium">±0.1mm Precision</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                  <div className="flex items-center gap-2 text-gray-900">
                    <HiOutlineSparkles className="w-5 h-5 text-[#F7931E]" />
                    <span className="font-medium">30+ Materials</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                  <div className="flex items-center gap-2 text-gray-900">
                    <HiOutlineBolt className="w-5 h-5 text-[#F7931E]" />
                    <span className="font-medium">24hr Turnaround</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
              <Image
                src="/images/business-2.jpg"
                alt="Colorful acrylic sheets organized display"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Categories Hex Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Material Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each material carefully selected for scrapbooking excellence. Precision cut to your exact specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materialCategories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E53E3E]/10 cursor-pointer transform hover:-translate-y-2 ${
                  selectedMaterial === category.id ? 'border-[#E53E3E] bg-gradient-to-br from-[#E53E3E]/5 to-white' : 'border-gray-200 hover:border-[#F7931E]'
                }`}
                onClick={() => setSelectedMaterial(category.id)}
                style={{ 
                  clipPath: index % 2 === 0 ? 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' : 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
                }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#E53E3E] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Thickness Range</span>
                      <span className="text-sm font-bold text-[#2D3748] bg-gray-100 px-3 py-1 rounded-full">
                        {category.thickness}
                      </span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500 block mb-2">Available Finishes</span>
                      <div className="flex flex-wrap gap-1">
                        {category.finishes.map((finish) => (
                          <span key={finish} className="text-xs bg-[#F7931E]/20 text-[#F7931E] px-2 py-1 rounded-lg">
                            {finish}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500 block mb-2">Perfect For</span>
                      <ul className="space-y-1">
                        {category.applications.slice(0, 2).map((app) => (
                          <li key={app} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-[#E53E3E] rounded-full"></div>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards Masonry Layout */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-[#2D3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Popular precision-cut items for scrapbooking enthusiasts. Each piece crafted with meticulous attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 ${
                  index % 3 === 1 ? 'lg:translate-y-8' : index % 3 === 2 ? 'lg:translate-y-4' : ''
                }`}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Detailed wooden cut-out patterns"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-[#E53E3E] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.complexity}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E53E3E] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {product.material}
                      </span>
                      <span className="font-bold text-[#2D3748]">{product.thickness}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Available Sizes</span>
                      <div className="flex gap-1">
                        {product.sizes.map((size) => (
                          <span key={size} className="text-xs bg-[#F7931E]/20 text-[#F7931E] px-2 py-1 rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Cut Time</span>
                      <span className="text-sm font-bold text-[#2D3748]">{product.cutTime}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-lg font-bold text-[#E53E3E]">{product.price}</span>
                      <button className="bg-[#2D3748] text-gray-900 px-4 py-2 rounded-xl hover:bg-[#F7931E] transition-colors flex items-center gap-2 group">
                        <span>Get Quote</span>
                        <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thickness Filter Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Thickness Calculator
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Select the perfect material thickness for your project. Our precision cutting handles materials from paper-thin to robust structural pieces.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-lg font-bold text-gray-900">Thickness Range (mm)</label>
                    <div className="flex items-center gap-4">
                      <span className="bg-[#E53E3E] text-white px-4 py-2 rounded-xl font-bold">
                        {thicknessRange[0]}mm
                      </span>
                      <span className="text-gray-400">to</span>
                      <span className="bg-[#E53E3E] text-gray-900 px-4 py-2 rounded-xl font-bold">
                        {thicknessRange[1]}mm
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={thicknessRange[0]}
                      onChange={(e) => setThicknessRange([parseInt(e.target.value), thicknessRange[1]])}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={thicknessRange[1]}
                      onChange={(e) => setThicknessRange([thicknessRange[0], parseInt(e.target.value)])}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider absolute top-0"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { range: '1-3mm', use: 'Detailed Patterns', icon: '✂️' },
                      { range: '4-8mm', use: 'Photo Frames', icon: '🖼️' },
                      { range: '9-25mm', use: 'Structural Elements', icon: '🏗️' }
                    ].map((thickness) => (
                      <div key={thickness.range} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                        <div className="text-2xl mb-2">{thickness.icon}</div>
                        <div className="font-bold text-[#2D3748] text-sm">{thickness.range}</div>
                        <div className="text-xs text-gray-600 mt-1">{thickness.use}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
              <Image
                src="/images/business-9.jpg"
                alt="CNC cutting path creating intricate pattern"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cutting Configurator */}
      <section className="py-24 bg-gradient-to-br from-[#E53E3E] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Custom Cutting Configurator
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Design your perfect piece with our interactive configurator. See real-time pricing and cutting path visualization.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="flex justify-between items-center mb-12">
              {configuratorSteps.map((step) => (
                <div
                  key={step.step}
                  className={`flex items-center ${step.step !== configuratorSteps.length ? 'flex-1' : ''}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      configuratorStep >= step.step
                        ? 'bg-[#E53E3E] text-gray-900'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className={`ml-4 ${step.step !== configuratorSteps.length ? 'flex-1' : ''}`}>
                    <div className={`font-bold ${configuratorStep >= step.step ? 'text-[#E53E3E]' : 'text-gray-400'}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-gray-600">{step.description}</div>
                  </div>
                  {step.step !== configuratorSteps.length && (
                    <div className={`flex-1 h-1 mx-4 ${configuratorStep > step.step ? 'bg-[#E53E3E]' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {configuratorStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Material</h3>
                    {materialCategories.map((material) => (
                      <div
                        key={material.id}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedMaterial === material.id
                            ? 'border-[#E53E3E] bg-[#E53E3E]/5'
                            : 'border-gray-200 hover:border-[#F7931E]'
                        }`}
                        onClick={() => setSelectedMaterial(material.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">{material.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 ${
                            selectedMaterial === material.id
                              ? 'border-[#E53E3E] bg-[#E53E3E]'
                              : 'border-gray-300'
                          }`}>
                            {selectedMaterial === material.id && (
                              <HiOutlineCheckCircle className="w-full h-full text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 pt-6">
                  {configuratorStep > 1 && (
                    <button
                      onClick={() => setConfiguratorStep(configuratorStep - 1)}
                      className="px-6 py-3 border-2 border-[#2D3748] text-[#2D3748] rounded-xl hover:bg-[#2D3748] hover:text-white transition-colors"
                    >
                      Previous Step
                    </button>
                  )}
                  {configuratorStep < 4 && (
                    <button
                      onClick={() => setConfiguratorStep(configuratorStep + 1)}
                      className="px-6 py-3 bg-[#E53E3E] text-white rounded-xl hover:bg-[#F7931E] transition-colors flex items-center gap-2"
                    >
                      <span>Next Step</span>
                      <HiOutlineArrowRight className="w-5 h-5" />
                    </button>
                  )}
                  {configuratorStep === 4 && (
                    <button className="px-8 py-3 bg-[#2D3748] text-gray-900 rounded-xl hover:bg-[#F7931E] transition-colors font-bold">
                      Get Custom Quote Today
                    </button>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-white mb-6">Live Preview</h3>
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-80 flex items-center justify-center">
                  <Image
                    src="/images/business-1.jpg"
                    alt="CNC machine cutting intricate design"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover opacity-80"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#E53E3E]/20 flex items-center justify-center">
                    <div className="text-center text-gray-900">
                      <HiOutlineSparkles className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Your design preview will appear here</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Material</span>
                    <span className="font-bold text-[#2D3748]">
                      {materialCategories.find(m => m.id === selectedMaterial)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Estimated Price</span>
                    <span className="font-bold text-[#E53E3E] text-lg">₹450 - ₹1,200</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Cut Time</span>
                    <span className="font-bold text-[#2D3748]">15 - 30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
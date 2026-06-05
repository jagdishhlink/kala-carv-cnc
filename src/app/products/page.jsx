'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineAdjustmentsHorizontal, HiOutlineViewColumns, HiOutlineBars3, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineSparkles, HiOutlineWrench } from 'react-icons/hi2'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'paper', name: 'Paper & Cardstock', count: 8 },
    { id: 'tools', name: 'Precision Tools', count: 6 },
    { id: 'cnc', name: 'CNC Services', count: 4 },
    { id: 'materials', name: 'Specialty Materials', count: 6 }
  ]

  const products = [
    {
      id: 1,
      name: 'Premium Cardstock Collection',
      category: 'paper',
      price: '₹850',
      image: '/images/business-2.jpg',
      precision: '0.1mm tolerance',
      specs: 'GSM: 250-300, Colors: 20 variants',
      description: 'Professional-grade cardstock perfect for precision CNC cutting'
    },
    {
      id: 2,
      name: 'CNC Paper Cutting Service',
      category: 'cnc',
      price: '₹15/min',
      image: '/images/business-1.jpg',
      precision: '±0.05mm accuracy',
      specs: 'Max size: 600x400mm, Thickness: up to 3mm',
      description: 'Industrial precision cutting for intricate scrapbooking designs'
    },
    {
      id: 3,
      name: 'Precision Craft Blades',
      category: 'tools',
      price: '₹450',
      image: '/images/business-5.jpg',
      precision: 'Micro-sharp edge',
      specs: 'Material: High-carbon steel, Pack of 10',
      description: 'Professional cutting blades for detailed handwork'
    },
    {
      id: 4,
      name: 'Geometric Pattern Templates',
      category: 'materials',
      price: '₹1,200',
      image: '/images/business-9.jpg',
      precision: 'Laser-cut accuracy',
      specs: '12 unique patterns, Acrylic material',
      description: 'Pre-designed templates for consistent geometric cuts'
    },
    {
      id: 5,
      name: 'Textured Craft Papers',
      category: 'paper',
      price: '₹675',
      image: '/images/business-10.jpg',
      precision: 'Uniform texture',
      specs: 'Indian heritage patterns, 15 designs',
      description: 'Traditional Gujarat motifs adapted for modern crafting'
    },
    {
      id: 6,
      name: 'Custom Design Service',
      category: 'cnc',
      price: '₹500/design',
      image: '/images/business-3.jpg',
      precision: 'CAD precision',
      specs: 'Digital conversion, File formats: AI, DWG',
      description: 'Convert your sketches to CNC-ready cutting files'
    }
  ]

  const materials = [
    {
      name: 'Cardstock',
      thickness: '0.3-0.6mm',
      precision: '±0.1mm',
      speed: 'Fast',
      cost: '₹'
    },
    {
      name: 'Acrylic',
      thickness: '1-3mm',
      precision: '±0.05mm',
      speed: 'Medium',
      cost: '₹₹'
    },
    {
      name: 'Wood Veneer',
      thickness: '0.8-2mm',
      precision: '±0.15mm',
      speed: 'Slow',
      cost: '₹₹₹'
    },
    {
      name: 'Fabric',
      thickness: '0.5-1.5mm',
      precision: '±0.2mm',
      speed: 'Fast',
      cost: '₹₹'
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Filter Integration */}
      <section className="relative bg-gradient-to-br from-[#F4E6D7] to-gray-800 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5530]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Precision Craft
                <span className="block text-[#E67E22]">Products</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-md">
                Professional-grade materials and CNC cutting services for scrapbooking enthusiasts who demand perfection.
              </p>
              <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#E67E22]" />
                  <span>Industrial Precision</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineSparkles className="w-5 h-5 text-[#E67E22]" />
                  <span>Premium Materials</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E67E22]/30 to-[#2C5530]/30 rounded-3xl blur-xl"></div>
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-8.jpg"
                  alt="Organized craft storage with precision tools"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Sidebar Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineAdjustmentsHorizontal className="w-6 h-6 text-[#2C5530]" />
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Categories</h4>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === category.id
                          ? 'bg-[#2C5530] text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4">View Mode</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 p-3 rounded-lg transition-all ${
                        viewMode === 'grid'
                          ? 'bg-[#2C5530] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <HiOutlineViewColumns className="w-5 h-5 mx-auto" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 p-3 rounded-lg transition-all ${
                        viewMode === 'list'
                          ? 'bg-[#2C5530] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <HiOutlineBars3 className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.name || 'All Products'}
                </h2>
                <span className="text-gray-600">
                  {filteredProducts.length} products found
                </span>
              </div>

              {/* Hexagonal Product Grid */}
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
                  : 'space-y-6'
              }`}>
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`group cursor-pointer transition-all duration-300 ${
                      viewMode === 'grid'
                        ? `transform hover:-translate-y-2 ${index % 2 === 1 ? 'mt-8' : ''}`
                        : 'flex gap-6 bg-gray-50 rounded-2xl p-6'
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className={`${
                      viewMode === 'grid' 
                        ? 'bg-white rounded-2xl shadow-lg overflow-hidden' 
                        : 'w-32 h-32 flex-shrink-0'
                    }`}>
                      <div className={`relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 ${
                        viewMode === 'grid' ? 'h-48' : 'w-32 h-32 rounded-xl'
                      }`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          unoptimized
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-3 right-3 bg-[#2C5530] text-white px-2 py-1 rounded-lg text-sm font-semibold">
                          {product.precision}
                        </div>
                      </div>
                      
                      {viewMode === 'grid' && (
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#2C5530] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-[#2C5530]">{product.price}</span>
                            <HiOutlineArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#E67E22] group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      )}
                    </div>

                    {viewMode === 'list' && (
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#2C5530] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-[#F4E6D7] text-[#2C5530] px-3 py-1 rounded-full text-sm font-medium">
                            {product.precision}
                          </span>
                          <span className="text-gray-500 text-sm">{product.specs}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-[#2C5530]">{product.price}</span>
                          <button className="bg-[#2C5530] text-white px-6 py-2 rounded-lg hover:bg-[#E67E22] transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Detail Viewer Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={600}
                    height={400}
                    unoptimized
                    className="w-full h-80 object-cover"
                  />
                </div>

                <div>
                  <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiOutlineWrench className="w-6 h-6 text-[#2C5530]" />
                      <h3 className="font-bold text-xl text-[#2C5530]">Technical Specifications</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Precision:</span>
                        <span className="font-semibold text-[#2C5530]">{selectedProduct.precision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Specifications:</span>
                        <span className="font-semibold text-gray-900">{selectedProduct.specs}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-gray-700">Price:</span>
                        <span className="text-3xl font-bold text-[#2C5530]">{selectedProduct.price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#2C5530] text-white py-3 px-6 rounded-xl hover:bg-[#E67E22] transition-colors font-semibold">
                      Get Custom Quote
                    </button>
                    <button className="px-6 py-3 border-2 border-[#2C5530] text-[#2C5530] rounded-xl hover:bg-[#2C5530] hover:text-white transition-colors font-semibold">
                      Call for Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Material Comparison Table */}
      <section className="py-24 bg-[#F4E6D7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Material Comparison Guide
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect material for your precision cutting project with our detailed comparison chart.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#2C5530] text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-lg">Material</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Thickness Range</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Cut Precision</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Speed</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Cost Level</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr
                      key={material.name}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-8 py-6">
                        <div className="font-semibold text-lg text-gray-900">{material.name}</div>
                      </td>
                      <td className="px-8 py-6 text-gray-700 font-medium">{material.thickness}</td>
                      <td className="px-8 py-6">
                        <span className="bg-[#E67E22] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {material.precision}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-700 font-medium">{material.speed}</td>
                      <td className="px-8 py-6">
                        <span className="text-[#2C5530] font-bold text-lg">{material.cost}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#2C5530] text-white px-8 py-4 rounded-xl hover:bg-[#E67E22] transition-colors font-semibold text-lg inline-flex items-center gap-3">
              Request Custom Material Quote
              <HiOutlineArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2C5530] to-[#E67E22] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Precision Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our precision crafting experts for personalized recommendations and custom cutting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2C5530] px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get Your Custom Cut Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#2C5530] transition-colors font-semibold text-lg">
              Call for Design Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineSparkles, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight, HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineHeart } from 'react-icons/hi2'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'laser-cut', name: 'Laser Cut Materials', count: 8 },
    { id: 'engraved', name: 'Engraved Pieces', count: 6 },
    { id: 'custom', name: 'Custom Orders', count: 10 }
  ]

  const products = [
    {
      id: 1,
      name: 'Precision Cut Cardstock Shapes',
      category: 'laser-cut',
      price: '₹50 - ₹200',
      description: 'Perfect geometric shapes cut with CNC precision for professional scrapbook layouts',
      features: ['Multiple thicknesses', 'Custom dimensions', '0.1mm precision'],
      image: '/images/business-3.jpg'
    },
    {
      id: 2,
      name: 'Custom Wood Veneer Letters',
      category: 'engraved',
      price: '₹15 per letter',
      description: 'Personalized wooden letters with smooth edges and professional finish',
      features: ['Various wood types', 'Multiple fonts', 'Custom sizes'],
      image: '/images/business-4.jpg'
    },
    {
      id: 3,
      name: 'Acrylic Photo Frames',
      category: 'laser-cut',
      price: '₹300 - ₹800',
      description: 'Crystal clear acrylic frames cut to exact specifications',
      features: ['Multiple sizes', 'Custom shapes', 'Polished edges'],
      image: '/images/business-6.jpg'
    },
    {
      id: 4,
      name: 'Wedding Album Covers',
      category: 'custom',
      price: 'Custom Quote',
      description: 'Personalized album covers with intricate CNC cut designs',
      features: ['Premium materials', 'Custom engraving', 'Leather options'],
      image: '/images/business-2.jpg'
    },
    {
      id: 5,
      name: 'Decorative Border Strips',
      category: 'laser-cut',
      price: '₹25 per piece',
      description: 'Intricate border designs for elegant scrapbook pages',
      features: ['Various patterns', 'Multiple materials', 'Precision cuts'],
      image: '/images/business-7.jpg'
    },
    {
      id: 6,
      name: 'Custom Name Plates',
      category: 'engraved',
      price: '₹150 - ₹500',
      description: 'Professional name plates for scrapbook covers and albums',
      features: ['Multiple fonts', 'Various materials', 'Custom designs'],
      image: '/images/business-8.jpg'
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const materials = [
    {
      name: 'Premium Cardstock',
      thickness: '0.2mm - 3mm',
      colors: '50+ options',
      finish: 'Matte & Glossy',
      image: '/images/business-1.jpg'
    },
    {
      name: 'Wood Veneer',
      thickness: '0.5mm - 5mm',
      types: 'Oak, Maple, Cherry',
      finish: 'Natural & Stained',
      image: '/images/business-5.jpg'
    },
    {
      name: 'Acrylic Sheets',
      thickness: '1mm - 10mm',
      colors: 'Clear & Colored',
      finish: 'Polished edges',
      image: '/images/business-9.jpg'
    },
    {
      name: 'Leather & Fabric',
      thickness: '1mm - 8mm',
      types: 'Genuine & Synthetic',
      finish: 'Multiple textures',
      image: '/images/business-10.jpg'
    }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E67E22] to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/70"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <HiOutlineSparkles className="w-8 h-8 text-[#F39C12]" />
                  <span className="text-[#F39C12] font-medium tracking-wide">PREMIUM PRODUCTS</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Precision Cut
                  <span className="block text-[#F39C12]">Crafting Materials</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Professional-grade CNC cutting services and premium scrapbooking supplies. 
                  Every piece crafted with industrial precision for your creative projects.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#2C3E50] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#F39C12] transition-all duration-300 flex items-center gap-2 group">
                  Browse Catalog
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#2C3E50] transition-all duration-300">
                  Custom Quote
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/business-1.jpg"
                  alt="CNC precision cutting showcase"
                  width={600}
                  height={500}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F39C12] text-[#2C3E50] p-6 rounded-2xl font-bold text-lg shadow-xl">
                0.1mm Precision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#2C3E50] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#F39C12] hover:text-white'
                }`}
              >
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-lg text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    unoptimized
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#F39C12] text-[#2C3E50] px-3 py-1 rounded-lg font-semibold text-sm">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#2C3E50] group-hover:text-[#F39C12] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#F39C12] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-[#2C3E50] text-white py-3 rounded-2xl font-semibold hover:bg-[#F39C12] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    View Details
                    <HiOutlineChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HiOutlineBolt className="w-8 h-8 text-[#F39C12]" />
              <span className="text-[#F39C12] font-medium tracking-wide">PREMIUM MATERIALS</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#2C3E50]">
              Quality Materials for
              <span className="block text-[#F39C12]">Every Project</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with the finest materials to ensure your projects meet professional standards. 
              Each material is carefully selected for durability and precision cutting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={material.image}
                    alt={material.name}
                    width={300}
                    height={250}
                    unoptimized
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#2C3E50] group-hover:text-[#F39C12] transition-colors">
                    {material.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Thickness:</span>
                      <span className="text-[#2C3E50] font-semibold text-sm">{material.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Options:</span>
                      <span className="text-[#2C3E50] font-semibold text-sm">{material.colors || material.types}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Finish:</span>
                      <span className="text-[#2C3E50] font-semibold text-sm">{material.finish}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <HiOutlineWrench className="w-8 h-8 text-[#F39C12]" />
                  <span className="text-[#F39C12] font-medium tracking-wide">OUR PROCESS</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight">
                  From Design to
                  <span className="block text-[#F39C12]">Perfect Cut</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our precision CNC process ensures every piece meets exact specifications. 
                  From initial design consultation to final quality check, we maintain the highest standards.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] text-white rounded-xl flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-[#2C3E50]">Design Consultation</h3>
                    <p className="text-gray-600">Review your project requirements and optimize designs for CNC cutting</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F39C12] text-white rounded-xl flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-[#2C3E50]">Precision Cutting</h3>
                    <p className="text-gray-600">Advanced CNC machinery cuts with 0.1mm precision for perfect results</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] text-white rounded-xl flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-[#2C3E50]">Quality Assurance</h3>
                    <p className="text-gray-600">Each piece inspected for accuracy and finish before delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-8.jpg"
                  alt="CNC cutting process"
                  width={600}
                  height={500}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-[#F39C12] text-white p-6 rounded-2xl shadow-2xl">
                <HiOutlineShieldCheck className="w-8 h-8 mb-2" />
                <div className="font-bold">Quality</div>
                <div className="text-sm">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E67E22] to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <HiOutlineHeart className="w-8 h-8 text-[#F39C12]" />
                <span className="text-[#F39C12] font-medium tracking-wide">CUSTOM ORDERS</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Bring Your Vision
                <span className="block text-[#F39C12]">To Life</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Have a unique project in mind? Our custom CNC cutting services can create precisely 
                what you envision. From intricate designs to large-scale projects, we deliver precision results.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="bg-[#2C3E50] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#F39C12] transition-all duration-300 flex items-center gap-3 group">
                Get Custom Quote Today
                <HiOutlineArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#2C3E50] transition-all duration-300">
                Call 095866 60214
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-[#F39C12]">24hrs</div>
                <div className="text-white">Quick Turnaround</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-[#F39C12]">0.1mm</div>
                <div className="text-white">Precision Accuracy</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-[#F39C12]">50+</div>
                <div className="text-white">Material Options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all"
              >
                ×
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#2C3E50]">{selectedProduct.name}</h2>
                  <span className="bg-[#F39C12] text-white px-4 py-2 rounded-xl font-bold">{selectedProduct.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-bold text-[#2C3E50]">Features:</h3>
                <div className="grid gap-2">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-[#2C3E50] text-white py-4 rounded-2xl font-bold hover:bg-[#F39C12] transition-all duration-300">
                  Request Quote
                </button>
                <button className="flex-1 border-2 border-[#2C3E50] text-[#2C3E50] py-4 rounded-2xl font-bold hover:bg-[#2C3E50] hover:text-white transition-all duration-300">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
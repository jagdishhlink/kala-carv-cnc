'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineWrench, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineBolt, HiOutlineShieldCheck } from 'react-icons/hi2';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export default function ProductsPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#3498DB] to-gray-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white">
              <HiOutlineSparkles className="w-4 h-4 mr-2" />
              Premium CNC Products & Materials
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Materials & Supplies
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of precision-cut materials and scrapbooking supplies. 
              From premium cardstock to industrial-grade cutting materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From precision cardstock to industrial materials, we offer everything you need for your CNC cutting projects.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: HiOutlineSparkles,
                title: "Premium Cardstock",
                description: "High-quality cardstock in various weights and colors for scrapbooking projects",
                features: ["Multiple weights available", "Color variety", "Precision cut ready"],
                image: "/images/business-6.jpg"
              },
              {
                icon: HiOutlineWrench,
                title: "Craft Materials",
                description: "Specialized materials for DIY projects and custom craft applications",
                features: ["Acrylic sheets", "Thin wood veneers", "Specialty papers"],
                image: "/images/business-7.jpg"
              },
              {
                icon: HiOutlineBolt,
                title: "Industrial Materials",
                description: "Professional-grade materials for commercial and industrial applications",
                features: ["Metal sheets", "Composite materials", "Technical plastics"],
                image: "/images/business-8.jpg"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-md border overflow-hidden h-full"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <HiOutlineCheckCircle className="w-4 h-4 text-[#2C3E50] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#2C3E50] text-white py-3 rounded-xl font-medium hover:bg-[#34495e] transition-colors flex items-center justify-center gap-2"
                    >
                      View Products
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular materials for precision CNC cutting and scrapbooking projects.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Premium White Cardstock",
                description: "High-quality 250gsm cardstock perfect for precision cuts",
                price: "Starting from ₹50/sheet",
                specs: "250gsm • A4 Size • Smooth Finish",
                image: "/images/business-9.jpg"
              },
              {
                name: "Colored Paper Variety Pack",
                description: "20 different colors in scrapbooking-ready sizes",
                price: "₹400/pack",
                specs: "180gsm • 12x12 inch • Fade Resistant",
                image: "/images/business-10.jpg"
              },
              {
                name: "Acrylic Sheet Clear",
                description: "Crystal clear acrylic for professional applications",
                price: "₹150/sq ft",
                specs: "3mm Thickness • UV Resistant • Optical Grade",
                image: "/images/business-6.jpg"
              },
              {
                name: "Birch Wood Veneer",
                description: "Premium thin wood sheets for laser cutting",
                price: "₹80/sq ft",
                specs: "1.5mm Thickness • Natural Finish • Precision Grade",
                image: "/images/business-7.jpg"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -3, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden h-full"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.description}</p>
                    <div className="text-xs text-gray-500 mb-3 bg-gray-50 p-2 rounded">
                      {product.specs}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2C3E50] font-bold text-sm">{product.price}</span>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#2C3E50] text-white px-3 py-1.5 rounded-lg text-xs hover:bg-[#34495e] transition-colors"
                      >
                        Order
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Material Specifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material Specifications
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technical details and cutting capabilities for all our materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <HiOutlineShieldCheck className="w-6 h-6 text-[#2C3E50] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Paper Materials</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Cardstock Weight Range</span>
                    <span className="font-medium text-gray-900">160gsm - 350gsm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Maximum Size</span>
                    <span className="font-medium text-gray-900">24" x 36"</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Cutting Precision</span>
                    <span className="font-medium text-gray-900">±0.1mm</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Available Finishes</span>
                    <span className="font-medium text-gray-900">Matte, Glossy, Textured</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <HiOutlineWrench className="w-6 h-6 text-[#2C3E50] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Wood Materials</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Thickness Range</span>
                    <span className="font-medium text-gray-900">0.8mm - 6mm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Wood Types</span>
                    <span className="font-medium text-gray-900">Birch, Maple, MDF</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Surface Quality</span>
                    <span className="font-medium text-gray-900">Smooth, Ready to Finish</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Edge Quality</span>
                    <span className="font-medium text-gray-900">Clean, No Burning</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <HiOutlineBolt className="w-6 h-6 text-[#2C3E50] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Acrylic Materials</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Thickness Options</span>
                    <span className="font-medium text-gray-900">2mm - 12mm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Color Options</span>
                    <span className="font-medium text-gray-900">Clear, Colored, Frosted</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Edge Polishing</span>
                    <span className="font-medium text-gray-900">Available</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">UV Resistance</span>
                    <span className="font-medium text-gray-900">10+ Years Outdoor</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2C3E50] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Custom Material Sourcing</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Don't see the material you need? We can source specialized materials for your unique projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <HiOutlineCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">Metal sheets and composites</span>
                  </li>
                  <li className="flex items-center">
                    <HiOutlineCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">Specialty craft materials</span>
                  </li>
                  <li className="flex items-center">
                    <HiOutlineCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">Industrial-grade plastics</span>
                  </li>
                </ul>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#2C3E50] px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  Request Custom Material
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#3498DB] to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Ready to Order Materials?
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Get in touch for pricing, availability, and custom material sourcing. 
              We're here to help bring your projects to life with precision materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#3498DB] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Material Quote
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#3498DB] transition-colors"
              >
                View Full Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
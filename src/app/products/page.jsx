'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineWrench, HiOutlineBolt, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineHeart } from 'react-icons/hi2'

const fadeInUp = { 
  initial: { opacity: 0, y: 30 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true }, 
  transition: { duration: 0.5 } 
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

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E74C3C] to-gray-800 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <HiOutlineSparkles className="w-4 h-4 mr-2" />
              Premium CNC Products
            </motion.div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Precision Cut Products for
              <span className="block bg-gradient-to-r from-[#F39C12] to-yellow-300 bg-clip-text text-transparent">
                Creative Professionals
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our collection of precision-cut scrapbooking elements, custom designs, and premium craft materials. 
              Each product showcases the quality and precision that makes Kala Carv CNC the best place in Ahmedabad for craft cutting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#products"
                className="bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#34495E] transition-colors shadow-lg flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Products
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
              From intricate scrapbooking elements to custom industrial components, our CNC precision delivers exceptional quality across all product categories.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                title: "Custom Scrapbook Elements",
                description: "Precision-cut letters, shapes, and decorative elements for unique scrapbooking projects.",
                image: "/images/business-1.jpg",
                features: ["Custom lettering", "Intricate patterns", "Various materials", "Perfect edges"]
              },
              {
                title: "Precision Craft Components",
                description: "High-quality craft components cut to exact specifications for professional projects.",
                image: "/images/business-2.jpg",
                features: ["Exact dimensions", "Clean cuts", "Multiple materials", "Bulk orders"]
              },
              {
                title: "Personalized Designs",
                description: "Bring your creative vision to life with our custom design and cutting services.",
                image: "/images/business-3.jpg",
                features: ["Custom artwork", "Personal logos", "Name plates", "Unique shapes"]
              },
              {
                title: "Premium Materials",
                description: "Quality cardstock, chipboard, acrylic, and wood veneer materials for all projects.",
                image: "/images/business-6.jpg",
                features: ["Premium quality", "Various thicknesses", "Color options", "Specialty materials"]
              },
              {
                title: "Industrial Components",
                description: "Precision-cut industrial parts and components for professional applications.",
                image: "/images/business-7.jpg",
                features: ["Industrial grade", "Tight tolerances", "Durable materials", "Custom specs"]
              },
              {
                title: "Craft Supplies",
                description: "Complete range of scrapbooking supplies and tools alongside our cutting services.",
                image: "/images/business-8.jpg",
                features: ["Quality tools", "Adhesives", "Decorative items", "Storage solutions"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl shadow-md overflow-hidden group"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#2C3E50] mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <motion.button
                    className="w-full bg-[#2C3E50] text-white py-3 rounded-xl font-medium hover:bg-[#34495E] transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Work Gallery
            </h2>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
              Showcase of our precision CNC cutting capabilities and the amazing precision on custom scrapbook elements that our customers love.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { image: "/images/business-4.jpg", title: "Custom Lettering", category: "Scrapbooking" },
              { image: "/images/business-5.jpg", title: "Precision Cuts", category: "Industrial" },
              { image: "/images/business-9.jpg", title: "Decorative Elements", category: "Crafts" },
              { image: "/images/business-10.jpg", title: "Complex Patterns", category: "Custom" },
              { image: "/images/business-1.jpg", title: "Wood Veneer Work", category: "Premium" },
              { image: "/images/business-2.jpg", title: "Acrylic Cutting", category: "Modern" },
              { image: "/images/business-3.jpg", title: "Cardstock Designs", category: "Traditional" },
              { image: "/images/business-6.jpg", title: "Multi-layer Projects", category: "Advanced" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs bg-[#2C3E50] px-2 py-1 rounded-full inline-block mb-2">
                      {item.category}
                    </div>
                    <h4 className="font-medium text-sm">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#E74C3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Material Options
            </h2>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6"></div>
            <p className="text-gray-200 max-w-2xl mx-auto text-base leading-relaxed">
              Professional quality materials and tools for all your crafting needs. We stock premium materials that deliver exceptional results.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                name: "Premium Cardstock",
                specs: "Various weights & colors",
                icon: HiOutlineHeart,
                description: "High-quality cardstock perfect for scrapbooking and craft projects"
              },
              {
                name: "Chipboard",
                specs: "Multiple thicknesses",
                icon: HiOutlineWrench,
                description: "Sturdy chipboard for structural elements and backing materials"
              },
              {
                name: "Acrylic Sheets",
                specs: "Clear & colored options",
                icon: HiOutlineSparkles,
                description: "Premium acrylic for modern, professional-looking projects"
              },
              {
                name: "Wood Veneer",
                specs: "Natural wood finishes",
                icon: HiOutlineBolt,
                description: "Beautiful wood veneer for elegant, natural craft elements"
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <material.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{material.name}</h3>
                <div className="text-[#F39C12] text-sm font-medium mb-3">{material.specs}</div>
                <p className="text-gray-200 text-sm leading-relaxed">{material.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-gray-700 mb-8 text-base leading-relaxed">
              Get professional quality cutting at great prices. Contact us today for custom quotes and bring your creative vision to life with our precision CNC cutting services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#34495E] transition-colors shadow-lg flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote Today
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/services"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-md border border-gray-200 flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
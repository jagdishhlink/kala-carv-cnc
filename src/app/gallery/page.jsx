'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineUserGroup, HiOutlineBolt, HiOutlineArrowRight } from 'react-icons/hi2'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects', count: 42 },
    { id: 'scrapbook', label: 'Scrapbook Designs', count: 18 },
    { id: 'paper', label: 'Paper Cutting', count: 15 },
    { id: 'custom', label: 'Custom Orders', count: 9 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Intricate Wedding Album Covers',
      category: 'scrapbook',
      material: 'Premium Cardstock',
      technique: 'Laser Cut',
      complexity: 'High',
      image: '/images/business-4.jpg'
    },
    {
      id: 2,
      title: 'Custom Birthday Card Set',
      category: 'paper',
      material: 'Textured Paper',
      technique: 'CNC Cut',
      complexity: 'Medium',
      image: '/images/business-6.jpg'
    },
    {
      id: 3,
      title: 'Corporate Gift Boxes',
      category: 'custom',
      material: 'Wood Veneer',
      technique: 'Precision Cut',
      complexity: 'High',
      image: '/images/business-7.jpg'
    },
    {
      id: 4,
      title: 'Decorative Photo Frames',
      category: 'scrapbook',
      material: 'Acrylic',
      technique: 'Laser Engrave',
      complexity: 'Medium',
      image: '/images/business-8.jpg'
    },
    {
      id: 5,
      title: 'Event Invitation Suite',
      category: 'paper',
      material: 'Specialty Paper',
      technique: 'Multi-layer Cut',
      complexity: 'High',
      image: '/images/business-2.jpg'
    },
    {
      id: 6,
      title: 'Memory Book Elements',
      category: 'scrapbook',
      material: 'Mixed Media',
      technique: 'Precision Cut',
      complexity: 'Medium',
      image: '/images/business-3.jpg'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const complexityColors = {
    'High': 'text-red-600 bg-red-50',
    'Medium': 'text-orange-600 bg-orange-50',
    'Low': 'text-green-600 bg-green-50'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Geometric Overlay */}
      <section className="relative py-32 bg-gradient-to-br from-[#E8B86D] to-gray-800 overflow-hidden">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rotate-45"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border-3 border-white -rotate-12"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HiOutlineSparkles className="text-4xl text-white" />
              <span className="text-white/90 font-medium tracking-wide">PROJECT SHOWCASE</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Precision in
              <span className="block text-[#2D4A3E]">Every Cut</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Explore our gallery of custom laser cutting and CNC projects. From intricate scrapbook designs to precision corporate work, see how we transform creative visions into reality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">42+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/80">Material Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.3★</div>
                <div className="text-white/80">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E8B86D]/10 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 group ${
                  activeFilter === category.id
                    ? 'bg-[#2D4A3E] text-white shadow-lg shadow-[#2D4A3E]/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#E8B86D] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  {category.label}
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white text-gray-600 group-hover:bg-white/20 group-hover:text-white'
                  }`}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Featured Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-gradient-to-br from-[#E8B86D]/10 to-transparent rounded-3xl">
              <HiOutlineBolt className="text-4xl text-[#2D4A3E] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Precision Cutting</h3>
              <p className="text-gray-600">State-of-the-art CNC and laser equipment for perfect results</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-[#C7956D]/10 to-transparent rounded-3xl">
              <HiOutlineHeart className="text-4xl text-[#2D4A3E] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600">Bring your unique vision to life with personalized cutting services</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-[#E8B86D]/20 to-transparent rounded-3xl">
              <HiOutlineUserGroup className="text-4xl text-[#2D4A3E] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Professional craftspeople dedicated to quality and precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index % 3 === 0 ? 'lg:translate-y-8' : 
                  index % 3 === 1 ? 'lg:-translate-y-4' : ''
                }`}
              >
                {/* Geometric Frame Overlay */}
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-[#2D4A3E]/20 rotate-45 z-10 group-hover:border-[#2D4A3E]/40 transition-colors duration-300"></div>
                
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Complexity Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${complexityColors[project.complexity]}`}>
                      {project.complexity}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D4A3E] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Material:</span>
                      <span className="font-medium text-gray-900">{project.material}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Technique:</span>
                      <span className="font-medium text-gray-900">{project.technique}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#2D4A3E] to-[#C7956D] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#2D4A3E]/20 transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      View Details
                      <HiOutlineArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Showing {filteredProjects.length} of {categories.find(c => c.id === activeFilter)?.count || 42} projects</p>
                <button className="bg-[#2D4A3E] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#C7956D] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Load More Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#E8B86D]/5 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#C7956D]/10 to-transparent rounded-full translate-x-40 translate-y-40"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Cutting Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, see how we bring precision to every project through our proven workflow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-[#2D4A3E]/20 rotate-12"></div>
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl aspect-[4/3]">
                <Image
                  src="/images/business-8.jpg"
                  alt="CNC cutting process"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2D4A3E] text-white rounded-xl flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Design Consultation</h3>
                  <p className="text-gray-600">We review your concept and recommend the best materials and cutting techniques</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C7956D] text-white rounded-xl flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Setup</h3>
                  <p className="text-gray-600">Our CNC and laser equipment is calibrated for your specific material requirements</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E8B86D] text-white rounded-xl flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Cutting</h3>
                  <p className="text-gray-600">Professional-grade cutting with attention to every detail and finishing touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E8B86D] relative overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 border-4 border-white rotate-45"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 border-3 border-white -rotate-12"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-12">
            Let's discuss your custom cutting needs and bring your creative vision to life with precision craftsmanship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#2D4A3E] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#2D4A3E] transition-all duration-300 shadow-xl hover:shadow-2xl">
              Get Custom Quote Today
            </button>
            <button className="bg-white text-[#2D4A3E] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#2D4A3E] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl">
              Call 095866 60214
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
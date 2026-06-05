'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineHeart, HiOutlineSparkles, HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi2'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects', count: 48 },
    { id: 'wedding', name: 'Wedding Albums', count: 18 },
    { id: 'baby', name: 'Baby Scrapbooks', count: 12 },
    { id: 'custom', name: 'Custom Cuts', count: 15 },
    { id: 'decorative', name: 'Decorative Elements', count: 8 }
  ]

  const projects = [
    {
      id: 1,
      title: "Intricate Wedding Memory Album",
      category: "wedding",
      client: "Priya & Rajesh",
      description: "Precision-cut mandala patterns with gold foil accents",
      image: "/images/business-4.jpg",
      tags: ["Laser Cut", "Gold Foil", "Custom Design"],
      complexity: "High",
      materials: ["Premium Cardstock", "Acrylic", "Wood Veneer"]
    },
    {
      id: 2,
      title: "Custom Baby Milestone Cards",
      category: "baby",
      client: "Anita K.",
      description: "Delicate animal cutouts with personalized engravings",
      image: "/images/business-6.jpg",
      tags: ["Engraved", "Cute Animals", "Milestone"],
      complexity: "Medium",
      materials: ["Birch Wood", "Colored Cardstock"]
    },
    {
      id: 3,
      title: "Geometric Pattern Collection",
      category: "decorative",
      client: "Craft Studio Ahmedabad",
      description: "Modern geometric elements for contemporary scrapbooks",
      image: "/images/business-7.jpg",
      tags: ["Geometric", "Modern", "Batch Order"],
      complexity: "Medium",
      materials: ["Acrylic", "Metallic Cardstock"]
    },
    {
      id: 4,
      title: "Traditional Paisley Borders",
      category: "custom",
      client: "Meera P.",
      description: "Intricate paisley patterns inspired by Gujarati art",
      image: "/images/business-8.jpg",
      tags: ["Traditional", "Paisley", "Cultural"],
      complexity: "High",
      materials: ["Wood", "Colored Paper", "Fabric"]
    },
    {
      id: 5,
      title: "3D Layered Flowers",
      category: "decorative",
      client: "Ravi's Craft Corner",
      description: "Multi-layered flower cutouts with precise assembly guides",
      image: "/images/business-3.jpg",
      tags: ["3D", "Layered", "Floral"],
      complexity: "High",
      materials: ["Cardstock", "Foam Board", "Vellum"]
    },
    {
      id: 6,
      title: "Personalized Name Cutouts",
      category: "custom",
      client: "Various Clients",
      description: "Custom typography cuts in multiple languages including Gujarati",
      image: "/images/business-2.jpg",
      tags: ["Typography", "Multilingual", "Personal"],
      complexity: "Low",
      materials: ["Wood", "Acrylic", "Cardstock"]
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E67E22] to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src="/images/business-1.jpg"
              alt="CNC Workshop Gallery"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineSparkles className="w-8 h-8 text-[#F39C12]" />
              <span className="text-[#F39C12] font-medium tracking-wide">PROJECT SHOWCASE</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Precision Meets
              <span className="block text-[#F39C12]">Creativity</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
              Explore our portfolio of custom CNC cutting projects that showcase the perfect blend 
              of technical precision and artistic vision.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                <span className="font-medium">48+ Completed Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <HiOutlineHeart className="w-5 h-5 text-[#F39C12]" />
                <span className="font-medium">100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Filter through our diverse portfolio to find inspiration for your next project
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#2C3E50] text-white shadow-xl shadow-[#2C3E50]/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.name}
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F39C12]/20 text-[#F39C12]'
                  }`}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center gap-2 text-white">
                        <HiOutlineSparkles className="w-5 h-5" />
                        <span className="font-medium">View Details</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2C3E50] transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                        project.complexity === 'High' 
                          ? 'bg-red-100 text-red-700'
                          : project.complexity === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {project.complexity}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-[#F39C12]/10 text-[#F39C12] rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg">
                          +{project.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Client: {project.client}</span>
                      <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                unoptimized
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                  <p className="text-lg text-gray-600">Client: {selectedProject.client}</p>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  selectedProject.complexity === 'High' 
                    ? 'bg-red-100 text-red-700'
                    : selectedProject.complexity === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {selectedProject.complexity} Complexity
                </span>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#F39C12]/10 text-[#F39C12] rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Materials Used</h3>
                  <ul className="space-y-2">
                    {selectedProject.materials.map((material) => (
                      <li key={material} className="flex items-center gap-2 text-gray-700">
                        <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-[#2C3E50] text-white py-4 px-6 rounded-2xl font-medium hover:bg-[#34495e] transition-colors flex items-center justify-center gap-2">
                  Start Your Custom Project
                  <HiOutlineArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineSparkles className="w-8 h-8 text-[#F39C12]" />
                <span className="text-[#F39C12] font-medium tracking-wide">OUR PROCESS</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                From Vision to
                <span className="block text-[#E67E22]">Precision Reality</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Design Consultation</h3>
                    <p className="text-gray-600">We discuss your vision and optimize it for CNC precision cutting</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Material Selection</h3>
                    <p className="text-gray-600">Choose from our premium materials or bring your own</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Cutting</h3>
                    <p className="text-gray-600">Our CNC machines deliver perfect cuts every time</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Finishing</h3>
                    <p className="text-gray-600">Final touches and quality checks ensure perfection</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-8.jpg"
                  alt="CNC Cutting Process"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#F39C12] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Precision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E67E22] to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's bring your creative vision to life with our precision CNC cutting services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2C3E50] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Get Custom Quote Today
              <HiOutlineArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#2C3E50] transition-colors">
              Call 095866 60214
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
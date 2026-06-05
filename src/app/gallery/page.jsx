'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiOutlineSparkles, HiOutlineArrowRight, HiOutlineHeart, HiOutlineStar, HiOutlineCheckCircle } from 'react-icons/hi2'

const projectCategories = [
  { id: 'all', name: 'All Projects', count: 24 },
  { id: 'scrapbook', name: 'Scrapbooking', count: 12 },
  { id: 'decorative', name: 'Decorative Elements', count: 8 },
  { id: 'personalized', name: 'Personalized Gifts', count: 6 },
  { id: 'commercial', name: 'Commercial Work', count: 4 }
]

const projects = [
  {
    id: 1,
    title: 'Intricate Wooden Wedding Album Cover',
    category: 'scrapbook',
    material: 'Premium Birch Wood',
    complexity: 'Advanced',
    duration: '3 hours',
    image: '/images/business-3.jpg',
    beforeImage: '/images/business-8.jpg',
    description: 'Custom laser-engraved wedding album with delicate floral patterns',
    tags: ['Engraving', 'Wedding', 'Wood'],
    featured: true
  },
  {
    id: 2,
    title: 'Colorful Acrylic Photo Frames Set',
    category: 'decorative',
    material: 'Cast Acrylic',
    complexity: 'Intermediate',
    duration: '45 minutes',
    image: '/images/business-2.jpg',
    beforeImage: '/images/business-8.jpg',
    description: 'Vibrant multi-colored acrylic frames for modern scrapbook displays',
    tags: ['Acrylic', 'Frames', 'Modern'],
    featured: true
  },
  {
    id: 3,
    title: 'Precision Cut Memory Box Components',
    category: 'personalized',
    material: 'MDF & Wood Veneer',
    complexity: 'Advanced',
    duration: '2.5 hours',
    image: '/images/business-5.jpg',
    beforeImage: '/images/business-8.jpg',
    description: 'Interlocking memory box with hidden compartments',
    tags: ['Box Making', 'Precision', 'Personal'],
    featured: false
  },
  {
    id: 4,
    title: 'Corporate Logo Signage Elements',
    category: 'commercial',
    material: 'Aluminum Composite',
    complexity: 'Professional',
    duration: '4 hours',
    image: '/images/business-1.jpg',
    beforeImage: '/images/business-8.jpg',
    description: 'High-precision commercial signage components',
    tags: ['Commercial', 'Metal', 'Signage'],
    featured: false
  },
  {
    id: 5,
    title: 'Decorative Paper Cutting Templates',
    category: 'scrapbook',
    material: 'Cardstock & Paper',
    complexity: 'Beginner',
    duration: '20 minutes',
    image: '/images/business-6.jpg',
    beforeImage: '/images/business-8.jpg',
    description: 'Reusable templates for paper crafting projects',
    tags: ['Paper', 'Templates', 'Crafting'],
    featured: false
  },
  {
    id: 6,
    title: 'Custom Name Plaques Collection',
    category: 'personalized',
    material: 'Bamboo Wood',
    complexity: 'Intermediate',
    duration: '1 hour',
    image: '/images/business-10.jpg',
    beforeImage: '/images/business-8.jpg',
    description: 'Personalized name plaques with decorative borders',
    tags: ['Names', 'Bamboo', 'Personal'],
    featured: true
  }
]

const customerStories = [
  {
    id: 1,
    name: 'Priya S.',
    location: 'Satellite, Ahmedabad',
    rating: 5,
    project: 'Wedding Scrapbook Elements',
    quote: 'The precision and quality of their CNC work is outstanding for scrapbooking projects',
    image: '/images/business-3.jpg',
    result: 'Created 50+ custom elements for our wedding album'
  },
  {
    id: 2,
    name: 'Rajesh M.',
    location: 'Vastrapur, Ahmedabad',
    rating: 4,
    project: 'Family Photo Frames',
    quote: 'Perfect custom cuts every time, great for personalized photo albums',
    image: '/images/business-5.jpg',
    result: 'Completed 12 unique frames in just 2 days'
  },
  {
    id: 3,
    name: 'Meera K.',
    location: 'Bopal, Ahmedabad',
    rating: 5,
    project: 'Craft Workshop Supplies',
    quote: 'Excellent service and attention to detail for craft projects',
    image: '/images/business-6.jpg',
    result: 'Supplied materials for 20+ workshop participants'
  }
]

const techniques = [
  {
    id: 1,
    name: 'Precision Vector Cutting',
    description: 'Computer-controlled cutting follows exact digital paths for perfect repeatability',
    image: '/images/business-9.jpg',
    benefits: ['Perfect edge quality', 'Repeatable results', 'Complex geometries'],
    materials: ['Wood', 'Acrylic', 'MDF', 'Cardstock']
  },
  {
    id: 2,
    name: 'Multi-Layer Assembly',
    description: 'Creating depth and dimension through precisely aligned multiple layers',
    image: '/images/business-1.jpg',
    benefits: ['3D effects', 'Professional finish', 'Custom thickness'],
    materials: ['Plywood', 'Acrylic sheets', 'Metal laminates']
  },
  {
    id: 3,
    name: 'Micro-Detail Engraving',
    description: 'Surface texturing and pattern creation at microscopic precision levels',
    image: '/images/business-10.jpg',
    benefits: ['Fine details', 'Texture variation', 'Logo reproduction'],
    materials: ['Wood veneer', 'Brass', 'Aluminum', 'Leather']
  }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [activeTechnique, setActiveTechnique] = useState(0)
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50)

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % customerStories.length)
    }, 5000)

    return () => clearInterval(storyInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E53E3E] via-gray-800 to-gray-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <HiOutlineSparkles className="w-8 h-8 text-[#F7931E] mr-3" />
              <span className="text-[#F7931E] font-semibold text-lg tracking-wide">PROJECT GALLERY</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Precision Meets
              <span className="block text-[#F7931E]">Creativity</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of custom CNC projects, from intricate scrapbook elements to personalized gifts, all crafted with precision in Ahmedabad
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#F7931E]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#F7931E]/20 to-transparent rounded-lg rotate-45"></div>
      </section>

      {/* Project Categories Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-[#2D3748] text-gray-900 shadow-lg shadow-[#2D3748]/25'
                    : 'bg-gray-100 text-gray-300 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Masonry Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`masonry-item group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  project.featured ? 'masonry-featured' : ''
                } ${index % 3 === 0 ? 'masonry-tall' : index % 4 === 0 ? 'masonry-wide' : ''}`}
              >
                <div className="bg-white rounded-3xl shadow-lg shadow-gray-900/10 overflow-hidden h-full">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      unoptimized
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.complexity === 'Advanced' ? 'bg-[#E53E3E] text-gray-900' :
                        project.complexity === 'Professional' ? 'bg-[#2D3748] text-white' :
                        project.complexity === 'Intermediate' ? 'bg-[#F7931E] text-white' :
                        'bg-green-500 text-white'
                      }`}>
                        {project.complexity}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-[#F7931E] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <HiOutlineStar className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E53E3E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Material:</span>
                        <span className="text-sm font-semibold text-gray-900">{project.material}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Duration:</span>
                        <span className="text-sm font-semibold text-gray-900">{project.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-[#2D3748] to-gray-700 text-gray-900 py-3 rounded-xl font-semibold flex items-center justify-center group-hover:from-[#E53E3E] group-hover:to-red-600 transition-all duration-300">
                      View Details
                      <HiOutlineArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how raw materials transform into precision-crafted masterpieces through our CNC process
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96 lg:h-[500px]">
              {/* Before Image */}
              <div 
                className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                style={{ clipPath: `polygon(0 0, ${beforeAfterPosition}% 0, ${beforeAfterPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src="/images/business-8.jpg"
                  alt="Before CNC cutting"
                  width={800}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#E53E3E] text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                    BEFORE
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div 
                className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                style={{ clipPath: `polygon(${beforeAfterPosition}% 0, 100% 0, 100% 100%, ${beforeAfterPosition}% 100%)` }}
              >
                <Image
                  src="/images/business-3.jpg"
                  alt="After CNC cutting"
                  width={800}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-[#F7931E] text-white px-4 py-2 rounded-full font-bold text-sm">
                    AFTER
                  </span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-lg z-10"
                style={{ left: `${beforeAfterPosition}%` }}
                onMouseDown={(e) => {
                  const rect = e.currentTarget.parentElement.getBoundingClientRect()
                  const handleMouseMove = (e) => {
                    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
                    setBeforeAfterPosition(Math.max(0, Math.min(100, newPosition)))
                  }
                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove)
                    document.removeEventListener('mouseup', handleMouseUp)
                  }
                  document.addEventListener('mousemove', handleMouseMove)
                  document.addEventListener('mouseup', handleMouseUp)
                }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#2D3748] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-[#2D3748] to-gray-800">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#F7931E] mb-2">Raw Material</div>
                  <p className="text-gray-300">Standard sheets and blocks</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">CNC Process</div>
                  <p className="text-gray-300">Precision cutting & shaping</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F7931E] mb-2">Final Product</div>
                  <p className="text-gray-300">Perfect custom pieces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories Carousel */}
      <section className="py-24 bg-gradient-to-br from-[#E53E3E] to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real projects, real results from our satisfied customers in Ahmedabad
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="flex text-[#F7931E]">
                      {[...Array(customerStories[currentStoryIndex].rating)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    <span className="ml-3 text-gray-300 font-semibold">
                      {customerStories[currentStoryIndex].rating}.0/5
                    </span>
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed mb-6">
                    "{customerStories[currentStoryIndex].quote}"
                  </blockquote>
                  
                  <div className="mb-6">
                    <div className="text-xl font-bold text-gray-900 mb-1">
                      {customerStories[currentStoryIndex].name}
                    </div>
                    <div className="text-gray-600 mb-2">
                      {customerStories[currentStoryIndex].location}
                    </div>
                    <div className="text-[#E53E3E] font-semibold">
                      Project: {customerStories[currentStoryIndex].project}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4">
                    <div className="flex items-center text-gray-700">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{customerStories[currentStoryIndex].result}</span>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                  <Image
                    src={customerStories[currentStoryIndex].image}
                    alt={`${customerStories[currentStoryIndex].name} project`}
                    width={600}
                    height={400}
                    unoptimized
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {customerStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentStoryIndex
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technique Spotlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced CNC Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge methods we use to achieve precision and quality in every project
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {techniques.map((technique, index) => (
              <button
                key={technique.id}
                onClick={() => setActiveTechnique(index)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeTechnique === index
                    ? 'bg-gradient-to-br from-[#2D3748] to-gray-700 text-gray-900 shadow-xl'
                    : 'bg-white hover:bg-gray-50 text-gray-900 shadow-lg'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">{technique.name}</h3>
                <p className={`text-sm leading-relaxed ${
                  activeTechnique === index ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {technique.description}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={techniques[activeTechnique].image}
                  alt={techniques[activeTechnique].name}
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {techniques[activeTechnique].name}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {techniques[activeTechnique].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="space-y-3">
                    {techniques[activeTechnique].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Compatible Materials</h4>
                  <div className="flex flex-wrap gap-2">
                    {techniques[activeTechnique].materials.map((material, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-[#F7931E] to-orange-500 text-gray-900 text-sm rounded-full font-medium"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-gradient-to-r from-[#E53E3E] to-red-600 text-white px-8 py-4 rounded-xl font-bold flex items-center hover:shadow-lg hover:shadow-[#E53E3E]/25 transition-all duration-300 group">
                  Try This Technique
                  <HiOutlineArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2D3748] to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <HiOutlineHeart className="w-8 h-8 text-[#F7931E] mr-3" />
            <span className="text-[#F7931E] font-semibold text-lg tracking-wide">START YOUR PROJECT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's discuss your custom CNC project and create something amazing together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F7931E] hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105">
              Get Custom Quote Today
              <HiOutlineArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-gray-900 hover:bg-white hover:text-[#2D3748] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              View Our Gallery
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          grid-auto-rows: 400px;
          gap: 1.5rem;
        }
        
        .masonry-item {
          grid-row: span 1;
        }
        
        .masonry-tall {
          grid-row: span 2;
        }
        
        .masonry-wide {
          grid-column: span 2;
        }
        
        .masonry-featured {
          grid-row: span 2;
        }
        
        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 350px;
          }
          
          .masonry-wide {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  )
}
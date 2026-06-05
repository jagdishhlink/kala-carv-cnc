'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineClock, HiOutlineUserGroup, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight, HiOutlineStar, HiOutlineWrench, HiOutlineSparkles } from 'react-icons/hi2'

export default function Workshops() {
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('beginner')
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)
  const [bookingStep, setBookingStep] = useState('select')

  const workshops = {
    beginner: [
      {
        id: 1,
        title: "CNC Basics for Scrapbookers",
        duration: "3 hours",
        price: "₹2,500",
        participants: "Max 8",
        description: "Learn the fundamentals of CNC cutting for scrapbooking materials",
        skills: ["Material selection", "Basic design prep", "Safety protocols", "First cuts"]
      },
      {
        id: 2,
        title: "Digital Design to Physical Cut",
        duration: "4 hours",
        price: "₹3,200",
        participants: "Max 6",
        description: "Bridge the gap between digital creativity and precision cutting",
        skills: ["File preparation", "Vector basics", "Cut optimization", "Quality control"]
      }
    ],
    intermediate: [
      {
        id: 3,
        title: "Advanced Pattern Engineering",
        duration: "6 hours",
        price: "₹4,800",
        participants: "Max 5",
        description: "Master complex geometric patterns and multi-layer designs",
        skills: ["Complex geometries", "Layer management", "Precision alignment", "Advanced tooling"]
      },
      {
        id: 4,
        title: "Mixed Media CNC Integration",
        duration: "5 hours",
        price: "₹4,200",
        participants: "Max 6",
        description: "Combine traditional crafting with CNC precision",
        skills: ["Material combinations", "Hybrid techniques", "Finishing methods", "Project planning"]
      }
    ],
    advanced: [
      {
        id: 5,
        title: "Commercial Craft Production",
        duration: "8 hours",
        price: "₹6,500",
        participants: "Max 4",
        description: "Scale your craft business with professional CNC workflows",
        skills: ["Batch processing", "Quality systems", "Cost optimization", "Client management"]
      },
      {
        id: 6,
        title: "Custom Tooling & Jigs",
        duration: "7 hours",
        price: "₹5,800",
        participants: "Max 3",
        description: "Create specialized tools and fixtures for unique projects",
        skills: ["Tool design", "Jig construction", "Repeatability", "Innovation methods"]
      }
    ]
  }

  const upcomingDates = [
    { date: "Dec 15", day: "Saturday", workshops: ["CNC Basics", "Digital Design"] },
    { date: "Dec 22", day: "Saturday", workshops: ["Advanced Pattern", "Mixed Media"] },
    { date: "Dec 29", day: "Saturday", workshops: ["Commercial Production"] },
    { date: "Jan 5", day: "Saturday", workshops: ["CNC Basics", "Custom Tooling"] },
    { date: "Jan 12", day: "Saturday", workshops: ["Digital Design", "Advanced Pattern"] }
  ]

  const projectGallery = [
    {
      title: "Geometric Mandala Series",
      student: "Workshop Graduate",
      level: "Intermediate",
      image: "/images/business-9.jpg"
    },
    {
      title: "Heritage Pattern Collection",
      student: "Advanced Student",
      level: "Advanced", 
      image: "/images/business-10.jpg"
    },
    {
      title: "Precision Layer Assembly",
      student: "Beginner Success",
      level: "Beginner",
      image: "/images/business-6.jpg"
    },
    {
      title: "Industrial Craft Fusion",
      student: "Professional Crafter",
      level: "Advanced",
      image: "/images/business-3.jpg"
    },
    {
      title: "Custom Embellishment Set",
      student: "Workshop Alumni",
      level: "Intermediate",
      image: "/images/business-5.jpg"
    },
    {
      title: "Community Project Showcase",
      student: "Group Collaboration",
      level: "Mixed Levels",
      image: "/images/business-7.jpg"
    }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F4E6D7] via-gray-100 to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40"></div>
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-7.jpg"
            alt="Workshop participant learning CNC precision cutting"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <HiOutlineWrench className="h-5 w-5 text-[#E67E22]" />
                  <span className="text-white font-medium">Precision Craft Education</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                  Master
                  <span className="block text-[#E67E22]">CNC Craft</span>
                  <span className="block text-4xl lg:text-5xl font-medium opacity-90">Workshops</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 font-light leading-relaxed">
                  Transform your scrapbooking skills with industrial-grade precision. Learn CNC cutting techniques from Gujarat's premier craft technology center.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setBookingStep('select')}
                  className="bg-[#2C5530] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2C5530]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Workshop Now
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  View Schedule
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/images/business-4.jpg"
                  alt="Modern CNC workshop space"
                  width={600}
                  height={400}
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5530]/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">Professional-grade CNC equipment</p>
                  <p className="text-white/80">Ahmedabad's premier craft technology center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Timeline Horizontal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Workshop
              <span className="text-[#E67E22]"> Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your precision craft journey with our expertly designed workshop timeline
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#F4E6D7] via-[#2C5530] to-[#E67E22] rounded-full"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {upcomingDates.map((dateItem, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#2C5530] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="bg-gradient-to-br from-[#F4E6D7] to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#2C5530] mb-1">{dateItem.date}</div>
                      <div className="text-gray-600 font-medium">{dateItem.day}</div>
                    </div>
                    
                    <div className="space-y-3">
                      {dateItem.workshops.map((workshop, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="flex items-center space-x-2">
                            <HiOutlineClock className="h-4 w-4 text-[#E67E22] flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-800">{workshop}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full mt-6 bg-[#2C5530] text-white py-3 rounded-lg font-medium hover:bg-[#2C5530]/90 transition-colors duration-300">
                      Book Date
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Level Progression */}
      <section className="py-24 bg-[#F4E6D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Precision Craft
              <span className="text-[#E67E22]"> Progression</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Master CNC crafting through our carefully structured skill development pathway
            </p>
          </div>

          {/* Skill Level Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {['beginner', 'intermediate', 'advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedSkillLevel(level)}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      selectedSkillLevel === level
                        ? 'bg-[#2C5530] text-white shadow-lg'
                        : 'text-gray-600 hover:text-[#2C5530] hover:bg-gray-50'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Workshop Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {workshops[selectedSkillLevel].map((workshop, index) => (
              <div key={workshop.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{workshop.description}</p>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-bold text-[#E67E22] mb-1">{workshop.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <HiOutlineClock className="h-5 w-5 text-[#2C5530]" />
                      <span className="text-gray-700 font-medium">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiOutlineUserGroup className="h-5 w-5 text-[#2C5530]" />
                      <span className="text-gray-700 font-medium">{workshop.participants}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Skills You'll Master:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {workshop.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <HiOutlineCheckCircle className="h-4 w-4 text-[#E67E22] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setSelectedWorkshop(workshop)
                      setBookingStep('details')
                    }}
                    className="w-full bg-[#2C5530] text-white py-4 rounded-xl font-semibold hover:bg-[#2C5530]/90 transition-all duration-300 hover:scale-105"
                  >
                    Book This Workshop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Masonry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Student Project
              <span className="text-[#E67E22]"> Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the precision and creativity achieved by our workshop graduates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectGallery.map((project, index) => (
              <div key={index} className={`${index % 3 === 1 ? 'lg:mt-12' : ''} ${index % 3 === 2 ? 'lg:-mt-12' : ''}`}>
                <div className="bg-gradient-to-br from-[#F4E6D7] to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#2C5530] text-white text-xs px-3 py-1 rounded-full font-medium">
                        {project.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2C5530] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600">{project.student}</p>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar key={i} className="h-4 w-4 text-[#E67E22] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-[#2C5530] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2C5530]/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Join Our Craft Community
            </button>
          </div>
        </div>
      </section>

      {/* Booking Interface */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-[#2C5530]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book Your
              <span className="text-[#E67E22]"> Precision Journey</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Secure your spot in Gujarat's premier CNC craft education program
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {bookingStep === 'select' && (
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Workshop Selection</h3>
                    <div className="space-y-4">
                      {workshops.beginner.concat(workshops.intermediate, workshops.advanced).slice(0, 4).map((workshop) => (
                        <div key={workshop.id} 
                             onClick={() => {
                               setSelectedWorkshop(workshop)
                               setBookingStep('details')
                             }}
                             className="p-4 border border-gray-200 rounded-xl hover:border-[#2C5530] hover:bg-[#F4E6D7]/30 transition-all duration-300 cursor-pointer group">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-[#2C5530]">{workshop.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{workshop.duration} • {workshop.participants}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-[#E67E22]">{workshop.price}</div>
                              <HiOutlineChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#2C5530] ml-auto mt-1" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                    <div className="bg-[#F4E6D7] rounded-2xl p-6">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#2C5530] rounded-lg flex items-center justify-center">
                            <HiOutlineClock className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Workshop Hours</div>
                            <div className="text-gray-600">Daily until 7 PM</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#E67E22] rounded-lg flex items-center justify-center">
                            <HiOutlineUserGroup className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Small Class Sizes</div>
                            <div className="text-gray-600">Maximum 8 participants</div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-[#2C5530] text-white py-4 rounded-xl font-semibold hover:bg-[#2C5530]/90 transition-all duration-300">
                        Call for Design Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {bookingStep === 'details' && selectedWorkshop && (
              <div className="p-8 lg:p-12">
                <button 
                  onClick={() => setBookingStep('select')}
                  className="flex items-center space-x-2 text-[#2C5530] font-medium mb-8 hover:text-[#E67E22] transition-colors"
                >
                  <span>←</span>
                  <span>Back to Selection</span>
                </button>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedWorkshop.title}</h3>
                    
                    <div className="bg-[#F4E6D7] rounded-2xl p-6 mb-8">
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                          <HiOutlineClock className="h-8 w-8 text-[#2C5530] mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">{selectedWorkshop.duration}</div>
                          <div className="text-sm text-gray-600">Duration</div>
                        </div>
                        <div>
                          <HiOutlineUserGroup className="h-8 w-8 text-[#E67E22] mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">{selectedWorkshop.participants}</div>
                          <div className="text-sm text-gray-600">Class Size</div>
                        </div>
                        <div>
                          <HiOutlineSparkles className="h-8 w-8 text-[#2C5530] mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">{selectedWorkshop.price}</div>
                          <div className="text-sm text-gray-600">Investment</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {selectedWorkshop.skills.map((skill, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <HiOutlineCheckCircle className="h-5 w-5 text-[#E67E22] flex-shrink-0" />
                              <span className="text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Workshop Includes:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• All materials and practice supplies</li>
                          <li>• Professional CNC machine time</li>
                          <li>• Expert instructor guidance</li>
                          <li>• Take-home project samples</li>
                          <li>• Digital design files</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-[#2C5530] to-gray-800 rounded-2xl p-6 text-white">
                      <h4 className="text-xl font-bold mb-6">Ready to Book?</h4>
                      
                      <div className="space-y-4 mb-6">
                        <div className="text-center py-4 bg-white/10 rounded-xl">
                          <div className="text-2xl font-bold text-[#E67E22]">095866 60214</div>
                          <div className="text-sm opacity-90">Call for immediate booking</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm opacity-90 mb-2">Located at:</div>
                          <div className="font-medium">Shyamved Industrial Estate</div>
                          <div className="text-sm opacity-90">Ahmedabad, Gujarat</div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-[#E67E22] text-white py-4 rounded-xl font-semibold hover:bg-[#E67E22]/90 transition-all duration-300 shadow-lg">
                        Get Your Custom Cut Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
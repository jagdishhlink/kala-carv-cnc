'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineUserGroup, HiOutlineWrench, HiOutlineBolt } from 'react-icons/hi2'

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    materials: '',
    urgency: ''
  })

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Contact Form Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4E6D7] to-gray-900"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/business-4.jpg" 
            alt="Modern industrial workshop with organized craft supplies"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Contact Info Cards */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Precision
                  <span className="block text-[#E67E22]">Consultation</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Get expert guidance for your CNC cutting projects. From design optimization to material selection.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2C5530] rounded-full flex items-center justify-center">
                      <HiOutlinePhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Direct Consultation</h3>
                      <p className="text-gray-300">095866 60214</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center">
                      <HiOutlineMapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Workshop Location</h3>
                      <p className="text-gray-300">Shyamved Industrial Estate, Ahmedabad</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2C5530] rounded-full flex items-center justify-center">
                      <HiOutlineClock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Operating Hours</h3>
                      <p className="text-gray-300">Open Daily Until 7 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Get Your Custom Cut Quote</h2>
                <p className="text-gray-600">Tell us about your project and we'll provide a detailed consultation</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5530] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5530] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5530] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
                  <textarea 
                    name="project"
                    value={formData.project}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5530] focus:border-transparent transition-all resize-none"
                    placeholder="Describe your scrapbooking project, design complexity, and cutting requirements..."
                    required
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Materials Needed</label>
                    <select 
                      name="materials"
                      value={formData.materials}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5530] focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Material</option>
                      <option value="cardstock">Cardstock</option>
                      <option value="wood">Thin Wood</option>
                      <option value="acrylic">Acrylic</option>
                      <option value="mixed">Multiple Materials</option>
                      <option value="consultation">Need Material Advice</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Urgency</label>
                    <select 
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C5530] focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Timeline</option>
                      <option value="flexible">Flexible (3-5 days)</option>
                      <option value="standard">Standard (1-2 days)</option>
                      <option value="rush">Rush (24 hours)</option>
                      <option value="consultation">Need Timeline Advice</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#2C5530] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#E67E22] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Submit Project Details
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Booking Calendar */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image 
                  src="/images/business-7.jpg" 
                  alt="Woman working on detailed scrapbook in bright studio"
                  width={600}
                  height={400}
                  className="object-cover w-full h-96"
                  unoptimized
                />
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Workshop
                <span className="block text-[#E67E22]">Calendar</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our precision crafting workshops and learn to integrate CNC technology with traditional scrapbooking techniques.
              </p>

              <div className="space-y-6">
                <div className="bg-[#F4E6D7] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">CNC Design Basics</h3>
                      <p className="text-gray-700 mb-3">Learn to prepare your designs for precision cutting</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          Weekends, 10 AM - 2 PM
                        </span>
                        <span className="flex items-center gap-1">
                          <HiOutlineUserGroup className="w-4 h-4" />
                          Max 8 participants
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#2C5530] rounded-full flex items-center justify-center group-hover:bg-[#E67E22] transition-colors">
                      <HiOutlineWrench className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#F4E6D7] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Pattern Making</h3>
                      <p className="text-gray-700 mb-3">Master complex geometric patterns and intricate cuts</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          Monthly intensive, Full day
                        </span>
                        <span className="flex items-center gap-1">
                          <HiOutlineUserGroup className="w-4 h-4" />
                          Max 6 participants
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#2C5530] rounded-full flex items-center justify-center group-hover:bg-[#E67E22] transition-colors">
                      <HiOutlineBolt className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#F4E6D7] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Material Mastery</h3>
                      <p className="text-gray-700 mb-3">Explore different materials and cutting techniques</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          Bi-weekly, 2 PM - 5 PM
                        </span>
                        <span className="flex items-center gap-1">
                          <HiOutlineUserGroup className="w-4 h-4" />
                          Max 10 participants
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#2C5530] rounded-full flex items-center justify-center group-hover:bg-[#E67E22] transition-colors">
                      <HiOutlineCheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#2C5530] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E67E22] transition-all duration-300 flex items-center gap-2">
                  View Full Workshop Calendar
                  <HiOutlineArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Consultation Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book one-on-one sessions with our CNC specialists and transform your creative vision into precision-cut reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Optimization */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2C5530]/10 to-[#E67E22]/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-[#2C5530] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HiOutlineBolt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Optimization</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimize your designs for CNC cutting. Learn about kerf compensation, material considerations, and cutting path efficiency.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5530]" />
                    Design file preparation
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5530]" />
                    Material selection guidance
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5530]" />
                    Cost optimization tips
                  </li>
                </ul>
                <button className="w-full bg-[#F4E6D7] text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-[#2C5530] hover:text-white transition-all duration-300">
                  Book Session - ₹500
                </button>
              </div>
            </div>

            {/* Project Planning */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E67E22]/10 to-[#2C5530]/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-[#E67E22] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HiOutlineWrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Planning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive project planning from concept to completion. Timeline estimation, material sourcing, and execution strategy.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#E67E22]" />
                    Timeline development
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#E67E22]" />
                    Budget estimation
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#E67E22]" />
                    Resource planning
                  </li>
                </ul>
                <button className="w-full bg-[#F4E6D7] text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-[#E67E22] hover:text-white transition-all duration-300">
                  Book Session - ₹750
                </button>
              </div>
            </div>

            {/* Technical Training */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2C5530]/10 to-gray-900/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HiOutlineUserGroup className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn CNC operation basics, safety protocols, and maintenance. Perfect for serious crafters wanting hands-on knowledge.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-gray-900" />
                    Equipment operation
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-gray-900" />
                    Safety protocols
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-gray-900" />
                    Troubleshooting tips
                  </li>
                </ul>
                <button className="w-full bg-[#F4E6D7] text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Book Session - ₹1000
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">All consultation sessions include project file review and personalized recommendations</p>
            <button className="bg-[#2C5530] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E67E22] transition-all duration-300 inline-flex items-center gap-2">
              <HiOutlinePhone className="w-5 h-5" />
              Call for Expert Consultation: 095866 60214
            </button>
          </div>
        </div>
      </section>

      {/* Craft Community CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5530] to-gray-900"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/business-10.jpg" 
            alt="Indian textile patterns translated to paper craft designs"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Join Our Craft
                <span className="block text-[#E67E22]">Community</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Connect with fellow precision crafters, share your projects, get expert tips, and stay updated on the latest CNC techniques for scrapbooking.
              </p>

              <div className="grid gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <HiOutlineUserGroup className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Monthly Project Showcases</h3>
                    <p className="text-gray-300">Share your precision-cut creations with the community</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <HiOutlineEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Expert Tips Newsletter</h3>
                    <p className="text-gray-300">Weekly technical insights and design inspiration</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <HiOutlineBolt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Early Workshop Access</h3>
                    <p className="text-gray-300">Priority booking for new workshops and techniques</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">Join the Community</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all backdrop-blur-sm"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all backdrop-blur-sm">
                    <option value="" className="text-gray-900">Experience Level</option>
                    <option value="beginner" className="text-gray-900">Beginner Crafter</option>
                    <option value="intermediate" className="text-gray-900">Intermediate</option>
                    <option value="advanced" className="text-gray-900">Advanced/Professional</option>
                    <option value="business" className="text-gray-900">Business Owner</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your crafting interests..."
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-all backdrop-blur-sm resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#E67E22] text-white py-4 px-6 rounded-lg font-semibold hover:bg-white hover:text-[#E67E22] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Join Craft Community
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
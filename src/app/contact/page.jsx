'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineEnvelope, HiOutlineClock, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineBolt, HiOutlineHeart, HiOutlineSparkles } from 'react-icons/hi2'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    material: '',
    projectType: '',
    description: '',
    budget: ''
  })
  
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [orderStep, setOrderStep] = useState(1)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const materials = [
    { id: 'paper', name: 'Paper & Cardstock', icon: '📄', description: 'Intricate paper cutting' },
    { id: 'wood', name: 'Thin Wood Veneer', icon: '🪵', description: 'Precision wood cutting' },
    { id: 'acrylic', name: 'Acrylic Sheets', icon: '💎', description: 'Clean acrylic cuts' },
    { id: 'fabric', name: 'Craft Fabrics', icon: '🧵', description: 'Fabric pattern cutting' },
    { id: 'custom', name: 'Custom Material', icon: '⭐', description: 'Let us know your needs' }
  ]

  const projectTypes = [
    'Scrapbook Elements',
    'Wedding Invitations',
    'Custom Cards',
    'Decorative Cutouts',
    'Personalized Gifts',
    'Business Materials',
    'Event Decorations',
    'Other'
  ]

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Geometric Overlay */}
      <section className="relative pt-16 lg:pt-20 pb-32 bg-gradient-to-br from-[#E8B86D] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/30 rotate-45 rounded-lg"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rotate-45"></div>
          <div className="absolute top-32 right-1/3 w-20 h-20 border-2 border-white/25 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <HiOutlineBolt className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Custom Order Flow</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Create
              <span className="block text-[#C7956D]">Something Precise</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your creative vision into reality with our precision CNC cutting services. 
              From concept to completion, we guide you through every step.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="w-5 h-5 text-[#C7956D]" />
                <span>Same-day simple cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="w-5 h-5 text-[#C7956D]" />
                <span>Custom design support</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="w-5 h-5 text-[#C7956D]" />
                <span>Professional quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Material Selector */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Material</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the material type for your project and explore the precision cutting possibilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {materials.map((material) => (
              <div
                key={material.id}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group hover:shadow-lg ${
                  selectedMaterial === material.id
                    ? 'border-[#2D4A3E] bg-[#2D4A3E]/5 shadow-lg'
                    : 'border-gray-200 hover:border-[#C7956D]'
                }`}
                onClick={() => setSelectedMaterial(material.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{material.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{material.name}</h3>
                  <p className="text-sm text-gray-600">{material.description}</p>
                </div>
                
                {selectedMaterial === material.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2D4A3E] rounded-full flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {selectedMaterial && (
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-64 mb-6">
                <Image
                  src="/images/business-8.jpg"
                  alt="CNC cutting process"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for {materials.find(m => m.id === selectedMaterial)?.name}</h3>
              <p className="text-gray-600 mb-6">
                Our precision CNC equipment delivers clean, accurate cuts with smooth edges and intricate detail capabilities.
              </p>
              <button
                onClick={() => setOrderStep(2)}
                className="bg-[#2D4A3E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C7956D] transition-colors flex items-center gap-2"
              >
                Start Your Custom Order
                <HiOutlineArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Order Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Order Process</h2>
            <div className="flex justify-center items-center gap-8 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    orderStep >= step ? 'bg-[#2D4A3E] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && <div className="w-12 h-1 bg-gray-200"></div>}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8">
            {orderStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under ₹1,000</option>
                      <option value="1000-5000">₹1,000 - ₹5,000</option>
                      <option value="5000-10000">₹5,000 - ₹10,000</option>
                      <option value="over-10000">Over ₹10,000</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Describe your project requirements, dimensions, quantities, and any special details..."
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  onClick={() => setOrderStep(2)}
                  className="mt-8 bg-[#2D4A3E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C7956D] transition-colors flex items-center gap-2 ml-auto"
                >
                  Next Step
                  <HiOutlineArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
            
            {orderStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D4A3E] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setOrderStep(1)}
                    className="px-8 py-4 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setOrderStep(3)}
                    className="bg-[#2D4A3E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C7956D] transition-colors flex items-center gap-2 ml-auto"
                  >
                    Review Order
                    <HiOutlineArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
            
            {orderStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Review Your Order</h3>
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                      <p className="text-gray-600">Type: {formData.projectType}</p>
                      <p className="text-gray-600">Budget: {formData.budget}</p>
                      <p className="text-gray-600 mt-2">{formData.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                      <p className="text-gray-600">Name: {formData.name}</p>
                      <p className="text-gray-600">Phone: {formData.phone}</p>
                      <p className="text-gray-600">Email: {formData.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#2D4A3E]/5 rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E]" />
                      We'll contact you within 2 hours during business hours
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E]" />
                      Discuss your project details and provide accurate quote
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#2D4A3E]" />
                      Schedule your project and delivery timeline
                    </li>
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => setOrderStep(2)}
                    className="px-8 py-4 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button className="bg-[#2D4A3E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C7956D] transition-colors flex items-center gap-2 ml-auto">
                    Submit Order Request
                    <HiOutlineSparkles className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-24 bg-[#E8B86D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to start your precision cutting project? Contact us through any of these channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2D4A3E] transition-colors">
                <HiOutlinePhone className="w-8 h-8 text-[#2D4A3E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:09586660214" className="text-[#2D4A3E] font-semibold hover:text-[#C7956D] transition-colors">
                095866 60214
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2D4A3E] transition-colors">
                <HiOutlineMapPin className="w-8 h-8 text-[#2D4A3E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">See our precision equipment</p>
              <address className="text-[#2D4A3E] not-italic">
                Shyamved Industrial Estate,<br />
                Nana Chiloda, Ahmedabad
              </address>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2D4A3E] transition-colors">
                <HiOutlineEnvelope className="w-8 h-8 text-[#2D4A3E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send your project details</p>
              <a href="mailto:info@kalacarv.com" className="text-[#2D4A3E] font-semibold hover:text-[#C7956D] transition-colors">
                info@kalacarv.com
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2D4A3E] transition-colors">
                <HiOutlineClock className="w-8 h-8 text-[#2D4A3E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <p className="text-gray-600 mb-4">When we're available</p>
              <p className="text-[#2D4A3E] font-semibold">
                Call for current hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map & Directions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Easy to Find</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mt-1">
                    <HiOutlineMapPin className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Located in Shyamved Industrial Estate, near Gappa Garden Restaurant. 
                      Easy access from Sardar Patel Ring Road with convenient parking available.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mt-1">
                    <HiOutlineBolt className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Access</h3>
                    <p className="text-gray-600">
                      Strategic location in Nana Chiloda makes us easily accessible from 
                      all parts of Ahmedabad and surrounding areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D4A3E]/10 rounded-full flex items-center justify-center mt-1">
                    <HiOutlineHeart className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Workshop Visit</h3>
                    <p className="text-gray-600">
                      Visit our workshop to see our precision equipment in action and 
                      discuss your project requirements in person.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-3">Complete Address</h3>
                <address className="text-gray-700 not-italic leading-relaxed">
                  Shyamved Industrial Estate, 57,<br />
                  Sardar Patel Ring Rd,<br />
                  nr. Gappa garden restaurant,<br />
                  Nana Chiloda, Ahmedabad,<br />
                  Gujarat 382330
                </address>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl h-96">
                <Image
                  src="/images/business-9.jpg"
                  alt="Kala Carv CNC location and workshop"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2D4A3E] rounded-full flex items-center justify-center">
                    <HiOutlineMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.3★ Rating</p>
                    <p className="text-sm text-gray-600">Trusted location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to frequently asked questions about our CNC cutting services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What materials can you cut with CNC services?</h3>
              <p className="text-gray-600">
                We work with various materials including paper, cardstock, thin wood, acrylic, and other craft materials suitable for scrapbooking projects. Contact us to discuss your specific material requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you offer custom design services?</h3>
              <p className="text-gray-600">
                Yes, we can create custom cutting patterns based on your designs or help develop new concepts for your scrapbooking projects. Bring your ideas and we'll make them reality.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What are your turnaround times for projects?</h3>
              <p className="text-gray-600">
                Project completion times vary based on complexity and current workload. Simple cuts can often be completed same-day, while custom designs may take 2-3 days.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How do I place an order?</h3>
              <p className="text-gray-600">
                Call us at 095866 60214 to discuss your project requirements and get a quote. You can also visit our location in Nana Chiloda to see samples and discuss your needs in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[#2D4A3E] to-[#C7956D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's transform your creative vision into precision-cut reality. 
            Contact us today for a custom quote.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:09586660214"
              className="bg-white text-[#2D4A3E] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <HiOutlinePhone className="w-5 h-5" />
              Call Now: 095866 60214
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2D4A3E] transition-colors">
              Get Custom Quote Today
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineWrench, HiOutlineBolt } from 'react-icons/hi2'

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: '',
    material: '',
    dimensions: '',
    quantity: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  const steps = [
    { id: 1, title: 'Project Type', icon: HiOutlineWrench },
    { id: 2, title: 'Specifications', icon: HiOutlineBolt },
    { id: 3, title: 'Contact Details', icon: HiOutlineEnvelope }
  ]

  const projectTypes = [
    'Custom Scrapbook Elements',
    'Decorative Frames',
    'Personalized Signs',
    'Photo Album Components',
    'Craft Templates',
    'Other Custom Project'
  ]

  const materials = [
    'Wood (Pine, Plywood)',
    'MDF Board',
    'Acrylic Sheets',
    'Metal (Aluminum)',
    'Cardboard/Paper',
    'Not Sure - Need Advice'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section with Project Inquiry */}
      <section className="relative bg-gradient-to-br from-[#E53E3E] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Start Your
                <span className="block text-[#F7931E]">Custom Project</span>
              </h1>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Transform your creative vision into reality with our precision CNC cutting services. 
                Get an instant quote and expert consultation for your scrapbooking project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:09586660214" className="inline-flex items-center justify-center px-8 py-4 bg-[#2D3748] text-white font-semibold rounded-2xl hover:bg-[#F7931E] transition-all duration-300 transform hover:scale-105">
                  <HiOutlinePhone className="mr-3 h-5 w-5" />
                  Call Now for Instant Quote
                </a>
                <button 
                  onClick={() => document.getElementById('inquiry-wizard').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-gray-900 border-2 border-white/20 font-semibold rounded-2xl hover:bg-white hover:text-[#2D3748] transition-all duration-300"
                >
                  Project Inquiry Form
                  <HiOutlineArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/business-1.jpg"
                  alt="CNC machine cutting intricate wooden design close up"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#F7931E] text-[#2D3748] p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">4.3★</div>
                <div className="text-sm font-medium">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Wizard */}
      <section id="inquiry-wizard" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our intelligent project wizard will help us understand your needs and provide accurate pricing
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.id 
                      ? 'bg-[#2D3748] border-[#2D3748] text-gray-900' 
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4 hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.id ? 'text-[#2D3748]' : 'text-gray-400'
                    }`}>
                      Step {step.id}
                    </div>
                    <div className={`text-xs ${
                      currentStep >= step.id ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  {step.id < steps.length && (
                    <div className={`ml-8 w-16 h-0.5 ${
                      currentStep > step.id ? 'bg-[#2D3748]' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#2D3748] mb-8">What type of project do you need?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleInputChange('projectType', type)}
                      className={`p-6 rounded-xl text-left transition-all duration-200 transform hover:scale-102 ${
                        formData.projectType === type
                          ? 'bg-[#2D3748] text-gray-900 shadow-lg'
                          : 'bg-white border-2 border-gray-200 hover:border-[#F7931E] text-gray-700'
                      }`}
                    >
                      <div className="font-semibold">{type}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#2D3748] mb-8">Project Specifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Material</label>
                    <div className="space-y-2">
                      {materials.map((material) => (
                        <button
                          key={material}
                          onClick={() => handleInputChange('material', material)}
                          className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                            formData.material === material
                              ? 'bg-[#2D3748] text-white'
                              : 'bg-white border border-gray-300 hover:border-[#F7931E] text-gray-700'
                          }`}
                        >
                          {material}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Dimensions (L x W x H)</label>
                      <input
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) => handleInputChange('dimensions', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                        placeholder="e.g., 12cm x 8cm x 3mm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Quantity Needed</label>
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                        placeholder="How many pieces?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="rush">Rush (1-2 days)</option>
                        <option value="standard">Standard (3-5 days)</option>
                        <option value="flexible">Flexible (1-2 weeks)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#2D3748] mb-8">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Project Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={8}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                      placeholder="Describe your project in detail. Include any specific design requirements, reference images, or special instructions..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="px-8 py-3 border-2 border-[#2D3748] text-[#2D3748] font-semibold rounded-xl hover:bg-[#2D3748] hover:text-white transition-all duration-300"
                >
                  Previous Step
                </button>
              )}
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    disabled={currentStep === 1 && !formData.projectType}
                    className="px-8 py-3 bg-[#2D3748] text-white font-semibold rounded-xl hover:bg-[#F7931E] transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                ) : (
                  <button className="px-8 py-3 bg-[#F7931E] text-gray-900 font-semibold rounded-xl hover:bg-[#2D3748] transition-all duration-300 transform hover:scale-105">
                    Submit Project Request
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Visual */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#F7931E]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F7931E] to-[#E53E3E] rounded-2xl flex items-center justify-center">
                    <HiOutlinePhone className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-[#2D3748]">Call Directly</h3>
                    <p className="text-gray-600">Immediate assistance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-[#2D3748]">095866 60214</div>
                  <p className="text-gray-600">
                    Speak directly with our CNC specialists for instant quotes and technical advice
                  </p>
                  <a 
                    href="tel:09586660214"
                    className="inline-flex items-center text-[#F7931E] font-semibold hover:text-[#2D3748] transition-colors duration-200"
                  >
                    Call Now
                    <HiOutlineArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Visit Workshop */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#2D3748]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D3748] to-[#E53E3E] rounded-2xl flex items-center justify-center">
                    <HiOutlineMapPin className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-[#2D3748]">Visit Workshop</h3>
                    <p className="text-gray-600">See our process live</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-[#2D3748]">
                    Shyamved Industrial Estate, 57, Sardar Patel Ring Rd
                  </div>
                  <p className="text-gray-600">
                    Tour our facility, see CNC machines in action, and discuss your project in person
                  </p>
                  <button 
                    onClick={() => document.getElementById('workshop-hours').scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center text-[#F7931E] font-semibold hover:text-[#2D3748] transition-colors duration-200"
                  >
                    Check Hours
                    <HiOutlineArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#E53E3E]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E53E3E] to-[#F7931E] rounded-2xl flex items-center justify-center">
                    <HiOutlineEnvelope className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-[#2D3748]">Send Details</h3>
                    <p className="text-gray-600">Upload designs & specs</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-[#2D3748]">info@kalacarv.com</div>
                  <p className="text-gray-600">
                    Send detailed project requirements, design files, and reference images
                  </p>
                  <a 
                    href="mailto:info@kalacarv.com"
                    className="inline-flex items-center text-[#F7931E] font-semibold hover:text-[#2D3748] transition-colors duration-200"
                  >
                    Compose Email
                    <HiOutlineArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Image */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/business-4.jpg"
                alt="Modern workshop interior with CNC machines and organized tools"
                width={1200}
                height={600}
                className="w-full h-96 object-cover"
                unoptimized
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  State-of-the-Art CNC Workshop
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Visit our fully equipped workshop in Ahmedabad to see precision cutting technology in action 
                  and discuss your project requirements with our experienced team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Hours Calendar */}
      <section id="workshop-hours" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
              Workshop Hours & Availability
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan your visit or call during our operating hours for immediate assistance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Hours Display */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-8">
                <HiOutlineClock className="h-8 w-8 text-[#F7931E] mr-4" />
                <h3 className="text-2xl font-bold text-[#2D3748]">Operating Hours</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM', status: 'Open' },
                  { day: 'Sunday', hours: '10:00 AM - 6:00 PM', status: 'Open' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-200">
                    <div>
                      <div className="font-semibold text-[#2D3748]">{schedule.day}</div>
                      <div className="text-sm text-gray-600">{schedule.hours}</div>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">{schedule.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#F7931E]/10 rounded-xl border border-[#F7931E]/20">
                <h4 className="font-bold text-[#2D3748] mb-2">Current Status</h4>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-green-700 font-medium">Open · Closes 7 PM</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Walk-ins welcome! Call ahead for complex consultations.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-[#2D3748] mb-4">Quick Contact</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:09586660214"
                    className="flex-1 bg-[#2D3748] text-gray-900 text-center py-3 px-6 rounded-xl hover:bg-[#F7931E] transition-all duration-300 font-semibold"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://maps.google.com/search/Shyamved+Industrial+Estate+Sardar+Patel+Ring+Road+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-[#2D3748] text-[#2D3748] text-center py-3 px-6 rounded-xl hover:bg-[#2D3748] hover:text-white transition-all duration-300 font-semibold"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Location Image & Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/business-7.jpg"
                  alt="Industrial workshop exterior with modern signage"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  unoptimized
                />
              </div>

              <div className="bg-gradient-to-br from-[#2D3748] to-[#E53E3E] rounded-3xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Workshop Location</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <HiOutlineMapPin className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Shyamved Industrial Estate</div>
                      <div className="text-sm opacity-90">
                        57, Sardar Patel Ring Rd, nr. Gappa garden restaurant
                      </div>
                      <div className="text-sm opacity-90">
                        Nana Chiloda, Ahmedabad, Gujarat 382330
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <h5 className="font-semibold mb-2">What to Expect:</h5>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Free parking available</li>
                    <li>• See CNC machines in operation</li>
                    <li>• Material samples on display</li>
                    <li>• Instant quote consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
              Book Workshop Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Schedule a dedicated time to discuss your project with our CNC specialists
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Booking Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-[#2D3748] mb-8">Schedule Your Visit</h3>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Time</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Your Name</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Purpose</label>
                  <div className="space-y-2">
                    {[
                      'Project Quote & Timeline',
                      'Material Selection Advice',
                      'Design Feasibility Review',
                      'Workshop Tour & Capabilities',
                      'Technical Specifications Discussion'
                    ].map((purpose) => (
                      <label key={purpose} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-[#2D3748] focus:ring-[#2D3748] border-gray-300 rounded"
                        />
                        <span className="ml-3 text-sm text-gray-700">{purpose}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Additional Notes</label>
                  <textarea
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D3748] focus:border-transparent"
                    placeholder="Tell us about your project, bring reference materials, specific requirements..."
                  />
                </div>

                <button className="w-full bg-[#2D3748] text-gray-900 font-bold py-4 px-8 rounded-xl hover:bg-[#F7931E] transition-all duration-300 transform hover:scale-105">
                  Confirm Consultation Booking
                </button>
              </div>
            </div>

            {/* Benefits & Process */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#F7931E]/10 to-[#E53E3E]/10 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-[#2D3748] mb-6">What to Expect During Your Visit</h4>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Workshop Tour', desc: 'See our CNC machines and material inventory' },
                    { step: '2', title: 'Project Discussion', desc: 'Review your requirements with our specialists' },
                    { step: '3', title: 'Material Selection', desc: 'Touch and compare different cutting materials' },
                    { step: '4', title: 'Accurate Quote', desc: 'Receive detailed pricing and timeline' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="w-8 h-8 bg-[#2D3748] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-[#2D3748]">{item.title}</div>
                        <div className="text-sm text-gray-300">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                <Image 
                  src="/images/business-10.jpg"
                  alt="Artisan examining precision-cut piece with measuring tools"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                  unoptimized
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Expert Consultation</h4>
                  <p className="text-gray-300 text-sm">
                    Our experienced team will assess your project requirements and provide 
                    professional recommendations for materials, techniques, and finishing options.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-[#2D3748] mb-4">Consultation Benefits</h4>
                <ul className="space-y-3">
                  {[
                    'Free detailed project assessment',
                    'Material cost optimization advice',
                    'Technical feasibility confirmation',
                    'Accurate timeline estimates',
                    'Design modification suggestions'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <HiOutlineCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
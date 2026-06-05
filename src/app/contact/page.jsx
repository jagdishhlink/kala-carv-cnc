'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck } from 'react-icons/hi2'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    material: '',
    dimensions: '',
    quantity: '',
    deadline: '',
    description: '',
    files: null
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, files: e.target.files }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const projectTypes = [
    'Scrapbook Pages', 'Wedding Albums', 'Photo Frames', 'Decorative Elements', 
    'Custom Signage', 'Art Projects', 'Business Cards', 'Other Custom Work'
  ]

  const materials = [
    'Cardstock', 'Wood (3mm)', 'Wood (6mm)', 'Acrylic', 
    'Foam Board', 'Chipboard', 'Leather', 'Fabric'
  ]

  if (isSubmitted) {
    return (
      <main className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2C3E50] to-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-8">
              <HiOutlineCheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Quote Submitted Successfully!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your custom project request. We'll review your specifications and get back to you within 24 hours with a detailed quote.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F39C12] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Review</h4>
                    <p className="text-gray-600">Our team reviews your specifications and design requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F39C12] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Detailed Quote</h4>
                    <p className="text-gray-600">You'll receive a comprehensive quote with timeline and costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F39C12] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Production Start</h4>
                    <p className="text-gray-600">Once approved, we begin precision crafting your project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setCurrentStep(1)
                  setFormData({
                    name: '', email: '', phone: '', projectType: '', material: '', 
                    dimensions: '', quantity: '', deadline: '', description: '', files: null
                  })
                }}
                className="bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                Submit Another Project
              </button>
              <a 
                href="tel:09586660214" 
                className="bg-white text-[#2C3E50] px-8 py-4 rounded-xl font-semibold border-2 border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-colors"
              >
                Call Us: 095866 60214
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16 lg:pt-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E67E22] to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50" />
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 absolute inset-0">
          <Image
            src="/images/business-9.jpg"
            alt="Kala Carv CNC Workshop Contact"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <HiOutlineBolt className="w-5 h-5 mr-3 text-[#F39C12]" />
                <span className="font-medium">Custom Order Wizard</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Get Your
                <span className="block text-[#F39C12]">Custom Quote</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-lg">
                Transform your creative vision into precision-cut reality. Our custom order wizard makes it easy to specify your exact requirements and get an accurate quote.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <HiOutlineWrench className="w-8 h-8 text-[#F39C12] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Precision Cutting</h3>
                  <p className="text-gray-300 text-sm">Industrial CNC accuracy for perfect results</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <HiOutlineShieldCheck className="w-8 h-8 text-[#F39C12] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Quality Materials</h3>
                  <p className="text-gray-300 text-sm">Premium materials for lasting creations</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F39C12] rounded-xl flex items-center justify-center">
                    <HiOutlinePhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Direct</h4>
                    <a href="tel:09586660214" className="text-[#2C3E50] hover:text-[#F39C12] transition-colors font-medium">
                      095866 60214
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F39C12] rounded-xl flex items-center justify-center">
                    <HiOutlineClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Open daily until 7 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F39C12] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Our Workshop</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                </div>

                <button className="w-full bg-[#2C3E50] text-white py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                  <HiOutlineMapPin className="w-5 h-5" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Wizard */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      currentStep >= step 
                        ? 'bg-[#2C3E50] text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-24 lg:w-48 h-1 mx-4 transition-colors ${
                        currentStep > step ? 'bg-[#2C3E50]' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className={currentStep >= 1 ? 'text-[#2C3E50]' : 'text-gray-600'}>Project Details</span>
                <span className={currentStep >= 2 ? 'text-[#2C3E50]' : 'text-gray-600'}>Specifications</span>
                <span className={currentStep >= 3 ? 'text-[#2C3E50]' : 'text-gray-600'}>Contact & Submit</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              {/* Step 1: Project Details */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h2>
                    <p className="text-gray-600 mb-8">Let's start with the basics of what you want to create.</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      >
                        <option value="">Select your project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Material *</label>
                      <select
                        name="material"
                        value={formData.material}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      >
                        <option value="">Select material</option>
                        {materials.map((material) => (
                          <option key={material} value={material}>{material}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Dimensions *</label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="e.g., 12x8 inches, 300x200mm"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity *</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="How many pieces?"
                        min="1"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your project in detail. What design elements, cuts, or engravings do you need?"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-[#2C3E50] text-white py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue to Specifications
                    <HiOutlineArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Step 2: Specifications */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Specifications</h2>
                    <p className="text-gray-600 mb-8">Help us understand your timeline and provide any reference files.</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Deadline</label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-2">Optional - helps us prioritize your project</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Upload Design Files</label>
                      <input
                        type="file"
                        name="files"
                        onChange={handleFileChange}
                        multiple
                        accept=".jpg,.jpeg,.png,.pdf,.ai,.svg,.dxf"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#F39C12] file:text-white file:font-medium hover:file:bg-orange-600 transition-colors"
                      />
                      <p className="text-sm text-gray-500 mt-2">Accepted: JPG, PNG, PDF, AI, SVG, DXF</p>
                    </div>
                  </div>

                  {/* Sample Gallery */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Need Inspiration? Browse Our Recent Work</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[3, 4, 6, 7].map((img) => (
                        <div key={img} className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-square rounded-xl">
                          <Image
                            src={`/images/business-${img}.jpg`}
                            alt={`CNC cutting example ${img}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-[#2C3E50] text-white py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Continue to Contact
                      <HiOutlineArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Submit */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <p className="text-gray-600 mb-8">Almost done! We'll use these details to send your custom quote.</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your contact number"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="lg:col-span-2">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gradient-to-br from-[#2C3E50] to-gray-700 rounded-2xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Project Type:</span>
                        <span className="font-medium">{formData.projectType || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Material:</span>
                        <span className="font-medium">{formData.material || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Dimensions:</span>
                        <span className="font-medium">{formData.dimensions || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Quantity:</span>
                        <span className="font-medium">{formData.quantity || 'Not specified'}</span>
                      </div>
                      {formData.deadline && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Deadline:</span>
                          <span className="font-medium">{formData.deadline}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#F39C12]/10 border border-[#F39C12]/20 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">What happens after you submit?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#F39C12] flex-shrink-0" />
                        We'll review your project specifications within 24 hours
                      </li>
                      <li className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#F39C12] flex-shrink-0" />
                        You'll receive a detailed quote via email and phone
                      </li>
                      <li className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#F39C12] flex-shrink-0" />
                        Once approved, we'll schedule your project for production
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#2C3E50] text-white py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Quote Request
                          <HiOutlineArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Workshop Location */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-[#F39C12] text-white rounded-full px-6 py-3 mb-8">
                <HiOutlineMapPin className="w-5 h-5 mr-3" />
                <span className="font-medium">Visit Our Workshop</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Experience Precision
                <span className="block text-[#2C3E50]">in Person</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Located in Ahmedabad's accessible Shyamved Industrial Estate, our workshop is equipped with state-of-the-art CNC machinery and a showroom of sample projects.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Full Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Workshop Hours</h4>
                    <p className="text-gray-600">Open daily until 7 PM</p>
                    <p className="text-sm text-gray-500 mt-1">Extended hours available for urgent projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2C3E50] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlinePhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Call Ahead</h4>
                    <a href="tel:09586660214" className="text-[#F39C12] hover:text-orange-600 font-semibold transition-colors">
                      095866 60214
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Recommended for workshop tours and consultations</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                  <HiOutlineMapPin className="w-5 h-5" />
                  Get Directions
                </button>
                <a 
                  href="tel:09586660214"
                  className="bg-white text-[#2C3E50] px-8 py-4 rounded-xl font-semibold border-2 border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
              <Image
                src="/images/business-8.jpg"
                alt="Kala Carv CNC Workshop Location"
                width={600}
                height={400}
                className="object-cover w-full h-96 lg:h-full"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/20 to-transparent" />
              
              {/* Map Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">Kala Carv CNC</h4>
                      <p className="text-sm text-gray-600">Shyamved Industrial Estate</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center">
                          {[1,2,3,4].map((star) => (
                            <div key={star} className="w-4 h-4 bg-[#F39C12] rounded-sm mr-0.5" />
                          ))}
                          <div className="w-4 h-4 bg-gray-300 rounded-sm" />
                        </div>
                        <span className="text-sm text-gray-600">4.3 (7 reviews)</span>
                      </div>
                    </div>
                    <button className="bg-[#2C3E50] text-white p-3 rounded-xl hover:bg-gray-700 transition-colors">
                      <HiOutlineArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our custom CNC cutting services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What types of materials can you cut with CNC?",
                  a: "We can precision cut various materials including cardstock, wood, acrylic, and specialty scrapbooking materials. Our CNC equipment handles both thin and thick materials for diverse project needs."
                },
                {
                  q: "Do you create custom designs for scrapbooking?", 
                  a: "Yes, we specialize in custom CNC cutting based on your specific designs and requirements. Bring your ideas and we'll help create precision-cut pieces for your scrapbooking projects."
                },
                {
                  q: "What are your operating hours and location?",
                  a: "We're open daily until 7 PM, located at Shyamved Industrial Estate near Gappa Garden Restaurant on Sardar Patel Ring Road, Nana Chiloda, Ahmedabad."
                },
                {
                  q: "Can beginners get help with their projects?",
                  a: "Absolutely! We welcome crafters of all skill levels and provide guidance on design optimization for CNC cutting. Our team helps ensure your projects turn out exactly as envisioned."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
              <a 
                href="tel:09586660214"
                className="inline-flex items-center gap-2 bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                <HiOutlinePhone className="w-5 h-5" />
                Call 095866 60214
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
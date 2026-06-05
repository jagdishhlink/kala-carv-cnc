'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight, HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineBuildingStorefront, HiOutlineSparkles, HiOutlineHeart, HiOutlineChevronDown } from 'react-icons/hi2'

export default function HomePage() {
  const [activeProcess, setActiveProcess] = useState(0)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const processSteps = [
    { title: 'Design Upload', desc: 'Submit your creative vision' },
    { title: 'Material Selection', desc: 'Choose from premium materials' },
    { title: 'CNC Precision Cutting', desc: 'Advanced machinery creates perfection' },
    { title: 'Quality Inspection', desc: 'Every piece meets our standards' },
    { title: 'Finished Creation', desc: 'Your vision becomes reality' }
  ]

  const materialCategories = [
    { name: 'Wood & MDF', count: '50+ types', image: '/images/business-3.jpg' },
    { name: 'Acrylic Sheets', count: '30+ colors', image: '/images/business-2.jpg' },
    { name: 'Metal Cutting', count: '15+ alloys', image: '/images/business-9.jpg' },
    { name: 'Custom Projects', count: 'unlimited', image: '/images/business-8.jpg' }
  ]

  const precisionValues = [
    { icon: HiOutlineBolt, title: 'Lightning Precision', stat: '±0.1mm accuracy' },
    { icon: HiOutlineWrench, title: 'Advanced Technology', stat: 'CNC-grade equipment' },
    { icon: HiOutlineShieldCheck, title: 'Quality Assured', stat: '100% inspection' },
    { icon: HiOutlineUserGroup, title: 'Expert Craftsmen', stat: '10+ years experience' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Split Diagonal Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#F7931E]/20 to-[#E53E3E]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-[#2D3748]/20 to-[#F7931E]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative min-h-screen flex">
          {/* Left diagonal section - Content */}
          <div className="flex-1 flex items-center justify-start pl-8 lg:pl-16 xl:pl-24 py-20" style={{clipPath: 'polygon(0 0, 70% 0, 60% 100%, 0 100%)'}}>
            <div className="max-w-2xl z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#F7931E]/20 backdrop-blur-xl border border-[#F7931E]/30 rounded-full px-4 py-2 animate-pulse">
                  <span className="text-[#2D3748] font-semibold text-sm">4.3★ Rated in Ahmedabad</span>
                </div>
              </div>
              
              <h1 className="text-6xl xl:text-7xl font-bold text-[#2D3748] leading-tight mb-6">
                Precision CNC
                <span className="block text-[#E53E3E]">Cutting for</span>
                <span className="block bg-gradient-to-r from-[#F7931E] to-[#E53E3E] bg-clip-text text-transparent">
                  Scrapbookers
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your memories into beautiful keepsakes with our custom CNC-cut scrapbooking supplies and personalized designs in Ahmedabad.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#2D3748] text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2D3748]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#2D3748]/20 flex items-center gap-2 group">
                  Get Custom Quote Today
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[#F7931E] text-[#F7931E] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#F7931E] hover:text-white transition-all duration-300 hover:scale-105">
                  View Our Gallery
                </button>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D3748]">±0.1mm</div>
                  <div className="text-sm text-gray-500">Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D3748]">2-3 Days</div>
                  <div className="text-sm text-gray-500">Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D3748]">100+</div>
                  <div className="text-sm text-gray-500">Materials</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D3748]">Open</div>
                  <div className="text-sm text-gray-500">Until 7 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right diagonal section - Image */}
          <div className="flex-1 relative" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#E53E3E]/5 to-[#2D3748]/5">
              <Image
                src="/images/business-1.jpg"
                alt="CNC machine cutting intricate wooden design close up"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Material Showcase */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7931E]/5 to-[#E53E3E]/5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#2D3748] mb-6">Premium Materials Available</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From woods to acrylics, we cut with precision across a vast range of materials perfect for your scrapbooking projects
            </p>
          </div>

          {/* Floating cards with asymmetric positioning */}
          <div className="relative h-[600px]">
            {/* Large featured card */}
            <div className="absolute top-0 left-1/4 w-80 h-96 group">
              <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                <div className="relative h-48 bg-gradient-to-br from-[#E53E3E]/10 to-[#F7931E]/10">
                  <Image
                    src="/images/business-2.jpg"
                    alt="Colorful acrylic sheets stacked in organized display"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-2">Acrylic Sheets</h3>
                  <p className="text-gray-600 mb-4">30+ vibrant colors and transparent options</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#F7931E] font-semibold">3mm - 12mm thickness</span>
                    <HiOutlineArrowRight className="w-5 h-5 text-[#2D3748] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller floating cards */}
            <div className="absolute top-20 right-8 w-64 h-80 group">
              <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                <div className="relative h-40 bg-gradient-to-br from-[#2D3748]/10 to-[#F7931E]/10">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Detailed wooden cut-out patterns arranged on workshop table"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#2D3748] mb-2">Wood & MDF</h3>
                  <p className="text-gray-600 text-sm mb-3">Premium hardwoods and engineered materials</p>
                  <span className="text-[#E53E3E] font-semibold text-sm">50+ wood types</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-8 w-72 h-64 group">
              <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                <div className="relative h-32 bg-gradient-to-br from-[#F7931E]/10 to-[#E53E3E]/10">
                  <Image
                    src="/images/business-9.jpg"
                    alt="Detailed close-up of CNC cutting path creating intricate pattern"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#2D3748] mb-2">Metal Cutting</h3>
                  <p className="text-gray-600 text-sm">Aluminum, brass, and steel options</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-1/3 w-56 h-72 group">
              <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                <div className="relative h-36 bg-gradient-to-br from-[#2D3748]/10 to-[#E53E3E]/10">
                  <Image
                    src="/images/business-6.jpg"
                    alt="Scrapbooking materials and decorative cut elements arranged artistically"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#2D3748] mb-2">Custom Designs</h3>
                  <p className="text-gray-600 text-sm mb-3">Bring your vision to life</p>
                  <span className="text-[#F7931E] font-semibold text-sm">Unlimited possibilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Process Reveal */}
      <section className="py-32 bg-gradient-to-br from-[#E53E3E] to-[#2D3748] text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Watch Your Ideas Take Shape</h2>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Our advanced CNC process transforms digital designs into precision-cut reality. Every step is monitored for perfection.
              </p>

              {/* Process steps with animation */}
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                      activeProcess === index 
                        ? 'bg-white/20 backdrop-blur-xl border border-white/30 scale-105' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                      activeProcess === index ? 'bg-[#F7931E] text-[#2D3748]' : 'bg-white/20 text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                <Image
                  src="/images/business-4.jpg"
                  alt="Modern workshop interior with CNC machines and organized tools"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Floating process indicator */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-white/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#2D3748] font-semibold">Current Process:</span>
                      <span className="text-[#F7931E] font-bold">{activeProcess + 1}/5</span>
                    </div>
                    <h4 className="text-[#2D3748] font-bold text-lg">{processSteps[activeProcess].title}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div 
                        className="bg-gradient-to-r from-[#F7931E] to-[#E53E3E] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((activeProcess + 1) / processSteps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Categories Bento */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#2D3748] mb-6">Explore Our Craft Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From delicate scrapbook elements to robust signage, we precision-cut across all creative categories
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-12 gap-6 h-[700px]">
            {/* Large featured category */}
            <div className="col-span-12 md:col-span-8 row-span-2 group">
              <div className="bg-gradient-to-br from-[#E53E3E]/5 to-[#F7931E]/5 rounded-3xl p-8 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-[#E53E3E]/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E53E3E]/10 to-transparent">
                  <Image
                    src="/images/business-6.jpg"
                    alt="Scrapbooking materials and decorative cut elements arranged artistically"
                    fill
                    className="object-cover opacity-20"
                    unoptimized
                  />
                </div>
                <div className="relative z-10">
                  <div className="bg-[#F7931E]/20 backdrop-blur-xl border border-[#F7931E]/30 rounded-full px-4 py-2 inline-block mb-6">
                    <span className="text-[#2D3748] font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-4xl font-bold text-[#2D3748] mb-4">Scrapbooking Essentials</h3>
                  <p className="text-gray-600 text-lg mb-6 max-w-md">Custom frames, decorative borders, photo corners, and intricate paper cutouts for your memory keeping projects.</p>
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[#E53E3E] font-bold text-lg">200+ Designs Available</span>
                  <HiOutlineArrowRight className="w-8 h-8 text-[#2D3748] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Medium category cards */}
            <div className="col-span-12 md:col-span-4 group">
              <div className="bg-gradient-to-br from-[#2D3748]/5 to-[#F7931E]/5 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D3748]/10 to-transparent">
                  <Image
                    src="/images/business-3.jpg"
                    alt="Detailed wooden cut-out patterns arranged on workshop table"
                    fill
                    className="object-cover opacity-15"
                    unoptimized
                  />
                </div>
                <div className="relative z-10">
                  <HiOutlineBuildingStorefront className="w-12 h-12 text-[#F7931E] mb-4" />
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Business Signage</h3>
                  <p className="text-gray-600 mb-4">Professional signs and displays</p>
                  <span className="text-[#E53E3E] font-semibold">Custom Sizes</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 group">
              <div className="bg-gradient-to-br from-[#F7931E]/5 to-[#E53E3E]/5 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7931E]/10 to-transparent">
                  <Image
                    src="/images/business-5.jpg"
                    alt="Hands holding precisely cut wooden ornamental piece"
                    fill
                    className="object-cover opacity-15"
                    unoptimized
                  />
                </div>
                <div className="relative z-10">
                  <HiOutlineHeart className="w-12 h-12 text-[#E53E3E] mb-4" />
                  <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Wedding Decor</h3>
                  <p className="text-gray-600 mb-4">Elegant ceremony elements</p>
                  <span className="text-[#F7931E] font-semibold">Personalized</span>
                </div>
              </div>
            </div>

            {/* Small category cards */}
            <div className="col-span-6 md:col-span-3 group">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-4 h-full hover:border-[#F7931E] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <HiOutlineSparkles className="w-8 h-8 text-[#F7931E] mb-3" />
                <h4 className="text-lg font-bold text-[#2D3748] mb-2">Jewelry Making</h4>
                <p className="text-gray-600 text-sm">Precision components</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 group">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-4 h-full hover:border-[#E53E3E] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <HiOutlineUserGroup className="w-8 h-8 text-[#E53E3E] mb-3" />
                <h4 className="text-lg font-bold text-[#2D3748] mb-2">Educational Models</h4>
                <p className="text-gray-600 text-sm">Learning tools</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 group">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-4 h-full hover:border-[#F7931E] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <HiOutlineBolt className="w-8 h-8 text-[#F7931E] mb-3" />
                <h4 className="text-lg font-bold text-[#2D3748] mb-2">Prototyping</h4>
                <p className="text-gray-600 text-sm">Rapid development</p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 group">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-4 h-full hover:border-[#E53E3E] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <HiOutlineWrench className="w-8 h-8 text-[#E53E3E] mb-3" />
                <h4 className="text-lg font-bold text-[#2D3748] mb-2">Custom Parts</h4>
                <p className="text-gray-600 text-sm">Replacement pieces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Values Grid */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#F7931E]/10 to-[#E53E3E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#2D3748]/10 to-[#F7931E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#2D3748] mb-8">Why Crafters Choose Kala Carv</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Located in Ahmedabad's Shyamved Industrial Estate, we combine advanced technology with creative passion to deliver exceptional results for every project.
              </p>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-8">
                {precisionValues.map((value, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#2D3748]/10 transition-all duration-500 hover:scale-105">
                      <value.icon className="w-12 h-12 text-[#F7931E] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-[#2D3748] mb-2">{value.title}</h3>
                      <p className="text-[#E53E3E] font-semibold text-lg">{value.stat}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mt-16 space-y-6">
                <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F7931E] to-[#E53E3E] rounded-full flex items-center justify-center text-gray-900 font-bold">P</div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-3">"The precision and quality of their CNC work is outstanding for scrapbooking projects"</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#2D3748]">Priya S.</span>
                        <div className="flex text-[#F7931E]">
                          {[...Array(5)].map((_, i) => <HiOutlineStar key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E53E3E] to-[#2D3748] rounded-full flex items-center justify-center text-gray-900 font-bold">M</div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-3">"Excellent service and attention to detail for craft projects"</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#2D3748]">Meera K.</span>
                        <div className="flex text-[#F7931E]">
                          {[...Array(5)].map((_, i) => <HiOutlineStar key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E53E3E]/10 to-[#F7931E]/10">
                  <Image
                    src="/images/business-10.jpg"
                    alt="Artisan examining precision-cut piece with measuring tools"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-8 right-8">
                  <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl">
                    <div className="text-3xl font-bold text-[#E53E3E]">4.3★</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8">
                  <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl">
                    <div className="text-2xl font-bold text-[#2D3748]">Open Daily</div>
                    <div className="text-sm text-gray-600">Until 7:00 PM</div>
                  </div>
                </div>

                <div className="absolute top-1/3 left-8">
                  <div className="bg-[#F7931E]/90 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl">
                    <div className="text-xl font-bold text-gray-900">2-3 Days</div>
                    <div className="text-sm text-white/90">Quick Turnaround</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Workshop */}
      <section className="py-32 bg-gradient-to-br from-[#2D3748] via-[#E53E3E] to-[#F7931E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Join Our Creative Workshop Updates
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Get notified about new materials, cutting techniques, and exclusive workshops. 
            Plus receive a free design consultation for your next project.
          </p>

          {/* Newsletter form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white text-[#2D3748] rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
              />
              <button className="bg-[#F7931E] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#F7931E]/90 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Join Workshop List
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Free design consultation included • Unsubscribe anytime • No spam, just creativity
            </p>
          </div>

          {/* Workshop benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <HiOutlineBolt className="w-12 h-12 text-[#F7931E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">New Techniques</h3>
              <p className="text-gray-300">Learn advanced CNC cutting methods and creative applications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <HiOutlineSparkles className="w-12 h-12 text-[#F7931E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Material Updates</h3>
              <p className="text-gray-300">First access to new materials and color options</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <HiOutlineHeart className="w-12 h-12 text-[#F7931E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Project Ideas</h3>
              <p className="text-gray-300">Inspiring projects and seasonal craft suggestions</p>
            </div>
          </div>

          {/* Contact info footer */}
          <div className="mt-20 pt-12 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <HiOutlineMapPin className="w-8 h-8 text-[#F7931E] mb-2" />
                <p className="text-gray-300">Shyamved Industrial Estate, Ahmedabad</p>
              </div>
              <div className="flex flex-col items-center">
                <HiOutlinePhone className="w-8 h-8 text-[#F7931E] mb-2" />
                <p className="text-gray-300">095866 60214</p>
              </div>
              <div className="flex flex-col items-center">
                <HiOutlineClock className="w-8 h-8 text-[#F7931E] mb-2" />
                <p className="text-gray-300">Open Daily Until 7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
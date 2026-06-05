'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineArrowRight, HiOutlineBuildingStorefront, HiOutlineWrench, HiOutlineCheckCircle } from 'react-icons/hi2'

export default function LocationsPage() {
  const [selectedTab, setSelectedTab] = useState('directions')

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E67E22] to-gray-900">
          <Image
            src="/images/business-9.jpg"
            alt="Kala Carv CNC Workshop Location"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
        </div>
        
        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/80 via-transparent to-[#E67E22]/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-[#F39C12] rounded-full">
                  <span className="text-sm font-semibold text-white">Visit Our Workshop</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Precision
                  <span className="block text-[#F39C12]">Workshop</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Experience our state-of-the-art CNC facility firsthand. Located conveniently in Ahmedabad's industrial hub for easy access.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#F39C12] text-white rounded-2xl font-semibold hover:bg-[#E67E22] transition-all duration-300 hover:shadow-lg hover:shadow-[#F39C12]/20 group">
                  Get Directions
                  <HiOutlineArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:09586660214" className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-[#2C3E50] transition-all duration-300 group">
                  <HiOutlinePhone className="inline mr-2 group-hover:scale-110 transition-transform" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Workshop Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <HiOutlineMapPin className="w-6 h-6 text-[#F39C12]" />
                    <span className="text-gray-200">Shyamved Industrial Estate, Ahmedabad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineClock className="w-6 h-6 text-[#F39C12]" />
                    <span className="text-gray-200">Open Daily Until 7 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineTruck className="w-6 h-6 text-[#F39C12]" />
                    <span className="text-gray-200">Easy Parking Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Information Tabs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
              Workshop Location & Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about visiting our precision CNC workshop in Ahmedabad
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'directions', label: 'Directions & Parking', icon: HiOutlineMapPin },
                { id: 'hours', label: 'Hours & Availability', icon: HiOutlineClock },
                { id: 'facilities', label: 'Workshop Facilities', icon: HiOutlineBuildingStorefront },
                { id: 'booking', label: 'Tour Booking', icon: HiOutlineCheckCircle }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedTab === tab.id
                      ? 'bg-[#2C3E50] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-[#2C3E50] hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {selectedTab === 'directions' && (
              <div className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-[#2C3E50]">Getting to Our Workshop</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#F39C12] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#2C3E50] mb-2">From Sardar Patel Ring Road</h4>
                          <p className="text-gray-600">Take the ring road and look for Gappa Garden Restaurant. We're located nearby in the Shyamved Industrial Estate.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#F39C12] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#2C3E50] mb-2">Industrial Estate Entry</h4>
                          <p className="text-gray-600">Enter Shyamved Industrial Estate at unit 57. Look for our CNC workshop signage.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#F39C12] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#2C3E50] mb-2">Parking & Access</h4>
                          <p className="text-gray-600">Ample parking available on-site. Ground-level workshop access for easy material transport.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-[#2C3E50] mb-3">Complete Address</h4>
                      <p className="text-gray-700">Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#E67E22] to-gray-900 rounded-2xl">
                    <Image
                      src="/images/business-7.jpg"
                      alt="Workshop location and parking"
                      width={500}
                      height={400}
                      className="object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'hours' && (
              <div className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-[#2C3E50]">Workshop Hours & Availability</h3>
                    
                    <div className="bg-gradient-to-r from-[#2C3E50] to-[#E67E22] rounded-2xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-6">Operating Schedule</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/20">
                          <span className="font-medium">Monday - Sunday</span>
                          <span className="font-bold">Open Until 7 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#F39C12]">
                          <HiOutlineClock className="w-5 h-5" />
                          <span className="font-medium">Currently Open</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                        <HiOutlineCheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-green-800 font-medium">No appointment needed for consultations</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                        <HiOutlineClock className="w-6 h-6 text-blue-600" />
                        <span className="text-blue-800 font-medium">Extended hours available for large projects</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                        <HiOutlinePhone className="w-6 h-6 text-orange-600" />
                        <span className="text-orange-800 font-medium">Call ahead for custom project discussions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                    <Image
                      src="/images/business-8.jpg"
                      alt="Workshop operating hours"
                      width={500}
                      height={400}
                      className="object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'facilities' && (
              <div className="p-12">
                <div className="space-y-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#2C3E50] mb-4">
                      State-of-the-Art CNC Workshop
                    </h3>
                    <p className="text-xl text-gray-600">
                      Professional-grade equipment and facilities for precision crafting
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        icon: HiOutlineWrench,
                        title: 'CNC Cutting Equipment',
                        description: 'Industrial-grade CNC machines for precision cutting of various materials'
                      },
                      {
                        icon: HiOutlineShieldCheck,
                        title: 'Safety Standards',
                        description: 'Fully compliant workshop with proper ventilation and safety protocols'
                      },
                      {
                        icon: HiOutlineBuildingStorefront,
                        title: 'Customer Viewing Area',
                        description: 'Comfortable space to watch your projects being crafted with precision'
                      },
                      {
                        icon: HiOutlineTruck,
                        title: 'Material Storage',
                        description: 'Climate-controlled storage for premium scrapbooking materials'
                      },
                      {
                        icon: HiOutlineCheckCircle,
                        title: 'Quality Control',
                        description: 'Dedicated inspection area ensuring every cut meets our standards'
                      },
                      {
                        icon: HiOutlineMapPin,
                        title: 'Accessible Location',
                        description: 'Ground-level access with easy loading and unloading facilities'
                      }
                    ].map((facility, index) => (
                      <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                        <facility.icon className="w-12 h-12 text-[#F39C12] mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-bold text-[#2C3E50] mb-3">{facility.title}</h4>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'booking' && (
              <div className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-[#2C3E50]">Schedule a Workshop Tour</h3>
                    
                    <p className="text-xl text-gray-600 leading-relaxed">
                      See our CNC precision technology in action. Book a personalized tour to understand how we can bring your creative projects to life.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#F39C12] rounded-full"></div>
                        <span className="text-gray-700">Live demonstration of CNC cutting processes</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#F39C12] rounded-full"></div>
                        <span className="text-gray-700">Material selection guidance and recommendations</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#F39C12] rounded-full"></div>
                        <span className="text-gray-700">Custom project consultation and pricing</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#F39C12] rounded-full"></div>
                        <span className="text-gray-700">Portfolio review of past customer projects</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <a href="tel:09586660214" className="block w-full px-8 py-4 bg-[#2C3E50] text-white rounded-2xl font-semibold hover:bg-[#E67E22] transition-all duration-300 text-center group">
                        <HiOutlinePhone className="inline mr-2 group-hover:scale-110 transition-transform" />
                        Call to Schedule: 095866 60214
                      </a>
                      <button className="w-full px-8 py-4 border-2 border-[#2C3E50] text-[#2C3E50] rounded-2xl font-semibold hover:bg-[#2C3E50] hover:text-white transition-all duration-300 group">
                        Request Quote During Visit
                        <HiOutlineArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#2C3E50] to-gray-900 rounded-2xl">
                    <Image
                      src="/images/business-1.jpg"
                      alt="Workshop tour booking"
                      width={500}
                      height={400}
                      className="object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50]">
                Find Us in
                <span className="block text-[#E67E22]">Ahmedabad</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Strategically located in Shyamved Industrial Estate for easy access from all parts of Ahmedabad. Near major landmarks for convenient navigation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <HiOutlineMapPin className="w-6 h-6 text-[#F39C12]" />
                  <span className="font-medium text-gray-700">Near Gappa Garden Restaurant</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <HiOutlineTruck className="w-6 h-6 text-[#F39C12]" />
                  <span className="font-medium text-gray-700">Easy access from Ring Road</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <HiOutlineBuildingStorefront className="w-6 h-6 text-[#F39C12]" />
                  <span className="font-medium text-gray-700">Industrial estate location</span>
                </div>
              </div>
              
              <button className="px-8 py-4 bg-[#F39C12] text-white rounded-2xl font-semibold hover:bg-[#E67E22] transition-all duration-300 hover:shadow-lg hover:shadow-[#F39C12]/20 group">
                Open in Maps
                <HiOutlineArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-[#E67E22] to-gray-900 rounded-3xl">
              <Image
                src="/images/business-2.jpg"
                alt="Kala Carv CNC location map"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-[#2C3E50]/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-[#2C3E50] via-[#E67E22] to-[#F39C12] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Visit Our Workshop?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Experience precision CNC cutting firsthand. Call ahead or drop by during our operating hours for personalized assistance with your scrapbooking projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:09586660214" className="px-10 py-5 bg-white text-[#2C3E50] rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl group">
              <HiOutlinePhone className="inline mr-3 group-hover:scale-110 transition-transform" />
              Call 095866 60214
            </a>
            <button className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#2C3E50] transition-all duration-300 group">
              Get Directions
              <HiOutlineMapPin className="inline ml-3 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
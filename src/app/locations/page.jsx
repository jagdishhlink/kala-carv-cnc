'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight, HiOutlineTruck, HiOutlineBuildingStorefront } from 'react-icons/hi2'

export default function LocationsPage() {
  const [activeWorkshop, setActiveWorkshop] = useState(0)
  const [tourSection, setTourSection] = useState('entrance')

  const workshops = [
    {
      title: "Precision Paper Engineering",
      time: "10:00 AM - 12:00 PM",
      date: "Every Saturday",
      difficulty: "Intermediate",
      spots: 8,
      description: "Learn advanced CNC cutting techniques for intricate paper designs"
    },
    {
      title: "Digital Design to Physical Craft",
      time: "2:00 PM - 5:00 PM", 
      date: "Bi-weekly Sunday",
      difficulty: "Advanced",
      spots: 6,
      description: "Master the complete workflow from digital design to precision cutting"
    },
    {
      title: "Beginner's Precision Crafting",
      time: "11:00 AM - 1:00 PM",
      date: "Every Wednesday",
      difficulty: "Beginner", 
      spots: 12,
      description: "Introduction to CNC cutting principles and basic scrapbooking techniques"
    },
    {
      title: "Custom Pattern Development",
      time: "3:00 PM - 6:00 PM",
      date: "First Friday",
      difficulty: "Expert",
      spots: 4,
      description: "Create your own cutting patterns and optimize for production"
    }
  ]

  const tourSections = {
    entrance: "Modern industrial entrance with precision-cut signage and organized tool displays",
    workshop: "State-of-the-art CNC machines and crafting stations with proper ventilation",
    materials: "Organized material library with quality paper stocks and cutting supplies",
    gallery: "Inspiration wall featuring customer projects and technique demonstrations"
  }

  return (
    <main className="pt-16 lg:pt-20">
      {/* Interactive Location Hero */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#F4E6D7] via-gray-100 to-gray-300 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full transform rotate-12 scale-150">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="bg-[#2C5530] rounded-lg"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#2C5530]/20">
                <HiOutlineBuildingStorefront className="w-5 h-5 text-[#2C5530]" />
                <span className="text-sm font-medium text-[#2C5530]">Shyamved Industrial Estate</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-none">
                Visit Our
                <span className="block text-[#2C5530] relative">
                  Precision
                  <div className="absolute -bottom-2 left-0 w-3/4 h-1 bg-gradient-to-r from-[#E67E22] to-transparent"></div>
                </span>
                Workshop
              </h1>

              <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
                Experience where industrial-grade CNC technology meets creative craftsmanship. Tour our facility and see precision cutting in action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2C5530] text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#1e3a21] transition-colors group">
                  <span>Schedule Visit</span>
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[#2C5530] text-[#2C5530] px-8 py-4 rounded-2xl font-semibold hover:bg-[#2C5530] hover:text-white transition-colors">
                  Get Directions
                </button>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/40">
                  <div className="flex items-center space-x-3 mb-2">
                    <HiOutlineClock className="w-6 h-6 text-[#E67E22]" />
                    <span className="font-semibold text-gray-900">Open Daily</span>
                  </div>
                  <p className="text-gray-700">Until 7:00 PM</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/40">
                  <div className="flex items-center space-x-3 mb-2">
                    <HiOutlinePhone className="w-6 h-6 text-[#E67E22]" />
                    <span className="font-semibold text-gray-900">Quick Call</span>
                  </div>
                  <p className="text-gray-700">095866 60214</p>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Map Area */}
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
                <Image
                  src="/images/business-4.jpg"
                  alt="Kala Carv CNC workshop exterior and entrance"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <HiOutlineMapPin className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Kala Carv CNC</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Action Buttons */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-4">
                <button className="bg-white shadow-lg p-4 rounded-full hover:shadow-xl transition-all hover:scale-110">
                  <HiOutlineTruck className="w-6 h-6 text-[#2C5530]" />
                </button>
                <button className="bg-[#E67E22] text-white shadow-lg p-4 rounded-full hover:shadow-xl transition-all hover:scale-110">
                  <HiOutlinePhone className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom 360 Tour */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Virtual Workshop
              <span className="block text-[#2C5530]">Tour</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our precision-engineered workspace before your visit. See our industrial-grade equipment and organized crafting stations.
            </p>
          </div>

          {/* Tour Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-2xl inline-flex space-x-2">
              {Object.keys(tourSections).map((section) => (
                <button
                  key={section}
                  onClick={() => setTourSection(section)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all ${
                    tourSection === section
                      ? 'bg-[#2C5530] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Tour Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Tour View */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl aspect-video">
                <Image
                  src={`/images/business-${tourSection === 'entrance' ? '4' : tourSection === 'workshop' ? '1' : tourSection === 'materials' ? '8' : '9'}.jpg`}
                  alt={`Workshop ${tourSection} area`}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Interactive Hotspots */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-900 capitalize">{tourSection} View</span>
                  </div>
                </div>

                {/* Tour Controls */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl">
                    <p className="text-gray-800 font-medium">{tourSections[tourSection]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Features */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#F4E6D7] to-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Workshop Features</h3>
                <div className="space-y-4">
                  {[
                    "Professional CNC cutting stations",
                    "Climate-controlled material storage",
                    "Digital design consultation area",
                    "Quality inspection workspace",
                    "Customer viewing gallery"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5530] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2C5530] text-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Book a Personal Tour</h4>
                <p className="text-green-100 mb-6">See our precision equipment in action and discuss your project requirements.</p>
                <button className="w-full bg-white text-[#2C5530] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule Grid */}
      <section className="py-24 bg-[#F4E6D7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Workshop
              <span className="block text-[#2C5530]">Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our hands-on workshops to master precision crafting techniques with expert guidance.
            </p>
          </div>

          {/* Workshop Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                onClick={() => setActiveWorkshop(index)}
                className={`bg-white p-8 rounded-2xl shadow-lg border-2 transition-all cursor-pointer hover:shadow-xl ${
                  activeWorkshop === index
                    ? 'border-[#2C5530] transform scale-105'
                    : 'border-transparent hover:border-gray-200'
                }`}
              >
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    workshop.difficulty === 'Beginner' 
                      ? 'bg-green-100 text-green-800'
                      : workshop.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : workshop.difficulty === 'Advanced'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {workshop.difficulty}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{workshop.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <HiOutlineClock className="w-4 h-4 text-[#E67E22]" />
                    <span className="text-sm text-gray-700">{workshop.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiOutlineMapPin className="w-4 h-4 text-[#E67E22]" />
                    <span className="text-sm text-gray-700">{workshop.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">{workshop.spots} spots left</span>
                  <HiOutlineChevronRight className="w-4 h-4 text-[#2C5530]" />
                </div>
              </div>
            ))}
          </div>

          {/* Workshop Details */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {workshops[activeWorkshop].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {workshops[activeWorkshop].description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                    <p className="text-gray-600">{workshops[activeWorkshop].time}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Schedule</h4>
                    <p className="text-gray-600">{workshops[activeWorkshop].date}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                    <p className="text-gray-600">{workshops[activeWorkshop].spots} spots remaining</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#2C5530] text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#1e3a21] transition-colors">
                    <span>Reserve Your Spot</span>
                    <HiOutlineArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-[#2C5530] text-[#2C5530] px-8 py-4 rounded-2xl font-semibold hover:bg-[#2C5530] hover:text-white transition-colors">
                    Call for Details
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/images/business-7.jpg"
                  alt="Workshop session in progress"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Sticky Sidebar */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Getting to Kala Carv CNC</h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-[#F4E6D7] to-gray-100 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">By Car</h3>
                    <p className="text-gray-700 mb-4">
                      Located on Sardar Patel Ring Road near Gappa Garden Restaurant. Ample parking available in our industrial complex.
                    </p>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <HiOutlineTruck className="w-4 h-4" />
                      <span>Free parking for workshop attendees</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#F4E6D7] to-gray-100 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Transport</h3>
                    <p className="text-gray-700 mb-4">
                      Accessible via BRTS and local bus routes. Nearest major landmark is Gappa Garden Restaurant.
                    </p>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <HiOutlineMapPin className="w-4 h-4" />
                      <span>5-minute walk from nearest bus stop</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#F4E6D7] to-gray-100 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
                    <div className="space-y-3">
                      {[
                        "Professional CNC cutting demonstration",
                        "Material consultation and selection",
                        "Project planning and timeline discussion",
                        "Precision equipment tour and explanation"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <HiOutlineCheckCircle className="w-5 h-5 text-[#2C5530] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmark Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl">
                <Image
                  src="/images/business-10.jpg"
                  alt="Ahmedabad industrial area landmarks and directions"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Shyamved Industrial Estate</h4>
                    <p className="text-sm text-gray-700">Modern industrial complex with easy access and professional facilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-[#2C5530] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Visit Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <HiOutlineMapPin className="w-5 h-5 text-green-300" />
                      <span className="font-semibold">Address</span>
                    </div>
                    <p className="text-green-100 text-sm leading-relaxed ml-8">
                      Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <HiOutlineClock className="w-5 h-5 text-green-300" />
                      <span className="font-semibold">Hours</span>
                    </div>
                    <p className="text-green-100 ml-8">Open Daily Until 7:00 PM</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <HiOutlinePhone className="w-5 h-5 text-green-300" />
                      <span className="font-semibold">Contact</span>
                    </div>
                    <p className="text-green-100 ml-8">095866 60214</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-green-700">
                  <button className="w-full bg-white text-[#2C5530] py-3 rounded-xl font-semibold mb-3 hover:bg-gray-100 transition-colors">
                    Get Directions
                  </button>
                  <button className="w-full border-2 border-white text-white py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2C5530] transition-colors">
                    Call Now
                  </button>
                </div>
              </div>

              {/* Quick Workshop Booking */}
              <div className="mt-6 bg-gradient-to-br from-[#F4E6D7] to-gray-100 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Book Workshop Visit</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Combine your location visit with a hands-on workshop experience.
                </p>
                <button className="w-full bg-[#E67E22] text-white py-3 rounded-xl font-semibold hover:bg-[#d16918] transition-colors">
                  View Workshop Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
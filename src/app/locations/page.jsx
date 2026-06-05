'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone, HiOutlineEnvelope, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineTruck, HiOutlineBuildingStorefront } from 'react-icons/hi2';

export default function LocationsPage() {
  const [selectedView, setSelectedView] = useState('overview');

  return (
    <main className="pt-16 lg:pt-20 min-h-screen bg-white">
      {/* Hero Section with Geometric Overlay */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8B86D] to-gray-800">
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src="/images/business-9.jpg"
              alt="Workshop Location"
              fill
              className="object-cover opacity-60"
              unoptimized
            />
          </div>
        </div>
        
        {/* Geometric Overlay Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 border-4 border-[#C7956D]/40 rotate-45"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#2D4A3E]/20 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-2 bg-gradient-to-r from-[#E8B86D]/60 to-transparent"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-white/30 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Visit Our
              <span className="block text-[#E8B86D]">Precision Workshop</span>
            </h1>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#C7956D] rotate-45"></div>
          </div>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Experience our state-of-the-art CNC facility in the heart of Ahmedabad
          </p>
        </div>
      </section>

      {/* Workshop Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-2.jpg"
                  alt="Workshop Interior"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#E8B86D]/20 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-4 border-[#2D4A3E]/30 rotate-45"></div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2D4A3E] mb-6">
                  Professional
                  <span className="block text-[#E8B86D]">CNC Workshop</span>
                </h2>
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#C7956D]/30 rotate-45"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Located in Shyamved Industrial Estate, our workshop features cutting-edge CNC and laser cutting equipment designed for precision crafting. Every project receives the attention to detail that serious crafters demand.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#E8B86D]">
                  <HiOutlineBuildingStorefront className="w-8 h-8 text-[#2D4A3E] mb-3" />
                  <h3 className="font-semibold text-[#2D4A3E] mb-2">Modern Facility</h3>
                  <p className="text-gray-600 text-sm">State-of-the-art equipment for precision cutting</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#C7956D]">
                  <HiOutlineCheckCircle className="w-8 h-8 text-[#2D4A3E] mb-3" />
                  <h3 className="font-semibold text-[#2D4A3E] mb-2">Quality Focus</h3>
                  <p className="text-gray-600 text-sm">Every cut meets professional standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details with Interactive Map */}
      <section className="py-24 bg-gradient-to-br from-[#E8B86D] to-[#C7956D]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Easy to Find
              <span className="block text-white">Easy to Reach</span>
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Conveniently located with ample parking and easy access from major roads
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <HiOutlineMapPin className="w-12 h-12 text-[#2D4A3E] mb-4" />
                <h3 className="text-2xl font-bold text-[#2D4A3E] mb-4">Visit Us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, 
                      nr. Gappa garden restaurant, Nana Chiloda, 
                      Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a href="tel:09586660214" className="text-[#2D4A3E] hover:text-[#C7956D] transition-colors">
                      095866 60214
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-semibold text-[#2D4A3E] mb-3">Landmark</h4>
                <p className="text-gray-700">Near Gappa Garden Restaurant on Sardar Patel Ring Road</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full min-h-[400px]">
                <div className="absolute inset-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <HiOutlineMapPin className="w-16 h-16 text-[#2D4A3E] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#2D4A3E] mb-2">Interactive Map</h3>
                    <p className="text-gray-600 mb-6">Find us easily with precise location details</p>
                    <button className="bg-[#2D4A3E] text-white px-6 py-3 rounded-xl hover:bg-[#C7956D] transition-colors flex items-center gap-2 mx-auto">
                      <span>Get Directions</span>
                      <HiOutlineArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Tour */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D4A3E] mb-6">
              Virtual Workshop
              <span className="block text-[#E8B86D]">Experience</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our professional-grade equipment and see where precision meets creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CNC Equipment */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <Image
                  src="/images/business-8.jpg"
                  alt="CNC Equipment"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">CNC Machines</h3>
                <p className="text-sm opacity-90">Professional-grade cutting equipment</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#E8B86D] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Material Station */}
            <div className="group relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <Image
                  src="/images/business-3.jpg"
                  alt="Material Station"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Material Selection</h3>
                <p className="text-sm opacity-90">Quality materials for every project</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#C7956D] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Finishing Area */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <Image
                  src="/images/business-7.jpg"
                  alt="Finishing Area"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                <p className="text-sm opacity-90">Precision finishing and inspection</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#E8B86D] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Parking */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2D4A3E] mb-6">
                  Convenient
                  <span className="block text-[#E8B86D]">Access</span>
                </h2>
                <div className="absolute -top-4 right-0 w-12 h-2 bg-[#C7956D]"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-[#E8B86D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineTruck className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D4A3E] mb-2">Easy Loading</h3>
                    <p className="text-gray-600">Direct workshop access for material delivery and pickup</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-[#C7956D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D4A3E] mb-2">Prime Location</h3>
                    <p className="text-gray-600">Located on Sardar Patel Ring Road for easy accessibility</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-[#E8B86D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineBuildingStorefront className="w-6 h-6 text-[#2D4A3E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D4A3E] mb-2">Industrial Estate</h3>
                    <p className="text-gray-600">Professional environment with adequate parking facilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-1.jpg"
                  alt="Workshop Exterior"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-[#E8B86D]/30 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#2D4A3E]/20 rotate-12 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2D4A3E] to-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Visit
              <span className="block text-[#E8B86D]">Our Workshop?</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C7956D]"></div>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Call ahead to schedule a visit and see our precision cutting capabilities in action
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:09586660214"
              className="bg-[#E8B86D] text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#C7956D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#E8B86D]/20 transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <HiOutlinePhone className="w-6 h-6" />
              Call to Schedule Visit
            </a>
            <a 
              href="/contact"
              className="border-2 border-[#E8B86D] text-[#E8B86D] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E8B86D] hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
            >
              <HiOutlineEnvelope className="w-6 h-6" />
              Send Message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
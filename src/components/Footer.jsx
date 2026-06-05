'use client';

import Link from 'next/link'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineArrowRight, HiOutlineChevronRight } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-[#2D4A3E] text-white">
      {/* Geometric overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-amber-500/10 to-transparent bg-repeat"></div>
      </div>
      
      <div className="relative">
        {/* Top section with brand */}
        <div className="border-b border-white/10 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Kala Carv CNC</h2>
                <p className="text-lg text-gray-300 mb-4">Precision CNC Cutting for Crafters</p>
                <div className="w-16 h-1 bg-[#2D4A3E] rounded-full"></div>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="text-white font-semibold">4.3★ Rated</div>
                  <div className="text-gray-300 text-sm">Customer Reviews</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="text-white font-semibold">Professional Grade</div>
                  <div className="text-gray-300 text-sm">CNC Equipment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                  <div className="text-white font-semibold">Custom Designs</div>
                  <div className="text-gray-300 text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Column 1: About */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-4">About Kala Carv CNC</h3>
                <div className="w-8 h-0.5 bg-[#2D4A3E] mb-4"></div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Professional CNC and laser cutting services for scrapbooking and crafting needs. 
                  We bring precision technology to the creative community in Ahmedabad.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-white">Quality Materials</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold text-white">Professional Finishing</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                <div className="w-8 h-0.5 bg-[#2D4A3E] mb-4"></div>
                <nav className="space-y-3">
                  <Link href="/" className="block text-gray-300 hover:text-[#2D4A3E] transition-colors duration-200">
                    Home
                  </Link>
                  <Link href="/products" className="block text-gray-300 hover:text-[#2D4A3E] transition-colors duration-200">
                    Products & Services
                  </Link>
                  <Link href="/gallery" className="block text-gray-300 hover:text-[#2D4A3E] transition-colors duration-200">
                    Project Gallery
                  </Link>
                  <Link href="/about" className="block text-gray-300 hover:text-[#2D4A3E] transition-colors duration-200">
                    About Us
                  </Link>
                  <Link href="/locations" className="block text-gray-300 hover:text-[#2D4A3E] transition-colors duration-200">
                    Location & Hours
                  </Link>
                  <Link href="/contact" className="block text-gray-300 hover:text-[#2D4A3E] transition-colors duration-200">
                    Contact Us
                  </Link>
                </nav>
              </div>

              {/* Column 3: Services */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
                <div className="w-8 h-0.5 bg-[#2D4A3E] mb-4"></div>
                <div className="space-y-3">
                  <div className="text-gray-300">
                    <div className="font-medium text-white">Laser Cut Designs</div>
                    <div className="text-sm">Intricate patterns & shapes</div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-medium text-white">CNC Cutting</div>
                    <div className="text-sm">Precision material cutting</div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-medium text-white">Custom Projects</div>
                    <div className="text-sm">Personalized designs</div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-medium text-white">Scrapbook Supplies</div>
                    <div className="text-sm">Quality crafting materials</div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-medium text-white">Workshop Services</div>
                    <div className="text-sm">Professional finishing</div>
                  </div>
                </div>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
                <div className="w-8 h-0.5 bg-[#2D4A3E] mb-4"></div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <HiOutlinePhone className="w-5 h-5 text-[#2D4A3E] mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:09586660214" className="text-white font-medium hover:text-[#2D4A3E] transition-colors">
                        095866 60214
                      </a>
                      <div className="text-gray-300 text-sm">Call for quotes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <HiOutlineMapPin className="w-5 h-5 text-[#2D4A3E] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Shyamved Industrial Estate</div>
                      <div className="text-gray-300 text-sm">
                        57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, 
                        Nana Chiloda, Ahmedabad, Gujarat 382330
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <HiOutlineClock className="w-5 h-5 text-[#2D4A3E] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Business Hours</div>
                      <div className="text-gray-300 text-sm">Call to confirm availability</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <HiOutlineEnvelope className="w-5 h-5 text-[#2D4A3E] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Get In Touch</div>
                      <div className="text-gray-300 text-sm">Discuss your project needs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-gradient-to-r from-[#2D4A3E] to-[#C7956D] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
              <p className="text-white/90 mb-6">Get a custom quote for your precision cutting needs</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:09586660214" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2D4A3E] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  Call Now: 095866 60214
                </a>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2D4A3E] transition-colors group"
                >
                  Get Custom Quote
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Kala Carv CNC. All rights reserved. Professional CNC cutting services in Ahmedabad.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-1 text-gray-300 hover:text-[#2D4A3E] transition-colors text-sm group"
              >
                Back to top
                <HiOutlineChevronRight className="w-4 h-4 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
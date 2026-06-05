'use client';

import Image from 'next/image'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineArrowRight, HiOutlineStar } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-gray-400 border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Brand Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Kala Carv CNC</h2>
          <p className="text-gray-300 text-lg">Precision CNC Cutting for Scrapbookers</p>
          <div className="w-16 h-1 bg-[#F7931E] mt-3"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              About Kala Carv CNC
              <div className="w-8 h-0.5 bg-[#F7931E] mt-2"></div>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Advanced CNC technology meets creative passion. We specialize in precision cutting services for scrapbooking enthusiasts in Ahmedabad, bringing your unique visions to life.
            </p>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1 text-sm">
                <HiOutlineStar className="w-4 h-4 text-[#F7931E]" />
                <span className="text-gray-900 font-medium">4.3★</span>
                <span>Rated</span>
              </div>
              <div className="text-sm">
                <span className="text-white font-medium">Local</span>
                <span> Ahmedabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
              <div className="w-8 h-0.5 bg-[#F7931E] mt-2"></div>
            </h3>
            <nav className="space-y-3">
              <a href="/" className="block text-gray-400 hover:text-[#F7931E] transition-colors text-sm">
                Home
              </a>
              <a href="/products" className="block text-gray-400 hover:text-[#F7931E] transition-colors text-sm">
                Materials & Products
              </a>
              <a href="/gallery" className="block text-gray-400 hover:text-[#F7931E] transition-colors text-sm">
                Project Gallery
              </a>
              <a href="/about" className="block text-gray-400 hover:text-[#F7931E] transition-colors text-sm">
                Workshop Tour
              </a>
              <a href="/locations" className="block text-gray-400 hover:text-[#F7931E] transition-colors text-sm">
                Visit Our Workshop
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-[#F7931E] transition-colors text-sm">
                Get Custom Quote
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Our Services
              <div className="w-8 h-0.5 bg-[#F7931E] mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li className="text-sm">Precision CNC Cutting</li>
              <li className="text-sm">Custom Scrapbook Elements</li>
              <li className="text-sm">Wood & MDF Cutting</li>
              <li className="text-sm">Acrylic Sheet Processing</li>
              <li className="text-sm">Personalized Designs</li>
              <li className="text-sm">Quick Turnaround Orders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Contact Info
              <div className="w-8 h-0.5 bg-[#F7931E] mt-2"></div>
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:09586660214" 
                className="flex items-start gap-3 text-sm group hover:text-[#F7931E] transition-colors"
              >
                <HiOutlinePhone className="w-4 h-4 mt-0.5 text-[#F7931E] group-hover:scale-110 transition-transform" />
                <span>095866 60214</span>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <HiOutlineMapPin className="w-4 h-4 mt-0.5 text-[#F7931E] flex-shrink-0" />
                <div>
                  <div>Shyamved Industrial Estate,</div>
                  <div>57, Sardar Patel Ring Rd,</div>
                  <div>nr. Gappa garden restaurant,</div>
                  <div>Nana Chiloda, Ahmedabad,</div>
                  <div>Gujarat 382330</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <HiOutlineClock className="w-4 h-4 mt-0.5 text-[#F7931E]" />
                <div>
                  <div className="text-gray-900 font-medium">Open Daily</div>
                  <div>Closes 7 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#2D3748] to-[#F7931E] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Ready to Start Your Custom Project?</h3>
              <p className="text-gray-200">Get precision CNC cutting for your scrapbooking needs</p>
            </div>
            <a
              href="tel:09586660214"
              className="bg-white text-[#2D3748] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <HiOutlinePhone className="w-5 h-5" />
              Call Now for Quote
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Kala Carv CNC. All rights reserved. | Precision CNC Cutting Services in Ahmedabad, Gujarat
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-gray-400 hover:text-[#F7931E] transition-colors flex items-center gap-1"
            >
              Back to top
              <HiOutlineArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
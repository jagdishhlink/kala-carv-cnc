'use client';

import Link from 'next/link'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineArrowRight, HiOutlineStar } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Brand Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Kala Carv CNC</h2>
          <p className="text-gray-300 text-lg mb-4">Precision CNC Cutting for Perfect Scrapbooks</p>
          <div className="w-24 h-1 bg-[#F39C12] rounded"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">About Our Workshop</h3>
              <div className="w-8 h-0.5 bg-[#F39C12] mb-4"></div>
              <p className="text-gray-400 leading-relaxed">
                Advanced CNC technology meets creative passion in Ahmedabad's premier scrapbooking workshop. Professional precision for every project.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full text-sm">
                <HiOutlineStar className="w-4 h-4 text-[#F39C12]" />
                <span>4.3★ Rated</span>
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm">
                Industrial Grade
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="w-8 h-0.5 bg-[#F39C12] mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Products & Materials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Visit Workshop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <div className="w-8 h-0.5 bg-[#F39C12] mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=laser-cut" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Laser Cut Materials
                </Link>
              </li>
              <li>
                <Link href="/products?category=engraved" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Engraved Pieces
                </Link>
              </li>
              <li>
                <Link href="/products?category=custom" className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200">
                  Custom Orders
                </Link>
              </li>
              <li className="text-gray-400">CNC Precision Cutting</li>
              <li className="text-gray-400">Scrapbook Supplies</li>
              <li className="text-gray-400">Creative Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="w-8 h-0.5 bg-[#F39C12] mb-4"></div>
            <div className="space-y-4">
              
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <HiOutlinePhone className="w-5 h-5 text-[#F39C12] mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:09586660214" 
                    className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200 font-medium"
                  >
                    095866 60214
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <HiOutlineMapPin className="w-5 h-5 text-[#F39C12] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <HiOutlineClock className="w-5 h-5 text-[#F39C12] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="font-medium text-white">Open Daily</div>
                  <div className="text-sm">Closes 7 PM</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#F39C12] rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
              <p className="text-gray-200">Get a custom quote for precision CNC cutting today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:09586660214"
                className="inline-flex items-center px-6 py-3 bg-white text-[#2C3E50] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#2C3E50] transition-colors duration-200"
              >
                Get Quote
                <HiOutlineArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Kala Carv CNC. All rights reserved. | Precision crafting in Ahmedabad, Gujarat.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-[#2C3E50] transition-colors duration-200 text-sm font-medium"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
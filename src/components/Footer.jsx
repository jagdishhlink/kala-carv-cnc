'use client';

import Link from 'next/link'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiOutlineEnvelope, HiOutlineArrowRight } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-[#2C5530] text-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Brand Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#2C5530] mb-2">Kala Carv CNC</h2>
          <p className="text-lg text-gray-600 mb-4">Precision CNC Cutting for Crafters</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2C5530] to-[#E67E22]"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About & Trust */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <div className="w-8 h-0.5 bg-[#2C5530] mb-4"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional CNC cutting services tailored specifically for scrapbooking enthusiasts and craft professionals in Ahmedabad.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/50 px-3 py-1.5 rounded-full text-sm font-medium text-[#2C5530]">
                4.3★ Rated
              </div>
              <div className="bg-white/50 px-3 py-1.5 rounded-full text-sm font-medium text-[#2C5530]">
                Industrial Estate
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="w-8 h-0.5 bg-[#2C5530] mb-4"></div>
            <div className="space-y-3">
              <Link href="/products" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Products
              </Link>
              <Link href="/workshops" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Workshops
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                About Us
              </Link>
              <Link href="/locations" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Visit Us
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <div className="w-8 h-0.5 bg-[#2C5530] mb-4"></div>
            <div className="space-y-3">
              <Link href="/products?category=cnc" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Custom CNC Cutting
              </Link>
              <Link href="/products?category=paper" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Paper & Cardstock
              </Link>
              <Link href="/products?category=tools" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Precision Tools
              </Link>
              <Link href="/workshops" className="block text-gray-600 hover:text-[#2C5530] transition-colors">
                Craft Workshops
              </Link>
              <div className="text-gray-600">
                Design Consultation
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <div className="w-8 h-0.5 bg-[#2C5530] mb-4"></div>
            <div className="space-y-4">
              <a href="tel:09586660214" className="flex items-center text-gray-600 hover:text-[#2C5530] transition-colors group">
                <HiOutlinePhone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>095866 60214</span>
              </a>
              <div className="flex items-start text-gray-600">
                <HiOutlineMapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <HiOutlineClock className="h-5 w-5 mr-3" />
                <span>Open daily until 7 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#2C5530] to-[#E67E22] rounded-3xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Precision Project?</h3>
              <p className="text-white/90">Get expert consultation and custom CNC cutting services</p>
            </div>
            <a
              href="tel:09586660214"
              className="bg-white text-[#2C5530] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center group"
            >
              <HiOutlinePhone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Call Now for Quote
              <HiOutlineArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-[#2C5530]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm mb-4 lg:mb-0">
              © 2024 Kala Carv CNC. All rights reserved. Precision crafting in Ahmedabad, Gujarat.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-600 hover:text-[#2C5530] transition-colors text-sm font-medium flex items-center group"
            >
              Back to top
              <HiOutlineArrowRight className="h-4 w-4 ml-1 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
import Link from 'next/link'
import { HiOutlinePhone, HiOutlineMapPin, HiOutlineClock } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Kala Carv CNC</h3>
              <div className="w-16 h-1 bg-[#F39C12] rounded-full mt-2"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Precision CNC cutting services for scrapbookers and craft enthusiasts. 
              Professional quality with artisan care.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/products" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Products
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-200">
                CNC Services
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <HiOutlineMapPin className="w-5 h-5 text-[#F39C12] mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, 
                  nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <HiOutlineClock className="w-5 h-5 text-[#F39C12] flex-shrink-0" />
                <span className="text-gray-400 text-sm">Open · Closes 7 pm</span>
              </div>
              
              <div className="pt-2">
                <span className="inline-flex items-center bg-[#F39C12]/10 text-[#F39C12] text-sm px-3 py-1 rounded-full">
                  ⭐ 4.3/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Kala Carv CNC. All rights reserved. Professional CNC cutting services in Ahmedabad.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
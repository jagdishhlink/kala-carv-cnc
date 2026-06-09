import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Kala Carv CNC</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Precision CNC cutting services for scrapbooking enthusiasts and crafters in Ahmedabad.
            </p>
            <div className="w-16 h-1 bg-[#2C3E50] rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  CNC Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white mb-1">Address:</p>
                <p className="text-sm leading-relaxed">
                  Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Hours:</p>
                <p className="text-sm">Open until 7 PM daily</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Rating:</p>
                <p className="text-sm">4.3/5 ⭐ (7 reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Kala Carv CNC. All rights reserved. Professional CNC cutting services in Ahmedabad.
          </p>
        </div>
      </div>
    </footer>
  )
}
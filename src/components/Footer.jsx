import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pb-20 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold mb-3">Kala Carv CNC</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Precision CNC cutting for crafters and scrapbooking enthusiasts in Ahmedabad.
            </p>
            <div className="w-16 h-1 bg-[#E74C3C] rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                href="/" 
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400 leading-relaxed">
                Shyamved Industrial Estate, 57, Sardar Patel Ring Rd, nr. Gappa garden restaurant, Nana Chiloda, Ahmedabad, Gujarat 382330
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-white">Hours:</span> Open until 7 PM
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-white">Rating:</span> 4.3/5 (7 reviews)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Kala Carv CNC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineBars3, HiOutlineXMark, HiOutlinePhone } from 'react-icons/hi2';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'CNC Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C3E50] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#2C3E50] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KC</span>
            </div>
            <div>
              <div className="text-gray-900 font-bold text-lg sm:text-xl">Kala Carv CNC</div>
              <div className="text-[#2C3E50] text-xs sm:text-sm font-medium">Precision Cutting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActiveLink(item.href)
                    ? 'bg-[#2C3E50] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#2C3E50] transition-colors"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#34495e] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-700 hover:text-[#2C3E50] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="py-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? 'bg-[#2C3E50] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 py-3 border-t border-gray-200">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center w-full bg-[#2C3E50] text-white py-3 rounded-lg font-medium hover:bg-[#34495e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiOutlinePhone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'CNC Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C3E50] shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#2C3E50] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base">KC</span>
            </div>
            <div>
              <div className="text-lg lg:text-xl font-bold text-gray-900">Kala Carv CNC</div>
              <div className="text-xs lg:text-sm text-[#2C3E50] font-medium">Precision Cutting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#2C3E50] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#2C3E50] text-white px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-medium rounded-lg hover:bg-[#34495e] transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full px-4 py-3.5 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#2C3E50] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-[#2C3E50] text-white text-center py-4 rounded-lg font-medium hover:bg-[#34495e] transition-colors"
                >
                  Get Custom Quote Today
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
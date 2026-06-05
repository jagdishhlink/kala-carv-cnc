'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlinePhone, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'Contact', href: '/contact' },
    { label: 'Gallery', href: '/gallery' },
  ]

  const isActive = (href) => pathname === href

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-[#F39C12]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-14 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#2C3E50] rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div className="absolute inset-0 w-10 h-10 bg-[#1a1a1a] rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300 opacity-80"></div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white">Kala Carv CNC</h1>
              <p className="text-sm text-[#F39C12] font-medium">Precision Crafting</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#2C3E50] text-white shadow-lg'
                    : 'text-white hover:bg-[#1a1a1a]/10 hover:text-[#F39C12]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:09586660214"
              className="flex items-center space-x-2 text-white hover:text-[#F39C12] transition-colors duration-200"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="text-sm font-medium">095866 60214</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#2C3E50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2C3E50]/90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Custom Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#F39C12] transition-colors duration-200"
          >
            {isMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-[#F39C12]/20">
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-[#2C3E50] text-white shadow-lg'
                        : 'text-white hover:bg-[#1a1a1a]/10 hover:text-[#F39C12]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="pt-4 border-t border-[#F39C12]/20 space-y-3">
                <a
                  href="tel:09586660214"
                  className="flex items-center space-x-3 px-4 py-3 text-white hover:text-[#F39C12] transition-colors duration-200"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  <span className="font-medium">095866 60214</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-[#2C3E50] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#2C3E50]/90 transition-colors duration-200"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
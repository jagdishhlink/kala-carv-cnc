'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlinePhone, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'About', href: '/about' },
    { label: 'Visit Us', href: '/locations' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4E6D7] shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-[#2C5530] tracking-tight">
                Kala Carv
              </span>
              <span className="text-xs lg:text-sm font-medium text-[#E67E22] -mt-1">
                CNC PRECISION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'bg-[#2C5530] text-white shadow-md'
                    : 'text-gray-800 hover:bg-[#2C5530]/10 hover:text-[#2C5530]'
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
              className="flex items-center text-sm font-medium text-gray-800 hover:text-[#2C5530] transition-colors"
            >
              <HiOutlinePhone className="w-4 h-4 mr-2" />
              095866 60214
            </a>
            <Link
              href="/contact"
              className="bg-[#2C5530] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#E67E22] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-[#2C5530]/10 hover:text-[#2C5530] transition-colors"
          >
            {isMobileMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="bg-[#F4E6D7] border-t border-[#2C5530]/10 px-4 py-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'bg-[#2C5530] text-white shadow-md'
                    : 'text-gray-800 hover:bg-[#2C5530]/10 hover:text-[#2C5530]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact & CTA */}
          <div className="mt-6 pt-4 border-t border-[#2C5530]/10 space-y-3">
            <a
              href="tel:09586660214"
              className="flex items-center justify-center w-full px-4 py-3 bg-white rounded-lg text-gray-800 hover:bg-gray-50 transition-colors border border-[#2C5530]/20"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2 text-[#2C5530]" />
              <span className="font-medium">095866 60214</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#2C5530] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#E67E22] transition-all duration-200 shadow-md"
            >
              Get Your Custom Cut Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
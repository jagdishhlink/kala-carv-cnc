'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlinePhone, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Materials', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Workshop', href: '/about' },
    { name: 'Visit Us', href: '/locations' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E53E3E] border-b border-red-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-xl lg:text-2xl font-bold text-gray-900">Kala Carv</span>
              <span className="text-lg lg:text-xl font-semibold text-[#F7931E] ml-2">CNC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#2D3748] text-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:095866 60214"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="text-sm font-medium">095866 60214</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#2D3748] hover:bg-[#2D3748]/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Custom Quote Today
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-[#E53E3E] border-t border-red-700/20">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#2D3748] text-gray-900'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-4 border-t border-red-700/20 space-y-3">
              <a
                href="tel:095866 60214"
                className="flex items-center space-x-2 px-4 py-3 text-white/90 hover:text-white transition-colors"
              >
                <HiOutlinePhone className="w-4 h-4" />
                <span className="text-sm font-medium">095866 60214</span>
              </a>
              <Link
                href="/contact"
                className="block bg-[#2D3748] hover:bg-[#2D3748]/90 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Custom Quote Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlinePhone, HiOutlineArrowRight } from 'react-icons/hi2'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Location', href: '/locations' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] shadow-lg border-b border-[#C7956D]/20">
      {/* Laser-cut pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(45, 74, 62, 0.1) 10px,
            rgba(45, 74, 62, 0.1) 12px
          ), repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(45, 74, 62, 0.05) 20px,
            rgba(45, 74, 62, 0.05) 22px
          )`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <div className="relative">
                <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                  Kala Carv CNC
                </h1>
                <div className="text-xs lg:text-sm text-[#2D4A3E] font-medium mt-1">
                  Precision Cutting
                </div>
                {/* Geometric accent */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 border-2 border-[#2D4A3E] rotate-45 opacity-60 group-hover:rotate-90 transition-transform duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'bg-[#2D4A3E] text-white shadow-lg'
                      : 'text-white hover:text-[#2D4A3E] hover:bg-[#1a1a1a]/10'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Geometric hover effect */}
                  <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#2D4A3E] transition-all duration-300 ${
                    isActive ? 'border-[#2D4A3E]' : ''
                  }`}></div>
                </Link>
              )
            })}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:09586660214"
              className="flex items-center space-x-2 text-white hover:text-[#2D4A3E] transition-colors duration-300"
            >
              <HiOutlinePhone className="w-4 h-4" />
              <span className="text-sm font-medium">095866 60214</span>
            </a>
            <Link
              href="/contact"
              className="relative bg-[#2D4A3E] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#2D4A3E]/90 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Quote</span>
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Geometric animation background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C7956D] to-[#2D4A3E] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-[#1a1a1a]/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#1a1a1a]/20 transition-all duration-300"
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-5 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#1a1a1a] border-t border-[#C7956D]/20">
          <div className="px-4 py-6 space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#2D4A3E] text-white'
                      : 'text-white hover:bg-[#1a1a1a]/10'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            
            {/* Mobile Contact */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:09586660214"
                className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#1a1a1a]/10 rounded-lg transition-colors duration-300"
              >
                <HiOutlinePhone className="w-5 h-5" />
                <span className="font-medium">095866 60214</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center space-x-2 bg-[#2D4A3E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2D4A3E]/90 transition-all duration-300"
              >
                <span>Get Custom Quote</span>
                <HiOutlineArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HiOutlinePhone } from 'react-icons/hi2'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kala Carv CNC - Professional Cutting Services Ahmedabad',
  description: 'Professional CNC and laser cutting services for scrapbooking in Ahmedabad. Custom designs, precision cuts, quality materials. Call 095866 60214 today.',
  keywords: 'CNC cutting, laser cutting, scrapbooking supplies, custom designs, precision cutting, craft materials, Ahmedabad',
  openGraph: {
    title: 'Kala Carv CNC - Professional Cutting Services Ahmedabad',
    description: 'Professional CNC and laser cutting services for scrapbooking in Ahmedabad. Custom designs, precision cuts, quality materials.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://kalacarvcnc.com',
    siteName: 'Kala Carv CNC',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Kala Carv CNC Professional Cutting Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kala Carv CNC - Professional Cutting Services Ahmedabad',
    description: 'Professional CNC and laser cutting services for scrapbooking in Ahmedabad. Custom designs, precision cuts, quality materials.',
    images: ['/images/business-1.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/919586660214"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Contact via WhatsApp"
        >
          <HiOutlinePhone className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </body>
    </html>
  )
}
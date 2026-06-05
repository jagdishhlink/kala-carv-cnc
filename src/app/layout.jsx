import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HiOutlinePhone } from 'react-icons/hi2'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kala Carv CNC - Precision Scrapbooking & Custom Cutting Ahmedabad',
  description: 'Professional CNC cutting services & scrapbooking supplies in Ahmedabad. Custom designs, precision cuts, quality materials. Open until 7 PM daily.',
  keywords: 'CNC cutting, scrapbooking supplies, custom designs, precision cutting, craft materials, Ahmedabad crafting, industrial cutting, hobby supplies',
  openGraph: {
    title: 'Kala Carv CNC - Precision Scrapbooking & Custom Cutting Ahmedabad',
    description: 'Professional CNC cutting services & scrapbooking supplies in Ahmedabad. Custom designs, precision cuts, quality materials. Open until 7 PM daily.',
    url: 'https://kalacarvcnc.com',
    siteName: 'Kala Carv CNC',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Kala Carv CNC Precision Cutting Services'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kala Carv CNC - Precision Scrapbooking & Custom Cutting Ahmedabad',
    description: 'Professional CNC cutting services & scrapbooking supplies in Ahmedabad. Custom designs, precision cuts, quality materials. Open until 7 PM daily.',
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
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kalacarvcnc.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
          
          {/* WhatsApp Float Button */}
          <Link 
            href="https://wa.me/919586660214" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
            aria-label="Contact us on WhatsApp"
          >
            <HiOutlinePhone className="w-6 h-6 text-white" />
          </Link>
        </div>
      </body>
    </html>
  )
}
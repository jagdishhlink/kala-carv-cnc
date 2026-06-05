import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HiOutlinePhone } from 'react-icons/hi2'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kala Carv CNC - Precision Cutting for Scrapbooking | Ahmedabad',
  description: 'Professional CNC cutting services for scrapbooking & crafting in Ahmedabad. Custom designs, precision cuts, quick turnaround. Call 095866 60214',
  keywords: 'CNC cutting, scrapbooking supplies, custom designs, precision cutting, crafting materials, Ahmedabad crafting, intricate patterns',
  openGraph: {
    title: 'Kala Carv CNC - Precision Cutting for Scrapbooking | Ahmedabad',
    description: 'Professional CNC cutting services for scrapbooking & crafting in Ahmedabad. Custom designs, precision cuts, quick turnaround.',
    url: 'https://kalacarvcnc.com',
    siteName: 'Kala Carv CNC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Kala Carv CNC - Precision Cutting Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kala Carv CNC - Precision Cutting for Scrapbooking',
    description: 'Professional CNC cutting services for scrapbooking & crafting in Ahmedabad.',
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
    canonical: 'https://kalacarvcnc.com',
  },
  category: 'business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white antialiased flex flex-col min-h-screen`}>
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
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Contact us on WhatsApp"
        >
          <div className="bg-[#2C5530] hover:bg-[#E67E22] text-white p-4 rounded-full shadow-lg shadow-[#2C5530]/25 transition-all duration-300 transform hover:scale-110">
            <HiOutlinePhone className="w-6 h-6" />
          </div>
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat with us
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </a>
      </body>
    </html>
  )
}
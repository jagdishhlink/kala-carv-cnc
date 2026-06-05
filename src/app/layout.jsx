import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HiOutlinePhone } from 'react-icons/hi2'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kala Carv CNC - Custom Scrapbooking Supplies Ahmedabad',
  description: 'Precision CNC cutting for scrapbooking in Ahmedabad. Custom designs, quality materials, quick turnaround. Call 095866 60214 for quote.',
  keywords: 'CNC cutting, scrapbooking supplies, custom designs, precision cutting, personalized gifts, craft materials, Ahmedabad scrapbooking, laser cutting, handmade crafts, photo albums',
  openGraph: {
    title: 'Kala Carv CNC - Precision CNC Cutting for Scrapbookers',
    description: 'Transform your memories into beautiful keepsakes with our custom CNC-cut scrapbooking supplies and personalized designs in Ahmedabad.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kalacarvcnc.com',
    siteName: 'Kala Carv CNC',
    images: [
      {
        url: '/images/business-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Precision CNC cutting for scrapbooking projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kala Carv CNC - Custom Scrapbooking Supplies Ahmedabad',
    description: 'Precision CNC cutting for scrapbooking in Ahmedabad. Custom designs, quality materials, quick turnaround.',
    images: ['/images/business-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
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
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Contact us on WhatsApp"
        >
          <HiOutlinePhone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </body>
    </html>
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineClock, 
  HiOutlineStar, 
  HiOutlineCheckCircle, 
  HiOutlineArrowRight,
  HiOutlineChevronDown,
  HiOutlineWrench,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineTruck
} from 'react-icons/hi2'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqItems = [
    {
      question: "What types of materials can you cut with CNC?",
      answer: "We can precision cut various materials including cardstock, wood, acrylic, and specialty scrapbooking materials. Our CNC equipment handles both thin and thick materials for diverse project needs."
    },
    {
      question: "Do you create custom designs for scrapbooking?", 
      answer: "Yes, we specialize in custom CNC cutting based on your specific designs and requirements. Bring your ideas and we'll help create precision-cut pieces for your scrapbooking projects."
    },
    {
      question: "What are your operating hours and location?",
      answer: "We're open daily until 7 PM, located at Shyamved Industrial Estate near Gappa Garden Restaurant on Sardar Patel Ring Road, Nana Chiloda, Ahmedabad."
    },
    {
      question: "Can beginners get help with their projects?",
      answer: "Absolutely! We welcome crafters of all skill levels and provide guidance on design optimization for CNC cutting. Our team helps ensure your projects turn out exactly as envisioned."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#E67E22] via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-1.jpg"
            alt="Precision CNC cutting workspace"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-[#2C3E50] to-[#F39C12] rounded-full blur-3xl opacity-30 animate-bounce"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Trust Indicators - Floating Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <HiOutlineStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-semibold">4.3</span>
                </div>
                <span className="text-white/90 text-sm">7 Reviews</span>
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-white/90 text-sm">Professional CNC</span>
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-2">
                <HiOutlineMapPin className="w-4 h-4 text-[#F39C12]" />
                <span className="text-white/90 text-sm">Ahmedabad</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] -tracking-wider text-white">
              Precision
              <span className="block bg-gradient-to-r from-[#F39C12] via-yellow-300 to-[#E67E22] bg-clip-text text-transparent">
                CNC Cutting
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl">
                for Perfect
                <br />
                Scrapbooks
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed">
              Transform your creative vision into reality with professional-grade CNC cutting services and premium scrapbooking supplies in Ahmedabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="bg-[#2C3E50] hover:bg-[#34495E] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group">
                Get Custom Quote Today
                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:09586660214" 
                className="border-2 border-white/30 hover:border-[#F39C12] text-white hover:bg-[#F39C12]/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <HiOutlinePhone className="w-5 h-5" />
                Call 095866 60214
              </a>
            </div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative">
            <div className="grid gap-6">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-2xl p-4 w-fit mb-4">
                  <HiOutlineWrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Custom CNC Cutting</h3>
                <p className="text-white/80">Precision cuts for any scrapbooking project</p>
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 ml-8">
                <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-2xl p-4 w-fit mb-4">
                  <HiOutlineSparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Premium Materials</h3>
                <p className="text-white/80">Quality supplies for professional results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Engine */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl font-bold text-[#2C3E50] mb-2">4.3</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4].map(i => (
                  <HiOutlineStar key={i} className="w-5 h-5 text-[#F39C12] fill-current" />
                ))}
                <HiOutlineStar className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-gray-600 text-sm">Google Reviews</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl font-bold text-[#2C3E50] mb-2">100+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl font-bold text-[#2C3E50] mb-2">7</div>
              <div className="text-gray-600 text-sm">Days a Week</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl font-bold text-[#2C3E50] mb-2">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 pt-16 border-t border-gray-200">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-lg border">
              <HiOutlineShieldCheck className="w-6 h-6 text-[#F39C12]" />
              <span className="text-gray-700 font-medium">Professional Equipment</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-lg border">
              <HiOutlineMapPin className="w-6 h-6 text-[#F39C12]" />
              <span className="text-gray-700 font-medium">Convenient Location</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-lg border">
              <HiOutlineClock className="w-6 h-6 text-[#F39C12]" />
              <span className="text-gray-700 font-medium">Open Until 7 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#F39C12]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
              Precision Crafting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom laser cutting to premium scrapbooking supplies, we provide everything you need for professional-quality crafting projects. Our CNC technology delivers precision cuts that elevate your creative work to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#F39C12]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F39C12]/5 to-[#E67E22]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-2xl p-4 w-fit mb-6">
                  <HiOutlineWrench className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#2C3E50] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Custom CNC Cutting</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Precision cutting services for cardstock, wood, acrylic, and specialty materials. Perfect for intricate scrapbooking designs and professional projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Custom design consultation
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Multiple material options
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Industrial precision
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#F39C12]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/5 to-[#34495E]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-2xl p-4 w-fit mb-6">
                  <HiOutlineSparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Premium Supplies</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Quality scrapbooking materials and craft supplies. From specialty papers to professional-grade tools for your creative projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Quality materials
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Wide selection
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Professional tools
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#F39C12]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E67E22]/5 to-[#F39C12]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-r from-[#E67E22] to-[#F39C12] rounded-2xl p-4 w-fit mb-6">
                  <HiOutlineBolt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Design Consultation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Expert guidance for project planning and design optimization. We help bring your creative vision to life with professional advice.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Creative consultation
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Project optimization
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#F39C12]" />
                    Beginner friendly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#2C3E50]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-7.jpg"
                  alt="Professional CNC cutting workspace"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
              {/* Overlapping Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-2xl p-3">
                    <HiOutlineUserGroup className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2C3E50]">100+</div>
                    <div className="text-gray-600 text-sm">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
                  Why Choose Kala Carv CNC?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kala Carv CNC combines advanced technology with creative passion to serve Ahmedabad's crafting community. Located in the heart of Shyamved Industrial Estate, we specialize in precision CNC cutting services that bring your scrapbooking projects to life.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-xl p-3 flex-shrink-0">
                    <HiOutlineWrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Professional Equipment</h3>
                    <p className="text-gray-600">State-of-the-art CNC equipment ensures every cut is perfect for your projects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-xl p-3 flex-shrink-0">
                    <HiOutlineMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Convenient Location</h3>
                    <p className="text-gray-600">Easy to find near Gappa Garden Restaurant on Sardar Patel Ring Road.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-r from-[#E67E22] to-[#F39C12] rounded-xl p-3 flex-shrink-0">
                    <HiOutlineSparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Custom Solutions</h3>
                    <p className="text-gray-600">Personalized approach for both hobbyists and professional crafters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
              Precision Crafting Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the quality and precision of our CNC cutting work. From intricate designs to custom projects, every piece showcases our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-4.jpg"
                alt="Custom scrapbook cutting project"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 lg:row-span-2 bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-6.jpg"
                alt="Precision cut materials showcase"
                width={400}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-8.jpg"
                alt="CNC cutting process"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            {/* Row 2 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-3.jpg"
                alt="Custom design consultation"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-10.jpg"
                alt="Professional crafting workspace"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#E67E22] to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <Image
            src="/images/business-5.jpg"
            alt="Happy customer testimonials"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
        </div>

        <div className="relative container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real feedback from satisfied customers who trust Kala Carv CNC for their precision cutting needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Featured */}
            <div className="md:col-span-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <HiOutlineStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-white leading-relaxed mb-6 font-medium">
                "The <span className="bg-gradient-to-r from-[#F39C12] to-yellow-300 bg-clip-text text-transparent font-bold">precision cutting quality</span> exceeded my expectations for my wedding scrapbook project"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Priya S.</div>
                  <div className="text-white/70 text-sm">Verified Customer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4].map(i => (
                  <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <HiOutlineStar className="w-5 h-5 text-gray-400" />
              </div>
              <blockquote className="text-lg text-white leading-relaxed mb-4">
                "Great location and <span className="text-[#F39C12] font-semibold">professional service</span> for all my crafting needs"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Rahul M.</div>
                  <div className="text-white/70 text-xs">Regular Customer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-white leading-relaxed mb-4">
                "Perfect <span className="text-[#F39C12] font-semibold">custom designs</span> that brought my creative vision to life"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#E67E22] to-[#F39C12] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Anita K.</div>
                  <div className="text-white/70 text-xs">Design Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#F39C12]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
              Our Precision Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, our streamlined process ensures your project receives the precision and care it deserves.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F39C12] to-[#E67E22] rounded-full hidden lg:block"></div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right lg:pr-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-2xl text-white text-2xl font-bold mb-6 lg:ml-auto">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Design Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Share your creative vision with us. We'll discuss materials, dimensions, and design optimization for perfect CNC cutting results.
                  </p>
                </div>
                <div className="lg:w-1/2 lg:pl-16">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/business-2.jpg"
                      alt="Design consultation process"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 lg:text-left lg:pl-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-2xl text-white text-2xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Precision Cutting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our professional CNC equipment brings your design to life with industrial-grade precision and clean, perfect cuts every time.
                  </p>
                </div>
                <div className="lg:w-1/2 lg:pr-16">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/business-8.jpg"
                      alt="CNC precision cutting"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right lg:pr-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E67E22] to-[#F39C12] rounded-2xl text-white text-2xl font-bold mb-6 lg:ml-auto">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Quality Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Receive your perfectly cut materials ready for your scrapbooking project, backed by our quality guarantee and ongoing support.
                  </p>
                </div>
                <div className="lg:w-1/2 lg:pl-16">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/business-3.jpg"
                      alt="Quality delivery and support"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our CNC cutting services and scrapbooking supplies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-[#2C3E50]">{item.question}</span>
                  <HiOutlineChevronDown 
                    className={`w-6 h-6 text-[#F39C12] transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-500 ${
                  openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#F39C12]/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#E67E22]/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative container mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Bring Your
            <span className="block bg-gradient-to-r from-[#F39C12] via-yellow-300 to-[#E67E22] bg-clip-text text-transparent">
              Creative Vision to Life?
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join hundreds of satisfied customers who trust Kala Carv CNC for precision cutting and quality scrapbooking supplies. Get your custom quote today!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-[#F39C12] hover:bg-[#E67E22] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center gap-3 group">
              Get Custom Quote Today
              <HiOutlineArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <a 
              href="tel:09586660214" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-[#F39C12] text-white hover:bg-[#F39C12]/20 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 flex items-center gap-3"
            >
              <HiOutlinePhone className="w-6 h-6" />
              Call 095866 60214
            </a>

            <a 
              href="https://wa.me/919586660214" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
            >
              <HiOutlineTruck className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.3★</div>
              <div className="text-white/70 text-sm">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">7</div>
              <div className="text-white/70 text-sm">Days Open</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/70 text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
              Visit Our Workshop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located conveniently in Ahmedabad's Shyamved Industrial Estate. Open 7 days a week for your convenience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-xl p-3 flex-shrink-0">
                  <HiOutlinePhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Call Us</h3>
                  <a 
                    href="tel:09586660214" 
                    className="text-gray-600 hover:text-[#F39C12] transition-colors text-lg"
                  >
                    095866 60214
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Click to call directly</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-xl p-3 flex-shrink-0">
                  <HiOutlineMapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shyamved Industrial Estate, 57, Sardar Patel Ring Rd,<br />
                    nr. Gappa garden restaurant, Nana Chiloda,<br />
                    Ahmedabad, Gujarat 382330
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-[#E67E22] to-[#F39C12] rounded-xl p-3 flex-shrink-0">
                  <HiOutlineClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Open Daily Until 7 PM
                  </p>
                  <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Currently Open
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-9.jpg"
                  alt="Kala Carv CNC workshop location map"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl">
                    <HiOutlineMapPin className="w-8 h-8 text-[#F39C12] mx-auto mb-2" />
                    <p className="text-[#2C3E50] font-semibold">Near Gappa Garden Restaurant</p>
                    <p className="text-gray-600 text-sm">Sardar Patel Ring Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import Image from 'next/image'
import { HiOutlineBolt, HiOutlineWrench, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineSparkles, HiOutlineCheckCircle } from 'react-icons/hi2'

export default function About() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section with Diagonal Cut */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E53E3E] to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/80" />
        </div>
        
        {/* Geometric Overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F7931E]/10 to-transparent transform skew-x-12 origin-top-right" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <HiOutlineWrench className="w-4 h-4 text-[#F7931E]" />
                <span className="text-sm font-medium">Our Workshop Story</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Where Precision
                <span className="block text-[#F7931E]">Meets Passion</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                Located in Ahmedabad's Shyamved Industrial Estate, Kala Carv CNC combines advanced technology with creative passion.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-900/90">
                  <HiOutlineSparkles className="w-5 h-5 text-[#F7931E]" />
                  <span className="font-medium">4.3★ Rated Workshop</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <HiOutlineShieldCheck className="w-5 h-5 text-[#F7931E]" />
                  <span className="font-medium">Precision Guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/images/business-4.jpg"
                  alt="Modern workshop interior with CNC machines and organized tools"
                  width={600}
                  height={450}
                  className="w-full h-96 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/40 to-transparent" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#F7931E] rounded-2xl transform rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2D3748] rounded-xl transform -rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
              From Vision to Reality
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in precision CNC cutting services for the scrapbooking community, 
              helping crafters bring their unique visions to life.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-[#E53E3E] via-[#F7931E] to-[#2D3748]" />
            
            <div className="space-y-16">
              {/* Timeline Item 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-gray-50 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E53E3E] rounded-xl mb-4">
                      <HiOutlineBolt className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D3748] mb-4">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Started with a passion for precision and a vision to serve Ahmedabad's creative community 
                      with state-of-the-art CNC cutting technology.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#E53E3E] rounded-full border-4 border-white shadow-lg" />
                
                <div className="flex-1 pl-8">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-48">
                    <Image
                      src="/images/business-7.jpg"
                      alt="Industrial workshop exterior with modern signage"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-48">
                    <Image
                      src="/images/business-9.jpg"
                      alt="Detailed close-up of CNC cutting path creating intricate pattern"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#F7931E] rounded-full border-4 border-white shadow-lg" />
                
                <div className="flex-1 pl-8">
                  <div className="bg-gray-50 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F7931E] rounded-xl mb-4">
                      <HiOutlineWrench className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Equipment Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our state-of-the-art equipment ensures every cut is perfect, whether you're creating 
                      custom frames, intricate decorative elements, or personalized gift items.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-gray-50 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2D3748] rounded-xl mb-4">
                      <HiOutlineSparkles className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Community Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Today we're proud to be Ahmedabad's trusted CNC specialists, serving crafters 
                      throughout Gujarat with precision and creativity.
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#2D3748] rounded-full border-4 border-white shadow-lg" />
                
                <div className="flex-1 pl-8">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-48">
                    <Image
                      src="/images/business-6.jpg"
                      alt="Scrapbooking materials and decorative cut elements arranged artistically"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Virtual Tour */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E53E3E]/10 mb-6">
                <HiOutlineWrench className="w-4 h-4 text-[#E53E3E]" />
                <span className="text-sm font-medium text-[#E53E3E]">Workshop Tour</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
                Inside Our
                <span className="block text-[#F7931E]">Precision Workshop</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Take a virtual journey through our state-of-the-art facility where technology meets craftsmanship. 
                Every corner is designed for precision, efficiency, and creative excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#E53E3E] mb-2">2000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#F7931E] mb-2">0.1mm</div>
                  <div className="text-sm text-gray-600">Cutting Precision</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#E53E3E] flex-shrink-0" />
                  <span className="text-gray-700">Industrial-grade CNC machines</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#E53E3E] flex-shrink-0" />
                  <span className="text-gray-700">Climate-controlled material storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheckCircle className="w-5 h-5 text-[#E53E3E] flex-shrink-0" />
                  <span className="text-gray-700">Quality control inspection area</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main Workshop Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-4.jpg"
                  alt="Modern workshop interior with CNC machines and organized tools"
                  width={600}
                  height={500}
                  className="w-full h-96 lg:h-[500px] object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/30 to-transparent" />
              </div>

              {/* Floating Workshop Elements */}
              <div className="absolute -top-8 -left-8 transform rotate-12">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl w-32 h-32">
                  <Image
                    src="/images/business-1.jpg"
                    alt="CNC machine cutting intricate wooden design close up"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 transform -rotate-12">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl w-28 h-28">
                  <Image
                    src="/images/business-10.jpg"
                    alt="Artisan examining precision-cut piece with measuring tools"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Geometric Accents */}
              <div className="absolute top-1/4 -right-4 w-12 h-12 bg-[#F7931E] rounded-xl transform rotate-45" />
              <div className="absolute bottom-1/3 -left-3 w-8 h-8 bg-[#E53E3E] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Precision Values Showcase */}
      <section className="py-24 lg:py-32 bg-[#E53E3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Every project reflects our commitment to precision, quality, and creative excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E53E3E] to-[#F7931E] rounded-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <HiOutlineBolt className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F7931E] rounded-full transform group-hover:scale-150 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Precision First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every cut is measured to 0.1mm accuracy using our state-of-the-art CNC equipment 
                  and rigorous quality control processes.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F7931E] to-[#2D3748] rounded-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <HiOutlineSparkles className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E53E3E] rounded-full transform group-hover:scale-150 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Creative Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We combine technical expertise with artistic vision to bring your most 
                  ambitious scrapbooking projects to life.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D3748] to-[#E53E3E] rounded-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <HiOutlineShieldCheck className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F7931E] rounded-full transform group-hover:scale-150 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Quality Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our 4.3-star rating reflects our unwavering commitment to delivering 
                  exceptional results on every single project.
                </p>
              </div>
            </div>
          </div>

          {/* Values Image Showcase */}
          <div className="mt-16 relative">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-64 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/business-5.jpg"
                  alt="Hands holding precisely cut wooden ornamental piece"
                  width={300}
                  height={250}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-gray-900">
                  <div className="text-sm font-medium">Handcrafted Quality</div>
                </div>
              </div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-64 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/business-3.jpg"
                  alt="Detailed wooden cut-out patterns arranged on workshop table"
                  width={300}
                  height={250}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E53E3E]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Intricate Patterns</div>
                </div>
              </div>
              
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-64 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/business-8.jpg"
                  alt="Before and after comparison of raw material to finished cut design"
                  width={300}
                  height={250}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F7931E]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Amazing Transformations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7931E]/10 mb-6">
              <HiOutlineUserGroup className="w-4 h-4 text-[#F7931E]" />
              <span className="text-sm font-medium text-[#F7931E]">Meet Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6">
              Craftsmen Behind
              <span className="block text-[#E53E3E]">Every Perfect Cut</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled artisans combine years of experience with cutting-edge technology 
              to deliver precision results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Team Expertise */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E53E3E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineWrench className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D3748] mb-2">Technical Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our technicians are trained on the latest CNC equipment and stay updated 
                      with industry best practices for precision cutting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7931E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineSparkles className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D3748] mb-2">Creative Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our design team understands scrapbooking aesthetics and helps translate 
                      creative ideas into technically feasible cutting plans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D3748] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOutlineShieldCheck className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D3748] mb-2">Quality Assurance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Every piece undergoes thorough inspection using precision measuring tools 
                      to ensure it meets our exacting standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-96">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                  <Image
                    src="/images/business-10.jpg"
                    alt="Artisan examining precision-cut piece with measuring tools"
                    width={250}
                    height={200}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3748]/40 to-transparent" />
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-32">
                    <Image
                      src="/images/business-1.jpg"
                      alt="CNC machine cutting intricate wooden design close up"
                      width={250}
                      height={120}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-60">
                    <Image
                      src="/images/business-9.jpg"
                      alt="Detailed close-up of CNC cutting path creating intricate pattern"
                      width={250}
                      height={200}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Team Stats Overlay */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E53E3E]">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="absolute -top-6 right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F7931E]">100%</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2D3748] to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Visit our workshop or call us to discuss your next precision cutting project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F7931E] text-white font-semibold rounded-xl hover:bg-[#e8851a] transition-colors duration-300 transform hover:scale-105"
            >
              Get Custom Quote Today
            </a>
            <a 
              href="/gallery" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-900 font-semibold border-2 border-white rounded-xl hover:bg-white hover:text-[#2D3748] transition-all duration-300"
            >
              View Our Gallery
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
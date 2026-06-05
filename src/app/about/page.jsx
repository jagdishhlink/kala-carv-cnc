import Image from 'next/image';
import { HiOutlineWrench, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2';

export default function About() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#E67E22] to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Crafting Excellence Since Day One
              </h1>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Where precision engineering meets creative passion. We're redefining what's possible in the world of custom CNC cutting and scrapbooking supplies.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <HiOutlineStar className="text-3xl text-[#F39C12] mb-3" />
                  <div className="text-3xl font-bold text-white">4.3</div>
                  <div className="text-white/80">Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <HiOutlineUserGroup className="text-3xl text-[#F39C12] mb-3" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/80">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <HiOutlineWrench className="text-3xl text-[#F39C12] mb-3" />
                  <div className="text-3xl font-bold text-white">Daily</div>
                  <div className="text-white/80">Until 7 PM</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform rotate-3 hover:rotate-1 transition-transform duration-700">
                <Image
                  src="/images/business-2.jpg"
                  alt="Kala Carv CNC Workshop"
                  width={600}
                  height={700}
                  className="w-full h-96 lg:h-[500px] object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl shadow-[#E67E22]/20 max-w-xs">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Guaranteed</h3>
                <p className="text-gray-600">Every cut meets industrial standards with artistic flair</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-[#2C3E50]/5 rounded-3xl p-2">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                  <Image
                    src="/images/business-8.jpg"
                    alt="CNC Cutting Process"
                    width={700}
                    height={500}
                    className="w-full h-96 lg:h-[500px] object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="inline-block bg-[#F39C12]/10 rounded-full px-6 py-3 mb-8">
                <span className="text-[#E67E22] font-semibold">Our Story</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Precision Meets Passion
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Kala Carv CNC combines advanced technology with creative passion to serve Ahmedabad's crafting community. Located in the heart of Shyamved Industrial Estate, we specialize in precision CNC cutting services that bring your scrapbooking projects to life.
                </p>
                <p>
                  Our state-of-the-art equipment ensures every cut is perfect, whether you're creating intricate designs or simple shapes. We're committed to helping both hobbyists and professionals achieve their creative goals with quality materials and expert craftsmanship.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-[#2C3E50]">Industrial</div>
                  <div className="text-gray-600">Grade Equipment</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-[#2C3E50]">Custom</div>
                  <div className="text-gray-600">Design Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E67E22]/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#F39C12]/10 rounded-full px-6 py-3 mb-8">
              <span className="text-[#E67E22] font-semibold">Our Values</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project we undertake is guided by our core principles of precision, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#E67E22]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#E67E22] transition-colors duration-300">
                <HiOutlineBolt className="text-3xl text-[#E67E22] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Every cut is executed with mathematical precision, ensuring your projects meet the highest standards of accuracy and finish quality.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#E67E22]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#E67E22] transition-colors duration-300">
                <HiOutlineWrench className="text-3xl text-[#E67E22] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We push the boundaries of what's possible, combining traditional craftsmanship with cutting-edge CNC technology.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="bg-[#E67E22]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#E67E22] transition-colors duration-300">
                <HiOutlineShieldCheck className="text-3xl text-[#E67E22] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Every piece that leaves our workshop undergoes rigorous quality checks to ensure it exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-[#F39C12]/10 rounded-full px-6 py-3 mb-8">
                <span className="text-[#E67E22] font-semibold">Our Process</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                From Vision to Reality
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Our streamlined process ensures your creative vision is transformed into a precision-crafted reality with meticulous attention to every detail.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-[#E67E22] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation & Design</h3>
                    <p className="text-gray-600">We discuss your project requirements and create detailed designs optimized for CNC cutting.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-[#E67E22] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Programming</h3>
                    <p className="text-gray-600">Our technicians program the CNC machines for optimal cutting paths and material efficiency.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-[#E67E22] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Production</h3>
                    <p className="text-gray-600">Each piece is cut with industrial precision and inspected for perfect finish quality.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-[#E67E22] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Final Delivery</h3>
                    <p className="text-gray-600">Your completed project is carefully packaged and ready for your creative assembly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/business-3.jpg"
                      alt="CNC Design Process"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/business-7.jpg"
                      alt="Quality Control"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/business-4.jpg"
                      alt="Precision Cutting"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/business-6.jpg"
                      alt="Final Products"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#F39C12] text-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <HiOutlineCheckCircle className="text-3xl mb-3" />
                <h4 className="font-bold mb-2">Quality Promise</h4>
                <p className="text-sm">100% precision guarantee on every cut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#E67E22] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-white/10 rounded-full px-6 py-3 mb-8">
                <span className="text-white font-semibold">Our Team</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 leading-tight">
                Craftspeople & Engineers
              </h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Our team combines years of traditional crafting experience with modern engineering expertise to deliver exceptional results for every project.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-white/80">Years Combined Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Support Available</div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#2C3E50] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 group"
                >
                  Meet Our Team
                  <HiOutlineArrowRight className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image
                  src="/images/business-5.jpg"
                  alt="Kala Carv CNC Team"
                  width={600}
                  height={500}
                  className="w-full h-96 lg:h-[500px] object-cover"
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl max-w-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Precision-Driven Excellence
                </h3>
                <p className="text-gray-600 mb-6">
                  Every team member is trained in both traditional crafting techniques and modern CNC operation.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-[#E67E22] rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-[#F39C12] rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-[#2C3E50] rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Expert Craftspeople</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900 to-[#2C3E50] rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E67E22]/10 to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Experience the precision and quality that sets Kala Carv CNC apart. Let's discuss your next project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#F39C12] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#E67E22] transition-colors duration-300 group"
                >
                  Get Custom Quote Today
                  <HiOutlineArrowRight className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="tel:09586660214"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
                >
                  Call 095866 60214
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
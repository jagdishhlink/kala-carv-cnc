'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineWrench, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi2'

export default function About() {
  const [activeProcess, setActiveProcess] = useState(0)

  const processSteps = [
    {
      step: "01",
      title: "Design Analysis",
      description: "We analyze your scrapbooking design, optimizing it for CNC precision while maintaining artistic integrity.",
      image: "/images/business-3.jpg",
      icon: HiOutlineSparkles
    },
    {
      step: "02", 
      title: "Material Selection",
      description: "Choose from our curated selection of craft-grade materials, each tested for CNC compatibility.",
      image: "/images/business-2.jpg",
      icon: HiOutlineShieldCheck
    },
    {
      step: "03",
      title: "Precision Cutting",
      description: "Our industrial CNC equipment executes your design with microscopic accuracy and clean edges.",
      image: "/images/business-1.jpg", 
      icon: HiOutlineBolt
    },
    {
      step: "04",
      title: "Quality Finishing",
      description: "Each piece is inspected and finished to meet our exacting standards before delivery.",
      image: "/images/business-5.jpg",
      icon: HiOutlineCheckCircle
    }
  ]

  const values = [
    {
      title: "Industrial Precision",
      description: "Every cut measured to 0.1mm accuracy",
      icon: HiOutlineWrench,
      gradient: "from-[#2C5530] to-[#E67E22]"
    },
    {
      title: "Craft Heritage",
      description: "Honoring Gujarat's textile traditions in digital form",
      icon: HiOutlineSparkles,
      gradient: "from-[#E67E22] to-[#2C5530]"
    },
    {
      title: "Community Focus",
      description: "Supporting Ahmedabad's growing maker movement",
      icon: HiOutlineShieldCheck,
      gradient: "from-[#F4E6D7] to-[#2C5530]"
    }
  ]

  const teamMembers = [
    {
      name: "Technical Director",
      specialty: "CNC Programming & Machine Operations",
      experience: "15+ years in precision manufacturing",
      image: "/images/business-7.jpg",
      skills: ["AutoCAD Mastery", "G-Code Programming", "Material Science"]
    },
    {
      name: "Craft Consultant",
      specialty: "Scrapbooking Design & Finishing",
      experience: "Certified craft instructor with 200+ projects",
      image: "/images/business-6.jpg", 
      skills: ["Design Optimization", "Color Theory", "Layout Composition"]
    },
    {
      name: "Quality Controller",
      specialty: "Precision Measurement & Inspection",
      experience: "Industrial quality standards specialist",
      image: "/images/business-8.jpg",
      skills: ["Measurement Systems", "Quality Assurance", "Process Control"]
    }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Founder Vision Split Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#F4E6D7] via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/400/300')] bg-center bg-cover opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="lg:pr-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#2C5530]/10 rounded-full text-[#2C5530] font-medium mb-8">
                <HiOutlineSparkles className="w-5 h-5 mr-2" />
                Where Precision Meets Creativity
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-none mb-8">
                Crafting the
                <span className="block text-[#E67E22] italic font-light">Future</span>
                of Making
              </h1>
              
              <div className="space-y-6 text-lg text-gray-700 mb-12">
                <p className="leading-relaxed">
                  Kala Carv CNC brings industrial precision to the creative world of scrapbooking and crafting. Located in Ahmedabad's Shyamved Industrial Estate, we specialize in turning your intricate designs into perfectly cut materials.
                </p>
                
                <p className="leading-relaxed">
                  Our state-of-the-art CNC technology ensures every detail of your vision comes to life with professional accuracy, bridging the gap between digital fabrication and traditional paper arts.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#2C5530]/10">
                  <div className="text-3xl font-bold text-[#2C5530] mb-2">0.1mm</div>
                  <div className="text-sm text-gray-600">Cutting Precision</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#2C5530]/10">
                  <div className="text-3xl font-bold text-[#2C5530] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>

              <button className="bg-[#2C5530] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#E67E22] transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-[#2C5530]/20 group">
                Discover Our Process
                <HiOutlineArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl">
                <Image 
                  src="/images/business-9.jpg"
                  alt="Geometric paper art installation showcasing CNC precision"
                  width={600}
                  height={700}
                  unoptimized
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5530]/30 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#E67E22] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#2C5530] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Process Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Precision
              <span className="block text-[#E67E22]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to creation, every step is engineered for perfection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Timeline Navigation */}
            <div className="space-y-6 lg:sticky lg:top-32">
              {processSteps.map((process, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeProcess === index ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveProcess(index)}
                >
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeProcess === index 
                      ? 'border-[#2C5530] bg-[#2C5530]/5 shadow-xl shadow-[#2C5530]/20' 
                      : 'border-gray-200 bg-white hover:border-[#E67E22]/30'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors duration-300 ${
                        activeProcess === index ? 'bg-[#2C5530] text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <process.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#E67E22] mb-1">{process.step}</div>
                        <div className="text-xl font-bold text-gray-900">{process.title}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Image Display */}
            <div className="relative">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl aspect-[4/5]">
                <Image 
                  src={processSteps[activeProcess].image}
                  alt={processSteps[activeProcess].title}
                  width={500}
                  height={600}
                  unoptimized
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5530]/40 via-transparent to-transparent"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold text-[#2C5530] mb-2">{processSteps[activeProcess].step}</div>
                    <div className="text-xl font-semibold text-gray-900">{processSteps[activeProcess].title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Values Bento Grid */}
      <section className="py-32 bg-[#F4E6D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Values That
              <span className="block text-[#2C5530]">Define Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8 h-64 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2C5530] to-[#E67E22] flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Heritage Showcase */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image 
                  src="/images/business-10.jpg"
                  alt="Indian textile patterns translated to paper craft designs"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Gujarat's Craft Heritage Meets Digital Precision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We honor the rich textile and craft traditions of Gujarat by translating intricate patterns and motifs into precise digital cutting templates, preserving cultural artistry through modern technology.
                </p>
                <div className="flex items-center text-[#2C5530] font-semibold">
                  <span>Explore Cultural Collections</span>
                  <HiOutlineArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert Team
              <span className="block text-[#E67E22]">Behind Every Cut</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialists combine technical mastery with creative insight
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-80">
                  <Image 
                    src={member.image}
                    alt={member.specialty}
                    width={400}
                    height={320}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C5530]/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-[#E67E22] font-medium mb-2">{member.specialty}</div>
                  <p className="text-gray-600 text-sm mb-6">{member.experience}</p>
                  
                  <div className="space-y-2">
                    {member.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 text-[#2C5530] mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-[#2C5530] to-[#E67E22] rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Precision Crafting?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Visit our Ahmedabad showroom or call for a consultation on your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2C5530] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Visit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#2C5530] transition-all duration-300 transform hover:scale-105">
                Call 095866 60214
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
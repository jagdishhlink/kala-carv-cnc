'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineWrench, HiOutlineBolt, HiOutlineSparkles, HiOutlineCheckCircle, HiOutlineUserGroup, HiOutlineBuildingStorefront, HiOutlineArrowRight } from 'react-icons/hi2';

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const staggerContainer = { initial: {}, whileInView: { transition: { staggerChildren: 0.1 } }, viewport: { once: true } };
const staggerItem = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function AboutPage() {
  const stats = [
    { number: "100+", label: "Custom Projects", icon: HiOutlineSparkles },
    { number: "4.3", label: "Customer Rating", icon: HiOutlineCheckCircle },
    { number: "24-48h", label: "Turnaround Time", icon: HiOutlineBolt },
    { number: "Professional", label: "CNC Equipment", icon: HiOutlineWrench }
  ];

  const values = [
    {
      icon: HiOutlineWrench,
      title: "Precision Engineering",
      description: "Every cut is made with industrial-grade CNC equipment ensuring perfect accuracy for your scrapbooking projects."
    },
    {
      icon: HiOutlineSparkles,
      title: "Creative Innovation",
      description: "We combine technical expertise with artistic vision to bring your most intricate craft designs to life."
    },
    {
      icon: HiOutlineUserGroup,
      title: "Expert Guidance",
      description: "Our experienced team provides personalized consultation to help you achieve the best results for your projects."
    },
    {
      icon: HiOutlineBuildingStorefront,
      title: "Professional Facility",
      description: "Located in Ahmedabad's industrial estate with state-of-the-art equipment and comprehensive material selection."
    }
  ];

  const milestones = [
    { year: "2020", title: "Workshop Established", description: "Founded Kala Carv CNC in Shyamved Industrial Estate with focus on precision cutting." },
    { year: "2021", title: "Expanded Services", description: "Added custom scrapbooking materials and expanded CNC capabilities for craft enthusiasts." },
    { year: "2022", title: "Community Focus", description: "Became Ahmedabad's go-to destination for professional craft cutting and materials." },
    { year: "2023", title: "Innovation Continues", description: "Continuously upgrading equipment and techniques to serve the crafting community better." }
  ];

  const teamHighlights = [
    {
      title: "Technical Expertise",
      description: "Years of experience in precision manufacturing and CNC operations",
      icon: HiOutlineWrench
    },
    {
      title: "Craft Knowledge",
      description: "Deep understanding of scrapbooking materials and techniques",
      icon: HiOutlineSparkles
    },
    {
      title: "Customer Service",
      description: "Dedicated to helping every customer achieve their creative vision",
      icon: HiOutlineCheckCircle
    }
  ];

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#E74C3C] to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div className="text-center lg:text-left" {...fadeInUp}>
              <div className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
                About Kala Carv CNC
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Precision Meets
                <span className="block bg-gradient-to-r from-[#F39C12] to-yellow-400 bg-clip-text text-transparent">
                  Creativity
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                Where industrial precision combines with artistic passion to create the perfect crafting experience in Ahmedabad.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center bg-[#2C3E50] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                <Image
                  src="/images/business-2.jpg"
                  alt="Kala Carv CNC Workshop"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2C3E50]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2C3E50]/20 transition-all duration-300">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C3E50]" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
                <Image
                  src="/images/business-3.jpg"
                  alt="CNC Precision Work"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="lg:pl-8">
              <div className="w-16 h-1 bg-[#F39C12] rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story: Where Precision Meets Passion
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  Kala Carv CNC specializes in bringing precision to the art of scrapbooking. Located in Ahmedabad's Shyamved Industrial Estate, we combine cutting-edge CNC technology with a passion for crafting.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Our team understands that every scrapbook tells a story, and we're here to help you tell yours with perfectly cut elements and premium materials. What started as a vision to bridge the gap between industrial precision and creative expression has grown into Ahmedabad's premier destination for custom CNC cutting services.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We believe that great crafting requires both technical excellence and creative understanding. That's why our facility combines professional-grade CNC equipment with the personal touch that every crafter deserves.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <div className="inline-flex bg-[#2C3E50]/10 text-[#2C3E50] text-sm px-4 py-2 rounded-full mb-6">
              Our Values
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Drives Our Craft
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on a foundation of precision engineering and creative passion, we deliver exceptional results for every project.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#2C3E50]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2C3E50]/20 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-[#2C3E50]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#E74C3C] to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 lg:mb-16" {...fadeInUp}>
            <div className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Building Excellence Since Day One
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              From a small workshop to Ahmedabad's premier CNC cutting service, our journey reflects our commitment to precision and creativity.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                    <div className="text-2xl font-bold text-[#F39C12] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-16 h-1 bg-[#F39C12] rounded-full mb-6"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expert Team, Exceptional Results
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team combines years of industrial experience with genuine passion for crafting, ensuring every project receives both technical precision and creative insight.
              </p>

              <div className="space-y-6">
                {teamHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-[#2C3E50]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <highlight.icon className="w-5 h-5 text-[#2C3E50]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
                <Image
                  src="/images/business-4.jpg"
                  alt="Professional Workshop"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of precision engineering and creative expertise. Let's bring your scrapbooking visions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center bg-[#F39C12] text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Custom Quote Today
                <HiOutlineArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#2C3E50] transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Browse Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import {
  Heart,
  Shield,
  Award,
  Users,
  Target,
  Lightbulb,
  Stethoscope,
} from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Hospital Beds' },
  { value: 200, suffix: '+', label: 'Expert Doctors' },
  { value: 50, suffix: '+', label: 'Specialities' },
  { value: 25, suffix: '+', label: 'Years of Excellence' },
];

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description:
      'Every patient is treated with dignity, empathy, and personalized attention, ensuring emotional comfort alongside medical treatment.',
  },
  {
    icon: Shield,
    title: 'Clinical Excellence',
    description:
      'Our internationally trained specialists deliver evidence-based treatments with precision, achieving outcomes that rival the best global institutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace cutting-edge technology and pioneering research to provide our patients with the most advanced diagnostic and therapeutic options available.',
  },
  {
    icon: Users,
    title: 'Integrity & Trust',
    description:
      'Transparent communication, ethical practices, and patient-first policies form the foundation of every interaction at MedVista Premier.',
  },
];

const timeline = [
  { year: '1998', title: 'Foundation', description: 'MedVista Premier was established with a vision to transform healthcare in the region.' },
  { year: '2005', title: 'NABH Accreditation', description: 'Achieved National Accreditation Board for Hospitals certification for quality standards.' },
  { year: '2010', title: 'Centre of Excellence', description: 'Launched our Cardiac Sciences and Neuro Sciences centres of excellence.' },
  { year: '2016', title: 'JCI International', description: 'Received Joint Commission International accreditation, joining the global elite.' },
  { year: '2020', title: 'Robotic Surgery', description: 'Introduced da Vinci robotic-assisted surgery and AI-powered diagnostics.' },
  { year: '2024', title: '500+ Beds', description: 'Expanded to a 500-bed multi-speciality facility with a dedicated research wing.' },
];

const leadership = [
  { name: 'Dr. Rajesh Sharma', role: 'Chairman & Chief Cardiologist', specialty: 'Cardiology' },
  { name: 'Dr. Priya Mehta', role: 'Medical Director', specialty: 'Neuro Sciences' },
  { name: 'Dr. Arun Kumar', role: 'Chief of Surgery', specialty: 'Orthopaedics' },
  { name: 'Dr. Sneha Reddy', role: 'Head of Oncology', specialty: 'Oncology' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-0 bg-section-light">
      {/* Stats Bar */}
      <div className="bg-[#0a1628] py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 sm:mt-2 text-gray-400 text-xs sm:text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* About Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-hospital.png"
                  alt="MedVista Premier Hospital Interior"
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-[#0a1628] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">25+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Years of Trust</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                About MedVista Premier
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
                A Legacy of{' '}
                <span className="gradient-text-blue">Medical Excellence</span>
              </h2>
              <div className="section-divider !mx-0 mt-4 sm:mt-6" />
              <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Founded in 1998, MedVista Premier has grown from a modest healthcare facility
                into one of the region&apos;s most trusted multi-speciality hospitals. Our
                commitment to clinical excellence, compassionate care, and medical innovation
                has earned us international recognition and the unwavering trust of over a
                million patients.
              </p>
              <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                With NABH and JCI accreditations, a team of over 200 internationally trained
                specialists, and state-of-the-art infrastructure spanning 500+ beds, we deliver
                healthcare that meets and exceeds global standards.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a853]" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">NABH Accredited</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-400" />
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a853]" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">JCI Certified</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-10 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Our Foundation
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Mission & <span className="gradient-text">Values</span>
              </h2>
              <div className="section-divider mt-4 sm:mt-6" />
            </div>
          </ScrollReveal>

          {/* Mission Statement */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
              <div className="glass-light rounded-2xl p-6 sm:p-8 md:p-12">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4a853] mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0a1628] mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  To provide accessible, world-class healthcare that combines medical excellence with
                  compassionate care, leveraging cutting-edge technology and a patient-first approach
                  to improve lives and build healthier communities.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 card-hover text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#0a1628] to-[#132040] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <val.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4a853]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1628] mb-2 sm:mb-3">{val.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-section-light py-10 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Our Journey
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Milestones of <span className="gradient-text-blue">Excellence</span>
              </h2>
              <div className="section-divider mt-4 sm:mt-6" />
            </div>
          </ScrollReveal>

          {/* Mobile Timeline (vertical) */}
          <div className="md:hidden space-y-4">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#d4a853] border-2 border-white shadow-md shrink-0 mt-1.5" />
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-[#d4a853] to-[#3b82f6] mt-1" />}
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex-1">
                    <span className="text-[#d4a853] font-bold text-sm">{item.year}</span>
                    <h3 className="text-base font-bold text-[#0a1628] mt-0.5">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mt-1">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4a853] via-[#3b82f6] to-[#0d9488]" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <ScrollReveal
                  key={item.year}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  delay={i * 0.1}
                >
                  <div className={`relative md:flex items-center md:py-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
                        <span className="text-[#d4a853] font-bold text-lg">{item.year}</span>
                        <h3 className="text-lg font-bold text-[#0a1628] mt-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4a853] border-4 border-white shadow-lg" />
                    <div className="md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-white py-10 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Leadership
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Guided by <span className="gradient-text">Visionaries</span>
              </h2>
              <div className="section-divider mt-4 sm:mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-b from-[#0a1628] to-[#132040] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center card-hover"
                >
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Stethoscope className="w-7 h-7 sm:w-10 sm:h-10 text-[#0a1628]" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-lg">{person.name}</h3>
                  <p className="text-[#d4a853] text-[10px] sm:text-sm mt-0.5 sm:mt-1">{person.role}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{person.specialty}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

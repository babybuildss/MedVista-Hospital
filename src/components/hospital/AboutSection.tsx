'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
  Award,
  Users,
  Target,
  Lightbulb,
  Stethoscope,
  Building2,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 500, suffix: '+', label: 'Hospital Beds' },
  { value: 200, suffix: '+', label: 'Expert Doctors' },
  { value: 50, suffix: '+', label: 'Specialities' },
  { value: 25, suffix: '+', label: 'Years of Excellence' },
];

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'Every patient is treated with empathy, dignity, and personalized care.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Transparent practices and ethical standards guide every decision we make.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Pioneering medical technology and research for better patient outcomes.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Multidisciplinary teams working together for comprehensive care.',
  },
];

const milestones = [
  { year: '1998', title: 'Foundation', desc: 'MedVista Premier established with a vision for excellence in healthcare.' },
  { year: '2005', title: 'JCI Accreditation', desc: 'Achieved Joint Commission International accreditation for quality standards.' },
  { year: '2010', title: 'Centre of Excellence', desc: 'Launched dedicated Cardiac and Neuro Sciences centres.' },
  { year: '2016', title: 'Digital Transformation', desc: 'Integrated AI-powered diagnostics and robotic surgery systems.' },
  { year: '2020', title: 'Pandemic Leadership', desc: 'Led regional COVID-19 response with 300+ dedicated beds.' },
  { year: '2024', title: 'Global Recognition', desc: 'Ranked among top 50 hospitals worldwide by Newsweek.' },
];

const awards = [
  'JCI Accredited',
  'NABH Certified',
  'NABL Certified Labs',
  'Best Hospital Award 2024',
  'Green Hospital Certification',
  'WHO Recognition',
];

const leadership = [
  { name: 'Dr. Arun Mehta', role: 'Chairman & Chief Mentor', specialty: 'Cardiology' },
  { name: 'Dr. Priya Sharma', role: 'CEO & Managing Director', specialty: 'Healthcare Management' },
  { name: 'Dr. Rajesh Kumar', role: 'Medical Director', specialty: 'Neuro Surgery' },
  { name: 'Dr. Anita Desai', role: 'Director of Research', specialty: 'Oncology' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      {/* Stats Bar */}
      <div className="bg-navy-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-premium-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-hospital.png"
                    alt="MedVista Premier Hospital"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy">25+</div>
                      <div className="text-xs text-gray-500">Years of Trust</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right">
              <div>
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                  About MedVista
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6 leading-tight">
                  A Legacy of Healing,{' '}
                  <span className="text-gradient-blue">A Future of Hope</span>
                </h2>
                <div className="section-divider mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 1998, MedVista Premier has grown from a modest 50-bed
                  facility to a 500+ bed multi-speciality hospital recognized globally
                  for clinical excellence. Our commitment to integrating advanced
                  technology with compassionate care has earned the trust of over
                  2 million patients.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With state-of-the-art infrastructure, internationally trained
                  specialists, and a patient-first philosophy, we continue to set
                  new benchmarks in healthcare delivery across the Asia-Pacific region.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg">
                    <Stethoscope className="w-4 h-4 text-medical-blue" />
                    <span className="text-sm font-medium text-navy">50+ Specialities</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg">
                    <Building2 className="w-4 h-4 text-medical-blue" />
                    <span className="text-sm font-medium text-navy">12 Operation Theatres</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg">
                    <Target className="w-4 h-4 text-medical-blue" />
                    <span className="text-sm font-medium text-navy">Zero-Error Protocol</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Mission & Values
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our mission drives every aspect of our care — to deliver healthcare
                that is accessible, innovative, and deeply compassionate.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 card-hover">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-premium-gray py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Key Milestones
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-medical-blue to-teal" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <ScrollReveal
                  key={m.year}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                >
                  <div
                    className={`relative flex items-center gap-8 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      } pl-12 md:pl-0`}
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <span className="text-gold font-bold text-lg">{m.year}</span>
                        <h4 className="text-navy font-bold text-lg mt-1">{m.title}</h4>
                        <p className="text-gray-500 text-sm mt-2">{m.desc}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 border-4 border-white shadow-md z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Guided by Excellence
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <div className="group p-6 bg-white rounded-2xl border border-gray-100 text-center hover:shadow-xl hover:border-gold/30 transition-all duration-500 card-hover">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-gold">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-navy font-bold">{person.name}</h4>
                  <p className="text-gold text-sm font-medium mt-1">{person.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{person.specialty}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="bg-navy-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Recognition
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                Awards & Accreditations
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {awards.map((award, i) => (
              <ScrollReveal key={award} delay={i * 0.08}>
                <div className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                  <Award className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 text-sm font-medium">{award}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

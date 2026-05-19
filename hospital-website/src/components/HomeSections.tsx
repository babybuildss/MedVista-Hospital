/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Siren,
  Stethoscope,
  Phone,
  ArrowRight,
  Calendar,
  ClipboardCheck,
  UserCheck,
  Activity,
  Shield,
  Zap,
  CheckCircle,
} from 'lucide-react';

/* ─── Centres of Excellence ─── */
const centres = [
  {
    icon: Heart,
    title: 'Cardiac Sciences',
    desc: 'Complete heart care from prevention to complex surgeries with world-class outcomes.',
  },
  {
    icon: Brain,
    title: 'Neuro Sciences',
    desc: 'Advanced treatment for brain and spine disorders with precision neurosurgery.',
  },
  {
    icon: Bone,
    title: 'Orthopaedics',
    desc: 'Joint replacement, sports medicine, and robotic-assisted spine surgery.',
  },
  {
    icon: Activity,
    title: 'Oncology',
    desc: 'Comprehensive cancer care with immunotherapy and targeted treatments.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    desc: 'Specialized child healthcare in a warm, child-friendly environment.',
  },
  {
    icon: Siren,
    title: 'Emergency Care',
    desc: '24/7 Level 1 trauma centre with rapid response and critical care.',
  },
];

/* ─── Doctors ─── */
const doctors = [
  { name: 'Dr. Rajesh Sharma', specialty: 'Cardiology', image: '/images/doctor-1.png' },
  { name: 'Dr. Priya Mehta', specialty: 'Neuro Surgery', image: '/images/doctor-2.png' },
  { name: 'Dr. Arun Kumar', specialty: 'Orthopaedics', image: '/images/doctor-3.png' },
  { name: 'Dr. Kavitha Nair', specialty: 'Pediatrics', image: '/images/doctor-4.png' },
];

/* ─── Health Packages ─── */
const packages = [
  { name: 'Basic Health Check', price: '₹3,999', tests: 25, popular: false },
  { name: 'Executive Health Package', price: '₹8,999', tests: 55, popular: true },
  { name: 'Cardiac Health Package', price: '₹12,499', tests: 40, popular: false },
  { name: 'Comprehensive Wellness', price: '₹18,999', tests: 80, popular: false },
];

/* ─── Appointment Steps ─── */
const steps = [
  { icon: Calendar, title: 'Book Appointment', desc: 'Choose your department and preferred date' },
  { icon: ClipboardCheck, title: 'Confirmation', desc: 'Our team confirms within 2 hours' },
  { icon: UserCheck, title: 'Visit Hospital', desc: 'Meet your specialist and receive care' },
  { icon: CheckCircle, title: 'Follow-up', desc: 'Post-treatment support and monitoring' },
];

export default function HomeSections() {
  return (
    <div className="bg-white">
      {/* ─── Centres of Excellence ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[#d4a853] text-sm font-semibold tracking-wider uppercase">
                World-Class Expertise
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Centres of <span className="gradient-text">Excellence</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 card-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a1628] to-[#132040] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <c.icon className="w-7 h-7 text-[#d4a853]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#d4a853] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Expert Doctors ─── */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[#d4a853] text-sm font-semibold tracking-wider uppercase">
                Meet Our Specialists
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Expert <span className="gradient-text-blue">Doctors</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <ScrollReveal key={doc.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full btn-gold text-sm !py-2.5"
                        onClick={() => {
                          const el = document.querySelector('#contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Book Appointment
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0a1628] text-lg">{doc.name}</h3>
                    <p className="text-[#d4a853] text-sm mt-1">{doc.specialty}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Emergency Section ─── */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-red-700 via-red-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-1.png')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Siren className="w-8 h-8 text-white animate-pulse" />
                <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                  24/7 Emergency
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Emergency & Trauma Centre
              </h2>
              <p className="mt-3 text-red-100 text-base md:text-lg max-w-xl">
                Our Level 1 Trauma Centre is equipped for any medical emergency.
                Golden-hour protocols ensure life-saving treatment within minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:+911800633847"
                className="flex items-center gap-2 bg-white text-red-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-red-50 transition-colors animate-emergency-pulse"
              >
                <Phone className="w-5 h-5" />
                1800-MED-VISTA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Advanced Technology (3D Section placeholder) ─── */}
      <section className="py-16 md:py-24 bg-section-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[#d4a853] text-sm font-semibold tracking-wider uppercase">
                Innovation Hub
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Advanced <span className="gradient-text">Technology</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                From AI-powered diagnostics to robotic surgery, we invest in the future
                of medicine to deliver better outcomes for every patient.
              </p>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Robotic Surgery', desc: 'da Vinci and Mako robotic platforms for precision beyond human capability, reducing recovery time and improving outcomes.' },
              { icon: Activity, title: 'AI Diagnostics', desc: 'Artificial intelligence assists radiologists and pathologists in detecting conditions earlier and with greater accuracy.' },
              { icon: Shield, title: 'Telemedicine', desc: 'Connect with our specialists from anywhere in the world through secure, high-definition video consultations.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 md:p-8 text-center card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-[#0a1628]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* 3D DNA Helix Section */}
          <ScrollReveal>
            <div className="mt-16 text-center">
              <p className="text-gray-500 text-sm mb-4">
                Interactive 3D DNA Helix — Symbolizing Our Commitment to Genetic & Molecular Medicine
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Health Packages ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[#d4a853] text-sm font-semibold tracking-wider uppercase">
                Preventive Care
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                Health <span className="gradient-text-blue">Packages</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-[#0a1628] to-[#132040] text-white shadow-2xl shadow-[#0a1628]/30'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#d4a853] text-[#0a1628] text-xs font-bold">
                      Popular
                    </div>
                  )}
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      pkg.popular ? 'text-white' : 'text-[#0a1628]'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      pkg.popular ? 'gradient-text' : 'text-[#0a1628]'
                    }`}
                  >
                    {pkg.price}
                  </div>
                  <p className={`text-sm mb-5 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pkg.tests} tests included
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Blood Profile', 'Imaging', 'Doctor Consultation', 'Report Delivery'].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle
                            className={`w-4 h-4 ${
                              pkg.popular ? 'text-[#d4a853]' : 'text-[#0d9488]'
                            }`}
                          />
                          <span className={pkg.popular ? 'text-gray-300' : 'text-gray-600'}>
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                      pkg.popular
                        ? 'btn-gold'
                        : 'bg-[#0a1628] text-white hover:bg-[#132040]'
                    }`}
                    onClick={() => {
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Appointment Process ─── */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[#d4a853] text-sm font-semibold tracking-wider uppercase">
                Seamless Experience
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
                How It <span className="gradient-text">Works</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#132040] flex items-center justify-center mx-auto mb-5">
                      <step.icon className="w-9 h-9 text-[#d4a853]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#d4a853] text-[#0a1628] font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Insurance Partners ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="text-gray-500 text-sm font-medium">Trusted Insurance Partners</span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['Star Health', 'ICICI Lombard', 'HDFC ERGO', 'Bajaj Allianz', 'New India Assurance', 'United Health', 'Cigna', 'Aetna'].map(
                (p) => (
                  <div
                    key={p}
                    className="px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-600 font-medium text-sm"
                  >
                    {p}
                  </div>
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a1628] via-[#132040] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a853]/5 blur-[120px]" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/5 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <ScrollReveal>
            <Stethoscope className="w-12 h-12 text-[#d4a853] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Health Deserves the <span className="gradient-text">Very Best</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Take the first step towards world-class healthcare. Our team of specialists
              is ready to provide you with personalized, compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold flex items-center gap-2 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <a
                href="tel:+911800633847"
                className="btn-outline-gold flex items-center gap-2 text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

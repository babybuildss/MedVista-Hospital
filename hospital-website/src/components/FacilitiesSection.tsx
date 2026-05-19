/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  BedDouble,
  Monitor,
  ScanLine,
  Siren,
  Dumbbell,
  Globe,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';

const facilities = [
  {
    icon: BedDouble,
    title: 'Luxury Patient Rooms',
    description:
      'Our premium patient suites are designed like five-star hotel rooms, featuring panoramic city views, ergonomic furniture, private bathrooms, entertainment systems, and dedicated nursing support. Every detail is crafted to accelerate recovery through comfort and tranquility.',
    image: '/images/facilities-room.png',
    features: ['Private Suites', 'City Views', '24/7 Nursing', 'Room Service'],
  },
  {
    icon: Monitor,
    title: 'Advanced ICU',
    description:
      'Our Intensive Care Units feature the latest patient monitoring systems, ECMO capabilities, and a 1:1 nurse-to-patient ratio. Equipped with negative pressure rooms and isolation facilities, we ensure the highest level of critical care with infection control protocols.',
    image: '/images/facilities-icu.png',
    features: ['1:1 Nursing', 'ECMO Support', 'Negative Pressure', '24/7 Monitoring'],
  },
  {
    icon: ScanLine,
    title: 'Operation Theatres',
    description:
      'Our modular operation theatres meet international sterility standards and are equipped with laminar airflow, robotic surgical systems, and real-time imaging. Surgeons perform complex procedures with precision using da Vinci and Mako robotic platforms.',
    image: '/images/hero-3.png',
    features: ['Robotic Surgery', 'Laminar Flow', 'Real-time Imaging', 'Modular OTs'],
  },
  {
    icon: ScanLine,
    title: 'Diagnostic Labs',
    description:
      'Our NABL-accredited diagnostic centre houses 3T MRI, 256-slice CT, PET-CT, and advanced molecular diagnostics. AI-assisted analysis ensures rapid, accurate results for informed clinical decisions within hours, not days.',
    image: '/images/hero-4.png',
    features: ['3T MRI', '256-Slice CT', 'PET-CT', 'NABL Accredited'],
  },
  {
    icon: Siren,
    title: 'Emergency & Trauma',
    description:
      'A Level 1 Trauma Centre with a golden-hour response protocol, helipad access, and a dedicated stroke and heart attack pathway. Our emergency team is trained in ATLS and delivers life-saving interventions within minutes of arrival.',
    image: '/images/hero-1.png',
    features: ['Level 1 Trauma', 'Helipad Access', 'Stroke Pathway', 'ATLS Certified'],
  },
  {
    icon: Dumbbell,
    title: 'Rehabilitation Centre',
    description:
      'Our comprehensive rehabilitation centre offers physiotherapy, occupational therapy, speech therapy, and sports medicine. Customized recovery programs use advanced gait analysis, hydrotherapy, and robotic-assisted rehabilitation technologies.',
    image: '/images/hero-2.png',
    features: ['Physiotherapy', 'Hydrotherapy', 'Sports Medicine', 'Robotic Rehab'],
  },
];

const testimonials = [
  {
    name: 'Ananya Krishnan',
    treatment: 'Cardiac Bypass Surgery',
    text: 'The care I received at MedVista Premier was extraordinary. From the moment I walked in, I felt safe and valued. The surgical team was brilliant, and the recovery support was exceptional.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    treatment: 'Knee Replacement',
    text: 'After years of chronic pain, the orthopaedic team gave me my life back. The robotic-assisted surgery was precise, and I was walking within 24 hours. Truly world-class healthcare.',
    rating: 5,
  },
  {
    name: 'Meera Subramaniam',
    treatment: 'Cancer Treatment',
    text: 'The oncology team treated me with such compassion and expertise. Every step of my treatment was explained clearly, and I always felt I was in the best hands. Forever grateful.',
    rating: 5,
  },
];

export default function FacilitiesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (dir: number) => {
    setLightboxIndex((prev) => (prev + dir + facilities.length) % facilities.length);
  };

  return (
    <section id="facilities" className="relative py-10 sm:py-20 md:py-28 bg-section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              World-Class Infrastructure
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
              Facilities & <span className="gradient-text-blue">Patient Care</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Every space at MedVista Premier is designed to heal, comfort, and inspire
              confidence — from our patient suites to our advanced surgical centres.
            </p>
            <div className="section-divider mt-4 sm:mt-6" />
          </div>
        </ScrollReveal>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((facility, i) => (
            <ScrollReveal key={facility.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover group cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center">
                      <facility.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a1628]" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1628] mb-1.5 sm:mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {facility.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {facility.features.map((f) => (
                      <span
                        key={f}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#0a1628]/5 text-[#0a1628] text-[10px] sm:text-xs font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <ScrollReveal>
          <div className="mt-10 sm:mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              Take a Virtual Tour
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Patient Experience & Testimonials */}
        <div className="mt-14 sm:mt-20">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Patient Stories
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1628]">
                Voices of <span className="gradient-text">Recovery</span>
              </h2>
              <div className="section-divider mt-4 sm:mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 card-hover">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#d4a853] text-[#d4a853]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="mt-4 sm:mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#0a1628] to-[#132040] flex items-center justify-center shrink-0">
                      <span className="text-[#d4a853] font-bold text-xs sm:text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a1628] text-xs sm:text-sm">{t.name}</p>
                      <p className="text-gray-500 text-[10px] sm:text-xs">{t.treatment}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* International Patients */}
        <ScrollReveal>
          <div className="mt-14 sm:mt-20 bg-gradient-to-r from-[#0a1628] to-[#132040] rounded-xl sm:rounded-3xl p-6 sm:p-8 md:p-14">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
              <div>
                <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  Global Reach
                </span>
                <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  International Patient Services
                </h3>
                <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                  We welcome patients from across the globe with dedicated international
                  patient coordinators, visa assistance, airport transfers, interpreter
                  services, and culturally sensitive care.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
                  {['Visa Support', 'Airport Transfer', 'Interpreters', 'Dedicated Coordinator', 'Currency Exchange'].map((s) => (
                    <span key={s} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-white text-xs sm:text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { num: '50+', label: 'Countries Served' },
                  { num: '5,000+', label: 'International Patients' },
                  { num: '15+', label: 'Languages Supported' },
                  { num: '99%', label: 'Patient Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-lg sm:rounded-xl p-3 sm:p-5 text-center">
                    <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.num}</div>
                    <div className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-xl sm:rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="h-44 sm:h-56 md:h-80">
                <img
                  src={facilities[lightboxIndex].image}
                  alt={facilities[lightboxIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-2xl font-bold text-[#0a1628]">
                  {facilities[lightboxIndex].title}
                </h3>
                <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {facilities[lightboxIndex].description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {facilities[lightboxIndex].features.map((f) => (
                    <span
                      key={f}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#0a1628]/5 text-[#0a1628] text-xs sm:text-sm font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 md:left-4">
                <button
                  onClick={() => navigateLightbox(-1)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 md:right-4">
                <button
                  onClick={() => navigateLightbox(1)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

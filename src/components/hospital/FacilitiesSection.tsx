'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bed,
  HeartPulse,
  Monitor,
  FlaskConical,
  Siren,
  Accessibility,
  X,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const facilityCategories = [
  {
    icon: Bed,
    title: 'Patient Rooms',
    desc: 'Luxury private suites and comfortable semi-private rooms with panoramic views, smart room controls, and personalized nursing care.',
    image: '/images/facilities-room.png',
    features: ['Smart Room Controls', 'Panoramic Views', 'Personal Nursing', 'Room Service Dining'],
  },
  {
    icon: HeartPulse,
    title: 'ICU',
    desc: 'State-of-the-art Intensive Care Units with advanced monitoring systems, ECMO support, and 1:1 nurse-to-patient ratio.',
    image: '/images/facilities-icu.png',
    features: ['Advanced Monitoring', 'ECMO Support', '1:1 Nursing', 'Isolation Rooms'],
  },
  {
    icon: Monitor,
    title: 'Operation Theaters',
    desc: '12 modular operation theaters with laminar airflow, robotic surgery systems, and real-time imaging capabilities.',
    image: '/images/facilities-room.png',
    features: ['Laminar Airflow', 'Da Vinci Robot', 'Real-time Imaging', 'Hybrid OT'],
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Labs',
    desc: 'NABL-certified laboratories with automated analyzers, molecular diagnostics, and same-day report delivery.',
    image: '/images/facilities-icu.png',
    features: ['NABL Certified', 'Molecular Diagnostics', 'Same-day Reports', 'Home Collection'],
  },
  {
    icon: Siren,
    title: 'Emergency',
    desc: 'Level 1 Trauma Centre with dedicated resuscitation bays, helicopter pad, and round-the-clock specialist coverage.',
    image: '/images/facilities-room.png',
    features: ['Level 1 Trauma', 'Helipad Access', '24/7 Specialists', 'Rapid Response'],
  },
  {
    icon: Accessibility,
    title: 'Rehabilitation',
    desc: 'Comprehensive rehabilitation centre with physiotherapy, occupational therapy, and advanced robotic-assisted therapy.',
    image: '/images/facilities-icu.png',
    features: ['Robotic Therapy', 'Physiotherapy', 'Occupational Therapy', 'Sports Rehab'],
  },
];

const internationalServices = [
  'Dedicated International Patient Coordinator',
  'Visa Assistance & Fast-track Processing',
  'Airport Pick-up & Drop-off',
  'Multilingual Interpreters',
  'Accommodation for Companions',
  'Post-treatment Follow-up via Telemedicine',
];

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  return (
    <section id="facilities" className="relative">
      {/* Facilities Header */}
      <div className="bg-premium-gray py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Our Facilities
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every detail of our hospital is designed with patient comfort,
                safety, and healing in mind. Explore our premium facilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Facility Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityCategories.map((facility, i) => (
              <ScrollReveal key={facility.title} delay={i * 0.1}>
                <div
                  className="group cursor-pointer"
                  onClick={() => setSelectedFacility(i)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                    <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <facility.icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-white font-bold text-lg">
                            {facility.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {facility.desc}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-medical-blue text-sm font-semibold">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Virtual Tour CTA */}
      <div className="bg-navy-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Globe className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Virtual Hospital Tour
                  </h3>
                  <p className="text-white/60 mt-1">
                    Explore our world-class facilities from the comfort of your home
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105">
                Take Virtual Tour
                <ArrowRight className="w-5 h-5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Patient Care Experience */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Patient Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Care Beyond Medicine
              </h2>
              <div className="section-divider mx-auto mb-6" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Luxury Suites', desc: '5-star comfort with medical-grade safety' },
              { icon: CheckCircle, title: 'Personal Diet', desc: 'Customized nutrition by expert dietitians' },
              { icon: Globe, title: 'Multilingual Staff', desc: 'Care in 12+ languages for global patients' },
              { icon: HeartPulse, title: 'Holistic Healing', desc: 'Yoga, meditation, and wellness programs' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="text-navy font-bold">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* International Patients */}
      <div className="bg-premium-gray py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                  Global Reach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
                  International Patient{' '}
                  <span className="text-gradient-blue">Services</span>
                </h2>
                <div className="section-divider mb-6" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  MedVista Premier welcomes patients from across the globe. Our
                  dedicated international patient team ensures a seamless
                  experience from your first inquiry to post-treatment follow-up.
                </p>
                <div className="grid gap-3">
                  {internationalServices.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-navy" />
                  </div>
                  <h4 className="text-navy font-bold text-lg">
                    International Patients
                  </h4>
                  <p className="text-gray-400 text-sm">
                    From 50+ countries treated annually
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Countries', value: '50+' },
                    { label: 'Satisfied Patients', value: '10,000+' },
                    { label: 'Languages', value: '12+' },
                    { label: 'Coordination Team', value: '24/7' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="text-navy font-bold text-xl">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedFacility !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedFacility(null)}
            />
            <motion.div
              className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="relative h-44 sm:h-56">
                <Image
                  src={facilityCategories[selectedFacility].image}
                  alt={facilityCategories[selectedFacility].title}
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {(() => {
                    const Icon = facilityCategories[selectedFacility].icon;
                    return <Icon className="w-6 h-6 text-medical-blue" />;
                  })()}
                  <h3 className="text-xl font-bold text-navy">
                    {facilityCategories[selectedFacility].title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {facilityCategories[selectedFacility].desc}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {facilityCategories[selectedFacility].features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal" />
                      <span className="text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

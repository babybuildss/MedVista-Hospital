'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/hospital/PageHero';

const facilities = [
  {
    title: 'Advanced Operation Theatres',
    desc: 'Our 12 modular operation theatres are equipped with laminar airflow, HEPA filtration, and integrated imaging systems. Designed for everything from routine procedures to complex multi-organ transplants, each theatre supports real-time collaboration with pathologists and radiologists via integrated screens.',
    image: '/images/facilities-room.png',
  },
  {
    title: 'Intensive Care Units',
    desc: 'A 60-bed ICU complex with dedicated cardiac, neuro, and paediatric intensive care units. Each bed is equipped with central monitoring, ventilator support, and continuous haemodynamic monitoring. Our intensivist-led model ensures 24/7 physician presence.',
    image: '/images/facilities-icu.png',
  },
  {
    title: 'Diagnostic & Imaging Centre',
    desc: 'Home to the region\'s first 3-Tesla MRI, a 256-slice CT scanner, and advanced PET-CT capabilities. Our radiology department processes over 500 studies daily with AI-assisted reporting that reduces turnaround time by 60%.',
    image: '/images/hero-2.png',
  },
  {
    title: 'Patient Rooms & Suites',
    desc: 'From comfortable shared rooms to private executive suites, every space is designed for healing. Natural light, garden views, and thoughtful amenities create an environment that reduces stress and accelerates recovery.',
    image: '/images/hero-3.png',
  },
];

const internationalServices = [
  'Dedicated International Patient Coordinator',
  'Visa assistance and travel arrangement support',
  'Airport pick-up and accommodation guidance',
  'Multi-language interpretation services',
  'Tele-consultation before and after visit',
  'Transparent pricing with no hidden costs',
  'Post-treatment follow-up via telemedicine',
];

export default function FacilitiesSection() {
  return (
    <>
      <PageHero
        title="Facilities"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Facilities' },
        ]}
      />

      {/* Facility Sections */}
      {facilities.map((facility, i) => (
        <section
          key={facility.title}
          className={`${i % 2 === 0 ? 'bg-ivory' : 'bg-cream'} py-16 sm:py-24`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 !== 0 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={i % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
                  {facility.title}
                </h2>
                <div className="h-[1.5px] w-16 bg-sage mb-6" />
                <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed">
                  {facility.desc}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* International Patients */}
      <section className="bg-ivory-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
              Global Care
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3 mb-4">
              International Patients
            </h2>
            <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed max-w-2xl">
              Patients from over 30 countries trust MedVista for world-class
              treatment. Our dedicated international patient programme ensures a
              seamless experience from first contact to post-treatment follow-up.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {internationalServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 py-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                <span className="font-body text-sm text-charcoal-light">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Experience MedVista Virtually
            </h2>
            <p className="font-body text-base text-white/50 mb-8 max-w-lg mx-auto">
              Take a guided virtual tour of our facilities from the comfort of
              your home.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white font-body text-sm font-medium rounded-full hover:bg-sage-dark transition-colors duration-300 group">
              Start Virtual Tour
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

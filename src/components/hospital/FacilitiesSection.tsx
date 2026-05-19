'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
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
    desc: "Home to the region's first 3-Tesla MRI, a 256-slice CT scanner, and advanced PET-CT capabilities. Our radiology department processes over 500 studies daily with AI-assisted reporting that reduces turnaround time by 60%.",
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
        subtitle="State-of-the-art infrastructure designed for healing"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Facilities' },
        ]}
      />

      {/* Facility Sections */}
      {facilities.map((facility, i) => (
        <FacilityBlock key={facility.title} facility={facility} index={i} />
      ))}

      {/* International Patients */}
      <section className="bg-ivory-dark py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
                Global Care
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-4">
                International Patients
              </h2>
              <p className="font-body text-[13px] sm:text-sm text-charcoal-light leading-relaxed max-w-md">
                Patients from over 30 countries trust MedVista for world-class
                treatment. Our dedicated international patient programme ensures a
                seamless experience from first contact to post-treatment follow-up.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {internationalServices.map((service, i) => (
                  <div key={service} className="flex items-start gap-2.5 py-2.5">
                    <div className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0 mt-1.5" />
                    <span className="font-body text-[13px] text-charcoal-light">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-charcoal py-14 sm:py-18">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight mb-3">
              Experience MedVista Virtually
            </h2>
            <p className="font-body text-[13px] text-white/40 mb-6 max-w-md mx-auto">
              Take a guided virtual tour of our facilities from the comfort of your home.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-white font-body text-[13px] font-medium rounded-full hover:bg-sage-dark transition-colors duration-300 group">
              Start Virtual Tour
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ── Individual facility block with parallax ── */
function FacilityBlock({ facility, index }: { facility: typeof facilities[0]; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className={`${isEven ? 'bg-ivory' : 'bg-cream'} py-16 sm:py-24`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            !isEven ? 'lg:direction-rtl' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={!isEven ? 'lg:order-2' : ''}
          >
            <motion.div style={{ y: imageY }}>
              <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={!isEven ? 'lg:order-1' : ''}
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-charcoal tracking-tight mt-2 mb-4 leading-tight">
              {facility.title}
            </h2>
            <div className="h-px w-10 bg-sage mb-4" />
            <p className="font-body text-[13px] sm:text-sm text-charcoal-light leading-relaxed max-w-lg">
              {facility.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

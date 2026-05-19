'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '@/components/hospital/PageHero';

gsap.registerPlugin(ScrollTrigger);

/* ─── Story Section ─── */
function StorySection() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Large image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative -mb-24 lg:-mb-32 z-10"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src="/images/about-hospital.png"
                alt="MedVista Hospital founding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: Narrative text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-0 lg:pt-24"
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-3 mb-6 leading-tight">
              Founded on a Belief in{' '}
              <span className="italic text-sage">Better</span>
            </h2>
            <div className="h-[1.5px] w-16 bg-sage mb-6" />
            <div className="space-y-4 font-body text-base md:text-lg text-charcoal-light leading-relaxed">
              <p>
                In 1998, Dr. Vikram Mehta opened the doors of a modest 50-bed
                facility in New Delhi with a singular vision: to create a hospital
                where technology serves humanity, not the other way around.
              </p>
              <p>
                What began as a small team of dedicated physicians has grown into
                a 500+ bed institution recognized globally for clinical excellence.
                But growth was never the goal — impact was.
              </p>
              <p>
                Today, MedVista Premier stands as a testament to the idea that
                healthcare, at its best, is both a science and an art. Every
                decision, every investment, every hire is guided by the question:
                &ldquo;Will this make our patients&rsquo; lives better?&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mission & Values ─── */
function MissionValues() {
  const values = [
    {
      num: '01',
      title: 'Clinical Excellence',
      desc: 'We pursue the highest standards of medical practice, continuously investing in research, technology, and talent to deliver outcomes that matter.',
    },
    {
      num: '02',
      title: 'Compassionate Care',
      desc: 'Behind every treatment plan is a human story. We listen, we empathize, and we treat every patient as we would want our own family treated.',
    },
    {
      num: '03',
      title: 'Innovation',
      desc: 'From genomic medicine to AI-assisted diagnostics, we embrace technologies that push the boundaries of what healthcare can achieve.',
    },
    {
      num: '04',
      title: 'Integrity',
      desc: 'Transparency and ethics are non-negotiable. We earn trust through honest communication, fair practices, and unwavering accountability.',
    },
  ];

  return (
    <section className="bg-ivory-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            What Guides Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3">
            Our Values
          </h2>
        </motion.div>

        <div className="space-y-0">
          {values.map((value, i) => (
            <motion.div
              key={value.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-4 sm:gap-8 py-8 sm:py-10 border-b border-border-custom items-start"
            >
              <span className="font-display text-3xl sm:text-4xl text-sage/40">
                {value.num}
              </span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-base text-charcoal-light leading-relaxed max-w-2xl">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline ─── */
function Timeline() {
  const events = [
    { year: '1998', desc: 'MedVista founded as a 50-bed community hospital in New Delhi.' },
    { year: '2003', desc: 'First cardiac catheterization lab established. Performed 500 procedures in the first year.' },
    { year: '2008', desc: 'Expanded to 200 beds. Launched the Neuro Sciences Centre of Excellence.' },
    { year: '2013', desc: 'Received NABH accreditation. International patient program launched.' },
    { year: '2018', desc: 'Crossed 500 beds. Opened Genomics & Precision Medicine Centre.' },
    { year: '2023', desc: 'Completed 2 million patient milestones. Recognized among top 10 hospitals in Asia.' },
  ];

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            Our Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3">
            A Growing Legacy
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[1px] bg-border-custom" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative pl-12 sm:pl-20 grid sm:grid-cols-2 gap-2 sm:gap-8 items-start ${
                  i % 2 === 0 ? '' : ''
                }`}
              >
                {/* Dot on line */}
                <div className="absolute left-3 sm:left-7 top-1 w-3 h-3 rounded-full bg-sage border-2 border-cream" />

                <div className="font-display text-2xl sm:text-3xl text-sage">
                  {event.year}
                </div>
                <p className="font-body text-base text-charcoal-light leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Leadership ─── */
function Leadership() {
  const leaders = [
    { initials: 'VM', name: 'Dr. Vikram Mehta', title: 'Founder & Chairman' },
    { initials: 'PS', name: 'Dr. Priya Sharma', title: 'Chief Medical Officer' },
    { initials: 'AK', name: 'Dr. Arjun Kapoor', title: 'Director, Cardiac Sciences' },
    { initials: 'NR', name: 'Dr. Nisha Reddy', title: 'Director, Neuro Sciences' },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            Our People
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3">
            Leadership
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-sage-light mx-auto mb-4 flex items-center justify-center">
                <span className="font-display text-2xl sm:text-3xl text-sage">
                  {leader.initials}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl text-charcoal mb-1">
                {leader.name}
              </h3>
              <p className="font-body text-xs text-warm-gray tracking-wide">
                {leader.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Awards ─── */
function Awards() {
  const awards = [
    'NABH Accreditation — Full Cycle (2013–Present)',
    'Best Multi-Speciality Hospital — National Health Awards 2022',
    'Excellence in Cardiac Care — Asian Medical Excellence Awards 2021',
    'Top 10 Hospitals in India — India Today Rankings 2023',
    'Green Hospital Certification — Indian Green Building Council',
    'Patient Safety Excellence Award — JCI Standards Compliance',
  ];

  return (
    <section className="bg-ivory-dark py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            Recognition
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3">
            Awards & Accreditations
          </h2>
        </motion.div>

        <div className="space-y-0">
          {awards.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 py-4 border-b border-border-custom"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
              <span className="font-body text-base text-charcoal-light">{award}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export default function AboutSection() {
  return (
    <>
      <PageHero
        title="About"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />
      <StorySection />
      <MissionValues />
      <Timeline />
      <Leadership />
      <Awards />
    </>
  );
}

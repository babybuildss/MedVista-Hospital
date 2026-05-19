'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import PageHero from '@/components/hospital/PageHero';

const Heart3DScene = dynamic(() => import('@/components/hospital/3d/Heart3D'), {
  ssr: false,
  loading: () => <div className="w-full h-[200px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const CellDivisionScene = dynamic(() => import('@/components/hospital/3d/CellDivision'), {
  ssr: false,
  loading: () => <div className="w-full h-[200px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

/* ─── Story Section ─── */
function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="bg-ivory py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative -mb-16 lg:-mb-24 z-10"
          >
            <motion.div style={{ y: imageY }}>
              <div className="relative h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden">
                <Image
                  src="/images/about-hospital.png"
                  alt="MedVista Hospital founding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-0 lg:pt-20"
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-5 leading-tight">
              Founded on a Belief in{' '}
              <span className="italic text-sage">Better</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-5" />
            <div className="space-y-4 font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed max-w-lg">
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

/* ─── Heart & Healing - 3D Section ─── */
function HeartAndHealingSection() {
  return (
    <section className="bg-cream py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-terracotta">Our Philosophy</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
              Healing From the <span className="italic text-terracotta">Heart</span>
            </h2>
            <div className="h-px w-12 bg-terracotta mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-6 max-w-md">
              At MedVista, we believe that the best medicine comes from the heart. Our approach combines cutting-edge technology with genuine compassion — because we know that healing is not just about treating the body, but nurturing the spirit as well.
            </p>
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed max-w-md">
              Every interaction, from the first consultation to the final follow-up, is infused with care that goes beyond the clinical. This is what sets us apart and what has earned the trust of millions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-terracotta/10 rounded-sm pointer-events-none" />
            <Heart3DScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mission & Values ─── */
function MissionValues() {
  const values = [
    { num: '01', title: 'Clinical Excellence', desc: 'We pursue the highest standards of medical practice, continuously investing in research, technology, and talent to deliver outcomes that matter.' },
    { num: '02', title: 'Compassionate Care', desc: 'Behind every treatment plan is a human story. We listen, we empathize, and we treat every patient as we would want our own family treated.' },
    { num: '03', title: 'Innovation', desc: 'From genomic medicine to AI-assisted diagnostics, we embrace technologies that push the boundaries of what healthcare can achieve.' },
    { num: '04', title: 'Integrity', desc: 'Transparency and ethics are non-negotiable. We earn trust through honest communication, fair practices, and unwavering accountability.' },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">What Guides Us</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">Our Values</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8">
          {values.map((value, i) => (
            <motion.div key={value.num} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-5">
              <span className="font-display text-2xl sm:text-3xl text-sage/25 flex-shrink-0 mt-0.5">{value.num}</span>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-charcoal mb-2">{value.title}</h3>
                <p className="font-body text-[13px] sm:text-sm text-charcoal-light leading-relaxed">{value.desc}</p>
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
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Our Journey</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">A Growing Legacy</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, i) => (
            <motion.div key={event.year} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="p-5 sm:p-6 border border-border-custom bg-ivory">
              <div className="font-display text-2xl sm:text-3xl text-sage mb-2">{event.year}</div>
              <p className="font-body text-[13px] sm:text-sm text-charcoal-light leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cell Division / Growth Section ─── */
function GrowthSection() {
  return (
    <section className="bg-ivory-dark py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 border border-sage/10 rounded-sm pointer-events-none" />
            <CellDivisionScene />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Continuous Growth</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
              Always <span className="italic text-sage">Evolving</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-6 max-w-md">
              Just as cells divide and multiply to build complex organisms, MedVista has grown from a single idea into a thriving ecosystem of medical excellence. Each expansion, each new speciality, each breakthrough has been a division of our original purpose — to serve more patients, better.
            </p>
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed max-w-md">
              Our growth is organic, driven not by ambition alone but by the needs of the communities we serve. Every new facility, every new technology, every new expert joins us because our patients deserve nothing less.
            </p>
          </motion.div>
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
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Our People</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">Leadership</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {leaders.map((leader, i) => (
            <motion.div key={leader.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sage-light flex items-center justify-center mb-4">
                <span className="font-display text-lg sm:text-xl text-sage">{leader.initials}</span>
              </div>
              <h3 className="font-display text-base sm:text-lg text-charcoal mb-0.5">{leader.name}</h3>
              <p className="font-body text-[11px] sm:text-xs text-warm-gray tracking-wide">{leader.title}</p>
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
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Recognition</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">Awards & Accreditations</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0">
          {awards.map((award, i) => (
            <motion.div key={award} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-start gap-3 py-4 border-b border-border-custom">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-1.5" />
              <span className="font-body text-[13px] sm:text-sm text-charcoal-light">{award}</span>
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
      <PageHero title="About" subtitle="A legacy of healing since 1998" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <StorySection />
      <HeartAndHealingSection />
      <MissionValues />
      <Timeline />
      <GrowthSection />
      <Leadership />
      <Awards />
    </>
  );
}

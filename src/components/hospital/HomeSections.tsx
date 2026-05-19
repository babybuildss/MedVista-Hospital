'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const DNAHelixScene = dynamic(() => import('@/components/hospital/DNAHelix'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] sm:h-[350px] flex items-center justify-center">
      <div className="text-warm-gray text-sm font-body">Loading 3D...</div>
    </div>
  ),
});

/* ──────────────────────────────────────
   PHILOSOPHY — Large editorial text reveal
   ────────────────────────────────────── */
function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section ref={sectionRef} className="bg-cream py-24 sm:py-32 md:py-40 relative overflow-hidden">
      {/* Decorative side text */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 rotated-text font-body text-[10px] tracking-[0.4em] uppercase text-border-custom select-none hidden lg:block">
        MedVista Premier
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="font-display text-charcoal leading-snug sm:leading-tight">
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] mb-1 sm:mb-2">
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
              className="inline-block mr-[0.25em]"
            >
              Medicine
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-block mr-[0.25em]"
            >
              is
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mr-[0.25em]"
            >
              not
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="inline-block mr-[0.25em]"
            >
              just
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              science.
            </motion.span>
          </div>
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] mb-1 sm:mb-2">
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block mr-[0.25em] italic text-sage"
            >
              It's
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="inline-block mr-[0.25em]"
            >
              the
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="inline-block mr-[0.25em] italic text-sage"
            >
              art
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="inline-block"
            >
              of
            </motion.span>
          </div>
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem]">
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.45 }}
              className="inline-block mr-[0.25em]"
            >
              understanding
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="inline-block mr-[0.25em]"
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.75 }}
              className="inline-block mr-[0.25em] italic text-sage"
            >
              human
            </motion.span>
            <motion.span
              initial={{ opacity: 0.12 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="inline-block italic text-sage"
            >
              story.
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────
   CENTRES OF EXCELLENCE — Editorial list
   ────────────────────────────────────── */
function CentresOfExcellence() {
  const centres = [
    {
      name: 'Cardiac Sciences',
      desc: 'Pioneering minimally invasive cardiac procedures with outcomes that set global benchmarks.',
      image: '/images/doctor-1.png',
      number: '01',
    },
    {
      name: 'Neuro Sciences',
      desc: 'Advanced neurosurgery and neuro-rehabilitation guided by precision imaging technology.',
      image: '/images/doctor-2.png',
      number: '02',
    },
    {
      name: 'Oncology',
      desc: 'Comprehensive cancer care from early detection to personalized immunotherapy protocols.',
      image: '/images/doctor-3.png',
      number: '03',
    },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
              Centres of Excellence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">
              Where Expertise<br />Meets Empathy
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 font-body text-[13px] text-sage hover:text-sage-dark transition-colors duration-300 group"
            >
              View all departments
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Cards — editorial horizontal layout */}
        <div className="space-y-0">
          {centres.map((centre, i) => (
            <motion.div
              key={centre.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="/departments"
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_200px] lg:grid-cols-[80px_1fr_280px] gap-4 md:gap-8 items-center py-6 sm:py-8 border-b border-border-custom hover:border-sage/40 transition-colors duration-500"
              >
                {/* Number */}
                <span className="font-display text-2xl sm:text-3xl text-sage/30 group-hover:text-sage transition-colors duration-500 hidden md:block">
                  {centre.number}
                </span>

                {/* Text */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal group-hover:text-sage transition-colors duration-300 mb-1">
                    {centre.name}
                  </h3>
                  <p className="font-body text-[13px] sm:text-sm text-warm-gray leading-relaxed max-w-lg group-hover:text-charcoal-light transition-colors duration-300">
                    {centre.desc}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="relative h-[140px] sm:h-[160px] overflow-hidden rounded-sm">
                  <Image
                    src={centre.image}
                    alt={centre.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="280px"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────
   STATS — Dark section with counters
   ────────────────────────────────────── */
function StatsSection() {
  const stats = [
    { value: 500, suffix: '+', label: 'Hospital Beds' },
    { value: 200, suffix: '+', label: 'Expert Physicians' },
    { value: 50, suffix: '+', label: 'Specialities' },
    { value: 25, suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <section className="bg-charcoal py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sage/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center ${i > 0 ? 'md:border-l md:border-white/10' : ''} md:px-8`}
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-1.5">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/35">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Counter ── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ──────────────────────────────────────
   TECHNOLOGY — Split with 3D DNA
   ────────────────────────────────────── */
function TechnologySection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
              Precision Medicine
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-3 mb-6 leading-tight">
              At the Forefront of{' '}
              <span className="italic text-sage">Genomic Research</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-8 max-w-md">
              Our genomics lab is equipped with next-generation sequencing platforms
              that enable precision diagnostics and personalized treatment plans
              based on your unique genetic profile.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Whole Genome Sequencing',
                'Pharmacogenomics',
                'Liquid Biopsy',
                'Genetic Counseling',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <DNAHelixScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────
   PATIENT STORIES — Elegant quotes
   ────────────────────────────────────── */
function PatientStories() {
  const stories = [
    {
      quote: "The cardiac team at MedVista didn't just repair my heart — they gave me my life back. The care was extraordinary, personal, and deeply human.",
      name: 'Ananya Sharma',
      detail: 'Cardiac Surgery Patient, 2024',
    },
    {
      quote: "From diagnosis to recovery, every moment was handled with such precision and warmth. I never felt like just another patient — I felt heard.",
      name: 'Rajesh Kapoor',
      detail: 'Neuro Rehabilitation Patient, 2023',
    },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20"
        >
          <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">
            Voices of Trust
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {stories.map((story, i) => (
            <motion.blockquote
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Quote mark */}
              <div className="font-display text-[80px] sm:text-[100px] text-sage/10 leading-none -mb-10 -ml-1 select-none">
                &ldquo;
              </div>
              <p className="font-display text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed mb-6">
                {story.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="font-display text-sm text-sage">{story.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-body text-[13px] font-medium text-charcoal">
                    {story.name}
                  </div>
                  <div className="font-body text-[11px] text-warm-gray">
                    {story.detail}
                  </div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────
   CTA — Terracotta section
   ────────────────────────────────────── */
function CTASection() {
  return (
    <section className="bg-terracotta py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-[-6deg] translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Begin Your Journey
          </h2>
          <p className="font-body text-[14px] sm:text-[15px] text-white/65 max-w-lg mx-auto mb-8">
            Take the first step toward world-class healthcare. Our team is ready
            to guide you every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-terracotta font-body text-[13px] font-medium rounded-full hover:bg-ivory transition-colors duration-300 group"
          >
            Book an Appointment
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────
   ABOUT TEASER — Split with image
   ────────────────────────────────────── */
function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="bg-ivory-dark py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div style={{ y: imageY }}>
              <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
                <Image
                  src="/images/about-hospital.png"
                  alt="About MedVista"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-sage/20 pointer-events-none" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-5 leading-tight">
              A Legacy of Healing,<br />
              <span className="italic text-sage">A Future of Hope</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-5" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-6 max-w-md">
              Founded in 1998, MedVista Premier has grown from a modest 50-bed
              facility to a 500+ bed multi-speciality hospital recognized globally
              for clinical excellence. Our commitment to integrating advanced
              technology with compassionate care has earned the trust of over
              2 million patients.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-[13px] text-charcoal hover:text-sage transition-colors duration-300 group"
            >
              Read our story
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────
   DEPARTMENTS TEASER — Minimal list
   ────────────────────────────────────── */
function DepartmentsTeaser() {
  const departments = [
    { name: 'Cardiology', number: '01' },
    { name: 'Neurology', number: '02' },
    { name: 'Orthopaedics', number: '03' },
    { name: 'Oncology', number: '04' },
    { name: 'Pediatrics', number: '05' },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">
              Specialized Care
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">
              Our Departments
            </h2>
            <p className="font-body text-[13px] text-warm-gray leading-relaxed mt-3 max-w-xs">
              Over 50 specialities under one roof, each led by teams of renowned experts.
            </p>
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 mt-6 font-body text-[13px] text-sage hover:text-sage-dark transition-colors duration-300 group"
            >
              View all
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right: list */}
          <div>
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href="/departments"
                  className="group flex items-center justify-between py-5 sm:py-6 border-b border-border-custom hover:border-sage/40 transition-colors duration-400"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-body text-[11px] text-warm-gray/60 tabular-nums">
                      {dept.number}
                    </span>
                    <span className="font-display text-xl sm:text-2xl text-charcoal group-hover:text-sage transition-colors duration-300">
                      {dept.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-border-custom group-hover:text-sage group-hover:rotate-0 -rotate-45 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export default function HomeSections() {
  return (
    <>
      <PhilosophySection />
      <CentresOfExcellence />
      <StatsSection />
      <TechnologySection />
      <PatientStories />
      <CTASection />
      <AboutTeaser />
      <DepartmentsTeaser />
    </>
  );
}

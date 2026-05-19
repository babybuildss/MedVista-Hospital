'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DNAHelixScene = dynamic(() => import('@/components/hospital/DNAHelix'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="text-warm-gray text-sm font-body">Loading 3D...</div>
    </div>
  ),
});

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ─── Philosophy Section ─── */
function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const words = section.querySelectorAll('.philosophy-word');
    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger && section.contains(t.trigger)) {
          t.kill();
        }
      });
    };
  }, []);

  const line1 = ['Medicine', 'is', 'not', 'just', 'science.'];
  const line2 = ["It's", 'the', 'art', 'of'];
  const line3 = ['understanding', 'a', 'human', 'story.'];

  const allWords = [...line1, ...line2, ...line3];

  return (
    <section ref={sectionRef} className="bg-ivory py-24 sm:py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-snug">
          <div className="mb-2">
            {line1.map((word, i) => (
              <span key={`l1-${i}`} className="philosophy-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </div>
          <div className="mb-2">
            {line2.map((word, i) => (
              <span key={`l2-${i}`} className="philosophy-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </div>
          <div>
            {line3.map((word, i) => (
              <span
                key={`l3-${i}`}
                className={`philosophy-word inline-block mr-[0.3em] ${
                  i === 2 || i === 3 ? 'italic text-sage' : ''
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Centres of Excellence ─── */
function CentresOfExcellence() {
  const centres = [
    {
      name: 'Cardiac Sciences',
      desc: 'Pioneering minimally invasive cardiac procedures with outcomes that set global benchmarks.',
      image: '/images/doctor-1.png',
    },
    {
      name: 'Neuro Sciences',
      desc: 'Advanced neurosurgery and neuro-rehabilitation guided by precision imaging technology.',
      image: '/images/doctor-2.png',
    },
    {
      name: 'Oncology',
      desc: 'Comprehensive cancer care from early detection to personalized immunotherapy protocols.',
      image: '/images/doctor-3.png',
    },
  ];

  return (
    <section className="bg-ivory-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            Centres of Excellence
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-charcoal tracking-tight mt-3">
            Where Expertise<br />Meets Empathy
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll on desktop, vertical on mobile */}
      <div className="md:horizontal-scroll flex flex-col md:flex-row gap-6 md:gap-8 px-6 lg:px-8 pb-4">
        {centres.map((centre, i) => (
          <motion.div
            key={centre.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group flex-shrink-0 w-full md:w-[420px] lg:w-[480px]"
          >
            <div className="relative h-[300px] sm:h-[360px] overflow-hidden rounded-sm mb-5">
              <Image
                src={centre.image}
                alt={centre.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-2 group-hover:text-sage transition-colors duration-300">
              {centre.name}
            </h3>
            <p className="font-body text-base text-charcoal-light leading-relaxed">
              {centre.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  const stats = [
    { value: 500, suffix: '+', label: 'Hospital Beds' },
    { value: 200, suffix: '+', label: 'Expert Physicians' },
    { value: 50, suffix: '+', label: 'Specialities' },
    { value: 25, suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl sm:text-6xl md:text-7xl text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Technology + 3D Section ─── */
function TechnologySection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
              Precision Medicine
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3 mb-6 leading-tight">
              At the Forefront of{' '}
              <span className="italic text-sage">Genomic Research</span>
            </h2>
            <div className="h-[1.5px] w-16 bg-sage mb-6" />
            <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed mb-8">
              Our genomics lab is equipped with next-generation sequencing platforms
              that enable precision diagnostics and personalized treatment plans
              based on your unique genetic profile.
            </p>
            <div className="space-y-4">
              {[
                'Whole Genome Sequencing',
                'Pharmacogenomics',
                'Liquid Biopsy for Cancer',
                'Genetic Counseling',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span className="font-body text-sm text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <DNAHelixScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Patient Stories ─── */
function PatientStories() {
  const stories = [
    {
      quote:
        'The cardiac team at MedVista didn\'t just repair my heart — they gave me my life back. The care was extraordinary, personal, and deeply human.',
      name: 'Ananya Sharma',
      detail: 'Cardiac Surgery Patient, 2024',
    },
    {
      quote:
        'From diagnosis to recovery, every moment was handled with such precision and warmth. I never felt like just another patient — I felt heard.',
      name: 'Rajesh Kapoor',
      detail: 'Neuro Rehabilitation Patient, 2023',
    },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3">
            Voices of Trust
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {stories.map((story, i) => (
            <motion.blockquote
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-display text-8xl sm:text-9xl text-sage/15 absolute -top-8 -left-2 leading-none select-none">
                &ldquo;
              </span>
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal leading-relaxed pl-8 sm:pl-12">
                {story.quote}
              </p>
              <footer className="mt-6 pl-8 sm:pl-12">
                <div className="font-body text-sm font-medium text-charcoal">
                  {story.name}
                </div>
                <div className="font-body text-xs text-warm-gray mt-0.5">
                  {story.detail}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="bg-terracotta py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            Begin Your Journey
          </h2>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-8">
            Take the first step toward world-class healthcare. Our team is ready
            to guide you every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-terracotta font-body text-sm font-medium rounded-full hover:bg-ivory transition-colors duration-300 group"
          >
            Book an Appointment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About Teaser ─── */
function AboutTeaser() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden">
              <Image
                src="/images/about-hospital.png"
                alt="About MedVista"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
              Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3 mb-6 leading-tight">
              A Legacy of Healing,<br />
              <span className="italic text-sage">A Future of Hope</span>
            </h2>
            <div className="h-[1.5px] w-16 bg-sage mb-6" />
            <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed mb-6">
              Founded in 1998, MedVista Premier has grown from a modest 50-bed
              facility to a 500+ bed multi-speciality hospital recognized globally
              for clinical excellence. Our commitment to integrating advanced
              technology with compassionate care has earned the trust of over
              2 million patients.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-sm text-sage hover:text-sage-dark transition-colors duration-300 group"
            >
              Read our story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Departments Teaser ─── */
function DepartmentsTeaser() {
  const departments = [
    'Cardiology',
    'Neurology',
    'Orthopaedics',
    'Oncology',
    'Pediatrics',
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
            Specialized Care
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal tracking-tight mt-3">
            Our Departments
          </h2>
        </motion.div>

        <div className="space-y-0">
          {departments.map((dept, i) => (
            <motion.div
              key={dept}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href="/departments"
                className="group flex items-center justify-between py-5 border-b border-border-custom hover:border-sage transition-colors duration-300"
              >
                <span className="font-display text-2xl sm:text-3xl text-charcoal group-hover:text-sage transition-colors duration-300">
                  {dept}
                </span>
                <ArrowDownRight className="w-5 h-5 text-warm-gray group-hover:text-sage group-hover:rotate-0 -rotate-45 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
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

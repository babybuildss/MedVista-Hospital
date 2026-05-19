'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ivory overflow-hidden"
    >
      {/* Decorative large number */}
      <div className="absolute top-16 right-0 sm:right-8 lg:right-16 pointer-events-none select-none">
        <span className="font-display text-[180px] sm:text-[240px] lg:text-[320px] text-charcoal/[0.03] leading-none">
          25
        </span>
      </div>

      {/* Subtle sage gradient orb - decorative background element */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-sage/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-terracotta/5 blur-[100px] pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column: Text content */}
          <div className="lg:col-span-7">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1.5px] w-8 bg-sage" />
              <span className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-sage">
                Est. 1998 &mdash; New Delhi
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div style={{ y: textY }}>
              <h1 className="font-display text-charcoal">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92]"
                >
                  Where Care
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] italic text-sage"
                >
                  Becomes
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92]"
                >
                  Craft
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtext + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 max-w-md"
            >
              <p className="font-body text-base sm:text-lg text-charcoal-light leading-relaxed mb-8">
                A 500-bed multi-speciality institution where clinical precision
                meets the art of healing. Trusted by over 2 million patients.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-ivory font-body text-sm rounded-full hover:bg-charcoal-light transition-colors duration-300 group"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/departments"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-custom text-charcoal font-body text-sm rounded-full hover:border-sage hover:text-sage transition-colors duration-300"
                >
                  Our Specialities
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right column: Image composition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              {/* Main image */}
              <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden rounded-sm">
                <Image
                  src="/images/hero-1.png"
                  alt="MedVista Premier Hospital"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Warm tint overlay to match theme */}
                <div className="absolute inset-0 bg-ivory/10 mix-blend-multiply" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-cream border border-border-custom px-5 py-4 shadow-sm"
              >
                <div className="font-display text-3xl sm:text-4xl text-charcoal">
                  500<span className="text-sage">+</span>
                </div>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-gray mt-0.5">
                  Hospital Beds
                </div>
              </motion.div>

              {/* Secondary floating element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-6 -right-3 sm:-right-6 bg-sage text-white px-4 py-3 rounded-full"
              >
                <div className="font-display text-lg">24/7</div>
                <div className="font-body text-[9px] tracking-[0.15em] uppercase text-white/70">
                  Emergency
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom row: Quick stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-8 border-t border-border-custom"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '200+', label: 'Expert Physicians' },
              { value: '50+', label: 'Specialities' },
              { value: '30+', label: 'Countries Served' },
              { value: '2M+', label: 'Patients Treated' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
              >
                <div className="font-display text-2xl sm:text-3xl text-charcoal">
                  {stat.value}
                </div>
                <div className="font-body text-[10px] sm:text-xs tracking-[0.15em] uppercase text-warm-gray mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray">
          Scroll
        </span>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 32 }}
          transition={{ delay: 2.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] bg-border-custom"
        />
      </motion.div>
    </section>
  );
}

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

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ivory overflow-hidden"
    >
      <motion.div style={{ opacity: fadeOut }} className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start min-h-[calc(100vh-200px)]">
            {/* ── Left column ── */}
            <div className="lg:col-span-7 flex flex-col justify-center lg:pt-8">
              {/* Overline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-10 bg-sage" />
                <span className="font-body text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-sage">
                  Est. 1998 &mdash; New Delhi
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div style={{ y: textY }}>
                <h1 className="font-display text-charcoal leading-[0.88]">
                  <motion.span
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[clamp(3rem,8vw,7.5rem)] tracking-tight"
                  >
                    Where Care
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[clamp(3rem,8vw,7.5rem)] tracking-tight italic text-sage"
                  >
                    Becomes
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[clamp(3rem,8vw,7.5rem)] tracking-tight"
                  >
                    Craft
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subtext + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-8 sm:mt-10 max-w-md"
              >
                <p className="font-body text-[15px] sm:text-base text-charcoal-light leading-relaxed mb-8">
                  A 500-bed multi-speciality institution where clinical precision
                  meets the art of healing. Trusted by over 2 million patients across 30 countries.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-charcoal text-ivory font-body text-[13px] rounded-full hover:bg-charcoal-light transition-all duration-300 group"
                  >
                    Book Appointment
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/departments"
                    className="inline-flex items-center gap-2 px-6 py-3 font-body text-[13px] text-charcoal hover:text-sage transition-colors duration-300"
                  >
                    Explore Departments
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* ── Right column: Image + floating elements ── */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative lg:pt-12"
            >
              <motion.div style={{ y: imageY }} className="relative">
                {/* Main image */}
                <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden">
                  <Image
                    src="/images/hero-1.png"
                    alt="MedVista Premier Hospital"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>

                {/* Floating badge — bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-5 -left-3 sm:-left-6 bg-charcoal text-white px-5 py-4"
                >
                  <div className="font-display text-3xl leading-none">
                    500<span className="text-sage">+</span>
                  </div>
                  <div className="font-body text-[9px] tracking-[0.2em] uppercase text-white/50 mt-1">
                    Hospital Beds
                  </div>
                </motion.div>

                {/* Floating badge — top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-body text-[11px] text-charcoal font-medium">24/7 Emergency</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom stats strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="border-t border-border-custom"
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: '200+', label: 'Expert Physicians' },
                { value: '50+', label: 'Specialities' },
                { value: '30+', label: 'Countries Served' },
                { value: '2M+', label: 'Patients Treated' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-6 sm:py-8 ${i > 0 ? 'border-l border-border-custom' : ''} px-4 sm:px-6`}
                >
                  <div className="font-display text-xl sm:text-2xl text-charcoal">
                    {stat.value}
                  </div>
                  <div className="font-body text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-warm-gray mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

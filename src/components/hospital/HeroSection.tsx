'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

/* ── 3D Hero background - dramatic DNA helix scene ── */
const HeroBackground3D = dynamic(
  () => import('@/components/hospital/3d/HeroBackground'),
  { ssr: false, loading: () => null }
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleDown = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal"
    >
      {/* 3D Background - Full screen DNA + particles */}
      <motion.div className="absolute inset-0" style={{ scale: scaleDown }}>
        <HeroBackground3D />
      </motion.div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E") repeat', backgroundSize: '120px' }} />

      {/* Animated vertical accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 sm:left-8 lg:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage/15 to-transparent origin-top hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-10 sm:left-12 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-terracotta/10 to-transparent origin-top hidden lg:block"
      />

      {/* Content */}
      <motion.div style={{ opacity: fadeOut }} className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full pb-20 sm:pb-24 lg:pb-32">
          <motion.div style={{ y: textY }}>
            {/* Overline with animated reveal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-sage/60"
              />
              <span className="font-body text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-white/40">
                Est. 1998 &mdash; New Delhi
              </span>
            </motion.div>

            {/* Heading with staggered cinematic reveal */}
            <h1 className="font-display text-white max-w-[900px]">
              <motion.span
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(2.8rem,8vw,7.5rem)] tracking-tight leading-[0.88]"
              >
                Where Care
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(2.8rem,8vw,7.5rem)] tracking-tight leading-[0.88] italic text-sage-light"
              >
                Becomes
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(2.8rem,8vw,7.5rem)] tracking-tight leading-[0.88]"
              >
                Craft
              </motion.span>
            </h1>

            {/* Animated line separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-20 bg-gradient-to-r from-sage/60 to-transparent mt-6 mb-6 origin-left"
            />

            {/* Subtext + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            >
              <p className="font-body text-[14px] sm:text-[15px] text-white/45 leading-relaxed max-w-md">
                A 500-bed multi-speciality institution where clinical precision
                meets the art of healing. Trusted by over 2 million patients.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-charcoal font-body text-[13px] font-medium rounded-full hover:bg-sage-light hover:text-charcoal transition-all duration-500 group shadow-lg shadow-white/10"
                >
                  Book Appointment
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
                <Link
                  href="/departments"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white font-body text-[13px] rounded-full hover:border-sage/40 hover:bg-sage/10 transition-all duration-500"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats bar - glass morphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="glass">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { value: '500+', label: 'Hospital Beds' },
                  { value: '200+', label: 'Expert Physicians' },
                  { value: '50+', label: 'Specialities' },
                  { value: '24/7', label: 'Emergency Care' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + i * 0.1 }}
                    className={`py-5 sm:py-6 px-4 sm:px-6 ${i > 0 ? 'border-l border-white/10' : ''}`}
                  >
                    <div className="font-display text-xl sm:text-2xl text-white">
                      {stat.value}
                    </div>
                    <div className="font-body text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-white/35 mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with pulse animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[9px] tracking-[0.35em] uppercase text-white/25">
          Scroll
        </span>
        <div className="w-[1px] h-8 relative overflow-hidden">
          <motion.div
            animate={{ y: [-16, 16] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-4 bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

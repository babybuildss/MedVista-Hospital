'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';

/* ── 3D Hero background - floating medical particles ── */
const HeroParticles = dynamic(
  () => import('@/components/hospital/3d/MedicalCross'),
  { ssr: false, loading: () => null }
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal"
    >
      {/* Full-bleed background image with parallax zoom */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/images/hero-1.png"
          alt="MedVista Premier Hospital"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dramatic gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* 3D Floating medical particles - subtle overlay on right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none hidden lg:block">
        <HeroParticles />
      </div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E") repeat', backgroundSize: '120px' }} />

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 sm:left-8 lg:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage/20 to-transparent origin-top hidden lg:block"
      />

      {/* Content */}
      <motion.div style={{ opacity: fadeOut }} className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full pb-16 sm:pb-20 lg:pb-28">
          <motion.div style={{ y: textY }}>
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-10 bg-sage/60" />
              <span className="font-body text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-white/50">
                Est. 1998 &mdash; New Delhi
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display text-white">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3rem,9vw,8rem)] tracking-tight leading-[0.88]"
              >
                Where Care
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3rem,9vw,8rem)] tracking-tight leading-[0.88] italic text-sage-light"
              >
                Becomes
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(3rem,9vw,8rem)] tracking-tight leading-[0.88]"
              >
                Craft
              </motion.span>
            </h1>

            {/* Subtext + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            >
              <p className="font-body text-[14px] sm:text-[15px] text-white/50 leading-relaxed max-w-md">
                A 500-bed multi-speciality institution where clinical precision
                meets the art of healing. Trusted by over 2 million patients.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-charcoal font-body text-[13px] rounded-full hover:bg-ivory transition-all duration-300 group"
                >
                  Book Appointment
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/departments"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-body text-[13px] rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats bar - glass morphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
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
                  <div
                    key={stat.label}
                    className={`py-5 sm:py-6 px-4 sm:px-6 ${i > 0 ? 'border-l border-white/10' : ''}`}
                  >
                    <div className="font-display text-xl sm:text-2xl text-white">
                      {stat.value}
                    </div>
                    <div className="font-body text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-white/40 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[9px] tracking-[0.35em] uppercase text-white/30">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

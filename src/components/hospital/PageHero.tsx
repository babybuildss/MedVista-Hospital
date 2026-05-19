'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

/* ── Lightweight 3D background for page heroes ── */
const ParticleWaveScene = dynamic(
  () => import('@/components/hospital/3d/ParticleWave'),
  { ssr: false, loading: () => null }
);

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="gradient-dark pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
      {/* 3D Particle wave background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ParticleWaveScene />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sage/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 font-display text-[150px] sm:text-[200px] text-white/[0.02] leading-none select-none pointer-events-none">
        {title.charAt(0)}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/30 mb-5 flex items-center gap-2"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-sage-light transition-colors duration-300">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="text-white/15">/</span>}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title + Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-[13px] sm:text-sm text-white/40 max-w-sm sm:text-right"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 h-px bg-gradient-to-r from-sage/50 to-transparent origin-left"
        />
      </div>
    </section>
  );
}

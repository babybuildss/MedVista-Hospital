'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-ivory pt-28 sm:pt-32 pb-10 sm:pb-14 border-b border-border-custom">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-warm-gray mb-4 flex items-center gap-2"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-sage transition-colors duration-300"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-charcoal">{crumb.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <span className="text-border-custom">/</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title + Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-[13px] sm:text-sm text-warm-gray max-w-sm sm:text-right"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

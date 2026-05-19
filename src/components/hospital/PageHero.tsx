'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-ivory pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.15em] uppercase text-warm-gray mb-6"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={i}>
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
                  <span className="mx-3 text-border-custom">/</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 h-[1.5px] bg-sage origin-left max-w-32"
        />
      </div>
    </section>
  );
}

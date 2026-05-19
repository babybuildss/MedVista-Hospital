'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-navy-gradient py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i === 0 && <Home className="w-4 h-4 text-gold" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-white/50 text-sm hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gold text-sm font-medium">{item.label}</span>
              )}
              {i < breadcrumb.length - 1 && (
                <ChevronRight className="w-3 h-3 text-white/30" />
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
          {title.split(' ').map((word, i) => (
            <span key={i}>
              {i === title.split(' ').length - 1 ? (
                <span className="text-gradient-gold">{word}</span>
              ) : (
                word
              )}{' '}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="section-divider mx-auto mt-6"
        />
      </div>
    </section>
  );
}

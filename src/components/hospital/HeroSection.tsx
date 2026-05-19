'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const heroImages = [
  '/images/hero-1.png',
  '/images/hero-2.png',
  '/images/hero-3.png',
  '/images/hero-4.png',
  '/images/hero-5.png',
];

const headlines = [
  'Where Compassion Meets Innovation',
  'World-Class Healthcare, Reimagined',
  'Your Health, Our Legacy',
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(headlineInterval);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector('#home-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
          >
            <Image
              src={src}
              alt={`Hospital hero ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60 z-[1]" />
      </div>

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium">
            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            Trusted by 2M+ Patients Worldwide
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center mb-6 sm:mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeadline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight"
            >
              {headlines[currentHeadline].split(' ').map((word, i) => (
                <span key={i}>
                  {i === headlines[currentHeadline].split(' ').length - 1 ? (
                    <span className="text-gradient-gold">{word}</span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed px-4"
        >
          Experience unparalleled medical excellence with cutting-edge technology,
          world-renowned specialists, and compassionate care that puts you first.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
          </Link>
          <Link
            href="/departments"
            className="group flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300"
          >
            Explore Excellence
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentSlide
                  ? 'w-8 bg-gold'
                  : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors z-10"
          aria-label="Scroll to next section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
        </button>
      </div>
    </section>
  );
}

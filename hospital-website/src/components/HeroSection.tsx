'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const heroSlides = [
  {
    image: '/images/hero-1.png',
    title: 'Where Compassion',
    subtitle: 'Meets Innovation',
    description: 'Experience world-class healthcare in an environment designed for your comfort and recovery.',
  },
  {
    image: '/images/hero-2.png',
    title: 'World-Class Healthcare',
    subtitle: 'Reimagined',
    description: 'Our expert medical team delivers personalized care with cutting-edge technology and unwavering compassion.',
  },
  {
    image: '/images/hero-3.png',
    title: 'Your Health',
    subtitle: 'Our Legacy',
    description: 'From advanced surgery to preventive care, we set the gold standard in medical excellence.',
  },
  {
    image: '/images/hero-4.png',
    title: 'Advanced Diagnostics',
    subtitle: 'Precise Results',
    description: 'State-of-the-art diagnostic equipment ensures accurate results for informed treatment decisions.',
  },
  {
    image: '/images/hero-5.png',
    title: 'Expert Teams',
    subtitle: 'United For You',
    description: 'Our multidisciplinary teams collaborate to deliver comprehensive, patient-centered care.',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 1500);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[current].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-[2]" />

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-[5] flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full glass mb-5 sm:mb-8"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d4a853] animate-pulse" />
              <span className="text-[#d4a853] text-[10px] sm:text-sm font-medium tracking-wider uppercase">
                Award-Winning Healthcare
              </span>
            </motion.div>

            {/* Title Line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight"
            >
              {heroSlides[current].title}
            </motion.h1>

            {/* Title Line 2 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight gradient-text"
            >
              {heroSlides[current].subtitle}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2"
            >
              {heroSlides[current].description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="btn-gold flex items-center gap-2 text-sm sm:text-base !py-3 sm:!py-[14px] !px-6 sm:!px-9 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#about')}
                className="btn-outline-gold flex items-center gap-2 text-sm sm:text-base !py-2.5 sm:!py-3 !px-6 sm:!px-8 w-full sm:w-auto justify-center"
              >
                Explore Excellence
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-[5]">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrent(i);
                  setTimeout(() => setIsTransitioning(false), 1500);
                }
              }}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? 'w-8 sm:w-10 h-2 bg-[#d4a853]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-[5]"
        >
          <span className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4a853] animate-scroll-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

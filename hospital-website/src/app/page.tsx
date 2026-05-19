'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HomeSections from '@/components/HomeSections';
import AboutSection from '@/components/AboutSection';
import DepartmentsSection from '@/components/DepartmentsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[100] bg-[#0a1628] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center mx-auto animate-pulse-glow">
            <span className="text-[#0a1628] font-bold text-3xl">M</span>
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          MedVista
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mt-1"
        >
          Premier Hospital
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
          className="h-0.5 bg-gradient-to-r from-[#d4a853] to-[#3b82f6] mx-auto mt-6 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
        <main className="flex flex-col min-h-screen">
          <HeroSection />
          <HomeSections />
          <AboutSection />
          <DepartmentsSection />
          <FacilitiesSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

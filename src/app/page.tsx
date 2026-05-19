'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '@/components/hospital/Navbar';
import HeroSection from '@/components/hospital/HeroSection';
import HomeSections from '@/components/hospital/HomeSections';
import AboutSection from '@/components/hospital/AboutSection';
import DepartmentsSection from '@/components/hospital/DepartmentsSection';
import FacilitiesSection from '@/components/hospital/FacilitiesSection';
import ContactSection from '@/components/hospital/ContactSection';
import Footer from '@/components/hospital/Footer';
import { Heart } from 'lucide-react';

const DNAHelixScene = dynamic(() => import('@/components/hospital/DNAHelix'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="text-white/30 text-sm">Loading 3D...</div>
    </div>
  ),
});

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-navy-gradient flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-gold" />
        </div>
        <h1 className="text-white text-3xl font-bold tracking-tight mb-1">
          MedVista
        </h1>
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-10">
          Premier
        </p>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-white/30 text-xs mt-3">Loading experience...</p>
      </motion.div>
    </motion.div>
  );
}

function DNAHelixWrapper() {
  return (
    <div className="w-full">
      <DNAHelixScene />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div
        className={`min-h-screen flex flex-col transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <HeroSection />

          {/* Home sub-sections: Centres of Excellence, Doctors, Emergency, etc. */}
          <HomeSections />

          {/* About */}
          <AboutSection />

          {/* Departments */}
          <DepartmentsSection />

          {/* Facilities */}
          <FacilitiesSection />

          {/* DNA Helix 3D Section - embedded between sections */}
          <div className="bg-navy-gradient py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                    Precision Medicine
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                    At the Forefront of{' '}
                    <span className="text-gradient-gold">Genomic Research</span>
                  </h2>
                  <div className="section-divider mb-6" />
                  <p className="text-white/60 leading-relaxed mb-6">
                    Our genomics lab is equipped with next-generation sequencing
                    platforms that enable precision diagnostics and personalized
                    treatment plans based on your unique genetic profile.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Whole Genome Sequencing',
                      'Pharmacogenomics',
                      'Liquid Biopsy for Cancer',
                      'Genetic Counseling',
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <DNAHelixWrapper />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Contact / Appointment */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

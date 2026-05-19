'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HeroSection from '@/components/hospital/HeroSection';
import HomeSections from '@/components/hospital/HomeSections';
import { Heart, Brain, Bone, Sparkles, Baby, ArrowRight, Building, Stethoscope, ChevronRight } from 'lucide-react';

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
        className={`transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Hero */}
        <HeroSection />

        {/* Home sub-sections: Centres of Excellence, Doctors, Emergency, etc. */}
        <HomeSections />

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

        {/* Why Choose MedVista - About Teaser */}
        <div className="bg-premium-light py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                  Why MedVista
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4 leading-tight">
                  A Legacy of Healing,{' '}
                  <span className="text-gradient-blue">A Future of Hope</span>
                </h2>
                <div className="section-divider mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 1998, MedVista Premier has grown from a modest 50-bed
                  facility to a 500+ bed multi-speciality hospital recognized globally
                  for clinical excellence. Our commitment to integrating advanced
                  technology with compassionate care has earned the trust of over
                  2 million patients.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg">
                    <Building className="w-4 h-4 text-medical-blue" />
                    <span className="text-sm font-medium text-navy">500+ Beds</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg">
                    <Stethoscope className="w-4 h-4 text-medical-blue" />
                    <span className="text-sm font-medium text-navy">50+ Specialities</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-lg">
                    <Heart className="w-4 h-4 text-medical-blue" />
                    <span className="text-sm font-medium text-navy">2M+ Patients</span>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-navy to-navy-light text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-navy/20 transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '500+', label: 'Hospital Beds' },
                    { value: '200+', label: 'Expert Doctors' },
                    { value: '50+', label: 'Specialities' },
                    { value: '25+', label: 'Years of Excellence' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-gradient-gold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-500 text-xs font-medium tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Departments Teaser */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Specialized Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Our Departments & Specialities
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                With 50+ specialities under one roof, our departments are
                designed to provide comprehensive, integrated care for every
                medical need.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {[
                { icon: Heart, name: 'Cardiology', color: 'from-red-500 to-rose-600' },
                { icon: Brain, name: 'Neurology', color: 'from-purple-500 to-violet-600' },
                { icon: Bone, name: 'Orthopaedics', color: 'from-blue-500 to-medical-blue' },
                { icon: Sparkles, name: 'Oncology', color: 'from-teal to-teal-light' },
                { icon: Baby, name: 'Pediatrics', color: 'from-amber-500 to-orange-500' },
              ].map((dept, i) => {
                const Icon = dept.icon;
                return (
                  <motion.div
                    key={dept.name}
                    className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-500 text-center cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-navy font-semibold text-sm">{dept.name}</h4>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/departments"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-navy to-navy-light text-white font-bold rounded-xl hover:shadow-xl hover:shadow-navy/20 transition-all duration-300 hover:scale-105"
              >
                View All Departments
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/* ── Dynamic 3D component imports ── */
const DNAEnhancedScene = dynamic(() => import('@/components/hospital/3d/DNAEnhanced'), {
  ssr: false,
  loading: () => <div className="w-full h-[280px] sm:h-[350px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const Heart3DScene = dynamic(() => import('@/components/hospital/3d/Heart3D'), {
  ssr: false,
  loading: () => <div className="w-full h-[280px] sm:h-[350px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const MolecularStructureScene = dynamic(() => import('@/components/hospital/3d/MolecularStructure'), {
  ssr: false,
  loading: () => <div className="w-full h-[280px] sm:h-[350px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const NeuralNetworkScene = dynamic(() => import('@/components/hospital/3d/NeuralNetwork'), {
  ssr: false,
  loading: () => <div className="w-full h-[280px] sm:h-[350px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const ParticleWaveScene = dynamic(() => import('@/components/hospital/3d/ParticleWave'), {
  ssr: false,
  loading: () => <div className="w-full h-[200px] sm:h-[250px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const MedicalCrossScene = dynamic(() => import('@/components/hospital/3d/MedicalCross'), {
  ssr: false,
  loading: () => <div className="w-full h-[280px] sm:h-[350px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

/* ═══════════════════════════════════════
   PHILOSOPHY — Full-width cinematic text with particle wave
   ═══════════════════════════════════════ */
function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-5%' });

  return (
    <section ref={sectionRef} className="gradient-dark py-28 sm:py-40 md:py-52 relative overflow-hidden">
      {/* 3D Particle Wave Background */}
      <div className="absolute inset-0 opacity-40">
        <ParticleWaveScene />
      </div>

      {/* Decorative large year */}
      <div className="absolute top-8 right-8 font-display text-[120px] sm:text-[200px] text-white/[0.03] leading-none select-none pointer-events-none">
        1998
      </div>

      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="font-display text-white leading-snug sm:leading-tight">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.8rem] mb-1 sm:mb-2">
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0 }} className="inline-block mr-[0.25em]">Medicine</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="inline-block mr-[0.25em]">is</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.4 }} className="inline-block mr-[0.25em]">not</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.6 }} className="inline-block mr-[0.25em]">just</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.8 }} className="inline-block">science.</motion.span>
          </div>
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.8rem] mb-1 sm:mb-2">
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 1.1 }} className="inline-block mr-[0.25em] italic text-sage-light">It's</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 1.3 }} className="inline-block mr-[0.25em]">the</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 1.5 }} className="inline-block mr-[0.25em] italic text-sage-light">art</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 1.7 }} className="inline-block">of</motion.span>
          </div>
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.8rem]">
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 2 }} className="inline-block mr-[0.25em]">understanding</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 2.2 }} className="inline-block mr-[0.25em] italic text-sage-light">human</motion.span>
            <motion.span initial={{ opacity: 0.08 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 2.4 }} className="inline-block italic text-sage-light">stories.</motion.span>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 h-px max-w-24 mx-auto bg-gradient-to-r from-transparent via-sage-light/50 to-transparent origin-center"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CENTRES OF EXCELLENCE — Bold image cards with 3D Heart
   ═══════════════════════════════════════ */
function CentresOfExcellence() {
  const centres = [
    {
      name: 'Cardiac Sciences',
      desc: 'Pioneering minimally invasive cardiac procedures with outcomes that set global benchmarks.',
      image: '/images/doctor-1.png',
    },
    {
      name: 'Neuro Sciences',
      desc: 'Advanced neurosurgery and neuro-rehabilitation guided by precision imaging technology.',
      image: '/images/doctor-2.png',
    },
    {
      name: 'Oncology',
      desc: 'Comprehensive cancer care from early detection to personalized immunotherapy protocols.',
      image: '/images/doctor-3.png',
    },
  ];

  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Centres of Excellence</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[3.2rem] text-charcoal tracking-tight mt-2 leading-tight">
              Where Expertise<br />Meets <span className="italic text-sage">Empathy</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link href="/departments" className="inline-flex items-center gap-2 font-body text-[13px] text-charcoal hover:text-sage transition-colors duration-300 group">
              View all departments <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {centres.map((centre, i) => (
            <motion.div key={centre.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className="group relative">
              <Link href="/departments" className="block">
                <div className="relative h-[380px] sm:h-[420px] lg:h-[480px] overflow-hidden">
                  <Image src={centre.image} alt={centre.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="font-body text-[9px] tracking-[0.25em] uppercase text-white/40 mb-2">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-display text-xl sm:text-2xl text-white mb-1 group-hover:text-sage-light transition-colors duration-300">{centre.name}</h3>
                    <p className="font-body text-[12px] sm:text-[13px] text-white/55 leading-relaxed max-w-[260px]">{centre.desc}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 font-body text-[11px] text-sage-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more <ArrowRight className="w-3 h-3" /></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   STATS — Bold dark with sage gradient + 3D Medical Cross
   ═══════════════════════════════════════ */
function StatsSection() {
  const stats = [
    { value: 500, suffix: '+', label: 'Hospital Beds' },
    { value: 200, suffix: '+', label: 'Expert Physicians' },
    { value: 50, suffix: '+', label: 'Specialities' },
    { value: 25, suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <section className="gradient-sage py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-charcoal/10 blur-3xl pointer-events-none" />

      {/* 3D Medical Cross as a subtle background element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden lg:block">
        <MedicalCrossScene />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`text-center ${i > 0 ? 'md:border-l md:border-white/15' : ''} md:px-6`}>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/45">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════
   TECHNOLOGY — Split with Enhanced 3D DNA + Molecular
   ═══════════════════════════════════════ */
function TechnologySection() {
  return (
    <section className="bg-cream py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 font-display text-[300px] text-charcoal/[0.02] leading-none select-none pointer-events-none hidden lg:block">DNA</div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Precision Medicine</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
              At the Forefront of <span className="italic text-sage">Genomic Research</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-8 max-w-md">
              Our genomics lab is equipped with next-generation sequencing platforms that enable precision diagnostics and personalized treatment plans based on your unique genetic profile.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Whole Genome Sequencing', 'Pharmacogenomics', 'Liquid Biopsy', 'Genetic Counseling'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 border border-sage/10 rounded-sm pointer-events-none" />
            <DNAEnhancedScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CARDIAC EXCELLENCE — New section with 3D Heart
   ═══════════════════════════════════════ */
function CardiacExcellenceSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 font-display text-[200px] sm:text-[300px] text-terracotta/[0.03] leading-none select-none pointer-events-none hidden lg:block">+</div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 3D Heart */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 border border-terracotta/10 rounded-sm pointer-events-none" />
            <Heart3DScene />
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 lg:order-2">
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-terracotta">Cardiac Excellence</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
              A Heart That<br /><span className="italic text-terracotta">Never Stops Caring</span>
            </h2>
            <div className="h-px w-12 bg-terracotta mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-8 max-w-md">
              Our cardiac programme is among the most advanced in the region, with survival rates that surpass international benchmarks. From minimally invasive valve repairs to complex aortic surgeries, our team delivers outcomes that redefine what is possible.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['3000+ Procedures/Year', '99.2% Success Rate', 'Robotic Heart Surgery', '24/7 Cardiac ICU'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MOLECULAR MEDICINE — New section with 3D Molecular Structure
   ═══════════════════════════════════════ */
function MolecularMedicineSection() {
  return (
    <section className="bg-ivory-dark py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Molecular Medicine</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
              Drug Discovery at<br /><span className="italic text-sage">Atomic Scale</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-8 max-w-md">
              Our computational biology division leverages molecular dynamics simulations and AI-driven compound screening to accelerate drug discovery. What once took years now takes months, bringing life-saving therapies to patients faster.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['AI Drug Screening', 'Protein Folding Analysis', 'Computational Chemistry', 'Biomarker Discovery'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 border border-sage/10 rounded-sm pointer-events-none" />
            <MolecularStructureScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   NEURO INNOVATION — New section with 3D Neural Network
   ═══════════════════════════════════════ */
function NeuroInnovationSection() {
  return (
    <section className="bg-cream py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 3D Neural Network */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 border border-sage/10 rounded-sm pointer-events-none" />
            <NeuralNetworkScene />
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 lg:order-2">
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Neuro Innovation</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
              Mapping the<br /><span className="italic text-sage">Brain's Frontiers</span>
            </h2>
            <div className="h-px w-12 bg-sage mb-6" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-8 max-w-md">
              Our neurosciences division combines advanced neuroimaging, brain-computer interfaces, and precision neurosurgery to treat conditions once considered inoperable. Every neural pathway tells a story, and we are learning to read them all.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Brain-Computer Interface', 'Stereotactic Radiosurgery', 'Neuro-Rehabilitation AI', 'Intra-Operative MRI'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span className="font-body text-[13px] text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PATIENT STORIES — Dark cinematic quotes
   ═══════════════════════════════════════ */
function PatientStories() {
  const stories = [
    { quote: "The cardiac team at MedVista didn't just repair my heart — they gave me my life back. The care was extraordinary, personal, and deeply human.", name: 'Ananya Sharma', detail: 'Cardiac Surgery Patient, 2024' },
    { quote: "From diagnosis to recovery, every moment was handled with such precision and warmth. I never felt like just another patient — I felt heard.", name: 'Rajesh Kapoor', detail: 'Neuro Rehabilitation Patient, 2023' },
  ];

  return (
    <section className="gradient-dark py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-sage/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 sm:mb-20">
          <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage-light">Patient Stories</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-2">Voices of Trust</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {stories.map((story, i) => (
            <motion.blockquote key={story.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="glass rounded-sm p-6 sm:p-8">
              <div className="font-display text-[60px] sm:text-[80px] text-sage-light/20 leading-none -mb-6 -ml-1 select-none">&ldquo;</div>
              <p className="font-display text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6">{story.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                  <span className="font-display text-sm text-sage-light">{story.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-body text-[13px] font-medium text-white">{story.name}</div>
                  <div className="font-body text-[11px] text-white/40">{story.detail}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CTA — Full-width terracotta
   ═══════════════════════════════════════ */
function CTASection() {
  return (
    <section className="gradient-warm py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-white/[0.07] skew-x-[-8deg] translate-x-1/4 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-charcoal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[3.5rem] text-white tracking-tight mb-4 leading-tight">Begin Your Journey</h2>
          <p className="font-body text-[14px] sm:text-[15px] text-white/60 max-w-lg mx-auto mb-8">Take the first step toward world-class healthcare. Our team is ready to guide you every step of the way.</p>
          <Link href="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-terracotta font-body text-[13px] font-medium rounded-full hover:bg-ivory transition-colors duration-300 group shadow-lg shadow-charcoal/10">
            Book an Appointment <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ABOUT TEASER — Asymmetric overlapping
   ═══════════════════════════════════════ */
function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="bg-ivory py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative lg:pr-16">
            <motion.div style={{ y: imageY }}>
              <div className="relative h-[340px] sm:h-[440px] lg:h-[520px] overflow-hidden">
                <Image src="/images/about-hospital.png" alt="About MedVista" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="absolute -bottom-6 right-0 lg:-right-4 bg-charcoal text-white p-5 sm:p-6 shadow-xl max-w-[200px]">
              <div className="font-display text-3xl sm:text-4xl text-sage-light leading-none">25+</div>
              <div className="font-body text-[9px] tracking-[0.2em] uppercase text-white/45 mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:pl-8 lg:pt-8 mt-8 lg:mt-0">
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-5 leading-tight">A Legacy of Healing,<br /><span className="italic text-sage">A Future of Hope</span></h2>
            <div className="h-px w-12 bg-sage mb-5" />
            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-6 max-w-md">Founded in 1998, MedVista Premier has grown from a modest 50-bed facility to a 500+ bed multi-speciality hospital recognized globally for clinical excellence.</p>
            <Link href="/about" className="inline-flex items-center gap-2 font-body text-[13px] text-charcoal hover:text-sage transition-colors duration-300 group">Read our story <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" /></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   DEPARTMENTS TEASER — Sticky heading + scrollable list
   ═══════════════════════════════════════ */
function DepartmentsTeaser() {
  const departments = [
    { name: 'Cardiology', number: '01' },
    { name: 'Neurology', number: '02' },
    { name: 'Orthopaedics', number: '03' },
    { name: 'Oncology', number: '04' },
    { name: 'Pediatrics', number: '05' },
  ];

  return (
    <section className="bg-ivory-dark py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:sticky lg:top-32 lg:self-start">
            <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Specialized Care</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2">Our Departments</h2>
            <p className="font-body text-[13px] text-warm-gray leading-relaxed mt-3 max-w-xs">Over 50 specialities under one roof, each led by teams of renowned experts.</p>
            <Link href="/departments" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-charcoal text-ivory font-body text-[13px] rounded-full hover:bg-charcoal-light transition-colors duration-300 group">View all <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" /></Link>
          </motion.div>
          <div>
            {departments.map((dept, i) => (
              <motion.div key={dept.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Link href="/departments" className="group flex items-center justify-between py-5 sm:py-6 border-b border-border-custom hover:border-sage/40 transition-colors duration-400">
                  <div className="flex items-center gap-4">
                    <span className="font-body text-[11px] text-warm-gray/40 tabular-nums">{dept.number}</span>
                    <span className="font-display text-xl sm:text-2xl text-charcoal group-hover:text-sage transition-colors duration-300">{dept.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-border-custom group-hover:text-sage group-hover:rotate-0 -rotate-45 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export default function HomeSections() {
  return (
    <>
      <PhilosophySection />
      <CentresOfExcellence />
      <StatsSection />
      <TechnologySection />
      <CardiacExcellenceSection />
      <MolecularMedicineSection />
      <NeuroInnovationSection />
      <PatientStories />
      <CTASection />
      <AboutTeaser />
      <DepartmentsTeaser />
    </>
  );
}

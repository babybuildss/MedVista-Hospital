'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Plus, Minus, ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/hospital/PageHero';

const NeuralNetworkScene = dynamic(() => import('@/components/hospital/3d/NeuralNetwork'), {
  ssr: false,
  loading: () => <div className="w-full h-[250px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

const departments = [
  { name: 'Cardiac Sciences', desc: 'Our Cardiac Sciences centre is equipped with state-of-the-art catheterization labs, hybrid operating rooms, and a dedicated cardiac ICU. We perform over 3,000 cardiac procedures annually with outcomes that rival the best institutions globally.' },
  { name: 'Neuro Sciences', desc: 'From complex brain tumor resections to advanced neuro-rehabilitation, our Neuro Sciences centre integrates precision imaging, intra-operative monitoring, and robotic-assisted surgery for unparalleled neurological care.' },
  { name: 'Orthopaedics & Joint Replacement', desc: 'Specializing in minimally invasive joint replacements, sports medicine, and spinal surgery. Our robotic-assisted surgery platform enables precision that reduces recovery time by up to 40%.' },
  { name: 'Oncology & Hematology', desc: 'Comprehensive cancer care from screening and early detection to personalized immunotherapy. Our tumour board brings together experts across disciplines to design treatment plans unique to each patient.' },
  { name: 'Pediatrics & Neonatology', desc: 'A child-friendly environment with a Level III NICU, pediatric ICU, and specialized surgical suites. Our team handles the most complex pediatric and neonatal cases with sensitivity and expertise.' },
  { name: 'Gastroenterology', desc: 'Advanced endoscopic procedures, liver transplantation, and management of complex GI disorders. Our centre is recognized for pioneering NOTES procedures in India.' },
  { name: 'Pulmonology', desc: 'Specialized care for respiratory conditions including interstitial lung disease, sleep disorders, and critical care ventilation. Our bronchoscopy suite offers both diagnostic and therapeutic interventions.' },
  { name: 'Nephrology & Urology', desc: 'From dialysis to kidney transplantation, our renal care programme is one of the most experienced in the region. Minimally invasive urological procedures ensure faster recovery.' },
  { name: 'Obstetrics & Gynaecology', desc: "Comprehensive women's health services including high-risk obstetrics, laparoscopic gynaecological surgery, and fertility treatment in a warm, supportive environment." },
  { name: 'Emergency & Trauma', desc: 'A 24/7 Level 1 trauma centre with a dedicated emergency team, rapid diagnostics, and seamless coordination with surgical specialties. Every minute counts, and we make each one matter.' },
];

export default function DepartmentsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <PageHero title="Departments" subtitle="Over 50 specialities led by teams of renowned experts" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Departments' }]} />

      {/* Neural Network 3D showcase */}
      <section className="bg-cream py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Network of Expertise</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
                Connected <span className="italic text-sage">Intelligence</span>
              </h2>
              <div className="h-px w-12 bg-sage mb-6" />
              <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed mb-6 max-w-md">
                Our departments don&apos;t work in isolation. Like a neural network, they are deeply interconnected — sharing insights, collaborating on complex cases, and learning from each other to deliver outcomes that no single speciality could achieve alone.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Multi-Disciplinary Teams', 'Tumour Board Reviews', 'Cross-Speciality Referrals', 'Integrated Care Pathways'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                    <span className="font-body text-[13px] text-charcoal-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
              <div className="absolute -inset-4 border border-sage/10 rounded-sm pointer-events-none" />
              <NeuralNetworkScene />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-72 px-4 py-2.5 bg-cream border border-border-custom rounded-full font-body text-[13px] text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-colors duration-300"
            />
          </div>

          {/* Department List */}
          <div className="space-y-0">
            {filtered.map((dept, i) => (
              <motion.div key={dept.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }} className="border-b border-border-custom">
                <button onClick={() => toggle(i)} className="w-full flex items-center justify-between py-5 sm:py-6 text-left group">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-body text-[11px] tracking-[0.15em] text-warm-gray/50 tabular-nums min-w-[24px]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-lg sm:text-xl md:text-2xl text-charcoal group-hover:text-sage transition-colors duration-300">{dept.name}</span>
                  </div>
                  <span className="flex-shrink-0 text-sage/50 group-hover:text-sage transition-colors duration-300">
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <div className="pb-6 pl-9 sm:pl-12">
                        <p className="font-body text-[13px] sm:text-sm text-charcoal-light leading-relaxed mb-4 max-w-xl">{dept.desc}</p>
                        <Link href="/contact" className="inline-flex items-center gap-1.5 font-body text-[12px] text-sage hover:text-sage-dark transition-colors duration-300 group">Book consultation <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" /></Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta py-14 sm:py-18">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight mb-3">Need Help Choosing?</h2>
          <p className="font-body text-[13px] sm:text-sm text-white/65 mb-6">Our patient coordination team can guide you to the right department.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-terracotta font-body text-[13px] font-medium rounded-full hover:bg-ivory transition-colors duration-300 group">Contact Us <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" /></Link>
        </div>
      </section>
    </>
  );
}

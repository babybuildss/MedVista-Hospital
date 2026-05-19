'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import PageHero from '@/components/hospital/PageHero';

const departments = [
  {
    name: 'Cardiac Sciences',
    desc: 'Our Cardiac Sciences centre is equipped with state-of-the-art catheterization labs, hybrid operating rooms, and a dedicated cardiac ICU. We perform over 3,000 cardiac procedures annually with outcomes that rival the best institutions globally.',
  },
  {
    name: 'Neuro Sciences',
    desc: 'From complex brain tumor resections to advanced neuro-rehabilitation, our Neuro Sciences centre integrates precision imaging, intra-operative monitoring, and robotic-assisted surgery for unparalleled neurological care.',
  },
  {
    name: 'Orthopaedics & Joint Replacement',
    desc: 'Specializing in minimally invasive joint replacements, sports medicine, and spinal surgery. Our robotic-assisted surgery platform enables precision that reduces recovery time by up to 40%.',
  },
  {
    name: 'Oncology & Hematology',
    desc: 'Comprehensive cancer care from screening and early detection to personalized immunotherapy. Our tumour board brings together experts across disciplines to design treatment plans unique to each patient.',
  },
  {
    name: 'Pediatrics & Neonatology',
    desc: 'A child-friendly environment with a Level III NICU, pediatric ICU, and specialized surgical suites. Our team handles the most complex pediatric and neonatal cases with sensitivity and expertise.',
  },
  {
    name: 'Gastroenterology',
    desc: 'Advanced endoscopic procedures, liver transplantation, and management of complex GI disorders. Our centre is recognized for pioneering NOTES procedures in India.',
  },
  {
    name: 'Pulmonology',
    desc: 'Specialized care for respiratory conditions including interstitial lung disease, sleep disorders, and critical care ventilation. Our bronchoscopy suite offers both diagnostic and therapeutic interventions.',
  },
  {
    name: 'Nephrology & Urology',
    desc: 'From dialysis to kidney transplantation, our renal care programme is one of the most experienced in the region. Minimally invasive urological procedures ensure faster recovery.',
  },
  {
    name: 'Obstetrics & Gynaecology',
    desc: 'Comprehensive women\'s health services including high-risk obstetrics, laparoscopic gynaecological surgery, and fertility treatment in a warm, supportive environment.',
  },
  {
    name: 'Emergency & Trauma',
    desc: 'A 24/7 Level 1 trauma centre with a dedicated emergency team, rapid diagnostics, and seamless coordination with surgical specialties. Every minute counts, and we make each one matter.',
  },
];

export default function DepartmentsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <PageHero
        title="Departments"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Departments' },
        ]}
      />

      {/* Search */}
      <section className="bg-ivory pb-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search departments..."
            className="w-full sm:w-80 px-5 py-3 bg-cream border border-border-custom rounded-full font-body text-sm text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-300"
            onChange={(e) => {
              // Simple filter by name
              const value = e.target.value.toLowerCase();
              const items = document.querySelectorAll('[data-dept-name]');
              items.forEach((item) => {
                const name = item.getAttribute('data-dept-name')?.toLowerCase() || '';
                const el = item as HTMLElement;
                el.style.display = name.includes(value) ? '' : 'none';
              });
            }}
          />
        </div>
      </section>

      {/* Department List */}
      <section className="bg-ivory py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                data-dept-name={dept.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-border-custom"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-body text-xs tracking-[0.15em] text-warm-gray tabular-nums min-w-[28px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal group-hover:text-sage transition-colors duration-300">
                      {dept.name}
                    </span>
                  </div>
                  <span className="flex-shrink-0 text-sage">
                    {openIndex === i ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-10 sm:pl-14">
                        <p className="font-body text-base text-charcoal-light leading-relaxed mb-4 max-w-2xl">
                          {dept.desc}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 font-body text-sm text-sage hover:text-sage-dark transition-colors duration-300 group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
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
      <section className="bg-terracotta py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Need Help Choosing?
          </h2>
          <p className="font-body text-base text-white/70 mb-6">
            Our patient coordination team can guide you to the right department.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-terracotta font-body text-sm font-medium rounded-full hover:bg-ivory transition-colors duration-300 group"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </>
  );
}

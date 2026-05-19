'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  Heart,
  Brain,
  Bone,
  Microscope,
  Baby,
  Siren,
  ScanLine,
  Activity,
  Scissors,
  ShieldCheck,
  Search,
} from 'lucide-react';

const departments = [
  {
    icon: Heart,
    name: 'Cardiology',
    description:
      'Comprehensive cardiac care from prevention to complex interventions, including bypass surgery, angioplasty, and cardiac rehabilitation programs.',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: Brain,
    name: 'Neurology',
    description:
      'Expert diagnosis and treatment of neurological disorders including stroke, epilepsy, Parkinson\'s, and advanced neurosurgical procedures.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Bone,
    name: 'Orthopaedics',
    description:
      'Joint replacements, sports medicine, spine surgery, and trauma care with robotic-assisted precision and rapid recovery protocols.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Microscope,
    name: 'Oncology',
    description:
      'Multidisciplinary cancer care with immunotherapy, targeted therapy, radiation oncology, and comprehensive tumor board consultations.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    description:
      'Specialized child healthcare from neonatal intensive care to pediatric surgery, with child-friendly environments and compassionate staff.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Siren,
    name: 'Emergency Care',
    description:
      '24/7 Level 1 trauma centre with rapid response teams, gold-standard emergency protocols, and seamless critical care transitions.',
    color: 'from-rose-500 to-red-600',
  },
  {
    icon: ScanLine,
    name: 'Radiology',
    description:
      'Advanced imaging services including 3T MRI, 256-slice CT, PET-CT, and interventional radiology with AI-assisted diagnostics.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Activity,
    name: 'ICU & Critical Care',
    description:
      'State-of-the-art intensive care units with 1:1 nurse-to-patient ratios, advanced monitoring, and ECMO support capabilities.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Scissors,
    name: 'General Surgery',
    description:
      'Minimally invasive and robotic-assisted surgical procedures across specialties, with enhanced recovery after surgery (ERAS) protocols.',
    color: 'from-slate-500 to-gray-600',
  },
  {
    icon: ShieldCheck,
    name: 'Preventive Healthcare',
    description:
      'Comprehensive health screening packages, executive check-ups, wellness programs, and personalized preventive care strategies.',
    color: 'from-emerald-500 to-green-600',
  },
];

export default function DepartmentsSection() {
  const [search, setSearch] = useState('');

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="departments" className="relative py-10 sm:py-20 md:py-28 bg-section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#d4a853] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Centres of Excellence
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our <span className="gradient-text">Departments</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Each department is a centre of excellence, staffed by internationally trained
              specialists and equipped with the latest medical technology.
            </p>
            <div className="section-divider mt-4 sm:mt-6" />
          </div>
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal>
          <div className="max-w-md mx-auto mb-8 sm:mb-12">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search departments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm sm:text-base placeholder-gray-500 focus:border-[#d4a853] focus:ring-0 transition-colors"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5">
          <AnimatePresence>
            {filtered.map((dept, i) => (
              <ScrollReveal key={dept.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group glass rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer card-hover relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <dept.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">{dept.name}</h3>
                    <p className="text-gray-400 text-[11px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {dept.description}
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-center gap-1 text-[#d4a853] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No departments found matching &quot;{search}&quot;
          </div>
        )}
      </div>
    </section>
  );
}

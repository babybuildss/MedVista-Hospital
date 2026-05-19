'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Brain,
  Bone,
  Sparkles,
  Baby,
  Siren,
  Scan,
  Activity,
  Scissors,
  Shield,
  Search,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const departments = [
  {
    icon: Heart,
    name: 'Cardiology',
    desc: 'Comprehensive cardiac care including interventional procedures, bypass surgery, and cardiac rehabilitation with a 99.2% success rate.',
    color: 'from-red-500 to-rose-600',
    doctors: 28,
  },
  {
    icon: Brain,
    name: 'Neurology',
    desc: 'Advanced neurological treatments for stroke, epilepsy, and neurodegenerative diseases with cutting-edge neurosurgery capabilities.',
    color: 'from-purple-500 to-violet-600',
    doctors: 22,
  },
  {
    icon: Bone,
    name: 'Orthopaedics',
    desc: 'Expert joint replacement, sports medicine, and spine surgery with robotic-assisted precision and rapid recovery protocols.',
    color: 'from-blue-500 to-medical-blue',
    doctors: 20,
  },
  {
    icon: Sparkles,
    name: 'Oncology',
    desc: 'Precision oncology with personalized treatment plans, immunotherapy, radiation therapy, and minimally invasive surgical oncology.',
    color: 'from-teal to-teal-light',
    doctors: 25,
  },
  {
    icon: Baby,
    name: 'Pediatrics',
    desc: 'Specialized children\'s healthcare with Level 3 NICU, pediatric surgery, and comprehensive developmental care programs.',
    color: 'from-amber-500 to-orange-500',
    doctors: 18,
  },
  {
    icon: Siren,
    name: 'Emergency Care',
    desc: '24/7 Level 1 Trauma Centre with helicopter ambulance service, rapid response teams, and state-of-the-art emergency protocols.',
    color: 'from-red-600 to-red-700',
    doctors: 15,
  },
  {
    icon: Scan,
    name: 'Radiology',
    desc: 'Advanced diagnostic imaging including 3T MRI, 128-slice CT, PET-CT, and AI-powered image analysis for accurate diagnosis.',
    color: 'from-cyan-500 to-blue-600',
    doctors: 12,
  },
  {
    icon: Activity,
    name: 'ICU & Critical Care',
    desc: 'State-of-the-art intensive care with 24/7 monitoring, ECMO support, and specialized critical care teams for complex cases.',
    color: 'from-emerald-500 to-green-600',
    doctors: 16,
  },
  {
    icon: Scissors,
    name: 'General Surgery',
    desc: 'Minimally invasive and robotic-assisted surgical procedures across all specialties with the Da Vinci surgical system.',
    color: 'from-slate-500 to-gray-600',
    doctors: 24,
  },
  {
    icon: Shield,
    name: 'Preventive Healthcare',
    desc: 'Comprehensive health screening programs, wellness consultations, and lifestyle management to prevent disease before it starts.',
    color: 'from-gold to-gold-light',
    doctors: 10,
  },
];

export default function DepartmentsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = departments.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="departments" className="bg-white py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Specialized Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Our Departments
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              With 50+ specialities under one roof, our departments are
              designed to provide comprehensive, integrated care for every
              medical need.
            </p>
          </div>
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
            />
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((dept, i) => (
              <motion.div
                key={dept.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group relative h-full p-5 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${dept.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-navy font-bold text-base mb-2">
                      {dept.name}
                    </h3>

                    <AnimatePresence>
                      {hoveredIndex === i ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-500 text-sm leading-relaxed mb-3">
                            {dept.desc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">
                              {dept.doctors} Doctors
                            </span>
                            <span className="flex items-center gap-1 text-gold text-sm font-semibold">
                              Learn More
                              <ChevronRight className="w-4 h-4" />
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {dept.desc}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No departments found matching &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

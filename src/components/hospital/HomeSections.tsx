'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  Bone,
  Sparkles,
  Baby,
  Siren,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  UserCheck,
  ClipboardCheck,
  CreditCard,
  Building,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const DNAHelixScene = dynamic(() => import('./DNAHelix'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="text-white/30 text-sm">Loading 3D Visualization...</div>
    </div>
  ),
});

const centres = [
  {
    icon: Heart,
    title: 'Cardiac Sciences',
    desc: 'Advanced cardiac surgery, interventional cardiology, and cardiac rehabilitation.',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: Brain,
    title: 'Neuro Sciences',
    desc: 'Comprehensive neurological care with cutting-edge neurosurgery and neurology.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Bone,
    title: 'Orthopaedics',
    desc: 'Joint replacement, sports medicine, spine surgery, and trauma care.',
    color: 'from-blue-500 to-medical-blue',
  },
  {
    icon: Sparkles,
    title: 'Oncology',
    desc: 'Precision oncology with immunotherapy, radiation, and surgical oncology.',
    color: 'from-teal to-teal-light',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    desc: 'Specialized children\'s healthcare with NICU and pediatric surgery.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Siren,
    title: 'Emergency Care',
    desc: '24/7 Level 1 trauma centre with rapid response teams and air ambulance.',
    color: 'from-red-600 to-red-700',
  },
];

const doctors = [
  {
    name: 'Dr. Arun Mehta',
    specialty: 'Cardiac Surgery',
    image: '/images/doctor-1.png',
    experience: '30+ Years',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Neurology',
    image: '/images/doctor-2.png',
    experience: '25+ Years',
  },
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopaedics',
    image: '/images/doctor-3.png',
    experience: '20+ Years',
  },
  {
    name: 'Dr. Anita Desai',
    specialty: 'Oncology',
    image: '/images/doctor-4.png',
    experience: '22+ Years',
  },
];

const testimonials = [
  {
    name: 'Rajiv Malhotra',
    treatment: 'Cardiac Bypass Surgery',
    text: 'The care I received was extraordinary. From the surgical team to the nursing staff, every moment was filled with professionalism and genuine compassion. I owe my life to MedVista.',
    rating: 5,
  },
  {
    name: 'Sunitha Reddy',
    treatment: 'Neurosurgery',
    text: 'When other hospitals said it was impossible, MedVista gave me hope. The neurosurgery team performed a miracle. I am forever grateful for their expertise and dedication.',
    rating: 5,
  },
  {
    name: 'Ahmed Khan',
    treatment: 'Knee Replacement',
    text: 'World-class facilities and a recovery experience that felt like staying at a premium hotel. The orthopaedic team was exceptional, and I was walking within days.',
    rating: 5,
  },
];

const healthPackages = [
  {
    name: 'Basic Health Check',
    price: '₹3,999',
    tests: '35+ Tests',
    features: ['Complete Blood Count', 'Lipid Profile', 'Liver Function', 'Urine Analysis', 'ECG'],
    popular: false,
  },
  {
    name: 'Comprehensive Check',
    price: '₹7,999',
    tests: '60+ Tests',
    features: ['All Basic Tests', 'Thyroid Profile', 'Vitamin D & B12', 'Chest X-Ray', 'Ultrasound Abdomen', 'Consultation'],
    popular: true,
  },
  {
    name: 'Cardiac Package',
    price: '₹12,999',
    tests: '40+ Cardiac Tests',
    features: ['ECG', '2D Echo', 'Stress Test', 'Lipid Profile', 'Cardiac Markers', 'Cardiologist Review'],
    popular: false,
  },
  {
    name: 'Premium Wellness',
    price: '₹19,999',
    tests: '85+ Tests',
    features: ['All Comprehensive Tests', 'MRI Brain', 'CT Coronary', 'Cancer Markers', 'Diet Consultation', 'Follow-up Visit'],
    popular: false,
  },
];

const appointmentSteps = [
  {
    icon: ClipboardCheck,
    title: 'Book Online',
    desc: 'Fill the appointment form or call our helpline',
  },
  {
    icon: UserCheck,
    title: 'Get Confirmation',
    desc: 'Receive instant confirmation via SMS & email',
  },
  {
    icon: Clock,
    title: 'Visit Hospital',
    desc: 'Meet your specialist with zero wait time',
  },
  {
    icon: CheckCircle,
    title: 'Follow-Up',
    desc: 'Free follow-up consultation within 7 days',
  },
];

const insurancePartners = [
  'Star Health',
  'ICICI Lombard',
  'HDFC ERGO',
  'Bajaj Allianz',
  'New India Assurance',
  'Max Bupa',
  'Religare',
  'United Health',
];

export default function HomeSections() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  return (
    <section id="home-content">
      {/* Centres of Excellence */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Excellence Redefined
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Centres of Excellence
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each centre is a world-class facility, staffed by internationally
                recognized specialists and equipped with the latest medical technology.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre, i) => (
              <ScrollReveal key={centre.title} delay={i * 0.1}>
                <div className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 card-hover overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${centre.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${centre.color} flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300`}
                    >
                      <centre.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-navy group-hover:text-white mb-2 transition-colors">
                      {centre.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                      {centre.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-gold group-hover:text-gold-light text-sm font-semibold transition-colors">
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Doctors */}
      <div className="bg-premium-gray py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Our Specialists
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Expert Doctors
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Internationally trained specialists with decades of experience
                delivering exceptional outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <ScrollReveal key={doc.name} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                  <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-gold text-sm font-medium">{doc.experience}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-navy font-bold text-lg">{doc.name}</h4>
                    <p className="text-medical-blue text-sm font-medium">{doc.specialty}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <ScrollReveal direction="left">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-emergency">
                  <Siren className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Emergency & Critical Care
                  </h3>
                  <p className="text-white/70 mt-1">
                    24/7 Level 1 Trauma Centre — Response time under 5 minutes
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+911800123456"
                  className="flex items-center gap-3 px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  1800-123-456
                </a>
                <a
                  href="tel:+911123456789"
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +91-11-2345-6789
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Advanced Technology - 3D Section */}
      <div className="bg-navy-gradient py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                  Technology
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                  Advanced Medical{' '}
                  <span className="text-gradient-gold">Technology</span>
                </h2>
                <div className="section-divider mb-6" />
                <p className="text-white/60 leading-relaxed mb-6">
                  We leverage the latest advances in medical science and technology
                  to deliver precise diagnostics and effective treatments. From
                  AI-powered imaging to robotic surgery, our technology stack is
                  second to none.
                </p>
                <div className="space-y-4">
                  {[
                    'Da Vinci Robotic Surgery System',
                    '3T MRI & 128-Slice CT Scanner',
                    'AI-Powered Diagnostic Imaging',
                    'CyberKnife Radiosurgery',
                    'PET-CT Molecular Imaging',
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/20 to-teal/20 rounded-2xl blur-xl" />
                <div className="relative glass-dark rounded-2xl p-4 overflow-hidden">
                  <DNAHelixScene />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Patient Success Stories */}
      <div className="bg-premium-light py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Patient Success Stories
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real stories from real patients who experienced the MedVista
                difference.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 card-hover relative">
                  <div className="absolute top-6 right-6 text-6xl text-navy/5 font-serif">
                    &ldquo;
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                      <span className="text-sm font-bold text-gold">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.treatment}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Health Packages */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Preventive Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Health Checkup Packages
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Invest in your health with our comprehensive screening packages
                designed for early detection and peace of mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {healthPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div
                  className={`relative bg-white rounded-2xl border-2 transition-all duration-300 card-hover cursor-pointer ${
                    selectedPackage === i
                      ? 'border-gold shadow-xl shadow-gold/10'
                      : pkg.popular
                      ? 'border-gold/40 shadow-lg'
                      : 'border-gray-100 hover:border-gold/20 hover:shadow-lg'
                  }`}
                  onClick={() =>
                    setSelectedPackage(selectedPackage === i ? null : i)
                  }
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold to-gold-light text-navy text-xs font-bold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-navy font-bold text-lg">{pkg.name}</h4>
                    <p className="text-gray-400 text-xs mt-1">{pkg.tests}</p>
                    <div className="mt-4 mb-4">
                      <span className="text-3xl font-bold text-navy">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="w-full mt-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        background:
                          pkg.popular
                            ? 'linear-gradient(135deg, #d4a853, #e8c87a)'
                            : 'transparent',
                        color: pkg.popular ? '#0a1628' : '#1e40af',
                        border: pkg.popular
                          ? 'none'
                          : '2px solid #1e40af',
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Process */}
      <div className="bg-premium-gray py-12 sm:py-16 lg:py-20 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Simple Steps
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                How to Get Started
              </h2>
              <div className="section-divider mx-auto mb-6" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold/30 via-medical-blue/30 to-teal/30" />

            {appointmentSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-5 relative z-10 shadow-lg">
                    <step.icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="text-gold font-bold text-sm">
                    Step {i + 1}
                  </span>
                  <h4 className="text-navy font-bold text-lg mt-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Insurance & Support */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Insurance Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Insurance & Support
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                We partner with all major insurance providers to ensure
                hassle-free cashless treatment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {insurancePartners.map((partner, i) => (
              <ScrollReveal key={partner} delay={i * 0.05}>
                <div className="flex items-center justify-center gap-2 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                  <Building className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
                  <span className="text-gray-600 font-medium text-sm group-hover:text-navy transition-colors">
                    {partner}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <CreditCard className="w-5 h-5 text-teal" />
              <span className="text-sm">Cashless Treatment Available</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Shield className="w-5 h-5 text-teal" />
              <span className="text-sm">TPA Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medical-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Take the First Step
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Your Journey to Better Health{' '}
              <span className="text-gradient-gold">Starts Here</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
              Schedule a consultation with our specialists today and experience
              healthcare that truly cares about you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+911800123456"
                className="flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call: 1800-123-456
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

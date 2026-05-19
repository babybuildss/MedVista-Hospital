'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  User,
  Stethoscope,
  MessageSquare,
  Send,
  Shield,
  CreditCard,
  CheckCircle,
} from 'lucide-react';

const departments = [
  'Cardiology',
  'Neurology',
  'Orthopaedics',
  'Oncology',
  'Pediatrics',
  'Emergency Care',
  'Radiology',
  'ICU & Critical Care',
  'General Surgery',
  'Preventive Healthcare',
];

const doctors = [
  { name: 'Dr. Rajesh Sharma', dept: 'Cardiology' },
  { name: 'Dr. Priya Mehta', dept: 'Neurology' },
  { name: 'Dr. Arun Kumar', dept: 'Orthopaedics' },
  { name: 'Dr. Sneha Reddy', dept: 'Oncology' },
  { name: 'Dr. Kavitha Nair', dept: 'Pediatrics' },
  { name: 'Dr. Sanjay Gupta', dept: 'General Surgery' },
];

const insurancePartners = [
  'Star Health',
  'ICICI Lombard',
  'HDFC ERGO',
  'Bajaj Allianz',
  'New India Assurance',
  'United Health',
  'Cigna',
  'Aetna',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[#d4a853] text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Book Your <span className="gradient-text">Appointment</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Experience premium healthcare with a seamless appointment process.
              Our dedicated team is here to assist you every step of the way.
            </p>
            <div className="section-divider mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="glass rounded-2xl p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-[#d4a853] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Appointment Requested!
                    </h3>
                    <p className="text-gray-400">
                      Our team will contact you within 2 hours to confirm your appointment.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <User className="w-4 h-4 inline mr-1" /> Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" /> Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" /> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Stethoscope className="w-4 h-4 inline mr-1" /> Department
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-colors"
                        >
                          <option value="" className="bg-[#0a1628]">Select Department</option>
                          {departments.map((d) => (
                            <option key={d} value={d} className="bg-[#0a1628]">
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          <Shield className="w-4 h-4 inline mr-1" /> Preferred Doctor
                        </label>
                        <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-colors"
                        >
                          <option value="" className="bg-[#0a1628]">Any Available Doctor</option>
                          {doctors.map((d) => (
                            <option key={d.name} value={d.name} className="bg-[#0a1628]">
                              {d.name} — {d.dept}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-1" /> Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 transition-colors resize-none"
                        placeholder="Briefly describe your concern..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full btn-gold flex items-center justify-center gap-2 text-base !py-4"
                    >
                      <Send className="w-5 h-5" />
                      Request Appointment
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 animate-emergency-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Emergency</h3>
                    <p className="text-red-100 text-sm">24/7 Emergency & Trauma</p>
                  </div>
                </div>
                <a
                  href="tel:+911800633847"
                  className="block w-full text-center bg-white text-red-700 font-bold py-3 rounded-xl text-lg hover:bg-red-50 transition-colors"
                >
                  1800-MED-VISTA
                </a>
              </div>
            </ScrollReveal>

            {/* Contact Cards */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass rounded-2xl p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0a1628]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Address</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      42, Healthcare Avenue, Medical District,
                      <br />
                      New Delhi — 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#1e40af] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Email</h4>
                    <p className="text-gray-400 text-sm mt-1">info@medvista.com</p>
                    <p className="text-gray-400 text-sm">appointments@medvista.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0d9488] to-[#14b8a6] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Timings</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      OPD: Mon–Sat, 9:00 AM – 7:00 PM
                    </p>
                    <p className="text-gray-400 text-sm">
                      Emergency: 24/7/365
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="glass rounded-2xl p-6">
                <div className="w-full h-40 rounded-xl bg-[#132040] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#d4a853] mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Interactive Map</p>
                    <p className="text-gray-500 text-xs mt-1">
                      42, Healthcare Avenue, New Delhi
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Insurance */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-[#d4a853]" />
                  <h4 className="text-white font-semibold text-sm">Insurance Partners</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {insurancePartners.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

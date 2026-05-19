'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Heart,
  Shield,
  CreditCard,
  CheckCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
  { name: 'Dr. Arun Mehta', dept: 'Cardiology' },
  { name: 'Dr. Priya Sharma', dept: 'Neurology' },
  { name: 'Dr. Rajesh Kumar', dept: 'Orthopaedics' },
  { name: 'Dr. Anita Desai', dept: 'Oncology' },
  { name: 'Dr. Vikram Singh', dept: 'Pediatrics' },
  { name: 'Dr. Meera Patel', dept: 'Emergency Care' },
  { name: 'Any Available Doctor', dept: 'General' },
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
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const filteredDoctors = formData.department
    ? doctors.filter(
        (d) =>
          d.dept.toLowerCase() === formData.department.toLowerCase() ||
          d.dept === 'General'
      )
    : doctors;

  return (
    <section id="contact" className="bg-white py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Book an Appointment
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule a consultation with our world-class specialists. Our team
              will confirm your appointment within 30 minutes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-teal/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-navy font-bold text-xl">
                      Appointment Request Submitted!
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Our team will confirm your appointment within 30 minutes.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all ${
                            focused === 'name'
                              ? 'border-gold ring-2 ring-gold/20 bg-white'
                              : 'border-gray-200'
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          required
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all ${
                            focused === 'phone'
                              ? 'border-gold ring-2 ring-gold/20 bg-white'
                              : 'border-gray-200'
                          }`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        required
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all ${
                          focused === 'email'
                            ? 'border-gold ring-2 ring-gold/20 bg-white'
                            : 'border-gray-200'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Department */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          Department
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          onFocus={() => setFocused('department')}
                          onBlur={() => setFocused(null)}
                          required
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all appearance-none ${
                            focused === 'department'
                              ? 'border-gold ring-2 ring-gold/20 bg-white'
                              : 'border-gray-200'
                          }`}
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Doctor */}
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          Preferred Doctor
                        </label>
                        <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          onFocus={() => setFocused('doctor')}
                          onBlur={() => setFocused(null)}
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all appearance-none ${
                            focused === 'doctor'
                              ? 'border-gold ring-2 ring-gold/20 bg-white'
                              : 'border-gray-200'
                          }`}
                        >
                          <option value="">Select Doctor</option>
                          {filteredDoctors.map((doc) => (
                            <option key={doc.name} value={doc.name}>
                              {doc.name} — {doc.dept}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onFocus={() => setFocused('date')}
                        onBlur={() => setFocused(null)}
                        required
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all ${
                          focused === 'date'
                            ? 'border-gold ring-2 ring-gold/20 bg-white'
                            : 'border-gray-200'
                        }`}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        rows={3}
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-navy text-sm focus:outline-none transition-all resize-none ${
                          focused === 'message'
                            ? 'border-gold ring-2 ring-gold/20 bg-white'
                            : 'border-gray-200'
                        }`}
                        placeholder="Tell us about your condition or any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Send className="w-5 h-5" />
                      Request Appointment
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center animate-emergency">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Emergency 24/7</h4>
                    <p className="text-white/70 text-sm">Immediate medical assistance</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:+911800123456"
                    className="block w-full py-3 bg-white text-red-700 font-bold rounded-xl text-center hover:shadow-lg transition-all"
                  >
                    1800-123-456
                  </a>
                  <a
                    href="tel:+911123456789"
                    className="block w-full py-3 bg-white/10 text-white font-semibold rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all"
                  >
                    +91-11-2345-6789
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-navy-gradient rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h4 className="font-bold">Location</h4>
                </div>
                <div className="w-full h-32 bg-navy-light/50 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-white/50 text-xs">Interactive Map</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  MedVista Premier Hospital, Sector 38, Medanta Lane,
                  Gurugram, Haryana 122001, India
                </p>
              </div>
            </ScrollReveal>

            {/* Timings */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-medical-blue" />
                  <h4 className="font-bold text-navy">Hospital Timings</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">OPD</span>
                    <span className="text-navy font-medium">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Emergency</span>
                    <span className="text-red-600 font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pharmacy</span>
                    <span className="text-navy font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Diagnostics</span>
                    <span className="text-navy font-medium">7:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Insurance */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-teal" />
                  <h4 className="font-bold text-navy">Insurance Support</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <CreditCard className="w-4 h-4 text-teal" />
                  Cashless treatment available
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Heart className="w-4 h-4 text-teal" />
                  50+ insurance partners
                </div>
              </div>
            </ScrollReveal>

            {/* Social */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="flex items-center gap-3">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-navy hover:border-navy hover:text-white text-gray-400 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Phone, MapPin, Clock, Mail, Send, ArrowRight } from 'lucide-react';
import PageHero from '@/components/hospital/PageHero';

const MedicalCrossScene = dynamic(() => import('@/components/hospital/3d/MedicalCross'), {
  ssr: false,
  loading: () => <div className="w-full h-[250px] flex items-center justify-center"><div className="text-warm-gray text-sm font-body animate-pulse">Loading 3D...</div></div>,
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', department: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = 'w-full px-4 py-3 bg-cream border border-border-custom rounded-sm font-body text-[13px] text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/20 transition-colors duration-300';

  return (
    <>
      <PageHero title="Contact" subtitle="Book an appointment or reach out to us" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      {/* 3D Medical Cross section */}
      <section className="bg-cream py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Reach Out</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-6 leading-tight">
                We&apos;re Here <span className="italic text-sage">For You</span>
              </h2>
              <div className="h-px w-12 bg-sage mb-6" />
              <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light leading-relaxed max-w-md">
                Whether you need to schedule an appointment, ask a question, or seek a second opinion, our team is available around the clock. Your health journey starts with a single conversation.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
              <div className="absolute -inset-4 border border-sage/10 rounded-sm pointer-events-none" />
              <MedicalCrossScene />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
            {/* Left: Appointment Form */}
            <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage">Get in Touch</span>
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal tracking-tight mt-2 mb-8">Book an Appointment</h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="p-8 bg-sage-light rounded-sm text-center">
                  <div className="font-display text-xl text-sage mb-1.5">Thank You</div>
                  <p className="font-body text-[13px] text-charcoal-light">We&apos;ll reach out to you shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="font-body text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-1.5 block">Full Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Your full name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="font-body text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-1.5 block">Email</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="font-body text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-1.5 block">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="department" className="font-body text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-1.5 block">Department</label>
                    <select id="department" name="department" value={formData.department} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                      <option value="">Select a department</option>
                      <option value="cardiac">Cardiac Sciences</option>
                      <option value="neuro">Neuro Sciences</option>
                      <option value="ortho">Orthopaedics</option>
                      <option value="oncology">Oncology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="general">General Medicine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-body text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-1.5 block">Message</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Tell us about your medical concern" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-ivory font-body text-[13px] rounded-full hover:bg-charcoal-light transition-colors duration-300 group">
                    Send Request <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="space-y-8 lg:pl-6 lg:border-l lg:border-border-custom">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Phone className="w-4 h-4 text-terracotta" />
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sage">Emergency</span>
                  </div>
                  <a href="tel:+911123456789" className="font-display text-2xl sm:text-3xl text-charcoal hover:text-sage transition-colors duration-300">+91 11 2345 6789</a>
                  <p className="font-body text-[12px] text-warm-gray mt-1">Available 24 hours, 7 days a week</p>
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <MapPin className="w-4 h-4 text-sage" />
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sage">Location</span>
                  </div>
                  <p className="font-body text-[13px] text-charcoal-light leading-relaxed">42 Healing Avenue, Medical District<br />New Delhi, India 110001</p>
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Clock className="w-4 h-4 text-sage" />
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sage">Timings</span>
                  </div>
                  <div className="space-y-1 font-body text-[13px] text-charcoal-light">
                    <p>Outpatient: Mon–Sat, 9:00 AM – 7:00 PM</p>
                    <p>Emergency: 24/7</p>
                    <p>Pharmacy: 24/7</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Mail className="w-4 h-4 text-sage" />
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sage">Email</span>
                  </div>
                  <div className="space-y-1">
                    <a href="mailto:info@medvista.com" className="font-body text-[13px] text-charcoal-light hover:text-sage transition-colors duration-300 block">info@medvista.com</a>
                    <a href="mailto:appointments@medvista.com" className="font-body text-[13px] text-charcoal-light hover:text-sage transition-colors duration-300 block">appointments@medvista.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-ivory-dark">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="w-full h-[260px] sm:h-[340px] bg-cream border border-border-custom rounded-sm flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-warm-gray/40 mx-auto mb-2" />
              <p className="font-display text-lg text-charcoal/30">42 Healing Avenue</p>
              <p className="font-body text-[12px] text-warm-gray/60">New Delhi, India 110001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

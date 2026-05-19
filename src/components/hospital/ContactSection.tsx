'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import PageHero from '@/components/hospital/PageHero';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
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

  return (
    <>
      <PageHero
        title="Contact"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Appointment Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal tracking-tight mt-3 mb-8">
                Book an Appointment
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-sage-light rounded-sm text-center"
                >
                  <div className="font-display text-2xl text-sage mb-2">
                    Thank You
                  </div>
                  <p className="font-body text-sm text-charcoal-light">
                    We&apos;ll reach out to you shortly to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2 block"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream border border-border-custom rounded-sm font-body text-sm text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2 block"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream border border-border-custom rounded-sm font-body text-sm text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2 block"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream border border-border-custom rounded-sm font-body text-sm text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="department"
                      className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2 block"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream border border-border-custom rounded-sm font-body text-sm text-charcoal focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-300 appearance-none"
                    >
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
                    <label
                      htmlFor="message"
                      className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream border border-border-custom rounded-sm font-body text-sm text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-300 resize-none"
                      placeholder="Tell us about your medical concern"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-white font-body text-sm font-medium rounded-full hover:bg-sage-dark transition-colors duration-300 group"
                  >
                    Send Request
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-10 lg:pl-8">
                {/* Emergency */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-terracotta" />
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
                      Emergency
                    </span>
                  </div>
                  <a
                    href="tel:+911123456789"
                    className="font-display text-3xl sm:text-4xl text-charcoal hover:text-sage transition-colors duration-300"
                  >
                    +91 11 2345 6789
                  </a>
                  <p className="font-body text-sm text-warm-gray mt-1">
                    Available 24 hours, 7 days a week
                  </p>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-sage" />
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
                      Location
                    </span>
                  </div>
                  <p className="font-body text-base text-charcoal-light leading-relaxed">
                    42 Healing Avenue, Medical District
                    <br />
                    New Delhi, India 110001
                  </p>
                </div>

                {/* Timings */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-sage" />
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
                      Timings
                    </span>
                  </div>
                  <div className="space-y-2 font-body text-base text-charcoal-light">
                    <p>Outpatient: Mon–Sat, 9:00 AM – 7:00 PM</p>
                    <p>Emergency: 24/7</p>
                    <p>Pharmacy: 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-sage" />
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-sage">
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:info@medvista.com"
                    className="font-body text-base text-charcoal-light hover:text-sage transition-colors duration-300"
                  >
                    info@medvista.com
                  </a>
                  <br />
                  <a
                    href="mailto:appointments@medvista.com"
                    className="font-body text-base text-charcoal-light hover:text-sage transition-colors duration-300"
                  >
                    appointments@medvista.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="w-full h-[300px] sm:h-[400px] bg-cream border border-border-custom rounded-sm flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-warm-gray mx-auto mb-3" />
              <p className="font-display text-xl text-charcoal/40">42 Healing Avenue</p>
              <p className="font-body text-sm text-warm-gray">New Delhi, India 110001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

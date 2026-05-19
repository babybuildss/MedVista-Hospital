'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Siren,
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Departments', href: '#departments' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Contact', href: '#contact' },
];

const deptLinks = [
  'Cardiology',
  'Neurology',
  'Orthopaedics',
  'Oncology',
  'Pediatrics',
  'Emergency Care',
  'Radiology',
  'General Surgery',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060e1a] text-white">
      {/* Emergency Bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-white text-sm">
            <Siren className="w-4 h-4 animate-pulse" />
            <span className="font-medium">24/7 Emergency & Trauma Centre</span>
          </div>
          <a
            href="tel:+911800633847"
            className="flex items-center gap-2 text-white font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            1800-MED-VISTA
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-wide">MedVista</span>
                <span className="block text-[#d4a853] text-[10px] font-medium tracking-[0.2em] uppercase">
                  Premier Hospital
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A world-class multi-speciality healthcare institution committed to clinical
              excellence, compassionate care, and medical innovation since 1998.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4a853] hover:border-[#d4a853]/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 text-sm hover:text-[#d4a853] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Departments
            </h4>
            <ul className="space-y-3">
              {deptLinks.map((dept) => (
                <li key={dept}>
                  <button
                    onClick={() => handleNavClick('#departments')}
                    className="text-gray-400 text-sm hover:text-[#d4a853] transition-colors"
                  >
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4a853] mt-1 shrink-0" />
                <p className="text-gray-400 text-sm">
                  42, Healthcare Avenue, Medical District, New Delhi — 110001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4a853] shrink-0" />
                <p className="text-gray-400 text-sm">+91 1800-MED-VISTA</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4a853] shrink-0" />
                <p className="text-gray-400 text-sm">info@medvista.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#d4a853] mt-1 shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">OPD: Mon–Sat, 9 AM – 7 PM</p>
                  <p className="text-gray-400 text-sm">Emergency: 24/7/365</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#contact')}
              className="mt-6 btn-gold text-xs !py-2.5 !px-5"
            >
              Book Appointment
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2024 MedVista Premier Hospital. All rights reserved. | NABH & JCI Accredited
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
            <span>|</span>
            <span>HIPAA Compliant</span>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#0a1628] border border-[#d4a853]/30 text-[#d4a853] flex items-center justify-center shadow-xl hover:bg-[#d4a853] hover:text-[#0a1628] transition-colors z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronRight,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Departments', href: '#departments' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Top Emergency Bar */}
        <div className={`transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                Emergency: +91 1800-MED-VISTA
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">24/7 Emergency & Trauma Centre</span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-gray-300">
              <span>info@medvista.com</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavClick('#home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a853] to-[#e8c97a] flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-wide">
                  MedVista
                </span>
                <span className="text-[#d4a853] text-[10px] font-medium tracking-[0.2em] uppercase">
                  Premier Hospital
                </span>
              </div>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#d4a853] to-[#3b82f6] group-hover:w-3/4 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+911800633847"
                className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-[#d4a853] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>1800-MED-VISTA</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#contact')}
                className="btn-gold text-sm !py-2.5 !px-6 hidden sm:block"
              >
                Book Appointment
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#0a1628]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-light text-white hover:text-[#d4a853] transition-colors flex items-center gap-2"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100" />
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => handleNavClick('#contact')}
                className="btn-gold mt-4 text-lg"
              >
                Book Appointment
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 text-center text-gray-400"
              >
                <p className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency: +91 1800-MED-VISTA
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Heart,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Departments', href: '/departments' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // On inner pages, navbar should always be solid
  const isSolid = !isHome || scrolled;

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isSolid
                    ? 'bg-navy'
                    : 'bg-white/15 backdrop-blur-sm border border-white/20'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isSolid ? 'text-gold' : 'text-white'
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                    isSolid ? 'text-navy' : 'text-white'
                  }`}
                >
                  MedVista
                </span>
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isSolid ? 'text-gold' : 'text-gold-light'
                  }`}
                >
                  Premier
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? isSolid
                          ? 'text-navy bg-navy/5'
                          : 'text-white bg-white/10'
                        : isSolid
                        ? 'text-gray-700 hover:text-navy hover:bg-gray-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Emergency */}
              <a
                href="tel:+911800123456"
                className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isSolid ? 'text-red-600' : 'text-red-400'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>1800-123-456</span>
              </a>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-light text-navy font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
              >
                Book Appointment
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                  isSolid
                    ? 'text-navy hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-3 font-medium rounded-xl transition-colors ${
                            isActive
                              ? 'text-navy bg-navy/5'
                              : 'text-navy hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="tel:+911800123456"
                    className="flex items-center gap-2 text-red-600 font-medium px-4 py-3"
                  >
                    <Phone className="w-4 h-4" />
                    1800-123-456
                  </a>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full mt-3 px-5 py-3 bg-gradient-to-r from-gold to-gold-light text-navy font-semibold rounded-xl text-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

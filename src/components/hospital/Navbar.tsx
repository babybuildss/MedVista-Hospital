'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/departments', label: 'Departments' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md border-b border-border-custom/60'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 h-[72px] sm:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-sage flex items-center justify-center group-hover:bg-sage transition-colors duration-500">
              <span className="font-display text-sm text-sage group-hover:text-white transition-colors duration-500">M</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg tracking-tight text-charcoal">
                MedVista
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase font-body font-medium text-warm-gray">
                Premier
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-[13px] tracking-wide transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-charcoal'
                      : 'text-warm-gray hover:text-charcoal'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sage"
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Book Appointment + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-ivory font-body text-[13px] rounded-full hover:bg-charcoal-light transition-colors duration-300"
            >
              Book Appointment
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-charcoal transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-ivory"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-charcoal"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-8">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`font-display text-3xl transition-colors duration-300 ${
                            isActive ? 'text-sage' : 'text-charcoal hover:text-sage'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-auto pt-8 border-t border-border-custom">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-charcoal text-ivory font-body text-[13px] rounded-full hover:bg-charcoal-light transition-colors duration-300"
                  >
                    Book Appointment
                  </Link>
                  <p className="font-body text-xs text-warm-gray mt-4 text-center">
                    Emergency: +91 11 2345 6789
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

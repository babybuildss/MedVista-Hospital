'use client';

import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/departments', label: 'Departments' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo + Address */}
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-2xl text-white tracking-tight">
                MedVista
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-body font-medium">
                Premier
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/50 max-w-xs">
              42 Healing Avenue, Medical District
              <br />
              New Delhi, India 110001
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/50 hover:text-sage-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm text-white/50">
              <p>
                Emergency:{' '}
                <span className="text-terracotta-light">+91 11 2345 6789</span>
              </p>
              <p>Appointments: +91 11 2345 6790</p>
              <p>info@medvista.com</p>
              <p className="text-white/30 text-xs mt-2">
                Open 24 hours, 7 days a week
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} MedVista Premier. All rights reserved.
          </p>
          <a
            href="https://chaicodestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/30 hover:text-sage-light transition-colors duration-300"
          >
            Made with 💝 by ChaiCodeStudio
          </a>
        </div>
      </div>
    </footer>
  );
}

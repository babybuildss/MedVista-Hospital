'use client';

import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/departments', label: 'Departments' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/contact', label: 'Contact' },
  ];

  const departments = ['Cardiac Sciences', 'Neuro Sciences', 'Orthopaedics', 'Oncology', 'Pediatrics'];

  return (
    <footer className="bg-charcoal relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sage/40 to-transparent" />

      {/* Decorative bg elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full border border-sage/30 flex items-center justify-center">
                <span className="font-display text-sm text-sage-light">M</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-lg text-white tracking-tight">MedVista</span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-white/25 font-body font-medium">Premier</span>
              </div>
            </div>
            <p className="font-body text-[13px] leading-relaxed text-white/35 max-w-xs mb-6">
              A 500-bed multi-speciality institution combining clinical
              excellence with the art of healing since 1998.
            </p>
            {/* Emergency callout */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 border border-terracotta/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="font-body text-[12px] text-terracotta-light">
                Emergency: +91 11 2345 6789
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] text-white/35 hover:text-sage-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5">
              Departments
            </h4>
            <div className="flex flex-col gap-3">
              {departments.map((dept) => (
                <Link
                  key={dept}
                  href="/departments"
                  className="font-body text-[13px] text-white/35 hover:text-sage-light transition-colors duration-300"
                >
                  {dept}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-white/25 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body text-[13px] text-white/35">
              <p>42 Healing Avenue, Medical District</p>
              <p>New Delhi, India 110001</p>
              <p className="mt-2">Appointments: +91 11 2345 6790</p>
              <p>info@medvista.com</p>
              <p className="text-white/20 text-[11px] mt-3">Open 24 hours, 7 days a week</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} MedVista Premier. All rights reserved.
          </p>
          <a
            href="https://chaicodestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] text-white/20 hover:text-sage-light transition-colors duration-300"
          >
            Made with 💝 by ChaiCodeStudio
          </a>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/departments', label: 'Departments' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/contact', label: 'Contact' },
  ];

  const departments = ['Cardiac Sciences', 'Neuro Sciences', 'Orthopaedics', 'Oncology', 'Pediatrics'];

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full border border-sage/60 flex items-center justify-center">
                <span className="font-display text-xs text-sage">M</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-lg text-white tracking-tight">
                  MedVista
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-white/30 font-body font-medium">
                  Premier
                </span>
              </div>
            </div>
            <p className="font-body text-[13px] leading-relaxed text-white/40 max-w-xs">
              A 500-bed multi-speciality institution combining clinical
              excellence with the art of healing since 1998.
            </p>
            <div className="mt-5 font-body text-[12px] text-white/30">
              42 Healing Avenue, Medical District<br />
              New Delhi, India 110001
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-white/30 mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] text-white/40 hover:text-sage-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-white/30 mb-5">
              Departments
            </h4>
            <div className="flex flex-col gap-3">
              {departments.map((dept) => (
                <Link
                  key={dept}
                  href="/departments"
                  className="font-body text-[13px] text-white/40 hover:text-sage-light transition-colors duration-300"
                >
                  {dept}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.25em] uppercase text-white/30 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body text-[13px] text-white/40">
              <div>
                <span className="text-terracotta-light">Emergency:</span>{' '}
                +91 11 2345 6789
              </div>
              <div>Appointments: +91 11 2345 6790</div>
              <div>info@medvista.com</div>
              <div className="text-white/25 text-[11px] mt-2">
                Open 24 hours, 7 days a week
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-white/25">
            &copy; {new Date().getFullYear()} MedVista Premier. All rights reserved.
          </p>
          <a
            href="https://chaicodestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] text-white/25 hover:text-sage-light transition-colors duration-300"
          >
            Made with 💝 by ChaiCodeStudio
          </a>
        </div>
      </div>
    </footer>
  );
}

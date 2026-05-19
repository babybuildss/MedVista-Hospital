'use client';

import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Contact', href: '#contact' },
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

const socialIcons = [Instagram, Twitter, Facebook, Linkedin];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">MedVista</span>
                <span className="text-gold text-[10px] tracking-[0.2em] uppercase block">
                  Premier
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Where Compassion Meets Innovation. Delivering world-class
              healthcare with cutting-edge technology and unwavering dedication
              to patient well-being.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold mb-5">Departments</h4>
            <ul className="space-y-2.5">
              {deptLinks.map((dept) => (
                <li key={dept}>
                  <button
                    onClick={() => scrollTo('#departments')}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Sector 38, Medanta Lane, Gurugram, Haryana 122001, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+911800123456"
                  className="text-white/50 text-sm hover:text-gold transition-colors"
                >
                  1800-123-456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@medvista.com"
                  className="text-white/50 text-sm hover:text-gold transition-colors"
                >
                  info@medvista.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Emergency: 24/7 | OPD: 9AM-7PM
                </span>
              </div>
            </div>

            {/* Appointment CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-5 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-light text-navy font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="py-6 mb-6 border-t border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white/70 text-sm font-medium">
                For Medical Emergencies:
              </span>
              <a
                href="tel:+911800123456"
                className="text-gold font-bold text-lg"
              >
                1800-123-456
              </a>
            </div>
            <span className="text-white/40 text-xs">
              Ambulance dispatch within 3 minutes of call
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>
            © {new Date().getFullYear()} MedVista Premier Hospital. All rights
            reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex gap-6">
              <button className="hover:text-white/60 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white/60 transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-white/60 transition-colors">
                Cookie Policy
              </button>
            </div>
            <p className="text-white/40">
              Made with <span className="text-pink-400">💝</span> by{' '}
              <a
                href="https://chaicodestudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light font-semibold transition-colors duration-300 underline underline-offset-2"
              >
                ChaiCodeStudio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

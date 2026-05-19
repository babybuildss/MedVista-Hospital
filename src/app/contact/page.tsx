import type { Metadata } from 'next';
import PageHero from '@/components/hospital/PageHero';
import ContactSection from '@/components/hospital/ContactSection';

export const metadata: Metadata = {
  title: 'Contact & Appointments | MedVista Premier',
  description:
    'Book an appointment at MedVista Premier Hospital. Contact us for consultations, emergency services, or inquiries. Our team will confirm your appointment within 30 minutes.',
  keywords: [
    'book appointment',
    'contact hospital',
    'emergency contact',
    'hospital location',
    'consultation',
    'helpline',
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Appointments"
        subtitle="Schedule a consultation with our world-class specialists. We confirm appointments within 30 minutes."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />
      <ContactSection />
    </>
  );
}

import type { Metadata } from 'next';
import PageHero from '@/components/hospital/PageHero';
import FacilitiesSection from '@/components/hospital/FacilitiesSection';

export const metadata: Metadata = {
  title: 'Facilities & Patient Care | MedVista Premier',
  description:
    'Explore world-class facilities at MedVista Premier — luxury patient rooms, advanced ICU, modular operation theaters, diagnostic labs, rehabilitation, and international patient services.',
  keywords: [
    'hospital facilities',
    'patient rooms',
    'ICU',
    'operation theater',
    'diagnostic labs',
    'virtual tour',
    'international patients',
  ],
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Facilities & Patient Care"
        subtitle="World-class infrastructure designed with patient comfort, safety, and healing in mind."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Facilities' },
        ]}
      />
      <FacilitiesSection />
    </>
  );
}

import type { Metadata } from 'next';
import PageHero from '@/components/hospital/PageHero';
import AboutSection from '@/components/hospital/AboutSection';

export const metadata: Metadata = {
  title: 'About MedVista Premier | Our Legacy, Mission & Values',
  description:
    'Learn about MedVista Premier Hospital — our 25+ year legacy of healing, mission, values, leadership team, awards, and accreditations. Recognized globally for clinical excellence.',
  keywords: [
    'about hospital',
    'hospital history',
    'mission and values',
    'hospital leadership',
    'awards',
    'accreditations',
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MedVista"
        subtitle="A legacy of healing, a future of hope — discover our story of excellence."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />
      <AboutSection />
    </>
  );
}

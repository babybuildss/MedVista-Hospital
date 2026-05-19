import type { Metadata } from 'next';
import PageHero from '@/components/hospital/PageHero';
import DepartmentsSection from '@/components/hospital/DepartmentsSection';

export const metadata: Metadata = {
  title: 'Departments & Specialities | MedVista Premier',
  description:
    'Explore 50+ specialities at MedVista Premier Hospital. From Cardiology to Oncology, our expert departments deliver world-class, integrated care for every medical need.',
  keywords: [
    'hospital departments',
    'specialities',
    'cardiology',
    'neurology',
    'orthopaedics',
    'oncology',
    'pediatrics',
    'emergency care',
  ],
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        title="Departments & Specialities"
        subtitle="50+ specialities under one roof, delivering comprehensive and integrated care."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Departments' },
        ]}
      />
      <DepartmentsSection />
    </>
  );
}

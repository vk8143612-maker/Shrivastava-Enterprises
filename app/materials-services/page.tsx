import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import MaterialsOverview from '@/components/sections/MaterialsOverview';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import GalleryPreview from '@/components/sections/GalleryPreview';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Materials & Services',
  description: 'Explore the metals we trade — copper, brass, aluminium, iron, steel, stainless, cable and more — and our full range of industrial scrap services.',
};

export default function MaterialsServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials & Services"
        title="Every grade of metal, every stage of service."
        intro="From ferrous to non-ferrous scrap and from buying to clearance and transport — a complete industrial metal solution under one roof."
        image="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2000&q=80"
      />
      <MaterialsOverview full />
      <Services />
      <Industries />
      <GalleryPreview />
      <FAQ />
      <CTA />
    </>
  );
}

import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import MaterialsOverview from '@/components/sections/MaterialsOverview';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import Process from '@/components/sections/Process';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyChooseUs />
      <MaterialsOverview />
      <Services />
      <Industries />
      <Process />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

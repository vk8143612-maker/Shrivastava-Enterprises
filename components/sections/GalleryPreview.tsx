'use client';
import { motion } from 'framer-motion';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeading from '@/components/ui/SectionHeading';
import { gallery } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/motion';

export default function GalleryPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Gallery" title={<>Inside the world of industrial metal.</>} intro="A glimpse of the yards, materials and logistics that define our everyday work." align="center" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <motion.div key={src} variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl border border-line ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'}`}>
              <SmartImage src={src} alt="Industrial metal" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

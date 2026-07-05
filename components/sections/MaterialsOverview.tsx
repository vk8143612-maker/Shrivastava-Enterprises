'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeading from '@/components/ui/SectionHeading';
import { materials } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/motion';

export default function MaterialsOverview({ full = false }: { full?: boolean }) {
  const list = full ? materials : materials.slice(0, 6);
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Materials We Trade" title={<>Metals we buy, grade and recycle.</>} intro="A wide spectrum of ferrous and non-ferrous scrap — sorted by grade for efficient, responsible recycling." />
          {!full && (
            <Link href="/materials-services" className="btn-ghost shrink-0">View all materials <ArrowRight className="h-4 w-4" /></Link>
          )}
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(m => (
            <motion.article key={m.name} variants={fadeUp} className="card group cursor-default">
              <div className="relative aspect-[16/11] overflow-hidden">
                <SmartImage src={m.image} alt={m.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-xl font-semibold text-white">{m.name}</h3>
              </div>
              <div className="p-5"><p className="text-sm leading-relaxed text-steel-light">{m.desc}</p></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

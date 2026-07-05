'use client';
import { motion } from 'framer-motion';
import SmartImage from '@/components/ui/SmartImage';
import Grain from '@/components/ui/Grain';
import { easeLux } from '@/lib/motion';

export default function PageHero({ eyebrow, title, intro, image }: {
  eyebrow: string; title: string; intro: string; image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-16 pt-40">
      <div className="absolute inset-0 -z-10">
        <SmartImage src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        <div className="absolute inset-0 bg-grid-line bg-[size:64px_64px] opacity-[0.12]" />
      </div>
      <Grain opacity={0.06} />
      <div className="container-x">
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeLux }} className="eyebrow">
          <span className="h-px w-8 bg-gold/70" /> {eyebrow}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeLux, delay: 0.1 }} className="heading-xl mt-5 max-w-4xl text-balance">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeLux, delay: 0.2 }} className="mt-6 max-w-2xl text-base leading-relaxed text-steel-light md:text-lg">
          {intro}
        </motion.p>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
export default function SectionHeading({ eyebrow, title, intro, align = 'left' }: {
  eyebrow: string; title: React.ReactNode; intro?: string; align?: 'left' | 'center';
}) {
  return (
    <motion.div
      variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <motion.span variants={fadeUp} className="eyebrow">
        <span className="h-px w-6 bg-gold/70" />{eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp} className="heading-lg mt-5 text-balance">{title}</motion.h2>
      {intro && (
        <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}

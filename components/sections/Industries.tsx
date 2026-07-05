'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { industries } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/motion';

export default function Industries() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Industries We Serve" title={<>Trusted across the industrial landscape.</>} intro="We partner with a broad range of operations that generate metal scrap as part of their everyday work." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(ind => (
            <motion.div key={ind.name} variants={fadeUp} className="card group flex items-center gap-5 p-6 transition-colors hover:border-gold/40">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-white/[0.02] text-gold transition-all group-hover:border-gold/50 group-hover:bg-gold/10">
                <ind.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-base font-semibold text-white">{ind.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

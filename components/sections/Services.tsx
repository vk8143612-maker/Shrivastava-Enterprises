'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/motion';

export default function Services() {
  return (
    <section className="relative border-y border-line bg-coal py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-40" />
      <div className="container-x relative">
        <SectionHeading eyebrow="Our Services" title={<>End-to-end scrap solutions, handled for you.</>} intro="From buying and bulk supply to clearance and transportation — a complete service built around your production cycle." align="center" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} className="group relative bg-charcoal p-8 transition-colors duration-300 hover:bg-panel">
              <span className="font-display text-xs font-medium text-gold/60">0{i + 1}</span>
              <div className="mt-4 grid h-12 w-12 place-items-center rounded-xl border border-line text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold/10">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel-light">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

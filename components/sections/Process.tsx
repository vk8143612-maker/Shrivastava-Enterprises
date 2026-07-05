'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/motion';

export default function Process() {
  return (
    <section className="relative border-y border-line bg-coal py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="How We Work" title={<>A clear, four-step process.</>} intro="No ambiguity, no back-and-forth — just a straightforward path from enquiry to payment." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-transparent via-line to-transparent lg:block" />
          {processSteps.map(p => (
            <motion.div key={p.step} variants={fadeUp} className="relative">
              <div className="relative z-10 mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-ink font-display text-lg font-semibold text-gold">{p.step}</div>
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel-light">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { whyChooseUs } from '@/lib/data';
import { fadeUp, stagger } from '@/lib/motion';

export default function WhyChooseUs() {
  return (
    <section className="relative border-y border-line bg-coal py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose Us" title={<>The reasons industrial partners keep coming back.</>} intro="No hidden deductions, no logistical headaches — just a professional, reliable process from first call to final settlement." />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(f => (
            <motion.div key={f.title} variants={fadeUp} className="card group p-7 transition-colors duration-300 hover:border-gold/40">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/[0.02] text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold/10">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel-light">{f.body}</p>
              <div className="mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

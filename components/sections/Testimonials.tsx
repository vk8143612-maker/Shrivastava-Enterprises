'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI(v => (v + 1) % testimonials.length);
  const prev = () => setI(v => (v - 1 + testimonials.length) % testimonials.length);
  useEffect(() => { const t = setInterval(next, 6000); return () => clearInterval(t); }, []);
  const t = testimonials[i];
  return (
    <section className="relative border-y border-line bg-coal py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-30" />
      <div className="container-x relative">
        <SectionHeading eyebrow="Testimonials" title={<>Words from those we work with.</>} align="center" />
        <div className="relative mx-auto mt-14 max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-gold/40" />
          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }} className="mt-6">
                <p className="font-display text-xl font-medium leading-relaxed text-white text-balance md:text-2xl">"{t.quote}"</p>
                <footer className="mt-7">
                  <p className="text-sm font-semibold text-gold">{t.role}</p>
                  <p className="text-xs text-steel">{t.context}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-line text-white transition-colors hover:border-gold/60 hover:text-gold"><ChevronLeft className="h-5 w-5" /></button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-6 bg-gold' : 'w-1.5 bg-line'}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-line text-white transition-colors hover:border-gold/60 hover:text-gold"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

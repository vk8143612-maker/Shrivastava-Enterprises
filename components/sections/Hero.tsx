'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import Grain from '@/components/ui/Grain';
import Particles from '@/components/ui/Particles';
import Counter from '@/components/ui/Counter';
import { stats } from '@/lib/data';
import { whatsappLink } from '@/lib/site';
import { easeLux } from '@/lib/motion';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.88]);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeLux } } };

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <SmartImage
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&q=80"
          alt="Industrial steel yard" fill priority sizes="100vw" className="object-cover"
        />
      </motion.div>
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 -z-[9] bg-grid-line bg-[size:64px_64px] opacity-[0.15]" />
      <Particles />
      <Grain opacity={0.07} />

      <div className="container-x relative z-10 pt-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.span variants={item} className="eyebrow">
            <span className="h-px w-8 bg-gold/70" />Trusted Scrap Trading & Industrial Metal Solutions
          </motion.span>

          <motion.h1 variants={item} className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tightest text-white text-balance sm:text-6xl lg:text-7xl">
            Turning Industrial Scrap Into{' '}
            <span className="relative whitespace-nowrap text-gold">
              Lasting Value
              <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-2xl text-base leading-relaxed text-steel-light md:text-lg">
            Chitragupta Enterprises is a trusted partner in scrap trading and industrial metal solutions — transparent weighing, fair pricing and dependable logistics for factories, workshops and warehouses across Jammu.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-gold">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            <a href={whatsappLink('Hello, I would like to discuss scrap trading.')} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line/60 pt-8 sm:grid-cols-4">
            {stats.map(s => (
              <div key={s.label}>
                <dd className="font-display text-3xl font-semibold text-white md:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </dd>
                <dt className="mt-1 text-xs leading-snug text-steel">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-steel">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

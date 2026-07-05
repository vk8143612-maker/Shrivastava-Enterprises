'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import Grain from '@/components/ui/Grain';
import { site, whatsappLink } from '@/lib/site';
import { fadeUp } from '@/lib/motion';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden rounded-3xl border border-line p-10 md:p-16">
          <div className="absolute inset-0 -z-10">
            <SmartImage src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80" alt="Industrial logistics" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          </div>
          <Grain opacity={0.06} />
          <div className="relative max-w-2xl">
            <span className="eyebrow"><span className="h-px w-6 bg-gold/70" /> Let's Work Together</span>
            <h2 className="heading-lg mt-5 text-balance">Have scrap to move? Let's turn it into value.</h2>
            <p className="mt-5 text-steel-light md:text-lg">Tell us your material and quantity — we'll respond with a fair, market-linked quote and arrange collection on your schedule.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-gold">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href={whatsappLink('Hello, I have scrap to discuss.')} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

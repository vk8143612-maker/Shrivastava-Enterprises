import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/ui/Reveal';
import SmartImage from '@/components/ui/SmartImage';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import { Target, Eye, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Chitragupta Enterprises — a trusted industrial scrap trading partner based in Bari Brahmana, Jammu, built on transparency and reliability.',
};

const values = [
  { icon: Gem, title: 'Integrity First', body: 'Honest weighing, clear quotes and settlements you can rely on — every single time.' },
  { icon: Target, title: 'Our Mission', body: "To be the region's most trusted scrap trading partner by making the process simple, fair and dependable." },
  { icon: Eye, title: 'Our Vision', body: 'A cleaner industrial ecosystem where recovered metal is returned to productive use responsibly.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on trust, weighed with honesty."
        intro="Chitragupta Enterprises brings professionalism and reliability to industrial scrap trading — from our home in Bari Brahmana, Jammu, to factory floors across the region."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
              <SmartImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Industrial operations" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow"><span className="h-px w-6 bg-gold/70" /> Our Story</span>
            <h2 className="heading-lg mt-5 text-balance">A local partner with an industrial mindset.</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-steel-light">
              <p>Chitragupta Enterprises was founded to bring clarity and fairness to a business that too often lacks both. We work directly with manufacturers, workshops and warehouses to buy, collect and recycle metal scrap of every grade.</p>
              <p>What sets us apart is simple discipline: transparent weighing, market-linked pricing, coordinated logistics and prompt settlement — the kind of dependable conduct that turns a one-time pickup into a long-term partnership.</p>
              <p>Based in Bari Brahmana, District Samba, we proudly serve industrial clients across Jammu and the surrounding region.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-y border-line bg-coal py-24 md:py-32">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {values.map(v => (
            <Reveal key={v.title}>
              <div className="card h-full p-8">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line text-gold"><v.icon className="h-6 w-6" /></div>
                <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel-light">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}

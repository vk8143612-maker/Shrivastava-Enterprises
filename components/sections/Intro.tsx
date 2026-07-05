'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SmartImage from '@/components/ui/SmartImage';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Intro() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
              <SmartImage
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80"
                alt="Sorted industrial metal" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-52 rounded-2xl border border-line glass p-5 shadow-premium sm:block">
              <p className="font-display text-2xl font-semibold text-gold">Since day one</p>
              <p className="mt-1 text-xs text-steel">Built on trust, transparency and consistent conduct.</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title={<>A dependable name in industrial scrap trading.</>}
            intro="From our base in Bari Brahmana, Jammu, we help manufacturers and workshops convert accumulated metal scrap into fair value — handled professionally from enquiry to settlement."
          />
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-steel-light">
              We deal across a broad range of ferrous and non-ferrous metals, coordinate collection and transportation, and clear factory floors and warehouses without disrupting your operations. Honest weighing, market-linked pricing and relationships that last well beyond a single load.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
              Learn more about us
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

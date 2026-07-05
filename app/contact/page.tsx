import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Reveal from '@/components/ui/Reveal';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description: 'Get in touch with Chitragupta Enterprises for scrap trading enquiries, bulk supply and factory clearance. Call or WhatsApp +91 80822 02653.',
};

const cards = [
  { icon: Phone, label: 'Call Us', value: site.phoneDisplay, href: `tel:${site.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappLink('Hello, I would like a quote.') },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your scrap."
        intro="Share your material and quantity and we'll come back with a fair, market-linked quote. The fastest way to reach us is by phone or WhatsApp."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow"><span className="h-px w-6 bg-gold/70" /> Reach Us</span>
              <h2 className="heading-lg mt-5">We're ready to help.</h2>
              <p className="mt-5 leading-relaxed text-steel-light">Whether it's a single clearance or an ongoing supply arrangement, our team responds promptly and professionally.</p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cards.map(c => (
                <Reveal key={c.label}>
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="card group flex h-full flex-col gap-3 p-5 transition-colors hover:border-gold/40">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-line text-gold transition-all group-hover:bg-gold/10"><c.icon className="h-5 w-5" /></span>
                    <span className="text-xs uppercase tracking-wider text-steel">{c.label}</span>
                    <span className="text-sm font-medium text-white">{c.value}</span>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="card mt-4 p-6">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-white">Our Location</p>
                    <p className="mt-1 text-sm leading-relaxed text-steel-light">{site.address.full}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-3 border-t border-line pt-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-white">Business Hours</p>
                    {site.hours.map(h => (
                      <p key={h.day} className="mt-1 text-sm text-steel-light"><span className="text-white/90">{h.day}</span> · {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="Chitragupta Enterprises location"
                  src="https://www.google.com/maps?q=Bari%20Brahmana%20Samba%20Jammu&output=embed"
                  className="h-64 w-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

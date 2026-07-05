import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';

const socials = ['LinkedIn', 'Facebook', 'Instagram', 'X'];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-coal">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-ink font-display text-sm font-bold">CE</span>
              <span className="font-display text-base font-semibold text-white">
                Chitragupta <span className="text-gold">Enterprises</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              {site.tagline}. Trusted industrial scrap trading, bulk supply and factory clearance across Jammu and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-white/70">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {site.nav.map(n => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-steel-light transition-colors hover:text-gold">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-white/70">Reach Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-steel-light">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{site.address.full}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href={`tel:${site.phone}`} className="hover:text-gold">{site.phoneDisplay}</a></li>
              <li className="flex gap-3"><MessageCircle className="h-4 w-4 shrink-0 text-gold" /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest2 text-white/70">Business Hours</h4>
            <ul className="mt-5 space-y-3 text-sm text-steel-light">
              {site.hours.map(h => (
                <li key={h.day} className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-gold" />
                  <span><span className="text-white/90">{h.day}</span> · {h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              {socials.map(s => (
                <span key={s} title={`${s} — coming soon`}
                  className="grid h-9 w-9 cursor-default place-items-center rounded-full border border-line text-[10px] text-steel">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-steel md:flex-row">
          <p>© {new Date().getFullYear()} Chitragupta Enterprises. All rights reserved.</p>
          <p>Industrial Metal Solutions · Bari Brahmana, Jammu</p>
        </div>
      </div>
    </footer>
  );
}

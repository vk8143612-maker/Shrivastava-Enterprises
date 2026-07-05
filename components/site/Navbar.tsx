'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="container-x">
          <div className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6 ${scrolled ? 'glass border border-line shadow-premium' : 'border border-transparent'}`}>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-ink font-display text-sm font-bold">CE</span>
              <span className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
                Chitragupta <span className="text-gold">Enterprises</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {site.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors ${active ? 'text-white' : 'text-steel-light hover:text-white'}`}
                  >
                    {active && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[0.06]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a href={whatsappLink('Hello, I would like to discuss scrap trading.')} target="_blank" rel="noopener noreferrer"
                className="btn-gold hidden md:inline-flex">
                <Phone className="h-4 w-4" /> Request a Quote
              </a>
              <button aria-label="Toggle menu" onClick={() => setOpen(o => !o)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-white md:hidden">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-xl md:hidden">
            <div className="flex h-full flex-col justify-center px-8">
              {site.nav.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * i }}>
                  <Link href={item.href} className="block border-b border-line py-5 font-display text-3xl text-white">{item.label}</Link>
                </motion.div>
              ))}
              <a href={whatsappLink('Hello, I would like a quote.')} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 w-full">
                <Phone className="h-4 w-4" /> Request a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

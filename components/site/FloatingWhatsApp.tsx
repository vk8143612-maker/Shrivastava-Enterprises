'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink('Hello Chitragupta Enterprises, I would like to enquire about scrap trading.')}
      target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: 'spring', stiffness: 260, damping: 18 }}
      className="group fixed bottom-6 right-6 z-[75] flex items-center gap-3"
    >
      <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-emerald-500/25" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-premium transition-transform group-hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </span>
    </motion.a>
  );
}

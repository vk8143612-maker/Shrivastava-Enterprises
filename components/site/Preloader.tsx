'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { easeLux } from '@/lib/motion';
export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1600); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: easeLux }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeLux }}
              className="font-display text-xl tracking-tightest text-white"
            >
              Chitragupta <span className="text-gold">Enterprises</span>
            </motion.div>
            <div className="mt-5 h-px w-44 overflow-hidden bg-line">
              <motion.div
                className="h-full bg-gold"
                initial={{ x: '-100%' }} animate={{ x: '0%' }}
                transition={{ duration: 1.3, ease: easeLux }}
              />
            </div>
            <span className="mt-3 text-[10px] uppercase tracking-widest2 text-steel">
              Industrial Metal Solutions
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

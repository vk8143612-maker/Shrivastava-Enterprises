'use client';
import { motion } from 'framer-motion';
const dots = Array.from({ length: 26 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return { left: `${(r(1) * 100).toFixed(2)}%`, top: `${(r(2) * 100).toFixed(2)}%`, size: 1 + r(3) * 2.5, dur: 6 + r(4) * 8, delay: r(5) * 6 };
});
export default function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i} className="absolute rounded-full bg-gold/40"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

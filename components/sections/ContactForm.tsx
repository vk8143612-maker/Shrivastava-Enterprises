'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';

const materials = ['Copper', 'Brass', 'Aluminium', 'Iron', 'Steel', 'Stainless Steel', 'Cable', 'Factory / Mixed', 'Other'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', material: materials[0], qty: '', message: '' });
  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New enquiry from ${form.name || 'a customer'}\nPhone: ${form.phone}\nMaterial: ${form.material}\nApprox quantity: ${form.qty}\nDetails: ${form.message}`;
    setSent(true);
    window.open(whatsappLink(msg), '_blank');
  };

  const field = 'w-full rounded-xl border border-line bg-charcoal/60 px-4 py-3.5 text-sm text-white placeholder:text-steel focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors';

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card flex flex-col items-center justify-center p-12 text-center">
      <CheckCircle2 className="h-14 w-14 text-gold" />
      <h3 className="mt-5 font-display text-xl font-semibold text-white">Thank you!</h3>
      <p className="mt-2 max-w-sm text-sm text-steel-light">Your enquiry is ready in WhatsApp — just hit send, or call us at <a href={`tel:${site.phone}`} className="text-gold">{site.phoneDisplay}</a>.</p>
      <button onClick={() => setSent(false)} className="btn-ghost mt-6">Send another</button>
    </motion.div>
  );

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-steel">Name</label>
          <input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" className={field} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-steel">Phone</label>
          <input required value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 …" className={field} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-steel">Material</label>
          <select value={form.material} onChange={e => update('material', e.target.value)} className={field}>
            {materials.map(m => <option key={m} className="bg-charcoal">{m}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-steel">Approx. Quantity</label>
          <input value={form.qty} onChange={e => update('qty', e.target.value)} placeholder="e.g. 2 tonnes" className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-steel">Message</label>
        <textarea rows={4} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us about your requirement…" className={field} />
      </div>
      <button type="submit" className="btn-gold mt-6 w-full">Send Enquiry <Send className="h-4 w-4" /></button>
      <p className="mt-3 text-center text-xs text-steel">Opens WhatsApp with your details pre-filled. No account required.</p>
    </form>
  );
}

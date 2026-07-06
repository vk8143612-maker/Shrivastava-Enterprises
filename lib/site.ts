export const site = {
  name: 'Chitragupta Enterprises',
  tagline: 'Trusted Scrap Trading & Industrial Metal Solutions',
  shortDesc:
    'A trusted partner for industrial scrap trading and metal solutions — buying, bulk supply and factory clearance handled with professionalism and reliability.',
  url: 'https://chitraguptaenterprises.online',
  phoneDisplay: '+91 80822 02653',
  phone: '+918082202653',
  whatsapp: '918082202653',
  email: 'contact@chitraguptaenterprises.in',
  address: {
    line1: 'Barjani Talab, Near Badi Masjid',
    line2: 'Bari Brahmana, District Samba',
    line3: 'Jammu – 181133, India',
    full: 'Barjani Talab, Near Badi Masjid, Bari Brahmana, District Samba, Jammu – 181133, India',
  },
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Materials & Services', href: '/materials-services' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}${
    msg ? `?text=${encodeURIComponent(msg)}` : ''
  }`;

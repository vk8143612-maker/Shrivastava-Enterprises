import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import FloatingWhatsApp from '@/components/site/FloatingWhatsApp';
import BackToTop from '@/components/site/BackToTop';
import ScrollProgress from '@/components/site/ScrollProgress';
import Preloader from '@/components/site/Preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortDesc,
  keywords: [
    'scrap trading', 'industrial metal', 'copper scrap', 'aluminium scrap',
    'steel scrap', 'factory scrap clearance', 'Jammu', 'Bari Brahmana', 'Samba',
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDesc,
    url: site.url,
    siteName: site.name,
    type: 'website',
    locale: 'en_IN',
    images: [{
      url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
      width: 1200, height: 630, alt: site.name,
    }],
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.shortDesc },
  robots: { index: true, follow: true },
  verification: { google: 'EnjJ77NVNLoNcFJqWfvT46t38eZuAuJXC0qxUF5Ig-A' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.shortDesc,
  telephone: site.phoneDisplay,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Barjani Talab, Near Badi Masjid, Bari Brahmana',
    addressLocality: 'Samba',
    addressRegion: 'Jammu & Kashmir',
    postalCode: '181133',
    addressCountry: 'IN',
  },
  areaServed: 'Jammu and surrounding regions',
  openingHours: 'Mo-Sa 09:00-19:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}

import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/materials-services', '/contact'].map(r => ({
    url: `${site.url}${r}`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8,
  }));
}

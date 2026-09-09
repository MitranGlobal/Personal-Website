import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/speaking`, lastModified: now, priority: 0.8 },
  ];
}

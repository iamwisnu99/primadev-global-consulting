import type { Metadata } from 'next';
import config from '../seo.config.json';

// Build-time SEO settings: update once, then rebuild and publish privately/publicly as authorized.
// Never derive canonical URLs from an untrusted incoming Host header.
const origin = new URL(config.canonicalOrigin);
if (origin.protocol !== 'https:' || origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash || origin.port) {
  throw new Error('SEO canonicalOrigin must be an HTTPS origin without credentials, path, query, fragment, or custom port.');
}
if (typeof config.indexingEnabled !== 'boolean') throw new Error('SEO indexingEnabled must be a boolean.');
export const siteUrl = origin.origin;
export const indexingEnabled = config.indexingEnabled;
export const googleSiteVerification = config.googleSiteVerification.trim();
export const siteName = 'PT Primadev Global Consulting';
export const navigation = [
  { href: '/tentang', label: 'Tentang' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/pelatihan', label: 'Pelatihan' },
  { href: '/kontak', label: 'Kontak' },
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl + path;
  return {
    title: { absolute: `${title} | ${siteName}` }, description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'id_ID', siteName, title, description, url },
    twitter: { card: 'summary', title, description },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

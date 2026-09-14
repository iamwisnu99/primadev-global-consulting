import { navigation, siteUrl } from '../../lib/seo';
export function GET() {
  const urls = ['/', ...navigation.map(item => item.href)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(path => `<url><loc>${siteUrl}${path}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

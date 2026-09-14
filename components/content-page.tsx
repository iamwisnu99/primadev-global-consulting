import { localize } from '../lib/language';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SiteNavigation, SiteFooter } from './site-navigation';
import { jsonLd, siteUrl } from '../lib/seo';

export async function ContentPage({ title, label, intro, path, children }: { title: string; label: string; intro: string; path: string; children: ReactNode }) {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteUrl + '/' },
    { '@type': 'ListItem', position: 2, name: label, item: siteUrl + path },
  ] };
  return localize(<><header className="subpage-header"><SiteNavigation/></header><main id="main-content"><div className="content-hero shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav><p className="section-kicker">PRIMADEV / {label.toUpperCase()}</p><h1>{title}</h1><p className="content-intro">{intro}</p></div><div className="content-body shell">{children}</div></main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}/></>);
}

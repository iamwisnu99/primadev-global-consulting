import { LanguageSwitcher } from './language-switcher';
import { MobileNavigation } from './mobile-navigation';
import { localize, getLocale } from '../lib/language';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { navigation } from '../lib/seo';

export async function SiteNavigation() {
  return localize(<nav className="nav shell" aria-label="Navigasi utama">
    <Link className="brand" href="/" aria-label="Primadev, kembali ke beranda"><span className="brand-mark"><Image unoptimized src="/primadev-logo.jpg" alt="" width={44} height={44} /></span><span className="brand-name">PRIMADEV<small>GLOBAL CONSULTING</small></span></Link>
    <div className="nav-links">{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <Link className="nav-cta" href="/kontak">Hubungi kami <ArrowRight size={16}/></Link>
    <LanguageSwitcher locale={await getLocale()}/><MobileNavigation locale={await getLocale()}>{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/#galeri">Galeri</Link></MobileNavigation>
  </nav>);
}

export async function SiteFooter() {
  return localize(<footer><div className="shell footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-mark"><Image unoptimized src="/primadev-logo.jpg" alt="" width={44} height={44}/></span><span className="brand-name">PRIMADEV<small>GLOBAL CONSULTING</small></span></Link><p>Konsultasi dan pelatihan manajemen proyek untuk industri migas dan proyek kompleks.</p></div><div><h3>Navigasi</h3>{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/#galeri">Galeri</Link></div><div><h3>Terhubung</h3><Link href="https://www.linkedin.com/company/primadev-global-consulting" target="_blank" rel="noreferrer">LinkedIn</Link><Link href="mailto:primadevconsulting@gmail.com">primadevconsulting@gmail.com</Link><Link href="tel:+628111883646">+62 811 88 36 46</Link></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} PT Primadev Global Consulting</span><span>Jakarta • Indonesia</span></div></footer>);
}

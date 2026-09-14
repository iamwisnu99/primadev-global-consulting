import { localize, getLocale, translateData } from '../lib/language';
import type { Metadata, Viewport } from 'next';
import { Geist, Manrope } from 'next/font/google';
import './globals.css';
import { jsonLd, siteName, siteUrl, indexingEnabled, googleSiteVerification } from '../lib/seo';

const body = Geist({ variable: '--font-body', subsets: ['latin'] });
const display = Manrope({ variable: '--font-display', subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#071a2c',
  width: 'device-width',
  initialScale: 1,
};

const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: 'Konsultasi dan pelatihan manajemen proyek, biaya, jadwal, risiko, dan EPCI untuk industri migas dan proyek kompleks.',
  robots: {
    index: indexingEnabled,
    follow: true,
    googleBot: {
      index: indexingEnabled,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Primadev',
    statusBarStyle: 'default',
    capable: true,
  },
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': siteUrl + '/#organization',
  name: siteName,
  url: siteUrl + '/',
  logo: siteUrl + '/primadev-logo.jpg',
  description: 'Konsultasi dan pelatihan manajemen proyek dengan fokus industri migas dan proyek kompleks.',
  email: 'primadevconsulting@gmail.com',
  telephone: '+628111883646',
  sameAs: ['https://www.linkedin.com/company/primadev-global-consulting'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return localize(
    <html lang={(await getLocale()) === 'en' ? 'en-US' : 'id'}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Primadev" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${body.variable} ${display.variable}`}>
        <a className="skip-link" href="#main-content">
          Lewati ke konten utama
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organization) }}
        />
      </body>
    </html>
  );
}

export async function generateMetadata() {
  return translateData(baseMetadata, await getLocale());
}

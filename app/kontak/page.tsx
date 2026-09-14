import { localize, getLocale, translateData } from '../../lib/language';
import Link from 'next/link';
import { ContentPage } from '../../components/content-page';
import { pageMetadata } from '../../lib/seo';
const baseMetadata = pageMetadata('Kontak Primadev — Konsultasi & Pelatihan Proyek', 'Hubungi PT Primadev Global Consulting melalui email primadevconsulting@gmail.com atau telepon +62 811 88 36 46 untuk konsultasi dan pelatihan proyek.', '/kontak');
export default async function Contact() {
  return localize(<ContentPage path="/kontak" label="Kontak" title="Hubungi PT Primadev Global Consulting" intro="Diskusikan kebutuhan konsultasi manajemen proyek, project assurance, atau pelatihan profesional untuk tim Anda.">
    <section><h2>Kanal komunikasi</h2><address className="contact-details"><p><strong>Email</strong><br/><Link href="mailto:primadevconsulting@gmail.com">primadevconsulting@gmail.com</Link></p><p><strong>Telepon</strong><br/><Link href="tel:+628111883646">+62 811 88 36 46</Link></p><p><strong>Lokasi</strong><br/>Jakarta, Indonesia</p><p><strong>LinkedIn</strong><br/><Link href="https://www.linkedin.com/company/primadev-global-consulting" target="_blank" rel="noreferrer">PT Primadev Global Consulting di LinkedIn</Link></p></address></section>
    <section><h2>Apa yang dapat Anda sampaikan?</h2><p>Agar pembahasan lebih terarah, sertakan nama organisasi, bidang pekerjaan, tahap proyek, dan tantangan utama. Untuk pelatihan, tambahkan topik yang diminati, peran peserta, serta tujuan pembelajaran.</p><p>Jelaskan apakah tim membutuhkan <Link href="/layanan">konsultasi manajemen proyek</Link>, analisis biaya dan risiko, project assurance, atau <Link href="/pelatihan">pelatihan profesional</Link>. Ruang lingkup, ketersediaan, dan biaya dapat dibahas melalui kanal kontak di atas.</p><Link className="button primary" href="mailto:primadevconsulting@gmail.com">Kirim email ke Primadev</Link></section>
  </ContentPage>);
}

export async function generateMetadata() { return translateData(baseMetadata, await getLocale()); }

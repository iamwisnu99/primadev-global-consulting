import { localize, getLocale, translateData } from '../../lib/language';
import Link from 'next/link';
import { ContentPage } from '../../components/content-page';
import { pageMetadata } from '../../lib/seo';
const baseMetadata = pageMetadata('Tentang Primadev — Konsultan Manajemen Proyek', 'Kenali PT Primadev Global Consulting, perusahaan konsultasi dan pelatihan manajemen proyek dengan fokus industri migas dan pendekatan kolaboratif.', '/tentang');
export default async function About() {
  return localize(<ContentPage path="/tentang" label="Tentang" title="Tentang PT Primadev Global Consulting" intro="Perusahaan konsultan dan pelatihan butik yang berfokus pada manajemen proyek, industri migas, dan tantangan eksekusi proyek kompleks.">
    <section><h2>Partner untuk perencanaan dan eksekusi proyek</h2><p>Primadev membantu organisasi memahami kompleksitas proyek melalui pendekatan yang kolaboratif dan dekat dengan realitas operasional. Fokus kami mencakup penyelarasan strategi, tata kelola, biaya, jadwal, dan risiko agar tim memiliki dasar yang lebih jelas untuk mengambil keputusan.</p><p>Kebutuhan setiap proyek berbeda. Percakapan dimulai dari konteks pekerjaan, tantangan yang dihadapi, dan kapabilitas yang ingin diperkuat. Dari sana, tim dapat menentukan apakah dukungan konsultasi, project assurance, atau pelatihan merupakan langkah yang paling relevan.</p></section>
    <section><h2>Cara kami bekerja</h2><div className="info-grid"><article><h3>Berorientasi lapangan</h3><p>Pembahasan berangkat dari persoalan proyek nyata agar analisis dan rekomendasi tetap terhubung dengan pelaksanaan.</p></article><article><h3>Kolaboratif</h3><p>Kami bekerja berdampingan dengan tim untuk memperjelas kebutuhan dan membangun kapabilitas yang dapat diterapkan dalam pekerjaan.</p></article><article><h3>Berorientasi hasil</h3><p>Pendekatan diarahkan pada performa, keselamatan, dan efisiensi dengan mempertimbangkan konteks serta risiko proyek.</p></article></div></section>
    <section><h2>Bidang fokus</h2><p>Keahlian yang ditampilkan Primadev meliputi EPCI Project Management, Project Risk Analysis, Schedule Risk Analysis, cost estimating berbasis AACE, persiapan PMP, dan procurement negotiation. Program ditujukan bagi project manager, Project Management Office, engineer, planner, risk professional, dan tim procurement.</p><p>Pelajari <Link href="/layanan">layanan konsultasi manajemen proyek</Link> atau lihat <Link href="/pelatihan">bidang pelatihan profesional</Link> untuk menemukan pembahasan yang sesuai dengan kebutuhan tim Anda.</p></section>
    <section className="content-cta"><h2>Mulai dari tantangan tim Anda</h2><p>Sampaikan konteks proyek dan prioritas organisasi untuk mendiskusikan dukungan yang dibutuhkan.</p><Link className="button primary" href="/kontak">Hubungi Primadev</Link></section>
  </ContentPage>);
}

export async function generateMetadata() { return translateData(baseMetadata, await getLocale()); }

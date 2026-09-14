import { localize, getLocale, translateData } from '../../lib/language';
import Link from 'next/link';
import { ContentPage } from '../../components/content-page';
import { pageMetadata, jsonLd, siteName, siteUrl } from '../../lib/seo';
const baseMetadata = pageMetadata('Konsultasi Manajemen Proyek, Biaya & Risiko', 'Layanan Primadev mencakup project management, analisis biaya, jadwal dan risiko, serta project assurance untuk industri migas dan proyek kompleks.', '/layanan');
const services = [
  { name: 'Project Management', description: 'Penyelarasan strategi, tata kelola, dan eksekusi proyek untuk mendukung keputusan yang lebih terukur.' },
  { name: 'Cost, Schedule & Risk', description: 'Analisis terpadu atas biaya, jadwal, dan risiko untuk membantu tim memahami eksposur proyek.' },
  { name: 'Project Assurance', description: 'Project health check, readiness review, dan dukungan keputusan berbasis risiko untuk proyek kompleks.' },
];
export default async function Services() {
  return localize(<ContentPage path="/layanan" label="Layanan" title="Konsultasi manajemen proyek untuk keputusan yang lebih terukur" intro="Dukungan untuk perencanaan, pengendalian, dan evaluasi proyek, dengan fokus pada industri migas serta pekerjaan EPCI.">
    <section><h2>Project Management</h2><p>Kejelasan strategi perlu terhubung dengan pelaksanaan. Primadev membantu menyelaraskan tata kelola dan eksekusi agar pembahasan proyek memiliki arah yang konsisten, dari perencanaan hingga realisasi di lapangan.</p><p>Layanan ini relevan bagi organisasi yang perlu meninjau pendekatan manajemen proyek dan memperjelas prioritas keputusan. Ruang lingkup dukungan dibahas berdasarkan konteks serta tahap proyek yang sedang dijalankan.</p></section>
    <section><h2>Analisis biaya, jadwal, dan risiko</h2><p>Cost, schedule, dan risk saling memengaruhi. Analisis terpadu membantu tim melihat eksposur biaya dan jadwal serta memahami risiko sebelum menentukan langkah berikutnya.</p><ul><li>Project Risk Analysis untuk membahas risiko dalam konteks proyek.</li><li>Schedule Risk Analysis untuk memahami ketidakpastian jadwal.</li><li>Cost estimating berbasis AACE sebagai salah satu bidang keahlian yang tersedia.</li></ul><p>Pendekatan ini mendukung diskusi lintas fungsi antara project manager, planner, engineer, dan risk professional.</p></section>
    <section><h2>Project Assurance</h2><p>Project health check dan readiness review membantu tim meninjau kondisi serta kesiapan proyek. Pembahasan berfokus pada dukungan keputusan berbasis risiko, terutama ketika organisasi perlu melihat gambaran yang utuh sebelum melanjutkan pelaksanaan.</p></section>
    <section><h2>Konsultasi dan pengembangan kapabilitas</h2><p>Bila kebutuhan utama adalah memperkuat pemahaman tim, lihat <Link href="/pelatihan">program pelatihan manajemen proyek</Link>. Konsultasi dan pembelajaran dapat dibahas sesuai tujuan organisasi, tanpa menyamakan kebutuhan semua proyek.</p><Link className="button primary" href="/kontak">Diskusikan kebutuhan konsultasi</Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonLd({ '@context':'https://schema.org', '@graph':services.map((s,i)=>({ '@type':'Service', '@id':`${siteUrl}/layanan#service-${i+1}`, name:s.name, description:s.description, url:siteUrl+'/layanan', provider:{ '@id':siteUrl+'/#organization', '@type':'Organization', name:siteName } })) })}}/>
  </ContentPage>);
}

export async function generateMetadata() { return translateData(baseMetadata, await getLocale()); }

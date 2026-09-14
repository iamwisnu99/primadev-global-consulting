import { localize, getLocale, translateData } from '../lib/language';
import Image from 'next/image';
import Link from 'next/link';
import { SiteNavigation, SiteFooter } from '../components/site-navigation';
import { pageMetadata, jsonLd, siteName, siteUrl } from '../lib/seo';
const baseMetadata = pageMetadata('Konsultasi & Pelatihan Manajemen Proyek', 'PT Primadev Global Consulting menyediakan konsultasi dan pelatihan manajemen proyek, EPCI, biaya, jadwal dan risiko untuk industri migas dan proyek kompleks.', '/');
import { ArrowRight, BarChart3, CalendarRange, Check, ChevronRight, ExternalLink, Gauge, Mail, Phone, ShieldCheck, Target } from 'lucide-react';

const services = [
  { number: '01', icon: Target, title: 'Project Management', copy: 'Menyelaraskan strategi, tata kelola, dan eksekusi proyek untuk keputusan yang lebih terukur.' },
  { number: '02', icon: BarChart3, title: 'Cost, Schedule & Risk', copy: 'Analisis terpadu untuk melihat eksposur biaya, jadwal, dan risiko sebelum menjadi kejutan proyek.' },
  { number: '03', icon: ShieldCheck, title: 'Project Assurance', copy: 'Project health check, readiness review, dan dukungan keputusan berbasis risiko untuk proyek kompleks.' },
  { number: '04', icon: Gauge, title: 'Professional Training', copy: 'Program praktis dari Project Management Essential hingga persiapan PMP dan advanced cost estimating.' },
];
const expertise = ['EPCI Project Management','Project Risk Analysis','Schedule Risk Analysis','Cost Estimating berbasis AACE','PMP Certification Preparation','Procurement Negotiation'];
const gallery = [
  { src: 'https://media.licdn.com/dms/image/v2/D5622AQHlcJhfLi2rBw/feedshare-shrink_800/B56ZPdsFWpG4Ag-/0/1734591144497?e=2147483647&t=a496iHDV7mS9p4kAmJUBKTpUqb-Au00JqHTpetc10X8&v=beta', alt: 'Dokumentasi Project Management Training untuk PT PLN' },
  { src: 'https://media.licdn.com/dms/image/v2/D5622AQGXWJW_cty1qw/feedshare-shrink_800/B56ZPdsFWNGsAs-/0/1734591143877?e=2147483647&t=5wUhyPfLynZ6-yvPW4XU7qzH_C_yHM_e2AD3n8k7tAM&v=beta', alt: 'Sesi konsultasi dan pelatihan project management PT PLN' },
  { src: 'https://media.licdn.com/dms/image/v2/D5622AQHILTzbI48Whw/feedshare-shrink_800/B56ZPdsFXfHIAg-/0/1734591148438?e=2147483647&t=DtahGYJ7I3MEmQXL-Kd8uzsLA58hQ5J79_X6NByx98I&v=beta', alt: 'Peserta Project Management Training PT PLN' },
];

export default async function Home() {
  return localize(<main id="main-content">
    <section className="hero" id="beranda">
      <SiteNavigation/>
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow"><span/> PROJECT MANAGEMENT • OIL & GAS</p>
          <h1>Konsultasi &amp; pelatihan<br/><em>manajemen proyek.</em></h1>
          <p className="lead">PT Primadev Global Consulting membantu organisasi di industri migas dan proyek kompleks mengubah kompleksitas proyek menjadi keputusan yang jelas, terukur, dan berdampak—dari strategi hingga realisasi di lapangan.</p>
          <div className="hero-actions"><Link className="button primary" href="/kontak">Diskusikan kebutuhan Anda <ArrowRight size={18}/></Link><Link className="button secondary" href="/layanan">Eksplor layanan <ChevronRight size={18}/></Link></div>
          <div className="proof"><div><strong>2013</strong><span>Didirikan</span></div><div><strong>11–50</strong><span>Profesional</span></div><div><strong>EPCI</strong><span>Keahlian inti</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Ilustrasi kendali proyek terpadu">
          <div className="orb orb-one"/><div className="orb orb-two"/><div className="axis axis-x"/><div className="axis axis-y"/>
          <div className="signal-card signal-main"><span className="signal-label">PROJECT CONTROL</span><div className="gauge-ring"><span>360°</span><small>visibility</small></div><div className="signal-row"><span>Scope</span><i style={{width:'86%'}}/></div><div className="signal-row"><span>Cost</span><i style={{width:'72%'}}/></div><div className="signal-row"><span>Risk</span><i style={{width:'91%'}}/></div></div>
          <div className="signal-card signal-float"><CalendarRange size={18}/><span>Schedule<br/><b>On Track</b></span></div><div className="coordinates">06°12&apos;S / 106°49&apos;E<br/>INDONESIA</div>
        </div>
      </div><div className="scroll-note">SCROLL TO DISCOVER <span/></div>
    </section>
    <section className="intro shell" id="tentang">
      <div className="section-kicker">01 / SIAPA KAMI</div>
      <div className="intro-copy"><h2>Bukan sekadar konsultan.<br/><span>Kami partner eksekusi.</span></h2><p>Primadev adalah perusahaan konsultan dan pelatihan butik yang berfokus pada industri migas. Pendekatan kami kolaboratif, berbasis pengalaman nyata, dan dekat dengan realitas operasional tim Anda.</p><Link className="text-link" href="/tentang">Tentang PT Primadev Global Consulting →</Link></div>
      <div className="principles"><article><span>01</span><h3>Field-oriented</h3><p>Solusi dirancang dari konteks proyek yang nyata, bukan teori semata.</p></article><article><span>02</span><h3>Collaborative</h3><p>Bekerja berdampingan dengan tim untuk membangun kapabilitas yang bertahan.</p></article><article><span>03</span><h3>Outcome-driven</h3><p>Setiap engagement diarahkan pada performa, keselamatan, dan efisiensi.</p></article></div>
    </section>
    <section className="services" id="layanan"><div className="shell">
      <div className="section-head"><div><p className="section-kicker light">02 / LAYANAN</p><h2>Kapabilitas untuk<br/><span>proyek berisiko tinggi.</span></h2></div><p>Dari perencanaan hingga project assurance, kami membantu tim melihat gambaran utuh dan bergerak dengan percaya diri.</p></div>
      <div className="service-grid">{services.map(({number,icon:Icon,title,copy})=><article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={27}/></div><h3>{title}</h3><p>{copy}</p><Link href="/layanan">Lihat layanan konsultasi <ArrowRight size={16}/></Link></article>)}</div>
    </div></section>
    <section className="expertise shell" id="keahlian"><div><p className="section-kicker">03 / KEAHLIAN</p><h2>Pengalaman yang<br/><span>langsung dapat diterapkan.</span></h2><p className="expertise-lead">Program konsultasi dan pembelajaran dirancang untuk project manager, Project Management Office, engineer, planner, risk professional, hingga tim procurement.</p><Link className="text-link" href="/pelatihan">Lihat bidang pelatihan profesional →</Link></div><div className="expertise-list">{expertise.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong><Check size={18}/></div>)}</div></section>
    <section className="gallery-section" id="galeri"><div className="shell">
      <div className="gallery-head"><div><p className="section-kicker">04 / GALERI</p><h2>Pengalaman nyata.<br/><span>Dampak yang terlihat.</span></h2></div><div><p>Dokumentasi Project Management Training &amp; Consulting untuk PT PLN, sebagaimana dipublikasikan melalui kanal LinkedIn Primadev.</p><Link href="https://www.linkedin.com/posts/primadev-global-intisolusi_project-management-training-consulting-activity-7275402599590252544-qA6K" target="_blank" rel="noreferrer">Lihat postingan sumber <ExternalLink size={15}/></Link></div></div>
      <div className="gallery-grid">{gallery.map((item,index)=><figure className={`gallery-item gallery-item-${index+1}`} key={item.src}><Image unoptimized src={item.src} alt={item.alt} loading="lazy" decoding="async" width={800} height={600} referrerPolicy="no-referrer"/><figcaption><span>0{index+1}</span><strong>{index===0?'Project Management Training':index===1?'Consulting Session':'Team Learning'}</strong><small>PT PLN</small></figcaption></figure>)}</div>
    </div></section>
    <section className="cta-section" id="kontak"><div className="cta-bg"/><div className="shell cta-content"><p className="eyebrow"><span/> MULAI PERCAKAPAN</p><h2>Proyek penting Anda<br/>layak mendapat <em>kejelasan.</em></h2><p>Ceritakan tantangan tim Anda. Mari petakan langkah yang paling relevan untuk menjaga nilai, jadwal, dan hasil proyek.</p><div className="contact-actions"><Link className="button primary" href="mailto:primadevconsulting@gmail.com"><Mail size={18}/> primadevconsulting@gmail.com</Link><Link className="button outline" href="tel:+628111883646"><Phone size={18}/> +62 811 88 36 46</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({ "@context":"https://schema.org", "@type":"WebSite", "@id":siteUrl+"/#website", name:siteName, alternateName:"Primadev Global Consulting", url:siteUrl+"/", inLanguage:"id-ID", publisher:{"@id":siteUrl+"/#organization"} })}}/>
    <SiteFooter/>
  </main>);
}

export async function generateMetadata() { return translateData(baseMetadata, await getLocale()); }

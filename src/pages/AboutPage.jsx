import React from 'react';

const visionMissionItems = [
  'Mewujudkan IMTI yang unggul melalui internal lembaga yang harmonis dan pengembangan berkelanjutan bagi seluruh fungsionaris.',
  'Menjadikan IMTI FTUI sebagai katalisator inovasi dan wadah untuk berkarya bagi para fungsionaris dalam mewadahi minat bakat.',
  'Membangun dan menjaga kemitraan strategis dengan para stakeholder untuk perkembangan IMTI FTUI yang berkelanjutan.',
  'Membentuk mahasiswa TI yang peduli dan berdampak untuk masyarakat dan lingkungan.',
  'Memberikan pelayanan advokasi dan pembinaan lanjut sebagai bekal warga TI untuk meningkatkan kualitas secara tepat dan adaptif.',
];

const logoPhilosophyCards = [
  { title: 'Warna Biru & Orde', src: '/about/filosofi-1.png' },
  { title: 'Logo Teknik Industri', src: '/about/filosofi-2.png' },
  { title: '17 Bidang', src: '/about/filosofi-3.png' },
  { title: 'Makna Simbol', src: '/about/filosofi-4.png' },
];

const divisionCards = [
  { short: 'Kestari', full: 'Kesekretariatan', src: '/about/divisi-kestari.png' },
  { short: 'Kebend', full: 'Kebendaharaan', src: '/about/divisi-kebend.png' },
  { short: 'Litbang', full: 'Penelitian dan Pengembangan', src: '/about/divisi-litbang.png' },
  { short: 'Akpro', full: 'Akademis dan Keprofesian', src: '/about/divisi-akpro.png' },
  { short: 'Sosma', full: 'Sosial Masyarakat', src: '/about/divisi-sosma.png' },
  { short: 'Kastrat', full: 'Kajian dan Aksi Strategis', src: '/about/divisi-kastrat.png' },
  { short: 'Wirus', full: 'Kewirausahaan', src: '/about/divisi-wirus.png' },
  { short: 'Humas', full: 'Hubungan Masyarakat', src: '/about/divisi-humas.png' },
  { short: 'Siwa', full: 'Kreasi Mahasiswa', src: '/about/divisi-siwa.png' },
  { short: 'Kema', full: 'Kemahasiswaan', src: '/about/divisi-kema.png' },
  { short: 'Iptek', full: 'Ilmu Pengetahuan dan Teknologi', src: '/about/divisi-iptek.png' },
  { short: 'Ikhtiar', full: 'Ikatan Keluarga Harmonis Teknik Industri dalam Rohis', src: '/about/divisi-ikhtiar.png' },
];

const ImageSlot = ({ src, alt, hint, className = '', imageClassName = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${className}`}>
    <div className="absolute inset-0 z-0 flex items-center justify-center text-center px-4 text-slate-500">
      <p className="text-xs md:text-sm font-medium">{hint}</p>
    </div>
    <img
      src={src}
      alt={alt}
      className={`relative z-10 w-full h-full object-cover ${imageClassName}`}
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  </div>
);

const AboutPage = () => {
  return (
    <main className="bg-slate-100 text-slate-900 page-enter stagger-sections">
      <section className="reveal-on-scroll delay-1 animated-soft-bg px-4 md:px-6 pt-32 md:pt-36 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
          <ImageSlot
            src="/about/struktur-organisasi.png"
            alt="Struktur Organisasi IMTI FTUI"
            hint="Upload: public/about/struktur-organisasi.png"
            className="min-h-[260px] md:min-h-[420px] bg-white"
            imageClassName="object-contain"
          />

          <h2 className="text-soft-in text-center text-2xl md:text-5xl font-bold leading-tight">
            Tentang IMTI yang Sedang <span className="text-cyan-600">#MerekahMakna</span>
          </h2>
        </div>
      </section>

      <section className="reveal-on-scroll delay-2 px-4 md:px-6 py-12 md:py-16 bg-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900">VISI</h3>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
            IMTI FTUI yang inovatif dan kolaboratif sehingga berdampak secara optimal bagi warga Teknik Industri UI.
          </p>

          <h3 className="mt-8 text-3xl md:text-4xl font-bold text-blue-900">MISI</h3>
          <ol className="mt-4 text-left text-sm md:text-base leading-relaxed text-slate-700 space-y-2">
            {visionMissionItems.map((item, index) => (
              <li key={item}>
                <span className="font-semibold mr-1">{index + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="reveal-on-scroll delay-3 px-4 md:px-6 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-blue-950">FILOSOFI LOGO</h3>
          <p className="mt-2 text-center text-xl md:text-3xl font-semibold text-blue-800">Merekah Makna</p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {logoPhilosophyCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
                <ImageSlot
                  src={card.src}
                  alt={card.title}
                  hint={`Upload: public${card.src}`}
                  className="aspect-[3/4]"
                  imageClassName="object-cover"
                />
                <p className="mt-3 text-center font-semibold text-slate-700 text-sm md:text-base">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll delay-4 px-4 md:px-6 py-12 md:py-16 bg-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-blue-950">BIDANG-BIDANG IMTI FTUI 2025</h3>

          <div className="mt-10 max-w-sm mx-auto">
            <ImageSlot
              src="/about/ketua-lembaga.png"
              alt="Ketua Lembaga"
              hint="Upload: public/about/ketua-lembaga.png"
              className="aspect-[4/5]"
            />
            <p className="mt-4 text-center text-xl font-bold text-slate-800">Ketua Lembaga</p>
            <p className="text-center text-sm text-slate-600">Membawahi 12 bidang IMTI</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {divisionCards.map((division, index) => (
              <article key={division.short} className={`reveal-on-scroll ${index % 3 === 0 ? 'delay-2' : index % 3 === 1 ? 'delay-3' : 'delay-4'} bg-white rounded-2xl border border-slate-200 p-4 shadow-sm`}>
                <ImageSlot
                  src={division.src}
                  alt={division.short}
                  hint={`Upload: public${division.src}`}
                  className="aspect-[16/10]"
                />
                <p className="mt-4 text-lg font-bold text-slate-800">{division.short}</p>
                <p className="text-sm text-slate-600">{division.full}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

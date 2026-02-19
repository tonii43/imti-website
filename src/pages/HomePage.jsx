import React from 'react';
import { Instagram, Linkedin, Mail, Music2, Youtube } from 'lucide-react';

const menuItems = [
  {
    title: 'Publikasi, Partnership, & MC',
    desc: 'Bagian luar kerja sama, publikasi internal, dan permintaan narator di acara.',
    src: '/home/menu-publikasi.png',
  },
  {
    title: 'Informasi Administrasi',
    desc: 'Pengajuan surat, inventarisasi peminjaman fasilitas, dan keperluan administrasi lainnya.',
    src: '/home/menu-administrasi.png',
  },
  {
    title: 'Advokasi & Kesejahteraan Mahasiswa',
    desc: 'Informasi akademis, magic book, data beasiswa, dan keterangan sakit dan advokasi fasilitas.',
    src: '/home/menu-advokasi.png',
  },
  {
    title: 'Pewadahan & Pencerdasan Keilmiahan',
    desc: 'Peminjaman lomba keilmuan, administrasi pasca lomba, arsip pencerdasan.',
    src: '/home/menu-keilmiahan.png',
  },
  {
    title: 'Data Internal IMTI',
    desc: 'Quality control, cashflow, dan informasi kebutuhan data.',
    src: '/home/menu-data-internal.png',
  },
];

const teaserButtons = ['Organigram', 'Visi dan Misi', 'Filosofi Logo', 'Bidang-bidang'];

const ImageBox = ({ src, alt, hint, className = '', imageClassName = '' }) => (
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

const HomePage = () => {
  return (
    <main className="text-slate-900 page-enter stagger-sections">
      <section className="reveal-on-scroll delay-1 animated-soft-bg px-4 md:px-6 pt-32 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-soft-in text-4xl md:text-6xl font-bold tracking-tight inline-block bg-gradient-to-r from-blue-950 via-imti-blue to-blue-700 bg-clip-text text-transparent">
            IMTI FTUI 2026
          </h1>
          <h2 className="text-soft-in mt-2 text-3xl md:text-5xl font-bold inline-block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            #MerekahMakna
          </h2>

          <div className="mt-5 mx-auto flex justify-center gap-3">
            <ImageBox
              src="/home/avatar-1.png"
              alt="Avatar 1"
              hint="Upload: public/home/avatar-1.png"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full"
              imageClassName="object-cover"
            />
            <ImageBox
              src="/home/avatar-2.png"
              alt="Avatar 2"
              hint="Upload: public/home/avatar-2.png"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full"
              imageClassName="object-cover"
            />
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3">
            <ImageBox
              src="/home/hero-slide-1.png"
              alt="Hero slide 1"
              hint="Upload: public/home/hero-slide-1.png"
              className="aspect-[16/9]"
            />
            <ImageBox
              src="/home/hero-slide-2.png"
              alt="Hero slide 2"
              hint="Upload: public/home/hero-slide-2.png"
              className="aspect-[16/9]"
            />
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-slate-700 leading-relaxed font-medium">
            Selamat datang di situs web Ikatan Mahasiswa Teknik Industri Fakultas Teknik Universitas Indonesia 2026!
          </p>

          <button className="mt-4 bg-imti-blue text-white px-7 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
            Telusuri
          </button>

          <div className="mt-14 flex justify-center gap-6 text-blue-950">
            <Instagram className="w-6 h-6" />
            <Music2 className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Mail className="w-6 h-6" />
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll delay-2 bg-white px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <ImageBox
            src="/home/newsletter-cover.png"
            alt="Newsletter"
            hint="Upload: public/home/newsletter-cover.png"
            className="aspect-[16/10]"
          />

          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-500">IMTI&apos;s Newsletter #10</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Rangkuman kegiatan yang telah dilaksanakan oleh IMTI FTUI 2025 dari bulan Februari hingga Maret 2025.
            </p>
            <button className="mt-4 bg-slate-300 text-white px-4 py-2 rounded-md text-sm font-semibold">Cek Selengkapnya</button>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll delay-3 bg-white px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-400 leading-tight">
              Temukan <em className="not-italic">update</em>
              <br />
              terbaru dari kami
            </h3>
            <p className="mt-4 text-slate-300">Melalui Instagram @IMTIFTUI</p>
            <button className="mt-4 bg-slate-300 text-white px-4 py-2 rounded-md text-sm font-semibold">Cek Selengkapnya</button>
          </div>

          <ImageBox
            src="/home/instagram-preview.png"
            alt="Instagram preview"
            hint="Upload: public/home/instagram-preview.png"
            className="aspect-[16/10]"
          />
        </div>
      </section>

      <section className="reveal-on-scroll delay-4 bg-slate-200 px-4 md:px-6 py-14 md:py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[95%] aspect-square rounded-full bg-slate-300/40" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-400">
              Tentang Kami, Tentang <span className="text-sky-300">#MerekahMakna</span>
            </h3>

            <div className="mt-5 mx-auto w-24 h-24 md:w-28 md:h-28">
              <ImageBox
                src="/home/tentang-logo.png"
                alt="Logo tentang kami"
                hint="Upload: public/home/tentang-logo.png"
                className="w-full h-full rounded-full"
              />
            </div>

            <p className="mt-6 text-left text-sm md:text-base text-slate-700 leading-relaxed">
              Kami memiliki visi untuk menjadikan <strong>IMTI FTUI</strong> yang <strong>inovatif</strong> dan <strong>kolaboratif</strong>
              sehingga dapat <strong>berdampak optimal</strong> bagi warga TI UI. Dalam mewujudkannya, dilakukan pengembangan berkelanjutan
              bagi para fungsionaris, memberikan wadah untuk berkarya, membangun kemitraan strategis bagi para stakeholders, membentuk
              mahasiswa TI UI yang berdampak, dan memberikan pelayanan advokasi serta pembinaan lanjut sebagai bekal seluruh warga TI.
            </p>

            <div className="mt-5 text-left font-semibold text-slate-700">Lihat lebih lanjut:</div>
            <div className="mt-3 flex flex-wrap gap-2 justify-start">
              {teaserButtons.map((item) => (
                <button key={item} className="bg-blue-950 text-white px-4 py-2 rounded-md text-xs md:text-sm">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pilih-menu" className="reveal-on-scroll delay-5 bg-yellow-100 px-4 md:px-6 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800 text-center">Pilih Menu Sesuai Kebutuhanmu!</h3>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {menuItems.map((item, index) => (
              <article key={item.title} className={`reveal-on-scroll ${index % 2 === 0 ? 'delay-2' : 'delay-3'} bg-white rounded-2xl border border-yellow-200 shadow-sm p-3 flex flex-col`}>
                <ImageBox
                  src={item.src}
                  alt={item.title}
                  hint={`Upload: public${item.src}`}
                  className="aspect-[4/3]"
                />
                <h4 className="mt-3 text-sm md:text-base font-bold text-slate-800 min-h-[48px]">{item.title}</h4>
                <p className="mt-2 text-xs md:text-sm text-slate-600 flex-1">{item.desc}</p>
                <button className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-md text-xs md:text-sm font-semibold w-fit">Lihat</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak-kami" className="reveal-on-scroll delay-6 relative px-4 md:px-6 py-14 md:py-20 text-white bg-blue-950">
        <div className="absolute inset-0 opacity-35">
          <ImageBox
            src="/home/kontak-background.png"
            alt="Kontak background"
            hint="Upload: public/home/kontak-background.png"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold">Kontak Kami</h3>
            <p className="mt-4 text-blue-100 leading-relaxed">
              Untuk keperluan lebih lanjut, hubungi salah satu narahubung IMTI FTUI 2026 di bawah ini.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="bg-yellow-100 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold">Narahubung 1</button>
              <button className="bg-yellow-100 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold">Narahubung 2</button>
            </div>
          </div>

          <ImageBox
            src="/home/kontak-photo.png"
            alt="Kontak foto"
            hint="Upload: public/home/kontak-photo.png"
            className="aspect-[16/10] bg-blue-900/40 border-blue-800"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;

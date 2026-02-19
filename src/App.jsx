import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Mail, Music2, Menu, X } from 'lucide-react'; 
import AboutPage from './pages/AboutPage';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center py-4 px-5 md:px-8 w-full bg-white/50 backdrop-blur-md shadow-md rounded-full">
          <Link to="/" className="font-bold text-base md:text-xl flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img src="/imti_ui.jpeg" alt="IMTI Logo" className="w-8 h-8 rounded-full" />
            <span>IMTI FTUI 2026</span>
          </Link>

          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-imti-blue">Beranda</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-imti-blue">About Us</Link>
            </li>
            <li className="hover:text-imti-blue cursor-pointer">Pilih Menu</li>
            <li className="hover:text-imti-blue cursor-pointer">Kontak Kami</li>
          </ul>

          <button
            type="button"
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-white/70 transition"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 bg-white/90 backdrop-blur-md shadow-md rounded-2xl border border-white/50 px-5 py-4">
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <Link to="/" className="hover:text-imti-blue" onClick={() => setIsOpen(false)}>
                Beranda
              </Link>
              <Link to="/about" className="hover:text-imti-blue" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <button type="button" className="text-left hover:text-imti-blue">Pilih Menu</button>
              <button type="button" className="text-left hover:text-imti-blue">Kontak Kami</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section className="text-center pt-32 pb-16 px-4">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 inline-block mx-auto bg-gradient-to-r from-blue-950 via-imti-blue to-blue-700 bg-clip-text text-transparent">
      IMTI FTUI 2026
    </h1>
    <h2 className="text-3xl md:text-5xl font-bold mb-8 inline-block mx-auto bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
      #MerekahMakna
    </h2>

    <div className="flex justify-center mb-8">
      <div className="relative">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
          alt="Avatar 1" 
          className="w-24 h-24 md:w-32 md:h-32 -mr-4 z-10 relative"
        />
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" 
          alt="Avatar 2" 
          className="w-24 h-24 md:w-32 md:h-32 -ml-4 relative"
        />
      </div>
    </div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 px-4">
        <div className="h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
            <span className="text-gray-400">Foto Gugus 1</span>
        </div>
        <div className="h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
             <span className="text-gray-400">Foto Gugus 2</span>
        </div>
    </div>

    <p className="max-w-2xl mx-auto text-gray-600 mb-6 leading-relaxed">
      Selamat datang di situs web <strong>Ikatan Mahasiswa Teknik Industri Fakultas Teknik Universitas Indonesia 2026!</strong>
    </p>

    <button className="bg-imti-blue text-white px-8 py-2 rounded-full font-semibold hover:bg-blue-700 transition mb-10 shadow-lg shadow-blue-200">
      Telusuri
    </button>

    <div className="flex justify-center gap-6 text-imti-dark">
      <Instagram className="w-6 h-6 hover:text-pink-600 cursor-pointer" />
      <Music2 className="w-6 h-6 hover:text-black cursor-pointer" />
      <Youtube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
      <Linkedin className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
      <Mail className="w-6 h-6 hover:text-gray-600 cursor-pointer" />
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="max-w-5xl mx-auto px-4 py-12">
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-50 relative min-h-[300px]">
        <img 
          src="https://placehold.co/600x400/e2e8f0/1e293b?text=Newsletter+Cover" 
          alt="Newsletter Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
           FEBRUARY - MARCH
        </div>
      </div>

      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
        <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-xs">IMTI</div>
             <span className="font-bold text-lg">IMTI's Newsletter #10</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          Rangkuman Kegiatan
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Rangkuman kegiatan yang telah dilaksanakan oleh IMTI FTUI 2026 dari bulan Februari hingga Maret 2026.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-fit shadow-md">
          Cek Selengkapnya
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="leading-tight">
        <p className="text-xl md:text-3xl font-semibold">Ikatan Mahasiswa Teknik Industri</p>
        <p className="text-xl md:text-5xl font-bold">Universitas Indonesia</p>
      </div>

      <div className="flex items-center gap-5 md:gap-7">
        <Instagram className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition" />
        <Music2 className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition" />
        <Youtube className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition" />
        <Linkedin className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition" />
        <Mail className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition" />
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <main>
    <HeroSection />
    <NewsletterSection />
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
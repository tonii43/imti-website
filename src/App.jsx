import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Music2 } from 'lucide-react'; 

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
    <div className="flex justify-between items-center py-4 px-8 max-w-7xl w-full bg-white/50 backdrop-blur-md shadow-md rounded-full">
      <div className="font-bold text-xl flex items-center gap-2">
        <img src="/imti_ui.jpeg" alt="IMTI Logo" className="w-8 h-8 rounded-full" />
        <span>IMTI FTUI 2026</span>
      </div>
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        <li className="hover:text-imti-blue cursor-pointer">Beranda</li>
        <li className="hover:text-imti-blue cursor-pointer">About Us</li>
        <li className="hover:text-imti-blue cursor-pointer">Pilih Menu</li>
        <li className="hover:text-imti-blue cursor-pointer">Kontak Kami</li>
      </ul>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="text-center pt-32 pb-16 px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-imti-blue tracking-tight mb-2">
      IMTI FTUI 2026
    </h1>
    <h2 className="text-3xl md:text-5xl font-bold text-cyan-500 mb-8">
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

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <NewsletterSection />
      </main>
      <footer className="w-full h-20 bg-gray-50 mt-12 flex items-center justify-center text-gray-400 text-sm">
        © 2026 IMTI FTUI
      </footer>
    </div>
  );
}

export default App;
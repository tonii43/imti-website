import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Menu, Music2, X, Youtube } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Global toggle for the in-construction overlay
const IN_CONSTRUCTION = true;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-7xl">
        <div className="relative flex justify-between items-center py-4 px-5 md:px-8 w-full bg-white/50 backdrop-blur-md shadow-md rounded-full">
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 text-slate-700">
            <img src="/icons/cone.svg" alt="Construction" className="w-4 h-4" />
            <span className="text-xs font-semibold">In construction · Expected July 2026</span>
          </div>
          <Link to="/" className="font-bold text-base md:text-xl flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img src="/imti_ui.jpeg" alt="IMTI Logo" className="w-8 h-8 rounded-full" />
            <span>IMTI FTUI 2026</span>
          </Link>

          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-imti-blue" onClick={() => window.scrollTo(0, 0)}>Beranda</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-imti-blue" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            </li>
            <li>
              <a href="/#pilih-menu" className="hover:text-imti-blue">Pilih Menu</a>
            </li>
            <li>
              <a href="/#kontak-kami" className="hover:text-imti-blue">Kontak Kami</a>
            </li>
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

        <div
          className={`md:hidden mt-3 overflow-hidden rounded-2xl border border-white/50 bg-white/90 px-5 backdrop-blur-md shadow-md transition-all duration-300 ease-out ${
            isOpen
              ? 'max-h-60 opacity-100 translate-y-0 pointer-events-auto py-4'
              : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none py-0'
          }`}
        >
          <div className={`flex flex-col gap-3 text-sm font-medium text-gray-700 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <Link to="/" className="hover:text-imti-blue" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
              Beranda
            </Link>
            <Link to="/about" className="hover:text-imti-blue" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
              About Us
            </Link>
            <a href="/#pilih-menu" className="text-left hover:text-imti-blue" onClick={() => setIsOpen(false)}>
              Pilih Menu
            </a>
            <a href="/#kontak-kami" className="text-left hover:text-imti-blue" onClick={() => setIsOpen(false)}>
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ========================================
// PUT YOUR SOCIAL MEDIA LINKS HERE
// ========================================
const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/imtiftui', // ← ganti link Instagram
  tiktok:    'https://tiktok.com/@imtiftui',      // ← ganti link TikTok
  youtube:   'https://youtube.com/@YOUR_YOUTUBE',    // ← ganti link YouTube
  linkedin:  'https://linkedin.com/company/imti-ui', // ← ganti link LinkedIn
  email: 'https://mail.google.com/mail/?view=cm&to=humasimtiftui2026@gmail.com',          // ← ganti email
};

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 text-white relative z-50">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="leading-tight">
        <p className="text-xl md:text-3xl font-semibold">Ikatan Mahasiswa Teknik Industri</p>
        <p className="text-xl md:text-5xl font-bold">Universitas Indonesia</p>
      </div>

      <div className="flex items-center gap-5 md:gap-7">
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition" />
        </a>
        <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <Music2 className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition" />
        </a>
        <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition" />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition" />
        </a>
        <a href={SOCIAL_LINKS.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
          <Mail className="w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition" />
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  const location = useLocation();

  React.useEffect(() => {
    const targets = document.querySelectorAll('.reveal-on-scroll');

    // Instantly hide without transition (prevents slow fade-out flash)
    targets.forEach((target) => {
      target.style.transition = 'none';
      target.classList.remove('is-visible');
    });

    let observer;

    const timer = setTimeout(() => {
      const freshTargets = document.querySelectorAll('.reveal-on-scroll');

      // Re-enable transitions before observer fires
      freshTargets.forEach((target) => {
        target.style.transition = '';
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -6% 0px',
        },
      );

      freshTargets.forEach((target) => observer.observe(target));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [location.key]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage inConstruction={IN_CONSTRUCTION} />} />
        <Route path="/about" element={<AboutPage inConstruction={IN_CONSTRUCTION} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

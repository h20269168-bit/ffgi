import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUp } from 'lucide-react';

// Import newly created modular pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PreviewPage from './pages/PreviewPage';
import VisionPage from './pages/VisionPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

// Import footer
import Footer from './components/Footer';

// Helper component to scroll window to top smoothly on router path transitions
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

// Inner Navigation helper to share state and track active paths
function MainAppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'FEATURES', path: '/features' },
    { name: 'PREVIEW', path: '/preview' },
    { name: 'VISION', path: '/vision' },
    { name: 'TEAM', path: '/team' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // Helper to determine if path is matching to set visual indicator
  const isPathActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#00E5FF]/20 selection:text-[#222222] flex flex-col justify-between">
      {/* Scroll to Top utility */}
      <ScrollToTop />

      {/* Navigation Header bar */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo brand linked to index */}
          <Link 
            to="/" 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 bg-[#00E5FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#00E5FF]/20 group-hover:scale-105 transition-all">
              <span className="font-display font-black text-xl tracking-tighter text-white">S</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-[#222222] group-hover:text-[#00E5FF] transition-colors">
              SYNK<span className="text-[#00E5FF]">.</span>
            </span>
          </Link>

          {/* Hamburger toggler icon (Always visible on all screen sizes) */}
          <button 
            className="text-[#222222] p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Menu Slide-Over Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 md:px-12 border-b border-gray-150 shadow-2xl flex flex-col justify-between pb-8"
          >
            <div className="max-w-2xl mx-auto w-full flex flex-grow flex-col justify-between">
              <div className="flex flex-col gap-4 text-base font-bold text-[#222222] pt-4 text-left w-full">
                <span className="text-[10px] font-mono font-bold text-gray-300 tracking-widest uppercase block mb-2">SYNK SITE DIRECTORY</span>
                {navLinks.map((link, idx) => {
                  const active = isPathActive(link.path);
                  return (
                    <Link 
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`py-3 md:py-4 border-b border-gray-50 flex justify-between items-center transition-all duration-200 hover:pl-2 ${
                        active ? 'text-[#00E5FF] font-black' : 'text-gray-600 font-medium hover:text-[#222222]'
                      }`}
                    >
                      <span className="text-lg md:text-xl">{link.name}</span>
                      <span className="text-[9px] text-[#00E5FF] font-mono font-bold">0{idx + 1}</span>
                    </Link>
                  );
                })}
                
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="py-4 text-[#00E5FF] font-black tracking-wider text-xs font-mono uppercase flex items-center justify-between hover:underline"
                >
                  <span>학술 제휴 메일 문의하기</span>
                  <span className="px-2.5 py-1.5 rounded-full bg-[#00E5FF]/10 text-[9px]">ACTIVE</span>
                </Link>
              </div>

              <div className="text-[10px] text-gray-400 font-mono flex justify-between items-center border-t border-gray-50 pt-6 mt-6">
                <span>© 2026 SYNK CREATIVE INTERACTIVE.</span>
                <span>VERSION 1.1</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content routers with smooth fade animations */}
      <main className="pt-20 flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Shared Footer component */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainAppContent />
    </BrowserRouter>
  );
}

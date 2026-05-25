import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import ServicePortal from './components/ServicePortal';
import About from './components/About';
import SolutionIntro from './components/SolutionIntro';
import Features from './components/Features';
import Demo from './components/Demo';
import AppPreview from './components/AppPreview';
import Vision from './components/Vision';
import BusinessExpansion from './components/BusinessExpansion';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'features', 'demo', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navigation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: '서비스 소개', id: 'about' },
    { name: '주요 기능', id: 'features' },
    { name: '사용자 흐름', id: 'demo' },
    { name: '기대 효과', id: 'vision' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#00E5FF]/20 selection:text-[#222222]">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-[#00E5FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#00E5FF]/20 group-hover:scale-105 transition-all">
              <span className="font-display font-black text-xl tracking-tighter text-white">S</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-[#222222] group-hover:text-[#00E5FF] transition-colors">SYNK<span className="text-[#00E5FF]">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold transition-colors duration-250 relative py-1.5 px-1 ${
                  activeSection === link.id 
                    ? 'text-[#00E5FF]' 
                    : 'text-[#222222]/70 hover:text-[#222222]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5FF]"
                  />
                )}
              </button>
            ))}
            <button 
               onClick={() => scrollToSection('contact')}
               className="px-6 py-2.5 bg-[#222222] text-white hover:bg-[#00E5FF] rounded-full text-xs font-bold transition-all shadow-sm shadow-[#222222]/10"
            >
              문의하기
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#222222] p-2 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden border-b border-gray-100 shadow-xl"
          >
            <div className="flex flex-col gap-5 text-lg font-bold text-[#222222]">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }}
                  className={`text-left py-3 border-b border-gray-100 flex justify-between items-center ${
                    activeSection === link.id ? 'text-[#00E5FF]' : ''
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-gray-300 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </button>
              ))}
              <button 
                onClick={() => { setIsMenuOpen(false); scrollToSection('contact'); }}
                className="text-left py-4 text-[#00E5FF] border-b border-gray-100 font-extrabold"
              >
                문의하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
         <Hero onContactClick={() => scrollToSection('contact')} />
         
         {/* Live Prototype App Showcase */}
         <div id="demo-interactive" className="bg-[#F7F7F7] py-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <ServicePortal />
            </div>
         </div>

         <About />
         <SolutionIntro />
         <Features />
         <Demo />
         <AppPreview />
         <Vision />
         <BusinessExpansion />
      </main>

      <Footer />
    </div>
  );
}

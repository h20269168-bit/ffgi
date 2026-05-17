/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, BarChart3, Scan, Sparkles, Building2, ChevronRight, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import SolutionIntro from './components/SolutionIntro';
import Features from './components/Features';
import Demo from './components/Demo';
import AppPreview from './components/AppPreview';
import Vision from './components/Vision';
import BusinessExpansion from './components/BusinessExpansion';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<'main' | 'business'>('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'Preview', id: 'preview' },
    { name: 'Vision', id: 'vision' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-synk-electric rounded-xl flex items-center justify-center shadow-lg shadow-synk-electric/20 group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-xl tracking-tighter text-white">S</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-synk-dark">SYNK</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-synk-dark transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
               onClick={() => scrollToSection('contact')}
               className="px-6 py-2.5 bg-synk-dark text-white hover:bg-black rounded-full text-xs font-bold uppercase tracking-widest transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-synk-dark p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-bold text-synk-dark">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }}
                  className="text-left py-4 border-b border-black/[0.05]"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { setIsMenuOpen(false); scrollToSection('contact'); }}
                className="text-left py-4 border-b border-black/[0.05]"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Hero onContactClick={() => scrollToSection('contact')} />
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

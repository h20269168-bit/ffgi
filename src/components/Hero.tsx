import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Scan, Sparkles } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-56 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-synk-electric/5 border border-synk-electric/10 text-synk-electric text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-synk-electric animate-pulse" />
            SYNK.
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display leading-[1.1] mb-10 tracking-tight text-synk-dark">
            <span className="block whitespace-nowrap">누구나 자신의 스타일과 취향을</span>
            <span className="block font-extrabold text-synk-electric whitespace-nowrap">독립적으로 표현할 수 있는</span>
            <span className="block whitespace-nowrap">경험을 목표로 합니다.</span>
          </h1>
          <p className="text-lg lg:text-xl text-synk-dark/60 leading-relaxed max-w-lg mb-12 font-medium">
            시각 정보를 음성과 촉각으로 번역하는 <br className="hidden md:block" />
            접근성 기반 패션·뷰티 서비스, SYNK.
          </p>
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={onContactClick}
              className="group px-10 py-5 bg-synk-electric hover:bg-blue-600 rounded-2xl font-bold flex items-center gap-3 transition-all text-white shadow-xl shadow-synk-electric/20"
            >
              Contact Us
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto"
        >
          {/* Dashboard Behind Phone */}
          <div className="absolute -inset-20 bg-synk-electric/[0.03] rounded-full blur-[120px] -z-10" />
          
          {/* iPhone Mockup */}
          <div className="relative w-full max-w-[340px] mx-auto aspect-[1/2] rounded-[3.5rem] bg-white p-[12px] shadow-2xl border border-black/5">
            <div className="w-full h-full rounded-[3rem] overflow-hidden bg-[#F8F9FA] relative border border-black/5">
               {/* Internal App UI */}
               <div className="absolute top-0 left-0 right-0 h-10 flex justify-center items-center z-20">
                  <div className="w-24 h-6 bg-white rounded-b-2xl border-x border-b border-black/[0.03]" />
               </div>
               
               <div className="pt-16 px-6 h-full flex flex-col gap-6">
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-white border border-black/[0.03] shadow-sm">
                     <img 
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" 
                      className="w-full h-full object-cover grayscale opacity-40" 
                      alt="Fashion texture"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 laser-scan" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-black/5 pb-2">
                       <h3 className="text-lg font-bold font-display text-synk-dark">Color Analysis</h3>
                       <span className="text-[9px] font-mono text-synk-electric font-bold uppercase tracking-widest">Processing</span>
                    </div>
                    
                    <div className="space-y-3">
                       <div className="p-4 rounded-2xl bg-white border border-black/[0.03] shadow-sm">
                          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Deep Blue Tweed</div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: "75%" }}
                               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                               className="h-full bg-synk-electric"
                             />
                          </div>
                       </div>
                       
                       <div className="glass-card-premium p-5 rounded-3xl border-synk-electric/10 bg-synk-electric/[0.02]">
                          <div className="flex items-center justify-between mb-3">
                             <span className="text-[9px] font-bold text-synk-electric uppercase tracking-widest">Haptic Response</span>
                             <Sparkles size={10} className="text-synk-electric" />
                          </div>
                          <div className="flex gap-1 h-8 items-center">
                             {[...Array(12)].map((_, i) => (
                               <motion.div 
                                 key={i}
                                 animate={{ height: [10, 25, 10] }}
                                 transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                 className="flex-1 bg-synk-electric/20 rounded-full"
                               />
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Floating Data */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-4 lg:-right-12 glass-card-premium p-4 px-6 shadow-xl border-synk-electric/10"
          >
             <div className="text-[9px] text-slate-400 font-mono mb-1">RGB_VAL</div>
             <div className="text-xl font-display font-medium text-synk-electric">#0055FF</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

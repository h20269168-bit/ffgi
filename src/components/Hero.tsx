import { motion } from 'motion/react';
import { ChevronRight, Sparkles, Smartphone } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-48 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#222222]">
      {/* Gentle mint gradients behind */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-100/30 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left slogan and message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="mb-8">
            <span className="font-display font-black text-6xl lg:text-7xl tracking-tighter text-[#222222] uppercase">
              SYNK<span className="text-[#00E5FF]">.</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-display leading-[1.2] mb-8 tracking-tight text-[#222222] font-light">
            누구나 자신의 스타일을 <br />
            <span className="font-extrabold text-[#00E5FF]">독립적으로 표현하도록</span> <br />
            인터페이스를 혁신합니다.
          </h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mb-10 font-medium">
            시각 정보를 음성과 정교한 햅틱 촉각으로 번역하여 <br />
            장벽 없는 패션·뷰티 정보 쇼핑 and 어시스턴스를 구현합니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onContactClick}
              className="group px-8 py-4 bg-[#00E5FF] text-gray-950 font-bold rounded-2xl flex items-center gap-3 transition-all hover:scale-[1.02] hover:bg-[#00D0EE] active:scale-95 duration-300 shadow-lg shadow-[#00E5FF]/20"
            >
              협업 제안하기
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>
            <a 
              href="#demo-interactive"
              className="px-8 py-4 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              프로토타입 체험
            </a>
          </div>
        </motion.div>

        {/* Right iPhone mockup showing pristine light UI container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:ml-auto"
        >
          {/* Decorative backdrop */}
          <div className="absolute -inset-10 bg-[#00E5FF]/5 rounded-full blur-[80px] -z-10" />

          {/* Premium ivory white Smartphone frame */}
          <div className="relative w-full max-w-[325px] mx-auto aspect-[9/19] rounded-[3.5rem] bg-white p-[10px] shadow-2xl border border-gray-200/80 iphone-bezel">
            <div className="w-full h-full rounded-[2.9rem] overflow-hidden bg-gray-50 relative border border-gray-105/50 flex flex-col justify-between pb-8">
               
               {/* Phone Speaker Notch */}
               <div className="absolute top-0 left-0 right-0 h-8 flex justify-center items-center z-20">
                  <div className="w-20 h-4 bg-white rounded-b-xl border-x border-b border-gray-200/50 flex items-center justify-center">
                     <div className="w-6 h-1 bg-gray-300 rounded-full" />
                  </div>
               </div>

               {/* Camera scanning space mockup */}
               <div className="pt-12 px-5 h-full flex flex-col justify-between">
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-200 shadow-inner border border-gray-100">
                     <img 
                      src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000" 
                      className="w-full h-full object-cover grayscale opacity-90" 
                      alt="Fashion material"
                      referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 laser-scan" />
                  </div>

                  {/* High contrast sensory details mockup */}
                  <div className="space-y-4 mt-4">
                     <div className="flex justify-between items-end border-b border-gray-200/80 pb-2">
                        <span className="text-xs font-bold text-gray-800">질감 분석 모드</span>
                        <span className="text-[9px] font-mono text-[#00E5FF] font-black uppercase tracking-widest animate-pulse">Running</span>
                     </div>

                     <div className="space-y-2.5">
                        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
                           <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5 font-mono">가레스 화이트 와이드 실크</div>
                           <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "92%" }}
                                transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
                                className="h-full bg-gradient-to-r from-[#00E5FF] to-[#00D0EE]"
                              />
                           </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs">
                           <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">실시간 햅틱 주기</span>
                              <Sparkles size={11} className="text-[#00E5FF]" />
                           </div>
                           <div className="flex gap-1 h-6 items-center">
                              {[...Array(12)].map((_, i) => (
                                <motion.div 
                                  key={i}
                                  animate={{ height: [6, 22, 6] }}
                                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.08 }}
                                  className="flex-1 bg-[#00E5FF]/20 rounded-full"
                                />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Android tag at footer */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-mono">
                     <Smartphone size={10} />
                     <span>SYNK Mobile Engine v1.02</span>
                  </div>
               </div>

            </div>
          </div>

          {/* Floater values */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 -right-2 bg-white/95 p-4 px-6 rounded-2xl shadow-xl border border-gray-100"
          >
             <div className="text-[9px] text-gray-400 font-mono mb-0.5 font-bold">ACCESSIBILITY</div>
             <div className="text-lg font-display font-black text-[#00E5FF]">Haptic ON</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

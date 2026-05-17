import { motion } from 'motion/react';
import { Mic, Fingerprint, Volume2, Waves, Maximize, Settings } from 'lucide-react';

export default function SolutionIntro() {
  const uxFeatures = [
    { icon: <Volume2 size={20} />, label: "상태 음성 안내" },
    { icon: <Waves size={20} />, label: "진동 피드백" },
    { icon: <Maximize size={20} />, label: "큰 터치 영역" },
    { icon: <Settings size={20} />, label: "설명 모드 설정" },
  ];

  return (
    <section id="solution-intro" className="py-32 lg:py-56 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8"
          >
            The Solution
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-display font-light leading-tight mb-12 tracking-tight text-synk-dark"
          >
            SYNK는 시각 정보를 <br />
            <span className="font-extrabold text-synk-electric text-gradient-electric">음성과 촉각으로</span> 번역합니다.
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
             {["음성 안내", "접근성 UX", "감각 번역", "독립적 경험", "자기표현"].map((tag, i) => (
               <span key={i} className="px-6 py-2 rounded-full border border-black/[0.05] text-sm font-bold text-slate-400"># {tag}</span>
             ))}
          </div>
        </div>

        {/* Section 5: Accessibility UX */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl lg:text-5xl font-display font-bold leading-tight mb-8 text-synk-dark">
                음성이 중심인 <br />
                새로운 인터페이스.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                SYNK는 단순한 보조 기능을 넘어, 음성이 사용자 경험의 중심이 되는 UI/UX를 지향합니다. <br />
                사용자의 손가락이 닿는 모든 곳에 의미 있는 피드백을 담았습니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {uxFeatures.map((f, i) => (
                <div key={i} className="p-6 bg-slate-50 border border-black/[0.02] rounded-3xl flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-synk-electric shadow-sm">
                      {f.icon}
                   </div>
                   <span className="text-sm font-bold text-synk-dark">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-synk-electric/5 blur-[100px] -z-10 rounded-full" />
            <div className="glass-card-premium p-12 aspect-square flex flex-col items-center justify-center text-center border-synk-electric/10">
               <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border border-synk-electric/20 mb-8 relative">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-synk-electric/5 rounded-full" 
                  />
                  <Mic size={48} className="text-synk-electric relative z-10" />
               </div>
               <h4 className="text-xl font-bold mb-4 text-synk-dark">"카메라 분석 화면입니다."</h4>
               <p className="text-slate-400 text-sm font-medium">실시간 음성 가이드가 버튼 위치와 <br />화면 상태를 완벽하게 안내합니다.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

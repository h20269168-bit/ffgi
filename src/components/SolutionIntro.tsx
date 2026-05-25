import { motion } from 'motion/react';
import { Mic, Volume2, ShieldAlert, Sparkles, Sliders } from 'lucide-react';

export default function SolutionIntro() {
  const uxFeatures = [
    { icon: <Volume2 size={18} />, label: "실시간 한글 음성 내레이션" },
    { icon: <Sliders size={18} />, label: "100Hz 미세 햅틱 진동 피드백" },
    { icon: <ShieldAlert size={18} />, label: "오차 방지 안전 보정 센서" },
    { icon: <Sparkles size={18} />, label: "마이 스마트 옷장 자동 등록" }
  ];

  return (
    <section id="solution-intro" className="py-28 lg:py-36 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Head Intro */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00E5FF] font-display font-bold tracking-[0.25em] uppercase text-xs mb-4"
          >
            The Solution
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-light leading-tight mb-8 tracking-tight text-[#222222]"
          >
            SYNK는 제품의 미세한 느낌까지 <br />
            <span className="font-extrabold text-[#00E5FF]">가장 따뜻한 소리와 감촉으로</span> 번역합니다.
          </motion.h2>

          {/* Slogan Pill Tags */}
          <div className="flex flex-wrap justify-center gap-3">
             {["정밀 음성 전사", "접근성 햅틱 스티치", "장벽 없는 쇼핑", "유니버설 UX", "개성 표현"].map((tag, i) => (
                <span key={i} className="px-5 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-500 bg-white shadow-xs">
                  # {tag}
                </span>
             ))}
          </div>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold leading-tight mb-6 text-gray-800">
                소리와 감촉이 <br />
                사용자 가이드의 중심이 됩니다.
              </h3>
              <p className="text-gray-500 text-base leading-relaxed font-semibold">
                SYNK는 눈에만 보였던 패션 아이템의 화려한 이미지 데이터에서 짜임 밀도와 색채 주파수를 축출합니다. <br />
                손끝이 닿는 모든 포인트에서 풍부한 진동과 실시간 한국어 음성 큐레이션을 느껴보세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {uxFeatures.map((f, i) => (
                 <div key={i} className="p-5 bg-white border border-gray-150 rounded-2xl flex items-center gap-4 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#00E5FF] border border-gray-100 shadow-sm">
                       {f.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-700">{f.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right Card Illustration Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#00E5FF]/5 blur-[85px] -z-10 rounded-full" />
            <div className="p-10 lg:p-14 aspect-square flex flex-col items-center justify-center text-center bg-white border border-gray-200 shadow-xl rounded-[2.5rem]">
               <div className="w-28 h-28 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 mb-8 relative">
                  <motion.div 
                    animate={{ scale: [1, 1.25, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#00E5FF]/10 rounded-full" 
                  />
                  <Mic size={36} className="text-[#00E5FF] relative z-10" />
               </div>
               <h4 className="text-lg font-bold mb-3 text-gray-800">"화면 중앙에 코발트 블루 조직이 감지되었습니다."</h4>
               <p className="text-gray-400 text-xs font-semibold leading-relaxed">
                 어려운 설명 기호도 완벽한 자연어 음성 가이드라인으로 <br />
                 어려움 없이 매끄럽게 상황을 브리핑합니다.
               </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

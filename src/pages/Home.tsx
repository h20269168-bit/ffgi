import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Sparkles, Shield, Heart, HelpCircle, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const currentFeatures = [
    { title: "정밀 음성 안내", desc: "시각 정보를 완전한 뉘앙스와 디테일을 담은 오디오 해설로 전사합니다.", icon: <Sparkles className="text-[#00E5FF]" size={20} /> },
    { title: "접근성 햅틱 스티치", desc: "원단의 밀도와 거칠기, 짜임새를 입체적인 진동 패턴으로 손끝에 선물합니다.", icon: <Layers className="text-[#00E5FF]" size={20} /> },
    { title: "독립성 우선 가치", desc: "타인의 도움 없이 혼자서 완벽하게 자기표현을 가꿔나갈 수 있도록 지원합니다.", icon: <Shield className="text-[#00E5FF]" size={20} /> }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-[#00D0EE]/5 blur-[120px] rounded-full -z-10" />

      {/* Hero Showcase Section */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-36 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 text-left space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-[11px] font-mono font-bold uppercase tracking-widest"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>2026 Social Accessibility Innovation Initiative</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl sm:text-6xl font-display font-light leading-[1.1] tracking-tight text-[#222222]"
            >
              누구나 자신의 스타일을 <br />
              <span className="font-extrabold text-gradient-electric">독립적으로 표현하도록</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-500 font-medium text-base sm:text-lg max-w-xl leading-relaxed"
            >
              SYNK는 누구나 자신의 스타일과 취향을 독립적으로 표현할 수 있는 경험을 목표로 합니다. 시각 정보를 음성과 촉각으로 번역하는 접근성 기반 패션·뷰티 서비스입니다.
            </motion.p>
          </div>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => navigate('/preview')}
              className="group px-8 py-4 bg-[#222222] text-white font-bold rounded-2xl flex items-center gap-3 transition-all hover:bg-[#00E5FF] hover:text-[#222222] active:scale-95 duration-300 shadow-xl shadow-gray-200"
            >
              실시간 데스크톱 체험하기
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="group px-8 py-4 bg-white hover:bg-gray-50 text-gray-805 font-bold rounded-2xl border border-gray-200 flex items-center gap-2.5 transition-all active:scale-95 duration-300"
            >
              어바웃 스토리 보기
              <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right column: Immersive Smartphone Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="lg:col-span-5 relative lg:ml-auto"
        >
          {/* Decorative backdrop glow */}
          <div className="absolute -inset-10 bg-[#00E5FF]/8 rounded-full blur-[90px] -z-10" />

          {/* Premium Smartphone Frame Mockup */}
          <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] rounded-[3.5rem] bg-white p-[11px] shadow-2xl border border-gray-200/80 iphone-bezel">
            <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-gray-50 relative border border-gray-100 flex flex-col justify-between p-6">
              {/* Top Notch Pill */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-white/90 backdrop-blur-md rounded-full shadow-xs border border-gray-100 flex items-center justify-center -z-10" />

              {/* Mockup content: Screen Interface */}
              <div className="flex justify-between items-center mt-3">
                <span className="font-display font-black text-xs text-[#222222]">SYNK INC.</span>
                <span className="text-[9px] font-mono font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">LIVE PREVIEW</span>
              </div>

              {/* Middle Section: Scanning UI */}
              <div className="my-auto space-y-6">
                <div className="relative w-24 h-24 mx-auto bg-white border border-gray-150 rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
                  <div className="laser-scan absolute left-0 right-0 z-10" />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 to-[#00D0EE]/5 flex items-center justify-center text-[#00E5FF]"
                  >
                    <Layers size={32} />
                  </motion.div>
                </div>

                <div className="text-center space-y-2">
                  <h4 className="text-sm font-extrabold text-gray-800">질감 감각 분석 어시스턴트</h4>
                  <p className="text-[10.5px] text-gray-400 font-semibold leading-relaxed leading-tighter px-2">
                    "현재 코발트 블루 네트 가디건의 촘촘한 여름용 원사 구조를 손끝 피드백으로 전송하고 있습니다."
                  </p>
                </div>

                {/* Haptic Wave Simulator */}
                <div className="p-3 bg-white border border-gray-100 rounded-xl space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[8px] text-gray-400 font-bold uppercase tracking-widest">
                    <span>Haptic Frequency</span>
                    <span className="text-[#00E5FF]">350 Hz Active</span>
                  </div>
                  <div className="flex gap-0.5 h-4 items-center">
                    {[...Array(14)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [4, 16, 4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                        className="flex-1 bg-[#00E5FF]/30 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar button */}
              <div className="w-full bg-[#222222] text-white py-3 rounded-2xl flex items-center justify-center text-[10px] font-bold uppercase gap-2 cursor-pointer shadow-md hover:bg-[#00E5FF] hover:text-[#222222] transition-colors" onClick={() => navigate('/preview')}>
                <span>대화형 시뮬레이션 시작</span>
                <ChevronRight size={10} />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Brief Promo Banner */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[#00E5FF] font-mono lg:text-xs text-[10px] uppercase font-bold tracking-[0.25em] block">
              OUR INTENTION & INNOVATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-[#222222]">
              더 독립적이고 온전한 <span className="font-extrabold text-[#00E5FF]">자기표현 경험</span>
            </h2>
            <p className="text-gray-400 text-sm font-semibold max-w-xl mx-auto leading-relaxed">
              SYNK는 일반적인 기술 프레임워크가 전달하지 못하는 제품의 감도, 미세한 입자 뉘앙스를 재가공하여 디지털 패션 격차를 평등하게 해결하고자 노력합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
            {currentFeatures.map((f, i) => (
              <div key={i} className="p-8 bg-white border border-gray-150 rounded-[2rem] flex flex-col items-start text-left gap-4 shadow-2xs transition-all hover:shadow-md hover:border-[#00E5FF]/30">
                <div className="p-3 bg-[#00E5FF]/10 rounded-xl flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive College Exhibition Presentation Frame banner */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">PREMIUM PRODUCT SHOWCASE</div>
          <h2 className="text-3xl font-display font-light text-[#222222] leading-tight">
            손끝으로 대면하는 <br />
            <span className="font-extrabold text-gradient-electric">진정한 배리어프리 디지털 라이프</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">
            우리는 패션 쇼핑과 뷰티가 인간의 본질적인 자기표현 방식이라고 믿습니다. 가치 있는 브랜드 파트너십을 바탕으로, 보조 오디오 스크립트 번역과 섬세한 햅틱 피드백 기술을 통해 누구나 편리하게 이용할 수 있는 포용적 디지털 쇼핑 생태계를 만들어가고 있습니다.
          </p>
        </div>

        <div className="p-8 lg:p-12 bg-gradient-to-tr from-gray-50 to-white border border-gray-150 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between aspect-[4/3] shadow-inner">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/8 blur-2xl rounded-full" />
          <div className="text-xs font-mono font-extrabold text-[#00E5FF] tracking-widest uppercase">SYNK CORE ESSENCE</div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-semibold italic my-auto">
            "시각장애 사용자가 온라인에서도 옷감의 질감과 디테일을 똑같이 경험하고, 메이크업을 자유롭고 정교하게 완성할 수 있는 환경을 만들어갑니다."
          </p>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
            <span className="text-[10px] text-gray-400 font-semibold font-mono">EXHIBITED AT COLLEGE IN 2026</span>
            <button onClick={() => navigate('/about')} className="text-xs font-bold text-gray-800 hover:text-[#00E5FF] flex items-center gap-1 transition-colors">
              <span>스토리 정독하기</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

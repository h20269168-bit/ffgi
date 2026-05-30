import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Volume2, Sparkles, Smartphone, ChevronRight, Play, Check, 
  HelpCircle, Eye, Info, Camera, AlignCenter, List, ShieldAlert 
} from 'lucide-react';
import ServicePortal from '../components/ServicePortal';

export default function PreviewPage() {
  const [activeHaptic, setActiveHaptic] = useState<string | null>(null);
  const [isPlayingSound, setIsPlayingSound] = useState<string | null>(null);

  // Play synthetic voice or tone for interactive testing
  const triggerSimulatedAudio = (text: string, id: string) => {
    setIsPlayingSound(id);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ko-KR";
      utterance.rate = 1.0;
      utterance.onend = () => setIsPlayingSound(null);
      utterance.onerror = () => setIsPlayingSound(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingSound(null), 2000);
    }
  };

  // Simulate haptic wave vibrations inside client
  const triggerHapticVibe = (type: 'short' | 'long' | 'strong') => {
    setActiveHaptic(type);
    
    // Play synthetic buzzer sound utilizing Web Audio API for deep sensory experience
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      if (type === 'short') {
        // Short high beep
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        oscillator.stop(audioCtx.currentTime + 0.16);
      } else if (type === 'long') {
        // Long continuous warm wave
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
        oscillator.stop(audioCtx.currentTime + 0.82);
      } else if (type === 'strong') {
        // Strong pulsating alert
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        oscillator.stop(audioCtx.currentTime + 0.52);
      }
    } catch (e) {
      // Audio fallback
    }

    // Try standard navigator.vibrate if supported (Android Chrome)
    if (navigator.vibrate) {
      if (type === 'short') navigator.vibrate(60);
      else if (type === 'long') navigator.vibrate(500);
      else if (type === 'strong') navigator.vibrate([100, 50, 100, 50, 200]);
    }

    setTimeout(() => setActiveHaptic(null), 1000);
  };

  // 6 app mockups representing different pages within identical smartphone frames
  const appShowcaseScreens = [
    {
      id: "home",
      screenTitle: "홈 화면",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=700",
      desc: "대형 스페이스 버튼과 고인체동조 터치 존으로 구성되어 한눈에 안전한 쇼클 수거 및 질감 스캐너 구동을 시작할 수 있습니다."
    },
    {
      id: "camera",
      screenTitle: "카메라 분석 화면",
      image: "https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=700",
      desc: "비전 인공지능이 카메라가 지목한 사물의 영역을 레이저 추적하며, 오디파이 번역 정보를 상부로 고감도 캐스팅합니다."
    },
    {
      id: "result",
      screenTitle: "분석 결과 화면",
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=700",
      desc: "감지된 옷감의 두께 및 짜임 구멍 정보를 음성 성우 및 감각 햅틱 스티치 흐름으로 완전하게 변조 출력합니다."
    },
    {
      id: "voice",
      screenTitle: "음성 UX 화면",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=700",
      desc: "모든 동작과 알림이 고속 음향 플레이어를 통과하며, 가사를 실시간 무드에 대칭 동조하여 완만하게 뿌립니다."
    },
    {
      id: "closet",
      screenTitle: "내 옷장 화면",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=700",
      desc: "소장된 개별 의상의 원사 두께, 색도 비율을 저장하여, 집에 돌아온 후에도 가상의 촉감 반복 재생을 보장합니다."
    },
    {
      id: "store",
      screenTitle: "매장 모드 화면",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=700",
      desc: "매장 내 QR 스포팅이나 블루투스 센서 인지 시, 매장 쇼핑 맵과 최적화 배치 정보에 귀를 정렬시켜 에스코트합니다."
    }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00E5FF]/4 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#00D0EE]/5 blur-[100px] rounded-full -z-10" />

      {/* Intro Header */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-6 text-center space-y-6">
        <span className="text-[#00E5FF] font-mono text-[11px] font-bold tracking-[0.25em] uppercase block">INTERACTIVE SIMULATION</span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-[#222222] leading-tight">
          소리와 촉각의 흐름을 <br />
          <span className="font-extrabold text-[#00E5FF]">눈과 귀로 마주하다</span>
        </h1>
        <p className="text-gray-400 font-semibold max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          장벽 없는 신개념 접근성 모빌리티 경험을 웹 브라우저에서 생생히 체험할 수 있도록 준비된 다중 감각 대화형 공간입니다.
        </p>
      </section>

      {/* Section 1: Experience Demo (Senses Experiential Platform) */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider block">EXPERIENCE DEMO</span>
            <h2 className="text-3xl font-display font-black text-[#222222]">스마트 번역 체험존</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold leading-relaxed">
              아래 버튼을 눌러 소리 전사와 촉감 햅틱의 진동 리듬을 간접 시청 제어하십시오.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Interactive Audio Experience */}
            <div className="lg:col-span-6 p-8 bg-white border border-gray-150 rounded-[2.5rem] space-y-8 shadow-2xs">
              <div className="space-y-2 text-left">
                <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wider block uppercase">VOICE SYNTHESIS</span>
                <h3 className="text-lg font-bold text-gray-800">1단계 : 고감도 음성 피드백 체험</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  카메라가 실시간 분석한 패션 진단 결과의 음성 가사 조율 샘플입니다. 듣고 싶은 카드를 클릭해 소리를 확인해 보세요.
                </p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => triggerSimulatedAudio("카메라 분석 화면입니다.", "v1")}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 uppercase font-black">Camera Screen Info</span>
                    <div className="text-xs font-bold text-gray-750">"카메라 분석 화면입니다."</div>
                  </div>
                  <div className={`p-2 rounded-full ${isPlayingSound === 'v1' ? 'bg-[#00E5FF] text-gray-950 animate-pulse' : 'bg-gray-50 text-gray-400 group-hover:bg-[#00E5FF]/10 group-hover:text-[#00E5FF]'}`}>
                    <Volume2 size={14} />
                  </div>
                </button>

                <button 
                  onClick={() => triggerSimulatedAudio("차분한 분위기의 컬러입니다. 편안하고 정돈된 로얄 실키 느낌을 풍기고 있습니다.", "v2")}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 uppercase font-black">Tone & Color Feedback</span>
                    <div className="text-xs font-bold text-gray-750">"차분한 분위기의 컬러입니다."</div>
                  </div>
                  <div className={`p-2 rounded-full ${isPlayingSound === 'v2' ? 'bg-[#00E5FF] text-gray-950 animate-pulse' : 'bg-gray-50 text-gray-400 group-hover:bg-[#00E5FF]/10 group-hover:text-[#00E5FF]'}`}>
                    <Volume2 size={14} />
                  </div>
                </button>
              </div>
            </div>

            {/* Interactive Haptic Feedback Experience */}
            <div className="lg:col-span-6 p-8 bg-white border border-gray-150 rounded-[2.5rem] space-y-8 shadow-2xs">
              <div className="space-y-2 text-left">
                <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wider block uppercase">TACTILE SIMULATION</span>
                <h3 className="text-lg font-bold text-gray-800">2단계 : 다감도 햅틱 피드백 체험</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  손끝 햅틱 모터를 제어하는 파형의 원리입니다. 각 진동 모드를 마우스를 대거나 클릭하여 소리와 가상 맥박을 경험해 보세요.
                </p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => triggerHapticVibe('short')}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 uppercase font-black">Tap / Hover Confirm</span>
                    <div className="text-xs font-bold text-gray-750">짧은 진동 (0.06s) → 선택 상태 반영</div>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-xl ${activeHaptic === 'short' ? 'bg-[#00E5FF] text-gray-950' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                    {activeHaptic === 'short' ? '진동 중..' : '시물레이트'}
                  </span>
                </button>

                <button 
                  onClick={() => triggerHapticVibe('long')}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 uppercase font-black">Analysis Success</span>
                    <div className="text-xs font-bold text-gray-750">긴 진동 (0.50s) → 분석 수렴 및 완료 알림</div>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-xl ${activeHaptic === 'long' ? 'bg-[#00E5FF] text-gray-950' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                    {activeHaptic === 'long' ? '진동 중..' : '시물레이트'}
                  </span>
                </button>

                <button 
                  onClick={() => triggerHapticVibe('strong')}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-[#FF4D4D] uppercase font-black">Alert Danger</span>
                    <div className="text-xs font-bold text-[#FF4D4D]">강한 진동 (0.35s x 2) → 대칭 한계 이탈 및 경고</div>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-xl ${activeHaptic === 'strong' ? 'bg-[#FF4D4D] text-white' : 'bg-rose-50 text-rose-500 group-hover:bg-rose-100'}`}>
                    {activeHaptic === 'strong' ? '경고 중..' : '경고 울림'}
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Android / iOS Info banner */}
          <div className="max-w-4xl mx-auto p-6 bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-2xl flex items-start gap-4 text-left">
            <div className="p-2 bg-[#00E5FF]/10 text-[#00E5FF] rounded-xl flex-shrink-0">
              <Smartphone size={18} />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-800 uppercase tracking-widest">Platform Compatibility Notice</h4>
              <p className="text-[11px] font-semibold text-gray-400 leading-relaxed mt-1">
                현재 옷감 조직 데이터 및 미세 진동 파동 드라이버 제어 기술은 대안 탑재가 무결한 Android 모바일 폰 OS 환경에서 우선 구현 및 패키징 완료되었으며, 향후 고정대비 코어 기술 개방 일정에 맞춰 iOS 규격 영역까지 라이브러리 확장을 단행할 연대 로드맵을 구축하고 있습니다.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Actual Live interactable App Simulator portal inside this page! */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider block">REALTIME PLAYGROUND</span>
          <h2 className="text-3xl font-display font-light text-[#222222]">
            SYNK <span className="font-extrabold text-[#00E5FF]">대화형 프로토타입 시뮬레이터</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-semibold">
            의류 탭을 누르거나 음성 낭독 스위치를 구동해, 실제 모바일에서 작동하는 원리를 그대로 가상 체험하세요.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gray-50 border border-gray-150 p-6 md:p-8 shadow-inner relative overflow-hidden">
          <ServicePortal />
        </div>
      </section>

      {/* Section 2: App Preview (Showcase Grid with identical smartphone frames) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-sm font-mono font-bold text-[#00E5FF] uppercase tracking-wider block">INTERFACE TOUR</span>
            <h2 className="text-3xl font-display font-black text-[#222222]">앱 인터페이스 쇼케이스</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold max-w-lg mx-auto">
              완벽히 통일된 디자인 시스템과 최고급 ivory 핸드폰 모듈 속에 담아낸 6대 핵심 활용 시나리오 레이아웃 구조입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {appShowcaseScreens.map((sc, i) => (
              <motion.div
                key={sc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center"
              >
                {/* Unified Smartphone frame with custom shadows */}
                <div className="relative group w-full max-w-[280px]">
                  {/* Outer subtle shadow glow matching cyan theme styling */}
                  <div className="absolute -inset-3 bg-[#00E5FF]/4 rounded-[3.2rem] scale-98 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  
                  <div className="relative aspect-[9/18] rounded-[2.8rem] bg-white p-[10px] shadow-xl hover:shadow-2xl hover:border-[#00E5FF]/40 border border-gray-200/80 overflow-hidden iphone-bezel transition-all duration-500">
                    <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-gray-50 relative border border-gray-100 flex flex-col justify-end">
                      {/* Image representation for beautiful showcase and touch feedback feel */}
                      <img 
                        src={sc.image} 
                        className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                        alt={sc.screenTitle}
                        referrerPolicy="no-referrer"
                      />
                      {/* Frame shadow gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Bottom header inside physical layout screen */}
                      <div className="absolute bottom-6 left-0 right-0 px-4 text-white text-center pointer-events-none">
                        <span className="text-[8px] font-mono opacity-80 uppercase tracking-widest block mb-1">SYNK UI PATTERN</span>
                        <h4 className="text-xs font-black">{sc.screenTitle}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub Description */}
                <div className="text-center mt-6 px-4 space-y-2">
                  <h4 className="text-sm font-extrabold text-gray-800">{sc.screenTitle}</h4>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed tracking-tight max-w-[270px]">
                    {sc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

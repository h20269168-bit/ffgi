import { motion } from 'motion/react';
import { 
  Volume2, ShieldCheck, Maximize, Activity, Info, Eye, 
  Sparkles, Layers, Box, Tag, Mic, PhoneCall 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FeaturesPage() {
  const navigate = useNavigate();

  const accessibilityUXList = [
    { title: "고감도 음성 피드백", desc: "텍스트에만 갇히지 않고 옷감 무드, 입자 단무까지 설명하는 보조 인터페이스.", icon: <Volume2 size={20} /> },
    { title: "실시간 스크린 해설", desc: "사용자가 손끝으로 이동하는 컴포넌트나 카메라 감지 객체의 성질과 상세를 즉각 전사합니다.", icon: <Eye size={20} /> },
    { title: "포용적 터치 가이드", desc: "버튼 경계를 넘나들 때 짧은 햅틱과 텍스트 유도로 정확한 조작과 안전한 흐름을 지원합니다.", icon: <ShieldCheck size={20} /> },
    { title: "유니버설 대형 터치 영역", desc: "작고 답답한 포인트가 아닌, 시각장애 사용자의 손가락 타점이 빗나가지 않도록 충분히 키운 안전 구역.", icon: <Maximize size={20} /> },
    { title: "다중 감도 햅틱 피드백", desc: "원단의 성긴 형태나 입술 좌우 정렬을 입체적 주기 진동(0.2초 스티치 등)으로 전달합니다.", icon: <Activity size={20} /> },
    { title: "감각 설명 모드 스위치", desc: "언제든지 세세한 뉘앙스를 풀어서 듣거나 간략히 필수 제어만 골라 들을 수 있는 최적 맞춤 변환기.", icon: <Info size={20} /> }
  ];

  const coreFeaturesList = [
    {
      num: "01",
      title: "감각 번역 (Translation)",
      subtitle: "Multi-Sensory Streamer",
      desc: "시각 정보를 정밀한 전용 음성 문장과 손끝의 햅틱 패턴으로 번역해 가공 출력을 전달합니다.",
      icon: <Layers size={22} className="text-[#00E5FF]" />
    },
    {
      num: "02",
      title: "뷰티 분석 (Makeup Guide)",
      subtitle: "Balance Assistant",
      desc: "실시간 비전 컴퓨터 AI 기술로 립스틱 경계나 눈썹 산의 높낮이 불일치 점수 및 각도 가이드를 오디오로 분석합니다.",
      icon: <Sparkles size={22} className="text-[#00E5FF]" />
    },
    {
      num: "03",
      title: "내 옷장 (Virtual Closet)",
      subtitle: "My Personal Wardrobe",
      desc: "수거 및 분석 완료된 옷들을 어플 카테고리에 누적 소장하여 언제든지 혼자서 색과 조직도를 반복 청취 복기합니다.",
      icon: <Box size={22} className="text-[#00E5FF]" />
    },
    {
      num: "04",
      title: "매장 모드 (In-Store Reader)",
      subtitle: "Offline QR Link",
      desc: "오프라인 매장에서 부착된 QR이나 NFC 기반으로 옷감 정보를 휴대폰에 스트리밍합니다.",
      icon: <Tag size={22} className="text-[#00E5FF]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#00E5FF]/4 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-sky-100/15 blur-[100px] rounded-full -z-10" />

      {/* Main header block */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-6 text-center space-y-6">
        <span className="text-[#00E5FF] font-mono text-[11px] font-bold tracking-[0.25em] uppercase block">CORE SOLUTIONS</span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-[#222222] leading-tight">
          장벽을 완화하는 <br />
          <span className="font-extrabold text-[#00E5FF]">SYNK의 감각 기술 연구</span>
        </h1>
        <p className="text-gray-400 font-semibold max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          음성 부가 제공을 넘어서, 시각적인 한계를 본질적으로 배려하는 오디오 솔루션을 구축했습니다.
        </p>
      </section>

      {/* Section 1: Accessibility UX Concept and values */}
      <section className="py-24 bg-[#F7F7F7] border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Philosophy text content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">INTERFACE CORE PHILOSOPHY</span>
              <h2 className="text-3xl font-display font-light text-gray-800 leading-tight">
                "음성이 <span className="font-extrabold text-[#00E5FF]">추가된</span> 앱이 아닌, <br />
                음성이 <span className="font-extrabold text-[#00E5FF]">중심 인터페이스인</span> 서비스"
              </h2>
              <div className="h-1 w-20 bg-[#00E5FF]" />
              <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                SYNK는 소리와 진동을 중심으로 설계된 접근성 솔루션 앱입니다. 기획 초기 단계부터 소리와 진동 피드백을 핵심 기능으로 구축하여, 화면을 보지 않아도 직관적인 탐색과 조작이 가능하도록 설계되었습니다.
              </p>
            </div>

            {/* Accent Highlight cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accessibilityUXList.map((ux, i) => (
                <div key={i} className="p-6 bg-white border border-gray-150 rounded-2xl space-y-3 shadow-2xs hover:shadow-sm transition-all">
                  <div className="text-[#00E5FF] p-2.5 bg-[#00E5FF]/10 rounded-xl w-fit">
                    {ux.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 leading-tight mb-1">{ux.title}</h4>
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed leading-tighter">{ux.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Features list cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <span className="text-[#00E5FF] font-mono text-xs font-bold uppercase tracking-widest">SPECIFICATIONS</span>
          <h2 className="text-2xl sm:text-4xl font-display font-light text-gray-800">
            SYNK <span className="font-extrabold text-[#00E5FF]">4대 핵심 연동 기능</span>
          </h2>
          <p className="text-gray-400 text-xs font-semibold">동작 원리와 상세 설명을 정교하고 심플하게 요약합니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {coreFeaturesList.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-8 bg-white border border-gray-150 rounded-[2.5rem] flex flex-col justify-between h-80 shadow-2xs hover:shadow-lg hover:border-[#00E5FF]/40 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 font-display font-black text-6xl tracking-tighter text-gray-100 group-hover:text-[#00E5FF]/10 transition-colors">
                {feat.num}
              </div>
              <div className="space-y-4 text-left">
                <div className="p-3.5 bg-[#00E5FF]/10 text-[#00E5FF] rounded-2xl w-fit">
                  {feat.icon}
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono font-bold tracking-widest uppercase block mb-0.5">{feat.subtitle}</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-850 tracking-tight leading-tight">{feat.title}</h3>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold border-t border-gray-100 pt-4 mt-6 text-left">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Anchor link to preview */}
        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/preview')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#222222] hover:bg-[#00E5FF] text-white hover:text-[#222222] font-semibold text-xs rounded-2xl tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>가상 시뮬레이터로 기능 체험하기</span>
            <Sparkles size={13} className="group-hover:animate-spin" />
          </button>
        </div>
      </section>
    </div>
  );
}

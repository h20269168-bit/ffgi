import { motion } from 'motion/react';
import { Palette, Sparkles, Accessibility, EyeOff, ShieldAlert, ArrowDown, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  // Problem metrics / factors
  const visualBarriers = [
    { title: "이미지 중심 정보 나열", desc: "텍스트 해설이나 대체 오디오 피드백이 전무하여, 옷의 분위기나 메이크업을 파악할 수 없습니다." },
    { title: "조정 불가능한 작은 텍스트", desc: "고대비 또는 폰트 자유 확대 등의 보조 도구를 아예 지원하지 않는 배타적인 화면 설계." },
    { title: "색상 및 그래픽 기반 정보 전달", desc: "‘오렌지 코랄’, ‘샌드 베이지’ 등의 모호한 색도나 감도를 오직 사진 픽셀에만 의존해 구별하게 강제함." },
    { title: "시각 극대 인터페이스 구조", desc: "모든 인터랙션과 흐름이 일반 비장애인의 빠른 마우스 클릭이나 눈 움직임에만 특화되고 조율됨." }
  ];

  const fashionBeautyProblems = [
    { title: "제품 분위기 파악의 극단적 어려움", desc: "원단이 부드럽게 흐르는지, 혹은 빳빳하고 시원한 텍스처인지 손쓸 방도가 전혀 없습니다." },
    { title: "직관적이고 정밀한 색감 정보 부족", desc: "어울리는 조합이나 자신만의 립/어깨 핏 무드를 오디오로 들을 수 없어 독립적 쇼핑이 가로막힙니다." },
    { title: "메이크업 상태 확인 및 자립 불가", desc: "눈썹 산의 좌우 대칭이 미세하게 치우쳤는지 여부를 파악할 장비와 피드백이 전무합니다." },
    { title: "디지털 쇼핑 격차와 소외감 심화", desc: "평등하게 멋을 가꿀 기회를 잃고 접근성 전용 격리 앱에 의무적으로 의존해야 하는 정서적 피로감을 유발합니다." }
  ];

  const corePhilosophy = [
    { keyword: "감각 번역", label: "Sensory Translation", desc: "시각 정보를 햅틱과 음성 등 다중 감각으로 재탄생시켜 동등한 인식 성능을 보장받도록 합니다.", icon: <Palette size={18} /> },
    { keyword: "음성 안내", label: "Voice Navigation", desc: "음성은 단순 부가 효과가 아닌 메인 UX 레이어로서 화면 및 배치, 옷감의 상세 구성을 밀접 조율 전사합니다.", icon: <Sparkles size={18} /> },
    { keyword: "접근성 UX", label: "Accessible Interface", desc: "큰 터치 좌표 배치 및 음성 스위치 기능을 통해 자극과 피로를 대폭 낮추고 지체 없는 입력을 유도합니다.", icon: <Accessibility size={18} /> },
    { keyword: "독립적인 경험", label: "Independent Journey", desc: "누군가 골라주는 스타일이 아닌, 온전히 자신의 마음이 이끄는 질감과 스타일을 찾을 권리를 실현합니다.", icon: <UserCheck size={18} /> },
    { keyword: "자기표현 경험", label: "Self Expression", desc: "모든 사람에게는 자기 정체성을 가꾸고 패션을 영유하여 사회적 소속감과 자신감을 완성할 동등한 권리가 있음을 지지합니다.", icon: <UserCheck size={18} /> }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Intro Header */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-6 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-display font-light text-[#222222] leading-tight"
        >
          모든 사람이 아름다움을 경험할 수 있도록, <br />
          <span className="font-extrabold text-[#00E5FF]">SYNK가 새로운 가능성을 엽니다.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 font-semibold max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          시각 정보의 한계를 넘어 누구나 자신만의 스타일을 경험할 수 있도록 돕는 접근성 기술입니다.
        </motion.p>
      </section>

      {/* Section 1: Problem Situation */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100 animate-pulse">
                <ShieldAlert size={13} />
                <span>문제 제기 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-800 tracking-tight leading-snug">
                보는 것 만을 전제로 하는 <br />
                모바일 쇼핑 환경
              </h2>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                현재 전 세계 온라인 플랫폼의 95% 이상은 음성 대체 텍스트가 생략되어 있거나 이미지 중심의 설계 방식에만 온전히 구속되어 있습니다. 저시력 및 시각장애인 분들에게는 정보 접근성 자체가 또 다른 소외와 부조리로 남습니다.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visualBarriers.map((bar, i) => (
                <div key={i} className="p-6 bg-white border border-gray-150 rounded-2xl space-y-2 hover:border-[#00E5FF]/30 transition-all">
                  <div className="text-xs font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-[#00E5FF] font-mono">0{i+1}.</span>
                    {bar.title}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">{bar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Fashion & Beauty Barriers */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 lg:order-last">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100 animate-pulse">
              <ShieldAlert size={13} />
              <span>문제 제기 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-800 tracking-tight leading-snug">
              패션과 뷰티영역 : <br />
              자기표현 권리의 전면적 배제
            </h2>
            <p className="text-xs text-gray-500 font-semibold leading-relaxed">
              패션과 뷰티는 단순한 소비 행위에서 나아가 세상에 자신을 보여주는 당당한 정체성 확립 아이템입니다. 하지만 대부분의 정보가 시각에 매몰되어 있어 이들이 취향을 직접 기르고 독립적으로 자신을 연출할 수 있는 자유와 주도권이 거의 차단됩니다.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fashionBeautyProblems.map((prob, i) => (
              <div key={i} className="p-6 bg-gray-50 border border-gray-150 rounded-2xl space-y-2 hover:bg-white hover:border-[#00E5FF]/30 transition-all">
                <div className="text-xs font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  {prob.title}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Transition indicator arrow */}
      <div className="flex items-center justify-center py-6 text-gray-300">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={28} />
        </motion.div>
      </div>

      {/* Section 3: SYNK Solutions & Core philosophy */}
      <section className="py-24 bg-gradient-to-tr from-gray-50 via-white to-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[#00E5FF] font-mono text-xs font-bold uppercase tracking-widest">THE SYNK RESOLUTION</span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-[#222222]">
              장벽 없는 포용 사회를 구축할 <br />
              <span className="font-extrabold text-[#00E5FF]">5대 핵심 인클루시브 솔루션</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold leading-relaxed max-w-xl mx-auto">
              우리는 편견 없는 감각 번역 기술을 통해 고립되었던 시각장애 사용자와 장벽이 가득하던 기능들을 하나로 연결하여 아름다움의 평등함을 기획합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {corePhilosophy.map((phil, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white border border-gray-150 rounded-[2rem] flex flex-col justify-between items-start text-left h-72 shadow-2xs hover:shadow-md hover:border-[#00E5FF]/40 transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-gray-50 group-hover:bg-[#00E5FF]/10 text-gray-400 group-hover:text-[#00E5FF] rounded-xl flex items-center justify-center border border-gray-100 transition-colors">
                    {phil.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-mono font-bold uppercase block">{phil.label}</span>
                    <h4 className="text-sm font-black text-gray-800 font-display">{phil.keyword}</h4>
                  </div>
                </div>
                <p className="text-[11px] text-gray-450 font-semibold leading-relaxed border-t border-gray-50 pt-3 mt-4">
                  {phil.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Actions */}
          <div className="pt-6">
            <button
              onClick={() => navigate('/features')}
              className="px-8 py-4 bg-[#222222] text-white hover:bg-[#00E5FF] hover:text-[#222222] font-semibold text-xs rounded-2xl shadow-lg shadow-gray-100 uppercase tracking-widest transition-all cursor-pointer"
            >
              상세 핵심 기능 살펴보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

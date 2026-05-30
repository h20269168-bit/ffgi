import { motion } from 'motion/react';
import { 
  CheckCircle, ShieldCheck, Heart, Sparkles, Building, 
  ArrowRight, Landmark, Layers, Briefcase, HelpCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VisionPage() {
  const navigate = useNavigate();

  const businessPlusses = [
    {
      category: "기업 / 환경 관점의 장점 (Enterprise Value)",
      items: [
        { title: "진정성 있는 소셜 ESG 가치 실현", desc: "단순 보조금을 넘어, 시각 편향 일류 쇼핑 프로세스를 보완함으로써 포용 혁신 브랜딩을 강화합니다." },
        { title: "소수 주권 접근성 장벽 완전 해소", desc: "다변화되는 웹 접근성 법률 제어 개방 규격에 한 발 앞서 대응해, 유니버설 표준 가이드라인을 선도합니다." },
        { title: "기업 이미지 및 충성도 극대 개선", desc: "배리어프리가 세심하게 녹아든 상호신뢰 플랫폼으로서, 진정성과 고객 감동 유도로 장기 유대를 육성합니다." }
      ]
    },
    {
      category: "사용자 / 가치 관점의 장점 (User Value)",
      items: [
        { title: "완벽히 독립적인 쇼핑 주권 소유", desc: "누군가 대신 골라 주거나 읽어 주지 않고, 스스로 소재를 질감으로 느껴 장만하는 독립적 자기 결정권을 행사합니다." },
        { title: "균일하고 신뢰도 높은 정보 접근성", desc: "텍스트와 데이터가 귀로 흐르고 스마트 모듈이 진동으로 동조하여 쇼핑 신뢰와 인지 격차를 줄입니다." },
        { title: "자기 독립과 완벽한 개성 표현 자유", desc: "의복의 색, 스타일, 미세 입꼬리 정렬을 탐구하고 조합하여 온전하게 멋의 주체로 도약할 수 있습니다." }
      ]
    }
  ];

  const futureMilestones = [
    { title: "메이크업 밸런스 가이드 고도화", desc: "실시간 대칭 점수 추적 각도를 더 늘리고, 미세 음색 변화율로 뷰티 팁을 음 전사합니다." },
    { title: "극세 물리 햅틱 오토 파일럿", desc: "원단 촉감 해상도를 35%에서 조밀한 2D 핀 구조 햅틱으로 전송해 옷감 주름 굴곡을 구현합니다." },
    { title: "독립 브랜드 접근성 API 개방", desc: "무신사, ZARA 등 기존 쇼핑몰 데이터와 햅틱 스크립트를 연결할 전용 SDK 키트 인터페이스 개발." },
    { title: "iOS 전용 CoreHaptics 신속 보완", desc: "Android 우선 패키징에 추가해, iOS 햅틱 엔진의 강도 및 밀도 호스트 전송 포트 호환을 마칩니다." },
    { title: "인클루시브 웨어러블 디바이스 융합", desc: "모바일 카메라 연동 안경 및 손끝 스마트 유니버설 햅틱 수신 폼 팩터를 제작 적용합니다." },
    { title: "체형 밀착 핏 체크 어시스턴트", desc: "실루엣의 들뜸 여부, 단추와 칼라 라인의 비대칭 수직 정렬을 감지하여 오디오로 정밀 요약 제공." }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Absolute shapes shadow decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/4 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-[-10%] w-[450px] h-[450px] bg-sky-100/20 blur-[110px] rounded-full -z-10" />

      {/* Intro Header */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-6 text-center space-y-6">
        <span className="text-[#00E5FF] font-mono text-[11px] font-bold tracking-[0.25em] uppercase block">THE ULTIMATE VISION</span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-[#222222] leading-tight">
          장벽이 없는 상태, <br />
          <span className="font-extrabold text-[#00E5FF]">모두가 평등한 아름다움을 위하여</span>
        </h1>
        <p className="text-gray-400 font-semibold max-w-lg mx-auto text-sm leading-relaxed">
          SYNK가 추구하는 궁극의 포용 가치와 다양한 글로벌 패션 커뮤니티와의 확장 로드맵을 선언합니다.
        </p>
      </section>

      {/* Section 1: Universal Design Core Principle Banner */}
      <section className="py-20 bg-gray-50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mx-auto shadow-2xs">
              <ShieldCheck size={28} />
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00E5FF] uppercase block">UNIVERSAL EXPERIENCE PRINCIPLE</span>
              <p className="text-xl sm:text-3xl font-display font-light text-gray-800 leading-snug tracking-tight px-4">
                "SYNK는 특정 사용자를 분리하기보다 <br className="hidden sm:block" />
                <span className="font-black text-gray-900 border-b-2 border-[#00E5FF]/40 pb-1">누구나 함께 사용할 수 있는 접근성 경험</span>을 지향합니다."
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-semibold max-w-2xl mx-auto leading-relaxed">
              장벽을 낮춘 유니버설 디자인은 특정 고립 소수만을 위한 외딴 보좌 장비가 아닙니다. 모든 사용자층이 더 직관적이고 편안하게 의사소통할 수 있도록 하는 최적의 인터페이스 구조이며, 온라인의 불확실한 질감을 해결할 수 있는 미래 표준 가치입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Business Expansion Brands Collaborations */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#00E5FF] font-mono text-xs font-bold uppercase tracking-widest">BUSINESS PARTNERSHIPS</span>
          <h2 className="text-2xl sm:text-4xl font-display font-light text-[#222222]">
            주요 협업 가능 입점 지향 브랜드
          </h2>
          <p className="text-gray-400 text-xs font-semibold leading-relaxed">
            국내외 대표적인 뷰티 및 패션 선두 브랜드 생태계와 연계 통합하여 인클루시브 시너지를 꾀하고 있습니다.
          </p>
        </div>

        {/* Brand Logos mock tags */}
        <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
          {[
            { name: "ZARA", slogan: "글로벌 패션 트렌드 접근성 리더" },
            { name: "올리브영", slogan: "동등한 퍼스널 라이프 뷰티 웰니스" },
            { name: "무신사", slogan: "스타일 다양성을 지지하는 하이엔드 테크룸" }
          ].map((br, i) => (
            <div key={i} className="p-6 bg-white border border-gray-150 rounded-[2rem] text-center w-full sm:w-64 shadow-2xs hover:border-[#00E5FF]/40 transition-colors">
              <div className="font-display font-black text-2xl text-gray-800 tracking-tighter mb-1 select-none">
                {br.name}
              </div>
              <div className="text-[10px] text-[#00E5FF] font-bold uppercase tracking-wider">{br.slogan}</div>
            </div>
          ))}
        </div>

        {/* Matrix of Corporate vs User perspective benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-8">
          {businessPlusses.map((cat, i) => (
            <div key={i} className="bg-gray-50 border border-gray-150 p-8 sm:p-10 rounded-[2.5rem] space-y-6">
              <h3 className="text-sm font-bold text-[#222222] flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                {cat.category}
              </h3>
              
              <div className="space-y-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl text-left space-y-1 hover:border-[#00E5FF]/30 transition-colors">
                    <h4 className="text-xs font-black text-gray-800 tracking-tight flex items-center gap-1.5">
                      <span className="text-[10.5px] font-mono text-[#00E5FF]">0{i*3 + idx+1}.</span>
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Future Roadmap timeline style */}
      <section className="py-24 bg-gradient-to-tr from-gray-50 via-white to-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[#00E5FF] font-mono text-xs font-bold uppercase tracking-widest">ROADMAP</span>
            <h2 className="text-2xl sm:text-4xl font-display font-light text-gray-800">
              향후 <span className="font-extrabold text-[#00E5FF]">가치 확장 개발 방향</span>
            </h2>
            <p className="text-gray-400 text-xs font-semibold">
              우리는 한순간의 데모 프로젝트로 멈추지 않고, 정밀하고 실제적인 배리어프리 실증 인프라 완성을 향해 행진합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {futureMilestones.map((ms, i) => (
              <div key={i} className="p-8 bg-white border border-gray-150 rounded-[2rem] flex flex-col justify-between h-56 hover:border-[#00E5FF]/40 hover:shadow-xs transition-colors">
                <div className="space-y-3">
                  <div className="text-[11px] text-[#00E5FF] font-mono font-bold tracking-widest uppercase">STAGE 0{i+1}.</div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 leading-tight">{ms.title}</h4>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-semibold border-t border-gray-50 pt-3">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={() => navigate('/team')}
              className="px-8 py-4 bg-[#222222] hover:bg-[#00E5FF] hover:text-[#222222] text-white font-semibold text-xs rounded-2xl tracking-wider transition-colors scroll-smooth cursor-pointer shadow-md"
            >
              함께 기획 설립한 SYNK 제작팀 만나보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

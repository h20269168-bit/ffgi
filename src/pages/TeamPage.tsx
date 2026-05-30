import { motion } from 'motion/react';
import { Landmark, Users, GraduationCap, Calendar, Mail, Compass, HelpCircle } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    { name: "김주연", role: "UX/UI Visual Artisan", desc: "사용자 중심 인클루시브 디자인 시스템과 메인 뷰티 가시도 가이드를 전면 설계했습니다." },
    { name: "박채빈", role: "Sound Narrative Creator", desc: "시각 대체용 음성 낭독 대본의 입체적 해설 언어 정립 및 시청각 시나리오를 구성 기획했습니다." },
    { name: "서상욱", role: "HCI Interface Engineer", desc: "이중 파동 햅틱 주파수 드라이브 시스템의 전달 연동 메커니즘과 시뮬레이터 로직을 아키텍처링했습니다." },
    { name: "이가원", role: "Spatial Design Scenographer", desc: "오프라인 매장 리더 모듈 분석 동선 가이드맵 설계와 제휴 거치대 디자인 기획을 담당했습니다." },
    { name: "이예진", role: "Sociology & Policy Researcher", desc: "장벽 소외 타당성 분석, 배리어프리 실증 소셜 임팩트 분석 및 정책 기준 조화를 분석 연구했습니다." },
    { name: "임채하", role: "Interaction Interface Designer", desc: "정밀 립스틱 대칭 기준 척도 정의와 뷰티 보정 음성 전사 가이드 프로세스를 직관적으로 조율했습니다." },
    { name: "장수빈", role: "Branding & Academic Coordinator", desc: "디지털인문예술 학술 성과 아카이빙, 소셜 홍보 가설 검증 세부 및 시연 협업 조율을 성공적으로 이끌었습니다." }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00E5FF]/4 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-[#00E5FF]/3 blur-[110px] rounded-full -z-10" />

      {/* Intro Header */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-6 text-center space-y-6">
        <span className="text-[#00E5FF] font-mono text-[11px] font-bold tracking-[0.25em] uppercase block">INCLUSIVE CREATIVE TEAM</span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-[#222222] leading-tight">
          인정을 가꾸는 <br />
          <span className="font-extrabold text-[#00E5FF]">Team SYNK를 소개합니다</span>
        </h1>
        <p className="text-gray-400 font-semibold max-w-lg mx-auto text-sm leading-relaxed">
          장벽 없는 세상을 희망하며 학술 연구와 햅틱 인터페이스 완성을 함께 기획한 연대 팀원들입니다.
        </p>
      </section>

      {/* Sponsoring Academic Project Info Box */}
      <section className="py-12 bg-gray-50 border-y border-gray-150">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 bg-white border border-gray-150 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#00E5FF]/10 text-[#00E5FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest font-black block uppercase">COURSE INFORMATION</span>
                <h4 className="text-base font-extrabold text-[#222222] leading-tight mt-0.5">디지털인문예술입문</h4>
                <p className="text-[11px] text-gray-400 font-semibold leading-relaxed mt-1">
                  기술과 고유 인문 가치의 포용적 결합을 통해 따뜻한 현대 소셜 임팩트를 발굴하는 정규 하이파이 필드 트랙입니다.
                </p>
              </div>
            </div>

            <div className="flex md:flex-col items-start gap-3 flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                <Calendar size={14} className="text-[#00E5FF]" />
                <span>2026학년도 1학기 최종 발표</span>
              </div>
              <div className="flex items-center gap-2 text-[10.5px] text-gray-400 font-semibold">
                <Compass size={14} className="text-gray-300" />
                <span>장벽 없는 배리어프리 프로젝트</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of 7 team members cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-widest">TEAM DIRECTORY</span>
          <h2 className="text-2xl sm:text-4xl font-display font-light text-gray-800">
            소외 없는 <span className="font-extrabold text-[#00E5FF]">도전과 연대의 주체들</span>
          </h2>
          <p className="text-gray-400 text-xs font-semibold">
            개인의 개성과 학술 전문 역할 카드입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="p-6 bg-white border border-gray-150 rounded-[2rem] flex flex-col justify-between h-72 shadow-2xs hover:shadow-md hover:border-[#00E5FF]/40 transition-all group"
            >
              <div className="space-y-4">
                {/* Simulated profile avatar letters */}
                <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-[#00E5FF]/10 text-gray-800 group-hover:text-[#00E5FF] font-display font-extrabold text-lg flex items-center justify-center border border-gray-100 transition-colors">
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-gray-300 group-hover:text-[#00E5FF] transition-colors uppercase">SYNK TEAM</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-black text-gray-800">{member.name}</h3>
                  <span className="text-[10px] text-[#00E5FF] font-mono font-black uppercase tracking-wider block">{member.role}</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-semibold leading-relaxed pt-4 border-t border-gray-50 mt-4">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

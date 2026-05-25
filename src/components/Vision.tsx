import { motion } from 'motion/react';
import { Lightbulb, RefreshCw, Users, ShieldCheck } from 'lucide-react';

export default function Vision() {
  const stats = [
    {
      num: "100%",
      label: "독립적 스타일링 및 구매",
      desc: "타인의 원조 없이 원단의 재질 촉감과 색도를 혼자 완벽히 판단하여 수거 소장하고 어시스턴스를 누릴 수 있습니다."
    },
    {
      num: "04대",
      label: "메이저 제휴 브랜드 채널",
      desc: "ZARA, 올리브영, 무신사 매장 등 주요 뷰티/패션 플래그십 인프라에서 즉시 QR 호동 제어가 연동되도록 생태계를 꾸립니다."
    },
    {
      num: "0.2초",
      label: "감각 번역 피드백",
      desc: "실시간 비전 컴퓨터 AI 리딩을 통해 촉각 신호와 스피치 텍스트를 기가 속도로 스트리밍 전송하여 이질감을 최소화합니다."
    }
  ];

  return (
    <section id="vision" className="py-28 lg:py-36 bg-[#F7F7F7] overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Description column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="text-[#00E5FF] font-display font-extrabold tracking-[0.25em] uppercase text-xs">
              THE VISION & IMPACT
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-light leading-tight tracking-tight text-[#222222]">
              기대 효과 : <br />
              <span className="font-extrabold text-[#00E5FF]">장벽이 없다는 것은 모두가 평등하다는 뜻입니다.</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-semibold">
              SYNK는 소수 사용자를 소외시키는 특화 모드보다, 일반 사용자군도 함께 재미와 편의를 누릴 수 있는 유니버설 융합 디자인을 지향합니다. 정밀한 질감 전달 기술은 온라인 환경의 쇼핑 신뢰도를 동시에 높이는 시너지 효과를 창출합니다.
            </p>

            <div className="space-y-6 pt-2">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#00E5FF] border border-gray-150 shadow-xs flex-shrink-0">
                     <RefreshCw size={18} />
                   </div>
                   <div>
                      <h4 className="text-base font-bold text-gray-800">지속가능한 온/오프라인 확장성</h4>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed font-semibold">모바일 카메라 및 스마트 촉각 패널을 통한 소형 융합 디바이스 범용성 확보</p>
                   </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#00E5FF] border border-gray-150 shadow-xs flex-shrink-0">
                     <Users size={18} />
                   </div>
                   <div>
                      <h4 className="text-base font-bold text-gray-800">모두를 위한 소통과 가치 통합</h4>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed font-semibold">비장애 사촌이나 친구들과도 하나의 쇼핑 공간에서 가볍고 동급으로 팁 공유</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Data numbers infographic block */}
          <div className="lg:col-span-6 space-y-6">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.8 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-6 lg:p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl lg:text-5xl font-display font-black text-[#00E5FF] tracking-tighter leading-none mt-1">
                  {s.num}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-base font-bold text-gray-800 tracking-tight">{s.label}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Dynamic decorative conclusion line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 lg:p-12 bg-white border border-gray-150 rounded-[2.5rem] text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mx-auto mb-6">
             <Lightbulb size={24} className="text-[#00E5FF]" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">"가장 정교한 인터페이스가 가장 포용적인 환경을 그립니다."</h3>
          <p className="text-gray-400 text-xs font-semibold leading-relaxed">
             대학교 연합 사회가치 실현 소셜 이니셔티브 SYNK 프로젝트팀이 포용성 향상과 장벽 없는 패션 접근성 생태계를 향해 함께 나아갑니다.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

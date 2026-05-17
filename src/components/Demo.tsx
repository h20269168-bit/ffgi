import { motion } from 'motion/react';
import { Volume2, Radio, Smartphone, Share2 } from 'lucide-react';

export default function Demo() {
  const hapticBehaviors = [
    { type: "짧은 진동", desc: "선택 및 확인 상태", icon: <Radio className="text-synk-electric" /> },
    { type: "긴 진동", desc: "분석 완료 및 정보 로드", icon: <Radio className="text-synk-electric animate-pulse" /> },
    { type: "강한 진동", desc: "경고 또는 오류 상태", icon: <Radio className="text-red-500" /> },
  ];

  return (
    <section id="demo" className="py-32 lg:py-56 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Voice Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Experience: Voice</div>
              <h3 className="text-3xl lg:text-5xl font-display font-bold leading-tight mb-8 text-synk-dark">
                당신의 질문에 <br />
                데이터로 대답합니다.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                버튼 하나하나의 역할부터 분석 결과의 세세한 수치까지, <br />
                SYNK의 보이스 인터페이스를 미리 경험해보세요.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "카메라 분석 화면입니다.",
                "차분한 분위기의 딥블루 컬러입니다.",
                "소재는 얇고 신축성이 좋은 원형 본딩 웨이브입니다."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-black/[0.03] group hover:border-synk-electric/20 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-synk-electric shadow-sm transition-colors">
                     <Volume2 size={20} />
                  </div>
                  <span className="text-sm font-bold text-synk-dark">“{text}”</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Haptic Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 lg:p-16 bg-synk-dark rounded-[3rem] text-white overflow-hidden relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-synk-electric/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <div className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Experience: Haptic</div>
                <h3 className="text-3xl font-display font-bold mb-6">손끝의 피드백.</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  현재 Android 환경에서 우선 구현되었으며, <br />
                  향후 iOS 환경까지 확장 예정인 SYNK의 햅틱 시스템입니다.
                </p>
              </div>

              <div className="space-y-6">
                 {hapticBehaviors.map((h, i) => (
                   <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                         {h.icon}
                      </div>
                      <div>
                         <div className="text-sm font-bold">{h.type}</div>
                         <div className="text-xs text-slate-500 font-medium">{h.desc}</div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-slate-500">
                 <Smartphone size={14} />
                 <span>Optimized for Android</span>
                 <Share2 size={14} className="ml-4" />
                 <span>iOS Expansion Roadmap</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

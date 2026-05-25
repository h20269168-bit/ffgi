import { motion } from 'motion/react';
import { Plus, Zap, Heart, TrendingUp, Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function BusinessExpansion() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1200);
  };

  const businessValues = [
    { label: "실질적 정보 접근성 확대", icon: <Zap size={16} /> },
    { label: "ESG 소셜 임팩트 가치 실현", icon: <Heart size={16} /> },
    { label: "포용적인 유니버설 디자인", icon: <Plus size={16} /> },
    { label: "새로운 감각 햅틱 UX 연구", icon: <TrendingUp size={16} /> },
  ];

  const roadmapItems = [
    "보이스 내레이션 다국어(영어, 일어) 지원 고도화",
    "iOS CoreHaptics 및 점자 스티치 드라이버 호환성 개발",
    "오프라인 스마트 거치형 AI 태그 마키 설치 매장 확대",
    "개선된 밀도 센서 탑재 가죽/세라믹 재질 분류 기능 스펙업",
    "대학생 동반 사용자 필드 패널 접근성 지속 임상 분석"
  ];

  return (
    <section id="contact" className="py-28 lg:py-36 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Vision & Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-6">
              <div className="text-[#00E5FF] font-display font-extrabold tracking-[0.25em] uppercase text-xs">
                COLLABORATION & FUTURE
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-light leading-tight tracking-tight text-[#222222]">
                모두의 더 나은 내일을 위해 <br />
                <span className="font-extrabold text-[#00E5FF]">새로운 접근성 표준을 만듭니다.</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-semibold">
                ZARA, 올리브영, 무신사 소장처와의 연대를 시작으로, 누구나 동등하게 의류의 질감을 손끝으로 대면하는 인클루시브 생태계를 구축해 나갈 소셜 벤처 및 학술 연구 협업을 제안합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {businessValues.map((v, i) => (
                 <div key={i} className="p-5 bg-white border border-gray-150 rounded-2xl flex items-center gap-3.5 text-gray-700 font-bold text-xs shadow-xs transition duration-300 hover:border-[#00E5FF]/40 hover:shadow-md">
                    <div className="text-[#00E5FF]">{v.icon}</div>
                     <span>{v.label}</span>
                  </div>
                ))}
            </div>

            {/* University Pitch Roadmap Box */}
            <div className="p-8 bg-white border border-gray-150 rounded-[2rem] shadow-sm">
               <h4 className="text-base font-bold mb-6 text-gray-800">Future Milestone</h4>
               <ul className="space-y-4">
                  {roadmapItems.map((item, i) => (
                     <li key={i} className="flex items-center gap-4 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#00E5FF] transition-colors flex-shrink-0" />
                        <span className="text-xs text-gray-400 font-semibold group-hover:text-gray-700 transition-colors">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-gray-150 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-black mb-6 text-gray-800 flex items-center gap-1">
                Let's SYNK<span className="text-[#00E5FF]">.</span>
              </h3>
              <p className="text-xs text-gray-400 font-semibold mb-8">
                 의견, 제휴 혹은 학술 연구 공동 연대 등 대학생 팀에게 전할 따뜻한 한마디나 협력 제안을 기다립니다.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">소속 단체 및 성명</label>
                  <input 
                    required
                    placeholder="단체명 또는 소속 부서 기재"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#00E5FF] transition-colors text-xs text-gray-750 font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">답신 받으실 이메일</label>
                  <input 
                    required
                    type="email"
                    placeholder="your-email@study.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#00E5FF] transition-colors text-xs text-gray-750 font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">제안 및 질문 내용</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="메시지 또는 응원글을 아낌없이 남겨주세요."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#00E5FF] transition-colors text-xs text-gray-750 font-semibold resize-none"
                  />
                </div>
                
                <button 
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all text-xs uppercase tracking-wider mt-4 shadow-md ${
                    formStatus === 'sent' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-[#00E5FF] hover:bg-[#00D0EE] text-gray-950 hover:scale-[1.01] active:scale-95'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>프로포절 보내기</span>
                      <Send size={14} />
                    </>
                  )}
                  {formStatus === 'sending' && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === 'sent' && (
                    <>
                      <span>접수 완료</span>
                      <CheckCircle2 size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

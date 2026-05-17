import { motion } from 'motion/react';
import { Building2, Plus, Zap, Heart, TrendingUp, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function BusinessExpansion() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const businessValues = [
    { label: "접근성 확대", icon: <Zap size={16} /> },
    { label: "ESG 가치 실현", icon: <Heart size={16} /> },
    { label: "브랜드 이미지 개선", icon: <Plus size={16} /> },
    { label: "새로운 UX 제공", icon: <TrendingUp size={16} /> },
  ];

  const roadmapItems = [
    "메이크업 가이드 고도화",
    "iOS 햅틱 연동 확장",
    "브랜드 별 맞춤 분석 API",
    "정밀 핏 체크 가이드",
    "스마트 디바이스(Glass 등) 연동"
  ];

  return (
    <section id="contact" className="py-32 lg:py-56 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left Column: Business & Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-16"
          >
            <div className="space-y-8">
              <div className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8">Business & Future</div>
              <h2 className="text-4xl lg:text-6xl font-display font-light leading-tight tracking-tight text-synk-dark">
                접근성 기반 쇼핑의 <br />
                <span className="font-extrabold text-synk-electric">새로운 표준을 제안합니다.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                ZARA, 무신사, 올리브영 등 글로벌 패션·뷰티 브랜드와 협업하여 <br className="hidden md:block" />
                모두를 위한 쇼핑 경험을 확장하고자 합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {businessValues.map((v, i) => (
                 <div key={i} className="p-6 bg-white border border-black/[0.03] rounded-3xl flex items-center gap-4 text-synk-dark font-bold text-sm shadow-sm transition-transform hover:scale-[1.02]">
                    <div className="text-synk-electric">{v.icon}</div>
                    {v.label}
                 </div>
               ))}
            </div>

            <div className="p-12 bg-white border border-black/[0.03] rounded-[3rem] shadow-sm">
               <h4 className="text-xl font-bold mb-8 text-synk-dark">Future Roadmap</h4>
               <ul className="space-y-6">
                  {roadmapItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-6 group">
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-synk-electric transition-colors" />
                       <span className="text-slate-500 font-medium group-hover:text-synk-dark transition-colors">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass-card-premium p-10 lg:p-14 border-black/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-10 text-synk-dark">Let's SYNK.</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Brand / Company</label>
                  <input 
                    required
                    placeholder="Enter your brand"
                    className="w-full px-0 py-4 bg-transparent border-b border-black/[0.08] focus:outline-none focus:border-synk-electric transition-colors text-lg text-synk-dark"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Contact Email</label>
                  <input 
                    required
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-0 py-4 bg-transparent border-b border-black/[0.08] focus:outline-none focus:border-synk-electric transition-colors text-lg text-synk-dark"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Inquiry</label>
                  <textarea 
                    required
                    rows={1}
                    placeholder="Tell us your vision"
                    className="w-full px-0 py-4 bg-transparent border-b border-black/[0.08] focus:outline-none focus:border-synk-electric transition-colors text-lg text-synk-dark resize-none"
                  />
                </div>
                
                <button 
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-6 rounded-full font-bold flex items-center justify-center gap-3 transition-all glow-on-hover mt-10 shadow-xl shadow-synk-electric/10 ${
                    formStatus === 'sent' ? 'bg-green-600' : 'bg-synk-electric hover:bg-blue-600 active:scale-95 text-white'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      Submit Proposal
                      <Send size={18} />
                    </>
                  )}
                  {formStatus === 'sending' && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {formStatus === 'sent' && (
                    <>
                      Thank You
                      <CheckCircle2 size={18} />
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

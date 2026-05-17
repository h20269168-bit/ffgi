import { motion } from 'motion/react';
import { MousePointer2, Type, Palette, Layout } from 'lucide-react';

export default function About() {
  const painPoints = [
    { icon: <Palette />, label: "이미지 중심 정보" },
    { icon: <Type />, label: "작은 텍스트" },
    { icon: <Palette />, label: "색상 기반 정보 전달" },
    { icon: <Layout />, label: "시각적인 버튼 구조" },
  ];

  return (
    <section id="about" className="py-32 lg:py-48 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Section 2: Before */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 mb-24"
          >
            <div className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8">The Status Quo</div>
            <h2 className="text-4xl lg:text-6xl font-display font-light leading-tight mb-12 tracking-tight text-synk-dark">
              대부분의 서비스는 <br />
              <span className="font-extrabold">‘보는 것’을 기준으로</span> 설계됩니다.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {painPoints.map((p, i) => (
                <div key={i} className="p-8 bg-white border border-black/[0.03] rounded-3xl flex flex-col items-center gap-4 text-center group hover:border-synk-electric/20 transition-colors">
                  <div className="text-slate-300 group-hover:text-synk-electric transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-sm font-bold text-synk-dark leading-tight">{p.label}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-lg lg:text-2xl font-medium leading-relaxed max-w-4xl">
              시각장애인과 저시력 사용자는 일상 속 다양한 정보에 접근하기 어렵습니다. <br className="hidden md:block" />
              특히 패션·뷰티 영역에서는 물리적 접근성을 넘어 ‘자기표현’의 기회조차 제한되곤 합니다.
            </p>
          </motion.div>

          {/* Section 3: Fashion & Beauty Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 p-12 lg:p-24 bg-synk-dark rounded-[3rem] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-synk-electric/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl lg:text-5xl font-display font-bold leading-tight mb-8">
                  패션과 뷰티는 단순 소비가 아니라, <br />
                  <span className="text-synk-electric">자신의 정체성을 표현하는</span> 경험입니다.
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  하지만 현재 대부분의 서비스는 시각 정보에만 의존하고 있어, <br />
                  누군가에게는 이 소중한 자기표현의 과정이 <br />
                  넘기 힘든 벽이 되기도 합니다.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  "제품의 미세한 분위기 파악의 어려움",
                  "소재의 질감과 정확한 색감 정보 부족",
                  "메이크업 상태를 독립적으로 확인하기 힘든 구조",
                  "온라인 쇼핑 플랫폼의 접근성 제한"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-synk-electric font-mono font-bold">0{i+1}</span>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

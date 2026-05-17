import { motion } from 'motion/react';

export default function AppPreview() {
  const previews = [
    {
      title: "Analysis Results",
      label: "분석 결과 화면",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000",
      desc: "소재의 밀도, 탄성, 컬러를 정밀하게 시각화하여 제공합니다."
    },
    {
      title: "Camera View",
      label: "실시간 분석 화면",
      image: "https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=1000",
      desc: "카메라가 비추는 대상을 AI가 실시간으로 번역하여 안내합니다."
    },
    {
      title: "Voice UX",
      label: "음성 중심 인터페이스",
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1000",
      desc: "모든 기능이 음성 피드백을 기반으로 설계되어 있습니다."
    }
  ];

  return (
    <section id="preview" className="py-32 lg:py-56 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8"
          >
            Showcase
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-display font-light leading-tight tracking-tight text-synk-dark">
            App <span className="font-extrabold">Preview.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {previews.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-8"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-synk-electric/5 rounded-[4rem] scale-95 group-hover:scale-100 transition-transform blur-2xl opacity-0 group-hover:opacity-100 duration-700" />
                <div className="relative aspect-[9/19] rounded-[3.5rem] bg-white p-3 shadow-2xl border border-black/5 overflow-hidden">
                   <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-slate-100 relative">
                     <img 
                        src={p.image} 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        alt={p.label}
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-synk-dark/40 via-transparent to-transparent" />
                     <div className="absolute bottom-10 left-0 right-0 px-8 text-white text-center">
                        <div className="text-[10px] font-mono opacity-60 uppercase mb-2">Interface: {p.title}</div>
                        <div className="text-lg font-bold">{p.label}</div>
                     </div>
                   </div>
                </div>
              </div>
              <div className="text-center md:text-left px-4">
                 <h4 className="text-xl font-bold mb-4 text-synk-dark">{p.label}</h4>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

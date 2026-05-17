import { motion } from 'motion/react';
import { Smartphone, Camera, Pocket, ShoppingBag } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "감각 번역",
      desc: "소재의 질감과 컬러를 데이터로 수치화하여 음성과 진동으로 전달합니다.",
      icon: <Smartphone />,
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000",
      color: "blue"
    },
    {
      title: "뷰티 분석",
      desc: "메이크업의 대칭과 밸런스를 측정하여 정교한 가이드를 제공합니다.",
      icon: <Camera />,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000",
      color: "indigo"
    },
    {
      title: "내 옷장",
      desc: "보유한 의류의 데이터를 저장하고 스타일링 조합을 추천받습니다.",
      icon: <Pocket />,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000",
      color: "cyan"
    },
    {
      title: "매장 모드",
      desc: "오프라인 매장에서 QR 스캔만으로 정확한 제품 정보를 파악합니다.",
      icon: <ShoppingBag />,
      image: "https://images.unsplash.com/photo-1470309634124-77742d4f2081?q=80&w=1000",
      color: "slate"
    }
  ];

  return (
    <section id="features" className="py-32 lg:py-48 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[3rem] bg-white border border-black/[0.03] shadow-sm hover:shadow-xl transition-all duration-700"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-synk-dark/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:bg-synk-electric transition-colors">
                   {f.icon}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{f.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed max-w-sm">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

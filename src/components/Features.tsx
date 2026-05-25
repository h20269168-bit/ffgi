import { motion } from 'motion/react';
import { Smartphone, Camera, Pocket, ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "감각 주파수 번역",
      desc: "의류의 미세 표면 거칠기 및 컬러 데이터를 100Hz 진동 주파수와 음성 스트림으로 역치 번역합니다.",
      icon: <Smartphone className="stroke-[2]" />,
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000",
      tag: "Haptic Stitch"
    },
    {
      title: "음성 비전 뷰티 가이드",
      desc: "전면 카메라 심도 정보를 활용하여 아이브로우의 각도 대칭 및 파운데이션 도포 밀도 오차를 소리로 지시합니다.",
      icon: <Camera className="stroke-[2]" />,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000",
      tag: "AI Audio Vanity"
    },
    {
      title: "스마트 보관 옷장",
      desc: "스캔 완료된 나만의 착장 정보를 스마트 카탈로그로 통합 등록하고, 날씨 맞춤형 점자 오디오 코디를 추천받습니다.",
      icon: <Pocket className="stroke-[2]" />,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000",
      tag: "Inclusive Closet"
    },
    {
      title: "오프라인 다이렉트 매장 스캔",
      desc: "ZARA, 올리브영 협력 사물 QR 가이드 엔진을 작동시켜 점원의 동행 없이도 독립적으로 매장 구조를 리딩합니다.",
      icon: <ShoppingBag className="stroke-[2]" />,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
      tag: "Direct tag Reader"
    }
  ];

  return (
    <section id="features" className="py-28 lg:py-36 bg-[#F7F7F7] relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <span className="text-[#00E5FF] font-mono font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
            CORE SOLUTIONS & CHANNELS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light leading-tight tracking-tight text-[#222222]">
            SYNK의 <span className="font-extrabold text-[#00E5FF]">4대 서비스 연동 접근성 솔루션</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-150/80 hover:border-[#00E5FF]/60 hover:shadow-2xl hover:shadow-[#00E5FF]/5 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                {/* Visual Top block: soft rounded images */}
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem] relative mb-6">
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                  
                  {/* Category mini floats */}
                  <span className="absolute top-4 left-4 bg-white/95 px-3.5 py-1.5 rounded-full text-[10px] font-bold text-gray-500 shadow-sm">
                    {f.tag}
                  </span>
                </div>
                
                {/* Features descriptive */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-[#00E5FF] transition-colors">
                      {f.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#00E5FF]/15 group-hover:text-[#00E5FF] transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold leading-relaxed max-w-md">
                    {f.desc}
                  </p>
                </div>
              </div>

              {/* Icon marker footer */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#00E5FF] border border-gray-100 shadow-xs">
                  {f.icon}
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">Real-Time Core Engine Integrator</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

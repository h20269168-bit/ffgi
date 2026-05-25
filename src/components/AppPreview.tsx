import { motion } from 'motion/react';

export default function AppPreview() {
  const previews = [
    {
      title: "Tactile Analysis Result",
      label: "소재 밀도 분석 결과",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000",
      desc: "의류 원단의 기모 유무, 신축성, 짜임 구멍 밀도(Density) 값을 가열식 촉각 패널 분석값으로 변환해 줍니다."
    },
    {
      title: "Real-time Voice Cam",
      label: "실시간 비전 가사 중계",
      image: "https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=1000",
      desc: "카메라 렌즈가 인지한 옷 실루엣과 제휴 매장 동선을 점술 내레이션 스트림으로 연속 중계합니다."
    },
    {
      title: "Accurate Balance Cam",
      label: "정교한 뷰티 대칭 눈금",
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1000",
      desc: "대칭 측정이 어려운 보정 구역을 음향 시그널로 밀착 피드백하여 독립적인 메이크업 완성을 돕습니다."
    }
  ];

  return (
    <section id="preview" className="py-28 lg:py-36 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00E5FF] font-display font-extrabold tracking-[0.25em] uppercase text-xs mb-4"
          >
            Interface Showcase
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-light leading-tight tracking-tight text-[#222222]">
            모바일 <span className="font-extrabold text-[#00E5FF]">스마트 앱 미리보기</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            시각장애 사용자의 스마트폰 햅틱 모듈 및 마이크 리슨에 완벽히 동기화된 전용 인터페이스 레이아웃의 실물 캡처입니다.
          </p>
        </div>

        {/* Mockups Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {previews.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className="space-y-6"
            >
              {/* White iPhone frame */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#00E5FF]/5 rounded-[3.5rem] scale-98 group-hover:scale-100 transition-transform blur-xl opacity-0 group-hover:opacity-100 duration-500" />
                
                <div className="relative aspect-[9/19] rounded-[3rem] bg-white p-3 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/80 overflow-hidden iphone-bezel">
                   <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gray-50 relative border border-gray-100 flex flex-col justify-end">
                     
                     {/* Image view */}
                     <img 
                        src={p.image} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        alt={p.label}
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
                     
                     <div className="absolute bottom-8 left-0 right-0 px-6 text-white text-center">
                        <div className="text-[9px] font-mono opacity-85 uppercase mb-1.5 tracking-wider">SYSTEM INTERFACE: {p.title}</div>
                        <div className="text-base font-extrabold">{p.label}</div>
                     </div>

                   </div>
                </div>
              </div>

              {/* Descriptions */}
              <div className="text-center md:text-left px-4 space-y-2">
                 <h4 className="text-lg font-bold text-gray-800">{p.label}</h4>
                 <p className="text-gray-400 text-xs leading-relaxed font-semibold">{p.desc}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

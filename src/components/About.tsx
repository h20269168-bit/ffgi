import { motion } from 'motion/react';
import { Type, Palette, Layout, Smartphone } from 'lucide-react';

export default function About() {
  const painPoints = [
    { icon: <Palette size={24} />, label: "시각 위주의 정보 구조", desc: "텍스트나 오디오 설명 없이 이미지만 나열된 쇼핑 플랫폼 구조" },
    { icon: <Type size={24} />, label: "고정된 레이아웃 & 폰트", desc: "고대비 또는 글자 자유 확대 등 보조 도구 미지원" },
    { icon: <Smartphone size={24} />, label: "햅틱 피드백 부재", desc: "화면을 터치해도 소리 외에는 어떤 질감 피드백도 없는 한계" },
    { icon: <Layout size={24} />, label: "동떨어진 접근성 전용 환경", desc: "일반 화면과 동떨어져 따로 이용해야 하는 소외감" },
  ];

  return (
    <section id="about" className="py-28 lg:py-36 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Top Intro Section - Slogan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            <div className="text-[#00E5FF] font-display font-extrabold tracking-[0.25em] uppercase text-xs mb-4">
              THE STATUS QUO / BACKGROUND
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-light leading-tight mb-8 tracking-tight text-[#222222]">
              대부분의 쇼핑과 뷰티 서비스는 <br />
              <span className="font-extrabold text-[#00E5FF]">‘보는 것’만을 전제로</span> 설계됩니다.
            </h2>

            <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed max-w-3xl mb-12">
              우리가 매일 마주하는 이미지 중심 쇼핑 채널들은 저시력 환자와 시각장애인 분들에게 장벽이 됩니다. <br />
              특히 패션과 미를 표현하는 즐거움은 단순 소비를 넘어 인간 고유의 정체성을 보여주는 수단입니다. <br />
              SYNK는 바로 이 접근성의 불균형에서 시작되었습니다.
            </p>
          </motion.div>

          {/* Pain Point Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 border border-gray-100/80 rounded-[2rem] flex flex-col items-start gap-4 transition duration-300 hover:border-[#00E5FF]/50 hover:bg-white hover:shadow-lg hover:shadow-[#00E5FF]/5"
              >
                <div className="text-gray-400 p-3 bg-white border border-gray-100 rounded-2xl">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-800 leading-tight mb-2">{p.label}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Beautiful Quote block like a premium college sites project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 mt-8 p-10 lg:p-14 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E5FF]/5 blur-2xl rounded-full" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug mb-4">
                  "동일한 권리와 동등한 표현의 가치를 추구합니다."
                </h3>
                 <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
                  패션의 정수는 소재의 털날림, 짜임 밀도, 완벽한 립스틱 산의 좌우 정수 배합 등 미세한 차이에 존재합니다. <br />
                  장벽 없는 스마트 인터랙션을 통해 평등하고 온전한 가치와 최적화된 패션 경험을 가꿉니다.
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0 text-left bg-white border border-gray-100 rounded-2xl p-5 shadow-xs">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">PROJECT FOUNDATION</span>
                <span className="text-xs font-bold text-gray-800">Inclusive Shopping (2026)</span>
                <hr className="border-gray-100 my-1.5" />
                <span className="text-[10px] font-mono text-[#00E5FF] font-black uppercase">SYNK CORE PHILOSOPHY</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

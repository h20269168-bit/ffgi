import { motion } from 'motion/react';
import { Fingerprint, Scan, Waves, Sparkles, ArrowRight } from 'lucide-react';

export default function Demo() {
  const steps = [
    {
      num: "01",
      title: "계정 음성 간편 로그인",
      desc: "본인의 음성 톤 주파수와 지문을 가볍게 인식하여 보안 환경에서 즉시 포털에 접속합니다.",
      icon: <Fingerprint className="text-[#00E5FF]" />,
      action: "약 2초 내 전용 보조 UI 전환"
    },
    {
      num: "02",
      title: "카메라 대면 QR & 사물 스캔",
      desc: "스마트폰 카메라로 옷감의 질감 또는 오프라인 제휴 매장에 부착된 특수 사물태그를 포착합니다.",
      icon: <Scan className="text-[#00E5FF]" />,
      action: "화면 정렬 가이드 음성 송출"
    },
    {
      num: "03",
      title: "소리 & 햅틱 질감 스트림 수신",
      desc: "색채 및 밀도를 파싱한 AI가 정교한 한국어 내레이션과 100Hz 미립 촉각 햅틱 진동을 전송합니다.",
      icon: <Waves className="text-[#00E5FF]" />,
      action: "손끝을 진동 자극으로 직접 번역"
    },
    {
      num: "04",
      title: "개인 스마트 보관함 수거",
      desc: "인증 완료된 코스메틱과 패션 코디들을 개인 영구 마이 수납장에 등록하여 안전하게 조합합니다.",
      icon: <Sparkles className="text-[#00E5FF]" />,
      action: "장시장 독립적인 스타일링 완성"
    }
  ];

  return (
    <section id="demo" className="py-28 lg:py-36 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Intro */}
        <div className="text-center mb-24">
          <span className="text-[#00E5FF] font-mono font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
            USER SERVICE WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light leading-tight tracking-tight text-[#222222]">
            누구나 똑같이 쉽고 직관적인 <span className="font-extrabold text-[#00E5FF]">사용자 인터랙션 흐름</span>
          </h2>
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-sm sm:text-base">
            어려운 추가 교육 필요 없이, 자연스러운 일상 동작만으로 완벽하고 자유로운 패션 쇼핑과 톤 관리를 가능하게 합니다.
          </p>
        </div>

        {/* Step Flow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Background Connector Line on Desktop */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[1.5px] bg-gray-100 -z-10" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="flex flex-col bg-gray-50 border border-gray-100 rounded-[2.5rem] p-6 lg:p-8 transition-all hover:bg-white hover:border-[#00E5FF]/40 hover:shadow-xl hover:shadow-[#00E5FF]/5 relative group"
            >
              {/* Step number badge & icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-3xl tracking-tighter text-[#00E5FF]/30 group-hover:text-[#00E5FF] transition-colors leading-none">
                  {s.num}
                </span>
                
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-xs">
                  {s.icon}
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-4 flex-1">
                <h4 className="text-base font-bold text-gray-800 font-display">
                  {s.title}
                </h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Action output tag */}
              <div className="mt-6 pt-5 border-t border-gray-200/50 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-bold tracking-tight">{s.action}</span>
                {i < steps.length - 1 && (
                  <ArrowRight size={13} className="text-[#00E5FF]/50 md:hidden block" />
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

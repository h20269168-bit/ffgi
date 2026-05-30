import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Send, CheckCircle2, Mail, Github, BookOpen, 
  Layers, ChevronRight, MessageSquare, Play 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const projectResources = [
    {
      title: "GitHub Repository",
      subtitle: "Open Source Code",
      desc: "인클루시브 촉각 시뮬레이터 및 정밀 대칭 가이드 모듈의 깃허브 소스코드를 투명하게 공개합니다.",
      url: "https://github.com/synk-project/synk-accessibility",
      icon: <Github size={20} className="text-[#00E5FF]" />
    },
    {
      title: "Project Documentation",
      subtitle: "Academic Materials",
      desc: "디지털인문예술 장벽 완화 검증 및 HCI 햅틱 리포트 최종 정리 자료 및 학술 논평 스펙 파일 다운로드.",
      url: "https://bit.ly/synk-project-document-2026",
      icon: <BookOpen size={20} className="text-[#00E5FF]" />
    },
    {
      title: "Demo Smart App",
      subtitle: "Preview Playground",
      desc: "모바일에서 언제든지 시물레이트 작동 원리를 직접 확인해 볼 수 있도록 패키징한 라이브 배포서.",
      url: "/preview", // internal or can be clicked
      isInternal: true,
      icon: <Layers size={20} className="text-[#00E5FF]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/4 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-sky-100/15 blur-[100px] rounded-full -z-10" />

      {/* Intro Header */}
      <section className="pt-16 pb-20 max-w-7xl mx-auto px-6 text-center space-y-6">
        <span className="text-[#00E5FF] font-mono text-[11px] font-bold tracking-[0.25em] uppercase block">CONNECT WITH US</span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-[#222222] leading-tight">
          더 따뜻한 기술의 탄생을 <br />
          <span className="font-extrabold text-[#00E5FF]">함께 응원하고 연대해주세요</span>
        </h1>
        <p className="text-gray-400 font-semibold max-w-lg mx-auto text-sm leading-relaxed">
          프로젝트에 대한 문의 사항, 제휴 연대 제안 또는 대학생 팀을 향한 응원 한마디를 나누는 공간입니다.
        </p>
      </section>

      {/* Main Grid: Resources on Left, Inquiries form on Right */}
      <section className="py-20 bg-gray-50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 max-w-6xl mx-auto">
            
            {/* Left Column: Core Resources list cards */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider block">RESOURCES & MATERIAL</span>
                <h2 className="text-3xl font-display font-black text-[#222222] leading-snug">
                  프로젝트 검증 자료 <br />
                  및 소스코드 아카이브
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  SYNK 프로젝트는 소외 없는 유니버설 생태계 전파를 지향하며 모든 학술 산출물과 모바일 가치 가이드 스펙을 오픈소스로 안전히 보장하고 있습니다. 아래에서 필수 문서를 다운로드하십시오.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {projectResources.map((res, i) => (
                  <div 
                    key={res.title}
                    className="p-6 bg-white border border-gray-100/80 rounded-2xl flex items-start gap-4 shadow-2xs hover:shadow-xs hover:border-[#00E5FF]/40 transition-all group"
                  >
                    <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] rounded-xl flex-shrink-0">
                      {res.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">{res.subtitle}</span>
                      <h4 className="text-sm font-extrabold text-gray-800 flex items-center gap-1.5 justify-between">
                        <span>{res.title}</span>
                        {res.isInternal ? (
                          <button onClick={() => navigate(res.url)} className="text-[10px] text-[#00E5FF] font-bold uppercase tracking-wider flex items-center gap-0.5 hover:underline cursor-pointer">
                            <span>바로 가기</span>
                            <ChevronRight size={10} />
                          </button>
                        ) : (
                          <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#00E5FF] font-bold uppercase tracking-wider flex items-center gap-0.5 hover:underline">
                            <span>자료 보기</span>
                            <ChevronRight size={10} />
                          </a>
                        )}
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct email display with icon */}
              <div className="p-6 bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-2xl flex items-center gap-4">
                <div className="p-2.5 bg-[#00E5FF]/10 text-[#00E5FF] rounded-xl flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="text-left font-semibold">
                  <span className="text-[9px] font-mono font-black text-gray-400 uppercase tracking-wider block">Official Support Channel</span>
                  <a href="mailto:synk.accessible@gmail.com" className="text-xs sm:text-sm font-bold text-gray-800 hover:text-[#00E5FF] transition-colors">
                    synk.accessible@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact interactive Form */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-gray-150 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 flex flex-col justify-center text-left">
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] text-gray-400 font-mono font-bold tracking-widest uppercase block">PROPOSALS & MESSAGES</span>
                  <h3 className="text-2xl font-display font-black text-gray-800 flex items-center gap-1">
                    Let's SYNK<span className="text-[#00E5FF]">.</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                    의견, 학술 제휴, 혹은 소수 주권을 지탱하기 위한 대학생 연대팀에게 전할 따뜻한 독려의 메시지를 기다립니다.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">소속 및 성명</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="단체명 또는 성함 입력"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#00E5FF] transition-colors text-xs text-gray-750 font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">답신 받으실 이메일 주소</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#00E5FF] transition-colors text-xs text-gray-750 font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">제안 및 문의 상세내용</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="자유롭게 기록해 주십시오. 모든 메시지는 팀원들에게 즉시 안전하게 보장 전달됩니다."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#00E5FF] transition-colors text-xs text-gray-750 font-semibold resize-none"
                    />
                  </div>
                  
                  <button 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider mt-4 shadow-md cursor-pointer ${
                      formStatus === 'sent' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-[#00E5FF] hover:bg-[#00D0EE] text-gray-950 hover:scale-[1.01] active:scale-95 animate-button'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <span>제안 메일 보내기</span>
                        <Send size={13} />
                      </>
                    )}
                    {formStatus === 'sending' && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                    {formStatus === 'sent' && (
                      <>
                        <span>전송 완료</span>
                        <CheckCircle2 size={13} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

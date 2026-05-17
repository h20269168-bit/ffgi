export default function Footer() {
  const team = [
    "김주연", "박채빈", "서상욱", "이가원", "이예진", "임채하", "장수빈"
  ];

  return (
    <footer id="footer" className="bg-synk-dark py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-synk-electric rounded-xl flex items-center justify-center">
                  <span className="font-display font-bold text-xl tracking-tighter text-white">S</span>
                </div>
                <span className="font-display font-bold text-3xl tracking-tight text-white uppercase">SYNK</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                본 서비스는 프로젝트를 시연하기 위한 프로토타입입니다. <br />
                시각 장애인의 미적 자유와 <br />
                완전한 쇼핑 독립을 위한 AI 솔루션
              </p>
           </div>
           
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="space-y-8">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project Info</h4>
                <div className="text-sm text-slate-300 leading-relaxed space-y-2">
                   <p className="text-white font-bold">디지털인문예술입문</p>
                   <p>2026학년도 1학기 기말 프로젝트</p>
                </div>
             </div>

             <div className="space-y-8">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Team Members</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {team.map((name) => (
                    <span key={name} className="text-sm text-slate-400 hover:text-white transition-colors cursor-default font-medium">
                      {name}
                    </span>
                  ))}
                </div>
             </div>
           </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 font-mono uppercase tracking-widest">
            <p>© 2026 SYNK Prototype. Built for Exhibition.</p>
            <div className="flex gap-12">
                <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            </div>
        </div>
      </div>
    </footer>
  );
}

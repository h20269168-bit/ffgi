export default function Footer() {
  const team = [
    "김주연", "박채빈", "서상욱", "이가원", "이예진", "임채하", "장수빈"
  ];

  return (
    <footer id="footer" className="bg-gray-50 py-20 border-t border-gray-200/60 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
           <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#00E5FF] rounded-xl flex items-center justify-center">
                  <span className="font-display font-bold text-xl tracking-tighter text-white">S</span>
                </div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-[#222222] uppercase">SYNK</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-semibold">
                본 웹사이트는 시각 정보 접근성을 지원하는 기술 'SYNK'의 공모전 출품 및 기말 시연을 목적으로 제작된 프로토타입입니다.
              </p>
           </div>
           
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Academic Project Info</h4>
                <div className="text-xs text-gray-500 leading-relaxed space-y-1.5 font-semibold">
                   <p className="text-gray-800 font-extrabold text-sm">디지털인문예술입문</p>
                   <p>2026학년도 1학기 최종 발표 과제</p>
                   <p className="text-gray-400">장벽 없는 배리어프리 실현 목적</p>
                </div>
             </div>

             <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Project Team Members</h4>
                <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {team.map((name) => (
                    <span key={name} className="text-xs text-gray-500 hover:text-[#00E5FF] transition-colors cursor-default font-extrabold">
                      {name}
                    </span>
                  ))}
                </div>
             </div>
           </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-400 font-mono uppercase tracking-widest font-bold">
            <p>© 2026 SYNK Team Project. All rights reserved for Exhibition.</p>
            <div className="flex gap-8">
                <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-gray-600 cursor-pointer text-gray-300">|</span>
                <span className="hover:text-gray-600 cursor-pointer">Terms & Conditions</span>
            </div>
        </div>
      </div>
    </footer>
  );
}

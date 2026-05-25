import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Chrome, Mic, Volume2, Waves, Eye, Paintbrush, 
  ShoppingBag, FolderHeart, Flame, Play, Square, 
  Sparkles, Check, ChevronRight, Settings2, RefreshCw, 
  User, CheckCircle, Smartphone, AlertTriangle, Fingerprint, LogOut 
} from "lucide-react";

export default function ServicePortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"google" | "voice" | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"clothing" | "makeup" | "store" | "closet">("clothing");
  
  // Accessibility local state
  const [contrastMode, setContrastMode] = useState<"clean" | "high">("clean");
  const [textSize, setTextSize] = useState<"normal" | "large" | "huge">("large");
  const [voiceRate, setVoiceRate] = useState<number>(1.0);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [voiceSubtitle, setVoiceSubtitle] = useState("");
  
  // Simulation Interactive States
  const [selectedClothe, setSelectedClothe] = useState<number>(0);
  const [makeupType, setMakeupType] = useState<"lip" | "skin" | "eyebrow">("lip");
  const [scannedItem, setScannedItem] = useState<number | null>(null);
  const [closetFilter, setClosetFilter] = useState("all");

  const clothesPresets = [
    {
      id: 0,
      name: "코발트 블루 크롭 네트 가디건",
      desc: "그물 짜임이 돋보이는 가볍고 시원한 코발트 블루 컬러의 여름용 니트 가디건입니다. 크롭 기장으로 세련된 실루엣을 부각합니다.",
      rgb: "#00E5FF",
      density: "35% (시원하고 성긴 조직감)",
      texture: "부드럽고 얇은 네트 코튼 혼방",
      hapticPattern: "짧고 연달아 울리는 파동형 스티치 패턴",
      voiceGuide: "코발트 블루 크롭 네트 가디건이 감지되었습니다. 원단 밀도가 낮고 바람이 잘 통하는 성긴 조직입니다. 포인트인 크롭 카라 라인은 가볍고 살짝 까슬하지만 부드러운 순면 혼방 재질입니다.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600"
    },
    {
      id: 1,
      name: "모차렐라 화이트 와이드 실크 슬랙스",
      desc: "고급스러운 실크 혼방 소재로 차르르 떨어지는 부드러운 실루엣의 와이드 핏 전용 화이트 슬랙스입니다. 착용감이 매우 가볍습니다.",
      rgb: "#F5F5F0",
      density: "85% (매끄럽고 촘촘함)",
      texture: "찰랑이며 떨어지는 고급 실크 실크 웨이브",
      hapticPattern: "길게 지지직거리는 실크 촉각 슬라이딩 피드백",
      voiceGuide: "모차렐라 화이트 와이드 실크 슬랙스입니다. 표면이 극도로 매끄럽고 구김이 거의 없는 85% 고밀도 실크 원단입니다. 손끝에 시원한 촉감이 맴도는 부드러운 하이웨이스트 밴딩 디자인입니다.",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600"
    },
    {
      id: 2,
      name: "버건디 트위드 하이 패션 재킷",
      desc: "골드 버튼 포인터와 텍스처 감도가 짙은 오프라인 패밀리룩 하이 트위드 재킷입니다. 사계절 착용이 가능한 무게감 있는 두께입니다.",
      rgb: "#800020",
      density: "95% (밀도 높은 트위드 원단)",
      texture: "거칠고 올록볼록한 입체적 입자 텍스처",
      hapticPattern: "강하고 주기적인 클릭 패턴 진동",
      voiceGuide: "버건디 트위드 하이 패션 재킷입니다. 올록볼록한 질감이 손으로 뚜렷하게 만져지는 하이 트위드 패브릭입니다. 양쪽 포켓에 부착된 양각 골드 단추의 볼륨감이 느껴지는 구조적인 버튼 가이드가 활성화됩니다.",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600"
    }
  ];

  const makeupPresets = {
    lip: {
      title: "립 메이크업 매칭 제안",
      status: "비대칭 감지: 입꼬리 왼쪽 정렬 불일치",
      guide: "왼쪽 립 라인이 기준선보다 약 2mm 아래로 연장되어 있습니다. 오른쪽 입술꼬리 아랫면을 중심으로 브러시 가이드를 위로 회전하여 대칭을 맞추십시오.",
      narrative: "음성 정밀 립 밸런스입니다. 윗입술 산의 좌우 대칭 점수는 78점입니다. 미세 보정을 위해 왼쪽 아랫입술 끝의 외곽선을 얇게 매직 브러시로 보완해 주시길 권장합니다."
    },
    skin: {
      title: "피부 메이크업 & 고른 톤 분배",
      status: "수분 부족 및 광대 구역 커버리지 불일치",
      guide: "오른쪽 볼 부위의 파운데이션 도포 밀도가 더 높습니다. 쿠션을 이용해 중앙 영역에서 광대뼈 방향으로 3회 가볍게 밀어서 두드려 밀착해 주세요.",
      narrative: "피부 균일성 점수 분석 피드백입니다. 양 볼의 도포 균형이 다소 차이납니다. 수분이 부족한 부위에 수분 미스트를 가볍게 분사한 후, 가이드를 따라 고르게 흡수시키십시오."
    },
    eyebrow: {
      title: "아이브로우 대칭 가이드",
      status: "왼쪽 눈썹 산 상승 불균형",
      guide: "왼쪽 눈썹산이 오른쪽보다 약 15도 올라가 비대칭을 이룹니다. 아이브로우 가이드 도구 끝 패밀리존을 눈썹 산 꼬리에 맞춘 뒤, 각도를 아래로 낮춰 수정하세요.",
      narrative: "아이브로우 가이드입니다. 왼쪽 눈썹산의 꺾임 각도가 더 급격합니다. 안내 모드에 맞춰 눈썹 끝꼬리 하단을 자연스러운 플랫 브라운 톤으로 메우면 완벽한 대칭이 완성됩니다."
    }
  };

  const storeItems = [
    { id: 101, name: "ZARA 벨티드 코튼 리넨 자켓", size: "M, L 보유", price: "99,000원", text: "친환경 오가닉 리넨 혼방", desc: "오프라인 매장 리얼타임 QR태그 분석 결과입니다. 이 상품은 천연 자원으로 재배된 100% 지속가능한 에코 코튼입니다." },
    { id: 102, name: "무신사 스탠다드 릴렉스 실키 셔츠", size: "S, M, L, XL 보유", price: "39,900원", text: "극강의 부드러움을 선사하는 유니섹스 라인", desc: "무신사 쇼룸 QR 가이드입니다. 사계절 내내 구김 없이 착용할 수 있으며 신축성이 뛰어납니다." },
    { id: 103, name: "올리브영 이즈앤트리 히알루론 수분 밤", size: "대용량 한정 수량", price: "24,000원", text: "건성 및 민감성 피부 맞춤 에멀전", desc: "올리브영 스마트 매장 음성 정보입니다. 수분 보존력이 탁월하여 하프 톤 메이크업 베이스 역할을 수행합니다." }
  ];

  const closetItems = [
    { id: 1, name: "스카이 라이트 데님 자켓", category: "outer", color: "연청", source: "올리브 오일 워싱 가공" },
    { id: 2, name: "데일리 베이지 치노 드레스", category: "dress", color: "베이지", source: "부드러운 피치 코튼 원단" },
    { id: 3, name: "에메랄드 스트라이프 티셔츠", category: "top", color: "초록색", source: "시원한 마린 하이 트위스트 조직" }
  ];

  // System Sound Playback Sim
  const playAccessibilityVoice = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ko-KR";
      utterance.rate = voiceRate;
      utterance.onstart = () => setIsPlayingVoice(true);
      utterance.onend = () => setIsPlayingVoice(false);
      utterance.onerror = () => setIsPlayingVoice(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingVoice(true);
      setTimeout(() => setIsPlayingVoice(false), 3000);
    }
    setVoiceSubtitle(text);
  };

  const stopAccessibilityVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingVoice(false);
  };

  const handleSimulatedLogin = (method: "google" | "voice") => {
    setIsLoggingIn(true);
    setLoginMethod(method);
    
    const startText = method === "google" 
      ? "구글 로그인을 시작합니다. 안전한 보안 정보 채널을 통해 SYNK 온라인 프로토타입에 접속합니다."
      : "음성 매칭 로그인을 시작합니다. 주파수 일치를 감지하고 있습니다.";
    
    playAccessibilityVoice(startText);

    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
      playAccessibilityVoice("로그인 성공. 환영합니다. 시각 정보를 소리와 촉각으로 실시간 가공하는 SYNK 어시스턴트 시뮬레이터가 정상 구동되었습니다. 현재 화면은 1단계 의상 질감 분석 가이드입니다.");
    }, 1800);
  };

  const handleLogout = () => {
    stopAccessibilityVoice();
    setIsLoggedIn(false);
    setLoginMethod(null);
    setScannedItem(null);
  };

  const getFontSize = (type: "title" | "body" | "small") => {
    if (textSize === "huge") {
      if (type === "title") return "text-4xl font-extrabold leading-tight";
      if (type === "body") return "text-xl font-bold leading-normal text-gray-700";
      return "text-base font-bold text-gray-600";
    }
    if (textSize === "large") {
      if (type === "title") return "text-28px font-bold leading-tight text-gray-800";
      if (type === "body") return "text-base font-semibold leading-relaxed text-gray-600";
      return "text-sm font-semibold text-gray-500";
    }
    if (type === "title") return "text-xl font-bold text-gray-800";
    if (type === "body") return "text-sm font-medium text-gray-600";
    return "text-xs font-normal text-gray-400";
  };

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="relative z-10 w-full text-left">
      
      {/* Top Setting Control panel - Clean Cozy Style */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 sm:p-6 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <Settings2 size={18} className="text-[#00E5FF]" />
          <span className="text-sm font-bold text-gray-700">체험용 사용자 맞춤 설정 :</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={() => setContrastMode(contrastMode === "clean" ? "high" : "clean")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              contrastMode === "high" 
                ? "bg-gray-800 text-white border-gray-800" 
                : "bg-gray-50 text-gray-700 border-gray-200/80 hover:bg-gray-100"
            }`}
          >
            🔆 {contrastMode === "high" ? "고대비 텍스트 ON" : "고대비 텍스트 OFF"}
          </button>

          <button
            onClick={() => {
              if (textSize === "normal") setTextSize("large");
              else if (textSize === "large") setTextSize("huge");
              else setTextSize("normal");
            }}
            className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200/80 text-xs font-bold text-gray-700 hover:bg-gray-100 transition"
          >
            🔎 글자 크기 ({textSize === "normal" ? "기본" : textSize === "large" ? "크게" : "매우 크게"})
          </button>

          <select
            value={voiceRate}
            onChange={(e) => setVoiceRate(parseFloat(e.target.value))}
            className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200/80 text-xs font-bold text-gray-700 focus:outline-none"
            title="스피치 목소리 속도"
          >
            <option value="0.8">0.8배속 느리게</option>
            <option value="1.0">1.0배속 기본</option>
            <option value="1.3">1.3배속 약간 빠르게</option>
            <option value="1.5">1.5배속 소셜 스피디</option>
          </select>
        </div>
      </div>

      {/* Main Container Sandbox */}
      <div className={`transition-all duration-500 rounded-[2.5rem] p-6 sm:p-8 shadow-xl min-h-[560px] relative overflow-hidden flex flex-col justify-between ${
        isLoggedIn 
          ? "bg-white border border-gray-100 shadow-gray-100/50" 
          : "bg-[#090B0E] border border-gray-900 shadow-black/65"
      }`}>
        
        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            
            // Logged-out Screen styled exactly like the screenshot
            <motion.div
              key="logged-out"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              className="flex flex-col items-center justify-center text-center py-12 max-w-sm mx-auto my-auto w-full"
            >
              {/* Premium Title matching the screenshot */}
              <div className="mb-10">
                <span className="font-display font-black text-5xl tracking-tight text-white block">
                  SYNK<span className="text-[#00E5FF]">.</span>
                </span>
                <p className="text-xs font-bold text-gray-400 mt-5 leading-relaxed tracking-tight max-w-[270px] mx-auto">
                  시각장애인을 위한 목소리 기반 의상 및 메이크업 어시스턴트
                </p>
              </div>
              
              <div className="w-full space-y-4 px-2">
                <button
                  onClick={() => handleSimulatedLogin("google")}
                  disabled={isLoggingIn}
                  className="w-full py-4 rounded-[2rem] bg-[#00E5FF] hover:bg-[#00D0EE] text-gray-950 flex flex-col items-center justify-center transition-all duration-300 shadow-lg shadow-[#00E5FF]/25 active:scale-[0.99] group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <Chrome size={16} className="text-gray-950 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-extrabold tracking-tight">구글 계정으로 로그인</span>
                  </div>
                  <span className="text-[8px] font-bold text-gray-900/60 mt-0.5">버튼을 눌러 구글 소셜 로그인을 진행합니다</span>
                </button>

                <button
                  onClick={() => handleSimulatedLogin("voice")}
                  disabled={isLoggingIn}
                  className="w-full py-4 rounded-[2rem] bg-[#141A24] border border-gray-800 hover:bg-[#1C2534] text-white flex flex-col items-center justify-center transition-all duration-300 active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <Mic size={16} className="text-[#00E5FF]" />
                    <span className="text-sm font-extrabold tracking-tight text-gray-100">음성 인식 로그인</span>
                  </div>
                  <span className="text-[8px] font-bold text-gray-500 mt-0.5">계정 이메일을 말하여 로그인을 시작합니다</span>
                </button>
              </div>

              {isLoggingIn && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 text-xs text-[#00E5FF] font-mono font-bold animate-pulse"
                >
                  {loginMethod === "google" ? "구글 클라우드 보안 토큰 협상 중..." : "목소리 음향 웨이브 주파수 패턴 파싱 중..."}
                </motion.div>
              )}
            </motion.div>

          ) : (

            // Active Sandbox Dashboard Console
            <motion.div
              key="console"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              
              {/* Console mini-head */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-105 flex items-center justify-center text-[#00E5FF] border border-gray-200/50">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">가상 접속 계정</div>
                    <div className="text-xs font-bold text-gray-700">student@hallym.ac.kr (Active)</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => playAccessibilityVoice("현재 활성화된 기능 탭은 " + (activeTab === "clothing" ? "의상 소재 분석기" : activeTab === "makeup" ? "정밀 화장 대칭 가이드" : activeTab === "store" ? "오프라인 스마트 매장 리더" : "내 보관 소장 옷장") + "입니다.")}
                    className="p-2.5 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 hover:bg-[#00E5FF]/20 text-[#00E5FF] flex items-center gap-1.5 text-xs font-bold transition cursor-pointer"
                  >
                    <Volume2 size={13} />
                    <span>음성 복구</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition flex items-center gap-1 text-xs font-bold"
                  >
                    <LogOut size={13} />
                  </button>
                </div>
              </div>

              {/* Redesigned Minimal Tabs for Team Project Pitch */}
              <div className="flex overflow-x-auto gap-2 border-b border-gray-100 pb-2">
                {[
                  { id: "clothing", label: "👕 의상 소재/색 분석" },
                  { id: "makeup", label: "💄 메이크업 가이드" },
                  { id: "store", label: "🛒 오프라인 매장 QR" },
                  { id: "closet", label: "📁 마이 스마트 옷장" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      stopAccessibilityVoice();
                    }}
                    className={`px-4 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id 
                        ? "bg-[#00E5FF] text-gray-950 shadow-md shadow-[#00E5FF]/15" 
                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="flex-1 mt-4">
                <AnimatePresence mode="wait">
                  
                  {activeTab === "clothing" && (
                    <motion.div
                      key="clothing"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-6"
                    >
                      {/* Left: item list select */}
                      <div className="md:col-span-5 space-y-2.5">
                        <label className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block mb-1">분석 대상 상품 셀렉터</label>
                        {clothesPresets.map((clothe, idx) => (
                          <button
                            key={clothe.id}
                            onClick={() => {
                              setSelectedClothe(idx);
                              playAccessibilityVoice(clothe.voiceGuide);
                            }}
                            className={`w-full p-3 rounded-2xl border text-left flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                              selectedClothe === idx 
                                ? "bg-[#00E5FF]/10 border-[#00E5FF] shadow-sm" 
                                : "bg-white border-gray-100 hover:border-gray-200"
                            }`}
                          >
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative">
                              <img src={clothe.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                            </div>
                            <div className="overflow-hidden">
                              <div className="font-bold text-xs text-gray-800 truncate">{clothe.name}</div>
                              <div className="text-[9px] text-[#00E5FF] font-semibold mt-0.5 font-mono">{clothe.density}</div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Right: details cards */}
                      <div className="md:col-span-7 bg-gray-50/50 border border-gray-100 p-5 rounded-3xl space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                          <span className="text-[10px] font-mono font-extrabold text-[#00E5FF] uppercase">감각 정보 가공 출력부 (AI)</span>
                          <Sparkles size={12} className="text-[#00E5FF]" />
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">의상명 및 식별</h4>
                            <p className="text-base font-extrabold text-gray-800 mt-0.5">{clothesPresets[selectedClothe].name}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-white border border-gray-100 rounded-xl">
                              <span className="text-[9px] text-gray-400 font-bold uppercase">소재 정밀 질감</span>
                              <p className="text-xs font-bold text-gray-700 mt-1 truncate">{clothesPresets[selectedClothe].texture}</p>
                            </div>
                            <div className="p-3 bg-white border border-gray-100 rounded-xl">
                              <span className="text-[9px] text-gray-400 font-bold uppercase">색상 분석값</span>
                              <div className="flex items-center gap-1.5 mt-1">
                                <span className="w-3.5 h-3.5 rounded-full border border-gray-200" style={{ backgroundColor: clothesPresets[selectedClothe].rgb }} />
                                <span className="text-xs font-semibold font-mono text-gray-600">{clothesPresets[selectedClothe].rgb}</span>
                              </div>
                            </div>
                          </div>

                          {/* Interactive touch simulator */}
                          <div className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center justify-between">
                            <div className="space-y-0.5">
                              <div className="text-[9px] text-[#00E5FF] font-bold uppercase tracking-wider flex items-center gap-1">
                                <Waves size={11} />
                                햅틱 진동 피드백 수신
                              </div>
                              <p className="text-[11px] font-semibold text-gray-600">{clothesPresets[selectedClothe].hapticPattern}</p>
                            </div>
                            <span className="text-[9px] bg-gray-50 text-gray-400 border border-gray-200 px-2 py-1 rounded font-mono">100Hz Vibrator</span>
                          </div>

                          {/* Voice transcription text */}
                          <div className="p-3 bg-[#00E5FF]/5 border border-[#00E5FF]/15 rounded-2xl">
                            <div className="text-[10px] font-bold text-gray-400 mb-1">🔊 실시간 음성 대포 가이드 스크립트</div>
                            <p className="text-xs font-medium text-gray-700 leading-relaxed italic">
                              "{clothesPresets[selectedClothe].voiceGuide}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "makeup" && (
                    <motion.div
                      key="makeup"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {(["lip", "skin", "eyebrow"] as const).map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setMakeupType(type);
                              playAccessibilityVoice(makeupPresets[type].narrative);
                            }}
                            className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                              makeupType === type 
                                ? "bg-[#00E5FF]/10 border-[#00E5FF] text-gray-900 font-extrabold" 
                                : "bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100"
                            }`}
                          >
                            <span className="block text-[8px] uppercase tracking-wider text-gray-400 mb-0.5">
                              {type === "lip" ? "LIP BALANCER" : type === "skin" ? "BASE TONE" : "EYEBROW"}
                            </span>
                            <span className="text-xs font-bold block truncate">
                              {type === "lip" ? "💄 립 대칭" : type === "skin" ? "✨ 피부 골고루" : "👀 브로우 매칭"}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="p-5 bg-gray-50/50 border border-gray-200 rounded-2xl space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-600 text-[9px] font-bold uppercase tracking-wider">
                            Realtime Cam Alignment
                          </span>
                          <span className="text-xs font-mono text-gray-400">Lip tracking ver 21.0</span>
                        </div>
                        
                        <h4 className="text-base font-bold text-gray-800">{makeupPresets[makeupType].title}</h4>
                        
                        <div className="p-3 bg-orange-50 border border-orange-100 text-orange-700 rounded-xl text-xs flex items-center gap-2 font-semibold">
                          <AlertTriangle size={14} className="flex-shrink-0" />
                          <span>{makeupPresets[makeupType].status}</span>
                        </div>

                        <div className="p-4 bg-white border border-gray-100 rounded-xl text-xs space-y-1">
                          <span className="text-[9px] font-bold text-gray-400 uppercase font-mono block">음성 정렬 교정 지시</span>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {makeupPresets[makeupType].guide}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "store" && (
                    <motion.div
                      key="store"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-[10px] text-gray-400 font-extrabold tracking-wider block mb-1">오프라인 스마트 매장 QR 태그 가상 리더기</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {storeItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setScannedItem(item.id);
                              playAccessibilityVoice(item.desc);
                            }}
                            className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                              scannedItem === item.id 
                                ? "bg-[#00E5FF]/5 border-[#00E5FF]" 
                                : "bg-white border-gray-100 hover:border-gray-200"
                            }`}
                          >
                            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 font-mono text-[8px] font-bold mb-2 inline-block">QR SCANNER</span>
                            <h4 className="text-xs font-extrabold text-gray-800 mb-1">{item.name}</h4>
                            <div className="flex justify-between items-center text-[10px] text-gray-500 font-medium">
                              <span>Size: {item.size}</span>
                              <span className="text-[#00E5FF] font-mono">{item.price}</span>
                            </div>
                          </button>
                        ))}
                      </div>

                      {scannedItem && (
                        <div className="p-5 bg-[#00E5FF]/5 border border-[#00E5FF]/25 rounded-2xl space-y-2">
                          <div className="text-[10px] text-[#00E5FF] font-mono tracking-widest font-extrabold">오프라인 매장 환경 분석 음성 스크립트</div>
                          <p className="text-xs font-medium text-gray-700 leading-relaxed max-w-none">
                            {storeItems.find(i => i.id === scannedItem)?.desc}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "closet" && (
                    <motion.div
                      key="closet"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">소장품 마이 옷장 필터</span>
                        <div className="flex gap-1.5">
                          {["all", "upper", "bottom"].map((f) => (
                            <button
                              key={f}
                              onClick={() => setClosetFilter(f)}
                              className={`px-3 py-1 rounded-full text-[10px] font-bold border transition ${
                                closetFilter === f 
                                  ? "bg-gray-800 text-white border-gray-800" 
                                  : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-150"
                              }`}
                            >
                              {f === "all" ? "전체" : f === "upper" ? "상의" : "하의"}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {closetItems.map((item) => (
                          <div key={item.id} className="p-4 bg-white border border-gray-150 rounded-2xl space-y-2">
                            <span className="px-2 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] text-[8px] font-bold uppercase tracking-wider">{item.category}</span>
                            <h4 className="text-xs font-bold text-gray-800">{item.name}</h4>
                            <div className="text-[10px] text-gray-400 font-mono">색상: {item.color} | {item.source}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Subtitles Area at bottom */}
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00E5FF]" />
                <div className="pl-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-[#00E5FF] font-extrabold tracking-wider uppercase flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full bg-[#00E5FF] ${isPlayingVoice ? 'animate-ping' : ''}`} />
                      실시간 한글 음성 자막 (Subtitles)
                    </span>
                    {isPlayingVoice && <span className="text-[9px] font-bold text-[#00E5FF]">스피커 재생 중...</span>}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 leading-relaxed min-h-[1.5rem]">
                    {voiceSubtitle || "로그인 후 의상과 탭 메뉴를 눌러 소리와 촉각을 가상으로 전송 시뮬레이션 하십시오."}
                  </p>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { RefreshCw, Users, Lightbulb } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-32 lg:py-56 bg-white overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="text-synk-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8">The Philosophy</div>
              <h2 className="text-4xl lg:text-5xl font-display font-light leading-tight mb-8 tracking-tight text-synk-dark">
                Universal Design: <br />
                <span className="font-extrabold">모두를 위한 더 나은 경험.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                SYNK는 특정 사용자를 분리하기보다, 누구나 함께 사용할 수 있는 접근성 경험을 지향합니다. <br />
                접근성은 특정 사용자를 위한 기능이 아니라, <br className="hidden md:block" />
                모두를 위한 고도화된 인터페이스의 미래입니다.
              </p>
            </div>

            <div className="space-y-8">
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-synk-electric shadow-sm border border-black/[0.02]">
                     <RefreshCw size={20} />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-lg font-bold mb-2">모드 전환 가능성</h4>
                     <p className="text-slate-500 text-sm font-medium">음성 안내 ON/OFF 및 설명 모드 설정을 통해 다양한 사용자의 니즈를 충족합니다.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-synk-electric shadow-sm border border-black/[0.02]">
                     <Users size={20} />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-lg font-bold mb-2">통합된 사용자 경험</h4>
                     <p className="text-slate-500 text-sm font-medium">분리된 서비스가 아닌, 하나의 완성된 앱에서 모두가 평등하게 정보를 공유합니다.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 lg:p-20 bg-slate-50 rounded-[3rem] border border-black/[0.03] text-center"
          >
             <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-10 shadow-sm">
                <Lightbulb size={32} className="text-synk-electric" />
             </div>
             <h3 className="text-2xl font-bold mb-6 text-synk-dark">접근성은 곧 기술력입니다.</h3>
             <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                가장 정교한 인터페이스가 가장 포용적인 디자인을 만듭니다. <br />
                SYNK는 그 미래를 향해 한 걸음 더 나아갑니다.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

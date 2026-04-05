import { motion, useScroll, useTransform } from "motion/react";
import { Instagram, Mail, Sparkles, Brain, Zap, ArrowRight, ChevronDown } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-gray-200 selection:text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-gray-700 flex items-center gap-2">
            Biggie AI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
          <a 
            href="#contact"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            협업 문의
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gray-100/50 blur-3xl"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gray-200/30 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-6 border border-gray-200">
              AI Creator & Educator
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              어려운 AI,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
                가장 쉽게 알려드립니다
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              복잡한 인공지능 트렌드와 활용법을 누구나 이해할 수 있는 언어로 번역합니다. 
              Biggie AI와 함께 당신의 일상에 AI를 더해보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <Instagram className="w-5 h-5" />
                인스타그램 보러가기
              </a>
              <a 
                href="#about" 
                className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all w-full sm:w-auto justify-center"
              >
                더 알아보기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden relative">
                  {/* Placeholder for Profile Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <Brain className="w-32 h-32 opacity-20" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
                    alt="Biggie AI Profile" 
                    className="object-cover w-full h-full opacity-90 mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-4xl font-bold text-gray-700 mb-1">10K+</div>
                  <div className="text-sm text-slate-500 font-medium">Instagram Followers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-3">Who Am I</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                안녕하세요,<br />AI 크리에이터 <span className="text-gray-700">Biggie AI</span> 입니다.
              </h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  하루가 다르게 쏟아지는 AI 기술들, 어디서부터 어떻게 시작해야 할지 막막하셨나요?
                </p>
                <p>
                  저는 복잡한 기술 용어를 걷어내고, 우리의 일상과 업무에 당장 적용할 수 있는 
                  <strong>'진짜 쓸모있는 AI 활용법'</strong>을 연구하고 공유합니다.
                </p>
                <p>
                  인스타그램을 통해 매일 새로운 AI 툴과 프롬프트 엔지니어링 노하우를 
                  가장 직관적이고 트렌디한 콘텐츠로 전달하고 있습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-3">What I Offer</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              이런 콘텐츠를 만듭니다
            </h3>
            <p className="text-slate-600 text-lg">
              최신 AI 트렌드부터 실무 적용까지, 폭넓은 주제를 다룹니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-gray-600" />,
                title: "AI 툴 큐레이션",
                desc: "수많은 AI 서비스 중 내게 꼭 필요한 알짜배기 툴만 엄선하여 소개합니다."
              },
              {
                icon: <Brain className="w-8 h-8 text-gray-600" />,
                title: "프롬프트 엔지니어링",
                desc: "원하는 결과물을 정확히 얻어내는 챗GPT, 미드저니 프롬프트 작성법을 알려드립니다."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-gray-600" />,
                title: "AI 트렌드 뉴스",
                desc: "놓치면 안 될 중요한 AI 업계 소식을 가장 빠르고 알기 쉽게 요약해 드립니다."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-gray-200 transition-all group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI가 바꾸는 세상의 모습
            </h3>
            <p className="text-slate-600 text-lg">
              기술이 만들어가는 새로운 시각과 가능성을 함께 탐험합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {[
              { src: "/images/img1.png", alt: "도시와 문명" },
              { src: "/images/img2.png", alt: "자연의 신비" },
              { src: "/images/img3.png", alt: "청정 자연" },
              { src: "/images/img4.png", alt: "장엄한 피오르" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl aspect-video group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {img.alt}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-gray-700 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-gray-600 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                함께 재미있는<br />프로젝트를 만들어볼까요?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                강연, 콘텐츠 협업, 광고 문의 등 다양한 제안을 환영합니다.
                언제든 편하게 연락 주세요!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:hello@biggie.ai" 
                  className="flex items-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  hello@biggie.ai
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-700 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-600 transition-all w-full sm:w-auto justify-center border border-gray-500"
                >
                  <Instagram className="w-5 h-5" />
                  DM 보내기
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="font-bold text-xl tracking-tighter text-slate-800 flex items-center gap-2 mb-4">
            Biggie AI
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Biggie AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Hero3D from '@/components/canvas/Hero3D';
import About from '@/components/ui/About';
import Skills from '@/components/ui/Skills';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';
import Typewriter from 'typewriter-effect';
import SmartOrbitControls from '@/components/canvas/SmartOrbitControls'; 
import Mobile3DUI from '@/components/ui/Mobile3DUI';
import { Download, Home as HomeIcon, User, Code, Mail, Globe } from 'lucide-react'; 
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <main className="w-full bg-brand-bg relative overflow-x-hidden">
      
      {/* 1. UI DE NAVIGATION MOBILE (FLÈCHES INTELLIGENTES) */}
      {/* Il est placé ici pour flotter par-dessus tout le site */}
      <Mobile3DUI /> 

      {/* 2. MENU MOBILE FLOTTANT (ICÔNES EN BAS) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div className="bg-black/80 backdrop-blur-md border border-brand-primary/30 rounded-full px-4 py-3 flex items-center gap-4 shadow-[0_0_30px_rgba(0,229,153,0.3)]">
          <a href="#hero" className="p-2 hover:bg-brand-primary/20 rounded-full transition">
            <HomeIcon size={20} className="text-white" />
          </a>
          <a href="#about" className="p-2 hover:bg-brand-primary/20 rounded-full transition">
            <User size={20} className="text-white" />
          </a>
          <a href="#projets" className="p-2 hover:bg-brand-primary/20 rounded-full transition">
            <Code size={20} className="text-white" />
          </a>
          <a href="#contact" className="p-2 hover:bg-brand-primary/20 rounded-full transition">
            <Mail size={20} className="text-white" />
          </a>
           {/* SWITCH LANGUE MOBILE */}
           <button onClick={toggleLang} className="p-2 bg-white/10 rounded-full text-xs font-bold text-white border border-white/20">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </nav>

      {/* === SECTION HERO (ID="hero" important pour la détection) === */}
      <section id="hero" className="min-h-screen w-full relative">
        
        {/* CONTENU TEXTE */}
        <div className="relative z-10 pointer-events-none p-4 md:p-12 flex flex-col justify-between md:absolute md:inset-0">
            
            {/* HEADER */}
            <header className="flex justify-between items-center w-full animate-fade-in-down mb-8 md:mb-0 pointer-events-auto">
                <h1 className="text-lg md:text-2xl font-bold font-display text-white tracking-wider border-b-2 border-brand-primary pb-1">
                  HONORINE<span className="text-brand-primary">.DEV</span>
                </h1>
                
                <div className="flex items-center gap-6">
                    {/* NAVIGATION DESKTOP */}
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-white/80">
                        <a href="#projets" className="hover:text-brand-primary transition">{t.nav.projects}</a>
                        <a href="#about" className="hover:text-brand-primary transition">{t.nav.about}</a>
                        <a href="#contact" className="hover:text-brand-primary transition">{t.nav.contact}</a>
                    </nav>

                    {/* SWITCH LANGUE DESKTOP */}
                    <button 
                        onClick={toggleLang}
                        className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white hover:bg-brand-primary hover:text-black transition cursor-pointer"
                    >
                        <Globe size={14} />
                        {lang === 'fr' ? 'ENGLISH' : 'FRANÇAIS'}
                    </button>
                </div>
            </header>

            {/* PRINCIPAL */}
            <div className="w-full max-w-2xl pointer-events-auto z-20 relative text-center md:text-left mx-auto md:mx-0 px-2 mb-4 md:mb-0">
                
                <p className="text-brand-primary font-mono text-xs md:text-base mb-2 tracking-widest">
                  {t.hero.intro}
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-3 md:mb-4 font-display leading-tight">
                  HONORINE GABIAM
                </h2>
                
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center md:justify-start">
                    <Typewriter
                        key={lang} 
                        options={{
                            strings: t.hero.roles,
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </div>
                
                <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 md:mt-6 mb-6 md:mb-8 max-w-lg font-sans mx-auto md:mx-0 leading-relaxed">
                   {t.hero.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start mb-10 md:mb-0">
                  <a href="#projets" className="px-6 md:px-8 py-2.5 md:py-3 bg-brand-primary text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,229,153,0.4)] hover:scale-105 transition transform text-center text-sm md:text-base">
                      {t.hero.btn_work}
                  </a>
                  
                  <a 
                    href="/Honorine_GABIAM_Fullstack.pdf" 
                    download="Honorine_GABIAM_Fullstack.pdf"
                    className="group px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white border border-white/20 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition text-center flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                      <Download size={16} className="md:w-[18px] md:h-[18px] group-hover:animate-bounce" />
                      {t.hero.btn_cv}
                  </a>
                </div>
            </div>

            {/* FOOTER HERO */}
            <div className="text-slate-500 text-[10px] md:text-xs font-mono flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-0">
                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_#00E599]"></span>
                {t.hero.status}
            </div>
        </div>

        {/* CANVAS 3D */}
        <div 
            className="w-full h-[400px] md:h-screen md:absolute md:inset-0 md:z-0"
            style={{ touchAction: 'pan-y' }} // CRUCIAL pour le scroll mobile
        >
          <Canvas shadows camera={{ position: [0, 0, 9], fov: 40 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -5, -10]} intensity={0.5} color="#00E599" />
              <Environment preset="city" />
              
              <Hero3D />
              
              <SmartOrbitControls /> 
              
            </Suspense>
          </Canvas>
        </div>

      </section>

      {/* ID SECTIONS pour la navigation automatique */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projets">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </main>
  );
}
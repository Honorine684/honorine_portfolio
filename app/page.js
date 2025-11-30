'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Hero3D from '@/components/canvas/Hero3D';
import About from '@/components/ui/About';
import Skills from '@/components/ui/Skills';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';
import Typewriter from 'typewriter-effect';
import { Download, Home as HomeIcon, User, Code, Mail } from 'lucide-react'; // ← RENOMMÉ ICI

export default function Home() {
  return (
    <main className="w-full bg-brand-bg relative overflow-x-hidden">
      
      {/* MENU MOBILE FLOTTANT */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div className="bg-black/80 backdrop-blur-md border border-brand-primary/30 rounded-full px-4 py-3 flex items-center gap-4 shadow-[0_0_30px_rgba(0,229,153,0.3)]">
          <a href="#" className="p-2 hover:bg-brand-primary/20 rounded-full transition">
            <HomeIcon size={20} className="text-white" /> {/* ← UTILISÉ ICI */}
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
        </div>
      </nav>

      {/* === SECTION HERO === */}
      <section className="min-h-screen w-full relative">
        
        {/* CONTENU TEXTE */}
        <div className="relative z-10 pointer-events-none p-4 md:p-12 flex flex-col justify-between md:absolute md:inset-0">
            
            {/* HEADER */}
            <header className="flex justify-between items-center w-full animate-fade-in-down mb-8 md:mb-0">
                <h1 className="text-lg md:text-2xl font-bold font-display text-white tracking-wider border-b-2 border-brand-primary pb-1">
                  HONORINE<span className="text-brand-primary">.DEV</span>
                </h1>
                
                <nav className="pointer-events-auto hidden md:flex space-x-8 text-sm font-medium text-white/80">
                  <a href="#projets" className="hover:text-brand-primary transition">PROJETS</a>
                  <a href="#about" className="hover:text-brand-primary transition">À PROPOS</a>
                  <a href="#contact" className="hover:text-brand-primary transition">CONTACT</a>
                </nav>
            </header>

            {/* CONTENU PRINCIPAL */}
            <div className="w-full max-w-2xl pointer-events-auto z-20 relative text-center md:text-left mx-auto md:mx-0 px-2 mb-4 md:mb-0">
                
                <p className="text-brand-primary font-mono text-xs md:text-base mb-2 tracking-widest">
                  HELLO, JE SUIS
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-3 md:mb-4 font-display leading-tight">
                  HONORINE GABIAM
                </h2>
                
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center md:justify-start">
                    <Typewriter
                        options={{
                            strings: [
                                'DÉVELOPPEUSE FULLSTACK',
                                'DÉVELOPPEUSE WEB',
                                'DÉVELOPPEUSE MOBILE',
                                'TECH LEAD JUNIOR',
                                'SOLUTION DRIVEN',
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </div>
                
                <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 md:mt-6 mb-6 md:mb-8 max-w-lg font-sans mx-auto md:mx-0 leading-relaxed">
                   J'avance avec curiosité, discipline et énergie : créer, corriger, améliorer… c'est plus qu'un métier, c'est ma manière d'aider les gens et de laisser une trace utile.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start mb-20 md:mb-0">
                  <a href="#projets" className="px-6 md:px-8 py-2.5 md:py-3 bg-brand-primary text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,229,153,0.4)] hover:scale-105 transition transform text-center text-sm md:text-base">
                      VOIR MES TRAVAUX
                  </a>
                  
                  <a 
                    href="/Honorine_GABIAM_Fullstack.pdf" 
                    download="Honorine_GABIAM_Fullstack.pdf"
                    className="group px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white border border-white/20 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition text-center flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                      <Download size={16} className="md:w-[18px] md:h-[18px] group-hover:animate-bounce" />
                      TÉLÉCHARGER CV
                  </a>
                </div>
            </div>

            {/* FOOTER HERO */}
            <div className="text-slate-500 text-[10px] md:text-xs font-mono flex items-center justify-center md:justify-start gap-2 mb-20 md:mb-0">
                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_#00E599]"></span>
                DISPONIBLE POUR FREELANCE
            </div>
        </div>

        {/* CANVAS 3D */}
        <div className="w-full h-[400px] md:h-screen md:absolute md:inset-0 md:z-0">
          <Canvas shadows camera={{ position: [0, 0, 9], fov: 40 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -5, -10]} intensity={0.5} color="#00E599" />
              <Environment preset="city" />
              <Hero3D />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Suspense>
          </Canvas>
        </div>

      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}
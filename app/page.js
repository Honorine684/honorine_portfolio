'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Hero3D from '@/components/canvas/Hero3D';
import About from '@/components/ui/About'; 
import Skills from '@/components/ui/Skills';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';

export default function Home() {
  return (
    <main className="w-full bg-brand-bg relative overflow-x-hidden">
      
      {/* =========================================
          SECTION 1 : HERO (Haut de page)
      ========================================= */}
      <section className="h-screen w-full relative">
        
        {/* COUCHE 3D */}
        <div className="absolute inset-0 z-0">
          <Canvas shadows camera={{ position: [0, 0, 9], fov: 40 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -5, -10]} intensity={0.5} color="#0EA5E9" />
              <Environment preset="city" />
              <Hero3D />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* COUCHE UI HERO */}
        <div className="absolute inset-0 z-10 pointer-events-none p-8 md:p-12 flex flex-col justify-between">
          <header className="flex justify-between items-center w-full animate-fade-in-down">
            <h1 className="text-3xl font-bold font-display text-brand-primary tracking-wider">
              HONORINE<span className="text-brand-text">.DEV</span>
            </h1>
            <nav className="pointer-events-auto hidden md:flex space-x-8 text-sm font-medium text-brand-text">
              <a href="#projets" className="hover:text-brand-primary transition">PROJETS</a>
              <a href="#about" className="hover:text-brand-primary transition">À PROPOS</a>
              <a href="#contact" className="px-6 py-2 border border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition">
                CONTACT
              </a>
            </nav>
          </header>

          <div className="max-w-xl mt-20 md:mt-0 pointer-events-auto z-20 relative">
            <h2 className="text-5xl md:text-7xl font-bold text-brand-text mb-6 font-display leading-tight">
              TISSEUSE DE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                CODE & D&apos;AVENIR
              </span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-lg font-sans">
              Développeuse Fullstack basée au Bénin. Je transforme des idées complexes en expériences web immersives et performantes.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-brand-primary text-white font-bold rounded-lg shadow-lg shadow-brand-primary/30 hover:scale-105 transition transform">
                VOIR MES TRAVAUX
              </button>
              <button className="px-8 py-3 bg-white text-brand-text border border-gray-200 font-bold rounded-lg hover:border-brand-primary hover:text-brand-primary transition">
                CV & SKILLS
              </button>
            </div>
          </div>

          <div className="text-gray-400 text-xs font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            DISPONIBLE POUR FREELANCE
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2 : A PROPOS (Scroll pour voir)
      ========================================= */}
      <About />

       <Skills />

      <Projects />
       <Contact />

    </main>
  );
}
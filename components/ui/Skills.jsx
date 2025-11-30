'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import TechChips from '../canvas/TechChips';
const SKILLS_LIST = [
  "Dart","PHP","Python","Java","Javascript",
  "React", "Next.js", "Symfony", "Laravel", 
  "Flutter", "Vue.js","Firebase", "MongoDB", 
  "GitHub","Sqlite","MySql","Trello","Planner",
  "Figma","Flask","React Native"

];

export default function Skills() {
  return (
    <section className="py-24 w-full bg-transparent relative overflow-hidden">
      
      {/* Titre */}
      <div className="text-center mb-8 relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
          ARSENAL <span className="text-brand-primary">TECHNIQUE</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Survolez l'espace pour explorer la stack.
        </p>
      </div>

      {/* Zone 3D PLUS GRANDE */}
      <div className="h-[500px] md:h-[600px] w-full cursor-grab active:cursor-grabbing relative z-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}> {/* FOV 50 + Distance 12 = Vue large */}
            <fog attach="fog" args={['#050505', 10, 30]} /> {/* Brouillard pour fondre le sol */}
            <TechChips />
            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate
                autoRotateSpeed={0.8}
                maxPolarAngle={Math.PI / 1.8} // Empêche de passer sous le sol
            />
        </Canvas>
      </div>

      {/* 3. LISTE STATIQUE (Badge Style) */}
      <div className="max-w-4xl mx-auto px-6 mt-8 relative z-10">
        <div className="text-center text-[10px] text-slate-500 font-mono mb-6">
            [ STACK TECHNIQUE COMPLÈTE ]
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
            {SKILLS_LIST.map((skill, index) => (
                <motion.span 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 transition cursor-default backdrop-blur-sm"
                >
                    {skill}
                </motion.span>
            ))}
        </div>
      </div>

    </section>
  );
}
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkillsScene from '../canvas/SkillsScene';
import { motion } from 'framer-motion';

// On reprend la liste ici pour l'affichage statique
const SKILLS_LIST = [
  "React", "Next.js", "Symfony", "Laravel", 
  "Flutter", "Python", "Three.js", "Vue.js", 
  "Node.js", "Tailwind CSS", "Git", "Figma"
];

export default function Skills() {
  return (
    <section className="py-24 w-full bg-brand-bg relative overflow-hidden">
      
      {/* 1. Titre */}
      <div className="text-center mb-8 relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-text">
          ARSENAL <span className="text-brand-primary">TECHNIQUE</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Un écosystème complet pour des solutions robustes.
        </p>
      </div>

      {/* 2. Zone 3D (Le "WOW") */}
      {/* J'ai réduit la hauteur à h-[500px] pour que ce soit moins dispersé */}
      <div className="h-[500px] w-full cursor-grab active:cursor-grabbing relative z-0">
        <Canvas camera={{ position: [0, 6, 12], fov: 40 }}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            
            {/* Scène 3D */}
            <SkillsScene />
            
            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                minPolarAngle={Math.PI / 4} 
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
      </div>
      
      {/* 3. Texte d'instruction (Décalé vers le bas avec mt-4) */}
      <div className="text-center text-xs text-brand-primary/60 font-mono animate-pulse mt-2 mb-10">
        ⟳ FAITES TOURNER LE SYSTÈME
      </div>

      {/* 4. LISTE STATIQUE (Pour le recruteur pressé) */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
            {SKILLS_LIST.map((skill, index) => (
                <motion.span 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 shadow-sm hover:border-brand-primary hover:text-brand-primary transition cursor-default"
                >
                    {skill}
                </motion.span>
            ))}
        </div>
      </div>

    </section>
  );
}
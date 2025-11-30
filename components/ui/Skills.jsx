'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import TechChips from '../canvas/TechChips';
// 1. Import du hook de langue
import { useLanguage } from '@/context/LanguageContext';

// Ta liste complète (Les noms propres ne changent pas selon la langue, donc on les garde ici)
const SKILLS_LIST = [
  "Dart", "PHP", "Python", "Java", "Javascript",
  "React", "Next.js", "Symfony", "Laravel", 
  "Flutter", "Vue.js", "Firebase", "MongoDB", 
  "GitHub", "Sqlite", "MySql", "Trello", "Planner",
  "Figma", "Flask", "React Native","Postman"
];

export default function Skills() {
  // 2. Récupération des textes
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 w-full bg-transparent relative overflow-hidden">
      
      {/* Titre Traduit */}
      <div className="text-center mb-8 relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
          {t.skills.title} <span className="text-brand-primary">{t.skills.title_highlight}</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Zone 3D PLUS GRANDE */}
      <div className="h-[500px] md:h-[600px] w-full cursor-grab active:cursor-grabbing relative z-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
            <fog attach="fog" args={['#050505', 10, 30]} />
            <TechChips />
            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate
                autoRotateSpeed={0.8}
                maxPolarAngle={Math.PI / 1.8} 
            />
        </Canvas>
      </div>

      {/* 3. LISTE STATIQUE (Badge Style) */}
      <div className="max-w-4xl mx-auto px-6 mt-8 relative z-10">
        <div className="text-center text-[10px] text-slate-500 font-mono mb-6">
            {t.skills.list_title}
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
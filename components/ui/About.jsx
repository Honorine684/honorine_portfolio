'use client';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  // On définit les couleurs ici pour les appliquer dans l'ordre de la timeline
  const dotColors = [
    "bg-brand-primary",   // Pour le 1er élément (Epitech)
    "bg-brand-secondary", // Pour le 2ème (Dev Mobile)
    "bg-blue-400"         // Pour le 3ème (Licence)
  ];

  return (
    <section id="about" className="py-24 w-full bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Titre de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            {t.about.title} <span className="text-brand-primary">{t.about.title_highlight}</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary rounded-full"></div>
        </motion.div>

        {/* La Timeline */}
        {/* J'ai mis border-white/20 pour que la ligne soit visible sur fond noir */}
        <div className="relative border-l-2 border-white/20 ml-4 md:ml-6 space-y-12">
          
          {t.about.timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Le Point sur la ligne (Couleur dynamique selon l'index) */}
              <span className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-black shadow-sm ${dotColors[index] || "bg-white"}`}></span>
              
              {/* Le Contenu */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <span className="font-mono text-sm text-brand-primary font-bold uppercase tracking-wider">
                  {item.year}
                </span>
                {/* Texte blanc pour le mode sombre */}
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-slate-400 max-w-2xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Petit badge fun à la fin */}
        <motion.div 
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           className="mt-12 ml-4 md:ml-6 pl-8"
        >
            <div className="inline-block px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-sm text-slate-300 font-mono backdrop-blur-sm">
                {t.about.badge}
            </div>
        </motion.div>

      </div>
    </section>
  );
}
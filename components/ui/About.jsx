'use client';
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "Juil 2025 - Présent",
    title: "Epitech Bénin (Coding Academy)",
    description: "Formation intensive et d’excellence en développement web et mobile.",
    color: "bg-brand-primary" // Bleu vif
  },
  {
    year: "Déc 2024 - Mai 2025",
    title: "Développement Mobile (OIF & AFRIKEDUTECH)",
    description: "Spécialisation sur l'écosystème Flutter.",
    color: "bg-brand-secondary" // Bleu clair
  },
  {
    year: "2021 - 2024",
    title: "Licence Système Informatique",
    description: "Acquisition des fondamentaux : Algorithmique,Bases de données,Développement web.",
    color: "bg-blue-300" // Bleu très pâle
  }
];

export default function About() {
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
            MON <span className="text-brand-primary">PARCOURS</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary rounded-full"></div>
        </motion.div>

        {/* La Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Le Point sur la ligne */}
              <span className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-white shadow-sm ${item.color}`}></span>
              
              {/* Le Contenu */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <span className="font-mono text-sm text-brand-primary font-bold uppercase tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-brand-text">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-slate-400 max-w-2xl leading-relaxed">
                {item.description}
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
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-500 font-mono">
                Prête pour le prochain challenge
            </div>
        </motion.div>

      </div>
    </section>
  );
}
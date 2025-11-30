'use client';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const dotColors = [
    "bg-brand-primary",
    "bg-brand-secondary",
    "bg-blue-400"
  ];

  return (
    <section id="about" className="py-24 w-full bg-transparent relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Titre de section - HARMONISÉ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            {t.about.title} <span className="text-brand-primary">{t.about.title_highlight}</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary rounded-full"></div>
        </motion.div>

        {/* La Timeline */}
        <div className="relative border-l-2 border-white/20 ml-4 md:ml-6 space-y-12">
          
          {t.about.timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Le Point sur la ligne */}
              <span className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-black shadow-sm ${dotColors[index] || "bg-white"}`}></span>
              
              {/* Le Contenu - HARMONISÉ */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <span className="font-mono text-xs md:text-sm text-brand-primary font-bold uppercase tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Badge - HARMONISÉ */}
        <motion.div 
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           className="mt-12 ml-4 md:ml-6 pl-8"
        >
            <div className="inline-block px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-xs md:text-sm text-slate-300 font-mono backdrop-blur-sm">
                {t.about.badge}
            </div>
        </motion.div>

      </div>
    </section>
  );
}
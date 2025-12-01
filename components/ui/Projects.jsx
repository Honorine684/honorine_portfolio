"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Smartphone, Layout, Eye, X } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const PROJECT_ASSETS = [
  {
    icon: <Layout size={18} />,
    tags: ["Next.js", "Tailwind"],
    link: "https://pineapple2025.vercel.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/pin.png", 
  },
  {
    icon: <Layers size={18} />,
    tags: ["Symfony", "MySQL", "JS"],
    link: "https://beninjeux.bj",
    github: "https://github.com/Honorine684",
    image: "/projects/benin.png",
  },
  {
    icon: <Code2 size={18} />,
    tags: ["Laravel", "Vue.js", "API"],
    link: "https://yowlhewo.netlify.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/yowl.png",
  },
  {
    icon: <Layout size={18} />,
    tags: ["Vue.js", "JS", "LocalStore"],
    link: "https://postit-app-zeta.vercel.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/post.png",
  },
  {
    icon: <Smartphone size={18} />,
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
    github: "https://github.com/Honorine684",
    image: "/projects/djaye.jpeg",
  },
  {
    icon: <Smartphone size={18} />,
    tags: ["React Native", "API Trello"],
    link: "#",
    github: "https://github.com/Honorine684",
    image: "/projects/tech.jpeg",
  },
];

// --- COMPOSANT MODAL (LIGHTBOX) ---
function ImageModal({ image, onClose }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors z-50"
      >
        <X size={24} />
      </button>

      <motion.img 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={image} 
        alt="Full preview" 
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()} 
      />
    </motion.div>
  );
}

// --- COMPOSANT CARTE ---
function ProjectCard({ project, index, onOpenImage }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_20px_rgba(0,229,153,0.15)] hover:-translate-y-1">
        
        {/* IMAGE */}
        <div className="relative h-44 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay sombre : Visible un peu sur mobile pour la lisibilité, change au survol sur PC */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/60 md:group-hover:bg-black/40 transition-colors duration-300" />
          
          {/* Badge Catégorie */}
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-bold text-brand-primary uppercase tracking-wider z-20">
            {project.icon}
            {project.category}
          </div>

          {/* --- OVERLAY DES BOUTONS (C'est ici qu'on change la logique mobile) --- */}
          {/* 
              Sur Mobile (défaut) : opacity-100 (Toujours visible)
              Sur PC (md:) : opacity-0 group-hover:opacity-100 (Visible seulement au survol)
          */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 z-30 transition-opacity duration-300 backdrop-blur-[1px] md:backdrop-blur-0
                          opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:backdrop-blur-[2px]">
             
             {/* 1. Code */}
             {project.github !== "#" && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-black/80 text-white rounded-full border border-white/20 hover:bg-brand-primary hover:text-black hover:scale-110 transition-all shadow-lg"
                  title="Voir le code"
                >
                  <Github size={20} />
                </a>
             )}

             {/* 2. Site Live */}
             <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white text-black rounded-full hover:bg-brand-primary hover:scale-110 transition-all shadow-lg"
                title="Visiter le site"
              >
                <ExternalLink size={20} />
             </a>

             {/* 3. Voir Image (Lightbox) */}
             <button
                onClick={() => onOpenImage(project.image)}
                className="p-3 bg-black/80 text-white rounded-full border border-white/20 hover:bg-brand-primary hover:text-black hover:scale-110 transition-all shadow-lg"
                title="Agrandir l'image"
             >
                <Eye size={20} />
             </button>

          </div>
        </div>

        {/* CONTENU */}
        <div className="p-4 flex flex-col flex-grow relative z-20 bg-[#0a0a0a]"> {/* Ajout background pour éviter transparence excessive sur mobile */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {project.desc}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] text-slate-500 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// --- SECTION PRINCIPALE ---
export default function Projects() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="projets" className="py-20 w-full bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
                {t.projects.title} <span className="text-brand-primary">{t.projects.title_highlight}</span>
              </h2>
              <div className="h-1 w-16 bg-brand-primary mt-2 rounded-full" />
            </div>
            <p className="text-slate-500 text-xs md:text-sm font-mono text-right hidden md:block">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.list.map((projectData, index) => {
              const fullProject = { ...projectData, ...PROJECT_ASSETS[index] };
              return (
                <ProjectCard 
                    key={index} 
                    project={fullProject} 
                    index={index} 
                    onOpenImage={setSelectedImage} 
                />
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/Honorine684"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-brand-primary hover:text-black hover:border-brand-primary text-white rounded-lg font-bold transition-all duration-300 group text-sm"
            >
              <Github size={18} className="group-hover:rotate-12 transition-transform" />
              {t.projects.btn_github}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
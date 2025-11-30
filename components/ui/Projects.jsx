"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// --- DATA ---
const PROJECTS = [
  {
    title: "Pineapple Movies",
    category: "Web App",
    desc: "Cinémathèque interactive connectée à l'API TMDB. Recherche instantanée et UI fluide.",
    tags: ["Next.js", "Tailwind"],
    link: "https://pineapple2025.vercel.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/pin.png", 
  },
  {
    title: "Benin Jeux",
    category: "Platform",
    desc: "Plateforme éducative de QCM avec système de paiement et monétisation intégré.",
    tags: ["Symfony", "MySQL", "Javascript"],
    link: "https://beninjeux.bj",
    github: "https://github.com/Honorine684",
    image: "/projects/benin.png",
  },
  {
    title: "YOWL",
    category: "Social",
    desc: "Espace de commentaires décentralisé. Une approche moderne de l'expression libre.",
    tags: ["Laravel", "Vue.js", "API"],
    link: "https://yowlhewo.netlify.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/yowl.png",
  },
  {
    title: "Post-it App",
    category: "Tool",
    desc: "Gestionnaire de tâches minimaliste avec sauvegarde locale et Drag & Drop.",
    tags: ["Vue.js", "JS", "LocalStore"],
    link: "https://postit-app-zeta.vercel.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/post.png",
  },
  {
    title: "DJAYE",
    category: "Mobile & AI",
    desc: "Assistant personnel intelligent sur mobile. L'IA au service du quotidien.",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
    github: "https://github.com/Honorine684",
    image: "/projects/djaye.jpeg",
  },
  {
    title: "TrellTech",
    category: "Mobile",
    desc: "Clone fonctionnel de Trello sur mobile avec gestion d'API et synchronisation.",
    tags: ["React Native", "API Trello"],
    link: "#",
    github: "https://github.com/Honorine684",
    image: "/projects/tech.jpeg",
  },
];

// --- COMPOSANT CARTE HOLO ---
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full flex flex-col" // flex flex-col pour assurer la hauteur
    >
      {/* 1. Le Conteneur "Verre" */}
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(0,229,153,0.15)] flex flex-col">
        
        {/* 2. Effet de "Scan" lumineux au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine z-20 pointer-events-none" />

        {/* 3. Header IMAGE (C'est ici que ça change) */}
        {/* J'ai augmenté la hauteur à h-48 pour bien voir l'image */}
        <div className="h-40 w-full relative overflow-hidden group">
            
            {/* L'Image réelle */}
            <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay coloré (filtre) pour garder l'harmonie sombre */}
            {/* Disparait légèrement au survol pour révéler les vraies couleurs de l'image */}
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-multiply`} />
            
            {/* Bruit de texture (Noise) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* 4. Contenu */}
        <div className="p-6 flex flex-col flex-grow relative z-10 border-t border-white/5">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-1 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Liens (Github / Live) */}
            <div className="flex gap-3">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-slate-400 hover:text-white transition hover:scale-110 bg-white/5 p-2 rounded-full"
                >
                  <Github size={18} />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                className="text-slate-400 hover:text-brand-primary transition hover:scale-110 bg-white/5 p-2 rounded-full"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.desc}
          </p>

          {/* Tags Tech (En bas) */}
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-slate-300 font-mono group-hover:border-brand-primary/30 transition-colors"
              >
                {tag}
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
  return (
    <section id="projets" className="py-24 w-full bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre Section */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              PORTFOLIO <span className="text-brand-primary">SÉLECTIF</span>
            </h2>
            <div className="h-1 w-20 bg-brand-primary mt-4 mx-auto md:mx-0 rounded-full" />
          </div>
          <p className="hidden md:block text-slate-400 text-sm max-w-xs text-right font-mono">
            // COLLECTION DE PROJETS
            <br />
            // 2024 - 2025 EDITION
          </p>
        </div>

        {/* Grille Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bouton GitHub Centré */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Honorine684"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 hover:bg-brand-primary hover:text-black hover:border-brand-primary text-white rounded-lg font-bold transition-all duration-300 group"
          >
            <Github
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            EXPLORER TOUT LE REPO
          </a>
        </div>
      </div>
    </section>
  );
}
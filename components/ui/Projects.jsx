"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Smartphone, Layout } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

// L'ordre doit correspondre exactement à l'ordre dans translations.js
const PROJECT_ASSETS = [
  {
    icon: <Layout size={20} />,
    tags: ["Next.js", "Tailwind"],
    link: "https://pineapple2025.vercel.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/pin.png", 
  },
  {
    icon: <Layers size={20} />,
    tags: ["Symfony", "MySQL", "Javascript"],
    link: "https://beninjeux.bj",
    github: "https://github.com/Honorine684",
    image: "/projects/benin.png",
  },
  {
    icon: <Code2 size={20} />,
    tags: ["Laravel", "Vue.js", "API"],
    link: "https://yowlhewo.netlify.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/yowl.png",
  },
  {
    icon: <Layout size={20} />,
    tags: ["Vue.js", "JS", "LocalStore"],
    link: "https://postit-app-zeta.vercel.app/",
    github: "https://github.com/Honorine684",
    image: "/projects/post.png",
  },
  {
    icon: <Smartphone size={20} />,
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
    github: "https://github.com/Honorine684",
    image: "/projects/djaye.jpeg",
  },
  {
    icon: <Smartphone size={20} />,
    tags: ["React Native", "API Trello"],
    link: "#",
    github: "https://github.com/Honorine684",
    image: "/projects/tech.jpeg",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full flex flex-col"
    >
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(0,229,153,0.15)] flex flex-col">
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine z-20 pointer-events-none" />

        <div className="h-40 w-full relative overflow-hidden group">
            <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Icône au centre survol */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
               <div className="bg-black/50 p-3 rounded-full text-white backdrop-blur-sm">
                 {project.icon}
               </div>
            </div>

            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-multiply`} />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

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

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projets" className="py-24 w-full bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Titre Section */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white">
              {t.projects.title} <span className="text-brand-primary">{t.projects.title_highlight}</span>
            </h2>
            <div className="h-1 w-20 bg-brand-primary mt-4 mx-auto md:mx-0 rounded-full" />
          </div>
          <p className="hidden md:block text-slate-400 text-sm max-w-xs text-right font-mono">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 
             ICI LA MAGIE OPÈRE :
             On mappe sur la liste traduite (t.projects.list)
             Et on fusionne avec les assets statiques (PROJECT_ASSETS) basés sur l'index
          */}
          {t.projects.list.map((projectData, index) => {
             // Fusion des données textuelles et visuelles
             const fullProject = { ...projectData, ...PROJECT_ASSETS[index] };
             
             return <ProjectCard key={index} project={fullProject} index={index} />;
          })}
        </div>

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
            {t.projects.btn_github}
          </a>
        </div>
      </div>
    </section>
  );
}
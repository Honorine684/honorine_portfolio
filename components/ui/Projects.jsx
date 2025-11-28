'use client';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// --- DONNÉES DES PROJETS ---
const PROJECTS = [
  {
    title: "Pineapple",
    desc: "Site d'appréciation de films connecté à l'API TMDB. Interface fluide et recherche instantanée.",
    tags: ["Next.js", "React", "TMDB API", "Tailwind"],
    image: "https://placehold.co/600x400/0EA5E9/ffffff?text=Pineapple+Movies", // Placeholder Bleu
    link: "https://pineapple2025.vercel.app/",
    github: "https://github.com/Honorine684" // J'ai mis ton profil par défaut si pas de lien spécifique
  },
  {
    title: "Benin Jeux",
    desc: "Plateforme de QCM avec système de monétisation. Une solution complète pour l'éducation ludique.",
    tags: ["Symfony", "PHP", "MySQL", "Stripe"],
    image: "https://placehold.co/600x400/10B981/ffffff?text=Benin+Jeux", // Placeholder Vert
    link: "https://beninjeux.bj/comming",
    github: "#"
  },
  {
    title: "YOWL",
    desc: "Plateforme de commentaires décentralisés. Un espace d'expression libre et moderne.",
    tags: ["Laravel", "Vue.js", "API REST"],
    image: "https://placehold.co/600x400/E8112D/ffffff?text=YOWL", // Placeholder Rouge
    link: "https://yowlhewo.netlify.app/",
    github: "#"
  },
  {
    title: "Post-it App",
    desc: "Application de gestion de tâches intuitive. Drag & drop et sauvegarde locale.",
    tags: ["Vue.js", "JavaScript", "Local Storage"],
    image: "https://placehold.co/600x400/F59E0B/ffffff?text=Post-it+App", // Placeholder Jaune
    link: "https://postit-app-zeta.vercel.app/",
    github: "#"
  },
  {
    title: "DJAYE",
    desc: "Application mobile IA innovante pour l'assistance personnelle.",
    tags: ["Flutter", "Dart", "Firebase", "AI"],
    image: "https://placehold.co/600x400/8B5CF6/ffffff?text=DJAYE+Mobile", // Placeholder Violet
    link: "#",
    github: "#"
  }
];

// --- COMPOSANT CARTE 3D (TILT) ---
function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Effet ressort pour la douceur
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Transformation en rotation 3D
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-100 overflow-hidden transition-shadow duration-300"
      >
        {/* Image */}
        <div className="h-48 overflow-hidden bg-slate-100 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Contenu */}
        <div className="p-6 relative z-10 bg-white" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold font-display text-brand-text group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
                {project.github !== "#" && (
                    <a href={project.github} target="_blank" className="text-slate-400 hover:text-brand-text transition">
                        <Github size={20} />
                    </a>
                )}
                <a href={project.link} target="_blank" className="text-slate-400 hover:text-brand-primary transition">
                    <ExternalLink size={20} />
                </a>
            </div>
          </div>
          
          <p className="text-slate-500 text-sm mb-6 line-clamp-3">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- COMPOSANT PRINCIPAL ---
export default function Projects() {
  return (
    <section id="projets" className="py-32 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-text">
            PORTFOLIO <span className="text-brand-primary">INTERACTIF</span>
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Une sélection de mes travaux récents. Survolez les cartes pour l'effet 3D.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bouton GitHub global */}
        <div className="text-center mt-16">
            <a 
                href="https://github.com/Honorine684" 
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-text text-white rounded-full font-bold hover:bg-brand-primary transition-colors shadow-lg"
            >
                <Github size={20} />
                VOIR PLUS SUR GITHUB
            </a>
        </div>

      </div>
    </section>
  );
}
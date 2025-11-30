'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Hand } from 'lucide-react';

const SECTIONS = ['hero', 'about', 'skills', 'projets', 'contact'];

export default function Mobile3DUI() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Zone plus permissive
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9] // Plusieurs seuils
    };

    const observerCallback = (entries) => {
      // Trouve l'entrée la plus visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Prend celle avec le plus grand ratio d'intersection
        const mostVisible = visibleEntries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hasSeenTooltip = sessionStorage.getItem('hasSeen3DTooltip');
    if (!hasSeenTooltip) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
        sessionStorage.setItem('hasSeen3DTooltip', 'true');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Force le scroll même si la section est déjà un peu visible
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Force la mise à jour de activeSection après un court délai
      setTimeout(() => {
        setActiveSection(id);
      }, 500);
    }
  };

  const currentIndex = SECTIONS.indexOf(activeSection);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 md:hidden flex flex-col justify-between p-4 h-full">
      
      <AnimatePresence>
        {showTooltip && activeSection === 'hero' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-brand-primary/30 flex items-center gap-2 shadow-lg pointer-events-auto whitespace-nowrap"
          >
            <Hand size={14} className="animate-pulse text-brand-primary" />
            <span>Swipe pour défiler</span>
            <button 
                onClick={() => setShowTooltip(false)} 
                className="ml-2 font-bold text-gray-400 hover:text-white"
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLÈCHE HAUT */}
      <AnimatePresence>
        {prevSection && (
          <motion.button
            key={`up-${prevSection}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => handleScrollTo(prevSection)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-brand-primary/20 backdrop-blur-md rounded-full border border-white/20 text-white pointer-events-auto transition active:scale-95 shadow-lg"
            aria-label="Section précédente"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FLÈCHE BAS */}
      <AnimatePresence>
        {nextSection && (
          <motion.button
            key={`down-${nextSection}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={() => handleScrollTo(nextSection)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-brand-primary/20 backdrop-blur-md rounded-full border border-white/20 text-white pointer-events-auto transition active:scale-95 shadow-lg"
            aria-label="Section suivante"
          >
            <ChevronDown size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* INDICATEUR DE SECTIONS */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
         {SECTIONS.map((sec) => (
             <div 
                key={sec} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeSection === sec 
                    ? 'bg-brand-primary scale-150 shadow-[0_0_10px_rgba(0,229,153,0.8)]' 
                    : 'bg-white/20'
                }`}
             />
         ))}
      </div>

    </div>
  );
}
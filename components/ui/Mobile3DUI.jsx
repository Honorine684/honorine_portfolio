'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronsDown, Hand } from 'lucide-react';

export default function Mobile3DUI({ nextSectionId, prevSectionId }) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Gestion du tooltip : Afficher une seule fois par session
  useEffect(() => {
    const hasSeenTooltip = sessionStorage.getItem('hasSeen3DTooltip');
    if (!hasSeenTooltip) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
        sessionStorage.setItem('hasSeen3DTooltip', 'true');
      }, 7000); // Disparaît après 7s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-20 md:hidden flex flex-col justify-between p-4">
      
      {/* 1. TOOLTIP D'AIDE */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="self-center mt-12 bg-black/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-lg pointer-events-auto"
          >
            <Hand size={14} className="animate-pulse text-brand-primary" />
            <span>Swipe vertical pour défiler</span>
            <button 
                onClick={() => setShowTooltip(false)} 
                className="ml-2 font-bold text-gray-400 hover:text-white"
                aria-label="Fermer l'aide"
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLÈCHES DE NAVIGATION LATÉRALES (Discrètes) */}
      {prevSectionId && (
        <button
          onClick={() => handleScrollTo(prevSectionId)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/10 text-white/70 pointer-events-auto transition active:scale-95"
          aria-label="Section précédente"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {nextSectionId && (
        <button
          onClick={() => handleScrollTo(nextSectionId)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/10 text-white/70 pointer-events-auto transition active:scale-95"
          aria-label="Section suivante"
        >
          <ChevronDown size={24} />
        </button>
      )}

      {/* 3. BOUTON "PASSER LA SECTION" (Bas de page) */}
      {nextSectionId && (
        <div className="w-full flex justify-center mb-4 pointer-events-auto">
          <button
            onClick={() => handleScrollTo(nextSectionId)}
            className="flex items-center gap-2 px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all group"
            aria-label="Passer cette section"
          >
            <span>Passer</span>
            <ChevronsDown size={16} className="text-brand-primary group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
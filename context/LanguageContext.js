// context/LanguageContext.js
'use client';
import { createContext, useContext, useState } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr'); // Langue par défaut

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = translations[lang]; // On récupère l'objet de traduction correspondant

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
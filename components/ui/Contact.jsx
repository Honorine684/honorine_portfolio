'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
// 1. IMPORT DU HOOK DE LANGUE
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const [status, setStatus] = useState(''); 
  // 2. RÉCUPÉRATION DES TEXTES ET DE LA LANGUE
  const { t, lang } = useLanguage(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset(); 
        setTimeout(() => setStatus(''), 5000); 
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 w-full bg-transparent relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* COLONNE GAUCHE : INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* TITRE TRADUIT */}
            <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-text mb-4 md:mb-6">
              {t.contact.title} <br/>
              <span className="text-brand-primary">{t.contact.title_highlight}</span>
            </h2>
            <p className="text-white text-base md:text-lg mb-8 md:mb-10 max-w-md">
              {t.contact.desc}
            </p>

            <div className="space-y-4 md:space-y-6">
              
              {/* Email */}
              <a href="mailto:honorine.gabiam@epitech.eu" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 border-white/10 hover:bg-brand-primary/10 rounded-xl transition group border border-slate-100">
                <div className="p-2 md:p-3 bg-white rounded-full text-brand-primary shadow-sm group-hover:scale-110 transition shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contact.infos.email}</p>
                  <p className="text-sm md:text-base text-brand-text font-medium group-hover:text-brand-primary transition truncate">honorine.gabiam@epitech.eu</p>
                </div>
              </a>

              {/* Téléphone */}
              <a href="tel:+2290165435050" className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 border-white/10 hover:bg-brand-primary/10 rounded-xl transition group border border-slate-100">
                <div className="p-2 md:p-3 bg-white rounded-full text-brand-primary shadow-sm group-hover:scale-110 transition shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contact.infos.phone}</p>
                  <p className="text-sm md:text-base text-brand-text font-medium group-hover:text-brand-primary transition">+229 01 65 43 50 50</p>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 border-white/10 rounded-xl border border-slate-100">
                <div className="p-2 md:p-3 bg-white rounded-full text-brand-text shadow-sm shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contact.infos.location}</p>
                  <p className="text-sm md:text-base text-brand-text font-medium">{t.contact.infos.location_val}</p>
                </div>
              </div>

            </div>

            {/* Réseaux Sociaux */}
            <div className="flex gap-4 mt-8 md:mt-10">
              <a href="https://github.com/Honorine684" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-text text-slate-400 rounded-full hover:bg-brand-primary transition hover:-translate-y-1">
                <Github size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://linkedin.com/in/honorine-gabiam-a22679279" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0077B5] text-slate-400 rounded-full hover:bg-brand-primary transition hover:-translate-y-1">
                <Linkedin size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
          </motion.div>


          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl shadow-xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              
              <input type="hidden" name="access_key" value="f5949c9b-c5b2-4c5e-bd07-2f669e02f32b" />
              <input type="hidden" name="redirect" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    name="nom"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition text-sm md:text-base" 
                    placeholder={t.contact.form.placeholder_name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">{t.contact.form.firstname}</label>
                  <input 
                    type="text" 
                    name="prenom"
                    required
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition text-sm md:text-base" 
                    placeholder={t.contact.form.placeholder_firstname}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition text-sm md:text-base" 
                  placeholder={t.contact.form.placeholder_email}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white">{t.contact.form.message}</label>
                <textarea 
                  rows="4"
                  name="message"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition resize-none text-sm md:text-base" 
                  placeholder={t.contact.form.placeholder_message}
                ></textarea>
              </div>

              {/* BOUTON AVEC ÉTATS */}
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full py-3 md:py-4 font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm md:text-base
                  ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-primary hover:shadow-brand-primary/50 hover:scale-[1.02]'}
                  ${status === 'success' ? 'bg-green-500' : ''}
                  ${status === 'error' ? 'bg-red-500' : ''}
                  text-black
                `}
              >
                {status === 'loading' && (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    {lang === 'fr' ? 'Envoi...' : 'Sending...'}
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    {lang === 'fr' ? 'Envoyé !' : 'Sent!'}
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={20} />
                    {lang === 'fr' ? 'Erreur' : 'Error'}
                  </>
                )}
                {!status && (
                  <>
                    <Send size={18} className="md:w-5 md:h-5" />
                    {t.contact.form.btn}
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        {/* FOOTER TRADUIT */}
        <div className="mt-12 md:mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] md:text-sm font-mono">
          <p>{t.contact.footer}</p>
        </div>

      </div>
    </section>
  );
}
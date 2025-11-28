'use client';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full bg-white relative overflow-hidden">
      
      {/* Cercle décoratif en arrière-plan */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLONNE GAUCHE : INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-text mb-6">
              INITIALISER LA <br/>
              <span className="text-brand-primary">CONNEXION</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-md">
              Vous avez un projet innovant ? Une idée à concrétiser ?
              Discutons-en et tissons l'avenir ensemble.
            </p>

            <div className="space-y-6">
              
              {/* Email */}
              <a href="mailto:honorine.gabiam@epitech.eu" className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-brand-primary/10 rounded-xl transition group border border-slate-100">
                <div className="p-3 bg-white rounded-full text-brand-primary shadow-sm group-hover:scale-110 transition">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-brand-text font-medium group-hover:text-brand-primary transition">honorine.gabiam@epitech.eu</p>
                </div>
              </a>

              {/* Téléphone */}
              <a href="tel:+2290165435050" className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-brand-primary/10 rounded-xl transition group border border-slate-100">
                <div className="p-3 bg-white rounded-full text-brand-primary shadow-sm group-hover:scale-110 transition">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Téléphone</p>
                  <p className="text-brand-text font-medium group-hover:text-brand-primary transition">+229 01 65 43 50 50</p>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="p-3 bg-white rounded-full text-brand-text shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Localisation</p>
                  <p className="text-brand-text font-medium">Cotonou, Bénin (Disponible Remote)</p>
                </div>
              </div>

            </div>

            {/* Réseaux Sociaux */}
            <div className="flex gap-4 mt-10">
              <a href="https://github.com/Honorine684" target="_blank" className="p-3 bg-brand-text text-white rounded-full hover:bg-brand-primary transition hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/honorine-gabiam-a22679279" target="_blank" className="p-3 bg-[#0077B5] text-white rounded-full hover:bg-brand-primary transition hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>


          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-bg p-8 md:p-10 rounded-3xl shadow-2xl relative border border-slate-200"
          >
            <form className="space-y-6" action="mailto:honorine.gabiam@epitech.eu" method="post" encType="text/plain">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nom</label>
                  <input type="text" className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Prénom</label>
                  <input type="text" className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="Votre prénom" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input type="email" className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition" placeholder="exemple@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows="4" className="w-full p-3 rounded-lg bg-white border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition resize-none" placeholder="Parlons de votre projet..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:shadow-brand-primary/50 hover:scale-[1.02] transition flex items-center justify-center gap-2">
                <Send size={20} />
                ENVOYER LE MESSAGE
              </button>
            </form>
          </motion.div>

        </div>

        {/* FOOTER */}
        <div className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm font-mono">
          <p>© 2025 HONORINE GABIAM. DEVELOPED WITH NEXT.JS & THREE.JS.</p>
        </div>

      </div>
    </section>
  );
}
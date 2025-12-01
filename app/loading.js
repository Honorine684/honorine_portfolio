export default function Loading() {
  return (
    <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center z-50">
      {/* Cercle qui tourne */}
      <div className="w-16 h-16 border-4 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin mb-4"></div>
      
      {/* Texte clignotant */}
      <div className="text-brand-primary font-mono text-sm animate-pulse tracking-widest">
        CHARGEMENT DU SYSTÈME...
      </div>
    </div>
  );
}
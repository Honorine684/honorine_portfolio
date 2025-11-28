export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold font-display text-brand-primary mb-4">
        HONORINE
      </h1>
      <p className="text-xl text-brand-text">
        Test du thème : <span className="text-brand-secondary font-bold">Light Blue</span>
      </p>
      <button className="mt-8 px-6 py-3 bg-brand-primary text-white rounded-full shadow-lg shadow-brand-primary/30 hover:scale-105 transition">
        Bouton Test
      </button>
    </main>
  );
}
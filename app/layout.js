import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

// Police pour le texte courant (très lisible)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// Police futuriste pour les titres
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron" 
});

export const metadata = {
  title: "Honorine GABIAM | Fullstack Dev",
  description: "Portfolio interactif 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-brand-bg text-brand-text`}>
        {children}
      </body>
    </html>
  );
}
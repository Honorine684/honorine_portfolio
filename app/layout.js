import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
// 1. IMPORTER LE PROVIDER
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
import Logo from '@/components/ui/Logo';

export const metadata = {
  metadataBase: new URL('https://honorine-portfolio.vercel.app/'), // Remplace par ton URL Vercel finale
  title: {
    default: "Honorine GABIAM | Développeuse Fullstack & Tech Lead",
    template: "%s | Honorine GABIAM"
  },

  description: "Portfolio de Dédé Honorine GABIAM, experte en développement Web (React, Next.js, Symfony) et Mobile (Flutter). Découvrez mes projets 3D immersifs.",
  keywords: ["Développeuse", "Fullstack", "Bénin", "React", "Next.js", "Flutter", "Three.js", "Freelance"],
  authors: [{ name: "Honorine GABIAM" }],
  creator: "Honorine GABIAM",
    icons: {
    icon: '/favi.png', 
    apple: '/favi.png',
    shortcut: '/favi.png',
  },
  openGraph: {
    title: "Honorine GABIAM | Développeuse Fullstack",
    description: "Portfolio immersif 3D. Création d'architectures web robustes et d'interfaces modernes.",

    url: 'https://honorine-portfolio.vercel.app/',
    siteName: 'Honorine GABIAM Portfolio',
    images: [
      {
        url: '/og-image.png', // Tu devras créer une image de couverture et la mettre dans public/
        width: 1200,
        height: 630,
        alt: 'Aperçu du portfolio de Honorine Gabiam',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {/* 2. ENVELOPPER TOUT LE SITE */}
        <LanguageProvider>
          {children}
          <Analytics/>
        </LanguageProvider>
      </body>
    </html>
  );
}
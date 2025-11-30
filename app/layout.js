import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
// 1. IMPORTER LE PROVIDER
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "Honorine GABIAM | Fullstack Dev",
  description: "Portfolio interactif 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {/* 2. ENVELOPPER TOUT LE SITE */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
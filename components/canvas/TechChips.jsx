'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, Sparkles, Stars, Grid } from '@react-three/drei'; // Ajout de Grid et Stars
import * as THREE from 'three';
import useMobile from '@/hooks/useMobile';

const SKILLS = [
  { name: "Dart", color: "#00B4AB", bg: "#1a1a1a" },
  { name: "PHP", color: "#777BB4", bg: "#1a1a1a" },
  { name: "Python", color: "#FFE873", bg: "#306998" },
  { name: "Java", color: "#f89820", bg: "#1a1a1a" },
  { name: "Javascript", color: "#F7DF1E", bg: "#1a1a1a" },
  { name: "React", color: "#61DAFB", bg: "#20232a" },
  { name: "Next.js", color: "#ffffff", bg: "#000000" },
  { name: "Symfony", color: "#ffffff", bg: "#1a1a1a" },
  { name: "Laravel", color: "#FF2D20", bg: "#1a1a1a" },
  { name: "Flutter", color: "#42A5F5", bg: "#1a1a1a" },
  { name: "Vue.js", color: "#4FC08D", bg: "#1a1a1a" },
  { name: "Firebase", color: "#FFCA28", bg: "#1a1a1a" },
  { name: "MongoDB", color: "#47A248", bg: "#1a1a1a" },
  { name: "GitHub", color: "#181717", bg: "#ffffff" },
  { name: "Sqlite", color: "#003B57", bg: "#1a1a1a" },
  { name: "MySql", color: "#4479A1", bg: "#1a1a1a" },
  { name: "Trello", color: "#0079BF", bg: "#1a1a1a" },
  { name: "Planner", color: "#0078D4", bg: "#1a1a1a" },
  { name: "Figma", color: "#F24E1E", bg: "#1a1a1a" },
  { name: "Flask", color: "#000000", bg: "#ffffff" },
  { name: "React Native", color: "#61DAFB", bg: "#20232a" }
];


function Chip({ skill, index, isMobile }) {
  const [hovered, setHover] = useState(false);
  
  // On écarte BEAUCOUP plus les positions
  const position = useMemo(() => {
    // Sur mobile on écarte un peu moins en largeur mais plus en hauteur
    const xSpread = isMobile ? 5 : 12; // Largeur (Était 3)
    const ySpread = isMobile ? 6 : 4;  // Hauteur (Était 3)
    const zSpread = 6;                 // Profondeur
    
    return [
      (Math.random() - 0.5) * xSpread,
      (Math.random() - 0.5) * ySpread,
      (Math.random() - 0.5) * zSpread
    ];
  }, [isMobile]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}> {/* Rotation réduite pour lisibilité */}
      <group position={position}>
        <Html 
            transform 
            distanceFactor={6} // Augmenté pour qu'ils paraissent plus gros de loin
            style={{ pointerEvents: 'none' }}
        >
            <div 
                className={`
                    px-5 py-3 rounded-xl border-2 font-bold text-center uppercase tracking-widest
                    transition-all duration-300 backdrop-blur-md
                `}
                style={{
                    backgroundColor: hovered ? skill.color : 'rgba(0,0,0,0.8)', // Fond noir semi-transparent par défaut
                    borderColor: skill.color,
                    color: hovered ? '#000' : skill.color, // Texte noir si survolé (contraste)
                    boxShadow: hovered ? `0 0 20px ${skill.color}` : `0 0 5px ${skill.color}40`,
                    minWidth: '120px',
                    transform: hovered ? 'scale(1.1)' : 'scale(1)',
                    fontSize: '14px'
                }}
            >
                {skill.name}
            </div>
        </Html>
        
        {/* Hitbox pour la souris */}
        <mesh 
            visible={false} 
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => setHover(false)}
        >
            <planeGeometry args={[3, 1.5]} />
        </mesh>
      </group>
    </Float>
  );
}

export default function TechChips() {
  const isMobile = useMobile();

  return (
    <group>
      {/* 1. ÉTOILES DE FOND (Profondeur) */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      {/* 2. GRILLE CYBER AU SOL (Donne une échelle) */}
      <Grid 
        position={[0, -4, 0]} 
        args={[20, 20]} 
        cellSize={1} 
        cellThickness={1} 
        cellColor="#00E599" 
        sectionSize={5} 
        sectionThickness={1.5} 
        sectionColor="#00E599" 
        fadeDistance={15} 
        fadeStrength={1}
      />

      {/* 3. PARTICULES FLOTTANTES */}
      <Sparkles count={80} scale={15} size={3} speed={0.4} opacity={0.5} color="#00E599" />
      
      {/* 4. LES PUCES */}
      {SKILLS.map((skill, i) => (
        <Chip key={i} index={i} skill={skill} isMobile={isMobile} />
      ))}
    </group>
  );
}
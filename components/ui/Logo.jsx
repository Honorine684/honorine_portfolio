'use client';

export default function Logo({ className = "w-10 h-10", color = "#00E599" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Cercle extérieur subtil (Optionnel, pour l'assise) */}
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1" opacity="0.2" />
      
      {/* La Lettre G stylisée "Line Art" */}
      {/* Ce tracé part du haut, courbe comme un front, descend comme un menton */}
      {/* et remonte pour former la barre du G, rappelant un profil abstrait */}
      <path 
        d="M 65 35 
           C 55 25, 35 25, 25 40 
           C 15 55, 15 75, 35 85 
           C 55 95, 75 80, 75 60 
           L 55 60" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Petit accent "Tech" (un point ou une puce) */}
      <circle cx="55" cy="60" r="3" fill={color} />
    </svg>
  );
}
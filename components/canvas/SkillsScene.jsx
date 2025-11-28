'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

// Tes compétences exactes
const SKILLS = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "Symfony", color: "#000000" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "Flutter", color: "#02569B" },
  { name: "Python", color: "#3776AB" },
  { name: "Three.js", color: "#000000" },
  { name: "Vue.js", color: "#4FC08D" },
];

function Electron({ radius, speed, color, name, offset }) {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    // Formule mathématique pour l'orbite (cercle horizontal)
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    // Petit mouvement vertical pour faire "vivant"
    ref.current.position.y = Math.sin(t * 2) * 0.2;
  });

  return (
    <group ref={ref}>
      {/* La sphère de la compétence */}
      <Sphere args={[0.25, 32, 32]}>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </Sphere>
      
      {/* Le texte au-dessus */}
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.25}
        color="#1E293B" // Gris foncé pour lisibilité
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

function AtomPath({ radius }) {
  // Dessine le trait fin de l'orbite
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * 2 * Math.PI;
      p.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return p;
  }, [radius]);

  return (
    <Line worldUnits points={points} color="#CBD5E1" lineWidth={1} transparent opacity={0.3} />
  );
}

export default function SkillsScene() {
  const groupRef = useRef();

  useFrame((state) => {
    // Rotation lente de tout le système
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef} rotation-x={0.2} position-y={1}>
      {/* NOYAU CENTRAL (Cœur Tech) */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={0.5} />
      </Sphere>

      {/* GÉNÉRATION DES ORBITES */}
      {SKILLS.map((skill, i) => {
        const radius = 2.5 + (i * 0.5); // On écarte chaque orbite
        return (
            <group key={i}>
                <AtomPath radius={radius} />
                <Electron 
                    radius={radius} 
                    speed={i % 2 === 0 ? 0.5 : -0.5} // Une sur deux tourne dans l'autre sens
                    color={skill.color} 
                    name={skill.name}
                    offset={i * 2} // Décalage de départ
                />
            </group>
        );
      })}
    </group>
  );
}
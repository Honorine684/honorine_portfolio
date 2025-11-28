'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3D() {
  const groupRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Flottement doux vertical
    groupRef.current.position.y = Math.sin(t / 2) / 10 - 1; 
    
    // ROTATION CORRIGÉE :
    // On force une rotation positive pour qu'il nous fasse face
    // 0.3 rad = il regarde légèrement vers la gauche (vers ton texte HTML)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y, 
      hovered ? 0.6 : 0.3 + (Math.sin(t / 4) / 20), 
      0.1
    );
  });

  return (
    // Position x=3 (à droite), rotation-y initial pour être sûr
    <group ref={groupRef} position={[3, -1, 0]} rotation-y={0.3}
           onPointerOver={() => setHover(true)} 
           onPointerOut={() => setHover(false)}>
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group rotation-x={-0.25}> {/* Légère inclinaison vers le haut pour voir le clavier */}
            
            {/* 1. Base (Clavier) */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3.2, 0.2, 2.2]} />
                <meshStandardMaterial color="#F8FAFC" roughness={0.3} metalness={0.5} />
            </mesh>

            {/* 2. Dos Écran (Coque Bleue) */}
            <mesh position={[0, 1.2, -1.05]} rotation-x={0.25}>
                <boxGeometry args={[3.2, 2.2, 0.1]} />
                <meshStandardMaterial color="#0EA5E9" roughness={0.2} metalness={0.2} />
            </mesh>

            {/* 3. Écran Noir (Avancé à z=-0.9 pour ne pas être caché !) */}
            <mesh position={[0, 1.2, -0.9]} rotation-x={0.25}>
                <planeGeometry args={[3, 2]} />
                <meshStandardMaterial color="#020617" roughness={0.2} />
            </mesh>
            
            {/* 4. Contenu Écran (Code abstrait) */}
            <group position={[-1.2, 1.8, -0.89]} rotation-x={0.25} scale={0.8}>
                 <mesh position={[1.8, 0.2, 0]}>
                    <planeGeometry args={[3.5, 0.2]} />
                    <meshBasicMaterial color="#1E293B" />
                 </mesh>
                 <mesh position={[0.5, -0.3, 0]}>
                    <planeGeometry args={[0.8, 0.1]} />
                    <meshBasicMaterial color="#38BDF8" />
                 </mesh>
                 <mesh position={[0.5, -0.5, 0]}>
                    <planeGeometry args={[1.2, 0.1]} />
                    <meshBasicMaterial color="#94A3B8" />
                 </mesh>
                 <mesh position={[0.5, -0.7, 0]}>
                    <planeGeometry args={[1.0, 0.1]} />
                    <meshBasicMaterial color="#0EA5E9" />
                 </mesh>
            </group>
        </group>
      </Float>

      {/* --- TEXTE 3D (Badge) --- */}
      {/* Repositionné pour être plus proche de l'ordinateur */}
      <group position={[-1.2, 0.5, 1.5]} rotation-y={0.2}>
        <mesh position={[0, 0, -0.06]}>
            <boxGeometry args={[2, 0.5, 0.1]} />
            <meshStandardMaterial color="#0F172A" />
        </mesh>
        <Text
            position={[0, 0, 0]} 
            fontSize={0.25}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
        >
            FULLSTACK DEV
        </Text>
      </group>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#0EA5E9"/>
    </group>
  );
}
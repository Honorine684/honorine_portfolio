'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, ContactShadows, Cylinder, Sphere, RoundedBox, Sparkles, Box } from '@react-three/drei';
import * as THREE from 'three';
import useMobile from '@/hooks/useMobile';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '@/context/LanguageContext';

function AvatarPro() {
  const group = useRef();
  const head = useRef();
  const leftArm = useRef();
  const rightArm = useRef();

  const { t, lang } = useLanguage();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t) * 0.02;
    head.current.rotation.y = Math.sin(t / 1.5) * 0.15;
    head.current.rotation.x = Math.sin(t / 2) * 0.05;
    leftArm.current.rotation.x = -0.5 + Math.sin(t * 12) * 0.1;
    rightArm.current.rotation.x = -0.5 + Math.cos(t * 12) * 0.1;
  });

  return (
    <group ref={group}>
      
      <group position={[0, -0.5, 0]} rotation-x={0}>
         <Cylinder args={[2.5, 2.5, 0.2, 64]}>
            <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.5} />
         </Cylinder>
         <mesh position={[0, 0.11, 0]} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[2.4, 2.5, 64]} />
            <meshBasicMaterial color="#00E599" />
         </mesh>
      </group>

      {/* === LE BUREAU === */}
      <group position={[0, -0.6, 0.8]}>
         <RoundedBox args={[3.2, 0.1, 1.5]} radius={0.05} smoothness={4}>
            <meshStandardMaterial color="#1E293B" roughness={0.2} />
         </RoundedBox>
         <Cylinder args={[0.06, 0.06, 1.2]} position={[-1.2, -0.6, 0]}>
             <meshStandardMaterial color="#64748B" metalness={0.8} />
         </Cylinder>
         <Cylinder args={[0.06, 0.06, 1.2]} position={[1.2, -0.6, 0]}>
             <meshStandardMaterial color="#64748B" metalness={0.8} />
         </Cylinder>
      </group>

      {/* === SETUP TECH === */}
      <group position={[0, -0.5, 0.9]}>
        <RoundedBox args={[1.2, 0.05, 0.9]} radius={0.02} smoothness={4}>
            <meshStandardMaterial color="#94A3B8" metalness={0.5} />
        </RoundedBox>
        <group position={[0, 0.02, -0.35]} rotation-x={-0.25}>
            <RoundedBox args={[1.2, 0.8, 0.05]} radius={0.02} smoothness={4} position={[0, 0.4, 0]}>
                <meshStandardMaterial color="#0F172A" />
            </RoundedBox>
            <mesh position={[0, 0.4, 0.03]}>
                <planeGeometry args={[1.1, 0.7]} />
                <meshBasicMaterial color="#00E599" />
            </mesh>
            <rectAreaLight width={1.5} height={1} intensity={50} color="#00E599" rotation-x={THREE.MathUtils.degToRad(-90)} position={[0, 0, 1]} />
        </group>
        <group position={[1, 0.1, 0.2]}>
            <Cylinder args={[0.15, 0.1, 0.3]} position={[0, 0.15, 0]}>
                <meshStandardMaterial color="#F97316" />
            </Cylinder>
            <Sphere args={[0.05]} position={[0, 0.4, 0]}>
                <meshBasicMaterial color="#fff" transparent opacity={0.3} />
            </Sphere>
        </group>
      </group>

      {/* === AVATAR === */}
      <group position={[0, -0.8, -0.3]}>
         <group position={[0, 0.2, -0.4]}>
             <RoundedBox args={[1, 1, 0.1]} radius={0.1} position={[0, 0.8, 0]}>
                <meshStandardMaterial color="#333" />
             </RoundedBox>
             <RoundedBox args={[1, 0.1, 1]} radius={0.1} position={[0, 0, 0.4]}>
                <meshStandardMaterial color="#333" />
             </RoundedBox>
         </group>

         <group position={[0, 0.7, 0]}>
             <RoundedBox args={[0.8, 0.9, 0.4]} radius={0.1} smoothness={4}>
                <meshStandardMaterial color="#000" />
             </RoundedBox>
             <mesh position={[0, 0.1, 0.21]}>
                 <planeGeometry args={[0.2, 0.2]} />
                 <meshBasicMaterial color="#00E599" />
             </mesh>
             
             <group ref={head} position={[0, 0.8, 0]}>
                 <Sphere args={[0.35, 32, 32]}>
                    <meshStandardMaterial color="#8D5524" roughness={0.5} />
                 </Sphere>
                 <Sphere args={[0.4, 32, 32]} position={[0, 0.1, -0.1]}>
                    <meshStandardMaterial color="#0F0F0F" roughness={0.9} />
                 </Sphere>
                 <Sphere args={[0.25, 32, 32]} position={[0, 0.45, -0.1]}>
                    <meshStandardMaterial color="#0F0F0F" roughness={0.9} />
                 </Sphere>
                 
                 <group position={[0, 0.05, 0.32]}>
                     <Box args={[0.45, 0.12, 0.05]}>
                        <meshStandardMaterial color="#00E599" emissive="#00E599" emissiveIntensity={0.5} />
                     </Box>
                 </group>
             </group>

             <group ref={leftArm} position={[-0.45, 0.2, 0.2]} rotation-x={-0.5} rotation-z={0.3}>
                <RoundedBox args={[0.18, 0.6, 0.18]} radius={0.05}>
                    <meshStandardMaterial color="#8D5524" />
                </RoundedBox>
             </group>
             <group ref={rightArm} position={[0.45, 0.2, 0.2]} rotation-x={-0.5} rotation-z={-0.3}>
                <RoundedBox args={[0.18, 0.6, 0.18]} radius={0.05}>
                    <meshStandardMaterial color="#8D5524" />
                </RoundedBox>
             </group>
         </group>
      </group>

      {/* === BULLE DE DISCUSSION RESPONSIVE === */}
      <Html position={[0, 2.5, 0]} center distanceFactor={8} zIndexRange={[100, 0]}>
          <div className="speech-bubble">
            <Typewriter
              key={lang} 
              options={{
                strings: t.hero.speech_bubble,
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
                pauseFor: 2000,
              }}
            />
          </div>
      </Html>

    </group>
  );
}

export default function Hero3D() {
  const isMobile = useMobile();
  const position = isMobile ? [0, -1, 0] : [3, -1, 0];
  const scale = isMobile ? 0.8 : 1;

  return (
    <group position={position} scale={scale} rotation-y={isMobile ? 0 : -0.2}>
      <spotLight position={[2, 5, 5]} intensity={1.5} angle={0.5} penumbra={1} color="#ffffff" />
      <pointLight position={[-5, 0, 5]} intensity={0.5} color="#3B82F6" />
      <spotLight position={[0, 2, -5]} intensity={5} color="#00E599" distance={10} angle={1} />
      <Sparkles count={30} scale={4} size={4} speed={0.4} opacity={0.5} color="#00E599" />
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
         <AvatarPro />
      </Float>
      <ContactShadows position={[0, -1.3, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000" />
    </group>
  );
}
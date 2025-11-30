'use client';

import { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function SmartOrbitControls(props) {
  const { gl } = useThree();
  const controlsRef = useRef();
  
  // Variables pour suivre le geste tactile
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleTouchStart = (e) => {
      // On mémorise le point de départ
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      isScrolling.current = false;
      
      // On active les contrôles au début (tentative d'interaction)
      if(controlsRef.current) controlsRef.current.enabled = true;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      
      const deltaY = Math.abs(touchY - touchStartY.current);
      const deltaX = Math.abs(touchX - touchStartX.current);

      // SEUIL DE DÉTECTION :
      // Si le mouvement est majoritairement vertical (> 10px et > horizontal)
      // Alors c'est un scroll intentionnel.
      if (deltaY > 10 && deltaY > deltaX) {
        isScrolling.current = true;
        if(controlsRef.current) controlsRef.current.enabled = false; // Désactive la 3D
      } else if (deltaX > 10) {
        // Mouvement horizontal dominant : on garde la 3D active
        if (e.cancelable) e.preventDefault(); // Empêche le navigateur de faire "précédent/suivant"
      }
    };

    const handleTouchEnd = () => {
      // Petit délai pour réactiver les contrôles après un scroll
      setTimeout(() => {
        if(controlsRef.current) controlsRef.current.enabled = true;
      }, 150);
    };

    // Ajout des écouteurs passifs (important pour la perf scroll)
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false }); // False pour pouvoir preventDefault si besoin
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gl]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false} // Zoom souvent gênant sur mobile
      enablePan={false}
      rotateSpeed={0.5} // Rotation plus douce sur mobile
      {...props}
    />
  );
}
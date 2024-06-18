// src/CursorEffect.js
import { useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  useEffect(() => {
    const cursorTrail = [];
    const cursorTrailCount = 5; // Increase count for a smoother trail
    let currentIndex = 0;
    let lastMouseMoveTime = Date.now();

    // Create trailing elements
    for (let i = 0; i < cursorTrailCount; i++) {
      const trailElement = document.createElement('div');
      trailElement.className = 'cursor-neon';
      document.body.appendChild(trailElement);
      cursorTrail.push(trailElement);
    }

    const addNeonEffect = (e) => {
      const isHome = e.target.closest('#home'); // Check if mouse is inside #home
      if( isHome ) {
        const trailElement = cursorTrail[currentIndex];
        trailElement.style.left = `${e.pageX}px`;
        trailElement.style.top = `${e.pageY}px`;
        trailElement.style.opacity = '1'; // Reset opacity on new movement
        trailElement.style.transition = 'opacity 0.5s ease-out'; // Smooth fade out
        currentIndex = (currentIndex + 1) % cursorTrailCount;
        lastMouseMoveTime = Date.now();
      }
    };

    const fadeOutTrail = () => {
      const now = Date.now();
      if (now - lastMouseMoveTime > 100) { // Check if mouse has stopped
        cursorTrail.forEach((trailElement, index) => {
          setTimeout(() => {
            trailElement.style.opacity = '0';
          }, index * 30); // Stagger the fading for a smoother effect
        });
      }
      requestAnimationFrame(fadeOutTrail);
    };

    document.addEventListener('mousemove', addNeonEffect);
    requestAnimationFrame(fadeOutTrail);

    return () => {
      document.removeEventListener('mousemove', addNeonEffect);
      // Cleanup trailing elements
      cursorTrail.forEach(trailElement => document.body.removeChild(trailElement));
    };
  }, []);

  return null;
};

export default CursorEffect;

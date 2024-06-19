// ScrollableImages.js
import React, { useRef, useEffect, useState } from 'react';
import './scrollableImages.css';
import imageData from './imageData';

const ScrollableImages = () => {
  const [centerIndex, setCenterIndex] = useState(null);
  const containerRef = useRef(null);
  const [backgroundUrl, setBackgroundUrl] = useState('./assets/nexus-photo-1.png');

  // let backgroundUrl = './assets/nexus-photo-1.png'; 


  const calculateCenterIndex = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = null;
    let closestDistance = Infinity;

    container.querySelectorAll('.image-wrapper').forEach((wrapper, index) => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
      const distance = Math.abs(wrapperCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCenterIndex(closestIndex);
    setBackgroundUrl(`./assets/nexus-photo-${closestIndex-3}.png`);
  };

  useEffect(() => {
    const container = containerRef.current; 
    calculateCenterIndex();

    const handleScroll = () => calculateCenterIndex();
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []); 
 
  return (
    <div ref={containerRef} className="scrollable-images" style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      {imageData.map((image, index) => (
        <div key={image.id} className={`image-wrapper ${index === centerIndex ? 'center' : ''}`}>
          <a href={image.url} target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={image.caption} />
          </a>
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollableImages;






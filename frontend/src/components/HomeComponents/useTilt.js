// useTilt.js

import { useEffect } from 'react';

const useTilt = (cardRef) => {
  useEffect(() => {
    const card = cardRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const handleMouseMove = (event) => {
      const x = event.clientX - (width / 2);
      const y = event.clientY - (height / 2);

      const angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
      card.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${y / height * 0.9}) 0%, rgba(255, 255, 255, 0) 80%)`;

      const force = 80;
      const rx = (x / width) * force;
      const ry = (y / height) * -force;
      card.style.transform = `rotateY(${rx}deg) rotateX(${ry}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cardRef]);
};

export default useTilt;

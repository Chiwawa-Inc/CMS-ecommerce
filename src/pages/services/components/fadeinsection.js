// FadeInSection.js
import React, { useRef, useEffect, useState } from 'react';
import './fadeinsection.css'; // Optional: Import a CSS file for the fade-in effect

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

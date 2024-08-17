import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  useEffect(() => {
    gsap.fromTo(
      '.animated-element', // Target element class
      { opacity: 0, y: 100 }, // Initial state
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.animated-element', // Element that triggers the animation
          start: 'top 75%', // Start animation when this element is at 75% from the top of the viewport
          end: 'top 25%', // End animation when this element is at 25% from the top of the viewport
          scrub: true, // Smoothly animate between start and end points
        },
      }
    );
  }, []);

  return (
    <div>
      <h2 className="animated-element">Scroll-triggered Animation</h2>
    </div>
  );
};

export default ScrollAnimationComponent;

import React, { useEffect, useState, useRef } from 'react';
import './cursorFollower.css';

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const followerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      if (followerRef.current) {
        const updateFollowerPosition = () => {
          setFollowerPosition(prevPosition => {
            const x = prevPosition.x + (e.clientX - prevPosition.x) * 0.15;
            const y = prevPosition.y + (e.clientY - prevPosition.y) * 0.15;
            return { x, y };
          });
          animationFrameId = requestAnimationFrame(updateFollowerPosition);
        };
        updateFollowerPosition();
      }
    };

    const handleMouseDown = () => setActive(true);
    const handleMouseUp = () => setActive(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    document.querySelectorAll('a').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('a').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></div>
      <div
        className={`cursor-follower ${active ? 'active' : ''} ${menuActive ? 'menu-active' : ''} ${hovered ? 'hovered' : ''}`}
        ref={followerRef}
        style={{ left: `${followerPosition.x}px`, top: `${followerPosition.y}px` }}
      ></div>
    </>
  );
};

export default CursorFollower;

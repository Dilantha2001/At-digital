import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const arrowRef = useRef(null);
  const bubbleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse / trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const arrow = arrowRef.current;
    const bubble = bubbleRef.current;
    if (!arrow || !bubble) return;

    // Instant zero-lag tracking for the sharp black arrow tip
    const arrowX = gsap.quickTo(arrow, 'x', { duration: 0.04, ease: 'power3' });
    const arrowY = gsap.quickTo(arrow, 'y', { duration: 0.04, ease: 'power3' });

    // Smooth fluid trailing inertia for the floating luxury bubble
    const bubbleX = gsap.quickTo(bubble, 'x', { duration: 0.32, ease: 'power2.out' });
    const bubbleY = gsap.quickTo(bubble, 'y', { duration: 0.32, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      setIsVisible(true);
      arrowX(e.clientX);
      arrowY(e.clientY);
      bubbleX(e.clientX);
      bubbleY(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hover on interactive / clickable elements
    const handleMouseOver = (e) => {
      const interactive = e.target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, .gallery-item'
      );
      if (interactive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const interactive = e.target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, .gallery-item'
      );
      if (interactive) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Smooth reactive animation for Hover & Click micro-interactions
  useEffect(() => {
    if (!bubbleRef.current || !arrowRef.current) return;

    if (isClicking) {
      // Tactile compression pulse on click
      gsap.to(bubbleRef.current, {
        scale: 0.75,
        backgroundColor: 'rgba(20, 18, 16, 0.18)',
        borderColor: 'rgba(20, 18, 16, 0.75)',
        duration: 0.15,
        ease: 'power2.out',
      });
      gsap.to(arrowRef.current, {
        scale: 0.88,
        duration: 0.15,
        ease: 'power2.out',
      });
    } else if (isHovering) {
      // Elegant expansion into a soft magnetic bubble aura on links/buttons
      gsap.to(bubbleRef.current, {
        scale: 1.85,
        backgroundColor: 'rgba(20, 18, 16, 0.08)',
        borderColor: 'rgba(20, 18, 16, 0.55)',
        duration: 0.32,
        ease: 'power2.out',
      });
      gsap.to(arrowRef.current, {
        scale: 1.15,
        duration: 0.25,
        ease: 'power2.out',
      });
    } else {
      // Normal resting state
      gsap.to(bubbleRef.current, {
        scale: 1,
        backgroundColor: 'rgba(20, 18, 16, 0.04)',
        borderColor: 'rgba(20, 18, 16, 0.35)',
        duration: 0.35,
        ease: 'power2.out',
      });
      gsap.to(arrowRef.current, {
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
      });
    }
  }, [isHovering, isClicking]);

  return (
    <>
      {/* 1. The Fluid Trailing Luxury Soap Bubble */}
      <div
        ref={bubbleRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform -ml-5 -mt-5 w-10 h-10 rounded-full border border-[#141210]/35 bg-[#141210]/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.06)] backdrop-blur-[0.5px]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.25s ease-out',
        }}
      />

      {/* 2. The Sleek Sharp Black Arrow Pointer */}
      <div
        ref={arrowRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform -ml-[3px] -mt-[2px]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
        >
          {/* Authentic editorial black pointer arrow with crisp protective outline */}
          <path
            d="M3 2L10.5 21L14 13.5L21.5 10L3 2Z"
            fill="#141210"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

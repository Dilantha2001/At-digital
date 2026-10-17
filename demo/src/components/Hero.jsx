import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// High-resolution hero assets from user's assets directory
import hero1 from '../assets/hero (1).jpg';
import hero3 from '../assets/hero (3).jpg';
import hero4 from '../assets/hero (4).jpg';
import hero5 from '../assets/hero (5).jpg';
import hero6 from '../assets/hero (6).jpg';
import hero7 from '../assets/hero (7).jpg';

const HERO_SLIDES = [
  {
    id: 1,
    src: hero1,
    alt: 'Bride and groom wedding embrace in greenhouse',
    subtitle: 'Vail, Colorado',
    position: 'object-[center_28%] sm:object-center',
  },
  {
    id: 2,
    src: hero7,
    alt: 'Joyful couple walking under wedding confetti celebration',
    subtitle: 'Aspen Mountain Vows',
    position: 'object-[center_24%] sm:object-center',
  },
  {
    id: 3,
    src: hero5,
    alt: 'Bride and groom walking with white floral petals falling',
    subtitle: 'Steamboat Springs',
    position: 'object-[center_25%] sm:object-center',
  },
  {
    id: 4,
    src: hero6,
    alt: 'Romantic kiss under floral ceremony arch with string lights',
    subtitle: 'Devil’s Thumb Ranch',
    position: 'object-[center_30%] sm:object-center',
  },
  {
    id: 5,
    src: hero3,
    alt: 'Celebration arch tunnel with wedding party',
    subtitle: 'Crested Butte',
    position: 'object-[center_32%] sm:object-center',
  },
  {
    id: 6,
    src: hero4,
    alt: 'Silver confetti celebratory champagne toast',
    subtitle: 'Telluride Destination',
    position: 'object-[center_26%] sm:object-center',
  },
];

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef([]);
  const isTransitioningRef = useRef(false);

  // Smooth & snappy GSAP slide transition (crossfade with subtle scale)
  const transitionToSlide = useCallback((nextIndex) => {
    if (nextIndex === activeSlide || isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const currentSlideEl = slideRefs.current[activeSlide];
    const nextSlideEl = slideRefs.current[nextIndex];

    if (currentSlideEl && nextSlideEl) {
      gsap.killTweensOf([currentSlideEl, nextSlideEl]);

      // Bring next slide to top and prepare
      gsap.set(nextSlideEl, { zIndex: 10, opacity: 0, scale: 1.05 });
      gsap.set(currentSlideEl, { zIndex: 5 });

      // Animate next slide in
      gsap.to(nextSlideEl, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(currentSlideEl, { opacity: 0, zIndex: 1, scale: 1.05 });
          gsap.set(nextSlideEl, { zIndex: 5 });
          setActiveSlide(nextIndex);
          isTransitioningRef.current = false;
        },
      });

      // Gently fade out outgoing slide
      gsap.to(currentSlideEl, {
        opacity: 0,
        scale: 0.98,
        duration: 0.28,
        ease: 'power2.out',
      });
    } else {
      setActiveSlide(nextIndex);
      isTransitioningRef.current = false;
    }
  }, [activeSlide]);

  // Automatic cycling (1050ms interval, balanced & pleasant speed)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioningRef.current) {
        const next = (activeSlide + 1) % HERO_SLIDES.length;
        transitionToSlide(next);
      }
    }, 1050);

    return () => clearInterval(interval);
  }, [activeSlide, transitionToSlide]);

  useGSAP(
    () => {
      if (headlineRef.current) {
        gsap.from(headlineRef.current.children, {
          opacity: 0,
          y: 25,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[85svh] sm:h-screen min-h-[480px] sm:min-h-[640px] max-h-[1080px] overflow-hidden bg-[#121110]"
    >
      {/* 
        Full Width Image Slideshow with mobile-optimized focal points
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            ref={(el) => (slideRefs.current[idx] = el)}
            className={`absolute inset-0 w-full h-full will-change-transform ${
              idx === 0 ? 'opacity-100 z-[5]' : 'opacity-0 z-[1]'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full object-cover ${slide.position} select-none brightness-[1.04]`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Subtle Light-Enhancing Soft Overlay (Clean & Bright with mobile legibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/35 sm:from-black/20 sm:via-black/5 sm:to-black/25 pointer-events-none z-10" />

      {/* Hero Editorial Center Content */}
      <div
        ref={headlineRef}
        className="relative z-20 w-full h-full max-w-[1340px] mx-auto px-5 sm:px-12 flex flex-col items-center justify-center text-center text-white"
      >
        <span className="font-antique text-[9px] xs:text-[10px] sm:text-[11.5px] font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#ede8df] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] mb-3 sm:mb-4 px-2">
          Colorado &amp; Worldwide Wedding Photographer
        </span>

        <h1 className="font-noto-serif text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-[200] uppercase tracking-[0.10em] sm:tracking-[0.16em] text-white leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)] select-none whitespace-nowrap">
          Whitney Rae
        </h1>

        <p className="font-bilbo text-2xl xs:text-3xl sm:text-5xl text-[#ede8df] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] pt-1 sm:pt-2 select-none">
          romanticizing life in beautiful locations
        </p>
      </div>

      {/* Subtle Slide Indicators (Dots) */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 sm:space-x-2.5">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => transitionToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeSlide === idx
                ? 'w-7 sm:w-8 bg-white shadow-sm'
                : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Bottom Right Slide Counter Badge */}
      <div className="hidden sm:block absolute bottom-8 right-8 lg:right-16 z-30 font-antique text-[10.5px] tracking-[0.25em] text-[#ede8df]/80 uppercase">
        <span className="text-white font-medium">0{activeSlide + 1}</span> / 0{HERO_SLIDES.length}
      </div>
    </section>
  );
}

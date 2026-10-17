import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import big1Img from '../assets/big1.jpg';
import big2Img from '../assets/big2.jpg';

// Exact images from Whitney Rae Photography
const MAIN_COUPLE_IMG = 'https://static.showit.co/1200/nxsNmagsg9VlpI9ELLksJQ/166421/wrp07378-3_1.jpg';
const OVERLAP_VEIL_IMG = 'https://static.showit.co/800/erRcxBHkTIqEkJjWqu2C-w/166421/wrp02311_1.jpg';

const INTRO_SLIDES = [
  {
    id: 1,
    src: MAIN_COUPLE_IMG,
    alt: 'Bride and groom at sunset in Vail Colorado meadow',
    title: 'Sunset Embrace',
  },
  {
    id: 2,
    src: big1Img,
    alt: 'Editorial Colorado wedding couple portrait',
    title: 'Sacred Vows',
  },
  {
    id: 3,
    src: big2Img,
    alt: 'Timeless mountain wedding celebration',
    title: 'Timeless Chapter',
  },
];

export default function AboutIntro() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const slideshowRef = useRef(null);
  const overlapImgRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const slideRefs = useRef([]);
  const isTransitioningRef = useRef(false);
  const isHoveredRef = useRef(false);

  // Smooth GSAP slide transition
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

      // Animate next slide in (faster, snappy crossfade)
      gsap.to(nextSlideEl, {
        opacity: 1,
        scale: 1,
        duration: 0.85,
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
        duration: 0.75,
        ease: 'power2.out',
      });
    } else {
      setActiveSlide(nextIndex);
      isTransitioningRef.current = false;
    }
  }, [activeSlide]);

  // Automatic infinite GSAP cycling (speeded up to 2.8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveredRef.current && !isTransitioningRef.current) {
        const next = (activeSlide + 1) % INTRO_SLIDES.length;
        transitionToSlide(next);
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [activeSlide, transitionToSlide]);

  useGSAP(
    () => {
      // Subtle reveal animations
      gsap.from(headlineRef.current?.children || [], {
        opacity: 0,
        y: 25,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.25,
        ease: 'power3.out',
        clearProps: 'all',
      });

      gsap.from(slideshowRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.out',
        clearProps: 'all',
      });

      gsap.from(overlapImgRef.current, {
        opacity: 0,
        x: 25,
        y: 25,
        duration: 1.2,
        delay: 0.45,
        ease: 'power3.out',
        clearProps: 'all',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-10 sm:pt-14 pb-16 sm:pb-24 lg:pt-20 lg:pb-32 px-5 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
        
        {/* Top-Right Refined Tagline / Statement with underline (Centered on mobile, right-aligned on desktop) */}
        <div className="flex justify-center lg:justify-end mb-8 sm:mb-10 lg:mb-14 pr-0 sm:pr-8 lg:pr-24">
          <div className="flex flex-col items-center text-center">
            <p className="font-antique text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-[#212121] leading-[2.1] sm:leading-[2.3] max-w-[280px]">
              An Artful &amp; Refined <br />
              Wedding Photography <br />
              Experience Designed To <br />
              Help You Slow Down And <br />
              Feel It All.
            </p>
            {/* Divider line */}
            <div className="w-[140px] sm:w-[171px] h-[1px] bg-[#e8e3d9] mt-3 sm:mt-4" />
          </div>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Large Typography & Narrative Copy */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8 lg:space-y-9 lg:pr-4">
            
            {/* Big Headline in Bilbo cursive font - Smoothly scaled for mobile screens */}
            <div ref={headlineRef} className="space-y-0.5 sm:space-y-2 text-center lg:text-left">
              <h2 className="bilbo-regular text-[48px] xs:text-[56px] sm:text-[76px] lg:text-[92px] xl:text-[106px] text-[#212121] leading-[1.02] m-0">
                You Were <br />
                Fully There.
              </h2>
              <h2 className="bilbo-regular text-[48px] xs:text-[56px] sm:text-[76px] lg:text-[92px] xl:text-[106px] text-[#1a1816] leading-[1.02] m-0">
                Now You Always <br />
                Will Be.
              </h2>
            </div>

            {/* Sub-headline - Centered */}
            <div className="pt-1 sm:pt-2 text-center">
              <p className="font-antique text-[11px] sm:text-[13px] font-normal uppercase tracking-subhead text-[#212121] leading-relaxed">
                Emotive, Light-Filled Wedding <br className="hidden xs:inline" />
                Photography in Vail Colorado
              </p>
            </div>

            {/* Paragraph Body Text - Centered */}
            <div
              ref={textRef}
              className="space-y-5 sm:space-y-6 text-[#212121] font-mulish text-[13.5px] sm:text-[15px] leading-[1.9] sm:leading-[2.05] max-w-[430px] mx-auto text-center"
            >
              <p>
                Based in Colorado and serving Vail, Aspen, Telluride,
                and beyond, I document celebrations with a refined,
                documentary-style approach—inviting ease,
                presence, and connection.
              </p>

              <p>
                Every image we create is rooted in intention: <br />
                Soft movement, honest emotion, natural light, and a
                sense of place.
              </p>

              <p className="pt-1">
                Your job is to be fully there. <br />
                Mine is to help you remember what that felt like.
              </p>
            </div>

            {/* CTA Button - Centered with clean single-line layout */}
            <div className="pt-3 sm:pt-5 flex justify-center">
              <a
                href="#inquire"
                className="inline-flex items-center justify-center bg-[#e8e3d9] hover:bg-[#ded8cc] text-[#212121] font-antique text-[10px] sm:text-[10.5px] font-medium tracking-[0.25em] uppercase px-8 sm:px-10 py-3 sm:py-3.5 whitespace-nowrap transition-colors duration-300 shadow-sm cursor-pointer"
              >
                Let&apos;s Get Started
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: 3-Image GSAP Animated Slideshow + Overlapping Veil Photo */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-10 sm:mt-12 lg:mt-0 flex justify-center lg:justify-start pb-8 sm:pb-10 lg:pb-0">
            
            {/* 3-Photo GSAP Seamless Crossfading Container */}
            <div
              ref={slideshowRef}
              onMouseEnter={() => { isHoveredRef.current = true; }}
              onMouseLeave={() => { isHoveredRef.current = false; }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[485px] aspect-[0.72] sm:aspect-[0.69] overflow-hidden shadow-2xl bg-[#1e1b19] group"
            >
              {INTRO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  ref={(el) => (slideRefs.current[idx] = el)}
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    zIndex: idx === 0 ? 5 : 1,
                    transform: idx === 0 ? 'scale(1)' : 'scale(1.05)',
                  }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>

            {/* Overlapping Black & White Veil Detail Photo (Scales gracefully on mobile) */}
            <div
              ref={overlapImgRef}
              className="absolute -bottom-4 sm:-bottom-6 right-2 sm:right-6 lg:-right-4 w-[130px] sm:w-[170px] lg:w-[220px] aspect-[0.68] overflow-hidden shadow-2xl z-30 pointer-events-none"
            >
              <img
                src={OVERLAP_VEIL_IMG}
                alt="Artistic close-up of bridal veil on wedding gown"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.08]"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution portrait headshot of Whitney Rae
const WHITNEY_HEADSHOT = 'https://static.showit.co/1200/_3LZpvlgqgt9kNonShVRrw/166421/whitney_headshot_2025_color-5.jpg';

// Press logos items for infinite slider
const PRESS_LOGOS = [
  {
    id: 1,
    type: 'badge',
    title: 'BRIDE',
    sub: '1973',
  },
  {
    id: 2,
    type: 'rmb',
    title: 'ROCKY MOUNTAIN',
    subtitle: 'BRIDE',
    caption: 'featured on',
  },
  {
    id: 3,
    type: 'knot',
    title: 'the knot',
  },
  {
    id: 4,
    type: 'smp',
    title: 'STYLE ME PRETTY',
  },
  {
    id: 5,
    type: 'junebug',
    title: 'JUNEBUG WEDDINGS',
  },
  {
    id: 6,
    type: 'vogue',
    title: 'OVER THE MOON',
  },
];

export default function AboutWhitney() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const quoteRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  useGSAP(
    () => {
      // Smooth entrance animations on scroll
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        clearProps: 'all',
      });

      gsap.from(photoRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 1.3,
        delay: 0.2,
        ease: 'power2.out',
        clearProps: 'all',
      });

      if (textRef.current?.children) {
        gsap.from(textRef.current.children, {
          opacity: 0,
          y: 25,
          duration: 1.1,
          stagger: 0.15,
          delay: 0.35,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      });

      // -------------------------------------------------------------
      // GSAP INFINITE LOGO MARQUEE SLIDESHOW
      // Continuous linear horizontal slide that repeats infinitely
      // -------------------------------------------------------------
      if (marqueeRef.current) {
        marqueeTweenRef.current = gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 11,
          ease: 'none',
        });
      }
    },
    { scope: containerRef }
  );

  // Optional: pause on hover for interactive feel
  const handleMouseEnter = () => marqueeTweenRef.current?.pause();
  const handleMouseLeave = () => marqueeTweenRef.current?.play();

  // Helper to render individual press logo item
  const renderLogoItem = (logo, key) => (
    <div
      key={key}
      className="inline-flex items-center justify-center shrink-0 mx-8 sm:mx-12 select-none opacity-85 hover:opacity-100 transition-opacity duration-300"
    >
      {logo.type === 'badge' && (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2a2725] text-white text-[9px] font-serif text-center uppercase tracking-widest leading-tight p-2 shadow-sm">
          <span>
            {logo.title} <br />
            <span className="text-[7px] text-gray-300">{logo.sub}</span>
          </span>
        </div>
      )}

      {logo.type === 'rmb' && (
        <div className="text-center font-serif text-[#1e1b19]">
          <span className="block text-[8px] tracking-[0.2em] italic font-light uppercase">
            {logo.caption}
          </span>
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-antique leading-tight">
            {logo.title} <br />
            <span className="text-base sm:text-lg font-serif italic font-normal tracking-[0.1em]">
              {logo.subtitle}
            </span>
          </span>
        </div>
      )}

      {logo.type === 'knot' && (
        <div className="font-serif italic text-2xl sm:text-3xl text-[#1e1b19] tracking-tight font-normal">
          {logo.title}
        </div>
      )}

      {logo.type === 'smp' && (
        <div className="font-serif tracking-[0.25em] text-xs sm:text-sm text-[#1e1b19] uppercase font-light">
          Style Me Pretty
        </div>
      )}

      {logo.type === 'junebug' && (
        <div className="font-antique tracking-[0.2em] text-[11px] sm:text-xs text-[#1e1b19] uppercase font-medium">
          Junebug Weddings
        </div>
      )}

      {logo.type === 'vogue' && (
        <div className="font-serif italic tracking-[0.15em] text-sm sm:text-base text-[#1e1b19]">
          Over The Moon
        </div>
      )}
    </div>
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 overflow-x-hidden z-40"
    >
      {/* 
        1 & 2: TOP EDITORIAL CONTENT (Centered within max-w-[1280px])
      */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 relative">
        
        {/* 
          1. HEADLINE ("Get to Know Whitney Rae") - Lifted up seamlessly
        */}
        <div
          ref={headlineRef}
          className="mt-0 relative z-30 mb-6 sm:mb-8 md:mb-10 pl-2 sm:pl-10 lg:pl-36"
        >
          <h2 className="font-noto-serif text-[38px] sm:text-[54px] md:text-[62px] lg:text-[70px] xl:text-[76px] font-[200] uppercase tracking-[-0.01em] text-[#19191a] leading-[1.08] select-none">
            Get to Know Whitney Rae— <br />
            Colorado Wedding <br />
            Photographer
          </h2>
        </div>

        {/* 
          2. TWO-COLUMN EDITORIAL CONTENT
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-10 sm:pb-12 lg:pb-14">
          
          {/* LEFT: Portrait Headshot */}
          <div
            ref={photoRef}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[0.75] w-full max-w-[480px] mx-auto lg:mx-0 overflow-hidden shadow-xl bg-white">
              <img
                src={WHITNEY_HEADSHOT}
                alt="Whitney Rae - Colorado wedding photographer"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Philosophy & Story Narrative */}
          <div
            ref={textRef}
            className="lg:col-span-7 space-y-7 lg:pl-4 pt-2"
          >
            <p className="font-noto-serif italic font-[300] text-[22px] sm:text-[25px] lg:text-[27px] text-[#212121] leading-[1.4] tracking-[0.02em]">
              Preserving what&apos;s fleeting with <br />
              presence and intention.
            </p>

            <div className="space-y-6 text-[#212121] font-mulish text-[14px] sm:text-[15px] leading-[2.05] max-w-[540px]">
              <p>
                I approach each wedding day with quiet intuition and grounded presence—anticipating
                moments before they unfold, offering support without intrusion, and helping
                my couples feel calm, seen, and fully themselves.
              </p>

              <p>
                I work with couples who value artistry, emotion, and a seamless experience.
                They care deeply about the way their wedding feels—not just how it looks.
                They want honest, beautiful images, yes—but they also want trust, warmth,
                and someone who just gets it.
              </p>

              <p>
                Based in Colorado and available worldwide, I photograph weddings with a refined,
                documentary-style approach—designed to feel calm, collaborative, and effortlessly you.
              </p>

              <p>
                Rooted in emotional awareness and tailored connection, I meet each couple exactly
                where they are—co-creating photographs that let you feel it all, long after the
                day has passed.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 
        3. "AS SEEN IN" WITH GSAP INFINITE CONTINUOUS SLIDESHOW / MARQUEE - 100% FULL-SCREEN EDGE-TO-EDGE
      */}
      <div className="w-full border-t border-b border-[#e8e3d9] py-4 sm:py-5 my-8 sm:my-12 bg-[#fbf9f6]">
        <div className="w-full flex flex-col md:flex-row items-center">
          
          {/* Pinned Label */}
          <div className="shrink-0 flex items-center pl-6 sm:pl-10 lg:pl-16 pr-6 md:border-r border-[#e8e3d9] pb-3 md:pb-0">
            <span className="font-antique text-[11px] sm:text-xs tracking-[0.25em] text-[#212121] uppercase font-normal select-none whitespace-nowrap">
              AS SEEN IN:
            </span>
          </div>

          {/* Infinite GSAP Carousel Track spanning 100% full screen width */}
          <div
            className="relative w-full overflow-hidden py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left/Right soft gradient fades for smooth infinite edge transitions */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fbf9f6] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fbf9f6] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track animated by GSAP */}
            <div
              ref={marqueeRef}
              className="flex items-center whitespace-nowrap will-change-transform cursor-pointer"
            >
              {/* 4 sets to ensure 100% seamless full-screen coverage on all screen sizes */}
              {PRESS_LOGOS.map((logo, idx) => renderLogoItem(logo, `set1-${idx}`))}
              {PRESS_LOGOS.map((logo, idx) => renderLogoItem(logo, `set2-${idx}`))}
              {PRESS_LOGOS.map((logo, idx) => renderLogoItem(logo, `set3-${idx}`))}
              {PRESS_LOGOS.map((logo, idx) => renderLogoItem(logo, `set4-${idx}`))}
            </div>
          </div>

        </div>
      </div>

      {/* 
        4. LARGE CENTERED ARTFUL STATEMENT & "THE EXPERIENCE" BUTTON (Centered within max-w-[1080px])
      */}
      <div ref={quoteRef} className="text-center max-w-[1080px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
        
        <h3 className="font-noto-serif text-[28px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-[200] leading-[1.22] text-[#212121] tracking-[-0.01em]">
          Creating <span className="italic font-[300]">artful &amp; honest</span> wedding imagery for <br className="hidden sm:inline" />
          couples in Colorado and worldwide—rooted in <br className="hidden sm:inline" />
          <span className="italic font-[300]">presence, emotion, and refined storytelling.</span>
        </h3>

        {/* THE EXPERIENCE Button */}
        <div className="pt-4 flex justify-center">
          <a
            href="#experience"
            className="inline-flex items-center justify-center bg-[#e8e3d9] hover:bg-[#ded8cc] text-[#212121] font-antique text-[10px] sm:text-[10.5px] font-medium tracking-[0.25em] uppercase px-8 sm:px-10 py-3 sm:py-3.5 whitespace-nowrap transition-colors duration-300 shadow-sm cursor-pointer"
          >
            The Experience
          </a>
        </div>

      </div>
    </section>
  );
}

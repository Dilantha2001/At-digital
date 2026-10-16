import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution assets from Whitney Rae Photography
// Right-side fixed background image:
const RIGHT_BG_IMG = 'https://static.showit.co/1200/9vpCw7e6vYa_cJHjJaL6xw/166421/wrp07840.jpg';
// Left-side couple portrait:
const LEFT_COUPLE_IMG = 'https://static.showit.co/800/7rZATr-ospBmjACBCGdJ_g/166421/wrp09952.jpg';

export default function TestimonialSplit() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      // Smooth reveal of left-side testimonial content
      gsap.from(cardRef.current, {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: 'power3.out',
      });

      if (contentRef.current?.children) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 25,
          duration: 1,
          stagger: 0.15,
          delay: 0.2,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[640px] lg:min-h-[820px] bg-[#fbf9f6] overflow-hidden border-t border-[#e8e3d9]"
    >
      {/* 
        1. RIGHT-SIDE CUTOUT WINDOW (Fixed Background Image)
        "right side eke thiyena image eka bg eke thiyenne ethanath api uda karawa wage cut dala thiyenne"
        - Occupies the right 50% on desktop (lg+).
        - Fixed background attachment creates the exact parallax cutout window effect!
      */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-fixed bg-cover bg-right z-10"
        style={{
          backgroundImage: `url(${RIGHT_BG_IMG})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* Mobile fallback image header */}
      <div
        className="lg:hidden w-full h-[360px] sm:h-[440px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${RIGHT_BG_IMG})`,
        }}
      />

      {/* 
        2. LEFT-SIDE CONTENT (Couple Portrait & Testimonial)
        Occupies the left 50% on desktop, scrolling over the section.
      */}
      <div className="max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-10">
            
            {/* Small Eyebrow Label */}
            <span className="inline-block font-antique text-[10.5px] uppercase tracking-[0.25em] text-[#4a443f] font-medium">
              Kind Words &amp; Connection
            </span>

            {/* Testimonial Quote Header */}
            <div ref={contentRef} className="space-y-6">
              
              <h3 className="font-noto-serif italic font-[300] text-2xl sm:text-3xl lg:text-4xl text-[#1e1b19] leading-[1.3] tracking-[-0.01em]">
                &ldquo;Whitney was by far the best decision we made for our wedding day.&rdquo;
              </h3>

              {/* Couple's Editorial Portrait */}
              <div
                ref={cardRef}
                className="w-full max-w-[320px] aspect-[0.76] overflow-hidden shadow-xl bg-white my-6"
              >
                <img
                  src={LEFT_COUPLE_IMG}
                  alt="Bride and groom private celebration portrait"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Body narrative quote */}
              <p className="font-mulish text-sm sm:text-[15px] leading-[2.05] text-[#2c2825] max-w-[480px]">
                From our very first conversation, Whitney brought an effortless calm and thoughtful
                artistry that made us feel completely at ease. On the wedding day, she preserved
                every sacred, fleeting moment without ever making anything feel staged. Looking back
                through our photographs lets us relive the exact feeling of that day.
              </p>

              {/* Author attribution */}
              <div className="pt-2 border-t border-[#e8e3d9]/80 max-w-[280px]">
                <p className="font-antique text-[11px] uppercase tracking-[0.22em] text-[#1e1b19] font-medium">
                  Sarah &amp; Michael
                </p>
                <p className="font-serif italic text-xs text-[#5a534c] tracking-wide mt-0.5">
                  Vail, Colorado
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

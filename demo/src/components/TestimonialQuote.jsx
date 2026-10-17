import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TestimonialQuote() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      // Smooth fade and slight scale-up on scroll
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#fbf9f6] pt-4 sm:pt-6 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-10 lg:px-14 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Crisp White Elevated Testimonial Card */}
        <div
          ref={cardRef}
          className="bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-14 lg:px-20 shadow-xl shadow-stone-200/40 text-center space-y-6 sm:space-y-8"
        >
          {/* Eyebrow: TESTIMONIAL */}
          <p className="font-antique text-[10px] sm:text-[10.5px] uppercase tracking-[0.3em] text-[#635b54] font-medium select-none">
            Testimonial
          </p>

          {/* Large Centered Serif Quote with Italic Accents */}
          <blockquote className="font-noto-serif text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[43px] font-[200] leading-[1.32] text-[#1c1a18] tracking-[-0.01em] max-w-[1080px] mx-auto">
            &ldquo;Working with Whitney was the{' '}
            <span className="italic font-[300]">best decision</span> we
            made for our wedding. Whitney&apos;s photos
            document our wedding week{' '}
            <span className="italic font-[300]">exactly how it was</span> and
            how we want to remember it forever.&rdquo;
          </blockquote>

          {/* Author Attribution */}
          <p className="font-serif italic font-[300] text-sm sm:text-base text-[#706860] tracking-wider pt-2 select-none">
            - Erin &amp; Todd &mdash; France
          </p>
        </div>

      </div>
    </section>
  );
}

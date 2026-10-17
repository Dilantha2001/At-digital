import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution assets from Whitney Rae Photography
// Story 1: Marissa & Alex ceremony floral arch kiss
const IMG_STORY_1 = 'https://static.showit.co/800/itmM_8LJxT-ji0VaOhLTDg/166421/img_5641.jpg';
// Story 2: Luxury tent reception with crystal chandeliers & florals
const IMG_STORY_2 = 'https://static.showit.co/800/FbQOvXHM5EBYQmGp5wy4fQ/166421/wrp00835.jpg';

export default function InTheirWords() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const story1Ref = useRef(null);
  const story2Ref = useRef(null);

  useGSAP(
    () => {
      // Title reveal animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: 'power3.out',
        clearProps: 'all',
      });

      // Story 1 entrance
      gsap.from(story1Ref.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
      });

      // Story 2 entrance
      gsap.from(story2Ref.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.25,
        ease: 'power3.out',
        clearProps: 'all',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#e8e3d9]"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* 
          1. SECTION TITLE:
          IN THEIR (Normal Serif Caps)
          WORDS (Italic Serif Caps)
        */}
        <div ref={titleRef} className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-noto-serif text-[42px] sm:text-[60px] lg:text-[76px] xl:text-[84px] font-[200] uppercase tracking-[-0.01em] text-[#19191a] leading-[1.0] select-none">
            In Their <br />
            <span className="italic font-[300]">Words</span>
          </h2>
          {/* Thin horizontal divider line spanning across */}
          <div className="w-full h-[1px] bg-[#e8e3d9] mt-8" />
        </div>

        {/* 
          2. STORY 1: PHOTO ON LEFT | TEXT ON RIGHT
          Marissa & Alex
        */}
        <div
          ref={story1Ref}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center py-10 lg:py-16"
        >
          {/* Photo Left: Outdoor ceremony floral arch */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-start">
            <div className="relative aspect-[0.75] w-full max-w-[420px] overflow-hidden shadow-2xl bg-white group">
              <img
                src={IMG_STORY_1}
                alt="Bride and groom kiss under floral arch in Colorado mountain meadow"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Right: Quote + Narrative + Attribution */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6 lg:pl-4">
            {/* Italic Serif Quote */}
            <h3 className="font-noto-serif italic font-[300] text-xl sm:text-2xl lg:text-[25px] text-[#1e1b19] leading-snug tracking-[-0.01em]">
              &ldquo;You won&apos;t find someone else as magical as Whitney &mdash; a true artist.&rdquo;
            </h3>

            {/* Narrative Body Copy */}
            <p className="font-mulish text-sm sm:text-[15px] leading-[2.05] text-[#3d3732] max-w-[560px]">
              Not only is she a supremely talented photographer, but she genuinely cares about her
              couples and takes the time to get to know you. Even though we had just met in person for
              the first time on wedding day, it felt like we had known each other for much longer.
            </p>

            {/* Attribution */}
            <p className="font-antique text-[11px] uppercase tracking-[0.25em] text-[#423b35] font-medium pt-2 select-none">
              - MARISSA &amp; ALEX
            </p>
          </div>
        </div>

        {/* Thin Divider Line between Story 1 and Story 2 */}
        <div className="w-full h-[1px] bg-[#e8e3d9]" />

        {/* 
          3. STORY 2: TEXT ON LEFT | PHOTO ON RIGHT (Alternating / Zig-zag)
          Lauren & Chris (Luxury reception tent)
        */}
        <div
          ref={story2Ref}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center py-12 lg:py-20"
        >
          {/* Text Left: Quote + Narrative + Attribution */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6 lg:pr-4 order-last md:order-first">
            {/* Italic Serif Quote */}
            <h3 className="font-noto-serif italic font-[300] text-xl sm:text-2xl lg:text-[25px] text-[#1e1b19] leading-snug tracking-[-0.01em]">
              &ldquo;Our experience was the definition of luxury &mdash; we felt like ourselves the entire day.&rdquo;
            </h3>

            {/* Narrative Body Copy */}
            <p className="font-mulish text-sm sm:text-[15px] leading-[2.05] text-[#3d3732] max-w-[560px]">
              If I could recommend Whitney a million times over, I would. She&apos;s not just a
              photographer&mdash;she&apos;s an artist, a storyteller, and someone who cares deeply about
              making your memories last a lifetime. Trust me, you won&apos;t regret choosing Whitney to
              document your special day.
            </p>

            {/* Attribution */}
            <p className="font-antique text-[11px] uppercase tracking-[0.25em] text-[#423b35] font-medium pt-2 select-none">
              - LAUREN &amp; CHRIS
            </p>
          </div>

          {/* Photo Right: Luxury white tent wedding reception */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end">
            <div className="relative aspect-[0.75] w-full max-w-[420px] overflow-hidden shadow-2xl bg-white group">
              <img
                src={IMG_STORY_2}
                alt="Luxury wedding reception tent with tall floral centerpieces and chandeliers"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

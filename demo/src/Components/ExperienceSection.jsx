import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution assets from Whitney Rae Photography
const IMG_EXPERIENCE_1 = 'https://static.showit.co/800/4vFqnX-LoaohFJSJNURTdg/166421/wrp06520.jpg';
const IMG_EXPERIENCE_2 = 'https://static.showit.co/800/-9aUvxfDtM0BpcX0NFmUbQ/166421/northstar_gatherings_bride_and_groom.jpg';
const IMG_EXPERIENCE_3 = 'https://static.showit.co/800/Z3lTen9x2i1Enr19qqG8xQ/166421/northstar_gatherings_wedding_reception_details.jpg';
const IMG_EXPERIENCE_4 = 'https://static.showit.co/800/4nB1FFPtunCWN8_Vfix5tA/166421/wrp06726.jpg';

const EXPERIENCE_ITEMS = [
  {
    id: 1,
    number: '01',
    category: 'CUSTOM PROPOSAL',
    title: 'CUSTOM TAILORED TO FIT YOUR NEEDS',
    description:
      "Your Colorado wedding is custom tailored — so is my photography experience. We have curated collections to choose from, but we craft a unique bespoke proposal based on your exact vision.",
    image: IMG_EXPERIENCE_1,
    alt: 'Bride and groom kissing in lush Colorado mountain meadow',
    isGrayscale: false,
  },
  {
    id: 2,
    number: '02',
    category: 'PERSONAL CONNECTION',
    title: 'KIND-HEARTED AND APPROACHABLE',
    description:
      'Working with a select number of clients each year allows for a personal, intimate experience rooted in kind communication, openness, trust, and effortless connection.',
    image: IMG_EXPERIENCE_2,
    alt: 'Black and white portrait of bride and groom on Colorado mountain overlook',
    isGrayscale: true,
  },
  {
    id: 3,
    number: '03',
    category: 'CANDID ARTISTRY',
    title: 'INTENTIONAL AND ARTFUL STORYTELLING',
    description:
      'Every detail and fleeting emotion is documented with artistic care and natural light. Gentle prompts invite effortless movement and candid joy rather than stiff poses.',
    image: IMG_EXPERIENCE_3,
    alt: 'Wedding reception tablescape with florals and candlelight',
    isGrayscale: false,
  },
  {
    id: 4,
    number: '04',
    category: 'HEIRLOOM MEMORY',
    title: 'TIMELESS DOCUMENTARY APPROACH',
    description:
      'Combining medium format digital with analog film tones, your photographs will stand the test of time so you remember precisely how every moment felt.',
    image: IMG_EXPERIENCE_4,
    alt: 'Couple enjoying sunset on wedding day in Colorado',
    isGrayscale: true,
  },
];

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef(null);

  useGSAP(
    () => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 25,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full bg-white text-[#212121] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 border-t border-[#e8e3d9]"
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Compact Section Header */}
        <div ref={titleRef} className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[#e8e3d9] pb-6 gap-4">
          <div>
            <span className="font-antique text-[9.5px] uppercase tracking-[0.28em] text-[#787169] block mb-1.5 font-medium">
              The Journey &amp; Philosophy
            </span>
            <h2 className="font-noto-serif text-[34px] sm:text-[44px] lg:text-[52px] font-[200] uppercase tracking-[-0.01em] text-[#19191a] leading-none select-none">
              Your <span className="italic font-[300]">Experience</span>
            </h2>
          </div>
          <p className="font-mulish text-xs sm:text-[13.5px] text-[#554e47] max-w-md leading-relaxed">
            Four guiding pillars ensuring a relaxed, authentic photography experience from our first conversation to final heirloom delivery.
          </p>
        </div>

        {/* 
          2x2 COMPACT GRID (Dramatically reduces vertical height by ~65%)
          Desktop: 2 columns side-by-side
          Mobile: 1 column clean cards
        */}
        <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#fbf9f6] border border-[#e8e3d9] p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-[#ded8ce] flex flex-col sm:flex-row gap-5 items-start sm:items-center"
            >
              {/* Left/Top: Compact Square Photo */}
              <div className="relative w-full sm:w-[150px] lg:w-[165px] aspect-square overflow-hidden shrink-0 bg-[#ebe6de] shadow-sm">
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 ${
                    item.isGrayscale ? 'filter grayscale contrast-[1.05]' : ''
                  }`}
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-[#1e1b19]/90 text-white font-antique text-[8px] uppercase tracking-[0.2em] px-2 py-0.5">
                  {item.number}
                </span>
              </div>

              {/* Right: Narrative Details */}
              <div className="flex-1 space-y-2">
                <span className="font-antique text-[8.5px] uppercase tracking-[0.22em] text-[#827a72] font-semibold block">
                  {item.category}
                </span>

                <h3 className="font-antique text-xs sm:text-[13px] font-medium uppercase tracking-[0.16em] text-[#1e1b19] leading-snug">
                  {item.title}
                </h3>

                <p className="font-mulish text-xs sm:text-[12.5px] leading-[1.7] text-[#4d4640]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

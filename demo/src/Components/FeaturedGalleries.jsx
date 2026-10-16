import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution gallery images from Whitney Rae Photography
const IMG_GALLERY_1 = 'https://static.showit.co/800/NSuQ-duax2euKrTUV3zXxw/166421/wrp04006-2.jpg';
const IMG_GALLERY_2 = 'https://static.showit.co/1000/WJsAmSsm0Ff5o3RoaY7cBQ/166421/wrp08051_websize.jpg';
const IMG_GALLERY_3 = 'https://static.showit.co/800/k79s1M4iXFnJ7XGxiig_Aw/166421/wrp00657.jpg';

const GALLERIES = [
  {
    id: 1,
    location: 'BUENA VISTA, COLORADO',
    title: 'A Romantic Celebration at The Surf Hotel',
    image: IMG_GALLERY_1,
    alt: 'Black and white couple holding hands in Buena Vista Colorado',
    isGrayscale: true,
    isCenter: false,
  },
  {
    id: 2,
    location: 'OURAY, COLORADO',
    title: 'Intimate Gold Mountain Ranch Wedding in Ouray, Colorado',
    image: IMG_GALLERY_2,
    alt: 'Bride on cliff edge overlooking mountain valley in Ouray Colorado',
    isGrayscale: false,
    isCenter: true,
  },
  {
    id: 3,
    location: 'VAIL, COLORADO',
    title: 'Best Vail Wedding Venues (from a local)',
    image: IMG_GALLERY_3,
    alt: 'Bride and groom kissing on mountaintop meadow in Vail Colorado',
    isGrayscale: false,
    isCenter: false,
  },
];

export default function FeaturedGalleries() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      // Header smooth reveal
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: 'power3.out',
        clearProps: 'all',
      });

      // Cards staggered entrance
      if (cardsRef.current?.children) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 35,
          duration: 1,
          stagger: 0.15,
          delay: 0.15,
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
      id="portfolio-galleries"
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#e8e3d9]"
    >
      <div className="max-w-[1340px] mx-auto">
        
        {/* 
          1. HEADER:
          VIEW HIGHLIGHTS (Eyebrow)
          FEATURED GALLERIES (Big Headline)
        */}
        <div ref={headerRef} className="text-center space-y-3 mb-10 sm:mb-12 lg:mb-16">
          <p className="font-antique text-[10.5px] uppercase tracking-[0.28em] text-[#524b45] font-medium">
            View Highlights
          </p>

          <h2 className="font-noto-serif text-[42px] sm:text-[64px] md:text-[76px] lg:text-[88px] font-[200] uppercase tracking-[-0.01em] text-[#19191a] leading-none">
            Featured <span className="italic font-[200]">Galleries</span>
          </h2>
        </div>

        {/* 
          2. THREE FEATURED GALLERY CARDS:
          Left card, Center taller card, Right card
        */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-end"
        >
          {GALLERIES.map((item) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${
                item.isCenter
                  ? 'md:col-span-12 lg:col-span-6 order-first lg:order-none'
                  : 'md:col-span-6 lg:col-span-3'
              }`}
            >
              {/* Card Photo Container */}
              <div
                className={`relative w-full overflow-hidden shadow-2xl bg-white ${
                  item.isCenter
                    ? 'aspect-[0.66] sm:aspect-[0.72] lg:aspect-[0.70] max-w-[520px] mx-auto'
                    : 'aspect-[0.75] max-w-[340px] mx-auto lg:max-w-none'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
                    item.isGrayscale ? 'filter grayscale contrast-[1.08]' : ''
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Card Metadata & Title */}
              <div
                className={`pt-5 space-y-2 ${
                  item.isCenter
                    ? 'text-center max-w-[480px] mx-auto'
                    : 'text-left max-w-[340px] mx-auto lg:max-w-none'
                }`}
              >
                {/* Location Eyebrow */}
                <p className="font-antique text-[9.5px] sm:text-[10px] uppercase tracking-[0.26em] text-[#4a443f] font-medium">
                  {item.location}
                </p>

                {/* Italic Serif Title */}
                <h3 className="font-noto-serif italic font-[300] text-base sm:text-[17px] text-[#1e1b19] leading-snug group-hover:opacity-75 transition-opacity">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 
          3. EXPLORE GALLERIES CTA BUTTON
        */}
        <div className="mt-16 lg:mt-24 text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center bg-[#e8e3d9] hover:bg-[#ded8cc] text-[#212121] font-antique text-[10px] tracking-[0.25em] uppercase w-[220px] h-[40px] transition-colors duration-300 shadow-sm"
          >
            Explore Galleries
          </a>
        </div>

      </div>
    </section>
  );
}

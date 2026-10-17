import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// 10 Curated, completely unique high-resolution wedding photographs from Unsplash (no duplicates, 5 per row)
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Aspen Mountain Elopement',
    category: 'Vail, Colorado',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    alt: 'Bride and groom embracing overlooking alpine mountain ridge',
  },
  {
    id: 2,
    title: 'Ceremony Vows & Floral Kiss',
    category: 'Crested Butte',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    alt: 'Couple kissing under floral ceremony arch with mountain backdrop',
  },
  {
    id: 3,
    title: 'Editorial Bridal Lace & Bouquet',
    category: 'Telluride, CO',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    alt: 'Fine art bridal portrait with delicate lace gown and floral bouquet',
  },
  {
    id: 4,
    title: 'Golden Hour Champagne Toast',
    category: 'Steamboat Springs',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80',
    alt: 'Bride and groom raising champagne glasses with joyful celebration',
  },
  {
    id: 5,
    title: 'Sunset Alpine Meadow Embrace',
    category: 'Ouray, Colorado',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    alt: 'Romantic couple walking through sunlit Colorado mountain meadow',
  },
  {
    id: 6,
    title: 'Pine Forest Romance Walk',
    category: 'Piney River Ranch',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
    alt: 'Bride and groom walking through tall pine trees in Colorado',
  },
  {
    id: 7,
    title: 'Golden Hour Couple Stroll',
    category: 'Vail Valley',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    alt: 'Couple holding hands on mountain slope during golden hour',
  },
  {
    id: 8,
    title: 'Candlelit Reception Romance',
    category: 'Devil’s Thumb Ranch',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    alt: 'Atmospheric candlelit tent wedding reception with string lights',
  },
  {
    id: 9,
    title: 'Joyful Celebration Cheers',
    category: 'Flying Diamond Ranch',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    alt: 'Joyful newlyweds celebrating with guests and laughter',
  },
  {
    id: 10,
    title: 'Intimate Hillside Couple Kiss',
    category: 'Northstar Ridge',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    alt: 'Couple sharing a private kiss on green hillside overlooking mountain range',
  },
];

function GalleryCard({ item, isAutoActive, onHoverStart, onHoverEnd }) {
  const colorImgRef = useRef(null);
  const grayImgRef = useRef(null);
  const captionRef = useRef(null);
  const borderRef = useRef(null);
  const isSelfHovered = useRef(false);

  // Sync with auto-active state when card is not being hovered
  useEffect(() => {
    if (isSelfHovered.current) return;

    if (isAutoActive) {
      gsap.to(grayImgRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(colorImgRef.current, { scale: 1.05, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(captionRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(borderRef.current, { opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
    } else {
      gsap.to(grayImgRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(colorImgRef.current, { scale: 1, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(captionRef.current, { opacity: 0, y: 8, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(borderRef.current, { opacity: 0, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
    }
  }, [isAutoActive]);

  const handleMouseEnter = () => {
    isSelfHovered.current = true;
    onHoverStart();

    gsap.to(grayImgRef.current, { opacity: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(colorImgRef.current, { scale: 1.06, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(captionRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(borderRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
  };

  const handleMouseLeave = () => {
    isSelfHovered.current = false;
    onHoverEnd();

    if (!isAutoActive) {
      gsap.to(grayImgRef.current, { opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(colorImgRef.current, { scale: 1, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(captionRef.current, { opacity: 0, y: 8, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(borderRef.current, { opacity: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="gallery-item relative h-[360px] sm:h-[400px] lg:h-[440px] overflow-hidden cursor-pointer rounded-sm bg-[#161514] shadow-md select-none transform-none"
    >
      {/* 1. Base Full-Color Image (GSAP smooth scale, pointer-events-none prevents mouse event disruption) */}
      <img
        ref={colorImgRef}
        src={item.image}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
        loading="lazy"
      />

      {/* 2. Static Grayscale Layer (GSAP smooth opacity fade, pointer-events-none prevents mouse flicker) */}
      <img
        ref={grayImgRef}
        src={item.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-[1.08] brightness-[0.88] pointer-events-none will-change-[opacity]"
        loading="lazy"
      />

      {/* Subtle border highlight */}
      <div
        ref={borderRef}
        className="absolute inset-0 pointer-events-none opacity-0 border border-white/35"
      />

      {/* Elegant Caption Overlay */}
      <div
        ref={captionRef}
        className="absolute inset-x-0 bottom-0 pt-24 pb-5 px-4 sm:px-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none flex flex-col justify-end opacity-0 translate-y-2"
      >
        <div className="flex items-center space-x-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span className="font-antique text-[9px] uppercase tracking-[0.25em] text-[#ded8cc]">
            {item.category}
          </span>
        </div>
        <p className="font-noto-serif italic font-[300] text-white text-[14px] sm:text-[15px] leading-snug">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default function PortfolioGallery() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const isHoveredRef = useRef(false);

  // Automatic cycling: 10 images turn into vibrant color one by one
  // Pauses completely whenever user's cursor is hovering inside the gallery
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        setActiveColorIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      }
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 35,
        duration: 1.2,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 overflow-hidden border-t border-[#e8e3d9]/70"
    >
      {/* Editorial Section Header */}
      <div ref={headerRef} className="max-w-[1240px] mx-auto px-6 sm:px-12 text-center mb-8 sm:mb-10 lg:mb-12">
        <span className="font-antique text-[10px] sm:text-[10.5px] uppercase tracking-[0.3em] text-[#736b63] font-medium block mb-4">
          Curated Portfolio &mdash; Recent Stories
        </span>

        <h2 className="font-noto-serif text-3xl sm:text-4xl lg:text-5xl font-[200] text-[#1c1a18] tracking-[-0.01em] leading-tight">
          Moments in the <span className="italic font-[300]">Quiet</span> &amp; the{' '}
          <span className="italic font-[300]">Grand</span>
        </h2>

        <p className="font-mulish text-sm sm:text-[15px] text-[#5c544d] max-w-[620px] mx-auto mt-4 leading-relaxed">
          A visual collection of intimate mountain vows, joyful couple sessions, and heartfelt celebrations captured with presence and refined artistry across Colorado and worldwide.
        </p>
      </div>

      {/* 
        10-Photo Gallery Grid (Exactly 5 images per row on desktop)
        - Desktop: 5 columns x 2 rows = 10 images (lg:grid-cols-5)
        - GSAP hardware-accelerated silky smooth hover (zero shake, zero hitch)
        - Automatic pause on hover
      */}
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 p-1">
          {GALLERY_ITEMS.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              isAutoActive={activeColorIndex === idx}
              onHoverStart={() => { isHoveredRef.current = true; }}
              onHoverEnd={() => { isHoveredRef.current = false; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

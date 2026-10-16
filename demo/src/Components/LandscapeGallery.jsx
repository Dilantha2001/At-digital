import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution assets from Whitney Rae Photography
const PANORAMA_CAMP_HALE = 'https://static.showit.co/1600/QDiKgrEYnYRq1vb-yeZdpQ/166421/drone_image_of_couple_on_wedding_day_at_camp_hale.jpg';
const IMG_SHOES_DETAIL = 'https://static.showit.co/800/2vGfVCEx64fWSfeyd0aZTQ/166421/wrp01011.jpg';
const IMG_PINE_TREES = 'https://static.showit.co/800/Ms0xlKFtesW-wyojyeeskw/166421/vail_chapel_wedding_portraits.jpg';
const IMG_TENT_RECEPTION = 'https://static.showit.co/800/c1gOVEXtK7EKKxdPgUObbA/166421/vail_white_tent_wedding_photo.jpg';

export default function LandscapeGallery() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useGSAP(
    () => {
      // Smooth entrance when scrolling into view with clearProps so inline transforms are removed
      gsap.from([leftCardRef.current, rightCardRef.current], {
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        clearProps: 'all',
      });

      gsap.from(centerCardRef.current, {
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 
        1. THE CUTOUT WINDOW (Fixed Panoramic Background) - Balanced Height
      */}
      <div
        className="w-full h-[460px] sm:h-[540px] md:h-[640px] lg:h-[720px] xl:h-[780px] bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${PANORAMA_CAMP_HALE})`,
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* 
        2. THE 3 OVERLAPPING IMAGES
        - 2 small side photos lifted WAY up onto the panorama cutout window
        - Large middle photo centered and prominent
      */}
      <div className="relative z-30 w-full bg-[#fbf9f6] pb-6 sm:pb-8 lg:pb-10">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-start -mt-24 sm:-mt-32 md:-mt-44 lg:-mt-52">
            
            {/* PHOTO 1: LEFT SIDE (Bridal Shoes) - Balanced Elevated Height */}
            <div
              ref={leftCardRef}
              className="md:col-span-3 flex justify-center md:justify-end relative -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-24 z-30"
            >
              <div className="relative aspect-[0.66] w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] overflow-hidden shadow-2xl bg-white select-none">
                <img
                  src={IMG_SHOES_DETAIL}
                  alt="Bridal heels and delicate pastel flowers on textured linen"
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* PHOTO 2: CENTER (Pine Trees & Couple) - LARGE & CENTERED HERO */}
            <div
              ref={centerCardRef}
              className="md:col-span-6 flex justify-center relative -top-2 sm:-top-4 md:-top-6 z-20"
            >
              <div className="relative aspect-[0.74] w-full max-w-[560px] lg:max-w-[620px] overflow-hidden shadow-2xl bg-white select-none">
                <img
                  src={IMG_PINE_TREES}
                  alt="Tall pine trees in Vail Colorado mountains"
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* PHOTO 3: RIGHT SIDE (White Tent Reception) - Balanced Elevated Height */}
            <div
              ref={rightCardRef}
              className="md:col-span-3 flex justify-center md:justify-start relative -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-24 z-30"
            >
              <div className="relative aspect-[0.66] w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] overflow-hidden shadow-2xl bg-white select-none">
                <img
                  src={IMG_TENT_RECEPTION}
                  alt="Vail white tent wedding reception with string lights and chandeliers"
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

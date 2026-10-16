import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Exact high-resolution black & white celebration photo of Jess & Jarad
const CELEBRATION_PHOTO = 'https://static.showit.co/800/7rZATr-ospBmjACBCGdJ_g/166421/wrp09952.jpg';

export default function ClientTestimonial() {
  const containerRef = useRef(null);
  const photoRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      // Smooth entrance on scroll
      gsap.from(photoRef.current, {
        opacity: 0,
        x: -30,
        duration: 1.2,
        ease: 'power3.out',
      });

      if (contentRef.current?.children) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 25,
          duration: 1.1,
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
      className="relative w-full bg-[#fbf9f6] text-[#212121] py-10 sm:py-12 lg:py-14 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* 
            LEFT COLUMN: Black & White Joyful Celebration Photo
            Bride with arms in the air and groom cheering with guests
          */}
          <div
            ref={photoRef}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[0.76] overflow-hidden shadow-2xl bg-white">
              <img
                src={CELEBRATION_PHOTO}
                alt="Joyful bride and groom celebrating with guests at Flying Diamond Ranch"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </div>

          {/* 
            RIGHT COLUMN: Testimonial Quote & Story
          */}
          <div
            ref={contentRef}
            className="lg:col-span-7 space-y-7 lg:pl-2 pt-1"
          >
            {/* Top Bold Italic Serif Quote Headline */}
            <h3 className="font-serif italic font-[300] text-xl sm:text-2xl lg:text-[24px] text-[#19191a] leading-snug tracking-wide">
              &ldquo;As I look through our photos, I can remember exactly how we felt in those moments.&rdquo;
            </h3>

            {/* Testimonial Narrative Paragraphs */}
            <div className="space-y-6 text-[#2c2825] font-mulish text-sm sm:text-[15px] leading-[2.05] max-w-[620px]">
              <p>
                &ldquo;From the very beginning, Whitney made us feel completely comfortable. On a day that can feel
                overwhelming, she somehow made taking photos feel effortless and fun. She has an incredible
                ability to give direction when needed while still allowing moments to unfold naturally, and we never
                felt like we were constantly posing for the camera. Instead, we were able to be fully present with
                each other and with our friends and family.
              </p>

              <p>
                What stands out most to us is how Whitney captured the true essence of our wedding day. As I
                look through our photos, I can remember exactly how we felt in those moments. She captured the
                big, emotional moments, but also all of the little in-between moments that we didn&apos;t even realize
                were happening—the laughter, the chaos, the hugs, the dancing, the looks between people, and all
                of the tiny details that made the day ours.
              </p>

              <p>
                We trusted her completely, and that trust made such a difference. Whitney didn&apos;t just document our
                wedding—she captured the feeling of it, the people we love, and the energy and joy that made the
                day so special.&rdquo;
              </p>
            </div>

            {/* Attribution Sign-off */}
            <div className="pt-4">
              <p className="font-antique text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#3d3732] font-medium">
                -JESS + JARAD | FLYING DIAMOND RANCH 2026
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

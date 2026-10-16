import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import coverImg from '../assets/cover.jpg';

// Exact high-resolution asset: Whitney Rae in field with camera
const WHITNEY_FIELD_IMG = 'https://static.showit.co/800/PAAH87MzRWG_SzPQJLfEdg/166421/wrp06153.jpg';

// Panoramic fixed background using cover.jpg from assets
const BG_PANORAMA_FILM = coverImg;

export default function InquireContact() {
  const containerRef = useRef(null);
  const titleBannerRef = useRef(null);
  const formCardRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    documentType: '',
    eventDates: '',
    location: '',
    venue: '',
    planner: '',
    referral: '',
    message: '',
  });

  useGSAP(
    () => {
      // Smooth entrance of the banner title
      gsap.from(titleBannerRef.current, {
        opacity: 0,
        y: 35,
        duration: 1.2,
        ease: 'power3.out',
        clearProps: 'all',
      });

      // Smooth rise of the contact container
      gsap.from(formCardRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'all',
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 
        1. THE CUTOUT WINDOW (Fixed Golden Hour Sunset Background Photo) - Substantially Enlarged
      */}
      <div
        className="w-full h-[680px] sm:h-[800px] md:h-[900px] lg:h-[980px] min-h-[75vh] bg-fixed bg-cover bg-center relative flex flex-col justify-start items-center"
        style={{
          backgroundImage: `url(${BG_PANORAMA_FILM})`,
          backgroundPosition: 'center 35%',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div
          ref={titleBannerRef}
          className="relative z-10 pt-20 sm:pt-28 md:pt-36 lg:pt-40 text-center px-6 select-none"
        >
          <h2 className="font-noto-serif italic font-[200] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-[-0.01em] text-[#1c1a18] leading-[1.08] drop-shadow-sm">
            Inquire to Begin <br />
            With Whitney
          </h2>
        </div>
      </div>

      {/* 
        2. THE AUTHENTIC INQUIRY FORM CONTAINER (From User Screenshot)
      */}
      <div
        ref={formCardRef}
        className="relative z-30 w-full bg-[#faf8f5] text-[#212121] -mt-16 sm:-mt-24 md:-mt-28 pb-28 lg:pb-36 pt-10 sm:pt-16 shadow-2xl border-t border-[#e8e3d9]"
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-20">
          
          {/* Top Section: Photo on Left & Italic Note on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center pb-12 sm:pb-16">
            
            {/* Left: Whitney's B&W Field Portrait */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative aspect-[0.76] w-full max-w-[420px] overflow-hidden shadow-xl bg-white -mt-14 sm:-mt-24 z-20">
                <img
                  src={WHITNEY_FIELD_IMG}
                  alt="Whitney Rae smiling in Colorado mountain sagebrush field"
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Editorial Message & Direct Email */}
            <div className="md:col-span-7 space-y-7 lg:pl-6 text-left">
              <p className="font-noto-serif italic font-[300] text-base sm:text-lg lg:text-[19px] leading-[1.65] text-[#2c2825] max-w-[560px]">
                Inquire to share more about your vision and photography goals&mdash;whether
                you&apos;re planning a Colorado mountain wedding, or a destination event abroad.
                Whitney Rae and her team respond to all messages within 48 hours, M&ndash;Th, 9AM to 5PM MST
              </p>

              <div className="space-y-4 pt-2">
                <p className="font-mulish text-xs sm:text-[13px] text-[#554e47] leading-relaxed">
                  If you do not hear from our team, please send a message directly to:
                </p>
                <div className="w-48 h-[1px] bg-[#ded8ce]" />
                <p>
                  <a
                    href="mailto:HELLO@BYWHITNEYRAE.COM"
                    className="font-antique text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#212121] uppercase hover:opacity-75 transition-opacity"
                  >
                    HELLO@BYWHITNEYRAE.COM
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Large Title Area & Contact Form Anchor */}
          <div
            id="inquire"
            className="scroll-mt-24 sm:scroll-mt-28 pt-6 pb-10 sm:pb-14 border-t border-[#e8e3d9]"
          >
            <span id="contact" className="sr-only" />
            <h2 className="font-noto-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-[200] text-[#1c1a18] leading-tight select-none">
              Inquiry Form
            </h2>
            <p className="font-antique text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#2c2825] uppercase mt-2 select-none">
              CONTACT WHITNEY RAE &mdash; COLORADO WEDDING PHOTOGRAPHER
            </p>
          </div>

          {/* Interactive Form with Minimal Underlines */}
          <div className="bg-[#fcfaf7] p-8 sm:p-14 lg:p-16 border border-[#e8e3d9]/70 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <h3 className="font-noto-serif text-3xl font-[200] text-[#1e1b19]">
                  Thank you, {formData.name || 'there'}!
                </h3>
                <p className="font-mulish text-sm text-[#4a443f] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been submitted successfully. Whitney and the team will get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      Your First and Last Names: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name here"
                      className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] placeholder-[#8f8880] focus:outline-none focus:border-black transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      Your Email: *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.g. myemail@email.com"
                      className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] placeholder-[#8f8880] focus:outline-none focus:border-black transition"
                    />
                  </div>
                </div>

                {/* Row 2: Documenting Dropdown & Event Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      What Will We Be Documenting?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.documentType}
                        onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                        className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] appearance-none focus:outline-none focus:border-black transition cursor-pointer pr-8"
                      >
                        <option value="">Select an option</option>
                        <option value="wedding">Colorado Mountain Wedding</option>
                        <option value="destination">Destination Wedding</option>
                        <option value="elopement">Intimate Mountain Elopement</option>
                        <option value="editorial">Editorial / Couples Session</option>
                      </select>
                      <svg className="w-4 h-4 absolute right-2 top-2 pointer-events-none text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      Event Date(s):
                    </label>
                    <input
                      type="text"
                      value={formData.eventDates}
                      onChange={(e) => setFormData({ ...formData, eventDates: e.target.value })}
                      className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] focus:outline-none focus:border-black transition"
                    />
                  </div>
                </div>

                {/* Row 3: Wedding Location & Venue */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      Wedding Location: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] focus:outline-none focus:border-black transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      Name of Venue: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] focus:outline-none focus:border-black transition"
                    />
                  </div>
                </div>

                {/* Row 4: Planner & Referral */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      Name of Wedding Planner: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.planner}
                      onChange={(e) => setFormData({ ...formData, planner: e.target.value })}
                      className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] focus:outline-none focus:border-black transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                      How Did You Hear About Me? *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.referral}
                        onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                        className="w-full bg-transparent border-b border-[#212121] pb-2 text-sm font-mulish text-[#212121] appearance-none focus:outline-none focus:border-black transition cursor-pointer pr-8"
                      >
                        <option value="">Select an option</option>
                        <option value="instagram">Instagram (@bywhitneyrae)</option>
                        <option value="rocky-mountain-bride">Rocky Mountain Bride</option>
                        <option value="the-knot">The Knot / WeddingWire</option>
                        <option value="planner">Planner / Venue Recommendation</option>
                        <option value="friend">Friend / Family Referral</option>
                        <option value="google">Google Search</option>
                      </select>
                      <svg className="w-4 h-4 absolute right-2 top-2 pointer-events-none text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 5: Detailed Event Textarea */}
                <div className="space-y-3 pt-2">
                  <label className="block font-serif italic text-xs sm:text-[13px] text-[#2c2825]">
                    Tell Us More About Your Event Below: *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave me any details you'd like me to know, some info about you and your plans for your wedding weekend. Extra bonus points if you leave a link to your Pinterest / Inspo board - I love to dream with you!"
                    className="w-full bg-transparent border border-[#212121] p-4 text-xs sm:text-sm font-mulish text-[#212121] placeholder-[#7d766f] focus:outline-none focus:border-black transition resize-y leading-relaxed"
                  />
                </div>

                {/* Bottom Footer: ReCaptcha & Send Button */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-[10px] sm:text-[11px] text-[#736c64] font-mulish">
                    This form is protected by reCAPTCHA and the Google{' '}
                    <span className="underline cursor-pointer">Privacy Policy</span> and{' '}
                    <span className="underline cursor-pointer">Terms of Service</span> apply.
                  </p>

                  <button
                    type="submit"
                    className="bg-[#f0ebe3] hover:bg-[#e4ddd3] text-[#332f2b] font-antique text-[10.5px] tracking-[0.28em] uppercase px-12 py-3 transition-colors duration-300 shadow-sm self-end sm:self-auto cursor-pointer"
                  >
                    Send
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

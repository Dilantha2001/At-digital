// Authentic wedding photography assets from top section
import weddingThumb1 from '../assets/hero (1).jpg';
import weddingThumb2 from '../assets/hero (6).jpg';
import weddingThumb3 from '../assets/hero (7).jpg';

const FOOTER_THUMB_1 = weddingThumb1;
const FOOTER_THUMB_2 = weddingThumb2;
const FOOTER_THUMB_3 = weddingThumb3;

export default function Footer() {
  const footerNavLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'THE EXPERIENCE', href: '#packages' },
    { name: 'GALLERIES', href: '#portfolio-galleries' },
    { name: 'JOURNAL', href: '#journal' },
    { name: 'INQUIRE', href: '#inquire' },
  ];

  return (
    <footer className="w-full bg-[#121110] text-[#e8e3d9] pt-16 sm:pt-20 pb-12 px-6 sm:px-12 lg:px-20 border-t border-[#262320]">
      <div className="max-w-[1340px] mx-auto">
        
        {/* 
          1. TOP BAR: Centered "WHITNEY RAE" + Subtitle + Nav Links + Social Icons on Far Right
        */}
        <div className="relative flex flex-col items-center justify-center pb-12 sm:pb-16 border-b border-[#262320]">
          
          {/* Social Icons (Top Right on desktop) */}
          <div className="md:absolute right-0 top-0 flex items-center space-x-5 text-[#8e877e] mb-6 md:mb-0">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.04.86.12V9.34a6.34 6.34 0 00-.86-.06 6.34 6.34 0 106.34 6.34V8.45a8.28 8.28 0 005.12 1.74V6.75a4.83 4.83 0 01-1.35-.06z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-4.37 23.18c-.06-.99-.12-2.52.02-3.6.14-1.08.92-3.9 1.1-4.66-.28-.56-.44-1.3-.44-2.12 0-2 1.16-3.5 2.6-3.5 1.22 0 1.82.92 1.82 2.02 0 1.23-.78 3.08-1.18 4.78-.34 1.44.72 2.62 2.14 2.62 2.58 0 4.56-2.72 4.56-6.64 0-3.48-2.5-5.9-6.08-5.9-4.14 0-6.56 3.1-6.56 6.32 0 1.24.48 2.58 1.08 3.3.12.14.14.26.1.4-.1.44-.34 1.4-.38 1.6-.06.26-.2.32-.46.2-1.72-.8-2.8-3.32-2.8-5.34 0-4.34 3.16-8.34 9.12-8.34 4.8 0 8.52 3.42 8.52 7.98 0 4.76-3 8.6-7.16 8.6-1.4 0-2.72-.72-3.16-1.58l-.86 3.3c-.32 1.2-1.18 2.7-1.76 3.64A12 12 0 1012 0z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:hello@bywhitneyrae.com"
              aria-label="Email"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Centered Large Serif Brand Name */}
          <h2 className="font-noto-serif text-4xl sm:text-5xl lg:text-[56px] font-[200] uppercase tracking-[0.18em] text-white select-none text-center">
            Whitney Rae
          </h2>
          <p className="font-antique text-[9px] sm:text-[10px] tracking-[0.32em] uppercase text-[#8e877e] mt-2 text-center">
            Colorado & Worldwide Wedding Photographer
          </p>

          {/* Centered Horizontal Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 font-antique text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-[#d6d0c7]">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#d6d0c7] after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>

        {/* 
          2. MAIN THREE-COLUMN CONTENT
          Left Column (Bio summary) | Center Column (3 Square Photos + Button) | Right Column (Vail location + Tagline)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-14 sm:pt-20">
          
          {/* LEFT: Short Brand Bio */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <span className="font-antique text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#8e877e] mb-3 block">
              The Studio
            </span>
            <p className="font-mulish text-sm sm:text-[14.5px] leading-[1.85] text-[#b8b0a5] max-w-[310px]">
              Based in Colorado and available worldwide, Whitney photographs
              weddings with a refined, documentary-style approach&mdash;designed to
              feel calm, collaborative, and effortlessly you.
            </p>
            <a
              href="mailto:hello@bywhitneyrae.com"
              className="font-antique text-[10px] tracking-[0.22em] text-[#8e877e] hover:text-[#ede8df] uppercase mt-4 transition-colors duration-300"
            >
              hello@bywhitneyrae.com
            </a>
          </div>

          {/* CENTER: 3 Square Photos + "LET'S GET STARTED" Button */}
          <div className="lg:col-span-4 flex flex-col items-center space-y-8">
            
            {/* 3 Square Photo Thumbnails with Silky Smooth Hover Effect */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {/* Photo 1 */}
              <a
                href="#portfolio"
                aria-label="View portfolio story 1"
                className="aspect-square w-20 sm:w-24 md:w-28 overflow-hidden rounded-sm border border-white/10 hover:border-white/50 shadow-2xl bg-[#1b1917] group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 relative block"
              >
                <img
                  src={FOOTER_THUMB_1}
                  alt="Bride and groom ring and hands detail"
                  className="w-full h-full object-cover object-center grayscale-[35%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transform-gpu transition-all duration-700 ease-out group-hover:scale-115 will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </a>

              {/* Photo 2 */}
              <a
                href="#portfolio"
                aria-label="View portfolio story 2"
                className="aspect-square w-20 sm:w-24 md:w-28 overflow-hidden rounded-sm border border-white/10 hover:border-white/50 shadow-2xl bg-[#1b1917] group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 relative block"
              >
                <img
                  src={FOOTER_THUMB_2}
                  alt="Bride walking with flowing veil in alpine meadow"
                  className="w-full h-full object-cover object-center grayscale-[35%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transform-gpu transition-all duration-700 ease-out group-hover:scale-115 will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </a>

              {/* Photo 3 */}
              <a
                href="#portfolio"
                aria-label="View portfolio story 3"
                className="aspect-square w-20 sm:w-24 md:w-28 overflow-hidden rounded-sm border border-white/10 hover:border-white/50 shadow-2xl bg-[#1b1917] group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 relative block"
              >
                <img
                  src={FOOTER_THUMB_3}
                  alt="Bride and groom fine art church ceremony"
                  className="w-full h-full object-cover object-center grayscale-[35%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transform-gpu transition-all duration-700 ease-out group-hover:scale-115 will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </a>
            </div>

            {/* Centered Button */}
            <a
              href="#inquire"
              className="inline-flex items-center justify-center bg-[#ede8df] hover:bg-white text-[#121110] font-antique text-[10px] font-semibold tracking-[0.28em] uppercase px-9 py-3.5 transition-all duration-300 shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 cursor-pointer"
            >
              Let&apos;s Get Started
            </a>

          </div>

          {/* RIGHT: Location & Tagline */}
          <div className="lg:col-span-4 text-center lg:text-right flex flex-col items-center lg:items-end space-y-3">
            {/* Location */}
            <p className="font-antique text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.26em] text-white">
              Based in Vail | CO
            </p>

            {/* Small subtle line */}
            <div className="w-16 h-[1px] bg-[#332f2a]" />

            {/* Tagline */}
            <p className="font-antique text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] text-[#aba39a] leading-[2.1] font-normal max-w-[260px]">
              Romanticizing life in <br />
              beautiful locations <br />
              around the globe
            </p>

            {/* Signature Script Accent */}
            <p className="font-bilbo text-2xl text-[#d4cdc3]/75 pt-1 select-none">
              with love &amp; intention
            </p>
          </div>

        </div>

        {/* 
          3. BOTTOM COPYRIGHT & BACK TO TOP BAR
        */}
        <div className="border-t border-[#262320] mt-16 sm:mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mulish text-[11px] tracking-wider text-[#787169] text-center md:text-left">
            &copy; {new Date().getFullYear()} WHITNEY RAE PHOTOGRAPHY. ALL RIGHTS RESERVED.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-antique text-[10px] tracking-[0.25em] text-[#9e968d] hover:text-white uppercase transition-colors group cursor-pointer"
          >
            <span>Back To Top</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>

          <div className="flex items-center space-x-4 text-[9.5px] font-antique tracking-[0.2em] text-[#787169] uppercase">
            <span>Editorial &amp; Luxury</span>
            <span className="w-1 h-1 rounded-full bg-[#3a3530]" />
            <span>Worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

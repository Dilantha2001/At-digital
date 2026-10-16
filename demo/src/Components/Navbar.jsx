import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Hidden initially on the first page
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // First page / hero threshold
      const firstPageThreshold = window.innerHeight * 0.7;

      // On the first page (top of site), do NOT show navbar
      if (currentScrollY <= firstPageThreshold) {
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN -> hide navbar
        if (currentScrollY - lastScrollY.current > 6 && !mobileOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> reveal navbar
        if (lastScrollY.current - currentScrollY > 6) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'INQUIRE', href: '#inquire' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#121110]/95 backdrop-blur-md border-b border-[#262320] transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Left: White Text Logo (Whitney Rae) */}
        <a
          href="#home"
          className="flex items-center group py-2 select-none"
          aria-label="Whitney Rae Home"
        >
          <span className="font-noto-serif text-2xl sm:text-[27px] font-[200] uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-[#ede8df]">
            Whitney Rae
          </span>
        </a>

        {/* Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-antique text-[11px] font-medium tracking-[0.24em] text-[#d6d0c7]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#inquire"
            className="bg-[#ede8df] hover:bg-white text-[#121110] font-antique text-[10px] font-semibold tracking-[0.26em] uppercase px-5 py-2.5 transition-all duration-300 shadow-md hover:shadow-white/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white hover:text-[#ede8df] focus:outline-none transition-colors"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#141210] px-6 py-6 border-t border-[#262320] space-y-4 text-center font-antique text-xs font-medium tracking-[0.25em]">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-[#d6d0c7] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </div>
          ))}
          <div className="pt-2">
            <a
              href="#inquire"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-[#ede8df] hover:bg-white text-[#121110] font-semibold uppercase px-7 py-2.5 tracking-[0.25em] transition-colors"
            >
              Inquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

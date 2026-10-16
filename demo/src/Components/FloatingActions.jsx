export default function FloatingActions() {
  return (
    <aside
      aria-label="Quick Navigation and Tools"
      className="fixed right-4 bottom-24 z-50 flex flex-col items-center space-y-2.5"
    >
      {/* 1. Book / Journal */}
      <button
        aria-label="Journal"
        className="w-10 h-10 rounded-full bg-[#1c1a18]/90 text-white/90 hover:text-white hover:bg-black flex items-center justify-center shadow-lg border border-white/10 transition-all duration-200 hover:scale-105"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </button>

      {/* 2. Compass / Audio / Experience */}
      <button
        aria-label="Experience"
        className="w-10 h-10 rounded-full bg-[#1c1a18]/90 text-white/90 hover:text-white hover:bg-black flex items-center justify-center shadow-lg border border-white/10 transition-all duration-200 hover:scale-105"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13l-4 7 7-4-3-3z" />
        </svg>
      </button>

      {/* 3. Grid / Gallery */}
      <button
        aria-label="Gallery Grid"
        className="w-10 h-10 rounded-full bg-[#1c1a18]/90 text-white/90 hover:text-white hover:bg-black flex items-center justify-center shadow-lg border border-white/10 transition-all duration-200 hover:scale-105"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>

      {/* 4. Chat / Inquire */}
      <a
        href="#inquire"
        aria-label="Inquire or Contact"
        className="relative w-10 h-10 rounded-full bg-[#1c1a18]/90 text-white/90 hover:text-white hover:bg-black flex items-center justify-center shadow-lg border border-white/10 transition-all duration-200 hover:scale-105 cursor-pointer"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
          ✦
        </div>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#1c1a18]" />
      </a>
    </aside>
  );
}

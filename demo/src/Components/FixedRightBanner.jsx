import BRIDE_16_IMG from '../assets/bride16.jpg';

// Exact high-resolution asset from Whitney Rae Photography
// Right-side alpine ceremony photo:
const RIGHT_CEREMONY_IMG = 'https://static.showit.co/1200/qDLgLaVdLGPqZJuUOh37fA/166421/wrp07329.jpg';

export default function FixedRightBanner() {
  return (
    <section className="relative w-full min-h-[500px] lg:h-[80vh] lg:min-h-[680px] lg:max-h-[820px] overflow-hidden bg-[#fbf9f6]">
      {/* 
        SPLIT FULL-PAGE EDITORIAL DIPTYCH
        - Left half: Fixed background cutout window showing bride16.jpg.
        - Right half: High-res alpine ceremony photo of the couple saying 'I do' (wrp07329.jpg).
        - Height: Full screen viewport (lg:h-screen min-h-[950px]).
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {/* LEFT HALF: Bride16 with Fixed Background Cutout Window */}
        <div
          className="relative w-full h-[420px] sm:h-[520px] lg:h-full bg-cover bg-center lg:bg-fixed lg:bg-[left_center] overflow-hidden"
          style={{
            backgroundImage: `url(${BRIDE_16_IMG})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
        </div>

        {/* RIGHT HALF: Alpine Ceremony Photo */}
        <div className="relative w-full h-[480px] sm:h-[580px] lg:h-full overflow-hidden bg-[#fbf9f6] group">
          <img
            src={RIGHT_CEREMONY_IMG}
            alt="Couple saying ‘I do’ with sweeping alpine landscape as their backdrop | Colorado elopement photographer"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

const PACKAGES = [
  {
    id: 'elopement',
    name: 'The Mountain Elopement',
    badge: 'Intimate Vows',
    price: '$6,500',
    duration: 'Up to 6 Hours Coverage',
    description: 'Curated for intimate mountain elopements and micro-weddings (up to 30 guests).',
    features: [
      '6 Hours Continuous Coverage by Whitney Rae',
      'Custom Mountain Timeline & Scouting Guidance',
      '400+ Hand-Edited High-Res Images & Gallery',
      '35mm Analog Film Coverage Included',
      'Full Personal Print Rights + 48h Sneak Peeks',
    ],
    isFeatured: false,
    ctaText: 'Inquire for Elopement',
  },
  {
    id: 'signature',
    name: 'The Signature Collection',
    badge: 'Most Popular',
    price: '$9,200',
    duration: '8 to 9 Hours All-Day Coverage',
    description: 'Our most-loved full celebration experience preserving every sacred, candid chapter.',
    features: [
      '8-9 Hours Coverage with Second Shooter',
      'Complimentary 90-Min Engagement Session',
      '700+ Edited Images + 35mm Film Blend',
      '$500 Fine Art Linen Album Credit',
      'Delivered in 6 Weeks + 48h Sneak Peeks',
    ],
    isFeatured: true,
    ctaText: 'Book Signature Collection',
  },
  {
    id: 'weekend',
    name: 'The Multi-Day Heirloom',
    badge: 'Luxury Weekend',
    price: '$13,500',
    duration: 'Full Weekend Coverage (2 Days)',
    description: 'For destination weddings with rehearsal dinners and multi-day festivities.',
    features: [
      '12 Hours Across 2 Days (Rehearsal + Wedding)',
      'Whitney Rae + Associate Second Photographer',
      'Dedicated 35mm & 120mm Film Coverage',
      'Destination Engagement Session in Colorado',
      'Deluxe 12x12 Italian Leather Album + 2 Parent Albums',
      'Express 3-Week Delivery + Keepsake USB',
    ],
    isFeatured: false,
    ctaText: 'Inquire for Weekend',
  },
];

const ADD_ONS = [
  { name: 'Rehearsal Dinner Coverage (3 Hours)', price: '$1,800' },
  { name: 'Additional Photographic Coverage', price: '$800 / hour' },
  { name: '10x10 Fine Art Linen Heirloom Album', price: '$1,200' },
  { name: 'Pure Analog Film Upgrade (35mm & 120)', price: '$950' },
];

export default function PricingPackages() {
  return (
    <section
      id="pricing-packages"
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-12 sm:pt-14 pb-10 lg:pb-12 px-4 sm:px-8 lg:px-12 border-t border-[#e8e3d9]"
    >
      <div className="max-w-[1260px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-10 lg:mb-12 space-y-2.5">
          <span className="font-antique text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#736b63] font-medium block">
            Investment &amp; Curated Collections
          </span>

          <h2 className="font-noto-serif text-2xl sm:text-3xl lg:text-4xl font-[200] text-[#1e1b19] tracking-[-0.01em] leading-tight">
            Wedding Photography <span className="italic font-[300]">Packages</span> &amp; Pricing
          </h2>

          <p className="font-mulish text-xs sm:text-[13.5px] leading-relaxed text-[#554e47]">
            Thoughtfully tailored collections for complete peace of mind. Transparent pricing with no hidden travel fees across Colorado.
          </p>
        </div>

        {/* 3-Column Balanced Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 ${
                pkg.isFeatured
                  ? 'bg-white border-2 border-[#1e1b19] shadow-lg ring-1 ring-[#1e1b19]/10'
                  : 'bg-white border border-[#ded8ce] shadow-sm hover:border-[#1e1b19]/40 hover:shadow-md'
              }`}
              style={{ opacity: 1 }}
            >
              {/* Featured Badge */}
              {pkg.isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1e1b19] text-white font-antique text-[8.5px] uppercase tracking-[0.25em] px-3.5 py-1 shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Non-featured badge */}
                {!pkg.isFeatured && (
                  <span className="font-antique text-[9px] uppercase tracking-[0.22em] text-[#827a72] block mb-1.5 font-semibold">
                    {pkg.badge}
                  </span>
                )}

                {/* Package Name */}
                <h3 className="font-noto-serif text-xl font-[300] text-[#1c1a18] leading-tight mb-1">
                  {pkg.name}
                </h3>

                {/* Price Display */}
                <div className="py-3 my-3 border-y border-[#f0ede6]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-noto-serif text-3xl sm:text-[36px] font-[200] text-[#19191a] tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="font-mulish text-[11px] text-[#7a736c] uppercase tracking-wider">
                      / Collection
                    </span>
                  </div>
                  <p className="font-antique text-[10px] uppercase tracking-wider text-[#3d3732] mt-1 font-medium">
                    {pkg.duration}
                  </p>
                </div>

                {/* Package Narrative Description */}
                <p className="font-mulish text-xs leading-[1.7] text-[#4d4640] mb-4">
                  {pkg.description}
                </p>

                {/* Deliverables / "What's Included" List */}
                <div className="space-y-2.5 mb-6">
                  <p className="font-antique text-[8.5px] uppercase tracking-[0.22em] text-[#1e1b19] font-semibold border-b border-[#f0ede6] pb-1.5">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2 pt-0.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-mulish text-xs text-[#2b2622] leading-snug">
                        <span className="text-[#1e1b19] font-bold text-xs shrink-0 select-none">✓</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="pt-3 border-t border-[#f0ede6]">
                <a
                  href="#inquire"
                  className={`block w-full text-center font-antique text-[10px] uppercase tracking-[0.22em] py-3 transition-colors duration-200 ${
                    pkg.isFeatured
                      ? 'bg-[#1e1b19] hover:bg-[#38332f] text-white font-medium'
                      : 'bg-[#ebe6de] hover:bg-[#ded7cd] text-[#1e1b19] font-medium'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* A La Carte Add-Ons Section */}
        <div className="bg-white border border-[#ded8ce] p-6 sm:p-8 max-w-[1040px] mx-auto shadow-sm">
          <div className="text-center max-w-lg mx-auto mb-6">
            <span className="font-antique text-[9px] uppercase tracking-[0.25em] text-[#787169] block mb-1">
              Custom Enhancements
            </span>
            <h4 className="font-noto-serif text-xl sm:text-2xl font-[300] text-[#1c1a18]">
              A La Carte Additions
            </h4>
            <p className="font-mulish text-xs text-[#5a534c] mt-1">
              Tailor any collection with additional hours, heirloom albums, or analog film.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {ADD_ONS.map((addon, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3.5 bg-[#fbf9f6] border border-[#e8e3d9]"
              >
                <span className="font-mulish text-xs text-[#2b2724] font-medium pr-3">
                  {addon.name}
                </span>
                <span className="font-antique text-xs uppercase tracking-wider text-[#1e1b19] font-semibold shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 pt-4 border-t border-[#f0ede6]">
            <p className="font-mulish text-xs text-[#706861] italic">
              Need a bespoke proposal for an international destination?{' '}
              <a href="#inquire" className="underline hover:text-[#1e1b19] font-medium not-italic ml-1">
                Let&apos;s start a custom conversation &rarr;
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

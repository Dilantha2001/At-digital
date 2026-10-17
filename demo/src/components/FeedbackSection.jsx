import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const INITIAL_FEEDBACKS = [
  {
    id: 1,
    name: 'Clara & Benjamin',
    location: 'Piney River Ranch — Vail, CO',
    season: 'Autumn Wedding',
    rating: 5,
    quote: 'She didn’t just take pictures; she bottled up the pure feeling of our day forever.',
    message:
      'From our introductory call to receiving our full wedding gallery, Whitney’s presence was a breath of fresh mountain air. She navigated the unpredictable weather with complete poise, captured every glance between us that nobody else noticed, and made us feel so grounded in the moment.',
    date: 'September 2025'
  },
  {
    id: 2,
    name: 'Maya & Julian',
    location: 'The Little Nell — Aspen, CO',
    season: 'Mountain Elopement',
    rating: 5,
    quote: 'Looking through our album brought both of our families to joyful tears.',
    message:
      'We wanted our wedding photography to feel editorial yet intimate, not stiff or staged. Whitney surpassed every dream we had. Her eye for natural light, movement, and genuine emotion is unmatched in Colorado.',
    date: 'July 2025'
  },
  {
    id: 3,
    name: 'Hannah & Tyler',
    location: 'Camp Hale — Red Cliff, CO',
    season: 'Summer Celebration',
    rating: 5,
    quote: 'The best investment we made for our celebration without a shadow of doubt.',
    message:
      'Whitney is an artist of the highest caliber. She blended seamlessly into our wedding party, putting everyone at ease. The photos have a timeless, film-inspired warmth that we will cherish for the rest of our lives.',
    date: 'August 2025'
  },
  {
    id: 4,
    name: 'Elena & Marcus',
    location: 'Dunton Hot Springs — Telluride, CO',
    season: 'Winter Elopement',
    rating: 5,
    quote: 'Whitney felt like a dear friend who happened to hold world-class artistic vision.',
    message:
      'Our winter ceremony in the mountains was intimate and deeply emotional. Whitney moved through every moment with calm confidence, capturing the snowfall, candlelit dinner, and our quiet vows in a way that feels like poetry on film.',
    date: 'January 2026'
  },
  {
    id: 5,
    name: 'Sophia & Alexander',
    location: 'Beaver Creek Mountain Lodge — Beaver Creek, CO',
    season: 'Summer Wedding',
    rating: 5,
    quote: 'Every single photo feels alive with emotion, movement, and genuine joy.',
    message:
      'We were completely blown away by the gallery. Whitney caught candid glances between our grandparents, the golden light breaking through the aspen trees, and the unrestrained laughter of our first dance. Truly irreplaceable memories.',
    date: 'September 2025'
  },
  {
    id: 6,
    name: 'Charlotte & Liam',
    location: 'Devil’s Thumb Ranch — Tabernash, CO',
    season: 'Autumn Celebration',
    rating: 5,
    quote: 'Our photographs feel like timeless works of art we will treasure for generations.',
    message:
      'Whitney brought an effortless calm to our wedding day. She documented the tender, unscripted moments with breathtaking sensitivity—from our private vows beneath the Continental Divide to the candlelit toasts surrounded by our loved ones.',
    date: 'October 2025'
  }
];

export default function FeedbackSection() {
  const [extraFeedbacks, setExtraFeedbacks] = useState([]);
  const feedbacks = [...extraFeedbacks, ...INITIAL_FEEDBACKS];
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    quote: '',
    message: '',
  });

  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: 'power3.out',
        clearProps: 'all',
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newFeedback = {
      id: Date.now(),
      name: formData.name,
      location: formData.location || 'Colorado Wedding',
      season: 'Recent Celebration',
      rating: formData.rating,
      quote: formData.quote || 'An unforgettable experience with Whitney Rae Photography.',
      message: formData.message,
      date: 'Just Now'
    };

    setExtraFeedbacks([newFeedback, ...extraFeedbacks]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setFormData({ name: '', location: '', rating: 5, quote: '', message: '' });
    }, 2500);
  };

  return (
    <section
      ref={containerRef}
      id="feedback"
      className="relative w-full bg-[#fbf9f6] text-[#212121] pt-8 sm:pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#e8e3d9]"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-[760px] mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="font-antique text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#736b63] font-medium block">
            Kind Words &amp; Reflections
          </span>

          <h2 className="font-noto-serif text-3xl sm:text-4xl lg:text-5xl font-[200] text-[#1e1b19] tracking-[-0.01em] leading-tight">
            Client <span className="italic font-[300]">Feedback</span> &amp; Love Stories
          </h2>

          <p className="font-mulish text-sm sm:text-[14.5px] leading-relaxed text-[#554e47] pt-1">
            Read heartfelt reflections from couples who trusted Whitney Rae Photography to preserve the raw, sacred, and joyful essence of their wedding day.
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 font-antique text-xs uppercase tracking-wider text-[#3d3630]">
              <span className="text-amber-700/80 tracking-widest text-sm">★★★★★</span>
              <span>5.0 Exceptional Rating</span>
            </div>

            <span className="text-[#d8d2c7] hidden sm:inline">|</span>

            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="font-antique text-[10px] uppercase tracking-[0.25em] bg-[#1e1b19] hover:bg-[#38332f] text-white px-7 py-3 transition-colors duration-300 shadow-sm"
            >
              {isFormOpen ? 'Close Form' : '+ Share Your Feedback'}
            </button>
          </div>
        </div>

        {/* Collapsible Feedback Submission Drawer */}
        {isFormOpen && (
          <div className="mb-16 bg-white p-8 sm:p-12 shadow-xl border border-[#e8e3d9] max-w-[840px] mx-auto animate-fade-in transition-all">
            <div className="text-center mb-8">
              <span className="font-antique text-[9.5px] uppercase tracking-[0.25em] text-[#827a72] block mb-1">
                Your Story Matters
              </span>
              <h3 className="font-noto-serif text-2xl font-[300] text-[#1c1a18]">
                Share Your Experience with Whitney
              </h3>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <p className="bilbo-regular text-5xl text-[#2a2420]">Thank You Warmly!</p>
                <p className="font-mulish text-sm text-[#5c544d]">
                  Your review has been added to our love stories collection.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-antique text-[10px] uppercase tracking-wider text-[#635c55] block">
                      Couple Names *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jessica &amp; Michael"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#fbf9f6] border border-[#e2dcd3] px-4 py-2.5 font-mulish text-sm text-[#1e1b19] focus:outline-none focus:border-[#1e1b19] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-antique text-[10px] uppercase tracking-wider text-[#635c55] block">
                      Venue &amp; Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vail Chapel, Colorado"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#fbf9f6] border border-[#e2dcd3] px-4 py-2.5 font-mulish text-sm text-[#1e1b19] focus:outline-none focus:border-[#1e1b19] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="space-y-1.5">
                    <label className="font-antique text-[10px] uppercase tracking-wider text-[#635c55] block">
                      Star Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className={`text-xl transition-transform hover:scale-125 ${
                            star <= formData.rating ? 'text-amber-700/90' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-antique text-[10px] uppercase tracking-wider text-[#635c55] block">
                      Headline Quote
                    </label>
                    <input
                      type="text"
                      placeholder="One line that sums up your day"
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      className="w-full bg-[#fbf9f6] border border-[#e2dcd3] px-4 py-2.5 font-mulish text-sm text-[#1e1b19] focus:outline-none focus:border-[#1e1b19] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-antique text-[10px] uppercase tracking-wider text-[#635c55] block">
                    Your Full Feedback &amp; Reflections *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell future couples about your experience working with Whitney..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#fbf9f6] border border-[#e2dcd3] p-4 font-mulish text-sm text-[#1e1b19] focus:outline-none focus:border-[#1e1b19] transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="font-antique text-[10.5px] uppercase tracking-[0.25em] bg-[#1e1b19] hover:bg-[#38332f] text-white px-10 py-3.5 transition-colors duration-300 shadow-sm"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#e8e3d9]/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Star Rating & Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="text-amber-800/80 text-sm tracking-widest">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="font-antique text-[8.5px] uppercase tracking-[0.2em] bg-[#f4f1ec] text-[#635c54] px-2.5 py-1">
                    Verified Couple
                  </span>
                </div>

                {/* Highlight Quote */}
                <h4 className="font-noto-serif italic font-[300] text-lg sm:text-[19px] text-[#1c1a18] leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </h4>

                {/* Narrative body */}
                <p className="font-mulish text-[13.5px] sm:text-14px leading-[2.05] text-[#4d4640]">
                  {item.message}
                </p>
              </div>

              {/* Couple Attribution Footer */}
              <div className="pt-6 mt-6 border-t border-[#f0ede6]">
                <p className="font-antique text-[11px] uppercase tracking-[0.22em] text-[#1e1b19] font-medium">
                  {item.name}
                </p>
                <p className="font-serif italic text-xs text-[#736c64] mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

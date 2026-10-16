import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import LandscapeGallery from './components/LandscapeGallery';
import AboutWhitney from './components/AboutWhitney';
import FixedRightBanner from './components/FixedRightBanner';
import PortfolioGallery from './components/PortfolioGallery';
import ClientTestimonial from './components/ClientTestimonial';
import ExperienceSection from './components/ExperienceSection';
import PricingPackages from './components/PricingPackages';
import FeaturedGalleries from './components/FeaturedGalleries';
import TestimonialQuote from './components/TestimonialQuote';
import InTheirWords from './components/InTheirWords';
import FeedbackSection from './components/FeedbackSection';
import InquireContact from './components/InquireContact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#dfdeda] text-[#212121] flex flex-col selection:bg-[#c9c2b8] selection:text-[#1e1b18]">
      {/* Luxury Black Arrow & Floating Fluid Bubble Cursor */}
      <CustomCursor />

      {/* Header Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero 3-Panel Split with Whitney Rae Photography Typography */}
        <Hero />

        {/* Section 2: "You Were Fully There" Narrative & Asymmetric Portraits */}
        <AboutIntro />

        {/* Section 3: Camp Hale Panoramic Cutout Window & 3 Overlapping Editorial Photos */}
        <LandscapeGallery />

        {/* Section 4: "Get to Know Whitney Rae" with Overlapping Headline & Infinite GSAP Logo Slideshow */}
        <AboutWhitney />

        {/* Section 5: Split Fixed Background Cutout Window Parallax Banner */}
        <FixedRightBanner />

        {/* Section 5.5: Interactive Responsive Wedding & Couple Portfolio Grid */}
        <PortfolioGallery />

        {/* Section 6: Client Testimonial (B&W Celebration Photo + Jess & Jarad Review) */}
        <ClientTestimonial />

        {/* Section 7: "Your Experience" (4 Curated Packages Philosophy) */}
        <ExperienceSection />

        {/* Section 7.5: Photography Packages & Pricing (3 Tiers + Deliverables + Add-Ons) */}
        <PricingPackages />

        {/* Section 8: "Featured Galleries" (3 Signature Highlights + Explore Button) */}
        <FeaturedGalleries />

        {/* Section 9: Centered White Testimonial Card (Erin & Todd — France) */}
        <TestimonialQuote />

        {/* Section 10: "In Their Words" (Alternating Luxury Wedding Stories) */}
        <InTheirWords />

        {/* Section 10.5: Client Feedback & Reviews (Interactive Submission & Love Stories) */}
        <FeedbackSection />

        {/* Section 11: Inquire to Begin With Whitney (Fixed Background Parallax Window & Cutout Contact Form) */}
        <InquireContact />
      </main>

      {/* Section 12: Luxury Editorial Footer (Brand Name, Links, 3 Square Photos, & Tagline) */}
      <Footer />

      {/* Floating Action Widgets (Right Edge) */}
      <FloatingActions />
    </div>
  );
}

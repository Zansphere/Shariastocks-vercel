import React, { Suspense, useRef, lazy } from 'react';
import { Helmet } from 'react-helmet';

// --- Section Components (Lazy Loaded) ---
const Header = lazy(() => import('./LandingPage/sections/Header'));
const HeroSection = lazy(() => import('./LandingPage/sections/HeroSection'));
const FeaturesSection = lazy(() => import('./LandingPage/sections/FeaturesSection'));
const HowItWorksSection = lazy(() => import('./LandingPage/sections/HowItWorksSection'));
const ComplianceSection = lazy(() => import('./LandingPage/sections/ComplianceSection'));
const PricingSection = lazy(() => import('./LandingPage/sections/PricingSection'));
const TestimonialsSection = lazy(() => import('./LandingPage/sections/TestimonialsSection'));
const FaqSection = lazy(() => import('./LandingPage/sections/FaqSection'));
const CtaSection = lazy(() => import('./LandingPage/sections/CtaSection'));
const Footer = lazy(() => import('./LandingPage/sections/Footer'));

// --- Animation & UI Components ---
import { FloatingShapes } from './LandingPage/animations/FloatingShapes.jsx';
import { SectionLoader } from './LandingPage/ui/SectionLoader.jsx';

export default function LandingPage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800 overflow-x-hidden antialiased">
      <Helmet>
        <title>ShariaStocks | Halal Stock Screening for Islamic Investors</title>
        <meta name="description" content="Find Sharia-compliant stocks for ethical Islamic investing. Screen stocks according to Islamic principles with ShariaStocks' comprehensive halal investment platform." />
        <meta name="keywords" content="halal stocks, Sharia-compliant investing, Islamic finance, halal investment, ethical investing, Islamic principles, halal screening" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <FloatingShapes />
      
      <Suspense fallback={<SectionLoader />}>
        <Header />
        <main className="relative z-20">
          <HeroSection ref={heroRef} />
          <FeaturesSection ref={featuresRef} />
          <HowItWorksSection />
          <ComplianceSection ref={howItWorksRef} />
          <PricingSection ref={pricingRef} />
          <TestimonialsSection />
          <FaqSection ref={faqRef} />
          <CtaSection />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}
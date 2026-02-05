import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { HowIWorkSection } from './components/HowIWorkSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImprintPage } from './components/ImprintPage';

export default function App() {
  const [isImprintPage, setIsImprintPage] = useState(
    () => window.location.hash === '#impressum'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsImprintPage(window.location.hash === '#impressum');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isImprintPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isImprintPage]);

  if (isImprintPage) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#D1D9E6' }}>
        <Navigation isImprintPage />
        <main className="pt-24 pb-16">
          <ImprintPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D1D9E6' }}>
      <Navigation />
      <main>
        <Hero />
        <WelcomeSection />
        <HowIWorkSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

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
import { DatenschutzPage } from './components/DatenschutzPage';

export default function App() {
  const [activePage, setActivePage] = useState<'impressum' | 'datenschutz' | null>(
    () => {
      if (window.location.hash === '#impressum') {
        return 'impressum';
      }
      if (window.location.hash === '#datenschutz') {
        return 'datenschutz';
      }
      return null;
    }
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#impressum') {
        setActivePage('impressum');
        return;
      }
      if (window.location.hash === '#datenschutz') {
        setActivePage('datenschutz');
        return;
      }
      setActivePage(null);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage]);

  if (activePage) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#D1D9E6' }}>
        <Navigation isLegalPage />
        <main className="pt-24 pb-16">
          {activePage === 'impressum' ? <ImprintPage /> : <DatenschutzPage />}
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

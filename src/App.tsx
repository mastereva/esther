import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { HowIWorkSection } from './components/HowIWorkSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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

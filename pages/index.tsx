import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProcessSection from '../components/ProcessSection';
import InstitutionalSection from '../components/InstitutionalSection';
import EcosystemSection from '../components/EcosystemSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative min-h-screen text-gray-900 font-light">
      <div
        className="fixed inset-0 -z-10 bg-no-repeat bg-left-top"
        style={{
          backgroundImage: 'url("/assets/bg-gradient.png")',
          backgroundSize: '100% auto',
        }}
      />
      {/* Full-coverage background image with animation, hidden on screens below 800px */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-cover pointer-events-none hide-mobile-bg"
        style={{
          backgroundImage: 'url("/assets/hero-wave.svg")',
          backgroundSize: '70%',
          backgroundPosition: 'top right',
        }}
      />
      <Navbar activeSection={activeSection} />
      <Hero />
      <ProcessSection />
      <InstitutionalSection />
      <EcosystemSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SkillsTools } from './components/SkillsTools';
import { Portfolio } from './components/Portfolio';
import { DesignProcess } from './components/DesignProcess';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServicePreload, setSelectedServicePreload] = useState<string | undefined>(undefined);

  // Active section scroll spy
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'skills', 'portfolio', 'process', 'experience', 'testimonials', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedServicePreload(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] flex flex-col font-sans selection:bg-[#E5A93B]/20 selection:text-[#18181B]">
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero
          onContactClick={handleScrollToContact}
          onExploreProjects={handleScrollToPortfolio}
        />

        {/* 2. About Me Section */}
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onContactClick={handleScrollToContact}
        />

        {/* 3. Services Section */}
        <Services
          onSelectService={handleServiceSelect}
        />

        {/* 4. Skills & Tools Section */}
        <SkillsTools />

        {/* 5. Portfolio Projects Section */}
        <Portfolio
          onInquireProject={(projectTitle) => handleServiceSelect(`Project: ${projectTitle}`)}
        />

        {/* 6. Design Process Section */}
        <DesignProcess />

        {/* 7 & 8. Experience & Education Section */}
        <ExperienceEducation />

        {/* 9. Testimonials Section */}
        <Testimonials />

        {/* 10. Contact Section */}
        <Contact
          selectedServicePreload={selectedServicePreload}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

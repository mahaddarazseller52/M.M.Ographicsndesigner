import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#E7E2D7] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with MM monogram icon */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="Muhammad Mahad Obaid - Graphic Designer"
          >
            {/* Custom stylized MM monogram matching user design: Left M charcoal, Right M golden amber */}
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#18181B] text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-lg tracking-tighter">
                <span className="text-white">M</span>
                <span className="text-[#E5A93B]">M</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#18181B] group-hover:text-[#E5A93B] transition-colors leading-none">
                Muhammad Mahad Obaid
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#71717A] mt-1">
                Graphic Designer
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Clean single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52525B]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#18181B] font-semibold' : 'hover:text-[#18181B]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5A93B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#18181B] bg-transparent border border-[#18181B]/80 hover:border-[#E5A93B] hover:text-[#E5A93B] rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#18181B] hover:bg-[#EAE5D9] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#E7E2D7] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#27272A] hover:bg-[#F2ECE1] hover:text-[#18181B] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E7E2D7] flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#18181B] border border-[#18181B] rounded-full hover:bg-[#18181B] hover:text-white transition-colors"
              >
                <span>View & Download CV</span>
                <Download className="w-3.5 h-3.5" />
              </button>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E5A93B] rounded-full hover:bg-[#D69624] transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

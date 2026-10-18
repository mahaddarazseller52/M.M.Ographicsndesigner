import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-white pt-16 pb-12 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#27272A]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#27272A] border border-white/10 text-white font-extrabold text-lg">
                <span>M</span><span className="text-[#E5A93B]">M</span>
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">
                  Muhammad Mahad Obaid
                </span>
                <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider font-medium">
                  Modern Graphic Designer
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm">
              “{PERSONAL_INFO.about}”
            </p>

            <div className="text-xs font-semibold text-[#E5A93B] tracking-widest uppercase">
              {PERSONAL_INFO.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#A1A1AA]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Design Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5A93B]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5A93B]" />
                <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93B]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#E5A93B]" />
                <a href={PERSONAL_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {PERSONAL_INFO.website}
                </a>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-2 pt-2">
              {PERSONAL_INFO.socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#27272A] hover:bg-[#E5A93B] text-white flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label={s.name}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div>
            © {new Date().getFullYear()} Muhammad Mahad Obaid. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-[#27272A] flex items-center justify-center text-[#E5A93B]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

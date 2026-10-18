import React from 'react';
import {
  ArrowRight,
  Mail,
  Palette,
  Sparkles,
  Zap,
  Globe,
  MapPin,
  Mouse,
  ArrowDown,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreProjects }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E5A93B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#18181B]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Hero Split Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Tagline Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#71717A] uppercase">
                {PERSONAL_INFO.tagline}
              </span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B] leading-[1.08] mb-3">
              Hi, I’m <span className="text-[#E5A93B]">Muhammad</span> <br />
              <span>Mahad Obaid</span>
            </h1>

            {/* Graphic Designer Subheading with subtle dash */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-8 bg-[#18181B]/40" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#52525B] tracking-tight">
                Graphic Designer
              </h2>
            </div>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl mb-8 font-normal">
              {PERSONAL_INFO.about}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#E5A93B] hover:bg-[#D69624] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#18181B] bg-transparent hover:bg-[#18181B] hover:text-white border border-[#18181B] rounded-full transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Core Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E3D8]/80 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E5A93B]/15 flex items-center justify-center text-[#E5A93B] shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18181B]">Creative</div>
                  <div className="text-xs text-[#71717A]">Designs</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E5A93B]/15 flex items-center justify-center text-[#E5A93B] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18181B]">Modern</div>
                  <div className="text-xs text-[#71717A]">Approach</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E5A93B]/15 flex items-center justify-center text-[#E5A93B] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18181B]">Professional</div>
                  <div className="text-xs text-[#71717A]">Results</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Muhammad's Portrait */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Compositional Elements matching user's reference */}
            {/* 1. Large Golden Yellow Disc */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#E5A93B] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 shadow-lg" />
            
            {/* 2. Thin Golden Accent Ring */}
            <div className="absolute w-80 sm:w-104 h-80 sm:h-104 rounded-full border border-[#E5A93B]/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" />

            {/* 3. Charcoal Vertical Panel Accent */}
            <div className="absolute w-36 sm:w-44 h-72 sm:h-88 bg-[#18181B] rounded-2xl right-4 sm:right-10 top-6 -z-10 shadow-md" />

            {/* 4. Geometric 4x4 Dot Matrix Pattern */}
            <div className="absolute -top-6 right-2 sm:right-6 grid grid-cols-4 gap-2 opacity-50 pointer-events-none">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
              ))}
            </div>

            {/* 5. Handwritten Script Accent: "Design Brings Ideas to Life" */}
            <div className="absolute top-12 -right-4 sm:-right-8 z-20 pointer-events-none hidden sm:block rotate-[-6deg]">
              <div className="font-handwriting text-2xl sm:text-3xl text-[#E5A93B] font-bold tracking-wide drop-shadow-xs">
                Design <br />
                Brings Ideas <br />
                to Life
              </div>
              {/* Handwritten golden underline swoop */}
              <svg
                className="w-20 h-4 text-[#E5A93B] mt-1 -ml-1"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12C30 5 70 5 95 14M75 14L95 14L85 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* The Designer Portrait Container */}
            <div className="relative w-64 sm:w-80 h-80 sm:h-104 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] bg-white group">
              <img
                src={PERSONAL_INFO.heroPortrait}
                alt="Muhammad Mahad Obaid - Graphic Designer Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Artistic Golden Brush Stroke Accent at base */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#E5A93B]/80 via-[#E5A93B]/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white drop-shadow-md">
                <span className="text-[11px] font-semibold tracking-wider uppercase">
                  Muhammad Mahad Obaid
                </span>
                <span className="text-[10px] bg-[#18181B]/80 text-[#E5A93B] px-2 py-0.5 rounded-full font-medium">
                  Karachi, PK
                </span>
              </div>
            </div>

            {/* Vertical Social Floating Dock on Right Edge */}
            <div className="absolute -right-3 sm:-right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
              {PERSONAL_INFO.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-xs border border-[#E7E2D7] text-[#18181B] hover:text-white hover:bg-[#E5A93B] hover:border-[#E5A93B] shadow-xs flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110"
                  aria-label={`Visit Mahad's ${social.name}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar matching User Slide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 border-t border-[#E8E3D8]/60 mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#71717A]">
          {/* Website */}
          <a
            href={PERSONAL_INFO.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#18181B] transition-colors"
          >
            <Globe className="w-4 h-4 text-[#E5A93B]" />
            <span>{PERSONAL_INFO.website}</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#A1A1AA]">Based in</span>
            <MapPin className="w-3.5 h-3.5 text-[#18181B]" />
            <span className="text-[#18181B] font-semibold">{PERSONAL_INFO.location}</span>
          </div>

          {/* Scroll Down Affordance */}
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-[#18181B] transition-colors group cursor-pointer"
          >
            <Mouse className="w-4 h-4 text-[#71717A] group-hover:text-[#E5A93B] transition-colors" />
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E5A93B]" />
          </a>
        </div>
      </div>
    </section>
  );
};

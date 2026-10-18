import React from 'react';
import { Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume, onContactClick }) => {
  const principles = [
    {
      title: 'Simplicity & Intentionality',
      desc: 'Every shape, line, and typeface is chosen with a clear purpose, eliminating noise to let your core message speak with clarity.',
    },
    {
      title: 'Grid & Typographic Discipline',
      desc: 'Rigorous Swiss-inspired baseline grids and calculated font pairings that guarantee visual balance across every medium.',
    },
    {
      title: 'Enduring Brand Relevance',
      desc: 'Avoiding short-lived internet visual gimmicks in favor of resilient visual identities that serve brands reliably for years.',
    },
    {
      title: 'Production Precision',
      desc: 'Flawless execution from screen pixels to physical print—ensuring prepress CMYK fidelity, clean vector curves, and responsive assets.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F2EB] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
            About The Designer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
            Crafting Purposeful Visual Identity with Modern Precision
          </h2>
        </div>

        {/* 2-Column Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-[#404044]">
            <p className="text-lg leading-relaxed text-[#18181B] font-medium">
              “{PERSONAL_INFO.about}”
            </p>

            <p className="text-base leading-relaxed">
              {PERSONAL_INFO.extendedBio}
            </p>

            {/* Quote Block with refined hairline border */}
            <div className="p-6 bg-white rounded-xl border border-[#E3DDD0] shadow-xs">
              <span className="text-xs font-bold tracking-wider text-[#E5A93B] uppercase block mb-1">
                Creative Philosophy
              </span>
              <blockquote className="text-base font-medium italic text-[#18181B] leading-relaxed">
                "{PERSONAL_INFO.philosophy}"
              </blockquote>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#18181B] hover:bg-[#27272A] rounded-full transition-colors cursor-pointer"
              >
                <span>View Full Curriculum Vitae</span>
                <Download className="w-3.5 h-3.5 text-[#E5A93B]" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#18181B] hover:text-[#E5A93B] transition-colors cursor-pointer"
              >
                <span>Discuss a Collaboration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Core Design Pillars */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E3DDD0] shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-[#18181B] tracking-tight border-b border-[#EAE5D8] pb-4">
              Core Design Approach
            </h3>

            <div className="space-y-5">
              {principles.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#E5A93B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#18181B]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#52525B] leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick At-a-glance metadata */}
            <div className="pt-4 border-t border-[#EAE5D8] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#71717A] block">Location</span>
                <span className="font-semibold text-[#18181B]">{PERSONAL_INFO.location}</span>
              </div>
              <div>
                <span className="text-[#71717A] block">Availability</span>
                <span className="font-semibold text-[#18181B]">Freelance & Contract</span>
              </div>
              <div>
                <span className="text-[#71717A] block">Specialization</span>
                <span className="font-semibold text-[#18181B]">Brand & Visual Design</span>
              </div>
              <div>
                <span className="text-[#71717A] block">Response Time</span>
                <span className="font-semibold text-[#18181B]">Within 24 Hours</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

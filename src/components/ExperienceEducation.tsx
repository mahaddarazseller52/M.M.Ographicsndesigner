import React from 'react';
import { EXPERIENCE_ITEMS, EDUCATION_ITEMS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Check } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-lg bg-[#E5A93B]/15 text-[#E5A93B] flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B] block">
                  Track Record
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
                  Professional Practice
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E7E2D7] shadow-xs relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-[#18181B]">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-[#E5A93B]">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#71717A] mb-3">
                    <span className="font-medium text-[#18181B]">{item.type}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#A1A1AA]" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-xs text-[#52525B] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#F2ECE1]">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#3F3F46]">
                        <Check className="w-3.5 h-3.5 text-[#E5A93B] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-lg bg-[#E5A93B]/15 text-[#E5A93B] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B] block">
                  Foundation & Study
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
                  Education & Training
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {EDUCATION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E7E2D7] shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-[#18181B]">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-[#E5A93B]">
                      {item.year}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-[#71717A] mb-3">
                    {item.institution} · <span className="text-[#18181B]">{item.focus}</span>
                  </div>

                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* Core Competencies Box */}
              <div className="p-6 rounded-2xl bg-[#F5F2EB] border border-[#E3DDD0]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2">
                  Academic Focus & Theoretical Mastery
                </h4>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Rigorous grounding in Gestalt principles of perception, Swiss typographic hierarchy, semiotics, color psychology, and prepress prep for offset & digital reproduction.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

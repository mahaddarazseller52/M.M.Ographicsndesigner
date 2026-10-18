import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Check } from 'lucide-react';
import { PERSONAL_INFO, SERVICES, SKILLS_TOOLS, EXPERIENCE_ITEMS, EDUCATION_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#E7E2D7] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E2D7] bg-[#FAF8F5] sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93B]">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-[#A1A1AA]">·</span>
            <span className="text-xs text-[#71717A]">Muhammad Mahad Obaid</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#18181B] text-white hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#18181B] text-[#18181B] hover:text-white flex items-center justify-center border border-[#E7E2D7] transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-8 print:p-0 print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-[#E7E2D7] pb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 id="resume-title" className="text-3xl font-extrabold text-[#18181B] tracking-tight">
                  Muhammad Mahad Obaid
                </h1>
                <p className="text-base font-semibold text-[#E5A93B] mt-0.5">
                  Modern Graphic Designer & Visual Specialist
                </p>
                <p className="text-xs font-medium text-[#71717A] mt-1 tracking-wider uppercase">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

              {/* MM Logo Monogram Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#18181B] text-white flex items-center justify-center font-bold text-xl tracking-tighter shrink-0">
                <span>M</span><span className="text-[#E5A93B]">M</span>
              </div>
            </div>

            {/* Contact details row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 text-xs text-[#52525B]">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E5A93B]" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E5A93B]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E5A93B]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#E5A93B]" />
                <span className="truncate">{PERSONAL_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2 border-b border-[#F2ECE1] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
              {PERSONAL_INFO.about} Specializing in brand identity systems, social media graphics, corporate print collateral, and packaging design. Proven track record of delivering clean, mathematically balanced vector assets and print-ready production files for diverse client portfolios.
            </p>
          </div>

          {/* Core Competencies & Software Tools */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-3 border-b border-[#F2ECE1] pb-1">
              Technical Tools & Creative Disciplines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#71717A] uppercase block mb-1.5">
                  Software Proficiencies:
                </span>
                <div className="space-y-1 text-xs text-[#3F3F46]">
                  <div>• Adobe Photoshop (Advanced photo retouching & mockup design)</div>
                  <div>• Adobe Illustrator (Vector geometry, logos, prepress art)</div>
                  <div>• Figma (UI/UX wireframes, responsive design tokens)</div>
                  <div>• Canva (Client templates & rapid marketing production)</div>
                  <div>• Adobe InDesign (Multi-page editorial publications)</div>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#71717A] uppercase block mb-1.5">
                  Design Disciplines:
                </span>
                <div className="space-y-1 text-xs text-[#3F3F46]">
                  <div>• Brand Identity Systems & Monograms</div>
                  <div>• Swiss Typography & Grid Proportions</div>
                  <div>• High-Converting Social Media Feeds & Ads</div>
                  <div>• Posters, Flyers & Exhibition Displays</div>
                  <div>• Prepress Production (CMYK, 300 DPI, Bleed)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Practice */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-3 border-b border-[#F2ECE1] pb-1">
              Professional Practice & Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_ITEMS.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#18181B]">{exp.role}</span>
                    <span className="font-mono text-[#E5A93B]">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-[#71717A] font-medium">
                    {exp.type} · {exp.location}
                  </div>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-0.5 pt-1">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="text-xs text-[#3F3F46] flex items-center gap-1.5">
                        <span className="text-[#E5A93B]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Studies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-3 border-b border-[#F2ECE1] pb-1">
              Education & Professional Certifications
            </h2>
            <div className="space-y-3">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#18181B]">{edu.degree}</span>
                    <span className="font-mono text-[#E5A93B]">{edu.year}</span>
                  </div>
                  <div className="text-[#71717A]">{edu.institution} — {edu.focus}</div>
                  <p className="text-[#52525B] mt-0.5">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-8 py-4 bg-[#FAF8F5] border-t border-[#E7E2D7] flex items-center justify-between text-xs text-[#71717A] print:hidden">
          <span>Available for select freelance contracts & full-time design roles.</span>
          <button
            onClick={handlePrint}
            className="font-bold text-[#18181B] hover:text-[#E5A93B] transition-colors cursor-pointer"
          >
            Print Document
          </button>
        </div>

      </div>
    </div>
  );
};

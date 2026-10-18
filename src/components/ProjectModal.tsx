import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Layers, Type, Palette as PaletteIcon, Calendar, Briefcase } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#E7E2D7] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E2D7] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#E5A93B] uppercase tracking-wider">
              {project.categoryLabel} Case Study
            </span>
            <span className="text-xs text-[#A1A1AA]">·</span>
            <span className="text-xs text-[#71717A]">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#18181B] text-[#18181B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Header titles */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#8C7A59] mt-1">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#71717A]">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#E5A93B]" />
                Client: <strong className="text-[#18181B]">{project.client}</strong>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#E5A93B]" />
                Completed: {project.year}
              </span>
            </div>
          </div>

          {/* High-Res Hero Artwork Container */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E7E2D7] shadow-md bg-white">
            <img
              src={project.image}
              alt={`${project.title} Design Showcase`}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#18181B] mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-[#52525B] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-base font-bold text-[#18181B] mb-3">
              Key Objectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.objectives.map((obj, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-[#E7E2D7] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E5A93B] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#3F3F46] leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D35B3B] block mb-2">
                The Challenge
              </span>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93B] block mb-2">
                The Design Solution
              </span>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Step-by-Step Design Process */}
          <div>
            <h3 className="text-base font-bold text-[#18181B] mb-4">
              Design Process & Methodology
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.process.map((step, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-[#E7E2D7] relative pl-12">
                  <span className="absolute left-4 top-4 font-mono font-bold text-lg text-[#E5A93B]">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#18181B] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Design System Details: Palette & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Palette */}
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7]">
              <div className="flex items-center gap-2 mb-3">
                <PaletteIcon className="w-4 h-4 text-[#E5A93B]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                  Color Palette System
                </h4>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {project.palette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className="w-full h-12 rounded-lg border border-black/10 shadow-xs mb-1.5"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[10px] font-semibold text-[#18181B] text-center truncate w-full">
                      {color.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#71717A]">
                      {color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Tools */}
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Type className="w-4 h-4 text-[#E5A93B]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                    Typography System
                  </h4>
                </div>
                <p className="text-xs text-[#52525B] mb-4">
                  {project.typography}
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[#E5A93B]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                    Tools & Technologies
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-[11px] font-medium text-[#3F3F46] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E7E2D7]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-3">
              Included Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3F3F46]">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#E5A93B]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E7E2D7] flex flex-wrap items-center justify-between gap-4 sticky bottom-0">
          <span className="text-xs text-[#71717A]">
            Interested in a similar design for your brand?
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#E5A93B] hover:bg-[#D69624] rounded-full transition-colors cursor-pointer"
          >
            <span>Request Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

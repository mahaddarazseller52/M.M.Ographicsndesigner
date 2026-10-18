import React from 'react';
import { DESIGN_PROCESS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#F5F2EB] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
            Work Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
            A Transparent, Four-Step Creative Process
          </h2>
          <p className="text-sm text-[#52525B] mt-2">
            Structured design workflows designed for clarity, zero guesswork, and guaranteed alignment from kickoff to production delivery.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGN_PROCESS.map((step, index) => (
            <div
              key={step.number}
              className="bg-white p-6 rounded-2xl border border-[#E3DDD0] shadow-xs flex flex-col justify-between relative group hover:border-[#E5A93B]/60 transition-all duration-300"
            >
              <div>
                {/* Step Index & Phase */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-[#E5A93B]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#18181B] group-hover:text-[#E5A93B] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#52525B] leading-relaxed mb-6">
                  {step.summary}
                </p>

                {/* Sub-steps */}
                <div className="space-y-2 mb-6">
                  {step.steps.map((activity, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3F3F46]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93B] shrink-0 mt-0.5" />
                      <span className="leading-tight">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Footnote */}
              <div className="pt-4 border-t border-[#F2ECE1]">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block mb-1">
                  Phase Deliverable:
                </span>
                <span className="text-xs font-semibold text-[#18181B] block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

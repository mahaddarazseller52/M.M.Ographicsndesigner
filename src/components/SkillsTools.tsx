import React, { useState } from 'react';
import { SKILLS_TOOLS } from '../data/portfolioData';

export const SkillsTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Software Tools' | 'Design Disciplines'>('All');

  const filteredSkills =
    activeTab === 'All'
      ? SKILLS_TOOLS
      : SKILLS_TOOLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-[#F5F2EB] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
              Technical Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
              Industry Standard Tools & Creative Disciplines
            </h2>
          </div>

          {/* Tab Filter (functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E3DDD0] rounded-xl self-start md:self-auto">
            {(['All', 'Software Tools', 'Design Disciplines'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#18181B] text-white shadow-xs'
                    : 'text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((item) => (
            <div
              key={item.name}
              className="bg-white p-6 rounded-2xl border border-[#E3DDD0] shadow-xs hover:border-[#E5A93B]/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#18181B]">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[#71717A]">·</span>
                  <span className="text-xs font-medium text-[#71717A]">
                    {item.experience}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#E5A93B] tabular-nums">
                  {item.proficiency}%
                </span>
              </div>

              {/* Clean progress bar */}
              <div className="w-full h-2 bg-[#F2ECE1] rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-[#E5A93B] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${item.proficiency}%` }}
                />
              </div>

              <p className="text-xs text-[#52525B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

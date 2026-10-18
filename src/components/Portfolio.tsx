import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Brand Identity', value: 'branding' },
    { label: 'Social Media', value: 'social' },
    { label: 'Posters & Print', value: 'print' },
    { label: 'UI/UX Design', value: 'uiux' },
    { label: 'Packaging', value: 'packaging' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
              Featured Design Projects & Case Studies
            </h2>
            <p className="text-sm text-[#52525B] mt-2">
              Explore recent client commissions and conceptual design systems. Click any card to inspect the full case study.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E7E2D7] rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#18181B] text-white shadow-xs'
                    : 'text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-2xl border border-[#E7E2D7] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#E5A93B]/60 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#FAF8F5]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle scrim overlay on hover */}
                <div className="absolute inset-0 bg-[#18181B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#18181B] text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A93B]" />
                  </span>
                </div>

                {/* Unboxed category badge */}
                <div className="absolute top-3 left-3 bg-[#18181B]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Content info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#71717A] mb-1.5">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#18181B] group-hover:text-[#E5A93B] transition-colors mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Clean unboxed tags */}
                <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[11px] text-[#71717A]">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="hover:text-[#18181B]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#E5A93B] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={(title) => {
          onInquireProject(title);
        }}
      />
    </section>
  );
};

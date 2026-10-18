import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F2EB] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
            Trusted by Brands & Creative Collaborators
          </h2>
          <p className="text-sm text-[#52525B] mt-2">
            Genuine experiences from clients who partnered with Muhammad Mahad Obaid for brand identity and marketing design.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-[#E3DDD0] shadow-xs flex flex-col justify-between hover:border-[#E5A93B]/50 transition-colors"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E5A93B]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A93B]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E3DDD0]" />
                </div>

                {/* Project Tag */}
                <span className="text-[11px] font-semibold text-[#8C7A59] block mb-3">
                  Scope: {t.projectType}
                </span>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed italic mb-6">
                  “{t.feedback}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#18181B]">
                    {t.clientName}
                  </h3>
                  <p className="text-xs text-[#71717A]">
                    {t.clientRole}, {t.organization}
                  </p>
                </div>
                <span className="text-[11px] font-medium text-[#A1A1AA]">
                  {t.country}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

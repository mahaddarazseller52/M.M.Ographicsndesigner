import React, { useState } from 'react';
import {
  Shapes,
  Layers,
  Share2,
  FileText,
  CreditCard,
  BookOpen,
  Monitor,
  Package,
  ArrowRight,
  Clock,
  Check,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types/portfolio';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Shapes':
        return <Shapes className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      default:
        return <Shapes className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
              Capabilities & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
              Design Services Tailored for Brand Distinction
            </h2>
          </div>
          <p className="text-sm text-[#52525B] max-w-sm">
            End-to-end visual execution from initial brand conception to prepress print and high-converting digital formats.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-6 rounded-2xl border border-[#E7E2D7] hover:border-[#E5A93B]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Turnaround */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#ECE7DC] text-[#18181B] group-hover:bg-[#E5A93B] group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#71717A]">
                    <Clock className="w-3 h-3 text-[#E5A93B]" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#18181B] group-hover:text-[#E5A93B] transition-colors mb-1.5">
                  {service.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#8C7A59] mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-[#52525B] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-[#F2ECE1]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block mb-2">
                    Key Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#3F3F46]">
                      <Check className="w-3.5 h-3.5 text-[#E5A93B] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#18181B] bg-[#FAF8F5] hover:bg-[#E5A93B] hover:text-white border border-[#E7E2D7] hover:border-[#E5A93B] transition-all duration-200 cursor-pointer"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

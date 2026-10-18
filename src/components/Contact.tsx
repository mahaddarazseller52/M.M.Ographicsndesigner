import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Check,
  Copy,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  selectedServicePreload?: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A93B]">
            Start a Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-2 text-balance">
            Let's Bring Your Brand's Vision to Life
          </h2>
          <p className="text-sm text-[#52525B] mt-2">
            Have a project in mind, need a branding overhaul, or looking for high-impact visual design? Reach out directly via WhatsApp, email, or direct call.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Creative Portfolio Banner Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Email Card with Quick Copy */}
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7] shadow-xs flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E5A93B]/15 text-[#E5A93B] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#71717A] block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-[#18181B] hover:text-[#E5A93B] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <span className="text-xs text-[#71717A] block mt-0.5">
                    Guaranteed response within 24 hours
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F5] transition-colors shrink-0 cursor-pointer"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7] shadow-xs flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E5A93B]/15 text-[#E5A93B] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#71717A] block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneClean}`}
                    className="text-sm sm:text-base font-bold text-[#18181B] hover:text-[#E5A93B] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F5] transition-colors shrink-0 cursor-pointer"
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Website */}
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#18181B] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E5A93B]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#71717A] block">Location</span>
                  <span className="text-xs font-semibold text-[#18181B]">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#F2ECE1]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#18181B] flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#E5A93B]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#71717A] block">Portfolio URL</span>
                  <a
                    href={PERSONAL_INFO.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#18181B] hover:text-[#E5A93B] transition-colors"
                  >
                    {PERSONAL_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="bg-white p-6 rounded-2xl border border-[#E7E2D7] shadow-xs">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                  Connect on Design Platforms
                </span>
                <span className="text-[11px] font-medium text-[#71717A]">
                  Verified Profiles
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_INFO.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] hover:bg-[#18181B] text-[#18181B] hover:text-white border border-[#E7E2D7] hover:border-[#18181B] transition-all duration-200 shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-lg bg-white group-hover/social:bg-[#27272A] text-[#18181B] group-hover/social:text-[#E5A93B] border border-[#E7E2D7] group-hover/social:border-transparent flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                        {social.label}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold truncate">
                          {social.name}
                        </span>
                        <span className="text-[11px] text-[#71717A] group-hover/social:text-[#A1A1AA] truncate font-medium">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/social:text-[#E5A93B] group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Creative Portfolio Banner Detail Card (matching user request) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7E2D7] shadow-xl overflow-hidden flex flex-col justify-between">
            
            {/* Top Showcase: Creative Banner Image with Typography & Signature */}
            <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden bg-[#FAF8F5]">
              <img
                src="/src/assets/images/mahad_creative_banner_1792238455324.jpg"
                alt="Muhammad Mahad Obaid - Graphic Designer Studio Banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
              />
              
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Verified Badge */}
              <div className="absolute top-4 left-4 bg-[#18181B]/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/10 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#E5A93B]" />
                <span>Available for New Projects</span>
              </div>

              {/* Designer Name Overlay at bottom left */}
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-xs font-medium text-[#E5A93B] uppercase tracking-wider block">
                    Modern Graphic Designer
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Muhammad Mahad Obaid
                  </div>
                </div>

                {/* Signature mark */}
                <div className="text-right hidden sm:block">
                  <div className="font-handwriting text-3xl font-bold text-white drop-shadow-md">
                    Mahad
                  </div>
                  <div className="w-12 h-0.5 bg-[#DC2626] ml-auto rounded-full" />
                </div>
              </div>
            </div>

            {/* Banner Content Details & Direct Actions */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-white">
              
              {/* Intro Prose & Value Points */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F2ECE1] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#18181B]">
                      Direct Client Inquiries & Commissions
                    </h3>
                    <p className="text-xs text-[#71717A] mt-0.5">
                      Skip the form — connect directly with Muhammad Mahad Obaid for your project.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#E5A93B] bg-[#E5A93B]/10 px-3 py-1 rounded-full">
                    Fast 24h Response
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  Whether you require a complete brand identity system, high-converting social media marketing kits, event posters, corporate stationery, or product packaging, I collaborate closely to deliver clean, modern, and production-ready designs.
                </p>

                {/* 3 Pillars / Value Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E2D7] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#E5A93B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#18181B]">Custom Craft</div>
                      <div className="text-[11px] text-[#71717A]">No generic templates</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E2D7] flex items-start gap-2">
                    <Zap className="w-4 h-4 text-[#E5A93B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#18181B]">Quick Turnaround</div>
                      <div className="text-[11px] text-[#71717A]">3–7 business days</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E2D7] flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E5A93B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#18181B]">Full Ownership</div>
                      <div className="text-[11px] text-[#71717A]">All master vector files</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons to initiate project */}
              <div className="pt-4 border-t border-[#F2ECE1] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Design%20Project%20Inquiry%20-%20Muhammad%20Mahad%20Obaid&body=Hi%20Mahad,%0D%0A%0D%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20design%20project.%0D%0A%0D%0AProject%20Type:%20%0D%0ATimeline:%20%0D%0ABudget:%20%0D%0A%0D%0ABest%20regards,`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#18181B] hover:bg-[#27272A] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Mail className="w-4 h-4 text-[#E5A93B]" />
                    <span>Send Project Email</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#71717A] text-center pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#E5A93B]" />
                  <span>Prefer a phone call? Reach out directly at:</span>
                  <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="font-bold text-[#18181B] hover:text-[#E5A93B] transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Star, Check, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

interface HeroProps {
  onOpenEstimateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1E40AF] via-[#2563EB] to-[#1D4ED8] text-white">
      {/* Background Decorative Cloud / Sky Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 pt-12 sm:pt-16 pb-6 text-center relative z-10">
        {/* Rating / Review Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-8">
          {/* Google */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow">
              <span className="text-[#4285F4]">G</span>
            </div>
            <div className="text-left">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-white/90">4.9 Rating</span>
            </div>
          </div>

          {/* HomeAdvisor / Angi */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center font-bold text-xs text-stone-950 shadow">
              <span>★</span>
            </div>
            <div className="text-left">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-white/90">4.9 Rating</span>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center font-bold text-xs text-white shadow">
              <span>f</span>
            </div>
            <div className="text-left">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-white/90">4.9 Rating</span>
            </div>
          </div>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white font-heading max-w-4xl mx-auto leading-[1.05] drop-shadow-md mb-6">
          PREMIUM FENCE SOLUTION FOR NORTHERN VIRGINIA HOMES AND BUSINESSES
        </h1>

        {/* Trust Points Checklist with Yellow Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-bold text-white/95 mb-8">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-amber-400 stroke-[3]" />
            <span>Licensed & Insured</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-amber-400 stroke-[3]" />
            <span>Free On-Site Estimates</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-amber-400 stroke-[3]" />
            <span>Family Owned & Operated</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-amber-400 stroke-[3]" />
            <span>Expert Master Craftsmen</span>
          </span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm uppercase tracking-wider transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          >
            <span>GET FREE ESTIMATE</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-stone-100 text-stone-950 font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 font-mono"
          >
            <Phone className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span>{COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Image with Distinctive Angled Chevron Cut */}
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-12 sm:pb-16">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hero-angled-clip bg-stone-900">
          <img
            src="/assets/aistudio/886168088_122340146924224375_861486219090302653_n_3c6783d7.jpg"
            alt="Quality Fence Works LLC verified vinyl privacy fence installation and yard sign in Northern Virginia"
            className="w-full h-[320px] sm:h-[440px] md:h-[500px] object-cover object-center filter brightness-[0.95]"
            referrerPolicy="no-referrer"
          />

          {/* On-photo badge watermark */}
          <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-sm text-amber-400 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md border border-amber-400/40">
            FENCE • DECK • PATIO · 703-856-5215
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

interface AboutUsProps {
  onOpenEstimateModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenEstimateModal }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image with Floating Experience Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3] bg-stone-100">
              <img
                src="/assets/aistudio/853141582_122336512808224375_6815886156800158024_n_8c9fafa4.jpg"
                alt="Quality Fence Works craftsman building wood fence and deck in Northern Virginia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Floating Dark Experience Badge (matching demo) */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-stone-900/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-xl shadow-2xl border border-stone-800 max-w-[170px]">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white leading-none">
                  15+
                </div>
                <div className="text-xs font-semibold text-stone-300 mt-1 leading-snug">
                  Years of Fence Craftsmanship Done Right
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 bg-stone-50 text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
              <span>ABOUT US</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-heading leading-tight mb-4">
              YOUR LOCAL EXPERTS IN PROFESSIONAL FENCING & OUTDOOR LIVING
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Quality Fence Works LLC is committed to delivering high quality fencing and outdoor living solutions for residential and commercial properties across Northern Virginia. Owned and operated by Antonio, our crew provides direct craftsmanship, robust post footings, and full assistance with your HOA architectural review boards.
            </p>

            {/* Checkmark Bullets with Gold Icons */}
            <div className="space-y-3 mb-8">
              {[
                'DURABLE MATERIALS BUILT FOR VIRGINIA WEATHER & WINDS',
                'CUSTOM FENCE & DECK INSTALLATION WITH PRECISION DESIGN',
                'SKILLED & EXPERIENCED FENCE CONTRACTORS ON EVERY JOB',
                '100% HOA ARCHITECTURAL BOARD DOCUMENTATION PREPARATION',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wide">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={onOpenEstimateModal}
                className="px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

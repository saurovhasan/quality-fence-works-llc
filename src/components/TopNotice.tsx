import React from 'react';
import { Phone, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

export const TopNotice: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
        <div className="flex items-center gap-4 text-[13px]">
          <span className="flex items-center gap-1.5 text-stone-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Licensed & Insured in Virginia</span>
          </span>
          <span className="hidden sm:inline text-stone-600" aria-hidden="true">·</span>
          <span className="hidden sm:flex items-center gap-1.5 text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>Serving Fairfax, Loudoun & Prince William Counties</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[13px]">
          <span className="hidden md:flex items-center gap-1 text-stone-400">
            <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>Mon–Sat 7AM–7PM</span>
          </span>
          <span className="hidden md:inline text-stone-600" aria-hidden="true">·</span>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>Free On-Site Estimates: {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

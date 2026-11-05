import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs py-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand Wordmark & Overview */}
          <div>
            <span className="text-lg font-bold text-white block mb-3">
              {COMPANY_INFO.name}
            </span>
            <p className="text-stone-400 text-xs leading-relaxed mb-4">
              Owner-operated fence, deck, and patio contractor serving homeowners across Northern Virginia. Specializing in PVC vinyl, custom wood, ornamental aluminum, and chain link systems.
            </p>
            <div className="flex items-center gap-2 text-stone-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.license}</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-200 block mb-3">
              Fencing Services
            </span>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">PVC & Vinyl Privacy</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Custom Wood & Shadowbox</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Estate 4-Board & Wire Mesh</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Ornamental Black Aluminum</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Residential Chain Link</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Custom Decks & Patios</a></li>
            </ul>
          </div>

          {/* Col 3: Service Counties */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-200 block mb-3">
              Service Counties
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>Fairfax County (Fairfax, Chantilly, Herndon, Reston, Vienna)</li>
              <li>Loudoun County (Ashburn, Sterling, Leesburg, South Riding)</li>
              <li>Prince William County (Manassas, Gainesville, Woodbridge)</li>
              <li>Fauquier, Arlington & Alexandria</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-200 block mb-3">
              Direct Contact
            </span>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                <span>Northern Virginia, USA</span>
              </div>
              <div className="pt-2 text-[11px] text-stone-500">
                <span>Hours: {COMPANY_INFO.serviceHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Free On-Site Estimates</span>
            <span aria-hidden="true">·</span>
            <span>Licensed & Insured</span>
            <span aria-hidden="true">·</span>
            <span>HOA Approved Workmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

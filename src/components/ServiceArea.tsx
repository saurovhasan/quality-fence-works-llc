import React, { useState } from 'react';
import { MapPin, CheckCircle2, Search, Phone } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/projects';

export const ServiceArea: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkedTown, setCheckedTown] = useState<string | null>(null);

  // Flatten all towns
  const allTowns = SERVICE_AREAS.flatMap((area) =>
    area.towns.map((town) => ({ town, county: area.county }))
  );

  const matchedTowns = searchTerm.trim()
    ? allTowns.filter((item) =>
        item.town.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : [];

  return (
    <section id="service-area" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Interactive Zip / Town Checker */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 bg-white text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
              <span>LOCAL COVERAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-heading mb-4 leading-tight">
              SERVING ALL COMMUNITIES ACROSS NORTHERN VIRGINIA
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Based centrally in Northern Virginia, Antonio and our installation crews travel with complete mobile equipment trucks ready to measure, stake, and construct your perimeter fence, deck, or patio.
            </p>

            {/* Interactive Town & Area Search */}
            <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm mb-6">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                Check Your Town or Subdivision
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Ashburn, Chantilly, Manassas, Herndon..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCheckedTown(null);
                  }}
                  className="w-full pl-9 pr-4 py-2.5 text-sm rounded border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 bg-stone-50/50"
                />
              </div>

              {/* Instant Search Results */}
              {searchTerm.trim().length > 0 && (
                <div className="mt-3 pt-3 border-t border-stone-100">
                  {matchedTowns.length > 0 ? (
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Service Available in {matchedTowns[0].town} ({matchedTowns[0].county})</span>
                      </div>
                      <p className="text-xs text-stone-500">
                        We actively install in your area with fast on-site measurements and full HOA compliance.
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs text-stone-600">
                      <span>Don't see your town? We serve all surrounding Northern Virginia regions! Call Antonio directly at </span>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-amber-700 underline">
                        {COMPANY_INFO.phoneFormatted}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Clicked town feedback */}
              {checkedTown && (
                <div className="mt-3 pt-3 border-t border-stone-100 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free on-site measurements available in {checkedTown}!</span>
                </div>
              )}
            </div>

            <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-amber-950">
                  Ready to measure your yard?
                </span>
                <span className="text-xs text-amber-800">
                  We schedule consultations within 24–48 hours.
                </span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-3.5 py-2 rounded bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: County by County Directory */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                    <h3 className="text-base font-bold text-stone-950">
                      {area.county}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {area.towns.map((town, tIdx) => (
                      <button
                        key={tIdx}
                        type="button"
                        onClick={() => {
                          setCheckedTown(town);
                          setSearchTerm('');
                        }}
                        className={`text-xs px-2 py-1 rounded transition-colors text-left ${
                          checkedTown === town
                            ? 'bg-amber-700 text-white font-bold'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                      >
                        {town}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 flex items-center justify-between">
                  <span>Daily crew route</span>
                  <span className="text-emerald-700 font-semibold">Active Jobs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

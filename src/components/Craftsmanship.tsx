import React from 'react';
import { ShieldCheck, Anchor, Wrench, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

export const Craftsmanship: React.FC = () => {
  return (
    <section id="standards" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 bg-stone-50 text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
            <span>CONTRACTOR INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-heading mb-4">
            THE QUALITY FENCE WORKS CONSTRUCTION STANDARD
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Why do our fences stay laser-straight for decades while cheaper contractor jobs begin leaning after two Virginia winters? Here is the engineering and craftsmanship difference.
          </p>
        </div>

        {/* 4 Deep-Dive Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="p-7 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    30"+ Below-Frost Concrete Footers
                  </h3>
                  <span className="text-xs text-stone-500">Eliminates ground heave and winter leaning</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Northern Virginia winter temperatures drop ground frost to ~24 inches. Many budget contractors take shortcuts by digging only 18–20 inches with dry-poured mix. We dig every post 30 to 36 inches deep with high-strength 4,000 PSI concrete to lock every post rock-solid against clay shifting.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full concrete collar around all terminal, corner, and line posts</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    Reinforced Sag-Free Gate Engineering
                  </h3>
                  <span className="text-xs text-stone-500">90% of fence failures are cheap gates</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Gates experience daily tension, slamming, and wind load. We reinforce gate leaves with internal steel brackets, industrial powder-coated anti-sag diagonal bracing, and self-closing adjustable hinges. Your gates swing freely and latch securely year after year.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Heavy-duty lockable latches & heavy-wall steel core gate posts</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    Full HOA Architectural Review Packets
                  </h3>
                  <span className="text-xs text-stone-500">Hassle-free approvals in Brambleton, Cascades & more</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                HOAs in Loudoun and Fairfax counties can delay projects for weeks over missing drawings or disallowed styles. We provide complete architectural review board (ARC) packets including property plat overlays, exact elevation specifications, and material samples.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% HOA approval record across major Northern Virginia communities</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-950">
                    Direct Owner-Operated Oversight
                  </h3>
                  <span className="text-xs text-stone-500">Antonio is on-site holding the level</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Big box retail stores sell fences through sales brokers who sell your contract to anonymous third-tier sub-crews. At Quality Fence Works LLC, Antonio directly supervises every excavation, line-level measurement, and gate installation from start to cleanup.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct owner phone number: (703) 856-5215</span>
            </div>
          </div>
        </div>

        {/* Clear Comparison Table: Quality Fence Works vs Typical Subcontractors */}
        <div className="border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
          <div className="p-5 bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-bold text-base">Jobsite Quality Audit</h4>
              <p className="text-xs text-stone-400">How our construction methods protect your property investment</p>
            </div>
            <div className="text-xs text-amber-400 font-bold">
              Fairfax · Loudoun · Prince William
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-200/60 text-stone-700 border-b border-stone-200 uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-3 px-5">Construction Detail</th>
                  <th className="py-3 px-5 text-amber-800">Quality Fence Works LLC</th>
                  <th className="py-3 px-5 text-stone-500">Low-Bid / Subcontractor Crews</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800 bg-white">
                <tr>
                  <td className="py-3.5 px-5 font-bold">Post Hole Depth</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-semibold">30" – 36" below frost depth</td>
                  <td className="py-3.5 px-5 text-stone-500">18" – 20" (heaves in winter)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold">Concrete Application</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-semibold">4,000 PSI wet-mixed concrete core</td>
                  <td className="py-3.5 px-5 text-stone-500">Dry-poured powder with hose squirt</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold">Gate Frame & Hardware</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-semibold">Internal steel frames & anti-sag diagonal brackets</td>
                  <td className="py-3.5 px-5 text-stone-500">Basic 2x4 wood corners (sags in months)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold">Wood Fasteners</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-semibold">Hot-dipped galvanized & stainless ring nails</td>
                  <td className="py-3.5 px-5 text-stone-500">Cheap electro-galvanized (rust streaks)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold">Lawn & Turf Care</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-semibold">Full spoils haul-off, magnetic nail sweep, turf rake</td>
                  <td className="py-3.5 px-5 text-stone-500">Excavated clay left piled along fence line</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProcessProps {
  onOpenEstimateModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenEstimateModal }) => {
  const steps = [
    {
      step: 'STEP 01',
      title: 'REQUEST A FREE ESTIMATE',
      desc: 'Tell us about your fence or deck needs and get a quick no-obligation quote as we assess your property boundaries.',
    },
    {
      step: 'STEP 02',
      title: 'ON-SITE MEASURE & HOA PACKET',
      desc: 'Antonio visits your yard, laser-measures grade slopes, stakes post locations, and prepares your complete HOA architectural review drawings.',
    },
    {
      step: 'STEP 03',
      title: 'PROFESSIONAL INSTALLATION',
      desc: 'Our skilled crew arrives on schedule, excavates 30"+ deep concrete footers below the frost line, and fastens laser-straight panels with sag-free gates.',
    },
    {
      step: 'STEP 04',
      title: 'FINAL QUALITY CHECK & LAWN CLEANUP',
      desc: 'We test all latches, conduct a magnetic lawn sweep for stray fasteners, groom your turf, and walk the entire perimeter with you.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline, Copy, Button & Photo */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 bg-stone-50 text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
              <span>HOW IT WORKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-heading leading-tight mb-4">
              STEP-BY-STEP FENCE INSTALLATION PROCESS
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Quality Fence Works is committed to delivering high quality fencing solutions for residential and commercial properties with zero hassle and total transparency.
            </p>

            <button
              type="button"
              onClick={onOpenEstimateModal}
              className="px-7 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 mb-8"
            >
              <span>TALK TO A SPECIALIST</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Rounded Jobsite Image */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[16/10] bg-stone-100">
              <img
                src="/assets/aistudio/854729553_122336512814224375_2718215012085013928_n_67033636.jpg"
                alt="Quality Fence Works installing custom wood estate fence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Steps Timeline */}
          <div className="lg:col-span-6 pt-2 space-y-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-stone-50 border border-stone-200 hover:border-amber-400/80 transition-colors shadow-2xs group"
              >
                {/* Step badge */}
                <div className="inline-block px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider font-heading mb-2">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold uppercase tracking-wide text-stone-950 font-heading mb-1.5 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

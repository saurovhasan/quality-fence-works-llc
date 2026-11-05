import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Info, ShieldCheck, Ruler } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

export interface EstimateData {
  material: string;
  materialName: string;
  footage: number;
  height: string;
  walkGates: number;
  driveGates: number;
  terrain: 'flat' | 'moderate' | 'steep';
  estimatedLow: number;
  estimatedHigh: number;
}

interface EstimatorProps {
  onSelectEstimate: (data: EstimateData) => void;
}

const MATERIALS = [
  {
    id: 'vinyl',
    name: 'PVC Vinyl Privacy',
    baseRate: 40,
    variance: 6,
    badge: 'Most Popular for HOAs',
    desc: 'Tongue & groove solid privacy, routed posts, zero painting.',
  },
  {
    id: 'wood-privacy',
    name: 'Wood Board-on-Board / Shadowbox',
    baseRate: 34,
    variance: 5,
    badge: 'Classic Craft',
    desc: 'Pressure-treated pine or cedar with rot-free ground clearance.',
  },
  {
    id: 'wood-estate',
    name: 'Estate 4-Board + Dog Wire Mesh',
    baseRate: 29,
    variance: 4,
    badge: 'Virginia Country',
    desc: 'Open equestrian sightlines with heavy-gauge black welded pet mesh.',
  },
  {
    id: 'aluminum',
    name: 'Ornamental Black Aluminum',
    baseRate: 46,
    variance: 6,
    badge: 'Pool & Hillside',
    desc: 'BOCA pool safety certified, lifetime powder coat, steep racking.',
  },
  {
    id: 'chainlink',
    name: 'Black Vinyl-Coated Chain Link',
    baseRate: 22,
    variance: 4,
    badge: 'Budget Friendly',
    desc: '9-gauge vinyl coated steel mesh, subtle landscape blend.',
  },
];

export const Estimator: React.FC<EstimatorProps> = ({ onSelectEstimate }) => {
  const [material, setMaterial] = useState<string>('vinyl');
  const [footage, setFootage] = useState<number>(150);
  const [height, setHeight] = useState<string>('6ft');
  const [walkGates, setWalkGates] = useState<number>(1);
  const [driveGates, setDriveGates] = useState<number>(0);
  const [terrain, setTerrain] = useState<'flat' | 'moderate' | 'steep'>('flat');

  const selectedMaterial = useMemo(() => {
    return MATERIALS.find((m) => m.id === material) || MATERIALS[0];
  }, [material]);

  const calculation = useMemo(() => {
    // Base linear footage cost
    let rate = selectedMaterial.baseRate;
    if (height === '4ft') rate -= 3;
    if (height === '5ft') rate -= 1;
    if (height === '6ft') rate += 0;

    let terrainAdd = 0;
    if (terrain === 'moderate') terrainAdd = 2.5;
    if (terrain === 'steep') terrainAdd = 5.0;

    const basePerFt = rate + terrainAdd;
    const baseTotal = basePerFt * footage;

    // Gates
    const walkGateCost = walkGates * 260;
    const driveGateCost = driveGates * 680;

    const totalMid = baseTotal + walkGateCost + driveGateCost;
    const low = Math.round((totalMid * 0.92) / 50) * 50;
    const high = Math.round((totalMid * 1.08) / 50) * 50;

    // Estimated post count (every 8 feet + gates)
    const postCount = Math.ceil(footage / 8) + 1 + walkGates + driveGates * 2;
    const concreteBags = postCount * 2;

    return {
      low,
      high,
      postCount,
      concreteBags,
      rateLow: Math.round(basePerFt - selectedMaterial.variance),
      rateHigh: Math.round(basePerFt + selectedMaterial.variance),
    };
  }, [selectedMaterial, footage, height, walkGates, driveGates, terrain]);

  const handleApplyEstimate = () => {
    onSelectEstimate({
      material,
      materialName: selectedMaterial.name,
      footage,
      height,
      walkGates,
      driveGates,
      terrain,
      estimatedLow: calculation.low,
      estimatedHigh: calculation.high,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 bg-white text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-heading">
            INSTANT FENCE COST & MATERIAL ESTIMATOR
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Real Northern Virginia contractor pricing based on linear footage, fence style, concrete footings, and gate hardware.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-sm space-y-7">
            {/* Step 1: Material Selection */}
            <div>
              <label className="block text-sm font-bold text-stone-900 mb-3">
                1. Select Fence Style & Material
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MATERIALS.map((item) => {
                  const isSelected = item.id === material;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMaterial(item.id)}
                      className={`text-left p-3.5 rounded-md border transition-all ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/60 ring-1 ring-amber-600'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-stone-900">{item.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-700" />}
                      </div>
                      <p className="text-xs text-stone-500 leading-snug">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Linear Footage */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-stone-900">
                  2. Total Linear Footage
                </label>
                <div className="text-sm font-extrabold text-amber-700 font-mono">
                  {footage} Linear Feet
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="40"
                max="450"
                step="5"
                value={footage}
                onChange={(e) => setFootage(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                <span className="text-xs text-stone-500 self-center mr-1">Quick presets:</span>
                {[
                  { label: 'Townhome (~65 ft)', val: 65 },
                  { label: 'Standard Backyard (~140 ft)', val: 140 },
                  { label: 'Corner Lot (~220 ft)', val: 220 },
                  { label: 'Large Acreage (~350 ft)', val: 350 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => setFootage(preset.val)}
                    className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                      footage === preset.val
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Height & Gates */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              {/* Height */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                  Fence Height
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {['4ft', '5ft', '6ft'].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHeight(h)}
                      className={`py-2 text-xs font-bold rounded border transition-colors ${
                        height === h
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Walk Gates */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                  Single Walk Gates
                </label>
                <div className="flex items-center border border-stone-200 rounded">
                  <button
                    type="button"
                    onClick={() => setWalkGates(Math.max(0, walkGates - 1))}
                    className="w-10 py-1.5 text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-stone-900 font-mono">
                    {walkGates}
                  </span>
                  <button
                    type="button"
                    onClick={() => setWalkGates(walkGates + 1)}
                    className="w-10 py-1.5 text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Drive Gates */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                  Double Drive Gates
                </label>
                <div className="flex items-center border border-stone-200 rounded">
                  <button
                    type="button"
                    onClick={() => setDriveGates(Math.max(0, driveGates - 1))}
                    className="w-10 py-1.5 text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-stone-900 font-mono">
                    {driveGates}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDriveGates(driveGates + 1)}
                    className="w-10 py-1.5 text-stone-600 hover:bg-stone-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Terrain / Grading */}
            <div className="pt-4 border-t border-stone-100">
              <label className="block text-sm font-bold text-stone-900 mb-2">
                4. Property Slope & Grading
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'flat', label: 'Level / Flat Lawn', note: 'Standard post setting' },
                  { id: 'moderate', label: 'Gentle Slope', note: 'Gradual contouring' },
                  { id: 'steep', label: 'Steep Hillside', note: 'Custom stepping/racking' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTerrain(t.id as any)}
                    className={`p-2.5 rounded border text-left transition-colors ${
                      terrain === t.id
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                    }`}
                  >
                    <div className="text-xs font-bold">{t.label}</div>
                    <div className={`text-[11px] mt-0.5 ${terrain === t.id ? 'text-stone-300' : 'text-stone-500'}`}>
                      {t.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Summary & Direct Lead Capture (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Estimated Ballpark
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-stone-950 mt-1 font-mono">
                    ${calculation.low.toLocaleString()} – ${calculation.high.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500 block">Typical per ft:</span>
                  <span className="text-sm font-bold text-amber-700 font-mono">
                    ${calculation.rateLow}–${calculation.rateHigh}/ft
                  </span>
                </div>
              </div>

              {/* What is Included (Concrete, Hardware, Workmanship) */}
              <div className="space-y-3.5 mb-6 text-sm">
                <div className="font-bold text-stone-900 text-xs uppercase tracking-wider">
                  Itemized Scope of Work Included:
                </div>

                <div className="flex items-start gap-2.5 text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{footage} ft</strong> of high-grade {selectedMaterial.name} ({height})
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>~{calculation.postCount} Heavy-Duty Posts</strong> set 30"+ deep below frost line
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>~{calculation.concreteBags} bags</strong> of 4,000 PSI high-strength concrete
                  </span>
                </div>

                {(walkGates > 0 || driveGates > 0) && (
                  <div className="flex items-start gap-2.5 text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {walkGates > 0 && `${walkGates} single walk gate(s) `}
                      {driveGates > 0 && `${driveGates} double drive gate(s) `}
                      with anti-sag steel brackets & key latch
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-2.5 text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    HOA architectural application diagram & spec sheet prepared for you
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Complete jobsite cleanup, haul-away of old dirt, and lawn turf grooming
                  </span>
                </div>
              </div>

              {/* HOA Notice */}
              <div className="p-3.5 rounded bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed mb-6">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Northern Virginia HOA Assurance</span>
                </div>
                We build strictly to Fairfax, Loudoun, and Prince William county codes and provide the exact elevations needed for your ARC board.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full py-3.5 px-4 rounded-full font-black text-stone-950 bg-amber-500 hover:bg-amber-400 uppercase tracking-wider text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>LOCK IN BALLPARK & BOOK FREE ON-SITE MEASURE</span>
                <span className="text-base font-black">↗</span>
              </button>

              <div className="text-center">
                <span className="text-xs text-stone-500">Or speak directly with Antonio right now: </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-xs font-bold text-stone-900 hover:text-amber-700 underline underline-offset-2"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

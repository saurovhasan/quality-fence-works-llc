import React from 'react';
import { Shield, Hammer, DoorClosed, Wrench, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceCards = [
    {
      id: 'vinyl',
      title: 'FENCE INSTALLATION (VINYL & PVC)',
      desc: 'Custom fence installation solution design for privacy protection, zero maintenance, and elevated curb appeal.',
      image: '/assets/aistudio/831492650_122333258252224375_1164876312457662615_n_1bd70c7d.jpg',
      icon: Shield,
    },
    {
      id: 'wood',
      title: 'WOOD FENCE & SHADOWBOX',
      desc: 'Board-on-board, shadowbox, and estate paddock with black wire mesh for natural warmth and long-lasting durability.',
      image: '/assets/aistudio/885924226_122340146846224375_5176292162525368276_n_c238e8d3.jpg',
      icon: Hammer,
    },
    {
      id: 'gates',
      title: 'GATE INSTALLATION & REPAIR',
      desc: 'Reliable gate repair solutions and internal steel anti-sag framing for smooth everyday residential and commercial operation.',
      image: '/assets/aistudio/885266556_122340147062224375_4218959900417183069_n_484fdf23.jpg',
      icon: DoorClosed,
    },
    {
      id: 'replacement',
      title: 'FENCE REPLACEMENT & POST REPAIR',
      desc: 'Regular fence maintenance, leaning post re-setting in 30" concrete, and storm damage reconstruction.',
      image: '/assets/aistudio/869932850_122339113376224375_4398391151928394633_n_072ca27a.jpg',
      icon: Wrench,
    },
    {
      id: 'aluminum',
      title: 'ALUMINUM SECURITY & POOL CODE',
      desc: 'Sleek powder-coated black ornamental aluminum racked to slope gradients with self-closing BOCA pool code compliance.',
      image: '/assets/aistudio/884823143_122340146972224375_3220186993496971353_n_9688ab5e.jpg',
      icon: ShieldCheck,
    },
    {
      id: 'chainlink-decks',
      title: 'CHAIN LINK & OUTDOOR LIVING',
      desc: 'Black vinyl-coated boundary enclosures, custom pressure-treated decks, sturdy staircases, and paver patios.',
      image: '/assets/aistudio/870354898_122339113262224375_9206968771107175932_n_382a5863.jpg',
      icon: Layers,
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header Centered */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 bg-white text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
            <span>SERVICE WE PROVIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-heading">
            PROFESSIONAL FENCE REPAIR & INSTALLATION SERVICES
          </h2>
        </div>

        {/* 6-Card Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Thumbnail Frame with Floating Icon Circle */}
                  <div className="relative aspect-[16/10] bg-stone-200 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Floating circular icon badge at bottom-left of photo */}
                    <div className="absolute -bottom-3 left-4 w-9 h-9 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-stone-900 group-hover:bg-amber-500 transition-colors">
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 pt-6">
                    <h3 className="text-base font-bold font-heading text-stone-950 uppercase tracking-wide mb-2 group-hover:text-amber-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(card.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold font-heading text-stone-900 hover:text-amber-600 uppercase tracking-wider transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Bottom CTA Button matching demo */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onSelectService('Fence & Deck Installation')}
            className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>BOOK SERVICE NEAR YOU</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Eye, MapPin, X, ChevronLeft, ChevronRight, Check, ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project, COMPANY_INFO } from '../data/projects';

interface GalleryProps {
  onRequestProjectQuote: (project: Project) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onRequestProjectQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, filteredProjects]);

  const handleNext = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[prevIndex]);
  };

  const categories = [
    { id: 'all', label: `ALL WORK (${PROJECTS.length})` },
    { id: 'vinyl', label: `VINYL / PVC (${PROJECTS.filter((p) => p.category === 'vinyl').length})` },
    { id: 'wood', label: `WOOD & ESTATE (${PROJECTS.filter((p) => p.category === 'wood').length})` },
    { id: 'aluminum', label: `ALUMINUM (${PROJECTS.filter((p) => p.category === 'aluminum').length})` },
    { id: 'chainlink', label: `CHAIN LINK (${PROJECTS.filter((p) => p.category === 'chainlink').length})` },
    { id: 'gates', label: `GATES (${PROJECTS.filter((p) => p.category === 'gates').length})` },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#18181B] text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-700 bg-stone-900 text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>REAL PROJECTS, REAL RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            OUR FENCE INSTALLATION CASE STUDIES
          </h2>

          <p className="text-sm text-stone-400 mt-2 max-w-2xl mx-auto">
            Browse verified on-site installations completed across Fairfax, Loudoun, and Prince William counties by Antonio and our crew.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all uppercase tracking-wider font-heading ${
                activeFilter === cat.id
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-stone-900 rounded-xl border border-stone-800 overflow-hidden hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
                    {project.categoryLabel}
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 bg-stone-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{project.location}</span>
                  </div>

                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-amber-500 text-stone-950 text-xs font-black uppercase px-3.5 py-1.5 rounded-full shadow flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold font-heading text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors line-clamp-1 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-3">
                    {project.tagline}
                  </p>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
                    <span>{project.specs.height}</span>
                    <span>·</span>
                    <span className="truncate max-w-[150px]">{project.specs.material.split(' ')[0]}</span>
                    <span>·</span>
                    <span className="text-amber-400">Deep Set</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative bg-white text-stone-900 rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative bg-stone-950 flex items-center justify-center min-h-[340px] sm:min-h-[460px]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />

                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-white transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-white transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-heading">
                    <span>{activeProject.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-stone-600">
                      <MapPin className="w-3 h-3 text-stone-500" />
                      {activeProject.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold uppercase text-stone-950 font-heading mb-3">
                    {activeProject.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mb-6 space-y-2 text-xs">
                    <div className="font-bold font-heading text-stone-900 uppercase tracking-wider text-[11px] mb-1">
                      Jobsite Construction Specs
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Finished Height:</span>
                      <span className="font-bold text-stone-900">{activeProject.specs.height}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Material Spec:</span>
                      <span className="font-bold text-stone-900 text-right">{activeProject.specs.material}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">Terrain Condition:</span>
                      <span className="font-bold text-stone-900">{activeProject.specs.terrain}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-stone-500">Post Foundation:</span>
                      <span className="font-bold text-stone-900 text-right">{activeProject.specs.posts}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold font-heading text-stone-900 uppercase tracking-wider">
                      Workmanship Highlights:
                    </div>
                    {activeProject.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      const proj = activeProject;
                      setActiveProject(null);
                      onRequestProjectQuote(proj);
                    }}
                    className="w-full py-3.5 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black uppercase text-xs sm:text-sm tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Estimate for This Style</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="block text-center text-xs font-bold text-stone-600 hover:text-stone-900 py-1"
                  >
                    Direct contractor call: {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

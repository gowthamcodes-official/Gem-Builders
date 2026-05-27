import { useState } from 'react';
import { PROJECTS_DATA } from '../data/siteData';
import { ProjectItem } from '../types';
import { MapPin, Expand, Layers, CheckCircle } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'planning' | 'interior'>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Individual Houses & Villas' },
    { id: 'commercial', label: 'Commercial Complexes' },
    { id: 'planning', label: '3D elevations & Plans' },
    { id: 'interior', label: 'Modular Interiors' }
  ];

  const filteredProjects = filter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0B2545] leading-tight">
            Proof of Professional Craftsmanship
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 font-semibold text-base sm:text-lg max-w-2xl mx-auto">
            Explore our architectural plans, structures under construction, and completed luxury duplex villas around Salem communities.
          </p>
        </div>

        {/* Categories filters scroll tab */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id as any)}
              className={`px-4.5 py-2 rounded-full text-xs font-bold tracking-wide transition-all uppercase cursor-pointer ${
                filter === c.id
                   ? 'bg-blue-600 text-white border border-blue-600'
                   : 'bg-slate-50 text-slate-600 hover:text-[#0B2545] border border-slate-200 hover:border-blue-400/50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-350 bg-white"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status sticker */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-[10px] font-extrabold uppercase tracking-widest border border-slate-200/50 bg-white/95">
                  {project.status === 'Completed' ? (
                    <span className="text-emerald-700 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Completed
                    </span>
                  ) : (
                    <span className="text-amber-700 flex items-center gap-1.5 font-bold">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
                      In Progress
                    </span>
                  )}
                </div>

                {/* Cover backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-65" />
                
                {/* Floating spec info */}
                <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-white z-10">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-200 font-bold bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Expand className="w-3.5 h-3.5 text-blue-300" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider font-mono bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Descriptions & Location footer */}
              <div className="p-6 space-y-3 bg-transparent">
                <h3 className="font-display font-bold text-base md:text-lg text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{project.location}</span>
                </div>

                {/* Subtle quality check mark */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Approved Layout</span>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-extrabold bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Vastu Audited</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

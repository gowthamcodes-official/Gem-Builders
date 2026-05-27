import { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { 
  DraftingCompass, 
  Home, 
  Building, 
  Calculator, 
  Palette, 
  Hammer, 
  ChevronRight, 
  CheckCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuote: () => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Prevent background scrolling when specs modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DraftingCompass': return <DraftingCompass className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Building': return <Building className="w-6 h-6" />;
      case 'Calculator': return <Calculator className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0B2545] leading-tight">
            Our Elite Civil Engineering Services
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 font-semibold text-base sm:text-lg max-w-2xl mx-auto">
            From 2D blueprints & 3D elevations to turnkey individual villas and commercial concrete spaces. Look at our standard execution items.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-slate-200/60 hover:border-blue-500 group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative Icon Floating on Image */}
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white p-3 rounded-2xl shadow-md border border-blue-500">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-grow space-y-4">
                <h3 className="font-display font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  {service.description}
                </p>

                {/* Checked Bullet Lists preview */}
                <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  {service.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                  {service.details.length > 2 && (
                    <li className="text-[10px] text-blue-600 font-extrabold tracking-wide uppercase">
                      + {service.details.length - 2} more premium specs
                    </li>
                  )}
                </ul>
              </div>

              {/* CTA footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="flex-1 text-center bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-300 py-2.5 rounded-xl text-xs font-bold font-sans transition-all active:scale-95 cursor-pointer"
                  >
                    View All Specifications
                  </button>
                  <button 
                    onClick={onOpenQuote}
                    className="bg-[#0B2545] hover:bg-blue-600 text-white p-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
                    title="Get a Quote"
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Modal / Overlay showing detailed specification audit */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200 max-h-[90vh] flex flex-col">
              {/* Header block with image preview */}
              <div className="relative aspect-[21/9] bg-slate-100 shrink-0">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  ✕
                </button>
                {/* Float title overlay */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] bg-blue-600 text-white font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                    GEM Standard Quality specs
                  </span>
                  <h3 className="text-xl font-display font-extrabold text-white mt-1 leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Data Specifications Content (Scrollable) */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1 scroll-smooth touch-pan-y" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">Service Overview</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                    {selectedService.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Execution Checklist & Standards
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-bold leading-tight">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions bottom (Permanently visible footer, outside of scroll panel) */}
              <div className="p-5 md:p-6 bg-slate-50 border-t border-slate-150 flex flex-col sm:flex-row gap-3 shrink-0">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    onOpenQuote();
                  }}
                  className="flex-1 bg-gradient-to-r from-[#7388F4] to-[#8D7DF1] hover:from-[#6277F0] hover:to-[#8271EB] text-white font-bold uppercase tracking-wide text-xs md:text-sm py-3 px-4 rounded-xl text-center active:scale-95 transition-transform cursor-pointer"
                >
                  Request consultation
                </button>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-white hover:bg-slate-150 text-slate-700 font-bold text-xs md:text-sm py-3 px-4 rounded-xl text-center active:scale-95 transition-transform border border-slate-200 cursor-pointer"
                >
                  Close Specifications
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

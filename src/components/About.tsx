import { COMP_INFO } from '../data/siteData';
import { CheckCircle2, Shield, User, HardHat, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Vastu Planning",
      desc: "Architectural flows built for health, growth and abundance according to ancient shastra standards."
    },
    {
      title: "Raw Material Integrity",
      desc: "Only certified steel rebars (TATA) and high-grade 53-grade OPC cements are processed under supervision."
    },
    {
      title: "Engineering Supervision",
      desc: "Our on-site civil team conducts cube compression tests and slumps testing to secure zero compromises."
    },
    {
      title: "Fixed Timelines",
      desc: "We write penalties inside contract agreements if milestone stages are held up unnecessarily."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            About Handcrafted Concrete
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0B2545] leading-tight">
            Welcome to GEM Builders & Developers
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 font-semibold text-base md:text-lg max-w-2xl mx-auto">
            Salem's top-tier structural construction firm. We translate abstract visual plans into safe, permanent, and magnificent concrete living habitats.
          </p>
        </div>

        {/* Master Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio & Details Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Founding Visionaries & Leadership
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal">
                Built on the foundation of engineering integrity, GEM Builders was established by academic-driven and field-tested experts. By fusing architectural theory with strict field execution methodologies, we deliver houses that families cherish for generations.
              </p>
            </div>

            {/* Founders Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {COMP_INFO.founders.map((founder, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative shadow-sm hover:shadow-md hover:border-blue-400 hover:bg-white transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                    {i === 0 ? <HardHat className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-800 leading-tight">
                    {founder.name}
                  </h4>
                  <span className="text-xs text-blue-600 font-extrabold tracking-wide uppercase block mt-1">
                    {founder.role}
                  </span>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed font-semibold">
                    {founder.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Values Bullets */}
            <div className="bg-blue-50/40 border border-blue-100/70 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-display font-bold text-sm tracking-wide uppercase text-slate-800">
                  Our Uncompromising Structural Promise
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                "Breathing life in Concrete" means we treat concrete pourings like high art. Steel detailing, beam placements, lintel checks, and moisture control curing are measured to millimetre standards under R. Karthick's personal engineering eye.
              </p>
            </div>
          </div>

          {/* Visual Grid & Right Value Badges */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-950 mb-2">
              Why Salem Prefers GEM Builders
            </h3>

            {/* Value Blocks Vertical Scroll */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-slate-800">
                      {v.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accent Badges */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 text-center">
              <div>
                <span className="font-sans font-black text-2xl text-[#0B2545] block leading-none">A+ Grade</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mt-1">Raw Materials only</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="font-sans font-black text-2xl text-[#0B2545] block leading-none">100% Vastu</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mt-1">Compliance standards</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="font-sans font-black text-2xl text-[#0B2545] block leading-none">Salem Native</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mt-1">Registered engineers</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

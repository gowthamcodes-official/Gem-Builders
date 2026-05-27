import { Briefcase, Award, CheckSquare, Users } from 'lucide-react';

export default function Stats() {
  const statsList = [
    {
      value: "10+",
      label: "Years of Engineering Pride",
      desc: "Delivering standard building structures in Salem",
      icon: Award
    },
    {
      value: "450+",
      label: "Successful Project Handovers",
      desc: "Villas, residencies and office enclosures",
      icon: Briefcase
    },
    {
      value: "100%",
      label: "Regulatory Layout Approval",
      desc: "DTCP and Salem Corporation stability compliant",
      icon: CheckSquare
    },
    {
      value: "350+",
      label: "Vastu Pleased Clients",
      desc: "Families breathing life in peaceful environments",
      icon: Users
    }
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#071E3D] to-[#0D2B52] border-y border-blue-950 text-white py-12 md:py-16">
      {/* Structural visual lines design in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {statsList.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all duration-300"
              >
                {/* Accent Icon Holder */}
                <div className="p-3 bg-white/10 text-amber-300 rounded-xl border border-white/10 shadow-md">
                  <IconComp className="w-5 h-5 shrink-0" />
                </div>
                
                {/* Metrics */}
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white flex items-center">
                    <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-bold tracking-tight text-amber-300 uppercase font-sans">
                    {stat.label}
                  </h4>
                  
                  <p className="text-xs text-blue-100/70 font-medium leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

import { COMP_INFO, SERVICES_DATA } from '../data/siteData';
import { Phone, Mail, MapPin, Star, Building2, Facebook, Instagram, Youtube, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import GemLogo from './GemLogo';

export default function Footer() {
  const handleMapClick = () => {
    // Open Google Maps location provided by user
    window.open("https://maps.app.goo.gl/uC94yMpNBhJZDSqe8", "_blank");
  };

  return (
    <footer className="bg-[#0B2545] text-slate-100 relative pt-20 border-t border-blue-900">
      
      {/* Structural elements decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pb-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <GemLogo size="lg" colorTheme="light" />

            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              Registered engineering professionals delivering high-integrity concrete foundations, approved multi-storey blueprint plans, and premium custom duplex villas across Salem.
            </p>

            <div className="space-y-3 pt-2 font-medium">
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0" />
                <span>{COMP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-5 h-5 text-blue-300 shrink-0" />
                <span>{COMP_INFO.phone1} / {COMP_INFO.phone2}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-5 h-5 text-blue-300 shrink-0" />
                <a href={`mailto:${COMP_INFO.email}`} className="hover:text-white transition-colors">
                  {COMP_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase border-l-2 border-blue-400 pl-3">
              Navigations
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'FAQ'].map((link) => {
                const idMap = {
                  'Home': 'home',
                  'About Us': 'about',
                  'Services': 'services',
                  'Projects': 'projects',
                  'Testimonials': 'testimonials',
                  'FAQ': 'faq'
                }[link] || 'home';
                
                return (
                  <li key={link}>
                    <button 
                      onClick={() => {
                        const el = document.getElementById(idMap);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:text-white hover:underline transition-colors cursor-pointer text-slate-300"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase border-l-2 border-blue-400 pl-3">
              Builders Offerings
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id} className="flex items-start gap-1.5 leading-snug">
                  <div className="w-1 h-1 bg-blue-300 rounded-full shrink-0 mt-1.5" />
                  <span>{srv.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Map Location Embed Card (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase border-l-2 border-blue-400 pl-3">
              Our Location
            </h4>
            
            {/* Visual locator block */}
            <div 
              onClick={handleMapClick}
              className="bg-white/10 border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-blue-300 transition-all duration-300 relative overflow-hidden group select-none shadow-md"
            >
              <div className="absolute top-2 right-2 p-1 bg-[#0B2545]/80 rounded-lg text-blue-300 hover:text-white backdrop-blur-md border border-white/5 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
              
              {/* Graphic city diagram representation */}
              <div className="h-28 bg-[#071E3A] rounded-xl relative flex items-center justify-center overflow-hidden border border-white/5">
                {/* Visual grid lines representing a map chart */}
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
                <div className="absolute w-24 h-2 bg-slate-900/85 rounded-full rotate-12 -top-2 left-4 scale-x-150" />
                <div className="absolute w-28 h-2.5 bg-slate-900/60 rounded-full -rotate-45 top-6 -left-6" />
                <div className="absolute w-36 h-2 bg-slate-900/40 rounded-full rotate-6 bottom-4 left-2" />
                <div className="absolute w-24 h-2.5 bg-slate-900/50 rounded-full -rotate-12 bottom-1 right-2" />

                {/* Blinking Pin Locator */}
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <div className="relative">
                    <MapPin className="w-7 h-7 text-amber-400 fill-amber-400/20" />
                    <div className="absolute -inset-1 bg-amber-400 rounded-full animate-ping opacity-70 scale-75" />
                  </div>
                  <span className="text-[9px] text-white font-mono font-bold tracking-wider uppercase bg-[#0B2545]/90 py-0.5 px-2 rounded-full border border-white/10">
                    Salem Region
                  </span>
                </div>
              </div>

              <div className="pt-3 text-[10px] text-slate-300 font-bold flex items-center justify-between">
                <span>Kannankurichi, Salem</span>
                <span className="text-blue-300 font-extrabold group-hover:underline">Get Directions →</span>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[10px] text-slate-200 font-semibold leading-tight">
                Quality checks completed & ISO compliant materials only.
              </span>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-blue-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400 text-center sm:text-left">
          <div className="space-y-1">
            <p>© 2026 {COMP_INFO.name}. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-350 font-normal">License No: ST-SLM/CIVIL-2026. Certified Vastu Structural Planners.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://facebook.com" className="hover:text-white transition-colors" title="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="https://instagram.com" className="hover:text-white transition-colors" title="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="https://youtube.com" className="hover:text-white transition-colors" title="Youtube"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, Calculator, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { COMP_INFO } from '../data/siteData';

interface HeroProps {
  onOpenServices: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onOpenServices, onOpenQuote }: HeroProps) {
  const highlights = [
    "100% Vastu Compliant Plans",
    "Salem-wide DTCP & Municipal Approvals",
    "Elite Material Brand Vouching",
    "On-Time Frame Handover Guarantee"
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#EEF4FA] via-white to-[#E4ECF5] text-slate-800 overflow-hidden min-h-[92vh] flex items-center pt-24 md:pt-16">
      {/* Immersive background graphic or photos overlay with soft blue blend */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600')` 
        }}
      />
      
      {/* Modern decorative light glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#002D62_1px,transparent_1px),linear-gradient(to_bottom,#002D62_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full py-12 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Top Tagline Badges */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 text-blue-600 tracking-[0.35em] text-sm font-bold uppercase mx-auto lg:mx-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{COMP_INFO.slogan.toUpperCase()}</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight text-[#0B2545]"
              >
                Crafting <span className="text-blue-600 font-extrabold">Solid Foundations</span> <br className="hidden sm:inline" />
                for Generations in Salem.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-base sm:text-lg md:text-xl font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {COMP_INFO.tagline} Registered professional builders in Salem delivering durable concrete layouts, approvals, and magnificent architectural designs.
              </motion.p>
            </div>

            {/* Quick Core Bullet Checkpoints */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left pt-2"
            >
              {highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </motion.div>

            {/* Actions Block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-3"
            >
              <button 
                onClick={onOpenQuote}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#7388F4] to-[#8D7DF1] hover:from-[#6277F0] hover:to-[#8271EB] text-white px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider relative group outline-none overflow-hidden transition-all duration-300 shadow-xl shadow-[#7388F4]/30 cursor-pointer active:scale-95 duration-250 animate-pulse"
              >
                <Sparkles className="w-4 h-4 text-white font-bold" />
                <span>Request Free Consultation</span>
                <span className="absolute right-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
              </button>
              
              <button 
                onClick={onOpenServices}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-blue-600 px-7 py-3.5 rounded-lg font-bold text-sm tracking-wider transition-all duration-300 cursor-pointer active:scale-95 shadow-sm"
              >
                <span>Our Custom Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
              </button>
            </motion.div>
          </div>

          {/* Graphical/Card Hero Element (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Image container with stylish architectural geometry */}
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative blue geometric border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#7388F4] to-[#8D7DF1]/35 rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=700" 
                  alt="GEM Builders Master Elevation Salem" 
                  className="w-full h-full object-cover transform object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent gradient filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                {/* Floating Contact Card on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-blue-100 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 text-blue-600 rounded-lg flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-blue-600 font-mono font-bold uppercase tracking-wider">Direct Project Consultation</span>
                      <h4 className="font-display font-bold text-sm tracking-tight text-slate-900">Engr. R. Karthick B.E.</h4>
                      <p className="text-xs text-slate-600">Ready to walk you through 3D elevation sketches today.</p>
                      <a href={`tel:${COMP_INFO.phone1}`} className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-bold mt-1">
                        <span>Call {COMP_INFO.phone1}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

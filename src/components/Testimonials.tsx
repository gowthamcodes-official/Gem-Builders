import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, CheckCircle, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Autoplay functionality: automatically advance review slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIdx]); // Reset timer when activeIdx changes manually of dynamically

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative quotes background mark watermark */}
      <div className="absolute right-10 top-10 opacity-[0.05] text-blue-400 pointer-events-none scale-[4]">
        <Quote className="w-24 h-24" />
      </div>
 
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Summary Box mimicking genuine Google business rating card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3 text-center lg:text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Word of Mouth
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0B2545]">
                Client Reviews
              </h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto lg:mx-0 rounded-full" />
              <p className="text-slate-600 font-semibold text-xs leading-relaxed max-w-sm">
                Real feedback from business founders, medical professionals, and local Salem families about our standard engineering execution quality.
              </p>
            </div>
 
            {/* Google review styled summary widget */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm text-center lg:text-left space-y-4">
              <div className="flex justify-center lg:justify-start items-center gap-1">
                <span className="font-display font-black text-4xl text-slate-800">4.9</span>
                <span className="text-slate-400 font-bold">/ 5.0</span>
              </div>
              
              {/* Star ranks */}
              <div className="flex justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
 
              <div className="text-xs text-slate-500 font-semibold space-y-2">
                <p>Based on over 55+ Verified Salem client construction surveys completed.</p>
                <div className="h-px bg-slate-100" />
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-bold transition-all"
                >
                  <span>Submit a building review →</span>
                </a>
              </div>
            </div>
          </div>
 
          {/* Testimonial slider column (Right) */}
          <div className="lg:col-span-8 relative">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 pb-20 md:p-10 relative">
              {/* Large quote icon watermark */}
              <Quote className="w-10 h-10 text-blue-500/10 absolute top-8 left-8" />
              
              <div className="space-y-6 relative z-10">
                {/* Comment Text */}
                <p className="text-slate-700 font-semibold italic text-sm md:text-base leading-relaxed">
                  "{TESTIMONIALS_DATA[activeIdx].text}"
                </p>
 
                {/* Stars container for actual item */}
                <div className="flex gap-0.5">
                  {[...Array(TESTIMONIALS_DATA[activeIdx].rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
 
                {/* Profile row */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <img 
                      src={TESTIMONIALS_DATA[activeIdx].avatar} 
                      alt={TESTIMONIALS_DATA[activeIdx].name} 
                      className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 object-cover rounded-full border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center flex-wrap gap-2 text-left">
                        <h4 className="font-display font-bold text-sm md:text-base text-slate-800 leading-none">
                          {TESTIMONIALS_DATA[activeIdx].name}
                        </h4>
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-100 shrink-0">
                          <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                          <span>Verified Build</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-semibold mt-1.5 text-left">
                        {TESTIMONIALS_DATA[activeIdx].role} · Salem Citizen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Slider control arrows overlay bottom right */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <button 
                  onClick={handlePrev}
                  className="w-9 h-9 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  title="Previous Feedback"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-9 h-9 bg-[#0B2545] hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer font-bold"
                  title="Next Feedback"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
 
            {/* Slider dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx ? 'w-6 bg-[#0B2545]' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}

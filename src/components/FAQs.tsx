import { useState } from 'react';
import { FAQS_DATA } from '../data/siteData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQs() {
  const [activeFaq, setActiveFaq] = useState<string | null>("faq1");

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] relative scroll-mt-20 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Common Concerns
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B2545] leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 font-semibold text-sm max-w-lg mx-auto">
            Check our responses on material testing protocols, DTCP clearances, and payment milestones.
          </p>
        </div>

        {/* Accordions centered */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS_DATA.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div 
                key={faq.id} 
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-blue-400 shadow-sm"
              >
                {/* Header trigger */}
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-display font-bold text-sm md:text-base text-slate-800 leading-tight">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 ${
                    isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 animate-in fade-in slide-in-from-top-1 duration-250">
                    <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Phone / Email CTA banner */}
        <div className="max-w-3xl mx-auto mt-12 bg-blue-50/60 border border-blue-100 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wide">Still Have A Question?</span>
            <p className="text-xs text-slate-600 font-bold">Reach GEM Builders on WhatsApp directly:</p>
            <a href="https://wa.me/919677964825" target="_blank" rel="noreferrer" className="text-sm text-[#0B2545] font-black block mt-1 hover:underline">
              +91 96779 64825
            </a>
          </div>
          <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold shadow-md shrink-0">
            ?
          </div>
        </div>

      </div>
    </section>
  );
}

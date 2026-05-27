import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock } from 'lucide-react';
import { COMP_INFO } from '../data/siteData';

interface ContactFormProps {
  prefilledMessage: string;
}

export default function ContactForm({ prefilledMessage }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled estimate strings from the cost estimator
  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: prev.message 
          ? prev.message + "\n\n" + prefilledMessage 
          : prefilledMessage
      }));
      // Auto-focus or scroll to form field
      const formEl = document.getElementById('contact-form-container');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [prefilledMessage]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide at least your Name and Mobile Number.");
      return;
    }

    const projectLabels: Record<string, string> = {
      'residential': 'Turnkey Individual House/Villa',
      'commercial': 'Commercial steel Complex /PEB',
      'planning': '2D & 3D Architectural Blueprint',
      'interior': 'Luxury Modular Kitchen / Interiors',
      'renovations': 'Stability check, approvals & renovations'
    };
    const selectedProjectLabel = projectLabels[formData.projectType] || formData.projectType;

    // Structured plain text message for WhatsApp
    const messageText = `*GEM Builders & Developers — Service Request*\n` +
      `---------------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Mobile Number:* ${formData.phone}\n` +
      `*Email Address:* ${formData.email || 'Not provided'}\n` +
      `*Project Requirement:* ${selectedProjectLabel}\n` +
      `*Message / Area Specifications:* ${formData.message || 'No specific details provided'}`;

    // WhatsApp send API link. Prepended with 91 for Indian country code
    const whatsAppUrl = `https://api.whatsapp.com/send?phone=919677964825&text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp link in a secure new tab
    window.open(whatsAppUrl, '_blank');

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'residential',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Left Column (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3 text-left">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B2545] leading-tight">
                Connect With Our Civil Engineers
              </h2>
              <p className="text-slate-600 font-semibold text-xs leading-normal">
                Visit our Salem corporate design office or send us a WhatsApp message to start your turnkey construction blueprint.
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-6">
              
              {/* Office Address */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#0B2545]">Salem Design Office</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {COMP_INFO.address}
                  </p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#0B2545]">Call / WhatsApp</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed whitespace-nowrap">
                    Senior Engineer: <a href="tel:+919677964825" className="hover:underline text-blue-600">{COMP_INFO.phone1}</a>
                  </p>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed whitespace-nowrap">
                    Project Manager: <a href="tel:+917200004948" className="hover:underline text-blue-600">{COMP_INFO.phone2}</a>
                  </p>
                </div>
              </div>

              {/* Office Email & Hours */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#0B2545]">Business Hours</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Mon - Sat: 9:00 AM - 7:00 PM <br />
                    Sunday: Consultation by Pre-appointment
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Lead Form (Right 7 cols) */}
          <div id="contact-form-container" className="lg:col-span-7 bg-white text-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
            <div className="p-6 md:p-8 space-y-6 text-left">
              
              <div className="space-y-2">
                <span className="text-xs text-blue-600 font-extrabold uppercase tracking-widest">No Obligation</span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-[#0B2545]">
                  Request a Free Site Estimate
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  We'll review your Salem land dimensions, provide Vastu directions consultation, and deliver an approved 2D/3D quotation sketch.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-lg text-slate-900">Thank You, Sent to WhatsApp!</h4>
                    <p className="text-xs text-slate-600 leading-normal max-w-sm mx-auto font-semibold">
                      Your estimate query text has been copied and forwarded directly to WhatsApp. Founding Civil Engineer **R. Karthick** will review your details on WhatsApp and reply within a few minutes.
                    </p>
                  </div>
                  <button 
                    type="button"
                    onClick={handleReset}
                    className="bg-transparent hover:bg-slate-100 border border-slate-300 text-xs font-bold uppercase py-2.5 px-5 rounded-xl transition-colors text-slate-700 font-semibold cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-500 font-bold uppercase tracking-wide">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                        placeholder="Arun Kumar"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm font-semibold outline-none text-slate-800 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-500 font-bold uppercase tracking-wide">Mobile Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                        placeholder="+91 96779 64825"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm font-semibold outline-none text-slate-800 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-500 font-bold uppercase tracking-wide">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                        placeholder="name@gmail.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm font-semibold outline-none text-slate-800 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-500 font-bold uppercase tracking-wide">Project Requirement</label>
                      <select 
                        value={formData.projectType}
                        onChange={e => setFormData(p => ({...p, projectType: e.target.value}))}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3.5 text-sm font-semibold outline-none text-slate-800 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                      >
                        <option value="residential">Turnkey Individual House/Villa</option>
                        <option value="commercial">Commercial steel Complex /PEB</option>
                        <option value="planning">2D & 3D Architectural Blueprint</option>
                        <option value="interior">Luxury Modular Kitchen / Interiors</option>
                        <option value="renovations">Stability check, approvals & renovations</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-500 font-bold uppercase tracking-wide">Provide Dimension Specifications or Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData(p => ({...p, message: e.target.value}))}
                      placeholder="e.g. Plot size is 30x40 located in Kannankurichi. Need East-facing Vastu duplex..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm font-semibold outline-none text-slate-800 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#7388F4] to-[#8D7DF1] hover:from-[#6277F0] hover:to-[#8271EB] text-white py-3.5 rounded-xl font-bold uppercase text-xs md:text-sm tracking-widest shadow-xl cursor-pointer hover:shadow-[#7388F4]/20 transition-all text-center flex items-center justify-center gap-2 mt-4 active:scale-95"
                  >
                    <Send className="w-4 h-4 text-white font-bold" />
                    <span>Submit Service Request</span>
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

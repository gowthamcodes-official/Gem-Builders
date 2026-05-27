import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { COMP_INFO } from '../data/siteData';
import GemLogo from './GemLogo';

interface HeaderProps {
  onOpenQuote: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ onOpenQuote, activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    
    // Set manual scrolling window variable to ignore scrollspy updates during smooth scrolling
    (window as any).__isManualScrolling = true;
    if ((window as any).__scrollSpyTimeout) {
      clearTimeout((window as any).__scrollSpyTimeout);
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Re-enable scrollspy after smooth scroll animation completes (850ms)
    (window as any).__scrollSpyTimeout = setTimeout(() => {
      (window as any).__isManualScrolling = false;
    }, 850);
  };

  return (
    <header className="w-full sticky top-0 z-[50]">
      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
          : 'bg-white py-4 border-b border-slate-100 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <GemLogo size="sm" showSlogan={false} colorTheme="light" />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? 'text-[#0B2545] bg-[#0B2545]/5 font-extrabold shadow-sm border border-[#0B2545]/10'
                      : 'text-slate-600 hover:text-[#0B2545] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-[#7388F4] to-[#8D7DF1] hover:from-[#6277F0] hover:to-[#8271EB] text-white hover:shadow-lg font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm tracking-wide uppercase transition-all duration-200 transform active:scale-95 shadow-md shadow-[#7388F4]/15"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4 text-white font-bold" />
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg lg:hidden transition-colors text-slate-800 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-4 flex flex-col gap-1 px-4 z-40 max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left w-full px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  activeSection === item.id
                    ? 'text-[#0B2545] bg-blue-50'
                    : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-2 flex flex-col gap-3">
              <div className="px-4 text-[11px] text-slate-500 font-medium">
                Call Now: {COMP_INFO.phone1} / {COMP_INFO.phone2}
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7388F4] to-[#8D7DF1] hover:from-[#6277F0] hover:to-[#8271EB] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide shadow-md active:scale-95 transition-transform"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  // Scroll spy to highlight active section on navigation bar automatically
  useEffect(() => {
    const handleScrollSpy = () => {
      // If manual smooth scrolling is in progress (e.g. from nav clicks), skip spy updates
      if ((window as any).__isManualScrolling) {
        return;
      }

      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleOpenQuote = () => {
    // Scroll smoothly to contact form container
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Callback from Cost Estimator button clicks
  const handleQuoteWithData = (summaryString: string) => {
    setPrefilledMessage(summaryString);
    handleOpenQuote();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800 flex flex-col justify-between">
      {/* Premium Header Navs */}
      <Header 
        onOpenQuote={handleOpenQuote} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenServices={handleOpenServices} 
          onOpenQuote={handleOpenQuote} 
        />

        {/* Credentials trust strip */}
        <Stats />

        {/* Detailed profile and civil backgrounds */}
        <About />

        {/* Technical offering specifications */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Live gallery showcase */}
        <Projects />

        {/* Verified user testaments slider */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQs />

        {/* Structured Site Estimate and WhatsApp Enquiry Form */}
        <ContactForm prefilledMessage={prefilledMessage} />
      </main>

      {/* Brand footer and interactive directions maps finder */}
      <Footer />
    </div>
  );
}

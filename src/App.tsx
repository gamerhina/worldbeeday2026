import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Topics from './components/Topics';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (!lenis) {
       const newLenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      setLenis(newLenis);

      function raf(time: number) {
        newLenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href?.startsWith('#') && href.length > 1) { 
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
             lenis.scrollTo(target, { 
               offset: -100, 
               duration: 1.5,
               easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
             });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  return (
    <div className="min-h-screen bg-bee-cream font-sans">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="py-24 bg-bee-cream text-center px-4 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <img src="/assets/logo.png" alt="Seminar Logo" className="h-64 w-auto mb-10 drop-shadow-2xl filter hover:scale-105 transition-transform duration-500" />
          <span className="font-sans text-bee-teal font-bold uppercase tracking-widest text-sm mb-2 block">Summary</span>
          <h2 className="font-serif text-5xl font-bold text-bee-dark mb-8">About The Seminar</h2>
          <p className="font-sans text-xl text-bee-dark/70 leading-relaxed">
            Palm oil plays a crucial role in Indonesia's economy, yet its productivity is hindered by the declining population of pollinating weevils. Honey bees and stingless bees have the potential to serve as alternative pollinators while offering a new economic source. The "Bees for Sustainable Palm Oil" seminar fosters cross-sector collaboration to strengthen the role of bees in pollination, conservation, and the future sustainability of palm oil.
          </p>
        </div>
        
        {/* Soft Gradient Separator Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>
      <Speakers />
      <Topics />
      <Timeline />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

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
import Sponsor from './components/Sponsor';

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
      <Sponsor />
      <div id="about" className="py-12 md:py-24 bg-bee-cream text-center px-4 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <img src="/assets/logo.png" alt="Seminar Logo" className="h-40 md:h-64 w-auto mb-6 md:mb-10 drop-shadow-2xl filter hover:scale-105 transition-transform duration-500" />
          <span className="font-sans text-bee-teal font-bold uppercase tracking-widest text-xs md:text-sm mb-1 md:mb-2 block">Ringkasan</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-bee-dark mb-4 md:mb-8">Tentang Seminar</h2>
          <p className="font-sans text-sm md:text-xl text-bee-dark/70 leading-relaxed text-justify md:text-center mt-2">
            Kelapa sawit memainkan peran penting dalam ekonomi Indonesia, namun produktivitasnya terhambat oleh menurunnya populasi kumbang penyerbuk. Seminar ini diselenggarakan oleh Universitas Lampung, Perhimpunan Entomologi Indonesia (PEI) berkolaborasi dengan Asosiasi Perlebahan Indonesia (API) dan sponsor tunggal PT. Tunas Baru Lampung, Tbk. Lebah madu dan lebah tanpa sengat berpotensi menjadi penyerbuk alternatif sekaligus menawarkan sumber ekonomi baru. Seminar "Lebah untuk Sawit Berkelanjutan" mendorong kolaborasi lintas sektor untuk memperkuat peran lebah dalam penyerbukan, konservasi, dan keberlanjutan kelapa sawit di masa depan.
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

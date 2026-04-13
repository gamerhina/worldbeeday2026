import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Registration', href: '#pricing' },
  ];

  return (
    <>
      {/* Running Text Sponsor Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-red-100/50 overflow-hidden py-1.5 flex items-center shadow-sm">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
           className="flex whitespace-nowrap items-center text-[10px] md:text-sm font-bold tracking-widest text-bee-dark"
        >
           {[...Array(8)].map((_, i) => (
             <div key={i} className="flex items-center mx-6 md:mx-10 uppercase">
               <span className="text-[#DA291C]">Sponsor tunggal kegiatan :</span> 
               <span className="ml-1 md:ml-2">PT. Tunas Baru Lampung, Tbk.</span>
               <img src="/assets/sponsor_tbl.png" alt="PT Tunas Baru Lampung" className="h-4 md:h-6 ml-3 md:ml-5 object-contain" />
               <span className="ml-12 md:ml-20 opacity-30 text-bee-dark">•</span>
             </div>
           ))}
        </motion.div>
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-12 md:top-16 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className={`glass-pill px-6 py-3 rounded-pill flex items-center justify-between transition-all duration-300 ${scrolled ? 'w-[90%] md:w-[80%] shadow-md' : 'w-[95%] md:w-[90%]'}`}>
          
          {/* Desktop Left Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="#about" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">About</a>
            <a href="#speakers" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Speakers</a>
            <a href="#topics" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Topics</a>
          </div>

          {/* Logo Center */}
          <div className="flex-shrink-0 mx-auto md:mx-0 translate-x-0 md:-translate-x-1/2 md:absolute md:left-1/2 flex items-center justify-center gap-3 md:gap-5">
             <a href="#home" className="flex flex-col items-center justify-center group cursor-pointer">
                <img src="/assets/logo_grup.png" alt="World Bee Day" className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                <span className="font-serif font-bold text-[8px] md:text-[10px] tracking-wide md:tracking-widest uppercase text-bee-dark mt-1 whitespace-nowrap group-hover:text-bee-gold transition-colors">World Bee Day 2026</span>
             </a>
             
             <div className="w-px h-7 md:h-8 bg-bee-dark/20 rounded-full"></div>
             
             <div className="flex items-center gap-1.5 md:gap-2 group cursor-pointer">
                <div className="flex flex-col text-right">
                  <span className="font-sans text-[7px] md:text-[8px] italic text-bee-dark/60 leading-none mb-0.5">Collaborate</span>
                  <span className="font-serif font-bold text-[8px] md:text-[10px] uppercase text-bee-dark leading-none group-hover:text-bee-gold transition-colors">With API</span>
                </div>
                <img src="/assets/logo_api.png" alt="API Logo" className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
             </div>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-2">
             <a href="#timeline" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Timeline</a>
             <a href="#pricing" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Registration</a>
             <a href="#contact" className="ml-2 px-6 py-2.5 bg-bee-dark text-white rounded-full font-bold text-base hover:bg-bee-gold hover:text-bee-dark transition-all shadow-md hover:shadow-lg">
                Contact
             </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="p-2 text-bee-dark">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bee-cream flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 bg-white rounded-full shadow-sm"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl font-medium text-bee-dark hover:text-bee-teal"
                >
                  {link.name}
                </a>
              ))}
               <a href="https://forms.gle/nfJi6cR4LJ28NJGG7" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-xl font-bold text-bee-gold mt-4">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

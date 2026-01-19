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
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className={`glass-pill px-6 py-3 rounded-pill flex items-center justify-between transition-all duration-300 ${scrolled ? 'w-[90%] md:w-[80%] shadow-md' : 'w-[95%] md:w-[90%]'}`}>
          
          {/* Desktop Left Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="#about" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">About</a>
            <a href="#speakers" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Speakers</a>
            <a href="#topics" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Topics</a>
          </div>

          {/* Logo Center */}
          <div className="flex-shrink-0 mx-auto md:mx-0 translate-x-0 md:-translate-x-1/2 md:absolute md:left-1/2">
             <a href="#home" className="flex flex-col items-center justify-center group cursor-pointer">
                <img src="/assets/logo_grup.png" alt="World Bee Day" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                <span className="font-serif font-bold text-[10px] tracking-widest uppercase text-bee-dark mt-1 whitespace-nowrap group-hover:text-bee-gold transition-colors">World Bee Day 2026</span>
             </a>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-2">
             <a href="#timeline" className="text-base font-medium text-bee-dark/70 px-4 py-2 rounded-full hover:bg-bee-gold/20 hover:text-bee-dark transition-all duration-300">Timeline</a>
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
               <a href="#register" onClick={() => setIsOpen(false)} className="text-xl font-bold text-bee-gold mt-4">
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

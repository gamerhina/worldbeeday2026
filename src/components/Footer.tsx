import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bee-dark text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-3xl font-bold mb-3">World Bee Day 2026.</h3>
            <p className="font-sans text-white/40 text-sm max-w-sm">Memberdayakan Pertanian Berkelanjutan melalui Konservasi dan Inovasi Teknologi.</p>
          </div>
          
          <div className="flex space-x-6">
             {/* Socials */}
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-bee-gold hover:text-bee-dark transition-all duration-300"><Facebook size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-bee-gold hover:text-bee-dark transition-all duration-300"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-bee-gold hover:text-bee-dark transition-all duration-300"><Twitter size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-bee-gold hover:text-bee-dark transition-all duration-300"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="font-sans text-sm text-white/20">&copy; 2026 Panitia World Bee Day. Hak cipta dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-sans text-sm text-white/40">
             <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
             <a href="#" className="hover:text-white transition-colors">Syarat Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

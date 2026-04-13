import React from 'react';
import { motion } from 'framer-motion';

const Sponsor = () => {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden border-y border-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-8 md:p-12 bg-gradient-to-b from-red-50/50 to-white rounded-3xl border border-red-100 shadow-xl shadow-red-900/5 group"
        >
          <span className="text-[#DA291C] font-bold uppercase tracking-widest text-xs md:text-sm mb-4 bg-red-100/50 px-4 py-1.5 rounded-full inline-block">Sponsor Tunggal Kegiatan</span>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-white blur-xl group-hover:blur-2xl transition-all duration-500 rounded-full opacity-50" />
            <img 
              src="/assets/sponsor_tbl.png" 
              alt="PT. Tunas Baru Lampung, Tbk" 
              className="h-24 md:h-40 object-contain relative z-10 hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <h3 className="font-serif text-2xl md:text-4xl font-bold text-bee-dark mb-2">PT. Tunas Baru Lampung, Tbk.</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;

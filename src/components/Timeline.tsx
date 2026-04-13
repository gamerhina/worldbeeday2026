import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { date: "10 April – 25 April 2026", title: "Pengiriman Abstrak (Early Bird)", active: true },
    { date: "15 April – 25 April 2026", title: "Pemberitahuan LoA (Early Bird)", active: true },
    { date: "26 April – 25 Mei 2026", title: "Pengiriman Abstrak (Late Bird)", active: false },
    { date: "26 April – 25 Mei 2026", title: "Pemberitahuan LoA (Late Bird)", active: false },
    { date: "15 April – 2 Juni 2026", title: "Pengiriman Makalah Lengkap", active: false },
    { date: "18 – 19 Juni 2026", title: "Pelaksanaan Seminar", active: false },
    { date: "20 Juni 2026", title: "Field Trip", active: false, link: "#fieldtrip-page" },
  ];

  return (
    <section id="timeline" className="py-12 md:py-24 bg-gradient-to-b from-bee-cream to-white relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
           <span className="font-sans text-bee-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-1 md:mb-2 block">Jadwal</span>
           <h2 className="font-serif text-3xl md:text-5xl font-bold text-bee-dark">Tanggal Penting</h2>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-bee-teal/20" />

          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center justify-between mb-4 md:mb-12 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12" />
              
              <div className="z-10 bg-white p-0.5 md:p-1 border-2 md:border-4 border-bee-cream rounded-full shadow-sm mx-1 md:mx-0">
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${event.active ? 'bg-bee-gold animate-pulse' : 'bg-bee-teal'}`} />
              </div>
              
              <div className={`w-[45%] md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-black/5 hover:shadow-md hover:border-bee-gold/50 transition-all cursor-pointer group relative overflow-hidden">
                  <div className={`absolute top-0 bottom-0 w-1 md:w-1.5 bg-bee-gold ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
                  <span className="font-sans text-bee-teal font-bold text-[9px] md:text-sm tracking-wide md:tracking-widest uppercase block mb-0.5 md:mb-2 md:leading-normal leading-tight">{event.date}</span>
                  <h3 className="font-serif text-[12px] md:text-xl font-bold text-bee-dark group-hover:text-bee-gold transition-colors md:leading-normal leading-snug">{event.title}</h3>
                  
                  {event.link && (
                    <div className={`mt-2 md:mt-5 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <a href={event.link} className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2.5 bg-gradient-to-r from-bee-gold to-yellow-500 text-bee-dark rounded-full font-sans text-[10px] md:text-sm font-bold shadow-md shadow-bee-gold/30 hover:shadow-lg hover:shadow-bee-gold/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group/link border border-white/50">
                        <span className="hidden md:inline">View Fieldtrip Details</span>
                        <span className="inline md:hidden">Details</span>
                        <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

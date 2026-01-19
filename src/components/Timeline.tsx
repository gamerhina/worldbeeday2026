import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { date: "April 1, 2026", title: "Abstract Submission Opens", active: false },
    { date: "April 20, 2026", title: "Early Bird Registration Deadline", active: false },
    { date: "May 1, 2026", title: "Full Paper Submission", active: true },
    { date: "May 15, 2026", title: "Registration Closes", active: false },
    { date: "May 20, 2026", title: "World Bee Day Seminar", active: false },
  ];

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-bee-cream to-white relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <span className="font-sans text-bee-gold font-bold uppercase tracking-widest text-sm mb-2 block">Schedule</span>
           <h2 className="font-serif text-5xl font-bold text-bee-dark">Important Dates</h2>
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
              className={`flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12" />
              
              <div className="z-10 bg-white p-1 border-4 border-bee-cream rounded-full shadow-sm">
                <div className={`w-4 h-4 rounded-full ${event.active ? 'bg-bee-gold animate-pulse' : 'bg-bee-teal'}`} />
              </div>
              
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md hover:border-bee-gold/50 transition-all cursor-pointer group relative overflow-hidden">
                  <div className={`absolute top-0 bottom-0 w-1.5 bg-bee-gold ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
                  <span className="font-sans text-bee-teal font-bold text-sm tracking-widest uppercase block mb-2">{event.date}</span>
                  <h3 className="font-serif text-xl font-bold text-bee-dark group-hover:text-bee-gold transition-colors">{event.title}</h3>
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

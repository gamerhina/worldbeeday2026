import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-bee-cream relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bee-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-bee-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-bee-dark mb-6">Registration</h2>
          <p className="font-sans text-lg text-bee-dark/60">Secure your spot at the seminar.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* Card 1: Student - Glass White/Teal */}
          <div className="w-full md:w-1/2 p-10 rounded-4xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
            <h3 className="font-serif text-3xl text-bee-dark mb-2">Student</h3>
            <div className="flex items-baseline mb-8">
              <span className="font-sans text-4xl font-bold text-bee-teal">IDR 200k</span>
            </div>
            <ul className="space-y-4 mb-10 text-bee-dark/80 font-sans flex-grow">
              <li className="flex items-center"><Check size={18} className="text-bee-teal mr-3" /> Access to all sessions</li>
              <li className="flex items-center"><Check size={18} className="text-bee-teal mr-3" /> E-Certificate</li>
              <li className="flex items-center"><Check size={18} className="text-bee-teal mr-3" /> Seminar Kit</li>
              <li className="flex items-center"><Check size={18} className="text-bee-teal mr-3" /> Lunch & Snacks</li>
            </ul>
            <button className="w-full py-4 rounded-full bg-bee-dark text-white font-bold hover:bg-bee-teal transition-all shadow-lg hover:shadow-xl">
              Register Student
            </button>
          </div>

          {/* Card 2: Professional - Glass Gold */}
          <div className="w-full md:w-1/2 p-10 rounded-4xl bg-gradient-to-br from-bee-gold/90 to-bee-gold/70 backdrop-blur-xl border border-white/20 shadow-xl hover:scale-105 transition-all duration-300 relative flex flex-col">
            <div className="absolute inset-0 bg-white/10 opacity-50 pointer-events-none" /> {/* Shine overlay */}
            
            <h3 className="font-serif text-3xl text-bee-dark mb-2 relative z-10">Professional</h3>
            <div className="flex items-baseline mb-8 relative z-10">
              <span className="font-sans text-4xl font-bold text-bee-dark">IDR 500k</span>
            </div>
            <ul className="space-y-4 mb-10 text-bee-dark/90 font-sans relative z-10 flex-grow">
              <li className="flex items-center"><Check size={18} className="text-white mr-3 bg-bee-dark/10 rounded-full p-0.5" /> All Student Benefits</li>
              <li className="flex items-center"><Check size={18} className="text-white mr-3 bg-bee-dark/10 rounded-full p-0.5" /> Networking Dinner</li>
              <li className="flex items-center"><Check size={18} className="text-white mr-3 bg-bee-dark/10 rounded-full p-0.5" /> Premium Seminar Kit</li>
              <li className="flex items-center"><Check size={18} className="text-white mr-3 bg-bee-dark/10 rounded-full p-0.5" /> Publication Opportunity</li>
            </ul>
            <button className="w-full py-4 rounded-full bg-bee-dark text-white font-bold hover:bg-white hover:text-bee-dark transition-all shadow-lg hover:shadow-xl relative z-10 border-2 border-transparent">
              Register Professional
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

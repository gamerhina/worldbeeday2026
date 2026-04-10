import React from 'react';
import { BadgeCheck, Wallet } from 'lucide-react';

const Pricing = () => {
  const fees = [
    { category: 'Presenter (PEI/API Member)', earlyBird: '550.000', lateBird: '600.000', tag: 'Member', color: 'from-amber-400 to-orange-500', tagColor: 'text-amber-600 bg-amber-50' },
    { category: 'Presenter (Non-Member)', earlyBird: '600.000', lateBird: '650.000', tag: 'General', color: 'from-bee-teal to-teal-600', tagColor: 'text-teal-600 bg-teal-50' },
    { category: 'Student Presenter', earlyBird: '300.000', lateBird: '350.000', tag: 'Student', color: 'from-blue-400 to-indigo-500', tagColor: 'text-blue-600 bg-blue-50' },
    { category: 'Poster Presenter', earlyBird: '500.000', lateBird: '500.000', tag: 'Poster', color: 'from-purple-400 to-violet-500', tagColor: 'text-purple-600 bg-purple-50' },
    { category: 'Non-Presenter Participant', earlyBird: '350.000', lateBird: '350.000', tag: 'Participant', color: 'from-gray-500 to-slate-700', tagColor: 'text-slate-600 bg-slate-50' },
    { category: 'Field Trip', earlyBird: '-', lateBird: '-', tag: 'Tour', color: 'from-green-400 to-emerald-500', tagColor: 'text-green-600 bg-green-50' },
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-bee-gold font-bold uppercase tracking-wider text-sm">Investment</span>
          <h2 className="text-3xl md:text-5xl font-bold text-bee-dark mt-2">Registration Fees</h2>
        </div>

        <div className="bg-white rounded-3xl border border-bee-light shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-bee-dark to-slate-800 text-white">
                  <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs whitespace-nowrap">Category</th>
                  <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs text-right whitespace-nowrap">Early Bird (IDR)<br/><span className="text-[10px] font-normal opacity-70">April 10 - April 25, 2026</span></th>
                  <th className="px-6 py-5 font-bold uppercase tracking-wider text-xs text-right whitespace-nowrap">Late Bird (IDR)<br/><span className="text-[10px] font-normal opacity-70">April 26 - May 25, 2026</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fees.map((item, index) => (
                  <tr key={index} className="group hover:bg-bee-gold/5 transition-all duration-300">
                    <td className="px-6 py-5">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mr-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <BadgeCheck size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-bee-dark text-lg group-hover:text-bee-teal transition-colors leading-tight mb-1">{item.category}</div>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${item.tagColor}`}>{item.tag}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right whitespace-nowrap">
                      <div className="font-sans font-black text-2xl text-bee-dark group-hover:text-bee-gold transition-colors tracking-tight">
                        {item.earlyBird}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right bg-slate-50/50 group-hover:bg-transparent transition-colors whitespace-nowrap">
                      <div className="font-sans font-black text-2xl text-bee-dark group-hover:text-bee-gold transition-colors tracking-tight">
                        {item.lateBird}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-bee-dark flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-white/70 italic">
              <Wallet size={18} className="mr-2 text-bee-gold" />
              Includes kit, certificate, and lunch.
            </div>
            <a href="https://forms.gle/nfJi6cR4LJ28NJGG7" target="_blank" rel="noopener noreferrer" className="px-10 py-3 rounded-xl bg-bee-gold text-bee-dark font-black hover:bg-white transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap inline-block">
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;




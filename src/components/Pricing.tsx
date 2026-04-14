import React from 'react';
import { BadgeCheck, Wallet } from 'lucide-react';

const Pricing = () => {
  const fees = [
    { category: 'Pemakalah (Anggota PEI/API)', earlyBird: '550.000', lateBird: '600.000', tag: 'Anggota', color: 'from-amber-400 to-orange-500', tagColor: 'text-amber-600 bg-amber-50' },
    { category: 'Pemakalah (Umum)', earlyBird: '600.000', lateBird: '650.000', tag: 'Umum', color: 'from-bee-teal to-teal-600', tagColor: 'text-teal-600 bg-teal-50' },
    { category: 'Pemakalah (Mahasiswa)', earlyBird: '300.000', lateBird: '350.000', tag: 'Mahasiswa', color: 'from-blue-400 to-indigo-500', tagColor: 'text-blue-600 bg-blue-50' },
    { category: 'Pemakalah (Poster)', earlyBird: '500.000', lateBird: '500.000', tag: 'Poster', color: 'from-purple-400 to-violet-500', tagColor: 'text-purple-600 bg-purple-50' },
    { category: 'Peserta Non-Pemakalah', earlyBird: '350.000', lateBird: '350.000', tag: 'Peserta', color: 'from-gray-500 to-slate-700', tagColor: 'text-slate-600 bg-slate-50' },
    { category: 'Field Trip (Opsional)', earlyBird: '300.000', lateBird: '300.000', tag: 'Tur', color: 'from-green-400 to-emerald-500', tagColor: 'text-green-600 bg-green-50' },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-bee-gold font-bold uppercase tracking-wider text-xs md:text-sm">Biaya</span>
          <h2 className="text-2xl md:text-5xl font-bold text-bee-dark mt-2">Biaya Pendaftaran</h2>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl border border-bee-light shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-bee-dark to-slate-800 text-white">
                  <th className="px-2 py-3 md:px-6 md:py-5 font-bold uppercase tracking-wider text-[10px] md:text-xs">Kategori</th>
                  <th className="px-2 py-3 md:px-6 md:py-5 font-bold uppercase tracking-wider text-[10px] md:text-xs text-right leading-tight w-[30%] md:w-auto">Early Bird<br/><span className="text-[8px] md:text-[10px] font-normal opacity-70">10-25 Apr</span></th>
                  <th className="px-2 py-3 md:px-6 md:py-5 font-bold uppercase tracking-wider text-[10px] md:text-xs text-right leading-tight w-[30%] md:w-auto">Late Bird<br/><span className="text-[8px] md:text-[10px] font-normal opacity-70">26 Apr-25 Mei</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fees.map((item, index) => (
                  <tr key={index} className="group hover:bg-bee-gold/5 transition-all duration-300">
                    <td className="px-2 py-3 md:px-6 md:py-5 w-[40%] md:w-auto">
                      <div className="flex items-center">
                        <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mr-2 md:mr-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <BadgeCheck className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-bee-dark text-[11px] md:text-lg group-hover:text-bee-teal transition-colors leading-tight mb-0.5 md:mb-1">{item.category}</div>
                          <span className={`text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 rounded uppercase tracking-tighter ${item.tagColor}`}>{item.tag}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 md:px-6 md:py-5 text-right">
                      <div className="font-sans font-black text-[13px] md:text-2xl text-bee-dark group-hover:text-bee-gold transition-colors tracking-tight">
                        {item.earlyBird === '-' ? '-' : item.earlyBird}
                      </div>
                    </td>
                    <td className="px-2 py-3 md:px-6 md:py-5 text-right bg-slate-50/50 group-hover:bg-transparent transition-colors">
                      <div className="font-sans font-black text-[13px] md:text-2xl text-bee-dark group-hover:text-bee-gold transition-colors tracking-tight">
                        {item.lateBird === '-' ? '-' : item.lateBird}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 md:p-6 bg-bee-dark flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center text-xs md:text-sm text-white/70 italic">
                <Wallet size={16} className="mr-2 text-bee-gold sm:w-[18px] sm:h-[18px] shrink-0" />
                Termasuk seminar kit, sertifikat, dan makan siang.
              </div>
              <div className="flex items-center text-xs md:text-sm text-white/90 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                Pembayaran ke BNI: <span className="font-bold text-bee-gold mx-1.5 text-sm md:text-base tracking-wide">582601699</span> a.n Ni Kadek Emi Sintha Dewi
              </div>
            </div>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openRegistrationModal'))} className="px-10 py-3 rounded-xl bg-bee-gold text-bee-dark font-black hover:bg-white transition-all shadow-lg hover:-translate-y-0.5 whitespace-nowrap inline-block">
              DAFTAR SEKARANG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;




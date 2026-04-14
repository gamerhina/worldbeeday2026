import React, { useState, useEffect } from 'react';
import { X, MapPin, Ship, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FieldtripModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openFieldtripModal', handleOpen);
    return () => window.removeEventListener('openFieldtripModal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden rounded-3xl shadow-2xl bg-white"
          >
            {/* Background Image Header with overlay */}
            <div className="relative h-48 md:h-64 shrink-0 bg-gray-900">
              <img src="https://images.unsplash.com/photo-1544521876-0feba760e0a5?w=1200&h=600&fit=crop" alt="Pantai Pahawang" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-bee-dark via-bee-dark/40 to-transparent"></div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-colors z-10 focus:outline-none"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <span className="inline-block px-3 py-1 bg-bee-gold text-bee-dark font-bold text-xs rounded-full mb-2 uppercase tracking-wide">
                  Optional Tour
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-white drop-shadow-md">Eksplorasi Pahawang</h2>
                <p className="text-white/80 font-sans mt-2 flex items-center gap-2">
                  <MapPin size={16} /> Pesona keindahan bawah laut Lampung
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div 
              className="p-6 md:p-8 overflow-y-auto bg-bee-cream/30 scrollbar-thin scrollbar-thumb-bee-gold/50 scrollbar-track-transparent flex-1"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Info Box */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-bee-gold/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-bee-teal/5 rounded-bl-[100px]-"></div>
                    <h3 className="font-bold text-bee-dark text-xl mb-2 flex items-center gap-2">
                       Informasi Field Trip
                    </h3>
                    <div className="text-3xl font-black text-bee-gold mb-4">Rp 300.000<span className="text-sm text-bee-dark/50 font-normal">/pax</span></div>
                    
                    <h4 className="font-bold text-sm text-bee-dark uppercase tracking-wider mb-3">Fasilitas Termasuk:</h4>
                    <ul className="space-y-2">
                      {[
                        "Bus",
                        "Kapal wisata",
                        "Tour guide",
                        "Dokumentasi Drone",
                        "Makan siang",
                        "Air mineral",
                        "Alat snorkeling",
                        "Tiket wisata + tiket masuk Pulau Pahawang",
                        "Dokumentasi bawah laut"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-bee-dark/80">
                          <CheckCircle2 size={16} className="text-bee-teal mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Destinations */}
                  <div>
                    <h3 className="font-bold text-bee-dark text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                      <Ship size={20} className="text-bee-teal" /> Semua Destinasi
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Pulau Pahawang Besar",
                        "Pulau Pahawang Kecil",
                        "Pulau Kelagian Kecil",
                        "Jembatan Pasir Pahawang",
                        "Snorkeling Taman Nemo"
                      ].map((dest, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-bee-dark/70 shadow-sm">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Rundown */}
                <div>
                  <h3 className="font-bold text-bee-dark text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                    <Clock size={20} className="text-bee-teal" /> Rundown Trip Pahawang
                  </h3>
                  <div className="space-y-0 text-sm">
                    {[
                      { time: "07.30 - 08.00", act: "loading peserta trip" },
                      { time: "08.00 - 09.00", act: "menuju dermaga 2 Ketapang" },
                      { time: "09.00 - 09.15", act: "breafing" },
                      { time: "09.15 - 09.45", act: "menuju pulau kelagian besar" },
                      { time: "09.45 - 11.00", act: "eksplor kelagian besar dan dokumentasi" },
                      { time: "11.00 - 11.45", act: "menuju Pahawang besar" },
                      { time: "11.45 - 12.30", act: "ishoma" },
                      { time: "12.30 - 14.45", act: "snorkeling" },
                      { time: "14.45 - 15.00", act: "menuju Kelagian kecil" },
                      { time: "15.00 - 16.00", act: "eksplor kelagian kecil dan dokumentasi" },
                      { time: "16.00 - 16.30", act: "menuju dermaga Ketapang" },
                      { time: "16.30 - 17.00", act: "bilas dan bersih-bersih" },
                      { time: "17.00 - 18.00", act: "kembali ke Bandar Lampung" },
                      { time: "", act: "Trip selesai", finish: true },
                    ].map((item, i, arr) => (
                      <div key={i} className="flex relative pb-4">
                        {i !== arr.length - 1 && <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-bee-gold/20"></div>}
                        <div className={`w-4 h-4 rounded-full mt-1 mr-4 shrink-0 border-2 ${item.finish ? 'bg-bee-gold border-bee-gold text-white' : 'bg-white border-bee-gold'}`}></div>
                        <div>
                          {item.time && <div className="font-bold text-bee-teal text-[13px] mb-0.5">{item.time}</div>}
                          <div className={`text-bee-dark ${item.finish ? 'font-bold' : ''} capitalize`}>{item.act}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FieldtripModal;

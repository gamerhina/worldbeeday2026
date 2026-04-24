import React, { useEffect } from 'react';
import { MapPin, Ship, Clock, CheckCircle2, ArrowLeft, ChevronDown, Anchor, Waves, Sun, Camera, Compass, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FieldtripPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bee-cream font-sans pb-12 overflow-x-hidden">
      {/* Navbar area background */}
      <div className="h-20 bg-white shadow-sm flex items-center px-4 md:px-12 sticky top-0 z-[60]">
        <Link to="/" className="flex items-center gap-2 text-bee-dark hover:text-bee-teal transition-colors font-bold group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Beranda
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl mx-auto flex flex-col relative rounded-3xl shadow-xl mt-8 bg-white"
      >
        {/* Decorative Ornaments Background */}
        <div className="absolute top-80 right-0 opacity-10 pointer-events-none rotate-12 scale-[2]">
          <Sun size={200} className="text-bee-gold" />
        </div>
        <div className="absolute top-[40rem] left-[-2rem] opacity-5 pointer-events-none -rotate-12 scale-[3]">
          <Waves size={200} className="text-blue-500" />
        </div>

        {/* Hero with Embedded Video Background or Top video */}
        <div className="relative h-[50vh] md:h-[75vh] shrink-0 bg-gray-900 overflow-hidden w-full group rounded-t-3xl border-b-8 border-bee-teal/80">
          <div className="absolute inset-0 z-0">
             <iframe 
                src="https://www.youtube.com/embed/JeVQ-p0U6_4?autoplay=1&mute=1&controls=0&loop=1&playlist=JeVQ-p0U6_4&modestbranding=1&rel=0&iv_load_policy=3" 
                title="Pahawang Video"
                className="w-[100vw] h-[100vh] min-w-full min-h-full object-cover scale-[1.5] md:scale-[1.2] lg:scale-[1.1] pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-bee-dark via-bee-dark/40 to-transparent z-10 pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-20 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-bee-gold text-bee-dark font-bold text-xs rounded-full mb-3 uppercase tracking-widest shadow-md">
              <Anchor size={14} /> Special Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white drop-shadow-lg leading-tight">Eksplorasi Pahawang</h1>
            <p className="text-white/90 font-sans mt-3 flex items-center gap-2 text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
              <MapPin size={24} className="text-bee-gold" /> Liburan Seru di Pulau Pasir Putih
            </p>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute bottom-8 right-8 z-30 text-white pointer-events-none flex flex-col items-center gap-4"
          >
            <span 
              className="text-sm uppercase tracking-[0.3em] font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
              style={{ writingMode: 'vertical-rl' }}
            >
              Scroll
            </span>
            <ChevronDown size={40} className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Column */}
            <div className="space-y-10">
              
              {/* Info Box */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-colors"></div>
                <h3 className="font-bold text-blue-950 text-2xl mb-2 flex items-center gap-3">
                   Fasilitas Termasuk
                </h3>
                <div className="text-4xl font-black text-bee-gold mb-6 mt-4">Rp 300.000<span className="text-lg text-blue-900/50 font-normal">/pax</span></div>
                 
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 relative z-10">
                  {[
                    "Bus Wisata",
                    "Kapal Wisata",
                    "Tour Leader",
                    "Local Guide",
                    "Tiket Masuk Destinasi Wisata",
                    "Pelampung",
                    "Snorkeling + Dokumentasi",
                    "Snack",
                    "Makan Siang",
                    "Mineral Gelas + Botol",
                    "Asuransi",
                    "P3K",
                    "Outbound Area",
                    "Fasilitator Outbound"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-blue-900/80 font-medium">
                      <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ngapain Aja di Pahawang */}
              <div className="space-y-6">
                <h3 className="font-bold text-bee-dark text-2xl mb-4 flex items-center gap-3 border-b-2 border-bee-teal/20 pb-3">
                  <Compass size={28} className="text-bee-teal" /> Di Pahawang ngapain aja ya?
                </h3>
                
                <div className="space-y-5">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-bee-teal/50 transition-colors relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-5"><Sun size={100} /></div>
                    <h4 className="font-bold text-lg text-bee-dark mb-2 flex items-center gap-2"><Camera size={18} className="text-bee-gold" /> Outbound / Fun game</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">Kegiatan seru yang bertujuan mempererat dan memberikan kesan yang hangat. Tentunya dengan perlengkapan dan batas kegiatan yang aman.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-bee-teal/50 transition-colors relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-5"><Waves size={100} /></div>
                    <h4 className="font-bold text-lg text-bee-dark mb-2 flex items-center gap-2"><Ship size={18} className="text-bee-gold" /> Menikmati bawah laut</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">Kalo ke pahawang, bisa banget menikmati bawah lautnya dengan snorkeling. Tapi ada opsi terbaik yang ditawarkan yaitu sea walker, berjalan di bawah laut tanpa harus bisa berenang.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-bee-teal/50 transition-colors relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-5"><Anchor size={100} /></div>
                    <h4 className="font-bold text-lg text-bee-dark mb-2 flex items-center gap-2"><Ship size={18} className="text-bee-gold" /> Cobain aktivitas air seru</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">Aktivitas air di pahawang lengkap banget, mulai dari banana boat, donat boat, jetski dan kano transparan seperti ini. Ada disini 😍</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-bee-teal/50 transition-colors relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-5"><MapPin size={100} /></div>
                    <h4 className="font-bold text-lg text-bee-dark mb-2 flex items-center gap-2"><Sun size={18} className="text-bee-gold" /> Menikmati pantai pahawang</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">Pantai dengan pasir putih, dan laut yang jernih membuat semakin betah untuk menikmati keindahan pantai di Pulau Pahawang</p>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className="bg-bee-cream/50 p-6 rounded-3xl border border-bee-gold/30">
                <h3 className="font-bold text-bee-dark text-xl mb-4 flex items-center gap-2">
                  <Plus size={24} className="text-bee-gold" /> Additional Activities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {name: "Sea Walker", price: "160rb / orang (15 min)"},
                    {name: "Banana Boat", price: "35rb / orang"},
                    {name: "Donat Boat", price: "35rb / orang"},
                    {name: "Kano Transparan", price: "150rb"},
                  ].map((act, i) => (
                    <div key={i} className="bg-white px-4 py-3 rounded-xl border border-bee-gold/20 shadow-sm flex flex-col">
                      <span className="font-bold text-bee-dark text-sm">{act.name}</span>
                      <span className="font-bold text-bee-teal mt-1">{act.price}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Rundown */}
            <div>
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-28">
                <h3 className="font-bold text-bee-dark text-2xl mb-8 flex items-center gap-3 border-b-2 border-bee-gold/30 pb-4">
                  <Clock size={28} className="text-bee-teal" /> Rundown Eksplorasi
                </h3>
                <div className="space-y-0 text-sm md:text-base relative left-2">
                  {[
                    { time: "08.00", act: "Keberangkatan dari Kota Bandar Lampung" },
                    { time: "09.00", act: "Tiba di dermaga ketapang" },
                    { time: "09.15", act: "Breafing dan Keberangkatan trip" },
                    { time: "10.00", act: "Outbound & Dokumentasi Drone di Pulau Kelagian" },
                    { time: "11.15", act: "Menuju Pulau Pahawang Besar" },
                    { time: "12.00", act: "Istirahat & Makan Siang" },
                    { time: "13.00", act: "Snorkeling & Dokumentasi bawah laut" },
                    { time: "15.00", act: "Explore pulau kelagian kecil" },
                    { time: "16.00", act: "Menuju ke dermaga ketapang" },
                    { time: "16.30", act: "Tiba di dermaga ketapang & bersih-bersih" },
                    { time: "17.30", act: "Kembali ke Kota Bandar Lampung" },
                    { time: "18.30", act: "Tiba di Kota Bandar Lampung", finish: true },
                    { time: "", act: "Trip Selesai", ending: true },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex relative pb-6 group hover:translate-x-1 transition-transform">
                      {i !== arr.length - 1 && <div className="absolute left-[9px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-bee-gold to-bee-teal/30 group-hover:bg-bee-teal transition-colors"></div>}
                      <div className={`w-5 h-5 rounded-full mt-0.5 mr-5 shrink-0 border-2 z-10 ${item.finish || item.ending ? 'bg-bee-teal border-bee-teal' : 'bg-white border-bee-gold shadow-sm group-hover:scale-110 transition-transform'}`}></div>
                      <div>
                        {item.time && <div className="font-bold text-bee-teal text-[15px] md:text-[16px] mb-1">{item.time}</div>}
                        <div className={`text-bee-dark ${item.finish || item.ending ? 'font-black text-lg' : 'font-medium'} ${item.ending ? 'mt-[-10px] text-bee-gold' : ''}`}>{item.act}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Catatan Penting */}
          <div className="mt-12 md:mt-20 bg-amber-50 border border-amber-200/60 p-6 md:p-10 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl mix-blend-multiply"></div>
            
            <h3 className="font-bold text-amber-900 text-xl md:text-2xl mb-6 flex items-center gap-3 relative z-10">
              <span className="flex-shrink-0 w-2 h-8 bg-amber-500 rounded-full"></span>
              Catatan Tambahan Penting
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-amber-900/90 relative z-10 font-medium leading-relaxed">
              <li><span className="font-bold text-amber-900">Biaya di luar biaya seminar;</span></li>
              <li>Panitia hanya mengkoordinir;</li>
              <li>Field trip akan dilakukan ketika jumlah peserta mencapai <span className="font-bold text-amber-900 bg-amber-200/50 px-1 rounded">minimal 76 peserta</span>;</li>
              <li>Kalau peserta yang mendaftar field trip kurang dari jumlah minimal, field trip <span className="font-bold text-red-600 bg-red-100 px-1 rounded">tidak akan di langsungkan</span>;</li>
              <li>Pembayaran bisa dilakukan pada saat registrasi, dan <span className="font-bold text-amber-900 underline decoration-amber-300 underline-offset-4">maksimal 10 hari sebelum field trip</span>.</li>
            </ul>
             
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-4 relative z-10">
               <Link to="/" className="px-8 py-5 bg-white text-bee-dark font-bold text-xl rounded-full shadow-lg hover:shadow-xl hover:text-bee-teal transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-3 w-full sm:w-auto">
                 <ArrowLeft size={24} /> Kembali
               </Link>
               <a href="https://forms.gle/nfJi6cR4LJ28NJGG7" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-gradient-to-r from-bee-gold to-yellow-500 hover:from-amber-500 hover:to-orange-400 text-bee-dark font-black text-xl rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-3 w-full sm:w-auto">
                 Daftar Sekarang <ArrowLeft size={24} className="rotate-180" />
               </a>
            </div>
          </div>
        </div>
        
      </motion.div>

    </div>
  );
};

export default FieldtripPage;

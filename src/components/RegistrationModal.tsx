import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, FileText, CheckCircle2, Leaf, Bug, Hexagon, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPosterGuideOpen, setIsPosterGuideOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openRegistrationModal', handleOpen);
    return () => window.removeEventListener('openRegistrationModal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bee-dark/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden"
          >
            {/* Aesthetics / Ornaments */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-bee-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-bee-teal/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center justify-between p-6 md:p-8 border-b border-bee-gold/20 bg-bee-cream relative overflow-hidden shrink-0">
              <div className="absolute top-[-30px] left-[-20px] opacity-10 text-bee-gold rotate-12"><Hexagon size={120} /></div>
              <div className="absolute bottom-[-10px] right-20 opacity-10 text-bee-teal -rotate-12"><Leaf size={80} /></div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-bee-dark relative z-10 flex items-center gap-3">
                <FileText size={28} className="text-bee-gold" /> Informasi & Panduan
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white/50 hover:bg-red-50 text-bee-dark/60 hover:text-red-500 rounded-full transition-colors relative z-10 backdrop-blur-sm"
              >
                <X size={24} />
              </button>
            </div>

            <div 
              className="p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-bee-gold/50 scrollbar-track-transparent space-y-8 relative z-10"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* Alur Pendaftaran */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-bee-gold/30 transition-colors">
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity"><Bug size={80} /></div>
                <h3 className="font-bold text-bee-dark mb-4 text-xl flex items-center gap-2">Alur Pendaftaran</h3>
                <p className="font-medium text-bee-dark/70 mb-4">Mempersiapkan dokumen registrasi yang harus diunggah :</p>
                <ol className="list-decimal pl-5 space-y-3 font-sans text-bee-dark/80 relative z-10">
                  <li>Kartu anggota aktif PFI 2025 atau API (jika ada)</li>
                  <li>Abstrak sesuai template <a href="/assets/Template Abstrak Seminar.docx" download="Template Abstrak Seminar.docx" className="text-bee-teal hover:text-teal-700 font-bold underline whitespace-nowrap" target="_blank" rel="noopener noreferrer">(unduh template abstrak)</a></li>
                  <li>Bukti pembayaran pendaftaran</li>
                  <li>Mengisi data peserta pada google form dengan link sebagai berikut: <a href="https://forms.gle/nfJi6cR4LJ28NJGG7" target="_blank" rel="noopener noreferrer" className="text-bee-teal hover:text-teal-700 font-bold underline whitespace-nowrap">Link Pendaftaran</a></li>
                  <li>Pembayaran dilakukan ke rekening <span className="font-bold text-bee-dark bg-bee-gold/20 px-2 py-0.5 rounded">BNI : 582601699</span> a.n Ni Kadek Emi Sintha Dewi</li>
                  <li>Submit google form</li>
                  <li>Konfirmasi Bukti pembayaran via Whatsapp kepada panitia <a href="https://wa.me/6281339534591" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-bold whitespace-nowrap">(Ni Kadek Emi Sintha Dewi: +6281339534591)</a></li>
                  <li>Peserta menunggu LoA sesuai jadwal yang ditentukan</li>
                  <li>Mengirimkan makalah lengkap <a href="#" className="text-bee-teal hover:text-teal-700 font-bold underline whitespace-nowrap">(unduh template makalah lengkap)</a> ke email panitia: <a href="mailto:panitia.wbd2026@gmail.com" className="text-blue-600 hover:text-blue-800 font-bold">panitia.wbd2026@gmail.com</a> dengan subjek: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm text-bee-dark font-medium whitespace-nowrap overflow-x-auto inline-block mt-1">Makalah_Nama Lengkap_Nomor topik</span></li>
                </ol>
              </div>

              {/* Nomor Topik */}
              <div className="bg-bee-cream/40 p-6 rounded-2xl border border-bee-gold/20">
                <h3 className="font-bold text-bee-dark mb-4 text-lg flex items-center gap-2">
                  <span className="w-2 h-6 bg-bee-teal rounded-full inline-block"></span> Nomor Topik :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 pl-2">
                  {[
                    "Budidaya Tanaman",
                    "Sosial Ekonomi",
                    "Teknologi Informasi Pertanian",
                    "Hama & Penyakit Tanaman",
                    "Konservasi, Keanekaragaman Hayati & Ekosistem",
                    "Ilmu Tanah",
                    "Lebah dan Kesehatan"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-bee-dark/80 text-sm md:text-base font-medium">
                       <span className="font-bold text-bee-gold w-4">{i + 1}.</span> {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion: Panduan Pemakalah Poster */}
              <div className="border border-bee-gold/30 bg-white rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setIsPosterGuideOpen(!isPosterGuideOpen)}
                  className="w-full p-5 flex items-center justify-between text-left bg-gradient-to-r hover:from-bee-cream/50 hover:to-transparent transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-bee-gold/20 text-bee-dark transition-transform duration-300 ${isPosterGuideOpen ? 'rotate-180' : ''}`}>
                      <ImageIcon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-bee-dark text-lg md:text-xl">Panduan Pemakalah Poster</h3>
                      <p className="text-xs md:text-sm text-bee-dark/60 font-medium">Seminar World Bee Day 2026</p>
                    </div>
                  </div>
                  {isPosterGuideOpen ? (
                    <ChevronUp size={24} className="text-bee-dark/50" />
                  ) : (
                    <ChevronDown size={24} className="text-bee-dark/50" />
                  )}
                </button>
                
                <AnimatePresence>
                  {isPosterGuideOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-2 md:pt-4 border-t border-gray-100 bg-white/50 space-y-6 relative">
                        <div className="absolute right-10 top-20 opacity-5 pointer-events-none"><Hexagon size={150} /></div>
                        
                        <div>
                          <h4 className="font-bold text-bee-dark flex items-center gap-2 mb-2"><span className="text-bee-teal">1.</span> Ketentuan Umum</h4>
                          <p className="text-sm text-bee-dark/80 mb-2">Poster merupakan karya ilmiah asli dan relevan dengan sub tema seminar, topik mencakup:</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-bee-dark/80">
                            <li>Budidaya Tanaman</li>
                            <li>Sosial Ekonomi Pertanian</li>
                            <li>Teknologi Informasi Pertanian</li>
                            <li>Hama dan Penyakit Tanaman</li>
                            <li>Konservasi, Keanekaragaman Hayati, dan Ekosistem</li>
                            <li>Ilmu Tanah</li>
                            <li>Lebah dan Kesehatan</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-bee-dark flex items-center gap-2 mb-2"><span className="text-bee-teal">2.</span> Spesifikasi Poster</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-bee-dark/80 relative z-10">
                            <li>Poster dicetak dengan Ukuran: <span className="font-semibold text-bee-dark">lebar 100 cm x tinggi 120 cm</span> (ex banner)</li>
                            <li>Orientasi: <span className="font-semibold text-bee-dark">vertikal (portrait)</span></li>
                            <li>Resolusi: <span className="font-semibold text-bee-dark">300 dpi</span></li>
                            <li>Peserta dapat melakukan diskusi ilmiah secara langsung dengan peserta lain</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-bee-dark flex items-center gap-2 mb-2"><span className="text-bee-teal">3.</span> Struktur Isi Poster</h4>
                          <p className="text-sm text-bee-dark/80 mb-2">Poster disusun secara ringkas dan komunikatif, meliputi:</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-bee-dark/80">
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Judul</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Afriliasi</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Latar belakang</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Tujuan</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Metodologi</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Hasil & bhs</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-bee-gold"/> Kesimpulan</span>
                          </div>
                          <p className="text-sm text-bee-dark/80 mt-2 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-bee-gold mt-1 shrink-0" />
                            Ucapan terima kasih (Opsional) dan referensi singkat (dapat dalam bentuk barcode)
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-bee-dark flex items-center gap-2 mb-2"><span className="text-bee-teal">4.</span> Ketentuan Desain</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-bee-dark/80">
                            <li>Menggunakan bahasa Indonesia atau Inggris</li>
                            <li>Teks jelas terbaca (disarankan ukuran font proporsional untuk dibaca jarak 1–2 meter)</li>
                            <li>Visual (grafik, gambar, diagram) dianjurkan untuk memperjelas isi</li>
                            <li>Desain ringkas, informatif, dan tidak terlalu padat teks</li>
                          </ul>
                        </div>

                        <div className="bg-bee-cream/50 p-4 rounded-xl border border-bee-gold/20">
                          <h4 className="font-bold text-bee-dark flex items-center gap-2 mb-2"><span className="text-bee-teal">5.</span> Ketentuan Tambahan</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-bee-dark/80">
                            <li>Seluruh pemakalah poster akan mendapatkan <span className="font-semibold">sertifikat partisipasi</span></li>
                            <li>Poster dapat digunakan untuk dokumentasi dan publikasi kegiatan dengan tetap mencantumkan nama penulis</li>
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end items-center gap-4 bg-gray-50/80 shrink-0 relative z-10">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm"
              >
                Tutup
              </button>
              <a 
                href="https://forms.gle/nfJi6cR4LJ28NJGG7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-bee-gold to-yellow-500 hover:from-amber-500 hover:to-orange-400 text-bee-dark rounded-full font-extrabold hover:shadow-lg transition-all shadow-md focus:outline-none"
              >
                Link Registrasi
              </a>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;

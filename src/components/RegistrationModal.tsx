import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openRegistrationModal', handleOpen);
    return () => window.removeEventListener('openRegistrationModal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-bee-cream/30">
              <h2 className="text-2xl font-bold font-serif text-bee-dark">Alur Pendaftaran</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div 
              className="p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-bee-gold/50 scrollbar-track-transparent"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <div className="mb-6">
                <h3 className="font-bold text-bee-dark mb-4 text-lg">Mempersiapkan dokumen registrasi yang harus diunggah :</h3>
                <ol className="list-decimal pl-5 space-y-3 font-sans text-bee-dark/80">
                  <li>Kartu anggota aktif PFI 2025 atau API (jika ada)</li>
                  <li>Abstrak sesuai template <a href="#" className="text-bee-teal hover:text-teal-700 font-semibold underline whitespace-nowrap">(unduh template abstrak)</a></li>
                  <li>Bukti pembayaran pendaftaran</li>
                  <li>Mengisi data peserta pada google form dengan link sebagai berikut: <a href="https://forms.gle/nfJi6cR4LJ28NJGG7" target="_blank" rel="noopener noreferrer" className="text-bee-teal hover:text-teal-700 font-semibold underline whitespace-nowrap">Link Pendaftaran</a></li>
                  <li>Pembayaran dilakukan ke rekening <span className="font-bold text-bee-dark">BNI : 582601699</span> a.n Ni Kadek Emi Sintha Dewi</li>
                  <li>Submit google form</li>
                  <li>Konfirmasi Bukti pembayaran via Whatsapp kepada panitia <a href="https://wa.me/6281339534591" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">(Ni Kadek Emi Sintha Dewi: +6281339534591)</a></li>
                  <li>Peserta menunggu LoA sesuai jadwal yang ditentukan</li>
                  <li>Mengirimkan makalah lengkap <a href="#" className="text-bee-teal hover:text-teal-700 font-semibold underline whitespace-nowrap">(unduh template makalah lengkap)</a> ke email panitia: <a href="mailto:panitia.wbd2026@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold">panitia.wbd2026@gmail.com</a> dengan subjek: <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-sm text-bee-dark whitespace-nowrap overflow-x-auto block mt-1 w-max">Makalah_Nama Lengkap_Nomor topik</span></li>
                </ol>
              </div>

              <div className="mt-8 bg-bee-cream/20 p-5 rounded-xl border border-bee-gold/20">
                <h3 className="font-bold text-bee-dark mb-3 text-lg">Nomor Topik :</h3>
                <ol className="list-decimal pl-5 space-y-1.5 font-sans justify-left text-bee-dark/80">
                  <li>Budidaya Tanaman</li>
                  <li>Sosial Ekonomi</li>
                  <li>Teknologi Informasi Pertanian</li>
                  <li>Hama & Penyakit Tanaman</li>
                  <li>Konservasi, Keanekaragaman Hayati & Ekosistem</li>
                  <li>Ilmu Tanah</li>
                  <li>Lebah dan Kesehatan</li>
                </ol>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end items-center gap-3 bg-gray-50/50 focus:outline-none">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 hover:text-gray-900 transition-all focus:outline-none"
              >
                Tutup
              </button>
              <a 
                href="https://forms.gle/nfJi6cR4LJ28NJGG7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-bee-dark text-white rounded-lg font-bold hover:bg-bee-gold hover:text-bee-dark transition-all focus:ring-2 focus:ring-bee-gold focus:outline-none inline-block text-center"
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

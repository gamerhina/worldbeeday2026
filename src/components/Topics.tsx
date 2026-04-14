import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Sprout, Users, Cpu, Leaf, Layers, Heart } from 'lucide-react';

const topics = [
  { icon: Sprout, title: "Budidaya Tanaman", desc: "Praktik agronomi modern untuk meningkatkan produktivitas dan kualitas hasil panen secara berkelanjutan.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-500" },
  { icon: Users, title: "Sosial Ekonomi", desc: "Menganalisis kesejahteraan petani, dinamika pasar, dan kebijakan ekonomi di sektor pertanian.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500" },
  { icon: Cpu, title: "Teknologi Informasi Pertanian", desc: "Penerapan teknologi cerdas, digitalisasi, dan presisi untuk masa depan pertanian.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-500" },
  { icon: Bug, title: "Hama & Penyakit Tanaman", desc: "Strategi pengelolaan hama dan penyakit terpadu untuk melindungi hasil pertanian.", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-500" },
  { icon: Leaf, title: "Konservasi, Keanekaragaman Hayati & Ekosistem", desc: "Menjaga keseimbangan ekologis dan keanekaragaman hayati untuk mendukung keberlanjutan lingkungan.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-500" },
  { icon: Layers, title: "Ilmu Tanah", desc: "Mempelajari sifat fisik, kimia, dan biologi tanah guna mendukung produktivitas dan kelestarian pertanian.", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-500" },
  { icon: Heart, title: "Lebah dan Kesehatan", desc: "Eksplorasi manfaat madu, propolis, dan produk lebah lainnya untuk meningkatkan kesehatan manusia.", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-500" },
];

const Topics = () => {
  return (
    <section id="topics" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-bee-gold font-bold uppercase tracking-wider text-xs md:text-sm">Fokus Kami</span>
          <h2 className="text-2xl md:text-5xl font-bold text-bee-dark mt-1 md:mt-2">Topik Seminar</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {topics.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`modern-card p-6 md:p-10 flex flex-col items-start border-t-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] rounded-2xl md:rounded-3xl ${item.border}`}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${item.bg} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 ${item.color}`}>
                <item.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-2xl font-bold text-bee-dark mb-2 md:mb-4">{item.title}</h3>
              <p className="font-sans text-sm md:text-base text-bee-dark/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;

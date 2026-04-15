import React from 'react';
import { motion } from 'framer-motion';

const speakers = [
  {
    name: "Dwi Asmono, Ph.D.",
    role: "Keynote Speaker",
    image: "/assets/speaker_dwi_asmono.png",
    topic: "Polinator dan produktivitas kelapa sawit"
  },
  {
    name: "Prof. Damayanti Buchori",
    role: "Keynote Speaker",
    image: "/assets/speaker_damayanti_buchori.png",
    topic: "Potensi Lebah sebagai Polinator Kelapa Sawit"
  },
  {
    name: "Hari Purwanto, Ph.D.",
    role: "Keynote Speaker",
    image: "/assets/speaker_hari_purwanto.png",
    topic: <>Potensi Integrasi lebah dan <span className="italic">Elaeidobius</span> sp. untuk keberlanjutan dan produktivitas kelapa sawit</>
  },
  {
    name: "Prof. Hamim Sudarsono",
    role: "Keynote Speaker",
    image: "/assets/speaker_hamim_sudarsono.png",
    topic: "Metode aplikasi Pestisida yang aman terhadap lebah dan penyerbuk lain"
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-12 md:py-20 bg-bee-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-bee-teal mb-2 md:mb-4">Keynote Speakers</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts leading the conversation on sustainable agriculture and bee conservation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="modern-card overflow-hidden group relative h-[250px] md:h-[500px] rounded-2xl md:rounded-3xl"
            >
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-bee-dark/95 via-bee-dark/40 md:via-bee-dark/20 to-transparent p-4 md:p-8 flex flex-col justify-end">
                <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-bee-gold/90 text-bee-dark text-[8px] md:text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-1.5 md:mb-3">{speaker.role}</span>
                <h3 className="font-serif text-sm md:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">{speaker.name}</h3>
                <p className="font-sans text-bee-cream/90 text-[10px] md:text-sm leading-snug line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none transition-all">{speaker.topic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

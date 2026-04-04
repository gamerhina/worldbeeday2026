import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Sprout, Users, Cpu, Leaf } from 'lucide-react';

const topics = [
  { icon: Sprout, title: "Crop Cultivation", desc: "Modern agronomic practices to sustainably improve productivity and crop yield quality.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-500" },
  { icon: Users, title: "Socio-Economics", desc: "Analyzing farmers' welfare, market dynamics, and economic policies in the agricultural sector.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500" },
  { icon: Cpu, title: "Agricultural Information Technology", desc: "Application of smart technologies, digitalization, and precision for the future of farming.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-500" },
  { icon: Bug, title: "Plant Pests & Diseases", desc: "Integrated pest and disease management strategies to protect agricultural yields.", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-500" },
  { icon: Leaf, title: "Conservation, Biodiversity & Ecosystems", desc: "Maintaining ecological balance and biodiversity to support environmental sustainability.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-500" },
];

const Topics = () => {
  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-bee-gold font-bold uppercase tracking-wider text-sm">Our Focus</span>
          <h2 className="text-3xl md:text-5xl font-bold text-bee-dark mt-2">Seminar Topics</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {topics.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`modern-card p-10 flex flex-col items-start border-t-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] ${item.border}`}
            >
              <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 ${item.color}`}>
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-bee-dark mb-4">{item.title}</h3>
              <p className="font-sans text-bee-dark/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;

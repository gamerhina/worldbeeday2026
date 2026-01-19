import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Palmtree, Sprout, TrendingUp, Droplets, Globe } from 'lucide-react';

const topics = [
  { icon: Bug, title: "Bee Conservation", desc: "Protecting native pollinators in agricultural landscapes.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-500" },
  { icon: Palmtree, title: "Sustainable Palm Oil", desc: "Best practices for eco-friendly plantation management.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-500" },
  { icon: Sprout, title: "Biodiversity", desc: "Enhancing flora diversity to support ecosystem health.", color: "text-lime-600", bg: "bg-lime-50", border: "border-lime-500" },
  { icon: TrendingUp, title: "Productivity", desc: "Boosting yield through natural pollination services.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500" },
  { icon: Droplets, title: "Resource Management", desc: "Efficient water and soil usage in farming.", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-500" },
  { icon: Globe, title: "Global Standards", desc: "Aligning with international sustainability goals.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-500" },
];

const Topics = () => {
  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-bee-gold font-bold uppercase tracking-wider text-sm">Our Focus</span>
          <h2 className="text-3xl md:text-5xl font-bold text-bee-dark mt-2">Seminar Topics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`modern-card p-10 flex flex-col items-start border-t-4 ${item.border}`}
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

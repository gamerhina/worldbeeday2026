import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const slides = [
  {
    image: "/assets/header1.png",
    tag: "Bandar Lampung, 23 - 25 Juni 2026",
    title: "Seminar Nasional",
    highlight: "World Bee Day 2026",
    subtitle: "Lebah untuk Sawit Berkelanjutan: Konservasi, Keanekaragaman Hayati, dan Peningkatan Produktivitas",
    align: "center"
  },
  {
    image: "/assets/header_bees.png",
    tag: "World Bee Day 2026",
    title: "Celebrating",
    highlight: "Pollinators",
    subtitle: "Protecting the guardians of our ecosystem for a better future.",
    align: "right"
  },
  {
    image: "/assets/header_palm.png",
    tag: "Future of Farming",
    title: "Sustainable",
    highlight: "Innovation",
    subtitle: "Leveraging technology to boost productivity and biodiversity.",
    align: "left"
  },
  {
    image: "/assets/header_abstract.png",
    tag: "Data Driven",
    title: "Digital",
    highlight: "Conservation",
    subtitle: "Using modern data visualization to track and improve colony health.",
    align: "left"
  }
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.1
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, slides.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [page]);

  const slide = slides[imageIndex];
  const isCenter = slide.align === "center";
  const isRight = slide.align === "right";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center bg-bee-cream">
      
      {/* Background Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", ease: "easeInOut", duration: 0.8 },
            opacity: { duration: 0.5 },
            scale: { duration: 6, ease: "linear" } // Subtle zoom effect
          }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bee-cream/50 via-bee-cream/10 to-transparent" />
          {isCenter && <div className="absolute inset-0 bg-bee-cream/20 backdrop-blur-[2px]" />}
          {isRight && <div className="absolute inset-0 bg-gradient-to-l from-bee-cream/80 via-bee-cream/20 to-transparent" />}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex h-full ${
        isCenter ? 'justify-center items-center text-center' : 
        isRight ? 'justify-end items-center text-right' : 
        'justify-start items-center text-left'
      }`}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={page}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`max-w-4xl ${isCenter ? 'mx-auto' : isRight ? 'ml-auto' : ''}`}
          >
            <div className={`inline-block bg-bee-teal/10 border border-bee-teal/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 ${isCenter ? 'bg-white/50' : ''}`}>
              <span className="text-bee-teal font-sans font-semibold tracking-wider uppercase text-xs md:text-sm">{slide.tag}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-7xl leading-[1.1] text-bee-dark font-medium tracking-tight mb-8">
              {slide.title} <br />
              <span className={`italic text-bee-gold ${isCenter ? 'text-5xl md:text-8xl font-bold' : ''}`}>{slide.highlight}</span>
            </h1>

            <p className={`font-sans text-base md:text-xl text-bee-dark/80 max-w-2xl leading-relaxed mb-10 ${
              isCenter ? 'mx-auto' : 
              isRight ? 'border-r-4 border-bee-gold pr-6 ml-auto' : 
              'border-l-4 border-bee-gold pl-6'
            }`}>
              {slide.subtitle}
            </p>

            <div className={`flex gap-4 ${isCenter ? 'justify-center' : isRight ? 'justify-end' : 'justify-start'}`}>
              <a href="#register" className="px-8 py-4 bg-bee-dark text-white rounded-full font-bold text-base hover:scale-105 transition-transform duration-300 shadow-lg">
                 Register Now
              </a>
              <a href="#about" className="px-8 py-4 bg-white/50 backdrop-blur border border-bee-dark/10 rounded-full font-bold text-base hover:bg-white transition-colors duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 right-12 flex space-x-4 z-20">
        <button 
          onClick={() => paginate(-1)} 
          className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white hover:text-bee-dark transition-all text-bee-dark"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={() => paginate(1)} 
          className="p-4 rounded-full bg-bee-dark text-white hover:bg-bee-gold transition-all shadow-lg"
        >
          <ArrowRight size={24} />
        </button>
      </div>
      
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';

interface HeroProps {
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')",
          transform: `translateY(${offsetY * 0.4}px)`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-dark-navy/60"></div>
      <div className="relative z-10 px-4 text-white animate-fade-in-up">
        <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-clean-white via-slate-200 to-neon-blue bg-clip-text text-transparent">
            Bagaimana Cara Website Bekerja
          </span>
          <br className="hidden md:block" /> di Balik Layar?
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-10">
          Temukan rahasia di balik setiap klik yang Anda lakukan di internet.
        </p>
        <button 
          onClick={onLearnMore}
          className="font-poppins font-bold text-lg bg-neon-blue text-dark-navy px-8 py-4 rounded-2xl
                     hover:bg-opacity-90 transform hover:scale-105 transition-all duration-400 ease-in-out
                     shadow-glow-blue hover:shadow-glow-blue-hover"
        >
          Pelajari Sekarang
        </button>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
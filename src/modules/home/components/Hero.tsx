
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-white">
      {/* Structural Background Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[800px] h-[800px] border-[1px] border-black rounded-full rotate-45" />
        <div className="absolute w-[600px] h-[600px] border-[1px] border-black" />
      </div>

      <div className="container mx-auto text-center z-10">
        <div className="mb-6 flex justify-center">
          <span className="inline-block px-3 py-1 bg-occaYellow text-[10px] font-bold uppercase tracking-[0.3em] text-black">
            Carnaval 2025 • Hospedagem Exclusiva
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-8xl leading-tight mb-8 max-w-5xl mx-auto">
          Viva o Carnaval no <span className="text-occaRed">Epicentro</span> da Cultura.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Hospede-se na OCCA: um casarão histórico transformado em hub de inovação, localizado a poucos passos dos principais focos de folia de Olinda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#quartos" className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-all text-center">
            Ver Quartos Disponíveis
          </a>
          <a href="#experiencia" className="border-2 border-black text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center">
            A Experiência OCCA
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

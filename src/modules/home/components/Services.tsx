
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; image: string; number: string }> = ({ title, description, image, number }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-concrete">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
      />
      <div className="absolute top-6 left-6 bg-white w-10 h-10 flex items-center justify-center font-bold text-sm border border-black">
        {number}
      </div>
    </div>
    <h3 className="font-serif text-3xl mb-3 group-hover:text-occaRed transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
    <div className="mt-4 flex items-center gap-2 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all text-black">
      Conhecer Estrutura <span className="text-occaRed">→</span>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="espaco" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Ambiente OCCA</h2>
            <h3 className="font-serif text-5xl md:text-6xl leading-tight">Mais que um quarto, um <span className="italic text-occaYellow bg-black px-2">Hub Criativo</span>.</h3>
          </div>
          <p className="text-gray-500 max-w-sm mb-4 leading-relaxed">
            Hóspedes OCCA têm acesso livre às nossas áreas de tecnologia e inovação, unindo o descanso ao network criativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard 
            number="01"
            title="Laboratório Maker"
            description="Use nossas ferramentas durante sua estadia. De eletrônica a marcenaria, sinta-se em casa para criar."
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
          />
          <ServiceCard 
            number="02"
            title="Jardim Histórico"
            description="Um refúgio de silêncio no coração da festa. Café da manhã servido sob as árvores do nosso quintal."
            image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600"
          />
          <ServiceCard 
            number="03"
            title="Coworking 24/7"
            description="Precisa enviar um email ou editar fotos do Carnaval? Nossa estrutura de trabalho está à sua disposição."
            image="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=600"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

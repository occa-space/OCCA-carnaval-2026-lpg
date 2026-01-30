
import React from 'react';
import { DomeLogo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-concrete border-t border-gray-200 pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <DomeLogo className="w-10 h-10 text-black" />
              <span className="text-2xl font-bold tracking-tighter uppercase">OCCA</span>
            </div>
            <p className="text-gray-500 max-w-sm text-lg leading-relaxed mb-8">
              Olinda Creative Community Action. Transformando tradição em tecnologia e cultura em progresso.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-tighter">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Localização</h4>
            <p className="text-gray-600 leading-loose">
              Rua Manoel Borba, 285<br />
              Carmo, Sítio Histórico<br />
              Olinda - PE, 53120-000<br />
              Brasil
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Menu Fast</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-occaRed transition-colors">Manifesto</a></li>
              <li><a href="#" className="text-gray-600 hover:text-occaRed transition-colors">Transparência</a></li>
              <li><a href="#" className="text-gray-600 hover:text-occaRed transition-colors">Projetos Sociais</a></li>
              <li><a href="#" className="text-gray-600 hover:text-occaRed transition-colors">Carreiras</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-300 gap-6">
          <p className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} OCCA - Olinda Creative Community Action. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-black">Política de Privacidade</a>
            <a href="#" className="hover:text-black">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

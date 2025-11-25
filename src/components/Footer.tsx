import React from 'react';

interface FooterProps {
  ansCode?: string;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ ansCode, onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="bg-[#011c16] text-gray-400 py-12 border-t border-white/5 font-light text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-white">
              {/* Placeholder for BrasCare Logo in Footer or Text */}
              <span className="font-bold text-xl tracking-tight">BrasCare</span>
            </div>
            <p className="opacity-60 text-xs leading-relaxed">
              Concessionária Autorizada MedSênior. Especialistas em planos de saúde para a terceira idade com foco em medicina preventiva.
            </p>
          </div>

          <div className="md:col-span-1 text-center md:text-left space-y-2">
            <h4 className="text-white font-bold mb-2">Institucional</h4>
            <p>BrasCare Saúde e Corretora</p>
            <p>CNPJ: 45.949.883/0001-19</p>
          </div>

          <div className="md:col-span-1 text-center md:text-left space-y-2">
            <h4 className="text-white font-bold mb-2">MedSênior</h4>
            <p>ANS: {ansCode || "41782-3"}</p>
            <p>Samedil Serv. Med. Hospitalares S.A</p>
          </div>

          <div className="md:col-span-1 text-center md:text-right space-y-2">
            {onTermsClick ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onTermsClick();
                }}
                className="block hover:text-brand-accent transition-colors text-left bg-transparent border-none p-0 cursor-pointer w-full md:text-right"
              >
                Termos de Uso
              </button>
            ) : (
              <a href="#" className="block hover:text-brand-accent transition-colors">Termos de Uso</a>
            )}
            {onPrivacyClick ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onPrivacyClick();
                }}
                className="block hover:text-brand-accent transition-colors text-left bg-transparent border-none p-0 cursor-pointer w-full md:text-right"
              >
                Política de Privacidade
              </button>
            ) : (
              <a href="#" className="block hover:text-brand-accent transition-colors">Política de Privacidade</a>
            )}
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] opacity-40 max-w-4xl mx-auto leading-relaxed">
            A BrasCare é uma corretora autorizada de planos de saúde. As informações contidas neste site são resumidas e podem sofrer alterações sem aviso prévio. Consulte as condições contratuais completas. A comercialização dos planos respeita as normas da Agência Nacional de Saúde Suplementar (ANS).
          </p>
          <p className="text-[10px] opacity-30 mt-4">© 2025 BrasCare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
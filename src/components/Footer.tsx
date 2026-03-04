import React from 'react';
import {
  BRASCARE,
  MEDSENIOR_OPERADORA,
  MEDSENIOR_SEAL,
  SITE_OPERATOR_LABEL,
  POLICY_LAST_UPDATED,
  FOOTER_WHO_OPERATES,
} from '../config/siteIdentity';

interface FooterProps {
  ansCode?: string;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onTransparencyClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  ansCode,
  onPrivacyClick,
  onTermsClick,
  onTransparencyClick,
}) => {
  const ansDisplay = ansCode || MEDSENIOR_OPERADORA.ansCodeDefault;

  return (
    <footer className="bg-[#011c16] text-gray-300 py-8 lg:py-10 border-t border-white/5 font-light text-base">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Quem opera o site – frase objetiva para revisão */}
          <div className="md:col-span-1 text-center md:text-left">
            <h4 className="text-white font-bold mb-2">Este site</h4>
            <p className="text-white font-medium mb-1">{SITE_OPERATOR_LABEL}</p>
            <p className="opacity-90 text-sm leading-relaxed">
              {FOOTER_WHO_OPERATES}
            </p>
          </div>

          {/* Nossa parceria – BrasCare (dados do selo MedSênior) */}
          <div className="md:col-span-1 text-center md:text-left space-y-2">
            <h4 className="text-white font-bold mb-2">Parceria</h4>
            <p className="text-white font-medium">{MEDSENIOR_SEAL.brand}</p>
            <p className="text-xs uppercase text-brand-accent/90 tracking-wide">
              {MEDSENIOR_SEAL.concessionariaLabel}
            </p>
            <p className="text-sm opacity-90">{BRASCARE.nameSeal}</p>
            <p className="text-sm opacity-90">Reg. N° {BRASCARE.regNumber}</p>
            <p className="text-sm opacity-90">CNPJ: {BRASCARE.cnpj}</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Somos revendedores autorizados para planos MedSênior.
            </p>
          </div>

          {/* Cobertura/assistência – evita ambiguidade “venda direta da operadora” */}
          <div className="md:col-span-1 text-center md:text-left space-y-2">
            <h4 className="text-white font-bold mb-2">Cobertura/assistência</h4>
            <p className="text-white">{MEDSENIOR_OPERADORA.name}</p>
            <p className="text-sm">ANS: {ansDisplay}</p>
            <p className="text-sm opacity-90">
              {MEDSENIOR_OPERADORA.razaoSocial}
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              Operadora responsável pela cobertura e assistência. Este site intermedia a cotação.
            </p>
          </div>

          {/* Legal e Transparência */}
          <div className="md:col-span-1 text-center md:text-right space-y-2">
            <h4 className="text-white font-bold mb-2">Legal</h4>
            {onTransparencyClick && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onTransparencyClick();
                }}
                className="block w-full md:text-right py-2 text-left hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer text-sm min-h-[44px] flex items-center md:justify-end"
              >
                Quem somos
              </button>
            )}
            {onTermsClick ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onTermsClick();
                }}
                className="block w-full md:text-right py-2 text-left hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer text-sm min-h-[44px] flex items-center md:justify-end"
              >
                Termos de Uso
              </button>
            ) : (
              <a href="#" className="block py-2 hover:text-brand-accent transition-colors text-sm min-h-[44px] flex items-center md:justify-end md:text-right">
                Termos de Uso
              </a>
            )}
            {onPrivacyClick ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onPrivacyClick();
                }}
                className="block w-full md:text-right py-2 text-left hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer text-sm min-h-[44px] flex items-center md:justify-end"
              >
                Política de Privacidade
              </button>
            ) : (
              <a href="#" className="block py-2 hover:text-brand-accent transition-colors text-sm min-h-[44px] flex items-center md:justify-end md:text-right">
                Política de Privacidade
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs sm:text-sm opacity-80 max-w-4xl mx-auto leading-relaxed">
            Site operado por revendedores autorizados. Os planos de
            saúde são da operadora MedSênior (Samedil). As informações são
            resumidas e podem sofrer alterações sem aviso prévio; consulte as
            condições contratuais completas. A comercialização respeita as normas
            da Agência Nacional de Saúde Suplementar (ANS).
          </p>
          <p className="text-xs opacity-70 mt-3">
            Identidade e políticas revisadas em {POLICY_LAST_UPDATED}.
          </p>
          <p className="text-xs opacity-60 mt-4">
            © {new Date().getFullYear()} {SITE_OPERATOR_LABEL}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Award } from 'lucide-react';

const BRASCARE_LOGO = "/images/branding/brascare-logotipo-horizontal.png";
const MEDSENIOR_LOGO = "https://v1.planosmelhoridade.com.br/wp-content/uploads/2025/07/Logotipo.png";

interface HeaderProps {
  onNavigate?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center gap-2">

          {/* Left: BrasCare Logo */}
          <div className="flex items-center justify-start flex-shrink-0">
            <a href="#" onClick={handleLogoClick} className="cursor-pointer">
              <img
                src={BRASCARE_LOGO}
                alt="BrasCare Corretora"
                className="h-6 md:h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center/Right: Actions & Official Seal */}
          <div className="flex items-center justify-end flex-shrink-0 max-w-[60%]">

            {/* Desktop Seal */}
            <div className="hidden md:flex rounded-md shadow-sm border border-green-800/20 bg-white relative group">
              <div className="bg-[#004334] px-3 py-1.5 flex items-center justify-center min-w-[90px] rounded-l-md">
                <img
                  src={MEDSENIOR_LOGO}
                  alt="MedSênior"
                  className="h-5 w-auto object-contain brightness-0 invert"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="bg-gradient-to-br from-[#a4cd39] to-[#8cb52d] px-3 py-1 pr-8 relative flex flex-col justify-center h-full rounded-r-md">
                <h3 className="text-[9px] font-extrabold uppercase text-brand-dark tracking-wider mb-0 leading-tight">
                  Concessionária Autorizada
                </h3>
                <p className="text-[8px] font-bold text-brand-dark leading-tight max-w-[180px]">
                  BRASCARE LIFE SAUDE E CORRETORA
                </p>
                <p className="text-[8px] font-semibold text-brand-dark mt-0">
                  Reg. N.º 135399
                </p>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-[#004334] text-[#a4cd39] rounded-full p-1 border border-[#a4cd39] shadow-sm z-10">
                  <Award className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Mobile Seal Optimized */}
            <div className="md:hidden w-full flex justify-end">
              <div className="flex items-center bg-gray-50/90 backdrop-blur-sm pl-1 pr-2 py-1 rounded-full border border-gray-200 shadow-sm max-w-full overflow-hidden">
                <div className="bg-[#008d5e] text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm mr-1.5 flex-shrink-0">
                  Autorizada
                </div>
                <div className="text-[9px] font-semibold text-gray-700 whitespace-nowrap truncate">
                  BrasCare - Reg. 135399
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
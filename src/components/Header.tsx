import React from 'react';

const BRASCARE_LOGO = "/images/branding/brascare-logotipo-horizontal.webp";
const MEDSENIOR_SEAL = "/images/branding/medsenior-selo.png";

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

          {/* Center/Right: Official MedSênior Seal */}
          <div className="flex items-center justify-end flex-shrink-0">
            <img
              src={MEDSENIOR_SEAL}
              alt="Concessionária Autorizada MedSênior"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

        </div>
      </div>
    </header>
  );
};
import React from 'react';
import { MEDSENIOR_SEAL as SEAL_DATA } from '../config/siteIdentity';

const BRASCARE_LOGO = "/images/branding/brascare-logotipo-horizontal.webp";
const MEDSENIOR_SEAL_IMG = "/images/branding/medsenior-selo.png";

interface HeaderProps {
  onNavigate?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate();
    } else {
      // Scroll to Hero section (#home) instead of top of page
      const heroElement = document.getElementById('home');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center gap-2">

          {/* Left: Parceiro BrasCare (somos revendedores autorizados) */}
          <div className="flex items-center justify-start flex-shrink-0">
            <a
              href="#"
              onClick={handleLogoClick}
              className="cursor-pointer"
              title="Revendedor autorizado"
            >
              <img
                src={BRASCARE_LOGO}
                alt="Parceiro"
                className="h-6 md:h-9 w-auto object-contain select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </a>
          </div>

          {/* Center/Right: Selo MedSênior – Concessionária Autorizada BrasCare (dados do selo) */}
          <div className="flex items-center justify-end flex-shrink-0">
            <img
              src={MEDSENIOR_SEAL_IMG}
              alt={SEAL_DATA.imageAlt}
              className="h-8 md:h-10 w-auto object-contain select-none"
              title={SEAL_DATA.imageAlt}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

        </div>
      </div>
    </header>
  );
};
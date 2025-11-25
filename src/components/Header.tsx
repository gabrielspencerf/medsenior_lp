import React from 'react';

const BRASCARE_LOGO = "/images/branding/brascare-logotipo-horizontal.webp";
const MEDSENIOR_SEAL = "/images/branding/medsenior-selo.png";

interface HeaderProps {
  onNavigate?: () => void;
}

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
      </div >
    </header >
  );
};
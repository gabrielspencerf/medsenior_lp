import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

const BRASCARE_LOGO = "https://v1.planosmelhoridade.com.br/wp-content/uploads/2025/10/brascare-logotipo-horizontal.png";
const MEDSENIOR_LOGO = "https://v1.planosmelhoridade.com.br/wp-content/uploads/2025/07/Logotipo.png";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-1.5' : 'bg-white border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center gap-2">
          
          {/* Left: BrasCare Logo */}
          <div className="flex items-center justify-start flex-shrink-0">
             <img 
               src={BRASCARE_LOGO} 
               alt="BrasCare Corretora" 
               className="h-6 md:h-9 w-auto object-contain"
             />
          </div>

          {/* Center/Right: Actions & Official Seal */}
          <div className="flex items-center justify-end flex-shrink-0 max-w-[60%]">
            
            {/* Desktop Seal */}
            <div className="hidden md:flex rounded-md overflow-hidden shadow-sm border border-green-800/20 bg-white">
               <div className="bg-[#004334] px-3 py-1.5 flex items-center justify-center min-w-[90px]">
                 <img 
                   src={MEDSENIOR_LOGO} 
                   alt="MedSênior" 
                   className="h-5 w-auto object-contain brightness-0 invert" 
                   style={{ filter: 'brightness(0) invert(1)' }}
                 />
               </div>
               <div className="bg-gradient-to-br from-[#a4cd39] to-[#8cb52d] px-3 py-1 pr-8 relative flex flex-col justify-center h-full">
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
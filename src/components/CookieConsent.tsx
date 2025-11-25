import React, { useState, useEffect } from "react";

interface CookieConsentProps {
  onPrivacyClick?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onPrivacyClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 animate-slide-up">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1 text-center md:text-left">
          Utilizamos cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com nossa{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              onPrivacyClick?.();
            }}
            className="text-brand-primary underline hover:text-brand-dark bg-transparent border-none p-0 cursor-pointer font-medium"
          >
            Política de Privacidade
          </button>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-brand-primary text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-brand-dark transition-all duration-300 shadow-sm whitespace-nowrap"
        >
          Aceitar e Fechar
        </button>
      </div>
    </div>
  );
};

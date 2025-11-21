import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlansSection } from './components/PlansSection';
import { LocationsGrid } from './components/LocationsGrid';
import { BenefitsSection } from './components/BenefitsSection';
import { FAQSection } from './components/FAQSection';
import { NetworkSection } from './components/NetworkSection';
import { Footer } from './components/Footer';

// Configuração da Praça/Cidade atual
const CURRENT_CITY = "Curitiba";

function App() {
  
  useEffect(() => {
    // Inicialização do Typebot
    const initTypebot = () => {
      if ((window as any).Typebot) {
        (window as any).Typebot.initBubble({
          typebot: "medsenior-victor1",
          apiHost: "https://flow.creativelane.com.br",
          theme: {
            button: {
              backgroundColor: "#21c063",
              customIconSrc:
                "https://v1.planosmelhoridade.com.br/wp-content/uploads/2025/07/bubble-icon-copy-2.png",
              size: "large",
            },
            chatWindow: { backgroundColor: "#FAF9F6" },
          },
        });
      } else {
        // Caso o script ainda não tenha carregado, tenta novamente em breve
        setTimeout(initTypebot, 500);
      }
    };

    initTypebot();
  }, []);

  const handleOpenChat = () => {
    if ((window as any).Typebot) {
      (window as any).Typebot.open();
    } else {
      console.warn("Typebot ainda não carregado");
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-white">
      <Header />
      <main className="flex-grow">
        <Hero city={CURRENT_CITY} onCtaClick={handleOpenChat} />
        <NetworkSection city={CURRENT_CITY} />
        <PlansSection onCtaClick={handleOpenChat} />
        <BenefitsSection onCtaClick={handleOpenChat} />
        <LocationsGrid currentCity={CURRENT_CITY} />
        <FAQSection onCtaClick={handleOpenChat} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
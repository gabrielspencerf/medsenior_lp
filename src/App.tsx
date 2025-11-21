import React, { useEffect, useState, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { locations } from './data/locations';

// Lazy load non-critical sections for performance
const PlansSection = React.lazy(() => import('./components/PlansSection').then(module => ({ default: module.PlansSection })));
const LocationsGrid = React.lazy(() => import('./components/LocationsGrid').then(module => ({ default: module.LocationsGrid })));
const BenefitsSection = React.lazy(() => import('./components/BenefitsSection').then(module => ({ default: module.BenefitsSection })));
const FAQSection = React.lazy(() => import('./components/FAQSection').then(module => ({ default: module.FAQSection })));
const NetworkSection = React.lazy(() => import('./components/NetworkSection').then(module => ({ default: module.NetworkSection })));

function App() {
  const [currentCity, setCurrentCity] = useState("Curitiba");
  const locationData = locations[currentCity] || locations["Curitiba"];

  useEffect(() => {
    // Inicialização do Typebot
    const initTypebot = () => {
      if ((window as any).Typebot) {
        (window as any).Typebot.initBubble({
          typebot: "medseniorteste",
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
    if ((window as any).Typebot?.open) {
      (window as any).Typebot.open();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero locationData={locationData} onCtaClick={handleOpenChat} />

        <Suspense fallback={<div className="py-20 text-center">Carregando...</div>}>
          <NetworkSection locationData={locationData} />
          <PlansSection locationData={locationData} onCtaClick={handleOpenChat} />
          <BenefitsSection onCtaClick={handleOpenChat} />
          <LocationsGrid
            currentCity={currentCity}
            onCitySelect={setCurrentCity}
            availableCities={Object.keys(locations)}
          />
          <FAQSection onCtaClick={handleOpenChat} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
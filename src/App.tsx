import React, { useEffect, useState, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { GoogleTagManager } from './components/GoogleTagManager';
import { locations } from './data/locations';

// Lazy load non-critical sections for performance
const PlansSection = React.lazy(() => import('./components/PlansSection').then(module => ({ default: module.PlansSection })));
const LocationsGrid = React.lazy(() => import('./components/LocationsGrid').then(module => ({ default: module.LocationsGrid })));
const BenefitsSection = React.lazy(() => import('./components/BenefitsSection').then(module => ({ default: module.BenefitsSection })));
const NetworkSection = React.lazy(() => import('./components/NetworkSection').then(module => ({ default: module.NetworkSection })));

// Read environment variables
const ENV_LOCATION = import.meta.env.VITE_LOCATION || '';
const ENV_GTM_ID = import.meta.env.VITE_GTM_ID || '';
const ENV_TYPEBOT_ID = import.meta.env.VITE_TYPEBOT_ID || 'medseniorteste';

function App() {
  // If VITE_LOCATION is set, lock to that location, otherwise default to Curitiba
  const [currentCity, setCurrentCity] = useState(ENV_LOCATION || "Curitiba");
  const locationData = locations[currentCity] || locations["Curitiba"];

  // Determine if location switching is allowed
  const isLocationLocked = Boolean(ENV_LOCATION);

  useEffect(() => {
    // Inicialização do Typebot com ID do ambiente
    const initTypebot = () => {
      if ((window as any).Typebot) {
        (window as any).Typebot.initBubble({
          typebot: ENV_TYPEBOT_ID,
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

  const handleCitySelect = (city: string) => {
    // Only allow city selection if location is not locked
    if (!isLocationLocked) {
      setCurrentCity(city);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Google Tag Manager */}
      {ENV_GTM_ID && <GoogleTagManager gtmId={ENV_GTM_ID} />}

      <Header />
      <main>
        <Hero locationData={locationData} onCtaClick={handleOpenChat} />

        <Suspense fallback={<div className="py-20 text-center">Carregando...</div>}>
          <NetworkSection locationData={locationData} />
          <PlansSection locationData={locationData} onCtaClick={handleOpenChat} />
          <BenefitsSection onCtaClick={handleOpenChat} />
          <LocationsGrid
            currentCity={currentCity}
            onCitySelect={handleCitySelect}
            availableCities={Object.keys(locations)}
            isLocked={isLocationLocked}
          />

        </Suspense>
      </main>
      <Footer ansCode={locationData.ansCode} />
    </div>
  );
}

export default App;
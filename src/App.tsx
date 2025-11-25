import React, { useEffect, useState, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { GoogleTagManager } from './components/GoogleTagManager';
import { locations } from './data/locations';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Modal } from './components/Modal';
import { CitySelectionModal } from './components/CitySelectionModal';
import { getSelectedCity, setSelectedCity } from './utils/localStorage';


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
  const [currentCity, setCurrentCity] = useState(() => {
    const saved = getSelectedCity();
    return ENV_LOCATION || saved || "Curitiba";
  });
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  const locationData = locations[currentCity] || locations["Curitiba"];

  // Determine if location switching is allowed
  const isLocationLocked = Boolean(ENV_LOCATION);

  // Check if we should show city selection modal
  useEffect(() => {
    // Show modal on every page load when location is not locked
    setShowCityModal(!isLocationLocked);
  }, [isLocationLocked]);

  // Scroll to Hero section (#home) on initial load
  useEffect(() => {
    const scrollToHero = () => {
      const heroElement = document.getElementById('home');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'instant' });
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(scrollToHero, 50);
  }, []);

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
                "https://planosmelhoridade.com.br/images/bubble-icon-whatsapp.webp",
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCityModalSelect = (city: string) => {
    setSelectedCity(city);
    setCurrentCity(city);
    setShowCityModal(false);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white relative">
        <SEO locationData={locationData} />
        {/* Google Tag Manager */}
        {ENV_GTM_ID && <GoogleTagManager gtmId={ENV_GTM_ID} />}

        {/* City Selection Modal */}
        <CitySelectionModal
          isOpen={showCityModal}
          onCitySelect={handleCityModalSelect}
          availableCities={Object.keys(locations)}
        />

        <Header onNavigate={() => {
          const heroElement = document.getElementById('home');
          if (heroElement) {
            heroElement.scrollIntoView({ behavior: 'smooth' });
          }
        }} />

        <main>
          <Hero locationData={locationData} onCtaClick={handleOpenChat} />

          <Suspense fallback={<div className="py-20 text-center">Carregando...</div>}>
            <NetworkSection locationData={locationData} />
            <PlansSection locationData={locationData} onCtaClick={handleOpenChat} />
            <BenefitsSection locationData={locationData} onCtaClick={handleOpenChat} />
            <LocationsGrid
              currentCity={currentCity}
              onCitySelect={handleCitySelect}
              availableCities={Object.keys(locations)}
              isLocked={isLocationLocked}
            />
          </Suspense>
        </main>

        <Footer
          ansCode={locationData.ansCode}
          onPrivacyClick={() => setIsPrivacyModalOpen(true)}
          onTermsClick={() => setIsTermsModalOpen(true)}
        />

        <CookieConsent onPrivacyClick={() => setIsPrivacyModalOpen(true)} />

        {/* Privacy Policy Modal */}
        <Modal
          isOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
          title="Política de Privacidade"
        >
          <PrivacyPolicy />
        </Modal>

        {/* Terms of Service Modal */}
        <Modal
          isOpen={isTermsModalOpen}
          onClose={() => setIsTermsModalOpen(false)}
          title="Termos de Uso"
        >
          <TermsOfService />
        </Modal>
      </div>
    </HelmetProvider>
  );
}

export default App;

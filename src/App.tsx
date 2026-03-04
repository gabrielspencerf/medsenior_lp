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
import { TransparencyAbout } from './components/TransparencyAbout';
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
/** ID do Typebot: medseniorbrasil quando nenhuma praça está setada; pode ser sobrescrito por VITE_TYPEBOT_ID ou por typebotId na praça */
const DEFAULT_TYPEBOT_ID = 'medseniorbrasil';
const ENV_TYPEBOT_ID = import.meta.env.VITE_TYPEBOT_ID || DEFAULT_TYPEBOT_ID;

function App() {
  const [currentCity, setCurrentCity] = useState(() => {
    const env = ENV_LOCATION;
    if (env && locations[env]) return env;
    const saved = getSelectedCity();
    if (saved && locations[saved]) return saved;
    return "Curitiba";
  });
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isTransparencyModalOpen, setIsTransparencyModalOpen] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  const locationData = locations[currentCity] || locations["Curitiba"];

  // Determine if location switching is allowed
  const isLocationLocked = Boolean(ENV_LOCATION);

  // Typebot: ID da praça (typebotId no location) ou ENV/default medseniorbrasil; utm_brasil = praça clicada
  const typebotId = locationData?.typebotId || ENV_TYPEBOT_ID;
  const utmBrasil = locationData?.name ?? currentCity;

  // Check if we should show city selection modal
  useEffect(() => {
    // Show modal on every page load when location is not locked
    setShowCityModal(!isLocationLocked);
  }, [isLocationLocked]);

  useEffect(() => {
    const runInit = () => {
      const Typebot = (window as any).Typebot;
      if (!Typebot) return false;
      try {
        Typebot.initBubble({
          typebot: typebotId,
          apiHost: "https://flow.creativelane.com.br",
          prefilledVariables: { utm_brasil: utmBrasil },
          theme: {
            button: {
              backgroundColor: "#21c063",
              iconColor: "#FFFFFF",
              customIconSrc: `${window.location.origin}/images/bubble-icon-whatsapp.svg`,
              size: "large",
            },
            chatWindow: { backgroundColor: "#FAF9F6" },
          },
        });
        return true;
      } catch (e) {
        console.warn("[Typebot] init falhou:", e);
        return false;
      }
    };

    if (runInit()) return;

    const onReady = () => {
      runInit();
    };
    window.addEventListener("typebot-ready", onReady, { once: true });

    const t1 = setTimeout(() => runInit(), 600);
    const t2 = setTimeout(() => runInit(), 2000);
    const t3 = setTimeout(() => runInit(), 5000);

    return () => {
      window.removeEventListener("typebot-ready", onReady);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [typebotId, utmBrasil]);

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

          <Suspense
            fallback={
              <div
                className="py-20 text-center text-gray-500 min-h-[40vh] flex items-center justify-center"
                role="status"
                aria-live="polite"
              >
                Carregando...
              </div>
            }
          >
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
          onTransparencyClick={() => setIsTransparencyModalOpen(true)}
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

        {/* Quem somos / Transparência (conformidade) */}
        <Modal
          isOpen={isTransparencyModalOpen}
          onClose={() => setIsTransparencyModalOpen(false)}
          title="Quem somos e Transparência"
        >
          <TransparencyAbout />
        </Modal>
      </div>
    </HelmetProvider>
  );
}

export default App;

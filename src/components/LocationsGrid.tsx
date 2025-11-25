import React from "react";
import { MapPin, Lock } from "lucide-react";

interface LocationsProps {
  currentCity: string;
  onCitySelect: (city: string) => void;
  availableCities: string[];
  isLocked?: boolean;
}

export const LocationsGrid: React.FC<LocationsProps> = ({
  currentCity,
  onCitySelect,
  availableCities,
  isLocked = false,
}) => {
  return (
    <section className="py-20 bg-gray-50 text-brand-dark border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-dark">
            Rede Própria e Credenciada
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estrutura completa nas principais capitais do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* List of Cities */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-xl font-semibold text-gray-700">
                Nossas Praças
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {availableCities.map((city, idx) => {
                const isCurrent = city === currentCity;

                // Dynamic class construction - same visual appearance whether locked or not
                let btnClass =
                  "relative flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 border text-left group ";

                // Cursor changes based on locked state
                btnClass += isLocked ? "cursor-not-allowed " : "cursor-pointer ";

                // Visual styling is the same regardless of locked state
                if (isCurrent) {
                  btnClass +=
                    "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 transform scale-105 z-10 ";
                } else {
                  btnClass +=
                    "bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary hover:shadow-md hover:-translate-y-0.5 ";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => !isLocked && onCitySelect(city)}
                    disabled={isLocked}
                    className={btnClass}
                    aria-label={`Selecionar cidade ${city}`}
                    aria-current={isCurrent ? "location" : undefined}
                  >
                    <MapPin
                      className={`w-5 h-5 flex-shrink-0 transition-colors ${isCurrent ? "text-brand-accent" : "text-gray-400 group-hover:text-brand-primary"}`}
                    />

                    <span className="font-medium truncate">{city}</span>

                    {isCurrent && (
                      <span className="absolute right-3 w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-lg shadow-brand-accent/50"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image Visualization */}
          <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-xl min-h-[500px]">
            <img
              src="/images/locations/hospital-medsenior-vitoria.webp"
              alt="Hospital MedSênior Vitória"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Cuidado que vai além</h3>
              <p className="text-white/90">
                Referência em medicina preventiva e envelhecimento saudável no
                Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

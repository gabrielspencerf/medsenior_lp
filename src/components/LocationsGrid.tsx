import React from 'react';
import { MapPin } from 'lucide-react';
import { BrazilMap } from './BrazilMap';

interface LocationsProps {
  currentCity: string;
  onCitySelect: (city: string) => void;
  availableCities: string[];
  isLocked?: boolean;
}

export const LocationsGrid: React.FC<LocationsProps> = ({ currentCity, onCitySelect, availableCities, isLocked = false }) => {
  return (
    <section className="py-20 bg-gray-50 text-brand-dark border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-dark">Rede Própria e Credenciada</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estrutura completa nas principais capitais do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* List of Cities */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Nossas Praças
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {availableCities.map((city, idx) => {
                const isCurrent = city === currentCity;
                return (
                  <button
                    key={idx}
                    onClick={() => onCitySelect(city)}
                    disabled={isLocked}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 border text-left cursor-pointer ${isCurrent
                      ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 transform scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary hover:shadow-md'
                      }`}
                  >
                    <MapPin className={`w-5 h-5 ${isCurrent ? 'text-brand-accent' : 'text-gray-400'}`} />
                    <span className="font-medium">{city}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="hidden lg:block bg-white p-8 rounded-3xl shadow-inner border border-gray-100">
            <BrazilMap currentCity={currentCity} onCitySelect={onCitySelect} isLocked={isLocked} />
            <p className="text-center text-sm text-gray-400 mt-4">
              *Mapa ilustrativo das áreas de atuação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
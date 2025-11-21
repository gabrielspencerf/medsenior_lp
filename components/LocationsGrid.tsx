import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationsProps {
  currentCity: string;
}

const CITIES = [
  "Curitiba", "São Paulo", "Belo Horizonte", "Vitória", 
  "Rio de Janeiro", "Brasília", "Porto Alegre", "Recife", "Salvador"
];

export const LocationsGrid: React.FC<LocationsProps> = ({ currentCity }) => {
  return (
    <section className="py-20 bg-gray-50 text-brand-dark border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-brand-dark">Rede Própria e Credenciada</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Estrutura completa nas principais capitais do Brasil.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city, idx) => {
            const isCurrent = city.includes(currentCity);
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 cursor-default border ${
                  isCurrent 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/30 scale-110 font-bold' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isCurrent ? 'text-brand-accent' : ''}`} />
                <span>{city}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
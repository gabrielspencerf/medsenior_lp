import React from 'react';
import { Button } from './ui/Button';
import { MapPin } from 'lucide-react';
import { LocationData } from '../types';

interface PlansProps {
  locationData: LocationData;
  onCtaClick: () => void;
}

export const PlansSection: React.FC<PlansProps> = ({ locationData, onCtaClick }) => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-brand-accent font-bold tracking-wide uppercase text-sm mb-2">Nossos Planos</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Cobertura completa para 44+</h3>
          <p className="text-gray-300 text-lg">Escolha a modalidade ideal para o seu perfil. Todos com a qualidade MedSênior.</p>
        </div>

        {locationData.plans.length > 0 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch ${locationData.plans.length === 3
            ? 'lg:grid-cols-3 lg:max-w-5xl mx-auto'
            : 'lg:grid-cols-4'
            }`}>
            {locationData.plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-[2rem] p-6 transition-all duration-300 ${plan.highlight
                  ? 'bg-white text-gray-900 shadow-2xl lg:scale-105 z-10'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-dark text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm tracking-wider uppercase">
                    Exclusivo
                  </div>
                )}

                <div className="mb-4 text-center">
                  <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold mb-3 uppercase tracking-wide ${plan.highlight ? 'bg-brand-light text-brand-dark' : 'bg-white/10 text-brand-accent'
                    }`}>
                    {plan.badge}
                  </span>
                  <h4 className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>{plan.name}</h4>
                  <p className={`text-[10px] font-medium opacity-80 uppercase tracking-wider leading-tight max-w-[80%] mx-auto`}>{plan.priceDesc}</p>
                </div>

                <div className={`w-full h-px mb-4 ${plan.highlight ? 'bg-gray-100' : 'bg-white/10'}`}></div>

                <div className="mb-auto">
                  <p className={`text-sm leading-relaxed text-center mb-4 ${plan.highlight ? 'text-gray-600' : 'text-gray-300'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className={`mt-4 pt-4 border-t ${plan.highlight ? 'border-gray-100' : 'border-white/10'}`}>
                  <div className="flex items-start gap-2 mb-6 justify-center text-center">
                    <MapPin className={`w-3 h-3 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-brand-primary' : 'text-brand-accent'}`} />
                    <div className="flex flex-col">
                      <span className={`text-[10px] uppercase font-bold ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>Área de Atuação</span>
                      <span className={`text-xs font-medium leading-tight ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>{plan.area}</span>
                    </div>
                  </div>

                  <Button
                    onClick={onCtaClick}
                    variant={plan.highlight ? 'secondary' : 'primary'}
                    className="w-full justify-center text-sm py-2.5"
                  >
                    Cotar {plan.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/60 py-12 bg-white/5 rounded-2xl border border-white/10">
            <p>Planos para {locationData.name} em breve.</p>
            <Button onClick={onCtaClick} variant="primary" className="mt-4">Fale com um consultor</Button>
          </div>
        )}
      </div>
    </section>
  );
};
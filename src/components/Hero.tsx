import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ShieldCheck, Star, Info, Clock } from 'lucide-react';
import { LocationData } from '../types';

interface HeroProps {
  locationData: LocationData;
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ locationData, onCtaClick }) => {
  return (
    <section className="relative bg-white min-h-[85vh] flex items-center pt-4 pb-12 lg:pt-12 overflow-hidden">
      {/* Organic shapes background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f2f9f1] rounded-bl-[10rem] -z-0 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

        {/* Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand-primary/20 self-center lg:self-start mx-auto lg:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-brand-dark text-xs font-bold tracking-wide uppercase">Central de Vendas {locationData.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tight">
            {locationData.hero.title} <br />
            <span className="text-brand-primary">{locationData.hero.subtitle}</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed" dangerouslySetInnerHTML={{
            __html: locationData.hero.description || `Aproveite a tabela exclusiva para <strong>novas contratações</strong> em ${locationData.name}. Conte com Hospital Próprio, Pronto-Atendimento 24h e carência zero*.`
          }} />

          {/* Explicit Sales Disclaimer Box */}
          <div className="bg-red-50 border-l-4 border-red-400 p-3 text-left text-sm text-gray-700 rounded-r-lg max-w-lg mx-auto lg:mx-0 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-red-800 uppercase text-xs mb-1">Aviso Importante</p>
                <p className="leading-snug text-xs sm:text-sm">Este site é um canal para <strong>quem deseja contratar o plano</strong>. Se você já é cliente, ligue para o atendimento no verso da sua carteirinha.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button onClick={onCtaClick} variant="primary" size="lg" className="w-full sm:w-auto">
              Quero Contratar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button onClick={onCtaClick} variant="outline" className="w-full sm:w-auto">
              Ver Rede Credenciada
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 text-sm text-gray-500 font-medium border-t border-gray-100 mt-6 w-full lg:w-max">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-primary" />
              <span>Contratação Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-brand-primary" />
              <span>Especialista 44+</span>
            </div>
          </div>
        </div>

        {/* Image Composition - Building Facade */}
        <div className="relative order-1 lg:order-2 flex flex-col items-center justify-center mt-2 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-2xl">
            {/* Main Image Container - Aspect Video for wider images */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 z-10">
              <img
                src={locationData.hero.image}
                alt={`Sede MedSênior ${locationData.name}`}
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
                width="1280"
                height="720"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

              {/* Authorized Seal Badge - Within image container */}
              {locationData.hero.badge && (
                <div className="absolute top-4 right-0 bg-brand-accent text-brand-dark px-3 py-1.5 rounded-l-lg shadow-lg font-bold text-[10px] uppercase tracking-widest z-20">
                  {locationData.hero.badge}
                </div>
              )}
            </div>

            {/* Info Box - PA 24h - Static below image now */}
            {locationData.hero.differential && (
              <div className="mt-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-full flex items-center gap-4 relative z-10">
                <div className="bg-brand-light p-3 rounded-full text-brand-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-0.5">{locationData.hero.differential.title}</p>
                  <p className="text-brand-dark font-bold text-base leading-tight">{locationData.hero.differential.text}</p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
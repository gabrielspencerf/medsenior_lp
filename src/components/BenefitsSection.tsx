import React from 'react';
import { Button } from './ui/Button';
import { Heart, Clock, Shield, Activity } from 'lucide-react';
import { LocationData } from '../types';

interface BenefitsProps {
  onCtaClick: () => void;
  locationData?: LocationData;
}

export const BenefitsSection: React.FC<BenefitsProps> = ({ onCtaClick, locationData }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Content */}
          <div className="relative order-2 lg:order-1 group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] border-8 border-white shadow-brand-dark/10">
              <img
                src="/images/benefits/medsenior-plano-saude-mais-49.webp"
                alt="Oficinas de saúde MedSênior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="text-brand-accent w-6 h-6" />
                  <span className="text-brand-accent font-bold uppercase text-sm tracking-wider">Envelhecimento Ativo</span>
                </div>
                <p className="text-3xl font-bold mb-2">"Não queremos você doente."</p>
                <p className="text-gray-200 text-sm max-w-sm">Nossa filosofia é promover saúde. Oferecemos oficinas de cabeça e corpo gratuitamente.</p>
              </div>
            </div>
          </div>

          {/* Right: Grid of Benefits */}
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2">Diferenciais Exclusivos</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-6">
              Muito mais que um <br />plano de saúde.
            </h3>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Criamos um ecossistema de cuidado pensado para quem tem mais de 44 anos. Esqueça as surpresas na fatura e foque no que importa: viver bem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: Clock,
                  title: "Carência Zero*",
                  desc: locationData?.carenciaText || "Migre de outro plano sem cumprir novos prazos (exceto CPT).",
                  color: "text-brand-primary bg-brand-light"
                },
                {
                  icon: Shield,
                  title: "Sem Coparticipação",
                  desc: "Mensalidade fixa. Use consultas e exames sem pagar a mais.",
                  color: "text-brand-primary bg-brand-light"
                },
                {
                  icon: Heart,
                  title: "Oficinas de Saúde",
                  desc: "Arte, nutrição, dança e memória. Tudo incluso no plano.",
                  color: "text-brand-primary bg-brand-light"
                },
                {
                  icon: Activity,
                  title: "Medicina Preventiva",
                  desc: "Acompanhamento contínuo para evitar que você adoeça.",
                  color: "text-brand-primary bg-brand-light"
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-lg hover:border-brand-light group/card">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover/card:bg-brand-primary group-hover/card:text-white transition-colors`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button onClick={onCtaClick} variant="primary" size="lg" className="w-full sm:w-auto">
              Conhecer todos os benefícios
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
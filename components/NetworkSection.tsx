import React from 'react';
import { Building, Stethoscope, Microscope, MapPin } from 'lucide-react';

interface NetworkProps {
    city: string;
}

export const NetworkSection: React.FC<NetworkProps> = ({ city }) => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2">Estrutura de Ponta</h2>
          <h3 className="text-3xl font-bold text-brand-dark mb-4">Rede Credenciada em {city}</h3>
          <p className="text-gray-600 text-lg">
            Conte com hospitais de referência e uma unidade própria completa com Pronto-Atendimento 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hospitais */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-brand-light p-3 rounded-xl text-brand-primary">
                        <Building className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl text-brand-dark">Hospitais Premium</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Hospital Marcelino Champagnat</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Hospital Santa Cruz</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Hospital Pilar</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Hospital IPO (Ref. em Otorrino)</span>
                    </li>
                     <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Hospital de Olhos do Paraná</span>
                    </li>
                </ul>
            </div>

            {/* Laboratórios */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-brand-light p-3 rounded-xl text-brand-primary">
                        <Microscope className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl text-brand-dark">Laboratórios</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Frischmann Aisengart</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>A+ Medicina Diagnóstica</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>LANAC Análises Clínicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                        <span>Laboratório Unimed</span>
                    </li>
                </ul>
            </div>

            {/* Diferenciais */}
            <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-accent opacity-20 rounded-full blur-xl"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="bg-white/10 p-3 rounded-xl text-brand-accent">
                        <Stethoscope className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl">Unidade Própria</h4>
                </div>
                <div className="space-y-4 relative z-10 text-gray-200">
                    <p className="text-sm border-b border-white/10 pb-3">
                        Estrutura exclusiva para clientes MedSênior com atendimento humanizado.
                    </p>
                    
                    <div className="flex items-start gap-2">
                         <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                         <div>
                             <p className="font-bold text-white">Av. Iguaçu, 2060</p>
                             <p className="text-xs text-gray-300">Água Verde - Curitiba/PR</p>
                         </div>
                    </div>

                    <ul className="space-y-2 text-sm font-medium pt-2">
                        <li className="flex items-center gap-2">
                            <span className="text-brand-accent">✓</span> Pronto-Atendimento 24h
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-brand-accent">✓</span> Centro Cirúrgico
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-brand-accent">✓</span> Medicina Preventiva
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
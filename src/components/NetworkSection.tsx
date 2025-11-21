import React from 'react';
import { Building, Stethoscope, Microscope, MapPin } from 'lucide-react';
import { LocationData } from '../types';

interface NetworkProps {
    locationData: LocationData;
}

export const NetworkSection: React.FC<NetworkProps> = ({ locationData }) => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2">Estrutura de Ponta</h2>
                    <h3 className="text-3xl font-bold text-brand-dark mb-4">Rede Credenciada em {locationData.name}</h3>
                    <p className="text-gray-600 text-lg">
                        Conte com hospitais de referência e uma unidade própria completa com Pronto-Atendimento 24h.
                    </p>
                </div>

                {locationData.network.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locationData.network.map((category, idx) => {
                            // Render "Unidade Própria" (own) differently
                            if (category.icon === 'own') {
                                return (
                                    <div key={idx} className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-accent opacity-20 rounded-full blur-xl"></div>
                                        <div className="flex items-center gap-3 mb-6 relative z-10">
                                            <div className="bg-white/10 p-3 rounded-xl text-brand-accent">
                                                <Stethoscope className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">{category.title}</h4>
                                        </div>
                                        <div className="space-y-4 relative z-10 text-gray-200">
                                            <p className="text-sm border-b border-white/10 pb-3">
                                                {category.description}
                                            </p>

                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                                                <div>
                                                    <p className="font-bold text-white">{category.address}</p>
                                                    <p className="text-xs text-gray-300">{category.district}</p>
                                                </div>
                                            </div>

                                            {category.features && (
                                                <ul className="space-y-2 text-sm font-medium pt-2">
                                                    {category.features.map((feature, fIdx) => (
                                                        <li key={fIdx} className="flex items-center gap-2">
                                                            <span className="text-brand-accent">✓</span> {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                );
                            }

                            // Render standard categories (Hospitals, Labs)
                            const Icon = category.icon === 'hospital' ? Building : Microscope;

                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-brand-light p-3 rounded-xl text-brand-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-xl text-brand-dark">{category.title}</h4>
                                    </div>
                                    <ul className="space-y-3 text-gray-600">
                                        {category.items?.map((item, iIdx) => (
                                            <li key={iIdx} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></span>
                                                <span>{item.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-12 bg-white rounded-2xl border border-gray-200">
                        <p>Rede credenciada para {locationData.name} em breve.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
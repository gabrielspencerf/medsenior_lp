import React from 'react';
import { MapPin } from 'lucide-react';

interface CitySelectionModalProps {
    isOpen: boolean;
    onCitySelect: (city: string) => void;
    availableCities: string[];
}

export const CitySelectionModal: React.FC<CitySelectionModalProps> = ({
    isOpen,
    onCitySelect,
    availableCities,
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="city-modal-title"
        >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">

                {/* Header com Logo */}
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-2xl">
                    <div className="flex flex-col items-center gap-3">
                        <img
                            src="/images/medsenior-logotipo.webp"
                            alt="MedSênior"
                            className="h-12 object-contain select-none"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="text-center">
                            <h2 id="city-modal-title" className="text-2xl font-bold text-brand-dark">Planos MedSênior na sua cidade</h2>
                            <p className="text-gray-700 text-base mt-1">Selecione sua cidade para ver planos disponíveis</p>
                        </div>
                    </div>
                </div>

                {/* Grid de Cidades */}
                <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {availableCities.map((city) => (
                            <button
                                key={city}
                                type="button"
                                onClick={() => onCitySelect(city)}
                                className="flex items-center gap-3 p-4 min-h-[52px] rounded-xl border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-light transition-all duration-200 group text-left w-full"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" aria-hidden />
                                </div>
                                <div className="text-left flex-1">
                                    <p className="font-semibold text-base text-brand-dark group-hover:text-brand-primary transition-colors">
                                        {city}
                                    </p>
                                    <p className="text-sm text-gray-600">Ver planos disponíveis</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-100">
                    <p className="text-sm text-center text-gray-600">
                        Você poderá alterar sua cidade a qualquer momento no rodapé da página.
                    </p>
                </div>
            </div>
        </div>
    );
};

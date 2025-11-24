import React from 'react';

interface BrazilMapProps {
    currentCity: string;
    onCitySelect: (city: string) => void;
    isLocked?: boolean;
}

// Geographical bounds of Brazil (approximate)
const MIN_LAT = -33.75; // South
const MAX_LAT = 5.27;   // North
const MIN_LON = -73.99; // West
const MAX_LON = -34.79; // East

// Padding to account for the SVG map image whitespace/padding
// Adjust these values to "centralize" or align the points
const PADDING_TOP = 0.02;
const PADDING_BOTTOM = 0.08; // Increased to lift southern points (Porto Alegre)
const PADDING_LEFT = 0.04;
const PADDING_RIGHT = 0.20; // Increased to pull eastern points (Recife) left

const getPosition = (lat: number, lon: number) => {
    const latRange = MAX_LAT - MIN_LAT;
    const lonRange = MAX_LON - MIN_LON;

    // Calculate normalized position (0 to 1) relative to geo bounds
    const latNorm = (MAX_LAT - lat) / latRange;
    const lonNorm = (lon - MIN_LON) / lonRange;

    // Map to padded container space
    const top = (PADDING_TOP + latNorm * (1 - PADDING_TOP - PADDING_BOTTOM)) * 100;
    const left = (PADDING_LEFT + lonNorm * (1 - PADDING_LEFT - PADDING_RIGHT)) * 100;

    return { top: `${top}%`, left: `${left}%` };
};

const citiesData = [
    { name: "Brasília", lat: -15.7801, lon: -47.9292 },
    { name: "Belo Horizonte", lat: -19.9167, lon: -43.9345 },
    { name: "Vitória", lat: -20.3155, lon: -40.3128 },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
    { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
    { name: "Campinas", lat: -22.9099, lon: -47.0626 },
    { name: "Curitiba", lat: -25.4284, lon: -49.2733 },
    { name: "Porto Alegre", lat: -30.0346, lon: -51.2177 },
    { name: "Recife", lat: -8.0476, lon: -34.8770 },
];

export const BrazilMap: React.FC<BrazilMapProps> = ({ currentCity, onCitySelect, isLocked = false }) => {
    return (
        <div className="relative w-full max-w-md mx-auto aspect-[1.13] bg-transparent rounded-3xl p-4">
            <img
                src="/brazil_map.svg"
                alt="Mapa do Brasil"
                className="w-full h-full object-contain drop-shadow-xl opacity-90"
            />

            {citiesData.map((city) => {
                const pos = getPosition(city.lat, city.lon);
                return (
                    <div
                        key={city.name}
                        onClick={() => !isLocked && onCitySelect(city.name)}
                        className="absolute group cursor-pointer"
                        style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                    >
                        <div className={`relative flex items-center justify-center transition-all duration-300 ${city.name === currentCity ? 'scale-125' : 'hover:scale-110'}`}>
                            {/* Pulse Effect */}
                            {city.name === currentCity && (
                                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-20 animate-ping"></span>
                            )}

                            {/* Dot */}
                            <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md transition-colors duration-300 ${city.name === currentCity ? 'bg-brand-primary' : 'bg-gray-400 group-hover:bg-brand-primary'}`}></div>

                            {/* Label */}
                            <span className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded shadow-sm text-[10px] font-bold whitespace-nowrap transition-all duration-300 ${city.name === currentCity ? 'text-brand-dark opacity-100' : 'text-gray-500 opacity-0 group-hover:opacity-100'}`}>
                                {city.name}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

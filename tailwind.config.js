/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#004334', // MedSênior Dark Green
                    primary: '#008d5e', // MedSênior Mid Green
                    accent: '#a4cd39', // MedSênior Lime/Leaf Color
                    light: '#f3fce2', // Very light lime for backgrounds
                    gray: '#4a5568'
                }
            },
            animation: {
                'shine': 'shine 4s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}

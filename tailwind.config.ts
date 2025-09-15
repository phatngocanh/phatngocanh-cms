import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                'inter': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
            },
            container: {
                center: true, // Center the container
                screens: {
                    lg: "1240px", // Set the max-width for large screens
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'slide-in-left': 'slideInLeft 0.8s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'scale-in': 'scaleIn 0.8s ease-out',
                'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
            },
            animationDelay: {
                '100': '0.1s',
                '200': '0.2s',
                '300': '0.3s',
                '400': '0.4s',
                '500': '0.5s',
                '600': '0.6s',
                '700': '0.7s',
            },
        },
    },
    plugins: [
        function({ addUtilities }: { addUtilities: any }) {
            const newUtilities = {
                '.animate-delay-100': {
                    'animation-delay': '0.1s',
                },
                '.animate-delay-200': {
                    'animation-delay': '0.2s',
                },
                '.animate-delay-300': {
                    'animation-delay': '0.3s',
                },
                '.animate-delay-400': {
                    'animation-delay': '0.4s',
                },
                '.animate-delay-500': {
                    'animation-delay': '0.5s',
                },
                '.animate-delay-600': {
                    'animation-delay': '0.6s',
                },
                '.animate-delay-700': {
                    'animation-delay': '0.7s',
                },
            }
            addUtilities(newUtilities)
        }
    ],
};

export default config;

import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            },
            fontFamily: {
                lobster: 'var(--font-lobster)',
                meow: 'var(--font-meow)',
                splash: 'var(--font-splash)',
                badScript: 'var(--font-bad-script)'
            },
            animation: {
                'slide-down': 'slide-down 1.8s ease-out 0.5s forwards',
                'slide-right-to-left': 'slide-right-to-left 1.8s ease-out 0.5s forwards',
                'blur-to-clear': 'blur-to-clear 1.5s ease-out forwards'
            },
            keyframes: {
                ping: {
                    '75%, 100%': {
                        transform: 'scale(1.3)',
                        opacity: '0'
                    }
                },
                'slide-down': {
                    '0%': {
                        transform: 'translateY(-100%) translateX(0) rotate(-6deg)',
                        opacity: '0'
                    },
                    '25%': {
                        transform: 'translateY(0) translateX(-5px) rotate(-6deg)',
                        opacity: '1'
                    },
                    '50%': {
                        transform: 'translateY(0) translateX(5px) rotate(-6deg)'
                    },
                    '75%': {
                        transform: 'translateY(0) translateX(0) rotate(-6deg)'
                    },
                    '100%': {
                        transform: 'translateY(0) translateX(-5px) rotate(-6deg)'
                    }
                },
                'slide-right-to-left': {
                    '0%': {
                        transform: 'translateX(100%) rotate(180deg)',
                        opacity: '0'
                    },
                    '25%': {
                        transform: 'translateX(0) rotate(180deg)',
                        opacity: '1'
                    },
                    '50%': {
                        transform: 'translateX(0) rotate(180deg)'
                    },
                    '75%': {
                        transform: 'translateX(0) rotate(180deg)'
                    },
                    '100%': {
                        transform: 'translateX(0) rotate(180deg)'
                    }
                },
                'blur-to-clear': {
                    '0%': {
                        backdropFilter: 'blur(40px)',
                        opacity: '1'
                    },
                    '100%': {
                        backdropFilter: 'blur(0)',
                        opacity: '0',
                        visibility: 'hidden',
                        pointerEvents: 'none'
                    },
                }
            }
        }
    },
    plugins: []
} satisfies Config;

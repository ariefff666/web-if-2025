import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#9ca3af',
                'secondary': '#eab308',
            },
            keyframes: {
                fadeIn: {
                  '0%': { opacity: 0, transform: 'translateY(-4px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.15s ease-out',
            },
            fadeInUp: {
                '0%': { opacity: 0, transform: 'translateY(-6px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            animation: {
                fadeInUp: 'fadeInUp 0.2s ease-out',
            },
        },
    },

    plugins: [
        forms,
        require('@tailwindcss/line-clamp')
    ],
};

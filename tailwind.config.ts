import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        ub: ['"Urbanist"', 'sans-serif'],
       },
      fontSize: {
        'ub-xs': '0.875rem',
        'ub-sm': '1rem',
        'ub-base': '1.25rem',
        'ub-md': '1.5rem',
        'ub-lg': '1.875rem',
        'ub-xl': '2.5rem',
        'ub-2xl': '3.75rem',
        'ub-3xl': '5rem',
      },
      colors: {
        purple: {
          "60": '#FF7A00',
          "65": '#1A64FF',
          "70": '#FF9533',
          "75": '#FFCA99',
          "90": '#FFE4CC',
          "95": '#FFF1E5',
          "97": '#FFF7F0',
          "99": '#FFFCFA',
        },
        grey: {
          "8": '#141414',
          "10": '#1A1A1A',
          "15": '#262626',
          "20": '#333333',
          "30": '#4D4D4D',
          "40": '#666666',
          "50": '#808080',
          "60": '#999999',
        },
        white: {
          "90": '#E4E4E7',
          "95": '#F1F1F3',
          "97": '#F7F7F8',
          "99": '#FCFCFD',
        }
      },
      screens: {
        'xs': '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
};

export default config;


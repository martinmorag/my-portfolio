import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D0754E',
          back: '#ECC083',
          hover: '#F7E4CA',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(160deg, #ecc083 0%, #ffffff 100%)',
      },
      backgroundColor: {
        'custom-bg': '#ecc083',
      },
      dropShadow : {
        "gray" : "0 3px 3px rgba(141, 144, 155, 0.5)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;

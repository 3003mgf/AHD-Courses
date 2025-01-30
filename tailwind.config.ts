import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "SatoshiLight": ["Satoshi Light"],
        "SatoshiRegular": ["Satoshi Regular"],
        "SatoshiMedium": ["Satoshi Medium"],
        "SatoshiBold": ["Satoshi Bold"],
        "SatoshiBlack": ["Satoshi Black"],
        "BespokeLight": ["Bespoke Light"],
        "BespokeRegular": ["Bespoke Regular"],
        "BespokeMedium": ["Bespoke Medium"],
        "BespokeBold": ["Bespoke Bold"],
        "BespokeExtrabold": ["Bespoke Extrabold"],
        "PPRegular": ["PP Regular"],
        "PPMedium": ["PP Medium"],
        "HovesDemi": ["Hoves Demi"],
        "Basebloom": ["Basebloom"]
      }
    },
  },
  plugins: [],
} satisfies Config;

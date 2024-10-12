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
        primary: "#D87D4A",
        secondary: "#FBAF85",
        dark: "#191919",
        lightGray: "#F1F1F1",
      },
      backgroundImage: {
        bannerDesktop: "url('/assets/home/desktop/image-hero.jpg')",
        bannerTablet: "url('/assets/home/tablet/image-header.jpg')",
        bannerMobile: "url('/assets/home/mobile/image-header.jpg')",
        patternCircles: "url('/assets/home/desktop/pattern-circles.svg')",
        zx7Desktop: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        zx7Tablet: "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        zx7Mobile: "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

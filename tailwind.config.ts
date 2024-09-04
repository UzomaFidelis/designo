import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "web-design": "url('/images/home/mobile/image-web-design.jpg')",
        "app-design": "url('/images/home/mobile/image-app-design.jpg')",
        "graphic-design": "url('/images/home/mobile/image-graphic-design.jpg')",
        // "web-design-tablet":
        //   "url('/images/home/desktop/image-web-design-large.jpg')",
        // "app-design-tablet": "url('/images/home/tablet/image-app-design.jpg')",
        // "graphic-design-tablet":
        //   "url('/images/home/tablet/image-graphic-design.jpg')",
        "web-design-desktop":
          "url('/images/home/desktop/image-web-design-large.jpg')",
        "app-design-desktop":
          "url('/images/home/desktop/image-app-design.jpg')",
        "graphic-design-desktop":
          "url('/images/home/desktop/image-graphic-design.jpg')",
        "home-hero": "url('/images/home/desktop/bg-pattern-hero-home.svg')",
        "about-hero-mobile":
          "url('/images/about/mobile/bg-pattern-hero-about-mobile.svg')",
        "about-hero-desktop":
          "url('/images/about/desktop/bg-pattern-hero-about-desktop.svg')",
        "contact-hero-mobile":
          "url('/images/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
        "design-intro":
          "url('/images/web-design/desktop/bg-pattern-intro-web.svg')",
      },
      backgroundSize: {
        full: "100% 100%",
        swell: "110% 110%",
      },
      transitionProperty: {
        "bg-size": "background-size",
        "max-height": "max-height",
      },
      fontFamily: { jost: ["Jost", ...defaultTheme.fontFamily.sans] },
      colors: {
        "peach-pri": "#E78168",
        "peach-sec": "#FFAD9B",
        "black-pri": "#1D1C1E",
        darkgrey: "#333136",
        lightgrey: "#F1F3F5",
      },
    },
  },
  plugins: [],
};
export default config;

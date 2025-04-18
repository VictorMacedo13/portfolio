import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        rotate: "rotate 1s linear infinite",
        flip: "flip 0.8s ease-in-out",
      },
      transformOrigin: {
        center: "center",
      },
      backgroundImage: {
        "radial-top": "radial-gradient(circle at top, #8000D0 ,  #333 )",
        "radial-bot": "radial-gradient(circle at top, #8000D0 ,  #545454 )",
        polygon: "clip-path: polygon(0 0, 100% 0, 100% 60%, 0 60%);",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
} satisfies Config;

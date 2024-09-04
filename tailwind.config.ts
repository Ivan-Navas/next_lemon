import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login": "url('https://res.cloudinary.com/ivannavas/image/upload/v1722542162/red_social/icons/vb1yxs4sbgstehwinjhy.jpg')",
        "glass": "linear-gradient(124deg,rgba(255, 255, 255, 0.1) 14.11%,rgba(255, 255, 255, 0.4) 86.73%)",
        "button": "linear-gradient(90deg, #87dbff 4.41%, #eac7ff 111.71%)",
      },
      fontSize:{
        "12": "12px",
        "16": "16px",
        "40": "40px",
      },
      borderRadius: {
        "16": "16px",
        "50%": "50%",
      },
      width: {
        "20": "20px",
        "24": "24px",
        "36": "36px",
        "207": "207px",
        "300": "300px",
        "363": "363px",
        "1000": "1000px",
      },
      height: {
        "1": "1px",
        "10": "10px",
        "20": "20px",
        "24": "24px",
        "36": "36px",
        "45": "45px",
        "192": "192px",
        "300": "300px",
        "700": "700px",
      },
      spacing: {
        "50": "50px",
        "175": "175px",
        "185": "185px",
      },
      gridTemplateColumns:{
        "login": "468px 531px",
        "oLine": "46% 8% 46%",
      },
      colors: {
        "back": "#2F2F2F",
        "inputBorder": "#87DBFF",
        "rose": "#EAC7FF",
        "inputText": "rgba(255,255,255, 0.7)",
      },
      margin: {
        "16": "16px",
        "17": "17px",
        "30": "30px",
        "35": "35px",
        "40": "40px",
        "131": "131px",
        "63": "63px",
      },
      padding:{
        "6": "6px",
      }
    },
  },
  plugins: [],
};
export default config;

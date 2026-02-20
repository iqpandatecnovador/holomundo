import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    blue: "#00F0FF",
                    purple: "#8B5CF6",
                    pink: "#FF2E9F",
                    cyan: "#22D3EE",
                },
                space: {
                    dark: "#050816",
                    deep: "#0A0F2C",
                }
            },
            fontFamily: {
                display: ["var(--font-space)"],
                body: ["var(--font-inter)"],
            },
            backgroundImage: {
                "space-gradient":
                    "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.25), transparent 40%), radial-gradient(circle at 70% 60%, rgba(0,240,255,0.2), transparent 40%)",
                "neon-gradient":
                    "linear-gradient(90deg, #00F0FF, #8B5CF6, #FF2E9F)",
            },
            boxShadow: {
                "neon-blue": "0 0 15px #00F0FF",
                "neon-purple": "0 0 20px #8B5CF6",
                "neon-pink": "0 0 20px #FF2E9F",
                "glass": "0 8px 32px rgba(0,0,0,0.4)",
            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                "pulse-neon": "pulse 2s infinite",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-12px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;

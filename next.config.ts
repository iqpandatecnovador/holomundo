import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita React Strict Mode para detectar problemas tempranos
  reactStrictMode: true,

  // Optimización de imágenes — agrega dominios externos si los usas
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Headers de seguridad para producción
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Webpack: silencia warnings de módulos opcionales
  webpack(config) {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;

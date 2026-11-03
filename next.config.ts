import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignora errores de TypeScript en la fase de build para despliegue rápido
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora advertencias de ESLint en la fase de build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
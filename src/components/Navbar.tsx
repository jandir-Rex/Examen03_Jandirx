"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Mail, Phone, Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "INICIO" },
  { href: "/productos", label: "PRODUCTOS" },
  { href: "/envios", label: "ENVÍOS" },
  { href: "/nosotros", label: "NOSOTROS" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#000424] text-white shadow-xl border-b border-blue-950 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* 1. Logo Oficial IKOMI PERÚ */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative bg-[#000a36] border-y-2 border-red-600 px-3 py-1 flex items-center justify-center">
                <span className="text-white font-black text-2xl tracking-tighter italic">IKM</span>
              </div>
              <div className="hidden sm:block">
                <span className="block font-black text-lg tracking-wider leading-none text-white">
                  IKOMI PERÚ
                </span>
                <span className="text-[9px] text-red-500 font-bold uppercase tracking-widest block mt-0.5">
                  MÁS QUE REPUESTOS
                </span>
              </div>
            </Link>

            {/* 2. Buscador Integrado */}
            <div className="hidden md:flex flex-1 max-w-sm relative mx-2">
              <input
                type="text"
                placeholder="¿Qué repuesto buscas?"
                className="w-full bg-[#000a36] text-xs text-white placeholder-zinc-400 px-5 py-2.5 rounded-full border border-blue-900/80 focus:outline-none focus:border-red-600 transition"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-white" aria-label="Buscar">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* 3. Enlaces del Menú Horizontal */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-widest">
              {links.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 transition-colors ${
                      isActive ? "text-white" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 4. Datos de Contacto Directo + Carrito Circular */}
            <div className="hidden xl:flex items-center gap-5 text-[11px] font-medium border-l border-blue-900/60 pl-5">
              <div className="flex flex-col gap-1 text-zinc-300">
                <a href="mailto:ventas@ikomiperu.com" className="flex items-center gap-1.5 hover:text-white transition">
                  <Mail className="w-3.5 h-3.5 text-red-600" />
                  <span>ventas@ikomiperu.com</span>
                </a>
                <a href="tel:+51985068416" className="flex items-center gap-1.5 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  <span>+51 985 068 416</span>
                </a>
              </div>

              {/* Botón Carrito Circular */}
              <Link
                href="/productos"
                className="w-10 h-10 rounded-full bg-[#000a36] border border-blue-800 flex items-center justify-center text-white hover:border-red-600 transition relative"
                aria-label="Carrito"
              >
                <ShoppingCart className="w-4 h-4" />
              </Link>
            </div>

            {/* Botón Menú Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:bg-blue-900 rounded-lg focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Menú Desplegable Mobile */}
        {isOpen && (
          <div className="lg:hidden bg-[#000424] border-t border-blue-900 px-4 pt-3 pb-6 space-y-3">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="¿Qué repuesto buscas?"
                className="w-full bg-[#000a36] text-xs text-white placeholder-zinc-400 px-4 py-2.5 rounded-full border border-blue-800 focus:outline-none"
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            </div>

            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-bold tracking-wider ${
                    isActive ? "bg-red-600 text-white" : "text-zinc-300 hover:bg-blue-900/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/51985068416?text=Hola,%20quisiera%20consultar%20sobre%20un%20repuesto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </>
  );
}
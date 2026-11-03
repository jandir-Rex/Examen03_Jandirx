import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Inicio | IKOMI PERÚ S.R.L. - Repuestos para camiones y buses",
  description: "Importación y venta de repuestos de calidad para camiones Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan.",
};

export default function HomePage() {
  return (
    <div className="bg-[#000a26] text-white min-h-screen font-sans">
      {/* Hero Banner Principal */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-8 bg-red-600"></span>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                REPUESTOS PARA CAMIONES Y BUSES
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              REPUESTOS <br />
              QUE MUEVEN <br />
              <span className="text-red-600">AL PERÚ</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
              Importación y venta de repuestos de calidad para camiones y buses Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan. Encuentra todo lo que tu camión, bus o flota necesita en un solo lugar.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/80 px-4 py-2.5 rounded-full border border-zinc-800">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Avenida Nicolás Ayllón 3384, Ate</span>
              </div>
              
              <Link
                href="/contacto"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 transition"
              >
                <span>VER CATÁLOGO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Imagen de Camión Hyundai */}
          <div className="relative h-[380px] w-full rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"
              alt="Camiones e Importación IKOMI"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Barra de Estadísticas / Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-blue-950">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-red-600">+3,000</span>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">CLIENTES A NIVEL NACIONAL</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-red-600">+17</span>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">AÑOS DE EXPERIENCIA</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-red-600">+2,000</span>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">PRODUCTOS DISPONIBLES</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-white">25</span>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mt-1">REGIONES ATENDIDAS</p>
          </div>
        </div>
      </section>

      {/* Cinta Roja de Marcas */}
      <section className="bg-red-600 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 font-black text-xl tracking-wider text-white">
          <span>MITSUBISHI</span>
          <span>KIA</span>
          <span>HINO</span>
          <span>ISUZU</span>
          <span>NISSAN</span>
          <span>HYUNDAI</span>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">CATEGORÍAS</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase">
              TODO LO QUE TU <br />
              <span className="text-red-600">UNIDAD NECESITA.</span>
            </h2>
          </div>
          <Link href="/productos" className="hidden sm:flex items-center gap-2 text-xs font-bold border border-blue-800 px-5 py-2.5 rounded-lg hover:bg-blue-900 transition">
            VER TODO EL CATÁLOGO <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
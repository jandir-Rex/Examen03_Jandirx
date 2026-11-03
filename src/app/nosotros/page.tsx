import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Nosotros | IKOMI PERÚ S.R.L.",
  description: "Somos IKOMI PERÚ. Desde hace más de 17 años acompañamos a quienes mantienen el transporte en movimiento.",
};

const instalaciones = [
  { title: "Equipo", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
  { title: "Almacen", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" },
  { title: "Tienda", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
  { title: "Empresa", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
];

export default function NosotrosPage() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans">
      {/* Hero Principal Idéntico a la Captura Real */}
      <section className="bg-[#000a26] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40 relative overflow-hidden">
        {/* Malla de fondo sutil */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold block mb-2">
            INICIO / NOSOTROS
          </span>

          <div className="flex items-center gap-2 mb-6">
            <span className="h-0.5 w-8 bg-red-600"></span>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              QUIÉNES SOMOS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-8 max-w-4xl">
            <span className="text-red-600">17 AÑOS</span> <br />
            <span className="text-white">ACOMPAÑANDO</span> <br />
            <span className="text-red-600">TU RUTA</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            Somos IKOMI PERÚ. Desde hace más de 17 años acompañamos a quienes mantienen el transporte en movimiento, ofreciendo repuestos de calidad para camiones y buses.
          </p>
        </div>
      </section>

      {/* Galería de Instalaciones (Equipo, Almacén, Tienda, Empresa) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="NUESTRA INFRAESTRUCTURA" 
          subtitle="Contamos con almacenes abastecidos, tiendas de atención rápida y un equipo técnico calificado." 
          dark={false} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {instalaciones.slice(0, 3).map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-[#000a26] text-white font-bold text-center py-3 text-sm tracking-wider uppercase">
                {item.title}
              </div>
              <div className="relative h-64 w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="bg-[#000a26] text-white font-bold text-center py-3 text-sm tracking-wider uppercase">
              {instalaciones[3].title}
            </div>
            <div className="relative h-64 w-full">
              <Image src={instalaciones[3].img} alt={instalaciones[3].title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
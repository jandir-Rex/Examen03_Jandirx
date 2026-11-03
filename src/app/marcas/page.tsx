import SectionTitle from "@/components/SectionTitle";
import { marcas } from "@/data/productos";

export const metadata = {
  title: "Marcas | IKOMI PERÚ S.R.L.",
  description: "Marcas reconocidas en el mercado de repuestos para Korea y Japón.",
};

export default function MarcasPage() {
  return (
    <div className="bg-[#000a26] text-white py-16 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="MARCAS"
          subtitle="Contamos con las marcas más reconocidas en el mercado nacional e internacional especializadas en la fabricación de repuestos para vehículos con altos estándares de calidad."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marcas.map((m, idx) => (
            <div
              key={idx}
              className="bg-white text-zinc-900 p-8 rounded-2xl shadow-md border border-zinc-200 flex flex-col justify-between hover:scale-105 transition duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 border-b border-zinc-100 pb-4">
                  <div className="bg-[#000a26] text-white font-black px-3 py-1.5 rounded-lg text-lg">
                    {m.logo}
                  </div>
                  <h3 className="font-extrabold text-xl text-zinc-900 tracking-tight">
                    {m.nombre}
                  </h3>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
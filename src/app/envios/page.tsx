import Image from "next/image";
import Link from "next/link";
import { Truck, MapPin, PackageCheck, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Envíos | IKOMI PERÚ S.R.L.",
  description: "Información sobre envíos a todo el Perú y entregas a domicilio.",
};

export default function EnviosPage() {
  return (
    <div className="bg-[#000a26] text-white min-h-[calc(100vh-80px)] font-sans">
      {/* Banner Principal estilo Captura Real */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold block mb-2">
              INICIO / ENVÍOS
            </span>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-8 bg-red-600"></span>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                INFORMACIÓN SOBRE ENVÍOS
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              <span className="text-red-600">ENVÍOS</span> <br />
              A TODO <br />
              EL PERÚ
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
              Tu pedido puede llegar hasta donde lo necesites. Conoce nuestras alternativas de entrega en Lima y las opciones de envío a provincias.
            </p>

            <Link
              href="/contacto"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-3.5 px-8 rounded-lg uppercase tracking-wider transition shadow-lg"
            >
              CONSULTAR MÉTODOS DE ENVÍO
            </Link>
          </div>

          {/* Imagen de Personal Empacando */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-blue-900/40 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
              alt="Personal empacando repuestos IKOMI"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Métodos de Envío detallados */}
      <section className="bg-[#00071f] py-16 border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#000a26] p-8 rounded-xl border border-blue-900/40">
              <Truck className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Envío a Provincias</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Despachamos tu pedido a través de agencias de transporte reconocidas (Shalom, Marvisur, Flores) a cualquier región del país.
              </p>
            </div>

            <div className="bg-[#000a26] p-8 rounded-xl border border-blue-900/40">
              <MapPin className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Entrega en Lima Metropolitano</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Contamos con servicio de delivery rápido para entregas directas en tu taller o almacén dentro de Lima.
              </p>
            </div>

            <div className="bg-[#000a26] p-8 rounded-xl border border-blue-900/40">
              <PackageCheck className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Embalaje Seguro</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Todos los repuestos son embalados bajo estrictas medidas de protección para garantizar que lleguen en perfecto estado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { productos } from "@/data/productos";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export const metadata = {
  title: "Catálogo de Productos | IKOMI PERÚ S.R.L.",
  description: "Encuentra repuestos de motor, embrague, transmisión y suspensión en stock.",
};

const categorias = ["VER TODO", "Motor", "Embrague", "Distribución", "Filtros", "Transmisión", "Frenos", "Suspensión"];

export default function ProductosPage() {
  return (
    <div className="bg-zinc-100 min-h-screen text-zinc-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="bg-[#000a26] text-white p-8 rounded-xl mb-8 flex items-center justify-between shadow-lg">
          <h1 className="text-3xl font-black uppercase tracking-wider">CATÁLOGO DE REPUESTOS</h1>
          <span className="text-xs text-blue-300 font-semibold">INICIO / PRODUCTOS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de Filtros Lateral */}
          <aside className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm h-fit">
            <h3 className="font-extrabold text-sm uppercase text-white bg-[#000a26] p-3 rounded-lg mb-4 text-center">
              CATEGORÍAS
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-zinc-700">
              {categorias.map((cat, idx) => (
                <li key={idx} className="flex justify-between items-center py-2 border-b border-zinc-100 hover:text-red-600 cursor-pointer">
                  <span>{cat}</span>
                  <span className="text-zinc-400 text-[10px]">({idx === 0 ? productos.length : 2})</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid de Productos */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productos.map((prod) => (
                <div key={prod.id} className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                  <div>
                    {/* Badge En Stock & Oferta */}
                    <div className="relative h-48 bg-zinc-50 border-b border-zinc-100">
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        OFERTA
                      </span>
                      <span className="absolute bottom-3 right-3 text-green-600 text-[10px] font-bold flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                        • EN STOCK
                      </span>
                      <Image src={prod.imagen} alt={prod.nombre} fill className="object-cover" />
                    </div>

                    <div className="p-4">
                      <span className="text-[10px] font-bold text-red-600 uppercase block mb-1">{prod.categoria}</span>
                      <h3 className="font-bold text-xs text-zinc-900 mb-2 line-clamp-2 leading-snug">{prod.nombre}</h3>
                      <p className="text-[10px] text-zinc-500 mb-1">SKU: {prod.sku}</p>
                      <p className="text-[10px] text-zinc-400 mb-3">Compatible: {prod.compatibilidad}</p>

                      <div className="flex items-baseline gap-2 mb-4">
                        {prod.precioOferta && (
                          <span className="text-xs text-zinc-400 line-through">S/.{prod.precioOferta.toFixed(2)}</span>
                        )}
                        <span className="text-base font-black text-zinc-900">S/.{prod.precio.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0 space-y-2">
                    <Link
                      href={`/productos/${prod.slug}`}
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 rounded text-center block uppercase tracking-wider transition"
                    >
                      AÑADIR AL CARRITO
                    </Link>
                    <a
                      href={`https://wa.me/51985068416?text=Hola,%20deseo%20cotizar%20el%20producto:%20${prod.nombre}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold py-1.5 rounded text-center block uppercase tracking-wider transition flex items-center justify-center gap-1"
                    >
                      <span>COMPRAR POR WHATSAPP</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
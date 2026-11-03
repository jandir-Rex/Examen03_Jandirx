import Image from "next/image";
import Link from "next/link";
import { Producto } from "@/data/productos";

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
      <div className="relative h-56 w-full bg-zinc-100 overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
          {producto.marca}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-1">
          {producto.categoria}
        </span>
        <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
          {producto.nombre}
        </h3>
        <p className="text-sm text-zinc-600 line-clamp-2 mb-4 flex-grow">
          {producto.descripcion}
        </p>
        <Link
          href={`/productos/${producto.slug}`}
          className="w-full text-center bg-[#2b59c3] hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 text-sm shadow-sm"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}
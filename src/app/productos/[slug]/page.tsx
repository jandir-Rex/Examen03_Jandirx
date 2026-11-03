import { productos } from "@/data/productos";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const producto = productos.find((p) => p.slug === params.slug);
  if (!producto) return { title: "Producto no encontrado | IKOMI PERÚ" };

  return {
    title: `${producto.nombre} | IKOMI PERÚ`,
    description: producto.descripcion,
  };
}

export default function ProductoDetallePage({ params }: Props) {
  const producto = productos.find((p) => p.slug === params.slug);

  if (!producto) {
    notFound();
  }

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="/productos" className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Volver al catálogo
      </Link>

      <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-80 md:h-full min-h-[350px] bg-zinc-100">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {producto.marca}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-4">
              {producto.nombre}
            </h1>
            <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
              {producto.descripcion}
            </p>

            <h3 className="font-bold text-sm text-zinc-900 uppercase tracking-wider mb-3">Especificaciones Técnicas:</h3>
            <ul className="space-y-2 mb-8">
              {producto.especificaciones.map((esp, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-zinc-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{esp}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contacto"
            className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 shadow-md text-sm uppercase tracking-wider"
          >
            Cotizar Repuesto
          </Link>
        </div>
      </div>
    </div>
  );
}
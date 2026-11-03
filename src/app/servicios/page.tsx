import SectionTitle from "@/components/SectionTitle";
import { ShoppingBag, UserCheck, Truck, Layers } from "lucide-react";

export const metadata = {
  title: "Servicios | IKOMI PERÚ S.R.L.",
  description: "Ventas, asesoría, delivery y catálogo de productos.",
};

const servicios = [
  {
    icon: ShoppingBag,
    title: "Ventas",
    desc: "Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón. A los mejores precios del mercado."
  },
  {
    icon: UserCheck,
    title: "Asesoría",
    desc: "Le brindamos una asesoría personalizada acerca de nuestros productos, a elegir el mejor repuesto para su movilidad."
  },
  {
    icon: Truck,
    title: "Delivery",
    desc: "Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible."
  },
  {
    icon: Layers,
    title: "Productos",
    desc: "Contamos con las mejores marcas y calidad de productos del mercado."
  }
];

export default function ServiciosPage() {
  return (
    <div className="bg-zinc-900 text-white py-16 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="SERVICIOS" subtitle="Estamos listos para atenderte." dark />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicios.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-zinc-800/80 p-8 rounded-2xl border border-zinc-700 hover:border-red-600 transition flex gap-6">
                <div className="text-red-500 flex-shrink-0">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 underline underline-offset-4 decoration-red-600">
                    {s.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
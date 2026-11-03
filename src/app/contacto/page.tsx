import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contacto | IKOMI PERÚ S.R.L.",
  description: "Ponte en contacto con nuestros asesores comerciales y ubícanos en Ate, Lima.",
};

export default function ContactoPage() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900 font-sans">
      {/* Hero Principal Estilo IKOMI PERÚ */}
      <section className="bg-[#000a26] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40 relative overflow-hidden">
        {/* Malla sutil de fondo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold block mb-2">
            INICIO / CONTACTO
          </span>

          <div className="flex items-center gap-2 mb-6">
            <span className="h-0.5 w-8 bg-red-600"></span>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              ESTAMOS PARA ATENDERTE
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none mb-8 max-w-4xl">
            <span className="text-red-600">PÓNTE EN</span> <br />
            <span className="text-white">CONTACTO CON</span> <br />
            <span className="text-red-600">NOSOTROS</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            Llene el formulario o visítenos en nuestra sede principal. Un asesor especializado responderá su consulta sobre disponibilidad y precios a la brevedad.
          </p>
        </div>
      </section>

      {/* Sección Principal: Tarjetas de Información, Mapa y Formulario */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tarjetas de Información Directa */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#000a26] text-red-500 rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs uppercase text-zinc-900 tracking-wider mb-1">Ubicación</h4>
              <p className="text-xs text-zinc-600 leading-snug">Av. Nicolás Ayllón 3384, Ate 15012 - Lima</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#000a26] text-red-500 rounded-lg">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs uppercase text-zinc-900 tracking-wider mb-1">Teléfonos</h4>
              <p className="text-xs text-zinc-600 leading-snug">+51 985 068 416</p>
              <p className="text-xs text-zinc-600 leading-snug">+51 912 345 678</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#000a26] text-red-500 rounded-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs uppercase text-zinc-900 tracking-wider mb-1">Correo Electrónico</h4>
              <p className="text-xs text-zinc-600 leading-snug">ventas@ikomiperu.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#000a26] text-red-500 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs uppercase text-zinc-900 tracking-wider mb-1">Horario</h4>
              <p className="text-xs text-zinc-600 leading-snug">Lun - Vie: 8:00 AM - 6:00 PM</p>
              <p className="text-xs text-zinc-600 leading-snug">Sáb: 8:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Mapa Interactivo y Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Mapa de Google Maps */}
          <div className="bg-white p-3 rounded-2xl border border-zinc-200 shadow-md">
            <div className="rounded-xl overflow-hidden h-[420px] bg-zinc-100 relative">
              <iframe
                src="https://maps.google.com/maps?q=Av.%20Nicol%C3%A1s%20Ayll%C3%B3n%203384,%20Ate,%20Lima&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-zinc-900 text-sm">Sede Principal IKOMI PERÚ</p>
              <p className="text-xs text-zinc-500">Paradero Rayovac - Carretera Central, Ate</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 bg-white p-8 rounded-2xl border border-zinc-200 shadow-md"
    >
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
          ¡Gracias por tu mensaje! Un asesor técnico se comunicará a la brevedad.
        </div>
      )}
      <div>
        <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Apellidos y Nombres</label>
        <input
          required
          type="text"
          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-sm transition"
          placeholder="Ej. Carlos Mendoza"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Teléfono</label>
          <input
            required
            type="tel"
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-sm transition"
            placeholder="912 345 678"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Correo</label>
          <input
            required
            type="email"
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-sm transition"
            placeholder="cliente@ejemplo.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Asunto</label>
        <input
          type="text"
          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-sm transition"
          placeholder="Consulta sobre disponibilidad de kit de embrague"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">Mensaje</label>
        <textarea
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-sm transition"
          placeholder="Buenas tardes, desearía consultar el precio y stock para el repuesto de caja..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md text-sm uppercase tracking-wider"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
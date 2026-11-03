export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  categoria: string;
  marca: string;
  precio: number;
  precioOferta?: number;
  sku: string;
  compatibilidad: string;
  enStock: boolean;
  imagen: string;
  descripcion: string;
  especificaciones?: string[];
}

export const productos: Producto[] = [
  {
    id: "1",
    slug: "balancin-admision-hyundai-mitsubishi",
    nombre: "Balancín de admisión (IN) Hyundai D4BH D4BB / Mitsubishi 4D55 4D56",
    categoria: "Motor",
    marca: "HYUNDAI / MITSUBISHI",
    precio: 23.00,
    precioOferta: 35.00,
    sku: "24531-42880",
    compatibilidad: "Hyundai H-100, Grace, H-1",
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
    descripcion: "Balancín de admisión para motores Diésel Hyundai y Mitsubishi.",
    especificaciones: ["Material: Acero forjado", "Posición: Admisión (IN)"]
  },
  {
    id: "2",
    slug: "balancin-escape-hyundai-mitsubishi",
    nombre: "Balancín de escape (EX) Hyundai D4BH D4BB / Mitsubishi 4D55 4D56",
    categoria: "Motor",
    marca: "HYUNDAI / MITSUBISHI",
    precio: 23.00,
    precioOferta: 35.00,
    sku: "24529-42880",
    compatibilidad: "Hyundai H-100, Grace, H-1",
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
    descripcion: "Balancín de escape diseñado para soportar altas temperaturas.",
    especificaciones: ["Material: Acero reforzado", "Posición: Escape (EX)"]
  },
  {
    id: "3",
    slug: "empaque-tapa-balancin-kia",
    nombre: "Empaque de tapa de balancín Kia J2",
    categoria: "Motor",
    marca: "KIA",
    precio: 30.00,
    precioOferta: 40.00,
    sku: "0K65A10236C",
    compatibilidad: "Kia K2700, Pregio, Bongo",
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1600706432523-991448b188c6?q=80&w=800&auto=format&fit=crop",
    descripcion: "Junta de goma de nitrilo resistente a fugas de aceite.",
    especificaciones: ["Material: Nitrilo OEM", "Resistencia térmica superior"]
  },
  {
    id: "4",
    slug: "soporte-cardan-rodaje-hyundai-county",
    nombre: "Soporte de cardán con rodaje 40 mm Hyundai County HD-65 HD-78",
    categoria: "Suspensión",
    marca: "NAM YANG",
    precio: 120.00,
    sku: "49710-45200",
    compatibilidad: "Hyundai County, HD-65, HD-78",
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    descripcion: "Soporte central de transmisión con rodamiento integrado.",
    especificaciones: ["Diámetro interno: 40 mm", "Incluye rodaje sellado"]
  }
];

export const marcas = [
  { nombre: "SANGSIN BRAKE", desc: "Líder coreano en componentes de freno.", logo: "SB" },
  { nombre: "HANSANG", desc: "Especialista en repuestos de caja de transmisión.", logo: "HS" },
  { nombre: "MANDO", desc: "Sistemas de suspensión y dirección.", logo: "MD" },
  { nombre: "TCIC", desc: "Fabricante de bombas de freno.", logo: "TC" },
  { nombre: "PHC VALEO", desc: "Sistemas globales de transmisión.", logo: "PV" },
  { nombre: "YULIM", desc: "Innovación en componentes de dirección.", logo: "YL" }
];
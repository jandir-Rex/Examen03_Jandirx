interface Props {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionTitle({ title, subtitle, dark = true }: Props) {
  return (
    <div className="text-center mb-16 relative">
      <div className="inline-block relative">
        <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-wider ${
          dark ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400" : "text-zinc-900"
        }`}>
          {title}
        </h2>
        {/* Línea Neón con Resplandor */}
        <div className="h-1 w-24 bg-gradient-to-r from-red-600 via-blue-500 to-yellow-400 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>
      </div>
      {subtitle && (
        <p className={`text-sm sm:text-base max-w-2xl mx-auto mt-4 font-normal leading-relaxed ${
          dark ? "text-zinc-400" : "text-zinc-600"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
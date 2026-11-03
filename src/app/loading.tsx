export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#000a30] flex flex-col items-center justify-center transition-all duration-500">
      <div className="relative animate-pulse">
        <div className="bg-[#002275] border-2 border-red-600 px-6 py-3 rounded-lg shadow-2xl">
          <span className="text-white font-black text-4xl tracking-widest block">IKM</span>
        </div>
      </div>
    </div>
  );
}
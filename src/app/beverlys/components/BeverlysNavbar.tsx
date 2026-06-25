import Link from "next/link";

export default function BeverlysNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-black/90 backdrop-blur-md border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/beverlys"
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Go to Beverly's home"
          >
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center text-black font-bold text-xl skew-x-[-10deg] group-hover:bg-white transition-colors">
              <span className="skew-x-[10deg]">B</span>
            </div>
            <span className="font-bold text-sm sm:text-lg md:text-xl tracking-tighter text-white uppercase font-display group-hover:text-yellow-500 transition-colors">
              Beverly's<span className="text-yellow-500 group-hover:text-white">Salon</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest transition-colors duration-200 text-zinc-400 hover:text-white">
              &larr; Back to Main Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

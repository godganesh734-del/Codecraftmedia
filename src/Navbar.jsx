import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-6">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg tracking-tight text-white">
          Asme
        </span>
      </div>

      {/* Navigation Actions */}
      <div className="flex items-center gap-3">
        <button className="relative group px-4 py-2 text-xs font-medium text-white transition-all duration-300 rounded-full liquid-glass hover:bg-white/10 flex items-center gap-2 cursor-pointer">
          <span>Sign In</span>
        </button>

        <button className="relative group px-4 py-2 text-xs font-medium text-black bg-white transition-all duration-300 rounded-full hover:bg-white/90 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </header>
  );
}

import { ShoppingBag, Globe, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl px-5 py-3 shadow-[0_10px_30px_rgba(182,153,255,0.25)]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-200 via-violet-200 to-indigo-200 ring-1 ring-white/60" />
            <span className="text-lg font-semibold tracking-tight text-slate-800">
              Étoile Beauty
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-700/80 hover:text-slate-900 transition" href="#collections">Collections</a>
            <a className="text-slate-700/80 hover:text-slate-900 transition" href="#bestsellers">Bestsellers</a>
            <a className="text-slate-700/80 hover:text-slate-900 transition" href="#stories">Stories</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs text-slate-700/80">
              <Globe className="h-3.5 w-3.5" />
              EU shipping 2–4 days
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
              <ShoppingBag className="h-4 w-4" />
              Bag
            </button>
            <button className="md:hidden ml-1 rounded-full p-2 hover:bg-white/60" onClick={() => setOpen(v => !v)} aria-label="Menu">
              <Menu className="h-5 w-5 text-slate-800" />
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-4 backdrop-blur-xl md:hidden">
            <a className="block rounded-lg px-3 py-2 text-slate-700/90 hover:bg-white/70" href="#collections">Collections</a>
            <a className="block rounded-lg px-3 py-2 text-slate-700/90 hover:bg-white/70" href="#bestsellers">Bestsellers</a>
            <a className="block rounded-lg px-3 py-2 text-slate-700/90 hover:bg-white/70" href="#stories">Stories</a>
          </div>
        )}
      </div>
    </header>
  );
}

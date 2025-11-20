import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Story from './components/Story';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4FF] via-[#F9F7FF] to-[#F2F0FF] text-slate-900">
      {/* glow */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-200 via-violet-200 to-indigo-200 opacity-50 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Products />
      <Story />

      <footer className="border-t border-white/60 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Étoile Beauty — All rights reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Shipping</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
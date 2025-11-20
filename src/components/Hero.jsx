import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs text-slate-700/80 shadow-sm backdrop-blur-md">
            European-crafted • Cruelty-free • Clean beauty
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
            Quiet luxury fragrances & beauty
          </h1>
          <p className="mt-5 text-lg text-slate-700/80">
            Minimal, modern essentials with a soft color palette — designed for the European lifestyle. Subtle, lasting, and beautifully made.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#bestsellers" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
              Shop bestsellers
            </a>
            <a href="#collections" className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-5 py-3 text-slate-900 hover:bg-white">
              Explore collections
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

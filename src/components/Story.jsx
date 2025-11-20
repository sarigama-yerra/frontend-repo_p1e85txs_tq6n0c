export default function Story() {
  return (
    <section id="collections" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-1.5 shadow-[0_30px_60px_rgba(182,153,255,0.15)]">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop"
                alt="Studio"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs text-slate-700/80 shadow-sm backdrop-blur-md">Made in Europe</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Soft color. Strong presence.</h2>
            <p className="mt-4 text-slate-600">
              We craft subtle essentials with a quiet, refined character. Our palette leans into powdery lilacs, blush, and soft neutrals to evoke a modern minimal luxury that feels effortless, never loud.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-700/90">
              <li className="rounded-xl border border-white/60 bg-white/70 px-4 py-3">Vegan & cruelty-free</li>
              <li className="rounded-xl border border-white/60 bg-white/70 px-4 py-3">IFRA-compliant fragrances</li>
              <li className="rounded-xl border border-white/60 bg-white/70 px-4 py-3">EU shipping 2–4 business days</li>
              <li className="rounded-xl border border-white/60 bg-white/70 px-4 py-3">Recyclable glass & packaging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

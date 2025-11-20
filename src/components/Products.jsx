const products = [
  {
    id: 1,
    name: "Eau Lumière",
    desc: "Soft iris, pear blossom, and musk.",
    price: "€68",
    img: "https://images.unsplash.com/photo-1616948291124-c8b1c0a1d7a5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Rose Voile",
    desc: "Sheer rose with tea and cedar.",
    price: "€74",
    img: "https://images.unsplash.com/photo-1585386959984-a41552231671?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "No. 03 Violette",
    desc: "Violet leaf, bergamot, and musk.",
    price: "€72",
    img: "https://images.unsplash.com/photo-1563170423-18f482d82cc8?q=80&w=1200&auto=format&fit=crop"
  },
];

export default function Products() {
  return (
    <section id="bestsellers" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Bestsellers</h2>
            <p className="mt-2 text-slate-600">Our most-loved scents and essentials</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm text-slate-900 hover:bg-white">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-3 backdrop-blur-md shadow-[0_20px_40px_rgba(182,153,255,0.15)]">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-slate-900">{p.name}</h3>
                  <span className="text-sm text-slate-700/80">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">Add to bag</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

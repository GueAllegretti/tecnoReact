import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Telefoni',
    href: '/prodotti/telefoni',
    icon: '📱',
    imageSrc: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  },
  {
    name: 'Tablet',
    href: '/prodotti/tablet',
    icon: '💻',
    imageSrc: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
  },
  {
    name: 'Gaming',
    href: '#',
    icon: '🎮',
    imageSrc: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80',
  },
  {
    name: 'Accessori',
    href: '/prodotti/accessori',
    icon: '🎧',
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  },
]

const Brand = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-400/10 dark:bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-purple-400/10 dark:bg-purple-600/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider transition-colors">
            Nuovo arrivo
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white leading-tight transition-colors">
            Tech &amp; Gaming<br />
            <span className="gradient-text">al tuo servizio</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
            Smartphone, tablet, console e accessori. Tutto quello che ti serve, al miglior prezzo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/prodotti/telefoni"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all glow-indigo-hover"
            >
              Scopri i prodotti
            </Link>
            <Link
              to="#"
              className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-700 transition-all"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">Categorie</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group relative rounded-2xl overflow-hidden h-52 bg-gray-200 dark:bg-gray-800 glow-indigo-hover transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={cat.imageSrc}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-60 dark:opacity-50 group-hover:opacity-80 dark:group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-2xl block mb-1">{cat.icon}</span>
                <span className="text-base font-bold text-white">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 p-10 text-center">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <h2 className="relative text-3xl font-black text-white">Usato garantito 🔒</h2>
          <p className="relative mt-3 text-indigo-200 max-w-md mx-auto">
            Tutti i nostri dispositivi sono testati, verificati e venduti con garanzia.
          </p>
          <Link
            to="#"
            className="relative mt-6 inline-block px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Scopri come funziona
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Brand

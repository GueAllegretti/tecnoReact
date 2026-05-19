import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Servizi from './servizi'

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

const palette = ['#6366f1','#a855f7','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#14b8a6','#f97316','#8b5cf6']
const brandColor = (name) => palette[name.charCodeAt(0) % palette.length]

const Brand = () => {
  const [operatori, setOperatori] = useState([])
  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/operatori/')
      .then(res => res.json())
      .then(data => setOperatori(data))
      .catch(() => {})

    fetch('http://localhost:8000/brand/')
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(() => {})
  }, [])

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
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight transition-colors">
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

      {/* Brand */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Ufficiale
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Brand
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Prodotti originali con garanzia ufficiale del produttore
          </p>
        </div>

        {brands.length === 0 ? (
          <div className="flex gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-1 animate-pulse bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl h-20" />
            ))}
          </div>
        ) : (
          <>
            {/* Desktop: tutti in una riga */}
            <div className="hidden sm:flex gap-3">
              {brands.map((brand) => {
                const color = brandColor(brand.title)
                return (
                  <div
                    key={brand.url}
                    className="group flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all group-hover:scale-105"
                      style={{ backgroundColor: color + '18', color }}
                    >
                      {brand.title.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                      {brand.title}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Mobile: 2 per riga */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {brands.map((brand) => {
                const color = brandColor(brand.title)
                return (
                  <div
                    key={brand.url}
                    className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm"
                      style={{ backgroundColor: color + '18', color }}
                    >
                      {brand.title.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                      {brand.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </section>

      {/* Operatori telefonici */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Convenzioni
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Operatori telefonici convenzionati
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Attiva una nuova SIM o cambia operatore direttamente in negozio
          </p>
        </div>

        {operatori.length === 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl h-28" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {operatori.map((op) => (
              <div
                key={op.id}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {op.img ? (
                  <img
                    src={`http://localhost:8000${new URL(op.img).pathname}`}
                    alt={op.nome}
                    className="w-20 h-20 object-contain rounded-xl transition-all group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-lg tracking-tight transition-all group-hover:scale-105"
                    style={{ backgroundColor: (op.colore || '#6366f1') + '15', color: op.colore || '#6366f1', border: `2px solid ${op.colore || '#6366f1'}30` }}
                  >
                    {op.nome.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{op.nome}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{op.descrizione}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Servizi />

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

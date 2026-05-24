import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Servizi from './servizi'
import Personalizzazione from './personalizzazione'

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
    name: 'PC',
    href: '/prodotti/pc',
    icon: '🖥️',
    imageSrc: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80',
  },
  {
    name: 'Accessori',
    href: '/prodotti/accessori',
    icon: '🎧',
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  },
]

const BASE = 'http://localhost:8000'
const palette = ['#6366f1','#a855f7','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#14b8a6','#f97316','#8b5cf6']
const brandColor = (name) => palette[name.charCodeAt(0) % palette.length]
const getId = (url) => url?.split('/').filter(Boolean).pop()
const toBrandImgUrl = (img) => {
  if (!img) return null
  try { return `${BASE}${new URL(img).pathname}` }
  catch { return `${BASE}/media/${img}` }
}

const Brand = () => {
  const [operatori, setOperatori] = useState([])
  const [brands, setBrands] = useState([])
  const [brandIdx, setBrandIdx] = useState(0)
  const [brandAnimated, setBrandAnimated] = useState(true)

  const CARD_W = 208 // w-48 (192px) + gap-4 (16px)

  const goPrev = () => setBrandIdx(i => i - 1)
  const goNext = () => setBrandIdx(i => i + 1)

  useEffect(() => {
    if (brands.length === 0) return
    if (brandIdx >= brands.length) {
      const t = setTimeout(() => { setBrandAnimated(false); setBrandIdx(0) }, 320)
      return () => clearTimeout(t)
    }
    if (brandIdx < 0) {
      const t = setTimeout(() => { setBrandAnimated(false); setBrandIdx(brands.length - 1) }, 320)
      return () => clearTimeout(t)
    }
  }, [brandIdx, brands.length])

  useEffect(() => {
    if (!brandAnimated) {
      const frame = requestAnimationFrame(() => setBrandAnimated(true))
      return () => cancelAnimationFrame(frame)
    }
  }, [brandAnimated])

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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorie</h2>
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

      {/* Personalizzazione */}
      <Personalizzazione />

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
          <div className="flex gap-4 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="shrink-0 w-48 animate-pulse bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl h-48" />
            ))}
          </div>
        ) : (
          <div className="relative flex items-center gap-3">
            <button
              onClick={goPrev}
              className="shrink-0 w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
            >‹</button>

            <div className="overflow-hidden flex-1">
              <div
                className="flex gap-4"
                style={{
                  transform: `translateX(-${brandIdx * CARD_W}px)`,
                  transition: brandAnimated ? 'transform 0.3s ease' : 'none',
                  width: 'max-content',
                }}
              >
                {[...brands, ...brands].map((brand, i) => {
                  const color = brandColor(brand.title)
                  return (
                    <Link
                      key={`${brand.url}-${i}`}
                      to={`/brand/${getId(brand.url)}`}
                      className="group shrink-0 w-48 flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                    >
                      {toBrandImgUrl(brand.img) ? (
                        <div className="w-20 h-20 flex items-center justify-center">
                          <img
                            src={toBrandImgUrl(brand.img)}
                            alt={brand.title}
                            className="w-full h-full object-contain rounded-xl transition-all group-hover:scale-105"
                            onError={(e) => { e.target.parentElement.style.display = 'none'; e.target.parentElement.nextSibling.style.display = 'flex' }}
                          />
                        </div>
                      ) : null}
                      <div
                        className="w-20 h-20 rounded-2xl items-center justify-center font-black text-2xl transition-all group-hover:scale-105"
                        style={{ backgroundColor: color + '20', color, display: toBrandImgUrl(brand.img) ? 'none' : 'flex' }}
                      >
                        {brand.title.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 text-center leading-tight">
                        {brand.title}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <button
              onClick={goNext}
              className="shrink-0 w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
            >›</button>
          </div>
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
              <Link
                key={op.id}
                to={`/operatori/${op.id}`}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
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
              </Link>
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
            to="/come-funziona"
            className="relative mt-6 inline-block px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Scopri come funziona
          </Link>
        </div>
      </section>

      {/* Social */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Facebook */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-6 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Seguici su Facebook</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Offerte e novità nel tuo feed</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/tecnopoint"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
            >
              Segui
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-6 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Seguici su Instagram</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Foto, storie e contenuti esclusivi</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/tecnopoint"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-colors"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              Segui
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Brand

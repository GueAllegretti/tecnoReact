import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import PremiumPhone from '../components/premium_phone'

const toUrl = (img) => {
  if (!img) return null
  try { return `http://localhost:8000${new URL(img).pathname}` }
  catch { return `http://localhost:8000/media/${img}` }
}

const ProductCard = ({ product, badgeClass }) => {
  const images = [
    toUrl(product.img),
    ...(product.images || []).map(i => toUrl(i.img)),
  ].filter(Boolean)

  const [idx, setIdx] = useState(0)
  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }

  return (
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg dark:glow-indigo-hover transition-all duration-300 cursor-pointer">
      <div className="relative h-52 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={images[idx]}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-all duration-500"
          onError={(e) => { e.target.src = 'https://placehold.co/300x300/e5e7eb/6366f1?text=No+img' }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 hover:bg-gray-700 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >‹</button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 hover:bg-gray-700 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >›</button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        {product.condition && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${badgeClass}`}>
            {product.condition}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug transition-colors">
          {product.title}
        </h3>
        {product.color && (
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{product.color}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">€ {product.price}</span>
          <button className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors">
            Dettagli
          </button>
        </div>
      </div>
    </div>
  )
}

const categoryMap = {
  telefoni: 'phone',
  tablet: 'tablet',
  accessori: 'accessori',
}

const categoryLabels = {
  telefoni: 'Telefoni 📱',
  tablet: 'Tablet 💻',
  accessori: 'Accessori 🎧',
}

const conditionColors = {
  nuovo: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  usato: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
  ricondizionato: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30',
}

const conditions = [
  { value: null, label: 'Tutti' },
  { value: 'nuovo', label: 'Nuovo' },
  { value: 'usato', label: 'Usato' },
  { value: 'ricondizionato', label: 'Ricondizionato' },
]

const ProductsPage = () => {
  const { category } = useParams()
  const endpoint = categoryMap[category]
  const { products, loading, error } = useProducts(endpoint)
  const [selectedCondition, setSelectedCondition] = useState(null)

  const filtered = selectedCondition
    ? products.filter((p) => p.condition?.toLowerCase() === selectedCondition)
    : products

  if (!endpoint) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center text-gray-500 transition-colors">
        Categoria non trovata.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Page header */}
      <div className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-10 transition-colors">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-400/5 dark:bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white transition-colors">{categoryLabels[category]}</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm transition-colors">
            {loading ? '...' : `${filtered.length} prodotti disponibili`}
          </p>

          {/* Filtro condizione */}
          <div className="mt-5 flex flex-wrap gap-2">
            {conditions.map((c) => {
              const active = selectedCondition === c.value
              const badge = c.value ? conditionColors[c.value] : null
              return (
                <button
                  key={c.label}
                  onClick={() => setSelectedCondition(c.value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${
                    active
                      ? c.value
                        ? conditionColors[c.value]
                        : 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-52 bg-gray-200 dark:bg-gray-700" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500 dark:text-red-400">{error}</div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">Nessun prodotto disponibile.</div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product) => {
              const conditionKey = product.condition?.toLowerCase()
              const badgeClass = conditionColors[conditionKey] || 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600'
              return <ProductCard key={product.url} product={product} badgeClass={badgeClass} />
            })}
          </div>
        )}
      </div>

      {category === 'telefoni' && <PremiumPhone />}
    </div>
  )
}

export default ProductsPage

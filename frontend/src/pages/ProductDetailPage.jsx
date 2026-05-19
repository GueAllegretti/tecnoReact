import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const categoryMap = {
  telefoni: 'phone',
  tablet: 'tablet',
  accessori: 'accessori',
}

const conditionColors = {
  nuovo: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  usato: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
  ricondizionato: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30',
}

const toUrl = (img) => {
  if (!img) return null
  try { return `http://localhost:8000${new URL(img).pathname}` }
  catch { return `http://localhost:8000/media/${img}` }
}

const ProductDetailPage = () => {
  const { category, id } = useParams()
  const navigate = useNavigate()
  const endpoint = categoryMap[category]

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (!endpoint) return
    setLoading(true)
    fetch(`http://localhost:8000/${endpoint}/${id}/`)
      .then(res => { if (!res.ok) throw new Error('Prodotto non trovato'); return res.json() })
      .then(data => { setProduct(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [endpoint, id])

  if (!endpoint) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Categoria non valida.</div>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-96" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mt-6" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mt-6" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  }

  const images = [
    toUrl(product.img),
    ...(product.images || []).map(i => toUrl(i.img)),
  ].filter(Boolean)

  const conditionKey = product.condition?.toLowerCase()
  const badgeClass = conditionColors[conditionKey] || 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-4 transition-colors">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Torna indietro
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Galleria immagini */}
          <div className="space-y-3">
            <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden h-80 sm:h-96">
              <img
                src={images[activeImg]}
                alt={product.title}
                className="w-full h-full object-contain p-4 transition-all duration-300"
                onError={(e) => { e.target.src = 'https://placehold.co/600x600/e5e7eb/6366f1?text=No+img' }}
              />
              {product.condition && (
                <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>
                  {product.condition}
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      i === activeImg
                        ? 'border-indigo-500 scale-105'
                        : 'border-gray-200 dark:border-gray-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'https://placehold.co/64x64/e5e7eb/6366f1?text=?' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info prodotto */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight transition-colors">
              {product.title}
            </h1>

            <div className="mt-3 flex flex-wrap gap-2 items-center">
              {product.condition && (
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}>
                  {product.condition}
                </span>
              )}
              {product.color && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                  {product.color}
                </span>
              )}
            </div>

            <div className="mt-6">
              <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                € {product.price}
              </span>
            </div>

            {product.description && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 transition-colors">Descrizione</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {product.description}
                </p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors">
                Contattaci per info
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full py-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm border border-gray-200 dark:border-gray-700 transition-colors"
              >
                Torna ai prodotti
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage

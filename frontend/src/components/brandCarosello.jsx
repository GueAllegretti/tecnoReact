import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'

const BASE = API_URL
const palette = ['#6366f1','#a855f7','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#14b8a6','#f97316','#8b5cf6']
const brandColor = (name) => palette[name.charCodeAt(0) % palette.length]
const getId = (url) => url?.split('/').filter(Boolean).pop()
const toBrandImgUrl = (img) => {
  if (!img) return null
  try { return `${BASE}${new URL(img).pathname}` }
  catch { return `${BASE}/media/${img}` }
}

const CARD_W = 208 // w-48 (192px) + gap-4 (16px)

const BrandCarosello = () => {
  const [brands, setBrands] = useState([])
  const [brandIdx, setBrandIdx] = useState(0)
  const [brandAnimated, setBrandAnimated] = useState(true)

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
    fetch(`${API_URL}/brand/`)
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(() => {})
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="text-center mb-10">
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Ufficiale
        </span>
        <h2 className="text-2xl font-bold text-gray-900">Brand</h2>
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
  )
}

export default BrandCarosello

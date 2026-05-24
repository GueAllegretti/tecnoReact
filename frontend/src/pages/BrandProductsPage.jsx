import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BASE = 'http://localhost:8000'

const conditionColors = {
  nuovo: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  usato: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
  ricondizionato: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30',
}

const categoryLabels = {
  phone: 'Telefoni',
  tablet: 'Tablet',
  accessori: 'Accessori',
  pc: 'PC',
}

const toUrl = (img) => {
  if (!img) return null
  try { return `${BASE}${new URL(img).pathname}` }
  catch { return `${BASE}/media/${img}` }
}

const getId = (url) => url?.split('/').filter(Boolean).pop()

const categoryFromEndpoint = { phone: 'telefoni', tablet: 'tablet', accessori: 'accessori', pc: 'pc' }

const ShareIcons = {
  share: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  whatsapp: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  telegram: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  facebook: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  copy: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  check: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
}

const ProductCard = ({ product, endpoint }) => {
  const navigate = useNavigate()
  const images = [toUrl(product.img), ...(product.images || []).map(i => toUrl(i.img))].filter(Boolean)
  const [idx, setIdx] = useState(0)
  const [showShare, setShowShare] = useState(false)
  const [copied, setCopied] = useState(false)
  const conditionKey = product.condition?.toLowerCase()
  const badgeClass = conditionColors[conditionKey] || 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600'

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }

  const productUrl = `${window.location.origin}/prodotti/${categoryFromEndpoint[endpoint]}/${getId(product.url)}`

  const handleShare = async (e) => {
    e.stopPropagation()
    if (navigator.share) {
      try { await navigator.share({ title: product.title, url: productUrl }) } catch {}
    } else {
      setShowShare(s => !s)
    }
  }

  const copyLink = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(productUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div onClick={() => navigate(`/prodotti/${categoryFromEndpoint[endpoint]}/${getId(product.url)}`)} className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative h-52 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={images[idx]}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-all duration-500"
          onError={(e) => { e.target.src = 'https://placehold.co/300x300/e5e7eb/6366f1?text=No+img' }}
        />
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 hover:bg-gray-700 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 hover:bg-gray-700 text-white flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md">›</button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i) }} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`} />
              ))}
            </div>
          </>
        )}
        {product.condition && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${badgeClass}`}>
            {product.condition}
          </span>
        )}
        {product.status === 'VENDUTO' && (
          <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
            <span className="bg-red-600 text-white text-sm font-black px-4 py-1.5 rounded-full tracking-wide rotate-[-8deg] shadow-lg">VENDUTO</span>
          </div>
        )}
        {product.status === 'PRENOTATO' && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">PRENOTATO</span>
        )}
        {!product.status && (
          <span className="absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full bg-black/40 text-white">
            {categoryLabels[endpoint]}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">{product.title}</h3>
        {product.color && <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{product.color}</p>}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">€ {product.price}</span>
          <button
            onClick={e => { e.stopPropagation(); navigate(`/prodotti/${categoryFromEndpoint[endpoint]}/${getId(product.url)}`) }}
            className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
          >
            Dettagli
          </button>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          {!showShare ? (
            <button onClick={handleShare} className="flex items-center gap-1 text-xs text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              {ShareIcons.share} Condividi
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <a href={`https://wa.me/?text=${encodeURIComponent(product.title + ' ' + productUrl)}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} title="WhatsApp" className="w-6 h-6 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white transition-colors">
                {ShareIcons.whatsapp}
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(product.title)}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} title="Telegram" className="w-6 h-6 rounded-full bg-sky-500 hover:bg-sky-400 flex items-center justify-center text-white transition-colors">
                {ShareIcons.telegram}
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} title="Facebook" className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors">
                {ShareIcons.facebook}
              </a>
              <button onClick={copyLink} title="Copia link" className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-colors">
                {copied ? ShareIcons.check : ShareIcons.copy}
              </button>
              <button onClick={e => { e.stopPropagation(); setShowShare(false) }} className="ml-auto text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">✕</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const BrandProductsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [brandName, setBrandName] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const endpoints = ['phone', 'tablet', 'accessori', 'pc']

    fetch(`${BASE}/brand/${id}/`)
      .then(res => res.json())
      .then(data => setBrandName(data.title))
      .catch(() => {})

    Promise.all(
      endpoints.map(ep =>
        fetch(`${BASE}/${ep}/?brand=${id}`)
          .then(res => res.json())
          .then(data => data.map(p => ({ ...p, _endpoint: ep })))
          .catch(() => [])
      )
    ).then(results => {
      setProducts(results.flat())
      setLoading(false)
    })
  }, [id])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            ← Torna indietro
          </button>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">{brandName || '...'}</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {loading ? '...' : `${products.length} prodotti disponibili`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            Nessun prodotto disponibile per questo brand.
          </div>
        )}

        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={`${product._endpoint}-${product.url}`} product={product} endpoint={product._endpoint} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BrandProductsPage

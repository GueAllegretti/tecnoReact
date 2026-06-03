import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'

const OffertaMese = () => {
  const [offerta, setOfferta] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/operatori/`)
      .then(res => res.json())
      .then(data => {
        const featured = data.find(op => op.offerta_mese)
        if (featured) setOfferta(featured)
      })
      .catch(() => {})
  }, [])

  if (!offerta) return null

  const colore = offerta.colore || '#6366f1'

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10"
        style={{ background: `linear-gradient(135deg, ${colore}18 0%, ${colore}08 100%)`, border: `1.5px solid ${colore}30` }}
      >
        {/* Blob decorativo */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ backgroundColor: colore }}
        />

        {/* Logo operatore */}
        <div className="relative shrink-0 flex items-center justify-center">
          {offerta.img ? (
            <img
              src={`${API_URL}${new URL(offerta.img).pathname}`}
              alt={offerta.nome}
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-3xl"
              style={{ background: colore + '12', border: `2px solid ${colore}25` }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          ) : (
            <div
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl flex items-center justify-center font-black text-4xl"
              style={{ backgroundColor: colore + '20', color: colore, border: `2px solid ${colore}40` }}
            >
              {offerta.nome.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Testo */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: colore + '20', color: colore, border: `1px solid ${colore}40` }}
          >
            Offerta del mese
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            {offerta.nome}
          </h2>

          <p className="text-base text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            {offerta.descrizione}
          </p>

          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to={`/operatori/${offerta.id}`}
              className="px-7 py-3 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: colore }}
            >
              Scopri l&apos;offerta →
            </Link>
            <Link
              to="/dove-siamo"
              className="px-7 py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:opacity-80 dark:text-white text-gray-800"
              style={{ borderColor: colore + '50' }}
            >
              Vieni in negozio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffertaMese

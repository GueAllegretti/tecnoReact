import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const OperatoreDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [operatore, setOperatore] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8000/operatori/${id}/`)
      .then(res => { if (!res.ok) throw new Error('Operatore non trovato'); return res.json() })
      .then(data => { setOperatore(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-2xl mx-auto px-4 py-12 space-y-4 animate-pulse">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  }

  const colore = operatore.colore || '#6366f1'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-4 transition-colors">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Torna indietro
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">

        {/* Hero card */}
        <div
          className="rounded-2xl p-8 flex flex-col items-center text-center"
          style={{ backgroundColor: colore + '15', border: `1.5px solid ${colore}30` }}
        >
          {operatore.img ? (
            <img
              src={operatore.img}
              alt={operatore.nome}
              className="w-24 h-24 object-contain rounded-2xl mb-5"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          ) : (
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center font-black text-2xl mb-5"
              style={{ backgroundColor: colore + '20', color: colore }}
            >
              {operatore.nome.substring(0, 2).toUpperCase()}
            </div>
          )}
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">{operatore.nome}</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{operatore.descrizione}</p>
        </div>

        {/* Info card */}
        {operatore.info && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-colors">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Informazioni</h2>
            <div
              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: operatore.info }}
            />
          </div>
        )}

        {/* CTA */}
        <div className="space-y-3">
          <a
            href="tel:+39XXXXXXXXXX"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors"
            style={{ backgroundColor: colore }}
          >
            📞 Chiama per info
          </a>
          <button
            onClick={() => navigate('/')}
            className="w-full py-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm border border-gray-200 dark:border-gray-700 transition-colors"
          >
            Torna alla home
          </button>
        </div>

      </div>
    </div>
  )
}

export default OperatoreDetailPage

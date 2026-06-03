import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'

const Operatori = () => {
  const [operatori, setOperatori] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/operatori/`)
      .then(res => res.json())
      .then(data => setOperatori(data))
      .catch(() => {})
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="text-center mb-10">
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Convenzioni
        </span>
        <h2 className="text-2xl font-bold text-gray-900">Operatori telefonici convenzionati</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Attiva una nuova SIM o cambia operatore direttamente in negozio
        </p>
      </div>

      {operatori.length === 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl h-44" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {operatori.map((op) => (
            <Link
              key={op.id}
              to={`/operatori/${op.id}`}
              className="group flex flex-col items-start gap-4 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              {op.img ? (
                <img
                  src={`${API_URL}${new URL(op.img).pathname}`}
                  alt={op.nome}
                  className="w-16 h-16 object-contain rounded-xl transition-all group-hover:scale-105"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              ) : (
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl tracking-tight transition-all group-hover:scale-105"
                  style={{ backgroundColor: (op.colore || '#6366f1') + '20', color: op.colore || '#6366f1', border: `2px solid ${op.colore || '#6366f1'}40` }}
                >
                  {op.nome.substring(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-base font-bold text-gray-900 dark:text-white">{op.nome}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{op.descrizione}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default Operatori

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-colors">

        <span className="text-2xl shrink-0">🍪</span>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Utilizziamo i cookie
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
            Questo sito utilizza cookie tecnici e di profilazione per migliorare la tua esperienza.
            Puoi accettarli tutti o gestire le tue preferenze.{' '}
            <Link to="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-colors"
          >
            Solo necessari
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors glow-indigo-hover"
          >
            Accetta tutti
          </button>
        </div>

      </div>
    </div>
  )
}

export default CookieBanner

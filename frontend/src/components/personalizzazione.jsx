import { Link } from 'react-router-dom'

const Personalizzazione = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
    <div className="rounded-3xl overflow-hidden bg-gray-900 dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Testo */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <span className="inline-block mb-4 w-fit px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Servizio esclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Personalizza il tuo<br />
            <span className="gradient-text">smartphone</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
            Rendi il tuo dispositivo unico. Cover su misura, pellicole protettive premium e personalizzazioni estetiche applicate direttamente in negozio.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              { icon: '🛡️', label: 'Pellicole protettive premium' },
              { icon: '🎨', label: 'Cover personalizzate' },
              { icon: '✨', label: 'Skin e personalizzazioni estetiche' },
              { icon: '🔧', label: 'Applicazione professionale in negozio' },
            ].map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-gray-300">
                <span>{icon}</span>
                {label}
              </li>
            ))}
          </ul>
          <Link
            to="/dove-siamo"
            className="mt-8 w-fit px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
          >
            Vieni in negozio →
          </Link>
        </div>

        {/* Video placeholder — sostituire src dell'iframe con il link YouTube */}
        <div className="relative bg-gray-800 flex items-center justify-center min-h-64 lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40" />
          <div className="relative flex flex-col items-center gap-4 p-8 text-center">
            <button className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors group">
              <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <p className="text-sm text-gray-400">Video in arrivo</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Personalizzazione

import { Link } from 'react-router-dom'

const offers = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    label: 'Luce',
    color: 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    desc: 'Tariffe energia elettrica competitive con gestione semplice e bollette chiare.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    label: 'Gas',
    color: 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400',
    desc: 'Fornitura gas naturale con prezzi fissi o variabili adatti alle tue esigenze.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
    label: 'Fibra',
    color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
    desc: 'Connessione internet ultraveloce fino a 1 Gbps per casa e ufficio.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    label: 'Mobile',
    color: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    desc: 'Piani voce e dati con le migliori offerte degli operatori selezionati.',
  },
]

const OfferteLuceGas = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
    <div className="text-center mb-10">
      <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
        Tutti i servizi in un unico posto
      </span>
      <h2 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
        Luce, gas, fibra<br />
        <span className="gradient-text">e mobile</span>
      </h2>
      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        Da Tecnopoint puoi attivare in negozio tutte le utenze domestiche e i contratti telefonici, con assistenza dedicata.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {offers.map((o) => (
        <div
          key={o.label}
          className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-start gap-4 transition-colors hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-xl hover:-translate-y-1 duration-200"
        >
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${o.color}`}>
            {o.icon}
          </div>
          <div>
            <h3 className="font-black text-gray-900 dark:text-white text-lg">{o.label}</h3>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{o.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <Link
        to="/dove-siamo"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
      >
        Vieni in negozio per info
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  </section>
)

export default OfferteLuceGas

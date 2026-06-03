import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Ricezione e valutazione',
    desc: 'Ogni dispositivo usato che entra in negozio viene registrato e sottoposto a una prima valutazione visiva e funzionale dal nostro staff tecnico.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Test tecnico approfondito',
    desc: 'Testiamo schermo, batteria, fotocamera, altoparlanti, microfono, connettività Wi-Fi/Bluetooth e tutte le funzioni principali. Ogni anomalia viene documentata.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Ripristino e sanificazione',
    desc: 'Il dispositivo viene ripristinato alle impostazioni di fabbrica, sanificato esternamente e, dove necessario, sottoposto a interventi di pulizia interna.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Classificazione condizione',
    desc: 'Assegniamo al dispositivo una delle tre categorie — Nuovo, Ricondizionato o Usato — in base allo stato estetico e funzionale, con totale trasparenza verso il cliente.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Garanzia inclusa',
    desc: 'Tutti i dispositivi venduti includono una garanzia. In caso di problemi nei termini previsti, ci occupiamo noi della riparazione o sostituzione.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Assistenza post-vendita',
    desc: 'Rimaniamo a disposizione anche dopo l\'acquisto. Vieni in negozio per qualsiasi dubbio, aggiornamento o problema tecnico.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

const conditions = [
  {
    label: 'Nuovo',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
    desc: 'Mai usato o aperto. Confezione integra con tutti gli accessori originali.',
  },
  {
    label: 'Ricondizionato',
    color: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30',
    desc: 'Usato, testato e ripristinato. Può presentare lievi segni estetici non visibili durante l\'uso normale.',
  },
  {
    label: 'Usato',
    color: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
    desc: 'Funzionante e testato. Presenta segni visibili di utilizzo chiaramente indicati nella scheda prodotto.',
  },
]

const ComeFunzionaPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

    {/* Hero */}
    <section className="relative overflow-hidden bg-gray-900 pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Usato garantito
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          Come funziona<br />
          <span className="gradient-text">la nostra garanzia</span>
        </h1>
        <p className="mt-5 text-gray-400 max-w-lg mx-auto leading-relaxed">
          Prima di mettere in vendita un dispositivo usato, lo sottoponiamo a un processo rigoroso di verifica e test. Trasparenza totale, nessuna sorpresa.
        </p>
      </div>
    </section>

    {/* Steps */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 flex flex-col gap-4 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                {step.icon}
              </div>
              <span className="text-3xl font-black text-gray-100 dark:text-gray-800 select-none">{step.num}</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Condizioni */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Le categorie di condizione</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Ogni prodotto è classificato in modo chiaro e trasparente</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {conditions.map((c) => (
          <div key={c.label} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 flex flex-col gap-3 transition-colors">
            <span className={`w-fit text-xs font-semibold px-3 py-1 rounded-full border ${c.color}`}>{c.label}</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
        <h2 className="text-2xl font-black text-white">Pronto a trovare il tuo dispositivo?</h2>
        <p className="mt-2 text-indigo-200 text-sm">Sfoglia il catalogo e acquista con la certezza della qualità Technopoint.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/prodotti/telefoni"
            className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Vedi i telefoni
          </Link>
          <Link
            to="/dove-siamo"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm border border-indigo-400 transition-colors"
          >
            Vieni in negozio
          </Link>
        </div>
      </div>
    </section>

  </div>
)

export default ComeFunzionaPage

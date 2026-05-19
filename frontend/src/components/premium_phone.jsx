const features = [
  {
    icon: '🔬',
    title: 'Display Ultra-Resistente',
    desc: 'Applichiamo pellicole con tecnologia a polimerizzazione UV. La lampada fissa il protettore rendendolo incredibilmente solido, sensibile al tocco e perfetto anche sui bordi curvi.',
    color: '#6366f1',
  },
  {
    icon: '✨',
    title: 'Retro di Design',
    desc: 'Skin personalizzate con texture tattili (Pelle, Snake, Glitter) per cambiare look senza cambiare telefono.',
    color: '#a855f7',
  },
  {
    icon: '📐',
    title: 'Precisione Millimetrica',
    desc: 'Ogni pellicola viene sagomata al momento per il tuo specifico modello di smartphone.',
    color: '#22d3ee',
  },
]

const PremiumPhone = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative rounded-3xl overflow-hidden bg-gray-900 dark:bg-gray-800 border border-gray-700">

        {/* Sfondo decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative px-8 py-12 lg:px-16 lg:py-14">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              Servizio esclusivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Esperienza Premium
            </h2>
            <p className="mt-3 gradient-text text-lg font-bold">
              Protezione UV e Stile Su Misura
            </p>
          </div>

          {/* Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: item.color + '20' }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all glow-indigo-hover">
              Chiedi in negozio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumPhone

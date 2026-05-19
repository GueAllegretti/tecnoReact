const servizi = [
  {
    icon: '🖥️',
    title: 'Vendita e Assistenza',
    desc: 'PC e smartphone delle migliori marche con supporto tecnico specializzato.',
    color: '#6366f1',
  },
  {
    icon: '🎧',
    title: 'Accessori',
    desc: "Un'ampia selezione di prodotti per proteggere e potenziare i tuoi device.",
    color: '#a855f7',
  },
  {
    icon: '🔄',
    title: 'Permuta Usato',
    desc: 'Diamo valore al tuo vecchio dispositivo. Portalo in negozio per una valutazione e passa al livello successivo.',
    color: '#22d3ee',
  },
]

const Servizi = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="relative rounded-3xl overflow-hidden bg-gray-900 dark:bg-gray-800 border border-gray-700">

        {/* Sfondo decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative px-8 py-14 lg:px-16 lg:py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              I nostri servizi
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Soluzioni Tecnologiche<br />
              <span className="gradient-text">su Misura da TechnoPoint</span>
            </h2>
            <p className="mt-4 text-gray-400 text-base">
              In TechnoPoint, la tua tecnologia è in buone mani. Offriamo un ecosistema completo di servizi per garantirti sempre il massimo dai tuoi dispositivi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {servizi.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: item.color + '20' }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-white/10 pt-8">
            <p className="text-gray-300 text-base font-medium italic">
              "Passione, competenza e rapidità al servizio del tuo mondo digitale"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servizi

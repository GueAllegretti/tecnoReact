import OffertaMese from '../components/offertaMese'
import OfferteLuceGas from '../components/offerteLuceGas'

const OffertePage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

    {/* Hero */}
    <section className="relative overflow-hidden bg-gray-900 pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          Convenzioni & Utenze
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          Luce, gas, fibra<br />
          <span className="gradient-text">e mobile</span>
        </h1>
        <p className="mt-5 text-gray-400 max-w-lg mx-auto leading-relaxed">
          Attiva tutte le tue utenze e i contratti telefonici direttamente in negozio, con la consulenza del nostro staff.
        </p>
      </div>
    </section>

    <div className="pt-16">
      <OffertaMese />
      <OfferteLuceGas />
    </div>

  </div>
)

export default OffertePage

import { Link } from 'react-router-dom'

const BannerHome = () => (
  <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-400/10 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-purple-400/10 dark:bg-purple-600/15 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-3xl mx-auto">
      <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight transition-colors">
        Tech &amp; Fibra<br />
        <span className="gradient-text">al tuo servizio</span>
      </h1>
      <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
        Smartphone, tablet, console e accessori. Tutto quello che ti serve, al miglior prezzo.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/prodotti/telefoni"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all glow-indigo-hover"
        >
          Scopri i prodotti
        </Link>
        <Link
          to="/dove-siamo"
          className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-700 transition-all"
        >
          Contattaci
        </Link>
      </div>
    </div>
  </section>
)

export default BannerHome

import { Link } from 'react-router-dom'

const BannerUsato = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 p-10 text-center">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <h2 className="relative text-3xl font-black text-white">Usato garantito 🔒</h2>
      <p className="relative mt-3 text-indigo-200 max-w-md mx-auto">
        Tutti i nostri dispositivi sono testati, verificati e venduti con garanzia.
      </p>
      <Link
        to="/come-funziona"
        className="relative mt-6 inline-block px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
      >
        Scopri come funziona
      </Link>
    </div>
  </section>
)

export default BannerUsato

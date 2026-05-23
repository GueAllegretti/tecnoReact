import { Link } from 'react-router-dom'

const prodotti = [
  { name: 'Telefoni', href: '/prodotti/telefoni' },
  { name: 'Tablet', href: '/prodotti/tablet' },
  { name: 'PC', href: '/prodotti/pc' },
  { name: 'Accessori', href: '/prodotti/accessori' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <span className="text-xl font-black gradient-text tracking-tight">Tecnopoint</span>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Il tuo punto di riferimento per smartphone, tablet, PC e accessori a Roma.
              Nuovo, usato e ricondizionato con garanzia.
            </p>
          </div>

          {/* Prodotti */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Prodotti</h3>
            <ul className="space-y-2">
              {prodotti.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Contatti</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/dove-siamo" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Dove siamo
                </Link>
              </li>
              <li>
                <a href="tel:+39XXXXXXXXXX" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  +39 000 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@tecnopoint.it" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  info@tecnopoint.it
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {year} Tecnopoint. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Roma, Italia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

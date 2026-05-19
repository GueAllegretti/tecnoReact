import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const prodotti = [
  { name: 'Telefoni', href: '/prodotti/telefoni', description: 'Smartphone di tutte le fasce', icon: '📱' },
  { name: 'Tablet', href: '/prodotti/tablet', description: 'Tablet per lavoro e intrattenimento', icon: '💻' },
  { name: 'Accessori', href: '/prodotti/accessori', description: 'Cover, cuffie, caricabatterie e altro', icon: '🎧' },
]

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, toggle } = useTheme()

  const links = [
    { label: 'Dove siamo', to: '/dove-siamo' }
  ]

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Desktop nav */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-black gradient-text tracking-tight">Tecnopoint</span>
            </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none transition-colors">
                    Prodotti
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-indigo-500' : ''}`} />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-xl shadow-2xl p-2">
                      {prodotti.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <span className="block text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.name}</span>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {links.map(({ label, to }) => (
              <Link key={label} to={to} className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambia tema"
            >
              {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <span className="sr-only">Apri menu</span>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col shadow-2xl transition-colors">
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-800">
              <span className="text-lg font-black gradient-text">Tecnopoint</span>
              <button
                type="button"
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-3">Prodotti</p>
              {prodotti.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-200 dark:border-gray-800 mt-4 pt-4 space-y-1">
                {links.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav

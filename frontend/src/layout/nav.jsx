import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const prodotti = [
  { name: 'Telefoni', href: '/prodotti/telefoni', description: 'Smartphone di tutte le fasce' },
  { name: 'Tablet', href: '/prodotti/tablet', description: 'Tablet per lavoro e intrattenimento' },
  { name: 'Accessori', href: '/prodotti/accessori', description: 'Cover, cuffie, caricabatterie e altro' },
]

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 tracking-tight">Tecnopoint</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8">

            {/* Prodotti dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                    Prodotti
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    />
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
                    <Popover.Panel className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-2">
                      {prodotti.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-900">{item.name}</span>
                          <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                        </Link>
                      ))}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Chi siamo
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Contatti
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Apri menu</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
              <span className="text-lg font-bold text-gray-900">Tecnopoint</span>
              <button
                type="button"
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Prodotti</p>
              {prodotti.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-100 mt-4 pt-4 space-y-1">
                <Link
                  to="#"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Chi siamo
                </Link>
                <Link
                  to="#"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Contatti
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav

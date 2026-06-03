const orari = [
  { giorno: 'Lunedì',    orario: '09:00 – 13:00 / 15:30 – 19:30' },
  { giorno: 'Martedì',   orario: '09:00 – 13:00 / 15:30 – 19:30' },
  { giorno: 'Mercoledì', orario: '09:00 – 13:00 / 15:30 – 19:30' },
  { giorno: 'Giovedì',   orario: '09:00 – 13:00 / 15:30 – 19:30' },
  { giorno: 'Venerdì',   orario: '09:00 – 13:00 / 15:30 – 19:30' },
  { giorno: 'Sabato',    orario: '09:00 – 13:00 / 15:30 – 19:00' },
  { giorno: 'Domenica',  orario: 'Chiuso' },
]

const oggi = new Date().toLocaleDateString('it-IT', { weekday: 'long' })
const oggiCapitalized = oggi.charAt(0).toUpperCase() + oggi.slice(1)

const DoveSiamo = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Header */}
      <div className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 py-10 transition-colors">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/5 dark:bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Vieni a trovarci
          </span>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">Dove siamo 📍</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
            P.le dei Caduti della Montagnola, 66/67 — 00142 Roma RM
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Mappa */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <iframe
              title="Technopoint su Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.1!2d12.5097!3d41.8384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a7b5e7c2a2d%3A0x0!2sPiazzale+dei+Caduti+della+Montagnola%2C+66%2C+00142+Roma+RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit&q=P.le+dei+Caduti+della+Montagnola,+66/67,+00142+Roma+RM"
              width="100%"
              height="680"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info laterali */}
          <div className="flex flex-col gap-4">

            {/* Contatti */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-colors">
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Contatti</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-lg shrink-0">📞</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Telefono</p>
                    <a href="tel:+39XXXXXXXXXX" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +39 06 000 0000
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-lg shrink-0">💬</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">WhatsApp</p>
                    <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      Scrivici su WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-lg shrink-0">✉️</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:info@tecnopoint.it" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      info@tecnopoint.it
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-lg shrink-0">📍</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Indirizzo</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                      P.le dei Caduti della Montagnola, 66/67<br />00142 Roma RM
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Orari */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-colors">
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Orari di apertura</h2>
              <ul className="space-y-2">
                {orari.map(({ giorno, orario }) => {
                  const isOggi = giorno === oggiCapitalized
                  const isChiuso = orario === 'Chiuso'
                  return (
                    <li
                      key={giorno}
                      className={`flex justify-between items-center text-sm py-1.5 px-2 rounded-lg transition-colors ${isOggi ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}
                    >
                      <span className={`font-medium ${isOggi ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>
                        {giorno}
                        {isOggi && <span className="ml-1.5 text-xs font-semibold bg-indigo-600 text-white px-1.5 py-0.5 rounded-full">oggi</span>}
                      </span>
                      <span className={isChiuso ? 'text-red-500 dark:text-red-400 font-medium' : 'text-gray-500 dark:text-gray-400'}>
                        {orario}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DoveSiamo

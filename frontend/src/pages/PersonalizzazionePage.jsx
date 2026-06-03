import { useState } from 'react'
import { Link } from 'react-router-dom'

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    alt: 'Cover personalizzata su misura',
    label: 'Cover su misura',
  },
  {
    src: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
    alt: 'Applicazione pellicola protettiva',
    label: 'Pellicola protettiva',
  },
  {
    src: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800&q=80',
    alt: 'Skin personalizzata',
    label: 'Skin personalizzata',
  },
  {
    src: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80',
    alt: 'Cover in silicone colorata',
    label: 'Cover in silicone',
  },
  {
    src: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80',
    alt: 'Personalizzazione estetica',
    label: 'Personalizzazione estetica',
  },
  {
    src: 'https://images.unsplash.com/photo-1583573636659-4e4c2b7f7e9e?w=800&q=80',
    alt: 'Applicazione professionale in negozio',
    label: 'Applicazione in negozio',
  },
]

const services = [
  {
    icon: '🛡️',
    title: 'Pellicole protettive premium',
    desc: 'Vetro temperato e pellicole in TPU ad alta resistenza. Applicazione professionale senza bolle, garantita.',
  },
  {
    icon: '🎨',
    title: 'Cover personalizzate',
    desc: 'Cover rigide, morbide o a libro in decine di colori e fantasie. Possibilità di stampa con foto o loghi.',
  },
  {
    icon: '✨',
    title: 'Skin e wrapping',
    desc: 'Pellicole adesive di design che cambiano completamente l\'aspetto del tuo dispositivo senza danneggiarlo.',
  },
  {
    icon: '🔧',
    title: 'Applicazione professionale',
    desc: 'Tutti i servizi vengono eseguiti direttamente in negozio da personale qualificato, in pochi minuti.',
  },
]

const PersonalizzazionePage = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Servizio esclusivo
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Personalizza il tuo<br />
            <span className="gradient-text">smartphone</span>
          </h1>
          <p className="mt-5 text-gray-400 max-w-lg mx-auto leading-relaxed">
            Rendi il tuo dispositivo unico. Cover su misura, pellicole protettive premium e skin applicate direttamente in negozio dal nostro staff.
          </p>
          <Link
            to="/dove-siamo"
            className="mt-8 inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
          >
            Vieni in negozio →
          </Link>
        </div>
      </section>

      {/* Servizi */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">I nostri servizi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="flex gap-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors">
              <span className="text-3xl shrink-0">{s.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galleria */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">Galleria</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-10">Clicca su un'immagine per ingrandirla</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = 'https://placehold.co/600x600/1f2937/6366f1?text=Foto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-black text-white">Vieni a trovarci</h2>
          <p className="mt-2 text-indigo-200 text-sm">Il servizio viene eseguito in negozio in pochi minuti. Nessuna prenotazione richiesta.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/dove-siamo"
              className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors"
            >
              Dove siamo
            </Link>
            <Link
              to="/prodotti/accessori"
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm border border-indigo-400 transition-colors"
            >
              Vedi gli accessori
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors"
            onClick={() => setLightbox(null)}
          >✕</button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox(i => (i - 1 + gallery.length) % gallery.length) }}
          >‹</button>
          <img
            src={gallery[lightbox].src}
            alt={gallery[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => { e.target.src = 'https://placehold.co/800x800/1f2937/6366f1?text=Foto' }}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox(i => (i + 1) % gallery.length) }}
          >›</button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {gallery[lightbox].label} — {lightbox + 1} / {gallery.length}
          </p>
        </div>
      )}

    </div>
  )
}

export default PersonalizzazionePage

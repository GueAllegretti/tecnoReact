import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Telefoni',
    href: '/prodotti/telefoni',
    icon: '📱',
    imageSrc: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  },
  {
    name: 'Tablet',
    href: '/prodotti/tablet',
    icon: '💻',
    imageSrc: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
  },
  {
    name: 'PC',
    href: '/prodotti/pc',
    icon: '🖥️',
    imageSrc: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80',
  },
  {
    name: 'Accessori',
    href: '/prodotti/accessori',
    icon: '🎧',
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  },
]

const Categorie = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
    <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorie</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={cat.href}
          className="group relative rounded-2xl overflow-hidden h-52 bg-gray-200 dark:bg-gray-800 glow-indigo-hover transition-all duration-300 hover:-translate-y-1"
        >
          <img
            src={cat.imageSrc}
            alt={cat.name}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 dark:opacity-50 group-hover:opacity-80 dark:group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="text-2xl block mb-1">{cat.icon}</span>
            <span className="text-base font-bold text-white">{cat.name}</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
)

export default Categorie

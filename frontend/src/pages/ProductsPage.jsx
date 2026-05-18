import { useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'

const categoryMap = {
  telefoni: 'phone',
  tablet: 'tablet',
  accessori: 'accessori',
}

const categoryLabels = {
  telefoni: 'Telefoni',
  tablet: 'Tablet',
  accessori: 'Accessori',
}

const ProductsPage = () => {
  const { category } = useParams()
  const endpoint = categoryMap[category]
  const { products, loading, error } = useProducts(endpoint)

  if (!endpoint) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
        Categoria non trovata.
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">
        {categoryLabels[category]}
      </h1>

      {loading && (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-md h-64 w-full" />
              <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
              <div className="mt-2 h-4 bg-gray-200 rounded w-1/4" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-16 text-red-500">
          {error}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          Nessun prodotto disponibile.
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.url} className="group relative">
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                <img
                  src={`http://localhost:8000${new URL(product.img).pathname}`}
                  alt={product.title}
                  className="w-full h-full object-center object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image' }}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.title}
                  </h3>
                  {product.color && (
                    <p className="mt-1 text-xs text-gray-500">{product.color}</p>
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900 ml-4 shrink-0">
                  € {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsPage

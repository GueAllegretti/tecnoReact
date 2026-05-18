import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:8000'

export function useProducts(category) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`${BASE_URL}/${category}/`)
      .then((res) => {
        if (!res.ok) throw new Error('Errore nel caricamento')
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [category])

  return { products, loading, error }
}

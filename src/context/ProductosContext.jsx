// Context tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir la MISMA informacion entre diferentes niveles de componentes
// Context esta disponible a partir de la v16 de React
import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

// Para usar context, necesitamos seguir una serie de pasos

// 1 Creacion del contexto vacio
const ProductosContext = createContext()

// 2 Creacion del Componente Proveedor del contexto
// Es decir, maneja de donde se obtiene y como pasa la informacion

function ProductProvider (props) {
  const [productos, setProductos] = useState([])// Lista de productos
  const [loading, setLoading] = useState(true)// Ya se cargo la info (Loader)
  const [selectedProduct, setSelectedProduct] = useState({}) // Info de la cancion selecionada
  const [search, setSearch] = useState('')
  // Simulo llamada a la API de la lista de canciones
  const options = {
    method: 'GET',
    url: 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item',
    mode: 'cors'
  }
  useEffect(() => {
    axios.request(options)
      .then((response) => {
        console.log(response.data)
        setProductos(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const value = {
    productos,
    loading,
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch,
    setLoading
  }

  return (
    <ProductosContext.Provider value={value}>
      {props.children}
    </ProductosContext.Provider>
  )
}

// Consumidor  del contexto
// Brinda acceso a la data de los componentes

const useProductosContext = () => {
  const context = useContext(ProductosContext)
  return context
}

// 4 Exportar las funciones del Provider y el Consumer
// Para que puedan ser invocados en nuestros componentes
export {
  ProductProvider,
  useProductosContext
}

// Uso de context
// 5 ahora debemos de ir a componente superior (por ejemplo Home)
// y envolver a los componentes que necesitan la informacion del contexto

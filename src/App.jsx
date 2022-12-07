import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import RoutesIndex from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductosContext'

function App () {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ProductProvider>
        <NavBar />
        <RoutesIndex />
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App

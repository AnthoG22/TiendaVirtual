import React from 'react'
import Productos from '../../components/Productos'
import { useProductosContext } from '../../context/ProductosContext'

const Home = () => {
  const context = useProductosContext()

  return (
    <div>
      Home
      <Productos key='productos' />
    </div>
  )
}

export default Home

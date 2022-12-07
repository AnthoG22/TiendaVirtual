import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import CardProductos from '../CardProductos'
import { useProductosContext } from '../../context/ProductosContext'
import './productos.css'

const Productos = () => {
  const context = useProductosContext()
  return (
    <>
      <Grid container spacing={2} marginTop='2rem'>
        {
          context.loading
            ? <h1>Cargando........................................</h1>
            : context.productos.filter(producto => {
              if (context.search === '') {
                return producto // Si la busqueda es vacia, retornar todas las canciones
              } else if (producto.product_name.toLowerCase().includes(context.search.toLowerCase())) {
                return producto // Retorno la cancion que cumple con el criterio de busqueda
              }
              return null // Ninguna cancion coincide
            }).map((producto) => {
              return (
                <CardProductos key={producto.id} item={producto} />
              )
            })
        }
      </Grid>
    </>
  )
}

export default Productos

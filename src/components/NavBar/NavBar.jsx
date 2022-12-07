import React from 'react'
import { Link } from 'react-router-dom'
import { useProductosContext } from '../../context/ProductosContext'
import './navBar.scss'

const NavBar = () => {
  const context = useProductosContext()
  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>LOGO</Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link header__item-link--is-active'>Home</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/login' className='header__item-link'>Login</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/signup' className='header__item-link'>Signup</Link>
        </li>
      </ul>
      <input type='search' onChange={handleSearch} />
    </nav>
  )
}

export default NavBar

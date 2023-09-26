import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='0021'>
                <ShoppingCart size={32}/>
                </Link>

        </div>
    </div>
  )
}

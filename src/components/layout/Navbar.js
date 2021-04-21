import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/'>EtherNote</Link>
        <ul className='nav_links'>
          <li>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

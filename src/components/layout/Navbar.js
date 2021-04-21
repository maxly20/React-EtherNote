import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <a href='#'>EtherNote</a>
        <ul className='nav_links'>
          <li>
            <a href='#'>Sass</a>
          </li>
          <li>
            <a href='#'>Com</a>
          </li>
          <li>
            <a href='#'>JS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

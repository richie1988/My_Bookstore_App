import React from 'react';
import NavMenuItem from './Navigation';

const NavLinks = () => (
  <header className="nav-container">
    <nav id="NavLinks">
      <ul>
        <h1>RICHARDS Bookstore</h1>
        <NavMenuItem to="./">Books</NavMenuItem>
        <NavMenuItem to="/categories">Categories</NavMenuItem>
      </ul>
    </nav>
  </header>
);

export default NavLinks;

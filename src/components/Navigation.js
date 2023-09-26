import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

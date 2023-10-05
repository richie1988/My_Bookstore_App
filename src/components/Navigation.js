import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavMenuItem = ({ to, children }) => (
  <li>
    <NavLink to={to}>
      {children}
    </NavLink>
  </li>
);

NavMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavMenuItem;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <div className="nav-container">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/books">Books</Link>
//           </li>
//           <li>
//             <Link to="/categories">Categories</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;

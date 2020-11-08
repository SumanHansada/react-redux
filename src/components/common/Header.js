import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const actveStyle = { color: '#F15B2A' };

  return (
    <nav>
      <NavLink to="/" activeStyle={actveStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={actveStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	const activeStyle = { color: '#F14B2A' };

	return (
		<nav>
			<NavLink to="/" activeStyle={activeStyle} exact>
				Home
			</NavLink>
			{' | '}
			<NavLink to="/courses" activeStyle={activeStyle} exact>
				Courses
			</NavLink>
			{' | '}
			<NavLink to="/about" activeStyle={activeStyle} exact>
				About
			</NavLink>
		</nav>
	);
}

export default Header;

import React from 'react';

// Types
export interface MenuProps {}

const Menu:React.FC<MenuProps> = () => {
	return (
		<ul className="menu">
			<li className="menu-item">
				<a href="http://www.google.com" className="menu-link">About</a>
				<a href="http://www.google.com" className="menu-link">Teams</a>
				<a href="http://www.google.com" className="menu-link">Portfolio</a>
			</li>
		</ul>
	);
};

export default Menu;

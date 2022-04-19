import React from 'react';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import LangSelector from 'components/LangSelector';
import { BiCalendarCheck } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';

// Types
export interface HeaderProps {}

const Header:React.FC<HeaderProps> = () => {
	return (
		<div className="header">
			<div className="brand">
				<Logo />
			</div>
			<div className="navbar">
				<Menu/>
				<LangSelector/>
				<div className="socials">
					<a href="http://www.google.com" className="socials-icon">
						<BiCalendarCheck size={20}/>
					</a>
					<a href="http://www.google.com" className="socials-icon">
						<FaLinkedinIn size={20}/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;

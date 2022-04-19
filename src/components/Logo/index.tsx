import React from "react";
import LogoSqd from "../../assets/images/logo.png";
import {Link} from "react-router-dom";

const Logo = () => {
	return (
		<a href="/" className="logo">
			<img src={LogoSqd} alt="" className="logo" />
		</a>
	);
};

export default Logo;

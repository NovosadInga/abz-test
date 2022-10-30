import React from 'react';
import logo from "./../../assets/img/logo.svg"
import { Link } from 'react-scroll'
export interface IHeaderProps {

}
const Header: React.FC<IHeaderProps> = () => {
	return (
		<header className='header'>
			<div className="container">
				<div className='header-wrap'>
					<nav className="navbar">
						<img className="navbar" src={logo} alt="logo" width="104px" height="34px" />
						<div className="header-buttons">
							<Link className="navbar__button button" to="users" spy={true} smooth={true} duration={700} >Users</Link>
							<Link className="navbar__button button" to="signup" spy={true} smooth={true} duration={700} >Sign up</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
export default Header

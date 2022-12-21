import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import {
	Nav,
	NavContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink,
} from './styles';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const handleScroll = () =>
		window.scrollY === 0 ? setScrollNav(false) : setScrollNav(true);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Nav scrollNav={scrollNav}>
			<NavContainer>
				<NavLogo to="hero" smooth={true} duration={500} offset={-80}>
					dolla
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLink
							to="about"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="discover"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Discover
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="services"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Services
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="signup"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Sign Up
						</NavLink>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="signin">Sign In</NavBtnLink>
				</NavBtn>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;

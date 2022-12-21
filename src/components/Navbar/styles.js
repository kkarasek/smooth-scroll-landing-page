import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Nav = styled.nav`
	display: flex;
	/* background: #100f0f; */
	background: ${({ scrollNav }) =>
		scrollNav ? 'rgba(16, 15, 15)' : 'rgba(16, 15, 15, 0.6)'};
	color: #f7f7f7;
	height: 80px;
	align-items: center;
	justify-content: space-evenly;
	position: sticky;
	top: 0;
	z-index: 10;
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1100px;
	padding: 0 24px;
	opacity: 1;
`;

export const NavLogo = styled(ScrollLink)`
	font-size: 2rem;
	font-weight: bold;
	color: #f7f7f7;
	text-decoration: none;
	margin-left: 24px;
	cursor: pointer;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: flex;
		font-size: 1.8rem;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	list-style: none;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	display: flex;
	align-items: center;
`;

export const NavLink = styled(ScrollLink)`
	color: #f7f7f7;
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	padding: 10px;
	height: 100%;
	transition: 0.2s ease-in-out;

	&.active {
		border-bottom: 3px solid #01bf71;
		/* margin-bottom: -3px; */
	}
`;

export const NavBtn = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	background-color: #01bf71;
	padding: 10px 20px;
	border-radius: 50px;
	font-size: 1.1rem;
	color: #f7f7f7;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #100f0f;
		color: #01bf71;
		outline: 1px solid #01bf71;
	}
`;

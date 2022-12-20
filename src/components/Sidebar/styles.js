import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const SideBarContainer = styled.aside`
	position: fixed;
	z-index: 21;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const BlurredBackdrop = styled.div`
	width: 100%;
	height: 100%;
	/* background-color: #100f0f; */
	background-color: rgba(16, 15, 15, 0.9);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(10px);
`;

export const CloseIcon = styled.div`
	font-size: 2rem;
	color: #f7f7f7;
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	cursor: pointer;
`;

export const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 60px);
	}
`;

export const SidebarLinkWrapper = styled.div`
	color: #f7f7f7;
	font-size: 1.5rem;
	padding: 15px 0px;
`;

export const SidebarLink = styled(ScrollLink)`
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: #01bf71;
	}
`;

export const SidebarBtn = styled.div`
	display: flex;
	align-items: center;
	margin-top: 50px;
`;

export const SidebarBtnLink = styled(Link)`
	background-color: #01bf71;
	padding: 10px 40px;
	border-radius: 50px;
	font-size: 1.2rem;
	color: #f7f7f7;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #100f0f;
		color: #01bf71;
		outline: 1px solid #01bf71;
	}
`;

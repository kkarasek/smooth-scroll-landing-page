import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

import {
	SideBarContainer,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SidebarLinkWrapper,
	SidebarBtn,
	SidebarBtnLink,
	BlurredBackdrop,
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SideBarContainer isOpen={isOpen} onClick={toggle}>
				<BlurredBackdrop>
					<CloseIcon>
						<FaTimes />
					</CloseIcon>
					<SidebarMenu>
						<SidebarLinkWrapper>
							<SidebarLink
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								onClick={toggle}
							>
								About
							</SidebarLink>
						</SidebarLinkWrapper>
						<SidebarLinkWrapper>
							<SidebarLink
								to="discover"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								onClick={toggle}
							>
								Discover
							</SidebarLink>
						</SidebarLinkWrapper>
						<SidebarLinkWrapper>
							<SidebarLink
								to="services"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								onClick={toggle}
							>
								Services
							</SidebarLink>
						</SidebarLinkWrapper>
						<SidebarLinkWrapper>
							<SidebarLink
								to="signup"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
								onClick={toggle}
							>
								Sign Up
							</SidebarLink>
						</SidebarLinkWrapper>
					</SidebarMenu>
					<SidebarBtn>
						<SidebarBtnLink to="/signin">Sign In</SidebarBtnLink>
					</SidebarBtn>
				</BlurredBackdrop>
			</SideBarContainer>
		</>
	);
};

export default Sidebar;

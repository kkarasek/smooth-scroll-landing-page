import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const FooterElement = styled.footer`
	/* background-color: #100f0f; */
	background-color: black;
`;

export const FooterContainer = styled.div`
	padding: 64px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: grid;
	grid-template-columns: 160px 160px 160px 160px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 160px 160px;
		gap: 40px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #f7f7f7;
`;

export const FooterLinkTitle = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
`;

export const FooterLink = styled.a`
	color: #f7f7f7;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;
	transition: 0.2s ease-out;
	cursor: pointer;

	&:hover {
		color: #01bf71;
	}
`;

export const SocialMediSection = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 80px auto 0 auto;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 25px;
	}
`;

export const SocialLogo = styled(ScrollLink)`
	color: #f7f7f7;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #01bf71;
	}
`;

export const WebsiteRights = styled.small`
	color: #f7f7f7;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 180px;
`;

export const SocialIconLink = styled.a`
	font-size: 24px;
	color: #f7f7f7;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #01bf71;
	}
`;

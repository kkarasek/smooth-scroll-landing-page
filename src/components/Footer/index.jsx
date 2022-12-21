import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitch,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterElement,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkTitle,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMediaContainer,
	SocialMediSection,
	WebsiteRights,
} from './styles';

const Footer = () => {
	return (
		<>
			<FooterElement>
				<FooterContainer>
					<FooterLinksContainer>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>About Us</FooterLinkTitle>
								<FooterLink to="#">How It Works</FooterLink>
								<FooterLink to="#">Testimonials</FooterLink>
								<FooterLink to="#">Careers</FooterLink>
								<FooterLink to="#">Investors</FooterLink>
								<FooterLink to="#">Terms of Service</FooterLink>
							</FooterLinkItems>

							<FooterLinkItems>
								<FooterLinkTitle>Videos</FooterLinkTitle>
								<FooterLink to="#">Submit Video</FooterLink>
								<FooterLink to="#">Ambassadors</FooterLink>
								<FooterLink to="#">Agency</FooterLink>
								<FooterLink to="#">Influencers</FooterLink>
							</FooterLinkItems>

							<FooterLinkItems>
								<FooterLinkTitle>Contact Us</FooterLinkTitle>
								<FooterLink to="#">Contact</FooterLink>
								<FooterLink to="#">Support</FooterLink>
								<FooterLink to="#">Destinations</FooterLink>
								<FooterLink to="#">Sponsorships</FooterLink>
							</FooterLinkItems>

							<FooterLinkItems>
								<FooterLinkTitle>Social Media</FooterLinkTitle>
								<FooterLink to="#">Instagram</FooterLink>
								<FooterLink to="#">Facebook</FooterLink>
								<FooterLink to="#">YouTube</FooterLink>
								<FooterLink to="#">Twitter</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
					</FooterLinksContainer>
					<SocialMediSection>
						<SocialMediaContainer>
							<SocialLogo to="hero" smooth={true} duration={500} offset={-80}>
								dolla
							</SocialLogo>
							<WebsiteRights>
								dolla © {new Date().getFullYear()} all rights reserved
							</WebsiteRights>
							<SocialIcons>
								<SocialIconLink
									href="https://www.facebook.com"
									aria-label="Facebook"
								>
									<FaFacebook />
								</SocialIconLink>

								<SocialIconLink
									href="https://www.instagram.com"
									aria-label="Instagram"
								>
									<FaInstagram />
								</SocialIconLink>

								<SocialIconLink
									href="https://www.twitter.com"
									aria-label="Twitter"
								>
									<FaTwitter />
								</SocialIconLink>

								<SocialIconLink
									href="https://www.youtube.com"
									aria-label="YouTube"
								>
									<FaYoutube />
								</SocialIconLink>

								<SocialIconLink
									href="https://www.linkedin.com"
									aria-label="Linkedin"
								>
									<FaLinkedin />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaContainer>
					</SocialMediSection>
				</FooterContainer>
			</FooterElement>
		</>
	);
};

export default Footer;

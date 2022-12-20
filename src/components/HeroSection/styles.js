import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { IoMdArrowForward } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const HeroSection = styled.section`
	width: 100%;
	height: 800px;
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	padding: 0 30px;
	position: relative;
	margin-top: -80px;

	:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBackground = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
`;

export const BackgroundVideo = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 2;
	max-width: 1100px;
	/* position: absolute; */
	padding: 9px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const HeroH1 = styled.h1`
	color: #f7f7f7;
	font-size: 3rem;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: #f7f7f7;
	font-size: 1.5rem;
	text-align: center;
	max-width: 600px;

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}

	@media screen and (max-width: 440px) {
		font-size: 14px;
	}
`;

export const HeroBtnWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 32px;
`;

export const HeroButtonLink = styled(ScrollLink)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? '#01bf71' : '#f7f7f7')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? 'black' : 'white')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: ${({ primary }) => (primary ? '#f7f7f7;' : '#01bf71')};
	}
`;

export const ArrowForward = styled(IoMdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;

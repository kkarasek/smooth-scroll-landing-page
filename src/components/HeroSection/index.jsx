import React, { useState } from 'react';

import Video from '../../videos/background-video.mp4';
import { Button } from '../Button/styles';

import {
	ArrowForward,
	ArrowRight,
	BackgroundVideo,
	HeroBackground,
	HeroBtnWrapper,
	HeroContent,
	HeroH1,
	HeroP,
	HeroSection,
} from './styles';

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<>
			<HeroSection id="hero">
				<HeroBackground>
					<BackgroundVideo autoPlay loop muted src={Video} type="video/mp4" />
				</HeroBackground>
				<HeroContent>
					<HeroH1>Virtual Banking Made Easy</HeroH1>
					<HeroP>
						Sign up for a new account today and receive $250 in credit towards
						your next payment
					</HeroP>
					<HeroBtnWrapper>
						<Button
							to="about"
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary="true"
							dark="true"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							Get Started {hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</HeroSection>
		</>
	);
};

export default Hero;

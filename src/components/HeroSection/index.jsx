import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
					<BackgroundVideo
						autoPlay
						loop
						muted
						playsInline
						src={Video}
						type="video/mp4"
					/>
				</HeroBackground>
				<HeroContent>
					<HeroH1>Virtual Banking Made Easy</HeroH1>
					<TypeAnimation
						sequence={[
							'Sign up for a new account today and receive $250 in credit towards your next payment',
							500,
						]}
						speed={40}
						wrapper={HeroP}
						repeat={Infinity}
					/>
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

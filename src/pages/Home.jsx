import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/HeroSection';
import Info from '../components/InfoSection';
import Discover from '../components/DiscoverSection';
import { aboutSectionData, signUpSectionData } from '../data/data';
import Services from '../components/ServicesSection';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Hero />
			<Info {...aboutSectionData} primary={true} to={'discover1'} />
			<Discover />
			<Services />
			<Info {...signUpSectionData} primary={true} to={'hero'} />
		</>
	);
};

export default Home;

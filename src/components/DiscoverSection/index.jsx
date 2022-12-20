import React from 'react';

import Info from '../InfoSection';
import { discover1SectionData, discover2SectionData } from '../../data/data';

const Discover = () => {
	return (
		<section id="discover">
			<Info {...discover1SectionData} primary={false} to={'discover2'} />
			<Info {...discover2SectionData} primary={true} to={'signup'} />
		</section>
	);
};

export default Discover;

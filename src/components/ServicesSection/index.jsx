import React from 'react';

import savings from '../../images/savings.svg';
import desk from '../../images/desk.svg';
import revenue from '../../images/revenue.svg';

import {
	ServicesCard,
	ServicesH1,
	ServicesH2,
	ServicesIcon,
	ServicesP,
	ServicesSection,
	ServicesWrapper,
} from './styles';

const Services = () => {
	return (
		<>
			<ServicesSection id="services">
				<ServicesH1> Our Services</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={savings} alt="savings" />
						<ServicesH2>Reduce expenses</ServicesH2>
						<ServicesP>
							We help reduce your fees and increase your overall revenue.
						</ServicesP>
					</ServicesCard>

					<ServicesCard>
						<ServicesIcon src={desk} alt="desk" />
						<ServicesH2>Virtual offices</ServicesH2>
						<ServicesP>
							You can access our platform anywhere in the world.
						</ServicesP>
					</ServicesCard>

					<ServicesCard>
						<ServicesIcon src={revenue} alt="revenue" />
						<ServicesH2>Premium benefits</ServicesH2>
						<ServicesP>
							Unlock our special membership card that returns 5% cash back.
						</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesSection>
		</>
	);
};

export default Services;

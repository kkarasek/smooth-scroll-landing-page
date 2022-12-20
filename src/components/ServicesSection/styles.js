import styled from 'styled-components';

export const ServicesSection = styled.section`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f7f7f7;
	color: #100f0f;

	@media screen and (max-width: 1000px) {
		height: 1100px;
	}

	@media screen and (max-width: 768px) {
		padding: 100px 0px;
		height: 1300px;
	}
`;

export const ServicesH1 = styled.h1`
	font-size: 3rem;
	margin-bottom: 80px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ServicesWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	justify-content: center;
	gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ServicesCard = styled.div`
	background: #f7f7f7;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	/* max-height: 340px; */
	height: 304px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
	transition: 0.1s ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

export const ServicesIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
	color: #100f0f;
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const ServicesP = styled.p`
	color: #100f0f;

	font-size: 1rem;
	text-align: center;
`;

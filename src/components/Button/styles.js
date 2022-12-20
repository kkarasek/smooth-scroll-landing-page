import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const Button = styled(ScrollLink)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? '#01bf71' : '#100f0f')};
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
		background: ${({ primary }) => (primary ? '#f7f7f7;' : '#01bf71;')};
		color: black;
	}
`;

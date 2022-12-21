import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
	min-height: 692px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 0;
	overflow: hidden;
	background: linear-gradient(
		180deg,
		rgba(1, 147, 86, 1) 0%,
		rgba(10, 201, 122, 1) 100%
	);
`;

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		height: 80%;
	}
`;

export const Icon = styled(Link)`
	margin-left: 218px;
	margin-top: 19.5px;
	text-decoration: none;
	color: #f7f7f7;
	font-weight: bold;
	font-size: 32px;

	@media screen and (max-width: 480px) {
		margin-left: 16px;
		margin-top: 8px;
	}
`;

export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 18px;
	}
`;

export const Form = styled.form`
	background: #f7f7f7;
	color: #100f0f;
	max-width: 480px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 80px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 480px) {
		padding: 32px 32px;
	}
`;

export const FormH1 = styled.h1`
	margin-bottom: 40px;
	color: #100f0f;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;

export const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #100f0f;
`;

export const FormInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`;

export const FormButton = styled.button`
	background: #01bf71;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #100f0f;
	font-size: 20px;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: #100f0f;
	font-size: 14px;
	cursor: pointer;
`;

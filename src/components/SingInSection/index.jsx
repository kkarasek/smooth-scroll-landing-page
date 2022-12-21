import React from 'react';
import {
	FormButton,
	FormContent,
	Form,
	FormH1,
	FormInput,
	FormLabel,
	FormWrap,
	Icon,
	SignInContainer,
	Text,
} from './styles';

const SignInComponent = () => {
	return (
		<>
			<SignInContainer>
				<FormWrap>
					<Icon to="/">dolla</Icon>
					<FormContent>
						<Form action="#">
							<FormH1>Sign in to your account</FormH1>
							<FormLabel htmlFor="email">Email</FormLabel>
							<FormInput id="email" type="email" required />
							<FormLabel htmlFor="password">Password</FormLabel>
							<FormInput id="password" type="password" required />
							<FormButton type="submit">Continue</FormButton>
							<Text>Forgot password?</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</SignInContainer>
		</>
	);
};

export default SignInComponent;

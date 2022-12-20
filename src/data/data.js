// const logo = require('../images/svg-1.svg');
import payment from '../images/payment.svg';
import world from '../images/world.svg';
import mobile from '../images/mobile_confirmed.svg';
import join from '../images/join.svg';

export const aboutSectionData = {
	id: 'about',
	lightBg: false,
	lightText: true,
	darkTextDesc: false,

	topLine: 'Premium Bank',
	headline: 'Unlimited transactions with zero fees',
	description:
		'Get access to our exclusive app that allows you to send unlimited transactions without being charged any fees.',
	buttonLabel: 'Learn More',
	imgStart: false,
	imgSrc: payment,
	alt: 'payment',
};

export const discover1SectionData = {
	id: 'discover1',
	lightBg: true,
	lightText: false,
	darkTextDesc: true,
	topLine: 'Unlimited Access',
	headline: 'Login to your account at any time',
	description:
		'We have you covered o matter where you are located. All you need is an internet connection and a phone or computer.',
	buttonLabel: 'Find Out',
	imgStart: true,
	imgSrc: world,
	alt: 'world',
};

export const discover2SectionData = {
	id: 'discover2',
	lightBg: false,
	lightText: true,
	darkTextDesc: false,
	topLine: 'Try It Yourself',
	headline: 'Everything you need in one app',
	description:
		"Whether you need an online currency exchange, swift cash withdrawal or contactless payment, it's all avaliable in just a few clicks.",
	buttonLabel: 'See How',
	imgStart: false,
	imgSrc: mobile,
	alt: 'mobile',
};

export const signUpSectionData = {
	id: 'signup',
	lightBg: false,
	lightText: true,
	darkTextDesc: false,
	topLine: 'Join our Team',
	headline: 'Creating an account is extremely easy',
	description:
		"Get everything set up in under 10 minutes. All you need is to fill the online form and you're ready to go.",
	buttonLabel: 'Start Now',
	imgStart: true,
	imgSrc: join,
	alt: 'join',
};

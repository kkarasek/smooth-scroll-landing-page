import React from 'react';

import { Button } from '../Button/styles';
import {
	Column1,
	Column2,
	Heading,
	Img,
	InfoBtnWrapper,
	InfoImgWrapper,
	InfoRow,
	InfoSection,
	InfoWrapper,
	Subtitle,
	TextWrapper,
	TopLine,
} from './styles';

const Info = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkTextDesc,
	description,
	buttonLabel,
	imgSrc,
	alt,
	primary,
	to,
}) => {
	return (
		<>
			<InfoSection lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkTextDesc}>{description}</Subtitle>
								<InfoBtnWrapper>
									<Button
										to={to}
										primary={primary ? 1 : 0}
										smooth={true}
										duration={500}
										spy={true}
										offset={-80}
									>
										{buttonLabel}
									</Button>
								</InfoBtnWrapper>
							</TextWrapper>
						</Column1>
						<Column2>
							<InfoImgWrapper>
								<Img src={imgSrc} alt={alt} />
							</InfoImgWrapper>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoSection>
		</>
	);
};

export default Info;

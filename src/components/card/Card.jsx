import {
	StyledCard,
	StyledCardButton,
	StyledCardLogo,
	StyledCardText,
	StyledCardTitle
} from './card.styles';

const Card = ({ logo, title, text, color }) => {
	return (
		<StyledCard $color={color}>
			<StyledCardLogo src={logo} alt='Sedan icon' />
			<StyledCardTitle>{title}</StyledCardTitle>
			<StyledCardText>{text}</StyledCardText>
			<StyledCardButton $color={color}>Learn More</StyledCardButton>
		</StyledCard>
	);
};

export default Card;

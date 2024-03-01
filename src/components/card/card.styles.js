import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ $color }) => $color};
	color: white;
	width: 326px;
	height: 216px;
	font-family: 'Lexend Deca', sans-serif;
	margin: 25px;
	align-items: center;
	border-radius: 10px;
`;

const StyledCardLogo = styled.img`
	width: 1rem;
	margin-top: 10px;
	position: absolute;
	margin-top: 30px;
`;

const StyledCardTitle = styled.h2`
	font-size: 3.5rem;
	margin-bottom: 0rem;
`;

const StyledCardText = styled.p`
	width: 13.25rem;
	font-size: 0.9375rem;
	margin: 0;
	width: fit-content;
	color: #8c98c6;
`;

export { StyledCard, StyledCardLogo, StyledCardText, StyledCardTitle };

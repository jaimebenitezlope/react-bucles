import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ $color }) => $color};
	color: white;
	padding: 3rem;
	width: 327px;
	height: 442px;
	font-family: 'Lexend Deca', sans-serif;
`;

const StyledCardLogo = styled.img`
	width: 4rem;
`;

const StyledCardTitle = styled.h2`
	font-size: 2.5rem;
	font-family: 'Big shoulders display', sans-serif;
	margin-bottom: 1.5625rem;
`;

const StyledCardText = styled.p`
	width: 13.25rem;
	font-size: 0.9375rem;
	line-height: 1.5625rem;
	margin: 0;
	width: fit-content;
`;

const StyledCardButton = styled.button`
	margin-top: auto;
	width: 146px;
	padding: 0.6875rem 1.9375rem;
	border: none;
	border-radius: 1.5625rem;
	color: ${({ $color }) => $color};
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: transparent;
			color: white;
			border: 1px solid white;
		}
	}
`;

export {
	StyledCard,
	StyledCardButton,
	StyledCardLogo,
	StyledCardText,
	StyledCardTitle
};

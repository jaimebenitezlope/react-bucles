import styled from 'styled-components';

const StyledMainContainer = styled.div`
	width: 327px;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	border-radius: 0.5rem;

	@media screen and (width >= 768px) {
		display: flex;
		justify-content: center;
		width: fit-content;
	}
`;

export { StyledMainContainer };

import styled from 'styled-components';

const StyledMainContainer = styled.div`
	width: 375px;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	background-color: #20222f;
	@media screen and (width >= 768px) {
		display: flex;
		justify-content: center;
		width: fit-content;
	}
`;

export { StyledMainContainer };

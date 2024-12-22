import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;
	z-index: 10;
	div {
		font-size: 18px;
	}

	span {
		color: ${({ theme }) => theme.accentPurple};
	}
`;

export const CardImage = styled.div`
	width: 5rem;
	height: 5rem;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 100%;
	margin: 0 auto 1rem;
`;

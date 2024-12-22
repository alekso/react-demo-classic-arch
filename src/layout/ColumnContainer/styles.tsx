import styled from "styled-components";

export const Column = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
	z-index: 10;
	@media screen and (max-width: 1000px) {
		width: 100%;
	}
`;

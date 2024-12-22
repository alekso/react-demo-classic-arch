import styled from "styled-components";

export const Logo = styled.a`
	display: block;
	font-size: 2rem;
	cursor: pointer;

	span {
		color: ${({ theme }) => theme.accentPurple};
	}
`;
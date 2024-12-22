import styled from "styled-components";

export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 2rem 3rem;
	align-items: center;
    position: relative;
    z-index: 10;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const MenuContainer = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: end;
	align-items: center;
`;

export const Menu = styled.div`
	display: flex;
	gap: 1rem;

	a,
	span {
		font-size: 1.125rem;
		color: inherit;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	a:focus,
	a:hover,
	span:hover {
		text-decoration: none;
		color: ${({ theme }) => theme.accentPurple};
	}
`;

import styled from "styled-components";

export const LoggedInUserContainer = styled.div`
	border-left: 2px solid ${({ theme }) => theme.fontColor};
	display: flex;
	flex-direction: column;
	padding: 0 0 0 1.5rem;

	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const UserFullname = styled.p`
	font-size: 0.875rem;
`;
export const UserEmail = styled.p`
	font-size: 0.75rem;
	opacity: 70%;
`;

import styled from "styled-components";

export const TableTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

export const TableTitle = styled.h5`
	font-weight: 400;
	color: ${({ theme }) => theme.primaryColor};
`;

export const TableInput = styled.input`
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.borderColor};
	outline: none;
	padding: 0.7rem 1rem;
	border-radius: 12px;
	background-color: transparent;
	color: ${({ theme }) => theme.fontColor};

	&:focus {
		outline: none;
		border: 1px solid ${({ theme }) => theme.accentPurple};
	}
`;

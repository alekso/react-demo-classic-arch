import styled from "styled-components";

type ButtonProps = {
	$isFullWidth?: boolean;
};

export const Button = styled.button<ButtonProps>`
	padding: 1rem 3rem;
	background-color: ${({ theme }) => theme.accentPurple};
	border: none;
	color: white;
	cursor: pointer;
	border-radius: 24px;
	margin-top: 1rem;
	width: ${({ $isFullWidth }) => ($isFullWidth ? "100%" : "fit-content")};

	&:hover {
		background-color: ${({ theme }) => theme.accentPurpleDark};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.accentPurpleLight};
		cursor: inherit;
	}
`;

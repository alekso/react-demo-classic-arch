import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: start;
	gap: 0.2rem;

	&:has(input:focus) label {
		color: ${({ theme }) => theme.accentPurple};
	}
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const Input = styled.input`
	padding: 0.7rem 1rem;
	width: 100%;
	border-radius: 12px;
	border: 2px solid ${({ theme }) => theme.fontColor};
	background-color: transparent;
	color: inherit;

	&:focus {
		outline: none;
		border: 2px solid ${({ theme }) => theme.accentPurple};
		background-color: transparent;
	}
`;

export const Label = styled.label`
	font-size: 0.875rem;
	color: inherit;
`;

interface IconContainerProps {
	position?: "left" | "right" | "none";
	onClick?: (value: boolean) => void;
}

export const IconContainer = styled.div<IconContainerProps>`
	position: absolute;
	top: 0%;
	height: 100%;
	${({ position }) => position}: 1rem;
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.fontColor};
	cursor: pointer;

	svg {
		fill: ${({theme}) => theme.fontColor};
	}
`;

export const FormHeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	p {
		opacity: 70%;
	}
`;

export const FormError = styled.div`
	color: ${({ theme }) => theme.errorColor};
`;

export const LoginFormContainer = styled.div`
	text-align: center;
	width: 500px;
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
	z-index: 10;

	p {
		font-size: 1rem;
	}

	a {
		color: ${({ theme }) => theme.accentPurple};
	}

	@media screen and (max-width: 767px) {
		width: 90%;
	}
`;

export const SignUpFormContainer = styled(LoginFormContainer)``;

import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonContainer } from "./styles";

type ButtonProps = {
	children: ReactNode;
	isDisabled?: boolean;
	isFullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	isDisabled = false,
	isFullWidth = false,
	...otherProps
}: ButtonProps) {
	return (
		<ButtonContainer disabled={isDisabled} $isFullWidth={isFullWidth} {...otherProps}>
			{children}
		</ButtonContainer>
	);
}

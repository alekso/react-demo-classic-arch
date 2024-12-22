import { ReactNode } from "react";
import { Container } from "./styles";

interface ContentContainerProps {
	children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
	return <Container>{children}</Container>;
}

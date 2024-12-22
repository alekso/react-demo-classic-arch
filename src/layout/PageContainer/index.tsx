import { ReactNode } from "react";
import { Container, ContainerReverse } from "./styles";

export function PageContainer({ children }: { children: ReactNode }) {
	return <Container>{children}</Container>;
}

export function PageContainerReverse({ children }: { children: ReactNode }) {
	return <ContainerReverse>{children}</ContainerReverse>;
}
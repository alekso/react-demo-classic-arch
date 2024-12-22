import { ReactNode } from "react";
import { Column } from "./styles";

export default function ColumnContainer({ children }: { children: ReactNode }) {
	return <Column>{children}</Column>;
}

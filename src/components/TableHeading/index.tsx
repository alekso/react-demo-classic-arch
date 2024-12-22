import React from "react";
import { TableTitleContainer, TableInput, TableTitle } from "./styles";

export default function TableHeading({
    title,
	searchTerm,
	setSearchTerm,
}: {
    title: string;
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
	return (
		<TableTitleContainer>
			<TableTitle>{title}</TableTitle>
			<TableInput
				type="text"
				placeholder="Search users..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</TableTitleContainer>
	);
}

import { useState, useEffect } from "react";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import {
	TableContainer,
	Table as TableStyled,
	TableHeader,
	TableCell,
	TableBody,
	TableLink,
	DeleteButton,
} from "./styles";
import { User } from "../../types/User";
import { useThemeContext } from "../../context/ThemeContext";
import { FaRegTrashCan } from "react-icons/fa6";

const columnHelper = createColumnHelper<User>();

export default function Table({
	fetchedData,
	searchTerm
}: {
	fetchedData: User[];
	searchTerm: string
}) {
	const { isDarkTheme } = useThemeContext();
	const [data, setData] = useState<User[]>([]);

	useEffect(() => {
		setData(fetchedData);
	}, [fetchedData]);

	const columns = [
		columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
			id: "nameEmail",
			header: () => "Users",
			cell: (info) => info.renderValue(),
		}),
		columnHelper.accessor("age", {
			header: () => "Age",
			cell: (info) => info.renderValue(),
		}),
		columnHelper.accessor("phone", {
			header: () => "Phone",
			cell: (info) => info.renderValue(),
		}),
		columnHelper.accessor("email", {
			header: () => "Email Address",
			cell: (info) => (
				<TableLink $isDarkTheme={isDarkTheme} href={`mailto:${info.renderValue()}`}>
					{info.renderValue()}
				</TableLink>
			),
		}),
		columnHelper.accessor("lastLogin", {
			header: () => "Last Login time",
			cell: (info) => {
				const date = new Date(info.getValue());
				return (
					<>
						{date.getDate()}.{date.getMonth()}.{date.getFullYear()}
					</>
				);
			},
		}),
		columnHelper.accessor("location", {
			header: () => "Location",
			cell: (info) => info.renderValue(),
		}),
		columnHelper.accessor("spendAmount", {
			header: () => "Total Spend Amount",
			cell: (info) => info.renderValue(),
		}),
		columnHelper.display({
			id: "delete",
			header: () => "Actions",
			cell: ({ row }) => (
				<DeleteButton onClick={() => handleDelete(row.original.id)}>
					<FaRegTrashCan color={isDarkTheme ? "#fff" : "#000"} />
				</DeleteButton>
			),
		}),
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const handleDelete = (id: string) => {
		const updatedData = data.filter((user) => user.id !== id);
		setData(updatedData);
	};

	useEffect(() => {
		const filteredData = fetchedData.filter((user) =>
			`${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setData(filteredData);
	}, [searchTerm]);

	return (
		<TableContainer>
			
			<TableStyled $isDarkTheme={isDarkTheme}>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</tr>
					))}
				</TableBody>
			</TableStyled>
		</TableContainer>
	);
}

import styled from "styled-components";

export const TableContainer = styled.div`
	margin-bottom: 1rem;
	width: 100%;
	overflow-x: scroll;
`;

interface TableProps {
	$isDarkTheme?: boolean;
}

export const Table = styled.table<TableProps>`
	border-collapse: collapse;
	overflow: hidden;
	padding: 1.4rem;
	background-color: rgba(${({ $isDarkTheme }) => ($isDarkTheme ? "255,255,255" : "0,0,0")}, 0.1);
	border-radius: 12px;
	width: 100%;
`;

export const TableHeader = styled.thead`
	background-color: ${({ theme }) => theme.accentPurple};
	color: white;

	th {
		padding: 1rem;
		font-weight: 600;

		@media screen and (max-width: 767px) {
			font-size: 14px;
			padding: 0.2rem 0.5rem;
		}
	}
`;

export const TableCell = styled.td`
	padding: 15px 20px;
	text-align: left;
	border-bottom: 1px solid #bfbfbf;

	@media screen and (max-width: 767px) {
		font-size: .9rem;
		padding:  0.5rem .7rem;
	}
`;

export const TableBody = styled.tbody<TableProps>`
	tr:hover {
		background-color: rgba(
			${({ $isDarkTheme }) => ($isDarkTheme ? "255,255,255" : "0,0,0")},
			0.3
		);
	}

	tr:last-child td {
		border-bottom: none;
	}
`;

export const TableLink = styled.a<TableProps>`
	color: ${({ theme, $isDarkTheme }) =>
		$isDarkTheme ? theme.accentPurpleLight : theme.accentPurpleDark};
`;

export const DeleteButton = styled.button`
	padding: 8px 10px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.fontColor};
`;

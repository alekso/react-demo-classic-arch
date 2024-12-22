import Table from "../components/Table";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { User } from "../types/User";
import { index } from "../api/dashboardApi";
import { useAuth } from "../context/AuthContext";
import TableHeading from "../components/TableHeading";
import { Container as PageContainer } from "../layout/PageContainer/styles";

const Container = styled(PageContainer)`
	padding: 1rem 3rem 7rem;
	flex-direction: column;

	@media screen and (max-width: 767px) {
		padding: 1rem 2rem;
	}
`;

export default function Dashboard() {
	const { user } = useAuth();
	const [data, setData] = useState<User[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			const users = await index();
			const filteredUsers = users.filter((item) => item.id !== user?.id && item.role !== 'Admin');
			setData(filteredUsers);
		};
		fetchData();
	}, []);

	return (
		<Container>
			<TableHeading
				title="Users Table"
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<Table fetchedData={data} searchTerm={searchTerm} />
		</Container>
	);
}

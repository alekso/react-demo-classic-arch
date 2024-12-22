import styled from "styled-components";
import ColumnContainer from "../layout/ColumnContainer";
import ProfileCard from "../components/ProfileCard";
import BgImage from "../components/BgImage";
import { Container as PageContainer } from "../layout/PageContainer/styles";

const Container = styled(PageContainer)`
	padding: 1rem 3rem;

	@media screen and (max-width: 767px) {
		padding: 1rem 2rem;
	}
`;

export default function Profile() {
	return (
		<Container>
			<ColumnContainer>
				<ProfileCard />
			</ColumnContainer>

			<BgImage position="right" top="-20%" xValue="-20%" transform="scale(-1, -1)" />
		</Container>
	);
}

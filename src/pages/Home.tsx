import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { Paragraph } from "../CommonStyles";
import BgImage from "../components/BgImage";
import { PageContainer } from "../layout/PageContainer";
import ColumnContainer from "../layout/ColumnContainer";
import Feature from "../components/Feature";

const MainHeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export default function Home() {
	const navigate = useNavigate();

	return (
		<PageContainer>
			<ColumnContainer>
				<MainHeadingContainer>
					<Feature feature="Lorem ipsum" />
					<h1>Donec porta vel risus non vehicula</h1>
				</MainHeadingContainer>

				<Paragraph>
					Nullam pellentesque, dolor a lacinia ultricies, nisl ex laoreet libero, nec
					hendrerit arcu felis ut ex. Proin gravida venenatis mi, a ultricies tellus
					varius eget. Ut pellentesque lectus ut sollicitudin blandit. Ut rhoncus gravida
					dapibus. Etiam imperdiet mauris eu elit ullamcorper, eget ullamcorper nisl
					vehicula.
				</Paragraph>

				<Button onClick={() => navigate("/login")}>Let's start</Button>
			</ColumnContainer>

			<BgImage position="right" xValue="-10%" top="-30%" />
		</PageContainer>
	);
}

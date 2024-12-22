import styled from "styled-components";

export const Container = styled.div`
	padding: 7.5rem 3rem;
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 767px) {
		padding: 2rem 2rem 7rem;
	}
`;

export const ContainerReverse = styled(Container)`
	flex-direction: row-reverse;

	@media screen and (max-width: 767px) {
		padding: 4rem 2rem 7rem;
	}
`;
import styled from "styled-components";

interface ImageProps {
	position: "left" | "right";
    $xValue: string;
	top: string;
	transform?: string;
}

export const Image = styled.img<ImageProps>`
	position: absolute;
	z-index: 1;
    ${({position}) => position}: ${({$xValue}) => $xValue};
    top: ${({ top }) => top};
	transform: ${({ transform }) => transform || "none"};
`;
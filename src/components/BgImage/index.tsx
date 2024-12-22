import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import bgImageDark from "../../assets/BG Pattern.svg";
import bgImageLight from "../../assets/BG Pattern Light.svg";
import { Image } from "./styles";

interface BgImageProps {
	position: "left" | "right";
    xValue: string;
	top: string;
	transform?: string;
}

const BgImage: React.FC<BgImageProps> = ({ position, top, transform, xValue  }) => {
	const { isDarkTheme } = useThemeContext();

	return (
		<Image
			src={isDarkTheme ? bgImageDark : bgImageLight}
			position={position}
			top={top}
			transform={transform}
            $xValue={xValue}
		/>
	);
};

export default BgImage;

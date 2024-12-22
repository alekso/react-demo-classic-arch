import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { MdSunny, MdNightlight } from "react-icons/md";
import { TogglerButton } from "./styles";

const ThemeToggler: React.FC = () => {
	const { isDarkTheme, toggleTheme } = useThemeContext();

	return (
		<TogglerButton onClick={toggleTheme}>
			{isDarkTheme ? <MdNightlight /> : <MdSunny />}
		</TogglerButton>
	);
};

export default ThemeToggler;

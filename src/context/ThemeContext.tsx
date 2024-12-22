import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextValue {
	isDarkTheme: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useThemeContext = (): ThemeContextValue => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within a ThemeContextProvider");
	}
	return context;
};

interface ThemeContextProviderProps {
	children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const toggleTheme = () => {
		setIsDarkTheme((prev) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

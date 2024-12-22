import { Navigate, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import { useThemeContext } from "./context/ThemeContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import { User } from "./types/User";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/NavBar";
import Signup from "./pages/Signup";

const theme = {
	light: {
		backgroundColor: "rgb(248, 247, 250)", // #F8F7FA
		fontColor: "rgb(32, 34, 34)", // #202222
		accentPurple: "rgb(98, 0, 238)", // #6200EE
		accentPurpleDark: "rgb(55, 0, 179)", // #3700B3
		accentPurpleLight: "rgb(211, 185, 242)", // #BB86FC
		accentTeal: "rgb(3, 218, 197)", // #03DAC5
		errorColor: "rgb(184, 12, 9)", // #B80C09
	},
	dark: {
		backgroundColor: "rgb(32, 34, 34)", // #202222
		fontColor: "rgb(248, 247, 250)", // #F8F7FA
		accentPurple: "rgb(98, 0, 238)", // #6200EE
		accentPurpleDark: "rgb(55, 0, 179)", // #3700B3
		accentPurpleLight: "rgb(211, 185, 242)", // #BB86FC
		accentTeal: "rgb(3, 218, 197)", // #03DAC5
		errorColor: "rgb(184, 12, 9)", // #B80C09
	},
};

const ProtectedRoute = ({ user, children }: { user: User | null; children: any }) => {
	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

const PageTransition = ({ children }: { children: any }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20, x: -5 }}
			animate={{ opacity: 1, y: 0, x: 0 }}
			exit={{ opacity: 0, y: -20, x: 5 }}
			transition={{ duration: 0.75, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};

const SystemPageTransition = ({ children }: { children: any }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20, x: 5 }}
			animate={{ opacity: 1, y: 0, x: 0 }}
			exit={{ opacity: 0, y: -20, x: -5 }}
			transition={{ duration: 0.75, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};

function App() {
	const { isDarkTheme } = useThemeContext();
	const { user } = useAuth();
	const location = useLocation();
	return (
		<ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
			<GlobalStyles />
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route>
						<Route
							index
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>

						<Route
							path="login"
							element={
								<PageTransition>
									<Login />
								</PageTransition>
							}
						/>
						<Route
							path="register"
							element={
								<PageTransition>
									<Signup />
								</PageTransition>
							}
						/>

						<Route
							path="profile"
							element={
								<ProtectedRoute user={user}>
									<SystemPageTransition>
										<Profile />
									</SystemPageTransition>
								</ProtectedRoute>
							}
						/>
						<Route
							path="dashboard"
							element={
								<ProtectedRoute user={user}>
									<SystemPageTransition>
										<Dashboard />
									</SystemPageTransition>
								</ProtectedRoute>
							}
						/>
					</Route>
				</Routes>
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default App;

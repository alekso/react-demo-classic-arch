import { Link } from "react-router";
import ThemeToggler from "../ThemeToggler";
import { Menu, MenuContainer, NavContainer } from "./styles";
import { useAuth } from "../../context/AuthContext";
import LoggedInUserInfo from "../LoggedInUserInfo";
import Logo from "../Logo";

export default function Navbar() {
	const { user, logout } = useAuth();
	return (
		<NavContainer>
			<Logo />

			<MenuContainer>
				<Menu>
					<Link to="/">Home</Link>
					{user && <Link to="/dashboard">Dashboard</Link>}
					{user && <Link to="/profile">Profile</Link>}
					{user && <span onClick={logout}>Logout</span>}
					{!user && <Link to="/login">Login</Link>}
				</Menu>

				{
					user && <LoggedInUserInfo />
				}
				<ThemeToggler />
			</MenuContainer>
		</NavContainer>
	);
}

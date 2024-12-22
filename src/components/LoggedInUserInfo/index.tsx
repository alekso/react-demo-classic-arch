import { useAuth } from "../../context/AuthContext";
import { LoggedInUserContainer, UserEmail, UserFullname } from "./styles";

export default function LoggedInUserInfo() {
	const { user } = useAuth();

	return (
		<LoggedInUserContainer>
			<UserFullname>
				{user?.firstName} {user?.lastName}
			</UserFullname>
			<UserEmail>{user?.email}</UserEmail>
		</LoggedInUserContainer>
	);
}

import { User } from "../types/User";


export const index = async (): Promise<User[]> => {
	const response = await fetch("http://localhost:3000/users");

	if (!response.ok) throw new Error("Login failed");
	const data = await response.json();

	return data;
};

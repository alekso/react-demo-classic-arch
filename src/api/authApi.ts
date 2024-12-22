import { Credentials } from "../types/Credentials";
import { CreateUserData, User } from "../types/User";

export const login = async (credentials: Credentials): Promise<User> => {
	const response = await fetch("http://localhost:3000/users");
	if (!response.ok) throw new Error("Login failed");

	const data: User[] = await response.json();

	const user = data.find(
		(user) => user.username === credentials.username && user.password === credentials.password
	);

	if (!user) {
		throw new Error("Invalid username or password");
	}

	await fetch("http://localhost:3000/me", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	return user;
};

export const updateLoginDate = async (id: string): Promise<void> => {
	const date = new Date();

	await fetch(`http://localhost:3000/me/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			lastLogin: date.toISOString(),
		}),
	});

	await fetch(`http://localhost:3000/users/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			lastLogin: date.toISOString(),
		}),
	});
};

export const logout = async (id: string): Promise<void> => {
	await fetch(`http://localhost:3000/me/${id}`, {
		method: "DELETE",
	});
};

export const getCurrentUser = async (): Promise<User[]> => {
	const response = await fetch("http://localhost:3000/me");
	if (!response.ok) throw new Error("Not authenticated");
	return response.json();
};

export const createUser = async (data: CreateUserData): Promise<boolean> => {
	const response = await fetch("http://localhost:3000/users");
	const users: User[] = await response.json();

	if (users.find((user) => user.email === data.email || user.username === data.username))
		throw new Error("User already exist.");

	const createResponse = await fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...data,
			age: 0,
			phone: "",
			lastLogin: "",
			location: "",
			role: "User",
			spendAmount: 0,
		}),
	});

	if (!createResponse.ok) throw new Error("User is not created. Please try again later.");

	return true;
};

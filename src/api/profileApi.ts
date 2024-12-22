import { User } from "../types/User";

export const update = async (user: User) => {
	const response = await fetch(`http://localhost:3000/me/${user.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
    
	const usersResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
		headers: {
            "Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
    
	if (!usersResponse.ok || !response.ok) throw new Error("Profile update failed");

    return await response.json()
};

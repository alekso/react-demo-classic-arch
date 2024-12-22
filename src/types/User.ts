export interface User {
	id: string ;
	firstName: string;
	lastName: string;
	age: string;
	phone: string;
	email: string;
	lastLogin: string;
	location: string;
	role: string;
	username: string;
	password: string;
	spendAmount: number;
}

export interface CreateUserData {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
}

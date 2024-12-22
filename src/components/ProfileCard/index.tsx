import { CardContainer, CardImage } from "./styles";
import { useAuth } from "../../context/AuthContext";
import Form from "../Form";
import { useEffect, useState } from "react";
import { update } from "../../api/profileApi";

export default function ProfileCard() {
	const { user, refetchUser } = useAuth();
	const [formData, setFormData] = useState({
		id: "",
		firstName: "",
		lastName: "",
		age: "",
		phone: "",
		email: "",
		location: "",
	});

	useEffect(() => {

		if (user) {
			setFormData({
				id: user.id || '',
				firstName: user.firstName || "",
				lastName: user.lastName || "",
				age: user.age || "",
				phone: user.phone || "",
				email: user.email || "",
				location: user.location || "",
			});
		}
	}, [user]);

	const handleChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (data: { [key: string]: string }) => {
		try {
			if (!user || formData.id == "") {
				console.error("User is null. Cannot update.");
				return;
			}
			const updatedUser = {
				...user,
				...data,
			};

			await update(updatedUser);
			refetchUser();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<CardContainer>
			<CardImage />
			<Form onSubmit={handleSubmit} onChange={handleChange} formData={formData}>
				<Form.TextField name="firstName" label="First name" placeholder="Enter your first name"/>
				<Form.TextField name="lastName" label="First name" placeholder="Enter your last name"/>
				<Form.TextField name="email" label="Email address" type="email"placeholder="Enter your email address" />
				<Form.TextField name="phone" label="Phone number"  placeholder="Enter your phone number (ex. 123 456 789)"/>
				<Form.TextField name="location" label="Location"  placeholder="Enter your address (ex. City Name, Country)"/>
				<Form.TextField name="age" label="Age" placeholder="Enter your age"/>

				<Form.SubmitButton>Update</Form.SubmitButton>
			</Form>
		</CardContainer>
	);
}

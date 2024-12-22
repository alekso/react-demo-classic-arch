import { useState } from "react";
import ColumnContainer from "../layout/ColumnContainer";
import BgImage from "../components/BgImage";
import { FormError, FormHeadingContainer, LoginFormContainer } from "../components/Form/styles";
import Form from "../components/Form";
import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import { createUser } from "../api/authApi";
import { Container as PageContainer } from "../layout/PageContainer/styles";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignupPageContainer = styled(PageContainer)`
	padding: 2rem 3rem;
`;

const initialFormData = {
	firstName: "",
	lastName: "",
	email: "",
	username: "",
	password: "",
};

export default function Signup() {
	const [error, setError] = useState<Error | null>();
	const [formData, setFormData] = useState(initialFormData);
	const [visiblePwd, setVisiblePwd] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleSubmit = async (data: { [key: string]: string }) => {
		try {
			if (!data?.username || !data?.password || !data?.email) {
				setError(new Error("Please fill in the form"));
				return;
			}

			setError(null);

			const response = await createUser({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				username: data.username,
				password: data.password,
			});

			if (response) {
				navigate("/login");
				setFormData(initialFormData);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error("Login failed:", error.message);
				setError(error);
			} else {
				setError(new Error("Ooops ... Something went wrong. Please try again later."));
			}
		}
	};

	const handleChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<SignupPageContainer>
			<BgImage position="right" xValue="-15%" top="-45%" transform="scale(-1, 1)" />
			<ColumnContainer>
				<LoginFormContainer>
					<FormHeadingContainer>
						<h5>Create an account</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</FormHeadingContainer>

					<Form onChange={handleChange} onSubmit={handleSubmit} formData={formData}>
						{error && <FormError>{error?.toString()}</FormError>}
						<Form.TextField name="firstName" label="First Name" />
						<Form.TextField name="lastName" label="Last Name" />
						<Form.TextField name="email" label="Email" type="email" required/>
						<Form.TextField name="username" label="Username" required/>
						<Form.TextField
							name="password"
							label="Password"
							type={visiblePwd ? "text" : "password"}
							icon={visiblePwd ? <FaEye /> : <FaEyeSlash />}
							iconPosition="right"
							changeType={() => setVisiblePwd((prev) => !prev)}
							required
						/>
						<Form.SubmitButton>Register</Form.SubmitButton>
						<p>
							Already have an account? <Link to={"/login"}>Login</Link>
						</p>
					</Form>
				</LoginFormContainer>
			</ColumnContainer>
		</SignupPageContainer>
	);
}

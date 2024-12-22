import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Form from "../components/Form";
import ColumnContainer from "../layout/ColumnContainer";
import BgImage from "../components/BgImage";
import { FormError, FormHeadingContainer, LoginFormContainer } from "../components/Form/styles";
import { updateLoginDate } from "../api/authApi";
import { PageContainerReverse } from "../layout/PageContainer";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {
	const { user, login, error, setError } = useAuth();
	const [visiblePwd, setVisiblePwd] = useState<boolean>(false);
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			updateLoginDate(user?.id);
			navigate("/dashboard");
		}
	}, [user, navigate]);

	const handleSubmit = async (data: { [key: string]: string }) => {
		try {
			if (!data?.username || !data?.password) {
				setError(new Error("Please fill in the form"));
				return;
			}

			setError(null);

			await login({
				username: data?.username,
				password: data?.password,
			});
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
		<PageContainerReverse>
			<BgImage position="left" xValue="-15%" top="-40%" transform="scale(-1, -1)" />
			<ColumnContainer>
				<LoginFormContainer>
					<FormHeadingContainer>
						<h5>Welcome Back!</h5>
						<p>Login to your account</p>
					</FormHeadingContainer>
					<Form onSubmit={handleSubmit} formData={formData} onChange={handleChange}>
						{error && <FormError>{error?.toString()}</FormError>}
						<Form.TextField name="username" label="Username" />
						<Form.TextField
							name="password"
							label="Password"
							type={visiblePwd ? "text" : "password"}
							icon={visiblePwd ? <FaEye /> : <FaEyeSlash />}
							iconPosition="right"
							changeType={() => setVisiblePwd((prev) => !prev)}
						/>
						<Form.SubmitButton>Submit</Form.SubmitButton>
					</Form>
					<p>
						Don't have an account? <Link to={"/register"}> Register now!</Link>
					</p>
				</LoginFormContainer>
			</ColumnContainer>
		</PageContainerReverse>
	);
}

import React, {
	createContext,
	useContext,
	ReactNode,
	ChangeEvent,
	FormEvent,
	ReactEventHandler,
} from "react";
import { FormContainer, IconContainer, Input, InputContainer, InputWrapper, Label } from "./styles";
import Button from "../Button";

interface FormData {
	[key: string]: any;
}

interface FormContextType {
	formData: FormData;
	handleChange: (name: string, value: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProps {
	children: ReactNode;
	formData: FormData;
	onChange: (name: string, value: string) => void;
	onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> & {
	TextField: React.FC<TextFieldProps>;
	SubmitButton: React.FC<SubmitButtonProps>;
} = ({ children, formData, onChange, onSubmit }) => {
	const handleChange = (name: string, value: string) => {
		onChange(name, value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit(formData);
	};

	return (
		<FormContainer onSubmit={handleSubmit}>
			<FormContext.Provider value={{ formData, handleChange }}>
				{children}
			</FormContext.Provider>
		</FormContainer>
	);
};

interface TextFieldProps {
	name: string;
	label?: string;
	type?: string;
	placeholder?: string;
	icon?: ReactNode;
	iconPosition?: "left" | "right" | "none";
	changeType?: (value: boolean) => void;
	required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
	name,
	label,
	type = "text",
	placeholder,
	icon,
	iconPosition,
	changeType,
	required = false
}) => {
	const context = useContext(FormContext);

	if (!context) {
		throw new Error("TextField must be used within a Form");
	}

	const { formData, handleChange } = context;

	const value = formData[name] !== undefined ? String(formData[name]) : "";

	return (
		<InputContainer>
			{label && <Label htmlFor={name}>{label}</Label>}
			<InputWrapper>
				{icon && iconPosition !== "none" && changeType && (
					<IconContainer position={iconPosition} onClick={changeType}>{icon}</IconContainer>
				)}
				<Input
					id={name}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleChange(name, e.target.value)
					}
					required={required}
				/>
			</InputWrapper>
		</InputContainer>
	);
};

interface SubmitButtonProps {
	children: ReactNode;
	isDisabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, isDisabled }) => {
	return (
		<Button type="submit" isFullWidth={true} disabled={isDisabled}>
			{children}
		</Button>
	);
};

Form.TextField = TextField;
Form.SubmitButton = SubmitButton;

export default Form;

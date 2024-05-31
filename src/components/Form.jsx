import React, { useState } from "react";
import styled from "styled-components";

const Form = ({ onSubmit }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		const newValue = {
			id: Math.floor(Math.random() * 2000),
			email,
			password,
			password2,
			completed: false,
		};
		onSubmit(newValue);
		setEmail("");
		setPassword("");
		setPassword2("");
	};

	return (
		<FormContainer>
			<StyledForm onSubmit={submitHandler}>
				<Label htmlFor="email">Email:</Label>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					id="email"
					value={email}
				/>
				<Label htmlFor="password">Password:</Label>
				<Input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					id="password"
				/>
				<Label htmlFor="password2z">Confirm Password:</Label>
				<Input
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					type="password"
					id="password2z"
				/>
				<Button disabled={password2.length > 8} type="submit">
					Sign Up
				</Button>
			</StyledForm>
		</FormContainer>
	);
};

export default Form;

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f0f0f0;
`;

const StyledForm = styled.form`
	background: white;
	width: 25rem;
	height: 22em;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	margin-bottom: 5px;
	font-weight: bold;
`;

const Input = styled.input`
	margin-bottom: 15px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 16px;
`;

const Button = styled.button`
	padding: 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: #0056b3;
	}
`;

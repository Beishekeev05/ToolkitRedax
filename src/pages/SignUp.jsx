import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerValue = () => {
		localStorage.clear();
		dispatch(login());
		navigate("/");
	};
	return (
		<div>
			<Form onSubmit={handlerValue} />
		</div>
	);
};

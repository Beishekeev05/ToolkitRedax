import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo } from "../store/slice/todoSlice";
import styled from "styled-components";

const MainPage = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.todo.todos);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("todo")) || [];
		dispatch(getTodo(data));
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	return (
		<Container>
			<ul>
				{selector.map((item, index) => (
					<li key={item.id || index}>
						<Text>{item.text}</Text>
						<DeleteButton onClick={() => handleDelete(item.id)}>
							Delete
						</DeleteButton>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default MainPage;

const Container = styled.div`
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	max-width: 600px;
	margin: 0 auto;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
	font-size: 18px;
	color: #333;
	margin: 0 0 10px 0;
`;

const DeleteButton = styled.button`
	background-color: #ff4d4d;
	color: white;
	border: none;
	padding: 8px 12px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: #ff3333;
	}
`;

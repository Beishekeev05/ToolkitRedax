import React, { useState } from "react";
import { Button, TextField, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/todoSlice";

const CreatePage = () => {
	const [text, setTodoText] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text.trim()) return;
		const newValue = {
			id: Math.floor(Math.random() * 9999),
			text,
			completed: false,
		};
		dispatch(addTodo(newValue));
		navigate(-1);
		setTodoText("");
	};

	return (
		<Paper style={{ padding: 16, margin: "10px auto", width: "80%" }}>
			<form onSubmit={handleSubmit}>
				<Grid container alignItems="flex-start" spacing={2}>
					<Grid item xs={10}>
						<TextField
							autoFocus
							fullWidth
							label="Enter your todo"
							variant="outlined"
							value={text}
							onChange={(e) => setTodoText(e.target.value)}
						/>
					</Grid>
					<Grid item xs={2}>
						<Button type="submit" variant="contained" color="primary">
							Add
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default CreatePage;

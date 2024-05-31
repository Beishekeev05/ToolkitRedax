import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
			localStorage.setItem("todo", JSON.stringify(state.todos));
		},
		deleteTodo(state, action) {
			const idToDelete = action.payload;
			state.todos = state.todos.filter((item) => item.id !== idToDelete);
			localStorage.setItem("todo", JSON.stringify(state.todos));
		},
		getTodo(state, { payload }) {
			state.todos = payload;
		},
	},
});

export const { addTodo, deleteTodo, getTodo } = todoSlice.actions;
export default todoSlice.reducer;

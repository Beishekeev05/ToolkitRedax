import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import todoSlice from "./slice/todoSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		todo: todoSlice,
	},
});

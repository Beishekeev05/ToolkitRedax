import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthentification: localStorage.getItem("auth") === "true" || false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state) {
			localStorage.setItem("auth", "true"), (state.isAuthentification = true);
		},
		logout(state) {
			localStorage.setItem("auth", "false"), (state.isAuthentification = false);
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

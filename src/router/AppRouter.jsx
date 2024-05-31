import React from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import MainPage from "../pages/MainPage";
import { useSelector } from "react-redux";
import { SignUp } from "../pages/SignUp";
import CreatePage from "../pages/CreatePage";
const AppRouter = () => {
	const { isAuthentification } = useSelector((state) => state.auth);
	console.log(isAuthentification);
	const router = createBrowserRouter([
		{
			path: "/",
			element: isAuthentification ? <BaseLayout /> : <Navigate to="signUp" />,
			children: [
				{
					index: true,
					element: <Navigate to={"main"} replace />,
				},
				{
					path: "main",
					element: <MainPage />,
				},
				{
					path: "todo",
					element: <CreatePage />,
				},
			],
		},
		{
			path: "signUp",
			element: isAuthentification ? <Navigate to={"/"} /> : <SignUp />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;

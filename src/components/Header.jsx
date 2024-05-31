import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../store/slice/authSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logoutFn = () => {
		const conf = confirm(
			"Вы точна хотите выйти прям точна или передумали скажите честно лучше передумайте"
		);
		if (conf) {
			localStorage.clear();
			navigate("/signUp");
			dispatch(logout());
		}
	};
	return (
		<StyledHeader>
			<Title>My App</Title>
			<nav>
				<StyledNavLink onClick={logoutFn}>Loagout</StyledNavLink>
				<StyledNavLink to={"/main"}>Main</StyledNavLink>
				<StyledNavLink to={"/todo"}>Todo List</StyledNavLink>
			</nav>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	width: 100%;
	height: 5em;
	border: 1px solid black;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const StyledNavLink = styled(NavLink)`
	margin: 1em;
	text-decoration: none;
	color: #fff;
	font-weight: 800;

	&.active {
		color: #ff6347; /* Tomato color for active link */
	}

	&:hover {
		color: #ff6347;
	}
`;
const Title = styled.h1`
	font-weight: bold;
	margin-left: 2em;
	color: #fff;
`;

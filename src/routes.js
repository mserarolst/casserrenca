import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "./layouts/admin";
import PublicLayout from "./layouts/public";
import HomeAdmin from "./views/admin/home/HomeAdmin";
import LoginView from "./views/admin/login/LoginView";
import RegisterView from "./views/admin/login/RegisterView";
import Home from "./views/public/Home";

const routes = (logged, isMobile, hideMenu, setHideMenu) => [
	{
		path: "/admin",
		element: logged ? <AdminLayout /> : <Navigate to="/login" />,
		children: [
			{
				path: "/admin/dash",
				element: <HomeAdmin title="Home" />,
			},
		],
	},
	{
		path: "/",
		element: <PublicLayout isMobile={isMobile} hideMenu={hideMenu} setHideMenu={setHideMenu}/>,
		children: [
			{
				path: "/login",
				element: !logged ? (
					<LoginView />
				) : (
					<Navigate to="/admin/dash" />
				),
			},
			{
				path: "/registre",
				element: !logged ? (
					<RegisterView />
				) : (
					<Navigate to="/admin/dash" />
				),
			},
			{ path: "/", element: <Home /> },
		],
	},
];

export default routes;

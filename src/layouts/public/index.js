import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import TopBarPublic from "./TopBarPublic";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		overflow: "hidden",
		width: "100%",
		backgroundColor: "black",
	},
	wrapper: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
	},
	contentContainer: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
	},
	content: {
		flex: "1 1 auto",
		height: "100%",
		overflow: "auto",
	},
}));

const DashboardLayout = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<TopBarPublic isMobile={props.isMobile} hideMenu={props.hideMenu} setHideMenu={props.setHideMenu}/>
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>
						<Outlet />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default DashboardLayout;

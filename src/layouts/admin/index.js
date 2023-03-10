import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import TopBarAdmin from "./TopBarAdmin";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.color.background_dark,
		display: "flex",
		height: "100%",
		overflow: "hidden",
		width: "100%",
	},
	wrapper: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
		paddingTop: 75,
		[theme.breakpoints.up("lg")]: {
			paddingLeft: 256,
		},
	},
	contentContainer: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
	},
	content: {
		flex: "1 1 auto",
		height: "100%",
		overflow: "hidden",
	},
	"@global": {
		html: {
			// overflow: "hidden",
		},
	},
}));

const AdminLayout = () => {
	const classes = useStyles();
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<div className={classes.root}>
			<TopBarAdmin onMobileNavOpen={() => setMobileNavOpen(true)} />
			<NavBar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
			/>
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;

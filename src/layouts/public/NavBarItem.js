import React from "react";
import PropTypes from "prop-types";
import navBarStyle from "./NavBarStyle";
import { Typography, Link as LinkTo } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

const NavBarItem = ({ className, to, title, ...rest }) => {
	const classes = navBarStyle();

	return (
		<LinkTo
			className={classes.button}
			to={{
				pathname: to,
			}}
			underline="none"
			component={RouterLink}
		>
			<Typography variant="link" className={classes.title}>
				{title}
			</Typography>
		</LinkTo>
	);
};

NavBarItem.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.elementType,
	title: PropTypes.string,
};

export default NavBarItem;

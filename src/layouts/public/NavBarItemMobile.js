import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import navBarStyle from "./NavBarStyle";
import { Typography, Link as LinkTo } from "@mui/material";

const NavBarItemMobile = ({ className, to, title, closeMenu, ...rest }) => {
	const classes = navBarStyle();

	const onClick = () => {
		closeMenu();
	};

	console.log(to);
	return (
		<LinkTo
			className={classes.buttonMobile}
			to={{
				pathname: to,
			}}
			underline="none"
			component={RouterLink}
			onClick={onClick}
		>
			<Typography variant="body1">{title}</Typography>
		</LinkTo>
	);
};

NavBarItemMobile.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.elementType,
	title: PropTypes.string,
};

export default NavBarItemMobile;

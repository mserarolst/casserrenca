import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Box, Button, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	item: {
		display: "flex",
		paddingTop: 0,
		paddingBottom: 0,
		transition: "0.5s",
	},
	button: {
		marginTop: 5,
		marginBottom: 5,
		marginRight: 10,
		marginLeft: 10,
		borderRadius: 10,
		justifyContent: "flex-start",
		alignItems: "center",
		letterSpacing: 0,
		transition: "0.5s",
		padding: 10,
		textTransform: "none",
		display: "flex",
		width: "100%",
		textDecoration: "none",
		"&:hover": {
			backgroundColor: theme.color.mig + "AA" + " !important",
			color: "white",
			"& $icon": {
				color: "white",
			},
			"& $title": {
				color: "white",
			},
		},
		"&.active": {
			background: theme.color.primary,
			color: "white",
			boxShadow: "0px 0px 8px 0px " + theme.color.primary,

			"& $title": {
				color: "white",
			},
			"& $icon": {
				color: "white",
			},
			"&:hover": {
				backgroundColor: theme.color.primary,
				color: "white",
				"& $icon": {
					color: "white",
				},
			},
		},
		"& $icon": {
			color: theme.color.primary,
		},
	},
	icon: {
		color: theme.palette.text.secondary,
		marginRight: theme.spacing(1),
	},
	title: {
		color: theme.color.primary,
	},
}));

const NavBarItem = ({
	className,
	href,
	icon: Icon,
	title,
	onClose,
	...rest
}) => {
	const classes = useStyles();

	return (
		<ListItem
			className={classes.item}
			disableGutters
			{...rest}
			sx={{ padding: 0 }}
		>
			<Box
				className={classes.button}
				component={RouterLink}
				to={href}
				onClick={onClose}
				color="secondary"
			>
				<Icon className={classes.icon} size="20" />

				<Typography variant="menu" className={classes.title}>
					{title}
				</Typography>
			</Box>
		</ListItem>
	);
};

NavBarItem.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.elementType,
	title: PropTypes.string,
};

export default NavBarItem;

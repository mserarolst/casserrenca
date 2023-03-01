import React, { useEffect, useState } from "react";
import { Box, Fade, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Person } from "@mui/icons-material";

const Title = ({ children, button, icon }) => {
	const classes = useStyles();

	return (
		<Box className={classes.main}>
			<Box display="flex" alignItems={"flex-end"}>
				<Box>{icon}</Box>

				<Typography variant="h4" color={"white"}>
					{children}
				</Typography>
			</Box>
			<Box>{button}</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	main: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 25,
		paddingRight: 25,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		background: theme.color.gradient,
		position: "fixed",
		width: "-webkit-fill-available",
		zIndex: 1000,
		// borderRadius: 10,
	},
}));

export default Title;

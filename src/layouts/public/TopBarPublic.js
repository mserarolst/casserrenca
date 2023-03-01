import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	AppBar,
	Box,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
	main: {
		width: "100%",
		zIndex: 100,
		paddingBottom: 20,
		position: "fixed",
	},
	nav: {
		transition: "0.2s",
	},
	navBar: {
		backgroundColor: "white !important",
		boxShadow: "none",
		position:"relative",
	},
	navBarDown: {
		backgroundColor: "transparent",
		boxShadow: "none",
		maskSize: "cover",
		maskRepeat: "no-repeat",
		maskPosition: "center",
	},
	logo: {
		fill: theme.color.primary,
	},
	maskTop: {
		// backgroundImage: `url(${bg})`,
		width: "100%",
	},
}));

const TopBarPublic = ({ hideMenu, setHideMenu, isMobile, className, ...rest }) => {
	const classes = useStyles();
	const navigate = useNavigate();

	const items = [
		{title: 'La Casserrenca 2023', link: 'la-cursa'},
		{title: 'Edicions anteriors', link: 'anteriors'},
		{title: 'Botiga', link: 'botiga'},
		{title: 'Reglament', link: 'reglament'},
		{title: 'Galeria', link: 'galeria'},
	]

	const [open, setOpen] = useState(false);


	return (
		<Box className={classes.main}>
			<Menu items={items} open={open} f_setOpen={setOpen}/>
		</Box>
	);
};

TopBarPublic.propTypes = {
	className: PropTypes.string,
	onMobileNavOpen: PropTypes.func,
};

export default TopBarPublic;

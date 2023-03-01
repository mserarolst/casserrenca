import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
	AppBar,
	Avatar,
	Box,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Input, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import { ReactComponent as Icon } from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiToolbar-root": {
			// boxShadow: '#00000020 1px 3px 20px 1px ',
			// backgroundColor: "white",
			borderBottom: "1px solid #e6e6e7",
			backgroundColor: theme.color.gradient,
		},
	},
	white: {
		"& .MuiToolbar-root": {
			backgroundColor: "white",
		},
	},
	color: {
		"& .MuiToolbar-root": {
			backgroundColor: theme.palette.background.main,
		},
	},
	logo: {
		height: "70px !important",
		"& .cls-1": {
			fill: theme.palette.background.color,
		},
	},
}));

const TopBarAdmin = ({ className, onMobileNavOpen, ...rest }) => {
	const classes = useStyles();
	let navigate = useNavigate();
	const [user, setUser] = useState();
	const matches = useMediaQuery("(min-width:960px)");

	useEffect(() => {
		const u = localStorage.getItem("user");
		setUser(JSON.parse(u));
	}, []);

	const logOut = () => {
		// logout();
		localStorage.removeItem("user");
		localStorage.removeItem("isLoggedIn");
		navigate("/");
	};

	return (
		<AppBar
			className={clsx(
				classes.root,
				matches ? classes.white : classes.color
			)}
			elevation={0}
			{...rest}
		>
			<Toolbar>
				<RouterLink to="/">
					<Icon
						alt="Logo Match Maker"
						className={classes.logo}
						width={80}
					/>
				</RouterLink>
				<Box flexGrow={1} />

				<Hidden>
					<Hidden mdDown>
						<Box
							display="flex"
							alignItems={"center"}
							justifyContent="space-between"
						>
							<Box m={2} display="flex" alignItems={"center"}>
								<Avatar sx={{ width: 30, height: 30 }} />
								<Box textAlign={"left"} ml={2}>
									<Typography variant="menu">
										{user?.name}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Hidden>
					<IconButton onClick={() => logOut()}>
						<Input color="primary" />
					</IconButton>
				</Hidden>
				<Hidden mdUp>
					<IconButton
						color="inherit"
						onClick={() => onMobileNavOpen()}
					>
						<Menu style={{ fill: theme.palette.text.secondary }} />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

TopBarAdmin.propTypes = {
	className: PropTypes.string,
	onMobileNavOpen: PropTypes.func,
};

export default TopBarAdmin;
